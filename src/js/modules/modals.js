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

export default modals;
