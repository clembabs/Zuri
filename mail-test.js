require('dotenv').config()
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD
  }
});

const mailOptions = {
  from: process.env.USER_EMAIL,
  to: process.env.RECEIVER_EMAIL,
  subject: 'Sending Email using Node.js',
  text: 'This is just a sample mail with nodejs mailer, Thank You.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

//oeqwfgjndgkxymcs