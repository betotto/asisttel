import express from 'express';
import CommonController from './controller';
import {header, footer} from '../../text.js';

const router = express.Router();
const headerIdioma = 'X-idioma';

router.get('/header', (req, res) => {
	let template = CommonController.getHeaderTemplate();
	res.set('Content-Type', 'text/html');
	template.render(header[req.get(headerIdioma)], res);
});

router.get('/footer', (req, res) => {
	let template = CommonController.getFooterTemplate();
	res.set('Content-Type', 'text/html');
	template.render(footer[req.get(headerIdioma)], res);
});

export default router;
