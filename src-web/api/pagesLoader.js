import {get} from 'axios';

const context = './';
const headerIdioma = 'X-idioma';
const htmlContentType = 'text/html';

class PagesLoader {

	static getHeader() {
		return get(context.concat('home/header'), {
			headers: {
				Accept: htmlContentType,
				"X-idioma": window.idioma
			}
		});
	}

	static getHome() {
		return get(context.concat('home'), {
			headers: {
				Accept: htmlContentType,
				"X-idioma": window.idioma
			}
		});
	}
}

export default PagesLoader;