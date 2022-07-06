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
/***/ ((module) => {

eval("const createElement = (config) => {\r\n    const {id,classList = [], type = 'div',innerText,innerHTML, src, contentEditable,row, options,optionValues,multiple,size, placeholder} = config\r\n\r\n    const container = document.createElement(type);\r\n    id              ? container.id = id                                                     : '';\r\n    classList       ? classList.forEach(className => {container.classList.add(className)})  : '';\r\n    innerText       ? container.innerText = innerText                                       : '';\r\n    innerHTML       ? container.innerHTML = innerHTML                                       : '';\r\n    src             ? container.src = src                                                   : '';\r\n    contentEditable ? container.contentEditable = contentEditable                           : '';\r\n    row             ? container.row = row                                                   : '';\r\n    multiple        ? container.multiple = multiple                                         : '';\r\n    size            ? container.size = size                                                 : '';\r\n    placeholder     ? container.placeholder = placeholder                                   : '';\r\n\r\n    if (options) {\r\n        options.forEach((value, index) => {\r\n            let option = document.createElement('option');\r\n            optionValues ? option.value = optionValues[index] : option.value = value;            \r\n            option.innerText = value;\r\n            container.appendChild(option);\r\n        })\r\n    }\r\n\r\n    return container;\r\n}\r\n\r\nmodule.exports = {createElement}\n\n//# sourceURL=webpack://create-element/./src/index.js?");

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
/******/ })()
;