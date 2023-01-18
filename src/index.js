/**
 *
 * @param {object} config
 * @param {string} config.tag
 * @param {Array<String>} config.classList
 * @param {String} config.id
 * @param {object} config.attributeList
 * @param {String} config.innerText
 * @param {String} config.innerHTML
 * @param {String} config.src
 * @param {object} config.eventList
 * @description Create a node element with given parameters and returns it. It is used for reducing code repeating and easy creation of elements
 * @returns {Node object}
 * @function createElement
 */

const createElement = (config) => {
	const {
		tag = 'div',
		classList = [],
		id,
		attributeList = {},
		innerText,
		innerHTML,
		src,
		functionList = {},
		
	} = config;

	const element = document.createElement(tag);
	id ? (element.id = id) : '';

	const attributeListKeys = Object.keys(attributeList);
	if (attributeListKeys.length) {
		attributeListKeys.forEach((attribute) => {
			element.setAttribute(attribute, attributeList[attribute]);
		});
	}
	const eventListKeys = Object.keys(eventList);
	if (eventListKeys.length) {
		eventListKeys.forEach((event) => {
			element.addEventListener(event, eventList[event]);
		});
	}

	classList
		? classList.forEach((className) => {
				if (className !== '' || className !== null || className !== undefined) {
					container.classList.add(className);
				}
		  })
		: '';

	innerText ? (element.innerText = innerText) : '';
	innerHTML ? (element.innerHTML = innerHTML) : '';
	src ? (container.src = src) : '';

	return element;
};

module.exports = createElement;
