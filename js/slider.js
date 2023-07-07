const slides = document.querySelector('.slider').querySelectorAll('li');

const slideCount = slides.length;
let activeSlide = 0;

setInterval(() => {
	slides[activeSlide].classList.remove('active');
	activeSlide++;
	if (activeSlide === slideCount) {
		activeSlide = 0;
	}
	slides[activeSlide].classList.add('active');
}, 5000);
