let currentIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function moveSlide(direction) {
		currentIndex += direction;
		if (currentIndex < 0) {
				currentIndex = totalSlides - 1;
		} else if (currentIndex >= totalSlides) {
				currentIndex = 0;
		}
		slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function openProject(url) {
		window.open(url, '_blank');
}

function openProject(url) {
	window.open(url, '_blank');
}

document.querySelector("form").addEventListener("submit", function(event) {
	event.preventDefault();
	alert("تم إرسال رسالتك بنجاح!");
});