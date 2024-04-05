/* smooth scrolling */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", (event) => {
		event.preventDefault();

		document.querySelector(event.target.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});
/* sliders */
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
/* animations on scroll */
const onEntry = (entry) => {
	entry.forEach((change) => {
		if (change.isIntersecting) {
			setTimeout(() => change.target.classList.add("element-show"), 250);
		}
	});
};

let options = {
	threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let element of elements) {
	observer.observe(element);
}
