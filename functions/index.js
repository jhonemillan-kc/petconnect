// functions/index.js
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { defineSecret } = require("firebase-functions/params");
const sgMail = require("@sendgrid/mail");

const sendgridApiKey = defineSecret("SENDGRID_API_KEY");

exports.sendWelcomeEmailToLead = onDocumentCreated(
  {
    document: "leads/{leadId}",
    database: "contacts",
    secrets: [sendgridApiKey],
    region: "us-central1",
  },
  async (event) => {
    if (!event.data) {
      console.log("No data found in the event.");
      return null;
    }

    sgMail.setApiKey(sendgridApiKey.value());
    const snapshot = event.data;
    const leadData = snapshot.data();
    const leadRef = snapshot.ref;

    const recipientEmail = leadData.email;
    const userName = leadData.name || "New User";

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
      templateId: "d-b1b0dc9121c14159a6dfae2fc966a5ca",
      subject: 'Gracias por unirte a la familia Pets Connect! 🐾',
      dynamicTemplateData: {
        userName: userName,
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
