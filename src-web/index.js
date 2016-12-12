import router, {startNav} from './router';
import pagesLoader from './api/pagesLoader';

startNav();

pagesLoader.getHeader().then((response) => {
	document.querySelector('header').innerHTML = response.data;
	pagesLoader.getFooter().then((response) => {
		document.querySelector('footer').innerHTML = response.data;
	}).catch((error) => {

	});
}).catch((error) => {

});
