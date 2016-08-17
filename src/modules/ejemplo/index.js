import express from 'express';
import EjemploController from './controller';

const router = express.Router();

router.get('/marko', (req, res) => {
	let template = EjemploController.getSaludoTemplate();
	EjemploController.getSaludo().then((response) => {
		template.render(response, res);
	}).catch((error) => {
		res.status(500).send(error).end();
	});
});

export default router;
