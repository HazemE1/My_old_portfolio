import { onCall } from "firebase-functions/v2/https";
import * as nodemailer from "nodemailer";

exports.contactForm = onCall({ region: "europe-west3" }, (request) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.mail.me.com", // e.g., 'gmail', 'outlook', or use your SMTP server settings
    port: 587,
    secure: true,
    auth: {
      user: "hazem.elkhalil@icloud.com", // Your email address
      pass: "gnmk-lltk-froc-xyob", // Your email password or app-specific password
    },
  });

  const mailOptions = {
    from: "<Hazem Elkhalil> hello@hazemelkhalil.com",
    bcc: "hello@hazemelkhalil.com",
    replyTo: "contakta@hazemelkhalil.com",
    to: "h.elkhalil@hotmail.com",
    subject: "EkTechSolutions - Message Recived",
    body: generateMail(),
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
});

function generateMail(message: string, mail: string, name: string) {
  return `
    <p>
      <strong>name:</strong>
      <br/>
      ${name}
      <br/>
      <br/>
      <strong>mail:</strong>
      <br/>
      ${mail}
      <br/>
      <br/>
      <strong>message:</strong>
      <br/>
      ${message}
    </p>
  `;
}
