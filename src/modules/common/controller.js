import HeaderTemplate from './marko/header.marko';
import FooterTemplate from './marko/footer.marko';

class CommonController {
	
	static getHeaderTemplate() {
		return HeaderTemplate;
	}

	static getFooterTemplate() {
		return FooterTemplate;
	}
}

export default CommonController;
