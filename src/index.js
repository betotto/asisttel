/**
* El punto inicial de la aplicación
*
* @class App
* @author Betotto
*/

import express from 'express';
import bodyParser from 'body-parser';
import marko from 'marko/node-require';
import commonModule from './modules/common';
import homeModule from './modules/home';

marko.install();

const PORT = process.env.NODE_PORT || 3000;
const IP = process.env.NODE_IP || 'localhost';
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/common', commonModule);
app.use('/home', homeModule);

app.listen(PORT, IP);
