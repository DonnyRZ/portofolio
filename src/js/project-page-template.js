window.projectPageTemplate = function projectPageTemplate() {
  return `
    <header class="nav">
      <div class="container nav-inner">
        <a href="../index.html" class="brand">
          <img class="brand-mark brand-photo" src="../asset/profile-picture.png" alt="Donny Santosa profile picture" />
          <span>Donny Santosa</span>
        </a>
        <nav class="nav-links">
          <a href="../index.html#systems">Projects</a>
          <a href="../index.html#focus">Focus</a>
          <a href="../index.html#contact">Contact</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="detail-hero">
        <div class="container">
          <a class="back-link" href="../index.html#systems">Back to projects</a>
          <p class="detail-kicker" id="detailIndustry"></p>
          <h1 class="detail-title" id="detailTitle"></h1>
          <p class="detail-summary" id="detailSummary"></p>
          <span class="detail-status">End-to-end project case study</span>
          <div class="detail-meta">
            <div><strong>Company / Context</strong><span id="detailCompany"></span></div>
            <div><strong>Period</strong><span id="detailPeriod"></span></div>
            <div><strong>Repository</strong><span id="detailRepository"></span></div>
            <div><strong>Public Artifacts</strong><span id="detailArtifacts"></span></div>
          </div>
        </div>
      </section>

      <section class="case-section">
        <div class="container">
          <div class="snapshot-grid">
            <div class="snapshot-item"><strong>Problem</strong><span id="snapshotProblem"></span></div>
            <div class="snapshot-item"><strong>Output</strong><span id="snapshotOutput"></span></div>
            <div class="snapshot-item"><strong>Users</strong><span id="snapshotUsers"></span></div>
            <div class="snapshot-item"><strong>Tech Focus</strong><span id="snapshotTech"></span></div>
          </div>
        </div>
      </section>

      <section class="case-section">
        <div class="container case-grid">
          <div class="case-label">Overview</div>
          <div class="case-body" id="overviewBody"></div>
        </div>
      </section>

      <section class="case-section">
        <div class="container case-grid">
          <div class="case-label">End-to-End Flow</div>
          <div class="workflow-list" id="workflowList"></div>
        </div>
      </section>

      <section class="case-section">
        <div class="container case-grid">
          <div class="case-label">Tech Stack</div>
          <div>
            <table class="detail-table" id="techStackTable">
              <tbody></tbody>
            </table>
          </div>
        </div>
      </section>

      <section class="case-section">
        <div class="container case-grid">
          <div class="case-label">Model / AI Details</div>
          <div class="architecture-list" id="modelDetailsList"></div>
        </div>
      </section>

      <section class="case-section">
        <div class="container case-grid">
          <div class="case-label">Product Interfaces</div>
          <div class="architecture-list" id="interfacesList"></div>
        </div>
      </section>

      <section class="case-section">
        <div class="container case-grid">
          <div class="case-label">Evaluation & Monitoring</div>
          <div class="architecture-list" id="evaluationList"></div>
        </div>
      </section>

      <section class="case-section">
        <div class="container case-grid">
          <div class="case-label">Deployment & Operations</div>
          <div class="architecture-list" id="operationsList"></div>
        </div>
      </section>

      <section class="case-section">
        <div class="container case-grid">
          <div class="case-label">Limitations</div>
          <div class="limitation-block" id="limitationsText"></div>
        </div>
      </section>

      <nav class="container next-project-nav" aria-label="Project navigation">
        <a href="../index.html#systems">Back to selected projects</a>
        <a href="../index.html#contact">Contact</a>
      </nav>
    </main>

    <footer>
      <div class="container footer-inner">
        <a href="../index.html#systems">Back to selected projects</a>
        <span>AI Product Systems Portfolio</span>
      </div>
    </footer>
  `;
};
