import router, {startNav} from './router';
import pagesLoader from './api/pagesLoader';

startNav();

window.idioma = 'ingles';

pagesLoader.getHeader().then((response) => {
	document.querySelector('header').innerHTML = response.data;
}).catch((error) => {

});