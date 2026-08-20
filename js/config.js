window.SITE_CONFIG = {
  name: "KDanick.",
  shortName: "KD",
  email: "ndatinyakdanick@gmail.com",
  githubUrl: "https://github.com/yourusername",
  linkedinUrl: "https://linkedin.com/in/yourusername",
  siteTitle: "KDanick. — Portfolio",
  siteDescription:
    "Portfolio of KDanick. — systems, demos, and work in progress.",
};

const applySiteConfig = () => {
  const titleTag = document.querySelector("title[data-site-title]");
  if (titleTag) {
    titleTag.textContent = SITE_CONFIG.siteTitle;
  }

  const descriptionTag = document.querySelector(
    'meta[name="description"][data-site-description]',
  );
  if (descriptionTag) {
    descriptionTag.setAttribute("content", SITE_CONFIG.siteDescription);
  }

  document.querySelectorAll('[data-site="name"]').forEach((element) => {
    element.textContent = SITE_CONFIG.name;
  });

  document.querySelectorAll('[data-site="shortName"]').forEach((element) => {
    element.textContent = SITE_CONFIG.shortName;
  });

  document.querySelectorAll("[data-site-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  document.querySelectorAll("[data-site-href]").forEach((element) => {
    const key = element.dataset.siteHref;
    const hrefMap = {
      email: `mailto:${SITE_CONFIG.email}`,
      github: SITE_CONFIG.githubUrl,
      linkedin: SITE_CONFIG.linkedinUrl,
    };

    if (hrefMap[key]) {
      element.href = hrefMap[key];
    }
  });
};

document.addEventListener("DOMContentLoaded", applySiteConfig);
applySiteConfig();
