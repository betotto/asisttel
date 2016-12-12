import express from 'express';
import HomeController from './controller';
import {home} from '../../text.js';

const router = express.Router();
const headerIdioma = 'X-idioma';

router.get('/', (req, res) => {
	let template = HomeController.getHomeTemplate();
	res.set('Content-Type', 'text/html');
	template.render(home[req.get(headerIdioma)], res);
});

export default router;
