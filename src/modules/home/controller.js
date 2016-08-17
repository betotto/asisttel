import HeaderTemplate from './marko/header.marko';
import HomeTemplate from './marko/home.marko';

class HomeController {
	
	static getHeaderTemplate() {
		return HeaderTemplate;
	}

	static getHomeTemplate() {
		return HomeTemplate;
	}
}

export default HomeController;
