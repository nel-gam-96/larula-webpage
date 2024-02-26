// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "POST") {
    let nodemailer = require("nodemailer");

    const { origin, company, email, people, date, message } = req.body;

    const transporter = nodemailer.createTransport({
      port: process.env.PORT,
      host: process.env.HOST,
      auth: {
        user: process.env.EMAIL_SENDER_ADDRESS,
        pass: process.env.EMAIL_SENDER_KEY,
      },
      secure: true,
    });

    const mailData = {
      from: process.env.CONTACT_EMAIL_TARGET_ADDRESS,
      to: process.env.CONTACT_EMAIL_TARGET_ADDRESS,
      subject: `Nuevo contacto desde página WEB`,
      html: `
      <div>
        <div>Se ha diligenciado el formulario de contacto de tu página web con los siguientes datos.</div><br/><br/>
        <div>Origen: ${origin}</div>
        <div>Compañia: ${company}</div>
        <div>Email: ${email}</div>
        <div># de Personas: ${people}</div>
        <div>Fecha: (Y/M/D) ${date}</div>
        <div>Mensaje: ${message}</div>
      </div>
      `,
    };

    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
  }

  return res.status(200);
}
