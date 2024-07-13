/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/LinkedList.js":
/*!***************************!*\
  !*** ./src/LinkedList.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LinkedList: () => (/* binding */ LinkedList)\n/* harmony export */ });\nclass Node {\n    constructor(value = null, nextNode = null) {\n      this.value = value;\n      this.nextNode = nextNode;\n    }\n  }\n  \n  class LinkedList {\n    constructor() {\n      this.headNode = null;\n    }\n  \n    append(value) {\n      const newNode = new Node(value);\n      if (!this.headNode) {\n        this.headNode = newNode;\n        return;\n      }\n      let current = this.headNode;\n      while (current.nextNode) {\n        current = current.nextNode;\n      }\n      current.nextNode = newNode;\n    }\n  \n    prepend(value) {\n      const newNode = new Node(value, this.headNode);\n      this.headNode = newNode;\n    }\n  \n    get size() {\n      let count = 0;\n      let current = this.headNode;\n      while (current) {\n        count++;\n        current = current.nextNode;\n      }\n      return count;\n    }\n  \n    get head() {\n      return this.headNode;\n    }\n  \n    get tail() {\n      if (!this.headNode) return null;\n      let current = this.headNode;\n      while (current.nextNode) {\n        current = current.nextNode;\n      }\n      return current;\n    }\n  \n    at(index) {\n      if (index < 0 || !this.headNode) return null;\n      let current = this.headNode;\n      for (let i = 0; i < index; i++) {\n        if (!current.nextNode) return null;\n        current = current.nextNode;\n      }\n      return current;\n    }\n        pop() {\n          if (!this.headNode) return null;\n          if (!this.headNode.nextNode) {\n            const value = this.headNode.value;\n            this.headNode = null;\n            return value;\n          }\n          let current = this.headNode;\n          while (current.nextNode.nextNode) {\n            current = current.nextNode;\n          }\n          const value = current.nextNode.value;\n          current.nextNode = null;\n          return value;\n        }\n      \n        contains(value) {\n          let current = this.headNode;\n          while (current) {\n            if (current.value === value) return true;\n            current = current.nextNode;\n          }\n          return false;\n        }\n      \n        find(value) {\n          let current = this.headNode;\n          let index = 0;\n          while (current) {\n            if (current.value === value) return index;\n            current = current.nextNode;\n            index++;\n          }\n          return null;\n        }\n      \n        toString() {\n          let result = '';\n          let current = this.headNode;\n          while (current) {\n            result += `( ${current.value} ) -> `;\n            current = current.nextNode;\n          }\n          result += 'null';\n          return result;\n        }\n      }\n\n//# sourceURL=webpack://linked-list-project/./src/LinkedList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LinkedList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkedList.js */ \"./src/LinkedList.js\");\n\n\nconst list = new _LinkedList_js__WEBPACK_IMPORTED_MODULE_0__.LinkedList();\n\nlist.append(1);\nlist.append(2);\nlist.append(3);\nlist.prepend(0);\n\nconsole.log('List:', list.toString());\nconsole.log('Size:', list.size);\nconsole.log('Head:', list.head.value);\nconsole.log('Tail:', list.tail.value);\nconsole.log('At index 2:', list.at(2).value);\n\nconsole.log('Popped value:', list.pop());\nconsole.log('List after pop:', list.toString());\n\nconsole.log('Contains 2:', list.contains(2));\nconsole.log('Contains 4:', list.contains(4));\n\nconsole.log('Index of 2:', list.find(2));\nconsole.log('Index of 4:', list.find(4));\n\n//# sourceURL=webpack://linked-list-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;