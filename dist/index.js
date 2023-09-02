!(function (e, t) {
	"object" == typeof exports && "object" == typeof module
		? (module.exports = t())
		: "function" == typeof define && define.amd
		? define([], t)
		: "object" == typeof exports
		? (exports.aa = t())
		: (e.aa = t());
})(self, () =>
	(() => {
		"use strict";
		var e = {};
		return (
			(() => {
				var t = e;
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.createElement = void 0),
					(t.createElement = ({
						tag: e = "div",
						classList: t = [],
						id: r = "",
						attributeList: n = {},
						innerText: o = "",
						innerHTML: i = "",
						src: s = "",
						eventList: f = {},
					} = {}) => {
						if ("string" != typeof e) throw new Error("Invalid tag type");
						const a = document.createElement(e);
						try {
							!(function (e, t) {
								for (const [r, n] of Object.entries(t)) {
									if (null == n) throw new Error(`Invalid attribute value for ${r}`);
									e.setAttribute(r, String(n));
								}
							})(a, n),
								(function (e, t) {
									for (const [r, n] of Object.entries(t)) {
										if ("function" != typeof n) throw new Error(`Invalid event handler for ${r}`);
										e.addEventListener(r, n);
									}
								})(a, f);
						} catch (e) {
							throw (console.error("Error setting attributes or events:", e), e);
						}
						if (r && "string" != typeof r) throw new Error("Invalid ID type");
						if (((a.id = r), o && "string" != typeof o)) throw new Error("Invalid innerText type");
						if (((a.innerText = o), i && "string" != typeof i))
							throw new Error("Invalid innerHTML type");
						a.innerHTML = i;
						const c = t.filter(Boolean);
						if (c.some((e) => "string" != typeof e)) throw new Error("Invalid classList type");
						if ((a.classList.add(...c), s && "string" != typeof s))
							throw new Error("Invalid src type");
						return s && "src" in a && (a.src = s), a;
					});
			})(),
			e
		);
	})()
);
