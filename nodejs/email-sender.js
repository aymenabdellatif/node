const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email-address@gmail.com',
    pass: 'your-email-password'
  }
});

const mailOptions = {
  from: 'your-email-address@gmail.com',
  to: 'recipient-email-address@gmail.com',
  subject: 'Test email from Node.js',
  text: 'This is a test email sent from Node.js using Nodemailer.'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Email sent: ${info.response}`);
  }
});