const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

// Cargar variables de entorno desde el archivo .env
dotenv.config();

if (!process.env.PORT) {
  console.error("PORT environment variable is not defined.");
  process.exit(1); // Salir si la variable de entorno no está definida
}

const app = express();

// Middleware para redirecciones en producción
if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      // Redirigir a https
      return res.redirect(`https://${req.headers.host}${req.url}`);
    }
    next();
  });
}

// Configuración de CORS
const allowedOrigins = [
  'https://www.jlcodecrafters.com',
  'https://www.code-crafters-client.vercel.app',
];

app.use(cors({
  origin: allowedOrigins,
  methods: 'GET,POST,OPTIONS',
  allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Servir los archivos estáticos de React
app.use(express.static(path.join(__dirname, '../client/build')));

// Manejar cualquier solicitud que no coincida con las rutas anteriores
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
