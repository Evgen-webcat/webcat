/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app/app.js":
/*!***********************!*\
  !*** ./js/app/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    'use strict';\n\n    $(window).scroll(function () {\n        if ($(this).scrollTop() > 50) {\n            $('.header').addClass('fixed');\n        } else {\n            $('.header').removeClass('fixed');\n        }\n    });\n\n    $('.burger_button').click(function (event) {\n        event.preventDefault();\n\n\n        if (!$(this).hasClass('menu-open')) {\n            $('.header').addClass('open');\n            $('.menu').stop().show(300, function () {\n                $('.fade').each(function (index) {\n                    $(this).stop(true).delay(100 * index).fadeIn();\n                });\n            });\n        } else {\n            $('.fade').stop(true).fadeOut(300);\n            $('.header').removeClass('open');\n            $('.menu').stop().delay(300).hide(0);\n        }\n\n        $(this).toggleClass('menu-open');\n\n    });\n});\n\n\n//# sourceURL=webpack:///./js/app/app.js?");

/***/ }),

/***/ "./js/app/blob.js":
/*!************************!*\
  !*** ./js/app/blob.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\r\n    var blobBlock = document.getElementById('blob');\r\n\r\n    if (blobBlock) {\r\n        var blob = new BlobAnimation(\"blob\", {\r\n\r\n            //Blob main settings\r\n            BLOB_SIZE: 200,\r\n            BLOB_DISTANCE: 1000,\r\n            DETALISATION: 60,\r\n            PERSPECTIVE_DISTORTION: 0,\r\n            ROTATION_SPEED: 5,\r\n\r\n            //Dot settins\r\n            DOT_SIZE: 2,\r\n            DOT_COLOR: \"#999999\",\r\n\r\n            //Mouse settings\t\t\t\t\r\n            MOUSE_DISTANCE_MIN: 20,\r\n            MOUSE_DISTANCE_MAX: 400,\r\n            MOUSE_SENSITIVITY: 1,\r\n            INERTIAL_TIME: 2,\r\n\r\n            //Shape settins\r\n            //Shape main settings\r\n            INITIAL_SHAPE: {\r\n                wave1: {\r\n                    amplitude: 10,\r\n                    frequency: 3,\r\n                    phase: 2\r\n                },\r\n                wave2: {\r\n                    amplitude: 60,\r\n                    frequency: 2,\r\n                    phase: 2\r\n                },\r\n                wave3: {\r\n                    amplitude: 10,\r\n                    frequency: 3,\r\n                    phase: 2\r\n                }\r\n            },\r\n            USE_MORPHING: true,\r\n            USE_WAVE_MOTION: true,\r\n            USE_WAVE_SWING: false,\r\n\r\n            //Morphing settings\r\n            MORPHING_AUTOPLAY: true,\r\n            MORPHING_DURATION: 2,\r\n            MORPHING_DELAY: 2,\r\n            MORPHING_TRANSITION_TYPE: \"cubic\",\r\n            MORPHING_SHAPES: [\r\n                {\r\n                    wave1: {\r\n                        amplitude: 17.582,\r\n                        frequency: 3.736,\r\n                        phase: 0\r\n                    },\r\n                    wave2: {\r\n                        amplitude: 32.967,\r\n                        frequency: 3.846,\r\n                        phase: 0\r\n                    },\r\n                    wave3: {\r\n                        amplitude: 128.571,\r\n                        frequency: 1.044,\r\n                        phase: 0\r\n                    }\r\n\t\t\t\t\t\t\t\t\t\t},\r\n                {\r\n                    wave1: {\r\n                        amplitude: 59.341,\r\n                        frequency: 4.78,\r\n                        phase: 0\r\n                    },\r\n                    wave2: {\r\n                        amplitude: 27.473,\r\n                        frequency: 4.286,\r\n                        phase: 0\r\n                    },\r\n                    wave3: {\r\n                        amplitude: 12.088,\r\n                        frequency: 1.319,\r\n                        phase: 0\r\n                    }\r\n\t\t\t\t\t\t\t\t\t\t},\r\n                {\r\n                    wave1: {\r\n                        amplitude: 106.593,\r\n                        frequency: 1.319,\r\n                        phase: 0\r\n                    },\r\n                    wave2: {\r\n                        amplitude: 114.286,\r\n                        frequency: 0.989,\r\n                        phase: 0\r\n                    },\r\n                    wave3: {\r\n                        amplitude: 0,\r\n                        frequency: 2,\r\n                        phase: 0\r\n                    }\r\n\t\t\t\t\t\t\t\t\t\t},\r\n                {\r\n                    wave1: {\r\n                        amplitude: 54.945,\r\n                        frequency: 4.286,\r\n                        phase: 4.246\r\n                    },\r\n                    wave2: {\r\n                        amplitude: 163.736,\r\n                        frequency: 0,\r\n                        phase: 5.213\r\n                    },\r\n                    wave3: {\r\n                        amplitude: 0,\r\n                        frequency: 0,\r\n                        phase: 0\r\n                    }\r\n\t\t\t\t\t\t\t\t\t\t},\r\n                {\r\n                    wave1: {\r\n                        amplitude: 93.407,\r\n                        frequency: 2.582,\r\n                        phase: 0\r\n                    },\r\n                    wave2: {\r\n                        amplitude: 29.67,\r\n                        frequency: 0.824,\r\n                        phase: 0\r\n                    },\r\n                    wave3: {\r\n                        amplitude: 27.473,\r\n                        frequency: 1.319,\r\n                        phase: 0\r\n                    }\r\n\t\t\t\t\t\t\t\t\t\t},\r\n                {\r\n                    wave1: {\r\n                        amplitude: 95.604,\r\n                        frequency: 0.769,\r\n                        phase: 0\r\n                    },\r\n                    wave2: {\r\n                        amplitude: 150,\r\n                        frequency: 0.989,\r\n                        phase: 0\r\n                    },\r\n                    wave3: {\r\n                        amplitude: 120.736,\r\n                        frequency: 0,\r\n                        phase: 0\r\n                    }\r\n\t\t\t\t\t\t\t\t\t\t},\r\n                {\r\n                    wave1: {\r\n                        amplitude: 31.868,\r\n                        frequency: 2.857,\r\n                        phase: 0\r\n                    },\r\n                    wave2: {\r\n                        amplitude: 29.67,\r\n                        frequency: 3.571,\r\n                        phase: 0\r\n                    },\r\n                    wave3: {\r\n                        amplitude: 35.165,\r\n                        frequency: 3.242,\r\n                        phase: 0\r\n                    }\r\n\t\t\t\t\t\t\t\t\t\t},\r\n                {\r\n                    wave1: {\r\n                        amplitude: 32.967,\r\n                        frequency: 3.978,\r\n                        phase: 0.552\r\n                    },\r\n                    wave2: {\r\n                        amplitude: 18.681,\r\n                        frequency: 5,\r\n                        phase: 0\r\n                    },\r\n                    wave3: {\r\n                        amplitude: 17.582,\r\n                        frequency: 1.319,\r\n                        phase: 0.725\r\n                    }\r\n\t\t\t\t\t\t\t\t   \t\t}\r\n\t\t\t\t\t\t\t\t\t ],\r\n\r\n            //Wave motion settings\r\n            WAVE_1_MOTION_SPEED: 1.7,\r\n            WAVE_2_MOTION_SPEED: 1,\r\n            WAVE_3_MOTION_SPEED: 3\r\n\r\n        });\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./js/app/blob.js?");

/***/ }),

/***/ "./js/app/slider.js":
/*!**************************!*\
  !*** ./js/app/slider.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\r\n    $('.cases_slider').slick({\r\n        arrows: false,\r\n        dots: true,\r\n        appendDots: $('.dots')\r\n    });\r\n\r\n    $('.prev_button').click(function (event) {\r\n        event.preventDefault();\r\n        $('.cases_slider').slick('slickPrev');\r\n    });\r\n\r\n    $('.next_button').click(function (event) {\r\n        event.preventDefault();\r\n        $('.cases_slider').slick('slickNext');\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./js/app/slider.js?");

/***/ }),

/***/ "./js/app/ymaps.js":
/*!*************************!*\
  !*** ./js/app/ymaps.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    'use strict';\n\n    var map = document.getElementById('map');\n    if (map) {\n        ymaps.ready(init);\n\n        function init() {\n            var placemarcIcon = document.getElementById('map').getAttribute('data-placemark');\n            var myMap = new ymaps.Map(\"map\", {\n                center: [53.86549061, 27.52305829],\n                zoom: 17,\n                controls: ['zoomControl']\n            }, {\n                zoomControlPosition: {\n                    top: '10px',\n                    right: '10px'\n                }\n            });\n\n            var myPlacemark = new ymaps.Placemark([53.86534980, 27.52422515], {}, {\n                iconLayout: 'default#image',\n                iconImageHref: placemarcIcon,\n                iconImageSize: [30, 52],\n                iconImageOffset: [-15, -52]\n            });\n\n            myMap.geoObjects.add(myPlacemark);\n        }\n    }\n});\n\n\n//# sourceURL=webpack:///./js/app/ymaps.js?");

/***/ }),

/***/ 0:
/*!***********************************************************************************!*\
  !*** multi ./js/app/app.js ./js/app/blob.js ./js/app/slider.js ./js/app/ymaps.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/app/app.js */\"./js/app/app.js\");\n__webpack_require__(/*! ./js/app/blob.js */\"./js/app/blob.js\");\n__webpack_require__(/*! ./js/app/slider.js */\"./js/app/slider.js\");\nmodule.exports = __webpack_require__(/*! ./js/app/ymaps.js */\"./js/app/ymaps.js\");\n\n\n//# sourceURL=webpack:///multi_./js/app/app.js_./js/app/blob.js_./js/app/slider.js_./js/app/ymaps.js?");

/***/ })

/******/ });
