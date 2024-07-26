/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/assets/js/typing.js":
/*!************************************!*\
  !*** ./public/assets/js/typing.js ***!
  \************************************/
/***/ (function() {

eval("var data = [\r\n    \"Web Developer\",\r\n    \"Front End Developer\",\r\n    \"Full Stack Developer\"\r\n]\r\n\r\nvar el = document.querySelector(\".hero-skills\"),\r\n    root = document.querySelector(\":root\"),\r\n    initialDataIndex = 0,\r\n    writtingTime = 50,\r\n    delayTime = 1200,\r\n    clearingTime = 30\r\n\r\n\r\nwriteText(initialDataIndex)\r\n\r\nfunction writeText(index) {\r\n    var i = 0\r\n    var interval = setInterval(() => {\r\n        el.innerHTML += data[index][i]\r\n        if (i == data[index].length - 1) {\r\n            i = 0\r\n            clearInterval(interval)\r\n            setTimeout(clearText, delayTime)\r\n        } else {\r\n            i++;\r\n        }\r\n    }, writtingTime);\r\n}\r\n\r\nvar dataIndex = initialDataIndex + 1\r\n\r\nfunction clearText() {\r\n    var interval = setInterval(() => {\r\n        var elData = el.innerHTML\r\n        if (elData !== \"\") {\r\n            el.innerHTML = elData.substring(0, elData.length - 1)\r\n\r\n        } else {\r\n            clearInterval(interval)\r\n            writeText(dataIndex);\r\n\r\n            (dataIndex == data.length - 1) ? dataIndex = 0 : dataIndex++\r\n        }\r\n    }, clearingTime);\r\n}\n\n//# sourceURL=webpack://personal-app/./public/assets/js/typing.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/assets/js/typing.js"]();
/******/ 	
/******/ })()
;