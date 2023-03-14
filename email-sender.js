let nodemailer = require('nodemailer');

let PORT = process.env.PORT || 300;

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ebhodaghefrank@gmail.com',
    pass: 'Testing'
  },

  tls: {
        rejectUnauthorized: false,
  }
});

let mailOptions = {
    from: 'ebhodaghefrank@gmail.com',
    to: 'frankogba@ymail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function(error, success){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent successully!');
    }

  });

  app.get('/', (req, res) => {
    res.send("Hello world");
  });