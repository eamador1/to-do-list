/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const projects = [\n  {\n    description: 'Take a shower',\n    completed: 0,\n    index: '1',\n  },\n  {\n    description: 'Breakfast',\n    completed: 1, \n    index: '2',\n  },\n]   \nclass list {\n    constructor() {\n      this.items = JSON.parse(localStorage.getItem('list')) || [];\n    }\n  displayList() {\n    const $list = document.querySelector('.list');\n    $list.innerHTML = '';\n    this.items.forEach((item, index) => {\n      const $li = document.createElement('li');\n      const $checkbox = document.createElement('input');\n      $checkbox.type  = 'checkbox';\n  \n      $li.classList.add('item');\n      $checkbox.classList.add('completed');\n  \n      $li.textContent = item;\n      \n      $list.appendChild($li);\n      $list.appendChild($checkbox);\n    });\n  }\n}\n\ndisplayList();\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;