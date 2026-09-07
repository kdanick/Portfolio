// Highlights the sidebar nav link matching the section currently in view.
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector("#theme-toggle");
  const root = document.documentElement;

  const savedTheme = localStorage.getItem("theme");
  const currentTheme = savedTheme === "light" ? "light" : "dark";

  root.dataset.theme = currentTheme;

  const updateThemeButton = (theme) => {
    const nextTheme = theme === "light" ? "dark" : "light";
    themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
    themeToggle.setAttribute("title", `Switch to ${nextTheme} mode`);
  };

  updateThemeButton(currentTheme);

  themeToggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "light" ? "dark" : "light";

    root.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    updateThemeButton(nextTheme);
  });

  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

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
});
