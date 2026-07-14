// ===============================
// Theme Toggle
// ===============================

const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        const icon = themeBtn.querySelector("i");

        if (document.body.classList.contains("light-mode")) {
            icon.className = "fa-solid fa-sun";
        } else {
            icon.className = "fa-solid fa-moon";
        }

    });
}

// ===============================
// Active Navbar on Scroll
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// Navbar Background on Scroll
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(6,17,31,.88)";
        navbar.style.backdropFilter = "blur(20px)";

    } else {

        navbar.style.background = "rgba(8,20,40,.55)";
    }

});

// ===============================
// Scroll Reveal Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".glass-card,.feature-card,.dashboard-card,.about-card,.contact-card"
).forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all .8s ease";

    observer.observe(card);

});

// ===============================
// Animated Counters
// ===============================

const counters = document.querySelectorAll(
    ".glass-card h2,.dashboard-stats h4,.about-card h3"
);

counters.forEach(counter => {

    const target = parseInt(counter.innerText);

    if (isNaN(target)) return;

    let count = 0;

    const speed = target / 80;

    const update = () => {

        count += speed;

        if (count < target) {

            counter.innerText = Math.floor(count);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target;

        }

    };

    update();

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ===============================
// Dashboard Progress Animation
// ===============================

window.addEventListener("load", () => {

    const progress = document.querySelector(".progress-fill");

    if (progress) {

        progress.style.width = "0";

        setTimeout(() => {

            progress.style.transition = "width 2s ease";
            progress.style.width = "97%";

        }, 500);

    }

});

// ===============================
// Floating Effect for Cards
// ===============================

document.querySelectorAll(".glass-card,.dashboard-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.transform =
            `perspective(800px)
             rotateY(${(x - rect.width / 2) / 25}deg)
             rotateX(${-(y - rect.height / 2) / 25}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

    });

});
