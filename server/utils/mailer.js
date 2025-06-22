import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const sendEmail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Management Portal" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;





// use it like this in any route-controller,like when successfully login then send invitation mail
// import sendEmail from "./utils/mailer.js";

//   await sendEmail(
//     email,
//     'Welcome to __!',
//     `<h3>Hello ${name},</h3>
//      <p>Thank you for joining management portal.</p>
//      <p>Invite others, make the team, contribute to the team, manage everything properly.</p>
//      <br><p>– management portal Team</p>`
//   );
