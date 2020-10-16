import modals from "./modules/modals.js";
import tabs from "./modules/tabs.js";

window.addEventListener("DOMContentLoaded", () => {
	modals();
	tabs(".tabs__menu", ".tabs__link", ".tabs__content", "active");

	const scroll = document.querySelector(".btn__header"),
		cookies = document.querySelector(".cookies"),
		checkbox = document.getElementById("subscribe"),
		cookiesBtn = document.querySelector("#cookies"),
		popup = document.querySelector(".order__popup");

	scroll.addEventListener("click", () => {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	});

	cookiesBtn.addEventListener("click", () => {
		cookies.style.display = "none";
	});

	checkbox.addEventListener("input", () => {
		if (!checkbox.checked) {
			popup.style.display = "none";
		} else {
			popup.style.display = "block";
		}
	});
});
