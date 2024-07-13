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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LinkedList: () => (/* binding */ LinkedList)\n/* harmony export */ });\nclass Node {\n    constructor(value = null, nextNode = null) {\n      this.value = value;\n      this.nextNode = nextNode;\n    }\n  }\n  \n  class LinkedList {\n    constructor() {\n      this.headNode = null;\n    }\n  \n    append(value) {\n      const newNode = new Node(value);\n      if (!this.headNode) {\n        this.headNode = newNode;\n        return;\n      }\n      let current = this.headNode;\n      while (current.nextNode) {\n        current = current.nextNode;\n      }\n      current.nextNode = newNode;\n    }\n  \n    prepend(value) {\n      const newNode = new Node(value, this.headNode);\n      this.headNode = newNode;\n    }\n  \n    get size() {\n      let count = 0;\n      let current = this.headNode;\n      while (current) {\n        count++;\n        current = current.nextNode;\n      }\n      return count;\n    }\n  \n    get head() {\n      return this.headNode;\n    }\n  \n    get tail() {\n      if (!this.headNode) return null;\n      let current = this.headNode;\n      while (current.nextNode) {\n        current = current.nextNode;\n      }\n      return current;\n    }\n  \n    at(index) {\n      if (index < 0 || !this.headNode) return null;\n      let current = this.headNode;\n      for (let i = 0; i < index; i++) {\n        if (!current.nextNode) return null;\n        current = current.nextNode;\n      }\n      return current;\n    }\n        pop() {\n          if (!this.headNode) return null;\n          if (!this.headNode.nextNode) {\n            const value = this.headNode.value;\n            this.headNode = null;\n            return value;\n          }\n          let current = this.headNode;\n          while (current.nextNode.nextNode) {\n            current = current.nextNode;\n          }\n          const value = current.nextNode.value;\n          current.nextNode = null;\n          return value;\n        }\n      \n        contains(value) {\n          let current = this.headNode;\n          while (current) {\n            if (current.value === value) return true;\n            current = current.nextNode;\n          }\n          return false;\n        }\n      \n        find(value) {\n          let current = this.headNode;\n          let index = 0;\n          while (current) {\n            if (current.value === value) return index;\n            current = current.nextNode;\n            index++;\n          }\n          return null;\n        }\n      \n        toString() {\n          let result = '';\n          let current = this.headNode;\n          while (current) {\n            result += `( ${current.value} ) -> `;\n            current = current.nextNode;\n          }\n          result += 'null';\n          return result;\n        }\n            insertAt(value, index) {\n              if (index < 0 || index > this.size) {\n                throw new Error('Index out of bounds');\n              }\n          \n              const newNode = new Node(value);\n          \n              if (index === 0) {\n                newNode.nextNode = this.headNode;\n                this.headNode = newNode;\n                return;\n              }\n          \n              let current = this.headNode;\n              for (let i = 0; i < index - 1; i++) {\n                current = current.nextNode;\n              }\n          \n              newNode.nextNode = current.nextNode;\n              current.nextNode = newNode;\n            }\n          \n            removeAt(index) {\n              if (index < 0 || index >= this.size) {\n                throw new Error('Index out of bounds');\n              }\n          \n              if (index === 0) {\n                const removedValue = this.headNode.value;\n                this.headNode = this.headNode.nextNode;\n                return removedValue;\n              }\n          \n              let current = this.headNode;\n              for (let i = 0; i < index - 1; i++) {\n                current = current.nextNode;\n              }\n          \n              const removedValue = current.nextNode.value;\n              current.nextNode = current.nextNode.nextNode;\n              return removedValue;\n            }\n          }\n\n//# sourceURL=webpack://linked-list-project/./src/LinkedList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LinkedList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkedList.js */ \"./src/LinkedList.js\");\n\n\nconst list = new _LinkedList_js__WEBPACK_IMPORTED_MODULE_0__.LinkedList();\n\nlist.append(1);\nlist.append(2);\nlist.append(3);\nlist.prepend(0);\n\nconsole.log('Initial list:', list.toString());\n\nlist.insertAt(1.5, 2);\nconsole.log('After inserting 1.5 at index 2:', list.toString());\n\nconst removedValue = list.removeAt(3);\nconsole.log(`Removed value: ${removedValue}`);\nconsole.log('After removing index 3:', list.toString());\ntry {\n  list.insertAt(10, 10); \n} catch (error) {\n  console.log('Error caught:', error.message);\n}\n\ntry {\n  list.removeAt(-1);\n} catch (error) {\n  console.log('Error caught:', error.message);\n}\n\n//# sourceURL=webpack://linked-list-project/./src/index.js?");

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