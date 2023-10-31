const slider = document.querySelector('.slider');
const sliderInner = document.querySelector('.slider-inner');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const slides = document.querySelectorAll('.slider-img');

function updateSlider() {
    const slideWidth = slides[0].clientWidth;
    sliderInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

setInterval(nextSlide, 3000); // Troca de slide a cada 3 segundos

document.querySelector("#img-slider1").addEventListener("click", redirecionarCamisas);
document.querySelector("#img-slider2").addEventListener("click", redirecionarCosmeticos);
document.querySelector("#img-slider3").addEventListener("click", redirecionarHigiene);
document.querySelector("#img-slider4").addEventListener("click", redirecionarBags);

function redirecionarCamisas(params) {
    window.location.href = '../pages/camisas.html'
}
function redirecionarCosmeticos(params) {
    window.location.href = '../pages/cosmeticos.html'
}
function redirecionarHigiene(params) {
    window.location.href = '../pages/higiene.html'
}
function redirecionarBags(params) {
    window.location.href = '../pages/bags.html'
}