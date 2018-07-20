(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("cryptocurrency-decimals", [], factory);
	else if(typeof exports === 'object')
		exports["cryptocurrency-decimals"] = factory();
	else
		root["cryptocurrency-decimals"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvalidSymbolError = function (_Error) {
  _inherits(InvalidSymbolError, _Error);

  function InvalidSymbolError(symbol) {
    _classCallCheck(this, InvalidSymbolError);

    return _possibleConstructorReturn(this, (InvalidSymbolError.__proto__ || Object.getPrototypeOf(InvalidSymbolError)).call(this, "The symbol " + symbol + " is not a valid cryptocurrency"));
  }

  return InvalidSymbolError;
}(Error);

exports.default = InvalidSymbolError;
module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decimalize = decimalize;

var _InvalidSymbolError = __webpack_require__(0);

var _InvalidSymbolError2 = _interopRequireDefault(_InvalidSymbolError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @const {object} DECIMALS - coin/token decimal place numbers
 */
var DECIMALS = {
  ADA: 6,
  AUD: 2,
  AUDT: 2,
  BCH: 8,
  BTC: 8,
  ETH: 16,
  NANO: 6,
  NEO: 2,
  USD: 2,
  USDT: 2,
  VEN: 16,
  XRB: 6,
  XRP: 15
};

/**
 * Decimalizes the amount according to the symbol's required decimal places.
 *
 * @param {number} amount - the amount to format
 * @param {string} symbol - the symbol to use to find the number of decimal places
 * @throws InvalidSymbolError
 * @return {number}
 */
function decimalize(amount, symbol) {
  var decimals = DECIMALS[symbol];

  if (!decimals) {
    throw new _InvalidSymbolError2.default(symbol);
  }

  return Number(Number(amount).toFixed(DECIMALS[symbol]));
}

exports.default = DECIMALS;

/***/ })
/******/ ]);
});
//# sourceMappingURL=cryptocurrency-decimals.js.map