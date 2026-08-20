const params = new URLSearchParams(window.location.search);
const slug = params.get("project");
const project = PROJECTS.find((p) => p.slug === slug) || PROJECTS[0];

if (!project) {
  document.getElementById("p-title").textContent = "Project not found";
} else {
  document.title = `${project.title} — ${SITE_CONFIG.name}`;

  document.getElementById("p-title").textContent = project.title;
  document.getElementById("p-summary").textContent = project.summary;
  document.getElementById("p-year").textContent = project.year;
  document.getElementById("p-medium").textContent = project.medium;

  const video = document.getElementById("p-video");
  const videoSrc = document.getElementById("p-video-src");
  videoSrc.src = project.detailVideo;
  video.poster = project.thumbnailPoster || "";
  video.load();

  const body = document.getElementById("p-body");
  body.innerHTML = project.body
    .map(
      (section) => `
    <h2>${section.heading}</h2>
    <p>${section.text}</p>
  `,
    )
    .join("");

  const galleryEl = document.getElementById("p-gallery");
  if (project.stills && project.stills.length) {
    galleryEl.innerHTML = project.stills
      .map(
        (s) => `
      <figure>
        <img src="${s.src}" alt="${s.caption || ""}" loading="lazy">
        <figcaption>${s.caption || ""}</figcaption>
      </figure>
    `,
      )
      .join("");
  }
}
