'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var context = './';
var htmlContentType = 'text/html';

var PagesLoader = function () {
	function PagesLoader() {
		_classCallCheck(this, PagesLoader);
	}

	_createClass(PagesLoader, null, [{
		key: 'getHeader',
		value: function getHeader() {
			return (0, _axios.get)(context.concat('common/header'), {
				headers: {
					Accept: htmlContentType,
					'X-idioma': idioma
				}
			});
		}
	}, {
		key: 'getHome',
		value: function getHome() {
			return (0, _axios.get)(context.concat('home'), {
				headers: {
					Accept: htmlContentType,
					'X-idioma': idioma
				}
			});
		}
	}, {
		key: 'getFooter',
		value: function getFooter() {
			return (0, _axios.get)(context.concat('common/footer'), {
				headers: {
					Accept: htmlContentType,
					'X-idioma': idioma
				}
			});
		}
	}]);

	return PagesLoader;
}();

exports.default = PagesLoader;