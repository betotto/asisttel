import Navigo from 'navigo';
import pagesLoader from '../api/pagesLoader';

const router = new Navigo('#/', true);

router.on('#/', function () {	
	pagesLoader.getHome().then((response) => {
		document.querySelector('section#contentHome').innerHTML = response.data;
	}).catch((error) => {

	});
}).resolve();

export const startNav = () => {
	document.location = '/index.html#/';
};

export default router;
