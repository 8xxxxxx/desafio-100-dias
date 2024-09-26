let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function moveSlide(n) {
  showSlide(currentSlide += n);
}

function showSlide(n) {
  if (n >= totalSlides) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = totalSlides - 1;
  }

  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.opacity = "0";
  }

  slides[currentSlide].style.opacity = "1";
}

// Auto-slide every 5 seconds
setInterval(() => {
  moveSlide(1);
}, 5000);

window.onload = () => {
  showSlide(currentSlide);
};
