// createElement.d.ts

export type AttributeList = { [key: string]: string | boolean | number | Function | Object };
export type EventList = { [key: string]: EventListener };

export interface CreateElementConfig {
	tag?: string;
	classList?: string[];
	id?: string;
	attributeList?: AttributeList;
	innerText?: string;
	innerHTML?: string;
	src?: string;
	eventList?: EventList;
}

export function createElement(config?: CreateElementConfig): HTMLElement;
