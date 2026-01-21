type Theme = "light" | "dark";
const STORAGE_KEY = "theme";

const sun = document.getElementById("icon-sun") as HTMLElement | null;
const moon = document.getElementById("icon-moon") as HTMLElement | null;
const btn = document.getElementById("theme-toggle") as HTMLButtonElement | null;

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");

  // icon swap
  if (sun && moon) {
    sun.classList.toggle("hidden", theme === "dark");
    moon.classList.toggle("hidden", theme === "light");
  }
}

function getPreferredTheme(): Theme {
  const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (saved === "light" || saved === "dark") return saved;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function initThemeToggle() {
  const initial = getPreferredTheme();
  applyTheme(initial);

  if (!btn) return;

  btn.addEventListener("click", () => {
    const next: Theme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";

    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });
}
