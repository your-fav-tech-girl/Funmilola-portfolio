import "./style.css";

// Wrap everything inside DOMContentLoaded to be safe
document.addEventListener("DOMContentLoaded", () => {
  // Code vs Image toggle
  const codeBlock = document.getElementById("code-block") as HTMLElement;
  const imageBlock = document.getElementById("image-block") as HTMLElement;
  const toggleBtn = document.getElementById("toggle-btn") as HTMLButtonElement;

  let showingCode = true;

  if (toggleBtn && codeBlock && imageBlock) {
    toggleBtn.addEventListener("click", () => {
      showingCode = !showingCode;
      if (showingCode) {
        codeBlock.classList.remove("hidden");
        imageBlock.classList.add("hidden");
      } else {
        codeBlock.classList.add("hidden");
        imageBlock.classList.remove("hidden");
      }
    });
  }
});

function toggleMenu() {
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

function closeMenu() {
  const navbar = document.getElementById("nav-links");
  const menuBtn = document.querySelector<HTMLButtonElement>(".menu-btn");

  if (navbar) {
    navbar.classList.remove("show", "opacity-100");
  }
  if (menuBtn) {
    menuBtn.classList.remove("open");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector<HTMLButtonElement>(".menu-btn");
  const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-link");

  if (menuBtn) {
    menuBtn.addEventListener("click", toggleMenu);
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});

document.addEventListener("DOMContentLoaded", () => {
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

    // Smooth scroll behavior
    backToTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
