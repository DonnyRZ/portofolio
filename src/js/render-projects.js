window.renderProjectList = function renderProjectList(projects, listElement) {
  listElement.innerHTML = projects.map((project, index) => `
    <a class="project-row" href="${project.href}">
      <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
      <span class="project-title-wrap">
        <span class="project-title">${project.title}</span>
        <span class="project-meta">${project.company} | ${project.period}</span>
      </span>
      <span class="project-domain">${project.domain}</span>
      <span class="project-tags">${project.tags}</span>
      <span class="project-action">View details</span>
    </a>
  `).join("");
};
