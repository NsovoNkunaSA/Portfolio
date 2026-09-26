
// =========================
// MOBILE MENU
// =========================

const menuButton = document.getElementById("menu-button");

const navLinks = document.getElementById("nav-links");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu when a link is clicked

const navItems =
    document.querySelectorAll(".nav-link");


navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// =========================
// TYPING ANIMATION
// =========================

const typingText =
    document.getElementById("typing-text");


const jobs = [
    "Software Developer",
    "Web Developer",
    "JavaScript Developer",
    "Problem Solver"
];


let jobIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentJob =
        jobs[jobIndex];


    if (deleting) {

        characterIndex--;

    } else {

        characterIndex++;

    }


    typingText.textContent =
        currentJob.substring(
            0,
            characterIndex
        );


    let speed = deleting ? 50 : 100;


    if (!deleting &&
        characterIndex === currentJob.length) {

        speed = 1800;

        deleting = true;

    }


    else if (
        deleting &&
        characterIndex === 0
    ) {

        deleting = false;

        jobIndex++;

        if (jobIndex === jobs.length) {

            jobIndex = 0;

        }

        speed = 400;

    }


    setTimeout(typeEffect, speed);

}


typeEffect();


// =========================
// SCROLL REVEAL
// =========================

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;


        if (elementTop <
            windowHeight - 100) {

            element.classList.add("visible");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();


// =========================
// ACTIVE NAVIGATION
// =========================

const sections =
    document.querySelectorAll("section");


function updateNavigation() {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;


        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

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


window.addEventListener(
    "scroll",
    updateNavigation
);


// =========================
// BACK TO TOP
// =========================

const backToTop =
    document.getElementById("back-to-top");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }
);


backToTop.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


// =========================
// LIGHT / DARK MODE
// =========================

const themeButton =
    document.getElementById("theme-button");


document.body.classList.add("light-mode");
themeButton.textContent = "🌙";


themeButton.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "light-mode"
        );


        if (
            document.body.classList.contains(
                "light-mode"
            )
        ) {

            themeButton.textContent = "🌙";

        } else {

            themeButton.textContent = "☀";

        }

    }
);


// =========================
// AUTOMATIC YEAR
// =========================

const year =
    document.getElementById("year");


year.textContent =
    new Date().getFullYear();

