/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const plate = require('./routes/plate');

const app = express();

app.set('trust proxy', true);
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', plate);

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor SINESP sendo executado na porta ${server.address().port}`);
});

const stop = async () => {
  server.close();
};

// Para realizar os testes
module.exports = app;
module.exports.stop = stop;