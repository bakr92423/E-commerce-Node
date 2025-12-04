const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: Number(process.env.SEND_PORT),
    secure: process.env.SECURE === "true", // تحويل النص ل Boolean
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const emailOptions = {
    from: `Bakr-app <${process.env.EMAIL_USER}>`,
    to: options.email,
    subject: options.subject,
    text: options.text, // أو html: options.message
  };

  await transporter.sendMail(emailOptions);
};


module.exports=sendEmail