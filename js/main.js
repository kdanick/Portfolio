const grid = document.getElementById("gallery-grid");

PROJECTS.forEach((project) => {
  const a = document.createElement("a");
  a.className = "artwork";
  a.href = `project.html?project=${encodeURIComponent(project.slug)}`;
  a.setAttribute("aria-label", `View project: ${project.title}`);

  a.innerHTML = `
    <div class="artwork__frame">
      <video class="artwork__media"
             src="${project.thumbnailVideo}"
             poster="${project.thumbnailPoster}"
             autoplay muted loop playsinline>
      </video>
      <div class="artwork__cue"><span>View project</span></div>
    </div>
    <div class="artwork__plate">
      <p class="artwork__title">${project.title}</p>
      <p class="artwork__meta">${project.medium} — ${project.year}</p>
    </div>
  `;

  grid.appendChild(a);
});

// On narrow / low-power devices, autoplaying background video is costly
// and often blocked anyway — fall back to the poster frame.
const prefersReducedData = window.matchMedia("(max-width: 640px)").matches;
if (prefersReducedData) {
  document.querySelectorAll(".artwork__media").forEach((v) => {
    v.removeAttribute("autoplay");
    v.pause();
  });
}
