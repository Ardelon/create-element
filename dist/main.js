/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["aa"] = factory();
	else
		root["aa"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module) => {

eval("/**\r\n *\r\n * @param {object} config\r\n * @param {string} config.tag\r\n * @param {Array<String>} config.classList\r\n * @param {String} config.id\r\n * @param {object} config.attributeList\r\n * @param {String} config.innerText\r\n * @param {String} config.innerHTML\r\n * @param {String} config.src\r\n * @param {object} config.eventList\r\n * @description Create a node element with given parameters and returns it. It is used for reducing code repeating and easy creation of elements\r\n * @returns {Node object}\r\n * @function createElement\r\n */\r\n\r\nconst createElement = (config) => {\r\n\tconst {\r\n\t\ttag = 'div',\r\n\t\tclassList = [],\r\n\t\tid,\r\n\t\tattributeList = {},\r\n\t\tinnerText,\r\n\t\tinnerHTML,\r\n\t\tsrc,\r\n\t\tfunctionList = {},\r\n\t\t\r\n\t} = config;\r\n\r\n\tconst element = document.createElement(tag);\r\n\tid ? (element.id = id) : '';\r\n\r\n\tconst attributeListKeys = Object.keys(attributeList);\r\n\tif (attributeListKeys.length) {\r\n\t\tattributeListKeys.forEach((attribute) => {\r\n\t\t\telement.setAttribute(attribute, attributeList[attribute]);\r\n\t\t});\r\n\t}\r\n\tconst eventListKeys = Object.keys(eventList);\r\n\tif (eventListKeys.length) {\r\n\t\teventListKeys.forEach((event) => {\r\n\t\t\telement.addEventListener(event, eventList[event]);\r\n\t\t});\r\n\t}\r\n\r\n\tclassList\r\n\t\t? classList.forEach((className) => {\r\n\t\t\t\tif (className !== '' || className !== null || className !== undefined) {\r\n\t\t\t\t\tcontainer.classList.add(className);\r\n\t\t\t\t}\r\n\t\t  })\r\n\t\t: '';\r\n\r\n\tinnerText ? (element.innerText = innerText) : '';\r\n\tinnerHTML ? (element.innerHTML = innerHTML) : '';\r\n\tsrc ? (container.src = src) : '';\r\n\r\n\treturn element;\r\n};\r\n\r\nmodule.exports = createElement;\r\n\n\n//# sourceURL=webpack://aa/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});