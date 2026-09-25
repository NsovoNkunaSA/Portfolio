
// =========================
// MOBILE MENU
// =========================

const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");


// Open and close the mobile menu

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// =========================
// CLOSE MENU AFTER CLICKING
// =========================

const links = navLinks.querySelectorAll("a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});
