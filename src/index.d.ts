interface Config {
	tag?: string;
	classList?: string[];
	id?: string;
	attributeList?: {};
	innerText?: string;
	innerHTML?: string;
	src?: string;
	eventList?: {};
}

declare module "ardelon-create-element" {
	export default function createElement(config: Config): HTMLImageElement | HTMLElement;
}
