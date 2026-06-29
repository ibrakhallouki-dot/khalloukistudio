/**
 * Khallouki Studio - Production Frontend Script
 * Clean, safe, and scalable structure
 */

(function () {
    "use strict";

    // =========================
    // DOM Ready Safety Wrapper
    // =========================
    document.addEventListener("DOMContentLoaded", function () {

        initMobileMenu();
        initSmoothScroll();
        initPageReadyState();

    });

    // =========================
    // Mobile Menu
    // =========================
    function initMobileMenu() {
        const menuBtn = document.getElementById("menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");

        if (!menuBtn || !mobileMenu) return;

        menuBtn.addEventListener("click", function () {
            mobileMenu.classList.toggle("open");
        });
    }

    // =========================
    // Smooth Scroll Navigation
    // =========================
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener("click", function (e) {
                const targetId = this.getAttribute("href");

                if (!targetId || targetId === "#") return;

                const target = document.querySelector(targetId);
                if (!target) return;

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            });
        });
    }

    // =========================
    // Page Ready State
    // =========================
    function initPageReadyState() {
        window.addEventListener("load", function () {
            document.body.classList.add("loaded");
        });
    }

})();
