'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.startNav = undefined;

var _navigo = require('navigo');

var _navigo2 = _interopRequireDefault(_navigo);

var _pagesLoader = require('../api/pagesLoader');

var _pagesLoader2 = _interopRequireDefault(_pagesLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _navigo2.default('#/', true);

router.on('#/', function () {
	_pagesLoader2.default.getHome().then(function (response) {
		document.querySelector('section#contentHome').innerHTML = response.data;
		$('.flex-image').flexslider({
			direction: "vertical",
			controlNav: false,
			directionNav: true,
			pauseOnHover: true,
			slideshowSpeed: 10000
		});
	}).catch(function (error) {});
}).resolve();

var startNav = exports.startNav = function startNav() {
	document.location = '/index.html#/';
};

exports.default = router;