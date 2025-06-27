const functions = require('firebase-functions/v1');
const admin = require("firebase-admin");
const { SESv2Client, SendEmailCommand } = require("@aws-sdk/client-sesv2");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

// Initialize Firebase Admin
admin.initializeApp();



// Carga y compila la plantilla HTML al iniciar la función
const source = fs.readFileSync(path.join(__dirname, "welcome.html"), "utf8");
const template = handlebars.compile(source);

// --- La Cloud Function ---
exports.sendWelcomeEmail = functions
  .firestore
  .document("leads/{leadId}")
  .onCreate(async (snap, context) => {
    // Initialize SES client at runtime
    const sesClient = new SESv2Client({
      region: functions.config().aws.region,
      credentials: {
        accessKeyId: functions.config().aws.key,
        secretAccessKey: functions.config().aws.secret
      },
    });
  
  const userData = snap.data();
  const userEmail = userData.email;
    const userName = userData.name || "Amigo de las Mascotas"; // Nombre por defecto

    // Prepara los datos que se insertarán en la plantilla
    const templateData = {
      userName: userName,
      currentYear: new Date().getFullYear(),
    };

    // Genera el HTML final con los datos del usuario
    const finalHtml = template(templateData);

    // Define los parámetros para el envío del correo
    const params = {
      FromEmailAddress: '"PetConnect" <ceo@petsconnect.co>', // TU EMAIL VERIFICADO EN SES
      Destination: {
        ToAddresses: [userEmail],
      },
      Content: {
        Simple: {
          Subject: {
            Data: "¡Gracias por unirte a la familia PetConnect! 🐾",
            Charset: "UTF-8",
          },
          Body: {
            Html: {
              Data: finalHtml,
              Charset: "UTF-8",
            },
            Text: {
              Data: `¡Hola ${userName}! Gracias por registrarte en PetConnect. Nos pondremos en contacto contigo pronto.`,
              Charset: "UTF-8",
            },
          },
        },
      },
    };

    // Envía el correo usando el comando de SES
    try {
      const command = new SendEmailCommand(params);
      await sesClient.send(command);
      console.log(`Correo de bienvenida enviado exitosamente a ${userEmail}`);
    } catch (error) {
      console.error("Error al enviar correo con SES:", error);
    }
  });