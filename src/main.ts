import "./style.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { initThemeToggle } from "./theme";

initThemeToggle();

AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: false,
});

function toggleLegacyMenu() {
  const navbar = document.getElementById("nav-links");
  const menuBtn = document.querySelector<HTMLButtonElement>(".menu-btn");

  if (navbar) {
    navbar.classList.toggle("show");
    navbar.classList.toggle("opacity-100");
  }

  if (menuBtn) {
    menuBtn.classList.toggle("open");
  }
}

function closeLegacyMenu() {
  const navbar = document.getElementById("nav-links");
  const menuBtn = document.querySelector<HTMLButtonElement>(".menu-btn");

  if (navbar) {
    navbar.classList.remove("show");
    navbar.classList.remove("opacity-100");
  }

  if (menuBtn) {
    menuBtn.classList.remove("open");
  }
}

function toggleMobilePanel() {
  const menuBtn = document.getElementById(
    "menu-toggle",
  ) as HTMLButtonElement | null;
  const mobileNav = document.getElementById("mobile-nav") as HTMLElement | null;

  if (!menuBtn || !mobileNav) return;

  const isOpen = !mobileNav.classList.contains("hidden");
  mobileNav.classList.toggle("hidden", isOpen);
  menuBtn.setAttribute("aria-expanded", String(!isOpen));
}

function closeMobilePanel() {
  const menuBtn = document.getElementById(
    "menu-toggle",
  ) as HTMLButtonElement | null;
  const mobileNav = document.getElementById("mobile-nav") as HTMLElement | null;

  if (!menuBtn || !mobileNav) return;

  mobileNav.classList.add("hidden");
  menuBtn.setAttribute("aria-expanded", "false");
}

document.addEventListener("DOMContentLoaded", () => {
  // ✅ NEW responsive header toggle (mobile panel)
  const newMenuBtn = document.getElementById(
    "menu-toggle",
  ) as HTMLButtonElement | null;
  if (newMenuBtn) {
    newMenuBtn.addEventListener("click", toggleMobilePanel);
  }

  // ✅ OLD header toggle (if you still have it in HTML)
  const legacyMenuBtn = document.querySelector<HTMLButtonElement>(".menu-btn");
  if (legacyMenuBtn) {
    legacyMenuBtn.addEventListener("click", toggleLegacyMenu);
  }

  // ✅ Close menus when any nav link is clicked
  const navLinks = document.querySelectorAll<HTMLAnchorElement>(
    ".nav-link, #mobile-nav a",
  );
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeLegacyMenu();
      closeMobilePanel();
    });
  });

  // ✅ Back to top
  const backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        backToTop.classList.remove("hidden");
        backToTop.classList.add("opacity-100");
      } else {
        backToTop.classList.add("hidden");
        backToTop.classList.remove("opacity-100");
      }
    });

    backToTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
