// ===== MODERN PORTFOLIO JS =====

// Select elements
const notLoadAll = document.querySelectorAll(".notload");
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".navbar a");

// Typed.js initialization (only on pages with .text element)
if (document.querySelector(".text")) {
    var typed = new Typed(".text", {
        strings: ["ML Engineer", "AI Engineer", "Data Scientist"],
        typeSpeed: 80,
        backSpeed: 60,
        backDelay: 1500,
        loop: true
    });
}

// Page load animation
window.onload = () => {
    setTimeout(function () {
        for (let i = 0; i < notLoadAll.length; i++) {
            if (typeof notLoadAll[i].attributes["notload-delay"] !== "object") {
                notLoadAll[i].classList.remove("notload");
            } else {
                setTimeout(() => {
                    notLoadAll[i].classList.remove("notload");
                }, 500);
            }
        }
        
        // Remove loading screen if exists
        const loading = document.getElementById("loading");
        if (loading) {
            loading.classList.add("off");
            setTimeout(function () {
                loading.classList.add("transparent");
                setTimeout(function () {
                    loading.style.display = "none";
                }, 1000);
            }, 100);
        }
    }, 500);
};

// ===== HAMBURGER MENU TOGGLE =====
if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        navbar.classList.toggle("active");
        document.body.style.overflow = navbar.classList.contains("active") ? "hidden" : "auto";
    });
}

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navbar.classList.contains("active")) {
            menuToggle.classList.remove("active");
            navbar.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    });
});

// ===== HEADER SCROLL EFFECT =====
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// ===== ACTIVE NAVIGATION LINK ON SCROLL =====
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute("id");
        const navLink = document.querySelector(`.navbar a[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove("active"));
            if (navLink) navLink.classList.add("active");
        }
    });
});

// ===== SMOOTH REVEAL ON SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
        }
    });
}, observerOptions);

document.querySelectorAll(".services-list div, .project, .skill, .main5 .col").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
});

// Add revealed styles
const style = document.createElement('style');
style.textContent = `
    .revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);
