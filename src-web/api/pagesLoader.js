import {get} from 'axios';

const context = './';
const htmlContentType = 'text/html';

class PagesLoader {

	static getHeader() {
		return get(context.concat('common/header'), {
			headers: {
				Accept: htmlContentType,
				'X-idioma': idioma
			}
		});
	}

	static getHome() {
		return get(context.concat('home'), {
			headers: {
				Accept: htmlContentType,
				'X-idioma': idioma
			}
		});
	}

	static getFooter() {
		return get(context.concat('common/footer'), {
			headers: {
				Accept: htmlContentType,
				'X-idioma': idioma
			}
		});
	}
}

export default PagesLoader;
