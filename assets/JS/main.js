const slides = document.querySelectorAll(".slides");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.getElementById("dots");
let index = 0;
let interval;

// Crear puntos diámicamente
slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.addEventListener("click", () => showSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("button");

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));
    slides[i].classList.add("active");
    dots[i].classList.add("active");
    index = i;
}

function startAutoSlide() {
    interval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(interval);
}

prev.addEventListener("click", () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});

next.addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

// Iniciar
showSlide(0);
startAutoSlide();