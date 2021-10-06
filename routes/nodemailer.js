const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/:email')

async function sendEmailNotificaiton(email)
{
  try
  {
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

    transporter.verify(function (error, success)
    {
      if (error)
      {
        console.log(error);
      } else
      {
        console.log("Server is ready to take our messages");
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "goatmeattop5@gmail.com", // sender address
      to: email, // list of receivers
      subject: "Top 5 Signup", // Subject line
      text: "Thanks for signing up to the Top5 Website!" // plain text body, can use this or the html body
      // html: "<b>Something Changed</b>", // html body
    });

    console.log("email sent", info.messageId);

  } catch (error)
  {
    console.log(error);
  }
}