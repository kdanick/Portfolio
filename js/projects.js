/**
 * Every project lives here as one object. To add a new project later:
 *   1. Add a new object to this array
 *   2. Drop its video/images into /assets/
 * Nothing else needs to change — the homepage grid and the detail
 * page template both read from this file.
 */
const PROJECTS = [
  {
    slug: "demo-system",
    title: "Wiresight",
    year: "2026",
    medium: "System walkthrough — screen capture",
    summary:
      "A short walkthrough of a system I've been building recently, shown here as a working demo rather than a finished case study.",
    thumbnailVideo: "assets/video/demo.mp4",
    thumbnailPoster: "assets/img/demo-poster.jpg",
    detailVideo: "assets/video/demo.mp4",
    body: [
      {
        heading: "What this is",
        text: "Replace this paragraph with a couple of sentences on what the system does, who it's for, and the problem it solves.",
      },
      {
        heading: "How it works",
        text: "Replace this with the mechanics — the architecture, the key decisions, or the interesting technical part worth calling out.",
      },
      {
        heading: "Notes",
        text: "Anything else worth mentioning: constraints, what you'd do differently, or what's next.",
      },
    ],
    stills: [
      // { src: "assets/img/demo-still-1.jpg", caption: "Short caption for this still" }
    ],
  },

  // Add the next project here once it's ready, e.g.:
  // {
  //   slug: "second-project",
  //   title: "...",
  //   year: "2026",
  //   medium: "...",
  //   summary: "...",
  //   thumbnailVideo: "assets/video/second.mp4",
  //   thumbnailPoster: "assets/img/second-poster.jpg",
  //   detailVideo: "assets/video/second.mp4",
  //   body: [ { heading: "...", text: "..." } ],
  //   stills: []
  // }
];
