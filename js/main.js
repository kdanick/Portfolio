// Highlights the sidebar nav link matching the section currently in view.
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector("#theme-toggle");
  const root = document.documentElement;

  const savedTheme = localStorage.getItem("theme");
  let currentTheme =
    savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";

  if (savedTheme === "light" || savedTheme === "dark") {
    root.dataset.theme = savedTheme;
  } else {
    delete root.dataset.theme;
  }

  const updateThemeButton = (theme) => {
    const nextTheme = theme === "light" ? "dark" : "light";
    themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
    themeToggle.setAttribute("title", `Switch to ${nextTheme} mode`);
  };

  updateThemeButton(currentTheme);

  const canShowPointerGlow =
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (canShowPointerGlow) {
    window.addEventListener(
      "pointermove",
      (event) => {
        root.style.setProperty("--pointer-x", `${event.clientX}px`);
        root.style.setProperty("--pointer-y", `${event.clientY}px`);
        root.classList.add("pointer-glow-active");
      },
      { passive: true },
    );

    window.addEventListener("pointerout", (event) => {
      if (!event.relatedTarget) {
        root.classList.remove("pointer-glow-active");
      }
    });

    window.addEventListener("blur", () => {
      root.classList.remove("pointer-glow-active");
    });
  }

  themeToggle.addEventListener("click", () => {
    const nextTheme = currentTheme === "light" ? "dark" : "light";

    root.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    currentTheme = nextTheme;
    updateThemeButton(nextTheme);
  });

  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (sections.length > 0 && navLinks.length > 0) {
    const setActive = (id) => {
      navLinks.forEach((link) => {
        const isMatch = link.getAttribute("href") === `#${id}`;
        link.classList.toggle("active", isMatch);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));
  }
});
