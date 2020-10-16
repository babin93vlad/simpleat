

window.addEventListener("DOMContentLoaded", () => {


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


const modals = () => {
	function bindModal(
		triggerSelector,
		modalSelector,
		videoSelector,
		closeSelector
	) {
		const trigger = document.querySelector(triggerSelector),
			modal = document.querySelector(modalSelector),
			video = document.querySelector(videoSelector),
			close = document.querySelector(closeSelector);

		trigger.addEventListener("click", (e) => {
			if (e.target) {
				e.preventDefault();
			}
			modal.style.display = "block";
			video.style.display = "block";
			document.body.style.overflow = "hidden";
		});

		close.addEventListener("click", (e) => {
			e.preventDefault();
			modal.style.display = "none";
			document.body.style.overflow = "";
		});

		modal.addEventListener("click", (e) => {
			if (e.target === modal) {
				modal.style.display = "none";
				video.style.display = "none";
				document.body.style.overflow = "";
			}
		});
	}

	bindModal(".call-popup", ".modal", ".modal__on", ".modal__exit");
};

modals();

const tabs = (headerSelector, tabsSelector, contentSelector, activeClass) => {
	const header = document.querySelector(headerSelector),
		tab = document.querySelectorAll(tabsSelector),
		content = document.querySelectorAll(contentSelector),
		active = document.querySelector(activeClass);

	function hideTabContent() {
		content.forEach((item) => {
			item.style.display = "none";
		});

		tab.forEach((item) => {
			item.classList.remove(activeClass);
		});
	}

	function showTabContent(i = 0) {
		content[i].style.display = "table-row-group";

		tab[i].classList.add(activeClass);
	}

	hideTabContent();
	showTabContent(0);

	header.addEventListener("click", (e) => {
		const target = e.target;
		e.preventDefault();
		if (
			target &&
			(target.classList.contains(tabsSelector.replace(/\./, "")) ||
				target.parentNode.classList.contains(tabsSelector.replace(/\./, "")))
		) {
			tab.forEach((item, i) => {
				if (target === item || target.parentNode === item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
};

tabs(".tabs__menu", ".tabs__link", ".tabs__content", "active");

});
