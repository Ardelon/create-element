!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.aa=t():e.aa=t()}(self,(()=>(()=>{"use strict";var e={};return(()=>{var t=e;Object.defineProperty(t,"__esModule",{value:!0}),t.createElement=void 0,t.createElement=({tag:e="div",classList:t=[],id:r="",attributeList:n={},innerText:o="",innerHTML:i="",src:s="",eventList:a={},children:f=[]}={})=>{if("string"!=typeof e)throw new Error("Invalid tag type");const l=document.createElement(e);try{!function(e,t){for(const[r,n]of Object.entries(t)){if(null==n)throw new Error(`Invalid attribute value for ${r}`);e.setAttribute(r,String(n))}}(l,n),function(e,t){for(const[r,n]of Object.entries(t)){if("function"!=typeof n)throw new Error(`Invalid event handler for ${r}`);e.addEventListener(r,n)}}(l,a)}catch(e){throw console.error("Error setting attributes or events:",e),e}if(r&&"string"!=typeof r)throw new Error("Invalid ID type");if(r&&(l.id=r),o&&"string"!=typeof o)throw new Error("Invalid innerText type");if(o&&(l.innerText=o),i&&"string"!=typeof i)throw new Error("Invalid innerHTML type");i&&(l.innerHTML=i);const c=t.filter(Boolean).join(" ").split(" ").filter(Boolean);if(c.some((e=>"string"!=typeof e)))throw new Error("Invalid classList type");if(l.classList.add(...c),s&&"string"!=typeof s)throw new Error("Invalid src type");return s&&"src"in l&&(l.src=s),Array.isArray(f)&&f.forEach((e=>{if(!(e instanceof HTMLElement))throw new Error("Invalid child element");l.appendChild(e)})),l}})(),e})()));