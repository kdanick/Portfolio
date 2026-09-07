# Portfolio V1

A single-page portfolio (fixed sidebar + scrolling content), built with
Tailwind CSS, ready to deploy on GitHub Pages.

## Before you deploy — edit these placeholders

Open `index.html` and update:
- `Danick` → your full name (appears in the `<title>` and sidebar `<h1>`)
- GitHub / LinkedIn URLs in the sidebar social icons
- `you@example.com` (two places: the email icon and the "Say hello" link)
- Project links (`href="#"`) once you have real repos/live URLs to point to
- Swap in real project screenshots if you want images in the Projects cards

## Project structure

```
portfolio-v1/
├── index.html          # all page content and structure
├── css/styles.css      # compiled Tailwind CSS (already built — this is what ships)
├── js/main.js          # scroll-spy for the sidebar nav
├── src/input.css       # Tailwind source (edit THIS, not css/styles.css)
├── tailwind.config.js  # color/font/design tokens
└── package.json
```

## Editing styles

If you change any Tailwind classes in `index.html` or add custom styles in
`src/input.css`, rebuild the CSS:

```bash
npm install
npm run build
```

This regenerates `css/styles.css`. `css/styles.css` is the only CSS file
that actually gets served — don't edit it directly, your changes will be
overwritten on the next build.

For live-reload while you work:

```bash
npm run watch
```

## Deploying to GitHub Pages

1. Push this folder to a GitHub repo (e.g. `yourusername.github.io` for a
   root-level user site, or any repo name for a project site).
2. In the repo: **Settings → Pages → Source** → select the `main` branch
   and `/ (root)` folder.
3. Wait a minute, then your site is live at:
   - `https://yourusername.github.io` (if repo is named `yourusername.github.io`), or
   - `https://yourusername.github.io/repo-name` (for any other repo name)

No build step runs on GitHub Pages — it just serves the static files, which
is why `css/styles.css` is committed pre-built.

## Design tokens (for reference)

- Background: `#0B1120` (ink navy) with a faint grid pattern
- Card/hover surface: `#111A2E`
- Accent: `#F5A623` (amber — evokes network hardware status LEDs)
- Headings: Space Grotesk · Body: Inter · Labels/tags: JetBrains Mono
