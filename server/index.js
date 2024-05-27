const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const dotenv = require('dotenv');

// Cargar variables de entorno desde el archivo .env
dotenv.config();

if (!process.env.PORT) {
  console.error("PORT environment variable is not defined.");
  process.exit(1); // Salir si la variable de entorno no está definida
}

const app = express();

const allowedOrigins = [
  'https://www.jlcodecrafters.com',
  'https://www.code-crafters-client.vercel.app',
];

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Permitir a todas las direcciones acceder (en producción, ajusta esto según tus necesidades)
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Métodos permitidos
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // Encabezados permitidos
  res.header('Access-Control-Allow-Credentials', true); // Permitir credenciales

  if (req.method === 'OPTIONS') {
    // Respondemos a las solicitudes OPTIONS con el código 200
    res.sendStatus(200);
  } else {
    // Continuar con el siguiente middleware
    next();
  }
});

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
  console.log('Datos del formulario:', req.body);
  let mailOptions = {
    from: req.body.email,
    to: process.env.EMAIL,
    subject: 'Mensaje de mi sitio web',
    text: `Nombre: ${req.body.name}\nApellido: ${req.body.lastname}\nTeléfono: ${req.body.phone}\nEmail: ${req.body.email}\nMensaje: ${req.body.message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      return res.status(500).send('error');
    } else {
      console.log('Email enviado: ' + info.response);
      return res.send('success');
    }
  });
});

// Manejar cualquier solicitud que no coincida con las rutas anteriores
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
