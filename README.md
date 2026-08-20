# Portfolio

Static site, no build step, no framework. Deploy as-is to GitHub Pages.

## 1. Fill in your content

- **`index.html`** — swap "Your Name", the eyebrow/intro copy, email, GitHub/LinkedIn links.
- **`js/projects.js`** — this is the single source of truth for every project. Edit the
  `demo-system` entry with your real title/summary/body copy. To add a future project,
  copy the commented-out template at the bottom of the file into a new object.
- **`assets/video/demo.mp4`** — your demo video (see compression notes below).
- **`assets/img/demo-poster.jpg`** — a still frame shown before the video loads / on mobile.

## 2. Compress your video

GitHub Pages has no CDN or transcoding — an uncompressed screen recording will load slowly,
especially on mobile. Aim for well under 10MB for a 15–30s loop.

```bash
# Re-encode, strip audio, cap resolution/bitrate
ffmpeg -i original.mov \
  -vf "scale=1280:-2" \
  -an -c:v libx264 -crf 28 -preset slow \
  assets/video/demo.mp4

# Grab a poster frame from the compressed video
ffmpeg -i assets/video/demo.mp4 -ss 00:00:01 -vframes 1 assets/img/demo-poster.jpg
```

If it's still too large after compression, host the video on Cloudinary/Bunny CDN/YouTube
unlisted embed instead, and just point `thumbnailVideo` / `detailVideo` in `projects.js`
at that URL — everything else keeps working unchanged.

On phones the homepage automatically skips autoplay and shows the poster frame instead,
to save data — full video still plays (with controls) on the project detail page.

## 3. Preview locally

Any static server works, e.g.:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

(Opening `index.html` directly via `file://` also mostly works, but video autoplay
policies can behave inconsistently — a local server is more reliable.)

## 4. Deploy to GitHub Pages

1. Create a repo (either `yourusername.github.io` for a root personal site, or any
   name — Pages can serve from a subpath too).
2. Push this folder's contents to the `main` branch.
3. Repo → Settings → Pages → set source to `main` branch, `/ (root)`.
4. Your site is live at `https://yourusername.github.io/` (or `/reponame/` if not
   a root-named repo).
5. Optional custom domain: add a `CNAME` file at the repo root containing your domain.

## Adding your next project later

1. Add a new object to `js/projects.js`.
2. Drop its video + any stills into `assets/`.
3. Commit + push. The homepage grid and detail page both pick it up automatically —
   no HTML to duplicate.
