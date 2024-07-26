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

/***/ "./public/assets/js/bgAnimation.js":
/*!*****************************************!*\
  !*** ./public/assets/js/bgAnimation.js ***!
  \*****************************************/
/***/ (function() {

eval("function animateWithRandomNumber(e, t, s) {\r\n    TweenLite.fromTo(\r\n      e,\r\n      Math.floor(20 * Math.random() + 1),\r\n      { y: t },\r\n      {\r\n        y: s,\r\n        onComplete: animateWithRandomNumber,\r\n        onCompleteParams: [e, t, s],\r\n        ease: Linear.easeNone\r\n      }\r\n    )\r\n  }\r\n  const itemsDown = [\r\n    '.light4',\r\n    '.light5',\r\n    '.light6',\r\n    '.light7',\r\n    '.light8',\r\n    '.light11',\r\n    '.light12',\r\n    '.light13',\r\n    '.light14',\r\n    '.light15',\r\n    '.light16'\r\n  ].forEach(e => animateWithRandomNumber(e, -1080, 1080)),\r\n    itemsUp = [\r\n      '.light1',\r\n      '.light2',\r\n      '.light3',\r\n      '.light9',\r\n      '.light10',\r\n      '.light17'\r\n    ].forEach(e => animateWithRandomNumber(e, 1080, -1080))\r\n    \n\n//# sourceURL=webpack://personal-app/./public/assets/js/bgAnimation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/assets/js/bgAnimation.js"]();
/******/ 	
/******/ })()
;