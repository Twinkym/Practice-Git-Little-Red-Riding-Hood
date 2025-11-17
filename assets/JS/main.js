const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.getElementById("dots");
let index = 0;

// Crear puntos diámicamente
slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.addEventListener("click", () => showSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("button");

function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));
    slides[i].classList.add("active");
    dots[i].classList.add("active");
    index = i;
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

function startAutoSlide() {
    interval = setInterval(nextSlide, 5000);
}

// function stopAutoSlide() {
//     clearInterval(interval);
// }

prev.addEventListener("click", () => {
    prevSlide();    
});

next.addEventListener("click", () => {
    nextSlide();
});

// Iniciar
showSlide(0);
startAutoSlide(nextSlide, 5000);