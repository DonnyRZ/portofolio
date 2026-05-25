function renderWorkflow(items) {
  return items.map((item, index) => `
    <div class="workflow-step">
      <b>${String(index + 1).padStart(2, "0")}</b>
      <div>
        <strong>${item[0]}</strong>
        <p>${item[1]}</p>
      </div>
    </div>
  `).join("");
}

function renderArchitecture(items) {
  return items.map((item, index) => `
    <div class="architecture-item">
      <b>${String(index + 1).padStart(2, "0")}</b>
      <div>
        <strong>${item[0]}</strong>
        <p>${item[1]}</p>
      </div>
    </div>
  `).join("");
}

function renderTableRows(items) {
  return items.map(item => `
    <tr>
      <th>${item[0]}</th>
      <td>${item[1]}</td>
    </tr>
  `).join("");
}

function renderProjectDetail() {
  const key = document.body.dataset.projectKey;
  const project = window.projectDetails[key];
  if (!project) return;

  document.title = `${project.title} - Donny Santosa`;
  document.getElementById("detailIndustry").textContent = project.industry;
  document.getElementById("detailTitle").textContent = project.title;
  document.getElementById("detailSummary").textContent = project.summary;
  document.getElementById("detailCompany").textContent = project.company || "Portfolio case study";
  document.getElementById("detailPeriod").textContent = project.period || "Project period";
  document.getElementById("detailRepository").textContent = project.repository || "Private/company repository";
  document.getElementById("detailArtifacts").textContent = project.artifacts || "Non-confidential case study and technical artifacts";
  document.getElementById("snapshotProblem").textContent = project.snapshot.problem;
  document.getElementById("snapshotOutput").textContent = project.snapshot.output;
  document.getElementById("snapshotUsers").textContent = project.snapshot.users;
  document.getElementById("snapshotTech").textContent = project.snapshot.tech;
  document.getElementById("overviewBody").innerHTML = project.overview.map(text => `<p>${text}</p>`).join("");
  document.getElementById("workflowList").innerHTML = renderWorkflow(project.flow);
  document.querySelector("#techStackTable tbody").innerHTML = renderTableRows(project.techStack);
  document.getElementById("modelDetailsList").innerHTML = renderArchitecture(project.aiDetails);
  document.getElementById("interfacesList").innerHTML = renderArchitecture(project.interfaces);
  document.getElementById("evaluationList").innerHTML = renderArchitecture(project.evaluation);
  document.getElementById("operationsList").innerHTML = renderArchitecture(project.operations);
  document.getElementById("limitationsText").textContent = project.limitations;
}

renderProjectDetail();
