// functions/index.js
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { defineSecret } = require("firebase-functions/params");
const sgMail = require("@sendgrid/mail");

const sendgridApiKey = defineSecret("SENDGRID_API_KEY");

const TEMPLATE_IDS = {
  GOOD: "d-b7108b901c5e4aebb009da02155a4af2",
  MAYBE: "d-351c5b1ea3c0457392dfee24a62ad855",
  INVALID: "d-6d170c5e27e84969a070e6b8c530b631",
};

exports.sendWelcomeEmailToLead = onDocumentCreated(
  {
    document: "leads/{leadId}",
    database: "contacts",
    secrets: [sendgridApiKey],
    region: "us-central1",
  },
  async (event) => {

    let template = TEMPLATE_IDS.GOOD;

    if (!event.data) {
      console.log("No data found in the event.");
      return null;
    }



    sgMail.setApiKey(sendgridApiKey.value());
    const snapshot = event.data;
    const leadData = snapshot.data();
    const leadRef = snapshot.ref;

    //validations

    if (!leadData.adopter) {
      console.warn("Lead document has no adopter. Skipping email send.");
      return null;
    }

    if ( leadData.adopter.age < leadData.pet.filters.age || leadData.adopter.nationality !== leadData.pet.filters.nationality) {
      template = TEMPLATE_IDS.INVALID;
    }


    const recipientEmail = leadData.adopter.email;
    const userName = leadData.adopter.name || "New User";

    if (!recipientEmail) {
      console.warn("Lead document has no email address. Skipping email send.");
      await leadRef.update({
        emailSendStatus: "skipped",
        emailErrorMessage: "No recipient email",
      });
      return null;
    }

    if (leadData.emailSent === true) {
      console.log(`Email already sent for lead ${recipientEmail}. Skipping.`);
      return null;
    }

    console.log(`Attempting to send welcome email to ${recipientEmail}...`);

    const msg = {
      to: {
        email: recipientEmail,
        name: userName,
      },
      from: {
        email: "ceo@petsconnect.co",
        name: "Pets Connect",
      },
      templateId: template,
      subject: 'Gracias por unirte a la familia Pets Connect! 🐾',
      dynamicTemplateData: {
        userName: userName,
        petName: leadData.pet.name,
        currentYear: new Date().getFullYear(),
      },
    };

    try {
      await sgMail.send(msg);
      console.log(
        `Correo de bienvenida enviado exitosamente a ${recipientEmail}`
      );
      await leadRef.update({
        emailSent: true
      });
      console.log(`Lead ${recipientEmail} marked as emailSent.`);
      return;
    } catch (error) {
      console.error(`Error sending email to ${recipientEmail}:`, error);
      await leadRef.update({
        emailSent: false,
        emailSendStatus: "failed",
        emailErrorMessage: error.message
      });
      throw new Error(
        `Failed to send welcome email to ${recipientEmail}: ${error.message}`
      );
    }
  }
);
