// =========================
// MOBILE MENU
// =========================

const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        const menuIsOpen = navLinks.classList.contains("active");

        menuButton.setAttribute(
            "aria-expanded",
            String(menuIsOpen)
        );

        menuButton.setAttribute(
            "aria-label",
            menuIsOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );
    });
}


// =========================
// CLOSE MOBILE MENU
// =========================

const navItems = document.querySelectorAll(".nav-link");

navItems.forEach(function (link) {
    link.addEventListener("click", function () {
        if (navLinks) {
            navLinks.classList.remove("active");
        }

        if (menuButton) {
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        }
    });
});


// =========================
// TYPING ANIMATION
// =========================

const typingText = document.getElementById("typing-text");

const jobs = [
    "Software Developer",
    "Full-Stack Developer",
    "Backend Developer",
    "Application Developer"
];

let jobIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
    if (!typingText) {
        return;
    }

    const currentJob = jobs[jobIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingText.textContent = currentJob.substring(
        0,
        characterIndex
    );

    let speed = deleting ? 45 : 85;

    if (
        !deleting &&
        characterIndex === currentJob.length
    ) {
        speed = 1700;
        deleting = true;
    } else if (
        deleting &&
        characterIndex === 0
    ) {
        deleting = false;
        jobIndex++;

        if (jobIndex === jobs.length) {
            jobIndex = 0;
        }

        speed = 350;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(function (element) {
        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
            element.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("main section");

function updateNavigation() {
    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach(function (link) {
        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateNavigation);
updateNavigation();


// =========================
// BACK TO TOP
// =========================

const backToTop = document.getElementById("back-to-top");

if (backToTop) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// =========================
// LIGHT / DARK MODE
// =========================

const themeButton = document.getElementById("theme-button");

if (themeButton) {
    document.body.classList.remove("light-mode");

    themeButton.textContent = "Light mode";
    themeButton.setAttribute("aria-pressed", "false");
    themeButton.setAttribute(
        "aria-label",
        "Switch to light mode"
    );

    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");

        const isLightMode =
            document.body.classList.contains("light-mode");

        themeButton.textContent =
            isLightMode ? "Dark mode" : "Light mode";

        themeButton.setAttribute(
            "aria-pressed",
            String(isLightMode)
        );

        themeButton.setAttribute(
            "aria-label",
            isLightMode
                ? "Switch to dark mode"
                : "Switch to light mode"
        );
    });
}


// =========================
// AUTOMATIC YEAR
// =========================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
