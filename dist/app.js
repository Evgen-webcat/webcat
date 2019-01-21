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

eval("$(document).ready(function () {\n    var blobBlock = document.getElementById('blob');\n\n    if (blobBlock) {\n        var blob = new BlobAnimation(\"blob\", {\n\n            //Blob main settings\n            BLOB_SIZE: 200,\n            BLOB_DISTANCE: 1000,\n            DETALISATION: 60,\n            PERSPECTIVE_DISTORTION: 0,\n            ROTATION_SPEED: 5,\n\n            //Dot settins\n            DOT_SIZE: 2,\n            DOT_COLOR: \"#999999\",\n\n            //Mouse settings\n            MOUSE_DISTANCE_MIN: 20,\n            MOUSE_DISTANCE_MAX: 400,\n            MOUSE_SENSITIVITY: 1,\n            INERTIAL_TIME: 2,\n\n            //Shape settins\n            //Shape main settings\n            INITIAL_SHAPE: {\n                wave1: {\n                    amplitude: 10,\n                    frequency: 3,\n                    phase: 2\n                },\n                wave2: {\n                    amplitude: 60,\n                    frequency: 2,\n                    phase: 2\n                },\n                wave3: {\n                    amplitude: 10,\n                    frequency: 3,\n                    phase: 2\n                }\n            },\n            USE_MORPHING: true,\n            USE_WAVE_MOTION: true,\n            USE_WAVE_SWING: false,\n\n            //Morphing settings\n            MORPHING_AUTOPLAY: true,\n            MORPHING_DURATION: 2,\n            MORPHING_DELAY: 2,\n            MORPHING_TRANSITION_TYPE: \"cubic\",\n            MORPHING_SHAPES: [\n                {\n                    wave1: {\n                        amplitude: 17.582,\n                        frequency: 3.736,\n                        phase: 0\n                    },\n                    wave2: {\n                        amplitude: 32.967,\n                        frequency: 3.846,\n                        phase: 0\n                    },\n                    wave3: {\n                        amplitude: 128.571,\n                        frequency: 1.044,\n                        phase: 0\n                    }\n\t\t\t\t\t\t\t\t\t\t},\n                {\n                    wave1: {\n                        amplitude: 59.341,\n                        frequency: 4.78,\n                        phase: 0\n                    },\n                    wave2: {\n                        amplitude: 27.473,\n                        frequency: 4.286,\n                        phase: 0\n                    },\n                    wave3: {\n                        amplitude: 12.088,\n                        frequency: 1.319,\n                        phase: 0\n                    }\n\t\t\t\t\t\t\t\t\t\t},\n                {\n                    wave1: {\n                        amplitude: 106.593,\n                        frequency: 1.319,\n                        phase: 0\n                    },\n                    wave2: {\n                        amplitude: 114.286,\n                        frequency: 0.989,\n                        phase: 0\n                    },\n                    wave3: {\n                        amplitude: 0,\n                        frequency: 2,\n                        phase: 0\n                    }\n\t\t\t\t\t\t\t\t\t\t},\n                {\n                    wave1: {\n                        amplitude: 54.945,\n                        frequency: 4.286,\n                        phase: 4.246\n                    },\n                    wave2: {\n                        amplitude: 163.736,\n                        frequency: 0,\n                        phase: 5.213\n                    },\n                    wave3: {\n                        amplitude: 0,\n                        frequency: 0,\n                        phase: 0\n                    }\n\t\t\t\t\t\t\t\t\t\t},\n                {\n                    wave1: {\n                        amplitude: 93.407,\n                        frequency: 2.582,\n                        phase: 0\n                    },\n                    wave2: {\n                        amplitude: 29.67,\n                        frequency: 0.824,\n                        phase: 0\n                    },\n                    wave3: {\n                        amplitude: 27.473,\n                        frequency: 1.319,\n                        phase: 0\n                    }\n\t\t\t\t\t\t\t\t\t\t},\n                {\n                    wave1: {\n                        amplitude: 95.604,\n                        frequency: 0.769,\n                        phase: 0\n                    },\n                    wave2: {\n                        amplitude: 150,\n                        frequency: 0.989,\n                        phase: 0\n                    },\n                    wave3: {\n                        amplitude: 120.736,\n                        frequency: 0,\n                        phase: 0\n                    }\n\t\t\t\t\t\t\t\t\t\t},\n                {\n                    wave1: {\n                        amplitude: 31.868,\n                        frequency: 2.857,\n                        phase: 0\n                    },\n                    wave2: {\n                        amplitude: 29.67,\n                        frequency: 3.571,\n                        phase: 0\n                    },\n                    wave3: {\n                        amplitude: 35.165,\n                        frequency: 3.242,\n                        phase: 0\n                    }\n\t\t\t\t\t\t\t\t\t\t},\n                {\n                    wave1: {\n                        amplitude: 32.967,\n                        frequency: 3.978,\n                        phase: 0.552\n                    },\n                    wave2: {\n                        amplitude: 18.681,\n                        frequency: 5,\n                        phase: 0\n                    },\n                    wave3: {\n                        amplitude: 17.582,\n                        frequency: 1.319,\n                        phase: 0.725\n                    }\n\t\t\t\t\t\t\t\t   \t\t}\n\t\t\t\t\t\t\t\t\t ],\n\n            //Wave motion settings\n            WAVE_1_MOTION_SPEED: 1.7,\n            WAVE_2_MOTION_SPEED: 1,\n            WAVE_3_MOTION_SPEED: 3\n\n        });\n    };\n\n    var blobBg = document.getElementById('blob-bg');\n\n    if (blobBg) {\n        var blob = new BlobAnimation(\"blob-bg\", {\n\n            //Blob main settings\n            BLOB_SIZE: 220,\n            BLOB_DISTANCE: 0,\n            DETALISATION: 60,\n            PERSPECTIVE_DISTORTION: 5,\n            ROTATION_SPEED: 2,\n\n            //Dot settins\n            DOT_SIZE: 1,\n            DOT_COLOR: \"#556677\",\n\n            //Mouse settings\n            MOUSE_DISTANCE_MIN: 20,\n            MOUSE_DISTANCE_MAX: 20000,\n            MOUSE_SENSITIVITY: 0.1,\n            INERTIAL_TIME: 2,\n\n            //Shape settins\n            //Shape main settings\n            INITIAL_SHAPE: {\n                wave1: {\n                    amplitude: 70,\n                    frequency: 3,\n                    phase: 0\n                },\n                wave2: {\n                    amplitude: 60,\n                    frequency: 2,\n                    phase: 0\n                },\n                wave3: {\n                    amplitude: 50,\n                    frequency: 2,\n                    phase: 0\n                }\n            },\n            USE_MORPHING: false,\n            USE_WAVE_MOTION: true,\n            USE_WAVE_SWING: false,\n\n            //Wave motion settings\n            WAVE_1_MOTION_SPEED: 0.85,\n            WAVE_2_MOTION_SPEED: 0.5,\n            WAVE_3_MOTION_SPEED: 1.5\n        });\n    };\n});\n\n\n//# sourceURL=webpack:///./js/app/blob.js?");

/***/ }),

/***/ "./js/app/slider.js":
/*!**************************!*\
  !*** ./js/app/slider.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    $('.cases_slider').slick({\n        arrows: false,\n        dots: true,\n        appendDots: $('.dots')\n    });\n\n    $('.prev_button').click(function (event) {\n        event.preventDefault();\n        $('.cases_slider').slick('slickPrev');\n    });\n\n    $('.next_button').click(function (event) {\n        event.preventDefault();\n        $('.cases_slider').slick('slickNext');\n    });\n});\n\n\n//# sourceURL=webpack:///./js/app/slider.js?");

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
