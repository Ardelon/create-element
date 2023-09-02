# Ardelon Create Element

## Overview

This library provides a utility function createElement for dynamically creating HTML elements in TypeScript. It allows you to set various attributes, event listeners, and other properties in a type-safe manner.

## Installation

To install this package, run:

```
npm install ardelon-create-element
```

## Usage

Import the createElement function from the package:

```
import { createElement } from 'ardelon-create-element';
```

### Basic Example

```
const divElement = createElement({
  tag: 'div',
  innerText: 'Hello, world!',
});

document.body.appendChild(divElement);
```

### Advanced Example

```
const buttonElement = createElement({
  tag: 'button',
  classList: ['btn', 'btn-primary'],
  id: 'myButton',
  innerText: 'Click Me',
  eventList: {
    click: () => alert('Button clicked'),
  },
});

document.body.appendChild(buttonElement);
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

#### Types

- `AttributeList`: `{ [key: string]: string | boolean | number | Function | Object }`
- `EventList`: `{ [key: string]: EventListener }`

## Error Handling

The function performs type checking and will throw errors for invalid types or values.
