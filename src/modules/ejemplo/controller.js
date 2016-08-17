import Template from './marko/index.marko';
import pouch from '../../database/pouch';

class EjemploController {
	
	static getSaludoTemplate() {
		return Template;
	}
	
	static getSaludo() {
		return new Promise((resolve, reject) => { 
			pouch.get('mark').then(function(result) {
				let response = {};
				if(result !== undefined) {
					response.name = result.title;
				} else {
					response.name = '';
				}
				resolve(response);
			}).catch(function (err) {
				reject(err);
			});
		});
	}
}

export default EjemploController;
