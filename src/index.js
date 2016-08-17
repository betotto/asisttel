/**
* El punto inicial de la aplicación
*
* @class App
* @author Betotto
*/

import express from 'express';
import bodyParser from 'body-parser';
import marko from 'marko/node-require';
import ejemploModule from './modules/ejemplo';
import homeModule from './modules/home';

marko.install();

const PORT = 8080;
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/ejemplo', ejemploModule);
app.use('/home', homeModule);

app.listen(PORT);
