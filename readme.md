# Ardelon Create Element

## Overview

This library provides a utility function createElement for dynamically creating HTML elements in TypeScript. It allows you to set various attributes, event listeners, and other properties in a type-safe manner.

## Installation

To install this package, run:

```bash
npm install ardelon-create-element
```

## Usage

Import the createElement function from the package:

```
import { createElement } from 'ardelon-create-element';
```

### Example 1

```javascript
const basicDiv = createElement({
	tag: "div",
	innerText: "This is a basic div",
});

document.body.appendChild(basicDiv);
```

### Example 2

```javascript
const mediumButton = createElement({
	tag: "button",
	innerText: "Click Me",
	attributeList: {
		"data-type": "mediumButton",
	},
	eventList: {
		click: () => alert("Button clicked"),
	},
});

document.body.appendChild(mediumButton);
```

### Example 3

```javascript
const advancedSection = createElement({
	tag: "section",
	classList: ["advanced-section"],
	children: [
		createElement({
			tag: "img",
			src: "https://example.com/image.jpg",
			attributeList: { alt: "Example Image" },
		}),
		createElement({
			tag: "ul",
			children: [
				createElement({ tag: "li", innerText: "Item 1" }),
				createElement({ tag: "li", innerText: "Item 2" }),
				createElement({ tag: "li", innerText: "Item 3" }),
			],
		}),
	],
});

document.body.appendChild(advancedSection);
```

## API

- `createElement(config: Config): HTMLElement`

#### Config

- `tag`: HTML tag name (default is `div`).
- `classList`: Array of class names.
- `id`: Element ID.
- `attributeList`: Object containing attributes to set.
- `innerText`: Inner text of the element.
- `innerHTML`: Inner HTML of the element.
- `src`: Source URL for elements like `<img>` and `<script>`.
- `eventList`: Object containing event listeners to attach.
- `children` : Array of children HTML Elements

#### Types

- `AttributeList`: `{ [key: string]: string | boolean | number | Function | Object }`
- `EventList`: `{ [key: string]: EventListener }`

## Error Handling

The function performs type checking and will throw errors for invalid types or values.
