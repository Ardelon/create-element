export interface Config {
	tag?: string;
	classList?: string[];
	id?: string;
	attributeList?: {};
	innerText?: string;
	innerHTML?: string;
	src?: string;
	eventList?: {};
}

declare function createElement(config: Config): HTMLImageElement | HTMLElement;
export default createElement;
