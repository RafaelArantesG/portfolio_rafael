// =========================
// HEADER INTERATIVO
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

    // efeito scroll no header
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// =========================
// GLOW DO MOUSE
// =========================

const glow = document.querySelector(".cursor-glow");

let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;
let speed = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    speed = Math.abs(e.movementX) + Math.abs(e.movementY);
});

function animateGlow() {
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;

    glow.style.left = currentX + "px";
    glow.style.top = currentY + "px";

    let scale = 1 + Math.min(speed / 50, 0.8);
    glow.style.transform = `translate(-50%, -50%) scale(${scale})`;

    requestAnimationFrame(animateGlow);
}

animateGlow();


// =========================
// PARTÍCULAS
// =========================

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];

for (let i = 0; i < 120; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random()
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.y += p.speed;
        if (p.y > canvas.height) p.y = 0;

        ctx.fillStyle = "white";
        ctx.fillRect(p.x, p.y, p.size, p.size);
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();

// =========================
// MODAL DE IMAGEM
// =========================

function openModal(src) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");

    modal.style.display = "flex";
    modalImg.src = src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}