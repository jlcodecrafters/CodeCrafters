const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const dotenv = require('dotenv');

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Servir los archivos estáticos de React
app.use(express.static(path.join(__dirname, '../client/build')));

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

app.post('/api/form', (req, res) => {
  console.log('Datos del formulario:', req.body); // Agregar este registro para depuración
  let mailOptions = {
    from: req.body.email,
    to: process.env.EMAIL,
    subject: 'Mensaje de mi sitio web',
    text: `Nombre: ${req.body.name}\nApellido: ${req.body.lastname}\nTeléfono: ${req.body.phone}\nEmail: ${req.body.email}\nMensaje: ${req.body.message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      return res.status(500).send('error'); // Usar return para asegurarse de que la ejecución se detiene aquí
    } else {
      console.log('Email enviado: ' + info.response);
      return res.send('success'); // Usar return para asegurarse de que la ejecución se detiene aquí
    }
  });
});

// Manejar cualquier solicitud que no coincida con las rutas anteriores
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
