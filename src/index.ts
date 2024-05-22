type AttributeList = {
  [key: string]: string | boolean | number | Function | Object;
};
type EventList = { [key: string]: EventListener };

export const createElement = ({
  tag = "div",
  classList = [],
  id = "",
  attributeList = {},
  innerText = "",
  innerHTML = "",
  src = "",
  eventList = {},
  children = [],
}: {
  tag?: string;
  classList?: string[];
  id?: string;
  attributeList?: AttributeList;
  innerText?: string;
  innerHTML?: string;
  src?: string;
  eventList?: EventList;
  children?: HTMLElement[];
} = {}): HTMLElement => {
  if (typeof tag !== "string") {
    throw new Error("Invalid tag type");
  }

  const element = document.createElement(tag);

  try {
    setAttributes(element, attributeList);
    setEvents(element, eventList);
  } catch (error) {
    console.error("Error setting attributes or events:", error);
    throw error;
  }

  if (id && typeof id !== "string") {
    throw new Error("Invalid ID type");
  } else if (id) {
    element.id = id;
  }

  if (innerText && typeof innerText !== "string") {
    throw new Error("Invalid innerText type");
  } else if (innerText) {
    element.innerText = innerText;
  }

  if (innerHTML && typeof innerHTML !== "string") {
    throw new Error("Invalid innerHTML type");
  } else if (innerHTML) {
    element.innerHTML = innerHTML;
  }

  const validClassList = classList.filter(Boolean);
  const unifyClassList = validClassList.join(" ");
  const parsedClassList = unifyClassList.split(" ");
  const preparedClassList = parsedClassList.filter(Boolean);

  if (preparedClassList.some((cls) => typeof cls !== "string")) {
    throw new Error("Invalid classList type");
  }

  element.classList.add(...preparedClassList);

  if (src && typeof src !== "string") {
    throw new Error("Invalid src type");
  }
  if (src && "src" in element) {
    (element as HTMLImageElement | HTMLScriptElement).src = src;
  }

  // Append children if any
  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (child instanceof HTMLElement) {
        element.appendChild(child);
      } else {
        throw new Error("Invalid child element");
      }
    });
  }

  return element;
};

function setAttributes(element: HTMLElement, attributes: AttributeList) {
  for (const [attribute, value] of Object.entries(attributes)) {
    if (value === null || typeof value === "undefined") {
      throw new Error(`Invalid attribute value for ${attribute}`);
    }
    element.setAttribute(attribute, String(value));
  }
}

function setEvents(element: HTMLElement, events: EventList) {
  for (const [event, handler] of Object.entries(events)) {
    if (typeof handler !== "function") {
      throw new Error(`Invalid event handler for ${event}`);
    }
    element.addEventListener(event as keyof HTMLElementEventMap, handler);
  }
}
