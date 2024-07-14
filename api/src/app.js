const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require("cors");
const routes = require('./routes/index.js');
require('./db.js');

const server = express();
server.name = 'API';

server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));

// Configuración CORS
server.use(cors({
  origin: 'http://localhost:5173',
  credentials: true, // Habilita el uso de cookies y encabezados personalizados
}));

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});


module.exports = server;
