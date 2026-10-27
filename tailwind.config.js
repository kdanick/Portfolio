/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        ink: "var(--bg)",
        slate: {
          card: "var(--surface)",
          line: "var(--border)",
        },
        paper: "var(--text-bold)",
        body: "var(--text)",
        muted: "var(--muted)",
        signal: "var(--link)",
        "on-link": "var(--on-link)",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
