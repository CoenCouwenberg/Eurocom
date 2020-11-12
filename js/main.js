window.addEventListener('load', (e) => {
	console.log('DOM loaded. Yay!');

	// Eventlistnerer toevoegen om de tab te herkennen
	var navButtons = document.getElementsByClassName('tab');

	for (navButton of navButtons) {
		navButton.addEventListener('click', navClickHandler);
	}
	function navClickHandler(event) {
		for (navButton of navButtons) {
			navButton.classList.remove('active');
		}

		this.classList.add('active');

		// window.scrollTo({
		// 	left: window.innerWidth * navButtons.indexOf(this),
		// 	top: 0,
		// 	behavior: 'smooth'
		// });
	}
});

// /add event listeners for çlick to our nav links(a.tab)
// var navButtons = document.querySelectorAll('.tab');
// myButton.addEventListener('click', someFunction);
