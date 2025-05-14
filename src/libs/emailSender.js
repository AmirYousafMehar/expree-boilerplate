const nodemailer = require('nodemailer');

const emailSender = async ({ to, subject, otp }) => {

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SENDER_EMAil,
        pass: process.env.SENDER_PASSWORD // NOT your normal password!
      }
    });

    const mailOptions = {
      from: process.env.SENDER_EMAil,
      to: to,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #333;">Your Verification Code</h2>
          <p>Use the following One-Time Password (OTP) to complete your action:</p>
          <div style="font-size: 32px; font-weight: bold; margin: 20px 0; color: #1a73e8; letter-spacing: 8px;">
            ${otp}
          </div>
          <p>This OTP is valid for the next 10 minutes.</p>
          <p style="font-size: 12px; color: #888;">If you did not request this, please ignore this email.</p>
        </div>
      `
    };
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.log(error)
  }
};

module.exports = { emailSender };
