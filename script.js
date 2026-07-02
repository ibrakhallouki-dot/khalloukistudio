"use strict";

document.addEventListener("DOMContentLoaded", () => {

    // Mobile Menu
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.querySelector(".navbar");

    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });

        document.querySelectorAll(".navbar a").forEach(link => {
            link.addEventListener("click", () => {
                navbar.classList.remove("active");
            });
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Footer Year
    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

});
