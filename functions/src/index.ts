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
    from: "<Ek Tech Solutions> hello@hazemelkhalil.com",
    bcc: "hello@hazemelkhalil.com",
    replyTo: "kontakta@hazemelkhalil.com",
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

function generateMail() {
  return (
    "" +
    '  <body style="margin: 0;padding:0; height: 100vh; display: flex;flex-direction: column; justify-content: space-between;">' +
    "" +
    "" +
    "    <section" +
    '      style="' +
    "        background: #007bff;" +
    "        color: #fff;" +
    "        text-align: center;" +
    "        padding: 20px;" +
    '      "' +
    "    >" +
    '    <div style="display: flex; align-items: center; gap: 10px; ">' +
    "        <div" +
    '          style="' +
    "            height: 100px;" +
    "            width: 100px;" +
    "            background: rgb(35, 29, 73);" +
    "            border-radius: 100%;" +
    "            display: flex;" +
    "            justify-content: center;" +
    "            align-content: center;" +
    "            align-items: center;" +
    '          "' +
    "        >" +
    "          <img" +
    '            style="height: 80%; width:80%"' +
    '            src="https://firebasestorage.googleapis.com/v0/b/portfolio-13bbf.appspot.com/o/hazemel_A_logo_with_the_letters_ETS_technological_hacking_codi_aa808ba6-ed97-4dc0-b846-ee1cf8df4109-removebg-preview-transformed.png?alt=media&token=81fe5120-2024-42b6-99c7-b7bcc4f8954a"' +
    "          />" +
    "        </div>" +
    "        <h1>EK Tech Solutions</h1>" +
    "    </div>" +
    '    <div style="width: 100%;">' +
    "      <h1>Thank You for Contacting Us!</h1>" +
    "      <p>" +
    "        Your message is important to us, and we will respond within 48 hours." +
    "      </p>" +
    "    </div>" +
    "    </section>" +
    "" +
    '    <section style="padding: 30px;">' +
    '        <h2 style="color: #333;">We Recognize the Message You\'ve Sent</h2>' +
    '        <p style="font-size: 16px; ">' +
    "            Thank you for reaching out to us. We have received your message and understand your needs." +
    "            At Ek Tech Solutions, we specialize in providing the following services to meet your requirements:" +
    "    " +
    "            <ul>" +
    '                <li style="list-style-type: disc; margin-left: 20px;">App Development: Transform your ideas into stunning mobile applications.</li>' +
    '                <li style="list-style-type: disc; margin-left: 20px;">Web Development: Create responsive and user-friendly websites.</li>' +
    '                <li style="list-style-type: disc; margin-left: 20px;">SEO and Web Performance Improvements: Enhance your online presence and site speed.</li>' +
    "            </ul>" +
    "    " +
    '            For more details and to calculate the pricing for your specific project, please visit our <a href="https://www.example.com/pricing">Pricing Page</a>.' +
    "        </p>" +
    "    </section>" +
    "" +
    '    <footer style="background: #333; color: #fff; text-align: center; padding: 10px;">' +
    "        <p>&copy; 2023 Ek Tech Solutions. All rights reserved.</p>" +
    '        <p><a href="https://www.hazemelkhalil.com" style="color: #fff; text-decoration: underline;">Visit hazemelkhalil.com</a></p>' +
    "    </footer>" +
    "  </body>" +
    ""
  );
}
