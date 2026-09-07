/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-bg) / <alpha-value>)",
        slate: {
          card: "rgb(var(--color-surface) / <alpha-value>)",
          line: "rgb(var(--color-grid) / <alpha-value>)",
        },
        paper: "rgb(var(--color-text) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        signal: "rgb(var(--color-accent) / <alpha-value>)",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: {
        content: "640px",
      },
    },
  },
  plugins: [],
};
