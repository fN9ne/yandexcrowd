/* smooth scrolling */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", (event) => {
		event.preventDefault();

		document.querySelector(event.target.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});

const membersSlider = new Swiper(".members__slider .swiper", {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	autoplay: {
		delay: 4000,
		disableOnInteraction: true,
	},
	breakpoints: {
		997: {
			slidesPerView: 3,
		},
		661: {
			slidesPerView: 2,
		},
	},
});

const stepsSlider = new Swiper(".steps__slider .swiper", {
	spaceBetween: 20,
	pagination: {
		el: ".swiper-pagination",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
