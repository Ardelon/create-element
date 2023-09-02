type AttributeList = {
    [key: string]: string | boolean | number | Function | Object;
};
type EventList = {
    [key: string]: EventListener;
};
export declare const createElement: ({ tag, classList, id, attributeList, innerText, innerHTML, src, eventList, }?: {
    tag?: string;
    classList?: string[];
    id?: string;
    attributeList?: AttributeList;
    innerText?: string;
    innerHTML?: string;
    src?: string;
    eventList?: EventList;
}) => HTMLElement;
export {};
//# sourceMappingURL=index.d.ts.map