const functions = require("firebase-functions");
const { SESv2Client, SendEmailCommand } = require("@aws-sdk/client-sesv2");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

// --- Configuración Inicial ---
// Inicializa el cliente de SES con las credenciales seguras
const sesClient = new SESv2Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Carga y compila la plantilla HTML al iniciar la función
const source = fs.readFileSync(path.join(__dirname, "welcome.html"), "utf8");
const template = handlebars.compile(source);

// --- La Cloud Function ---
exports.sendWelcomeEmail = functions.firestore
  .document("usuarios/{userId}") // Escucha la colección 'usuarios'
  .onCreate(async (snap, context) => {
    const userData = snap.data();
    const userEmail = userData.email;
    const userName = userData.nombre || "Amigo de las Mascotas"; // Nombre por defecto

    // Prepara los datos que se insertarán en la plantilla
    const templateData = {
      userName: userName,
      currentYear: new Date().getFullYear(),
    };

    // Genera el HTML final con los datos del usuario
    const finalHtml = template(templateData);

    // Define los parámetros para el envío del correo
    const params = {
      FromEmailAddress: '"PetConnect" <hola@petconnect.co>', // TU EMAIL VERIFICADO EN SES
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