/**
 * @param {object} config Configurations
 * @param {string} config.id ID
 * @param {Array<String>} config.classList Classes array
 * @param {"a"|"button"|"div"|"img"|"p"|"span"} config.type Element tag
 * @param {string} config.innerText Inner text
 * @param {string} config.innerHTML Inner html
 * @param {} config.src Source
 * @param {Boolean} config.contentEditable Is content editable
 * @param {string} config.placeholder Placeholder text
 * @description Create a node element with given parameters and returns it. It is used for reducing code repeating and easy creation of elements
 * @returns {Element} node object
 * @function createElement
 * @memberof Utilities
 */
const createElement = (config) => {
    const {id,classList = [], type = 'div',innerText,innerHTML, src, contentEditable,row, options,optionValues,multiple,size, placeholder} = config

    const container = document.createElement(type);
    id              ? container.id = id                                                     : '';
    classList       ? classList.forEach(className => {container.classList.add(className)})  : '';
    innerText       ? container.innerText = innerText                                       : '';
    innerHTML       ? container.innerHTML = innerHTML                                       : '';
    src             ? container.src = src                                                   : '';
    contentEditable ? container.contentEditable = contentEditable                           : '';
    placeholder     ? container.placeholder = placeholder                                   : '';

    if (options) {
        options.forEach((value, index) => {
            let option = document.createElement('option');
            optionValues ? option.value = optionValues[index] : option.value = value;            
            option.innerText = value;
            container.appendChild(option);
        })
    }

    return container;
}

module.exports = {createElement}