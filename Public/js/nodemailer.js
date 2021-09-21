const nodemailer = require("nodemailer");

async function sendEmailNotificaiton() {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "goatmeattop5@gmail.com",
      pass: "1234!@#$qwer"
    }
  });

  console.log("transporter created");

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "goatmeattop5@gmail.com", // sender address
    to: "shmikester@gmail.com", // list of receivers
    subject: "Top 5 Changes", // Subject line
    text: "The following changes where made to your post:", // plain text body, can use this or the html body
    html: "<b>Something Changed</b>", // html body
  });

  console.log("email sent", info.messageId);
}

sendEmailNotificaiton().catch(console.error);