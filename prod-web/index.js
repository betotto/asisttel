'use strict';

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _pagesLoader = require('./api/pagesLoader');

var _pagesLoader2 = _interopRequireDefault(_pagesLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _router.startNav)();

_pagesLoader2.default.getHeader().then(function (response) {
	document.querySelector('header').innerHTML = response.data;
	_pagesLoader2.default.getFooter().then(function (response) {
		document.querySelector('footer').innerHTML = response.data;
	}).catch(function (error) {});
}).catch(function (error) {});