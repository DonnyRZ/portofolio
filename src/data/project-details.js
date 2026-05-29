window.projectDetails = {
  "b2b-meeting-assistant": {
    title: "B2B Meeting Assistant",
    industry: "B2B SaaS",
    company: "PT Steradian Data Optima",
    period: "Aug 2025 - Nov 2025",
    repository: "Private/company repository",
    artifacts: "Public case study, realtime transcript workflow, API contract, dashboard/console preview",
    summary: "Asisten meeting untuk membantu tim sales, konsultan, project manager, dan business analyst menangkap keputusan, risiko, action item, dan follow-up saat rapat B2B berjalan.",
    snapshot: {
      problem: "Meeting klien sering panjang, konteks berubah cepat, dan keputusan penting mudah tidak tercatat.",
      output: "Live meeting assistance, action item, decision log, risk note, clarification prompt, recap, dan follow-up draft.",
      users: "Sales, account manager, consultant, project manager, business analyst, dan customer success.",
      tech: "GPT-5 API, GPT Realtime, Electron desktop app, React, TypeScript, backend API, Cloud SQL, BigQuery, Cloud Run."
    },
    overview: [
      "Project ini adalah meeting intelligence assistant untuk rapat B2B seperti discovery call, steering committee, workshop, FGD, dan stakeholder discussion. Fokusnya bukan menggantikan user saat meeting, tetapi membantu user menangkap konteks penting secara real-time dan mengubahnya menjadi artifact yang bisa direview.",
      "Sistem dibuat dengan prinsip human-controlled assistance. AI tidak auto-speaking, tidak auto-commit, dan tidak menyimpan output sebagai catatan resmi sebelum user meninjau atau menyimpannya."
    ],
    flow: [
      ["Meeting workspace", "User menyiapkan workspace berisi agenda, objective, client context, participant notes, prior decisions, dan known risks."],
      ["Audio and transcript capture", "Desktop app menangkap audio meeting yang sudah diotorisasi, lalu realtime transcript masuk ke quality gate sebelum dipakai sebagai konteks."],
      ["Context assembly", "Backend menyusun konteks dari transcript terbaru, agenda, meeting memory, dan artifact sebelumnya agar LLM tidak menjawab di luar konteks."],
      ["User-triggered action", "User memilih action seperti summarize, clarify, decisions, risks, action items, atau follow-up draft."],
      ["Structured AI output", "LLM menghasilkan JSON schema berisi output, evidence, confidence, dan metadata agar bisa divalidasi dan diaudit."],
      ["Artifact review", "User mengedit, menyimpan, atau membuang output. Artifact yang disimpan masuk ke meeting record dan audit log."],
      ["Post-meeting recap", "Sistem menyusun recap, open questions, action list, dan follow-up draft untuk dikirim setelah review."]
    ],
    techStack: [
      ["Frontend / UI", "Electron desktop app dengan React + TypeScript untuk live side panel, mini mode, expanded mode, dan artifact review."],
      ["Backend / API", "Node.js/TypeScript atau FastAPI service untuk meeting session lifecycle, realtime token, AI action orchestration, dan artifact API."],
      ["ML / LLM", "GPT Realtime untuk live transcript/realtime assistance dan GPT-5 API untuk structured action seperti summary, decision, risk, action item, dan email draft."],
      ["Data & Storage", "Cloud SQL PostgreSQL untuk workspace/session/artifact metadata, Cloud Storage untuk artifact file, dan BigQuery untuk event log."],
      ["Cloud / Deployment", "Cloud Run untuk backend API, Cloud Run Jobs untuk retention dan evaluation jobs, Secret Manager untuk API keys, dan Cloud Scheduler untuk scheduled jobs."],
      ["Monitoring / Governance", "Cloud Logging, Cloud Monitoring, prompt versioning, consent status, transcript rejection log, and audit event tracking."]
    ],
    aiDetails: [
      ["Realtime transcript layer", "Mengubah audio meeting menjadi transcript segment dengan timestamp, speaker label jika tersedia, dan confidence. Segment dengan kualitas rendah ditandai agar tidak langsung dipakai sebagai sumber keputusan."],
      ["Structured action LLM", "LLM menerima konteks meeting dan action yang dipilih user, lalu menghasilkan JSON schema seperti action_items, decisions, risks, clarification_questions, atau follow_up_email."],
      ["Evidence alignment", "Setiap output penting wajib punya evidence dari transcript atau meeting context. Jika evidence tidak cukup, sistem memberi status low_confidence atau unknown daripada mengarang."],
      ["Speaker attribution", "Speaker label hanya dianggap bantuan, bukan kebenaran absolut. Jika diarization confidence rendah, owner atau speaker ditandai unknown dan harus direview user."]
    ],
    interfaces: [
      ["Desktop console", "Live side panel untuk melihat transcript quality, menjalankan action, membaca AI response, dan menyimpan artifact."],
      ["Workspace API", "Endpoint untuk membuat workspace, menyimpan agenda, mengelola participant, dan mengambil meeting memory."],
      ["Session API", "Endpoint untuk start/end meeting session, membuat realtime client token, dan mencatat consent state."],
      ["AI action API", "Endpoint user-triggered untuk summarize, decisions, risks, action items, clarification, dan follow-up draft."],
      ["Artifact API", "Endpoint untuk save, edit, discard, dan audit meeting artifact."]
    ],
    evaluation: [
      ["Realtime quality", "Realtime connection success, transcript acceptance rate, stale context rate, dan action latency."],
      ["LLM output quality", "JSON validity, schema pass rate, evidence alignment, unsupported claim rate, dan stale-context correctness."],
      ["User review signal", "Save rate, edit rate, discard rate, rejected output reason, dan artifact usefulness feedback."],
      ["Operational monitoring", "Session errors, API latency, BigQuery event completeness, retention job status, dan prompt version regression."]
    ],
    operations: [
      ["Audit logging", "Semua AI action, transcript rejection, artifact save/edit/discard, consent state, dan prompt version dicatat sebagai audit event."],
      ["Privacy controls", "Raw audio tidak disimpan secara default, transcript/artifact mengikuti retention policy, dan akses dibatasi dengan RBAC."],
      ["Prompt governance", "Prompt template punya version, evaluation set, release note, dan rollback path jika output quality turun."],
      ["Deployment", "Backend berjalan di Cloud Run, metadata di Cloud SQL, event di BigQuery, artifact di Cloud Storage, secrets di Secret Manager, dan alerting di Cloud Monitoring."]
    ],
    limitations: "Sistem ini bukan hidden recorder, bukan peserta meeting otomatis, dan tidak mengirim pesan eksternal tanpa review user. Legal compliance tetap mengikuti policy organisasi. Speaker attribution dan transcript confidence diperlakukan sebagai sinyal yang harus direview jika kualitasnya rendah."
  },
  "bpjs-claim-assistant": {
    title: "BPJS Claim Assistant",
    industry: "Healthcare / BPJS Claim",
    company: "PT Steradian Data Optima",
    period: "Apr 2025 - Jul 2025",
    repository: "Private/company repository",
    artifacts: "Public case study, API contract, audit logging flow, architecture diagram, structured output schema",
    summary: "AI-assisted coding workflow untuk membantu medical coder, dokter, atau claim officer membaca anamnesis dan dokumentasi klinis, menyiapkan saran ICD, memeriksa evidence, dan menilai claim readiness dengan final approval tetap pada manusia.",
    snapshot: {
      problem: "Clinical coding dan klaim BPJS membutuhkan evidence yang jelas, validasi kode, dan review manusia karena risikonya tinggi.",
      output: "SOAP summary, ICD-10 suggestion, ICD-9-CM procedure suggestion, candidate INA-CBG explanation, validation status, dan review queue.",
      users: "Medical coder, dokter, claim officer, medical record staff, hospital operations, dan supervisor klaim.",
      tech: "Gemini API, Google Cloud Speech-to-Text, JSON schema validation, ICD master data, human review workflow, audit log, Cloud Run, BigQuery."
    },
    overview: [
      "Project ini adalah clinical coding assistant, bukan diagnosis AI dan bukan official BPJS grouper. Sistem membantu membaca dokumentasi klinis, mengekstrak evidence, memberi saran kode, lalu menempatkan semua output ke review queue.",
      "Workflow mengutamakan structured output, master data validation, evidence alignment, human approval, reference versioning, audit trail, dan privacy control untuk data klinis."
    ],
    flow: [
      ["Clinical note input", "User memasukkan anamnesis, SOAP, discharge summary, OCR text, transcript, atau supporting note dari episode perawatan."],
      ["Clinical summarization", "LLM membuat SOAP summary terstruktur dengan evidence yang berasal dari dokumen input."],
      ["ICD suggestion", "LLM memberi saran ICD-10 diagnosis dan ICD-9-CM procedure dalam JSON schema, lengkap dengan alasan dan evidence."],
      ["Reference validation", "Kode dicek terhadap ICD master data, code status, reference version, dan required fields."],
      ["INA-CBG candidate explanation", "Sistem memberi candidate explanation berbasis kode dan referensi lokal, tetapi bukan official BPJS grouper."],
      ["Human review", "Coder menerima, mengedit, atau menolak rekomendasi sebelum artifact dipakai untuk klaim."],
      ["Audit trail", "Input reference, output AI, edit, approval, rejection reason, dan version metadata disimpan untuk audit."]
    ],
    techStack: [
      ["Frontend / UI", "React + TypeScript clinical coding console untuk case list, SOAP view, suggested codes, evidence panel, validation status, dan approval workflow."],
      ["Backend / API", "Django/FastAPI-style backend untuk document ingestion, SOAP generation, ICD suggestion, validation, review action, dan audit API."],
      ["ML / LLM", "Gemini API untuk clinical summarization dan structured extraction, Google Cloud Speech-to-Text untuk transcript workflow, dan JSON schema validation untuk validasi otomatis."],
      ["Data & Storage", "Cloud SQL untuk episode, code suggestion, approval metadata, prompt registry, dan reference version Cloud Storage untuk document artifact."],
      ["Cloud / Deployment", "Cloud Run untuk backend service, Cloud Run Jobs untuk batch/evaluation jobs, Secret Manager untuk credentials, dan Cloud Scheduler untuk scheduled evaluation."],
      ["Monitoring / Governance", "BigQuery untuk audit/evaluation logs, prompt registry, master data versioning, PHI redaction log, RBAC, MFA, dan Cloud Monitoring."]
    ],
    aiDetails: [
      ["SOAP generation", "LLM menyusun Subjective, Objective, Assessment, dan Plan dari dokumentasi yang sudah diberikan user. Output ini bukan diagnosis baru, melainkan struktur ulang dokumentasi."],
      ["ICD-10 and ICD-9-CM suggestion", "LLM memberi saran kode diagnosis dan prosedur hanya jika evidence tersedia. Setiap kode harus punya supporting phrase dari dokumen."],
      ["INA-CBG candidate reasoning", "LLM hanya membantu menjelaskan kandidat grouping. Validitas kode, tarif, dan referensi diselesaikan dari local reference table, bukan dari hafalan model."],
      ["Hallucination control", "Output wajib valid JSON, kode wajib lolos master validation, dan suggestion tanpa evidence diberi status rejected atau needs_review."]
    ],
    interfaces: [
      ["Coding console", "Case queue, document viewer, SOAP summary, suggested ICD codes, evidence panel, validation messages, dan approval action."],
      ["Document API", "Endpoint untuk upload/ingest dokumen, OCR text, dan episode context."],
      ["Generation API", "Endpoint untuk generate SOAP, suggest ICD-10, suggest ICD-9-CM, dan candidate INA-CBG explanation."],
      ["Review API", "Endpoint untuk approve, edit, reject, dan menyimpan final coder decision."],
      ["Audit API", "Endpoint untuk melihat history output, approval metadata, prompt version, dan reference version."]
    ],
    evaluation: [
      ["Structured output", "JSON validity >= 98%, schema pass rate, required field completeness, dan parsing failure rate."],
      ["Evidence quality", "Evidence alignment >= 95%, unsupported suggestion rate, unmatched code rate, dan hallucinated code count."],
      ["Human review signal", "Approval rate, human edit rate, rejection reason trend, dan reviewer override frequency."],
      ["Operational monitoring", "Generation latency, job backlog, master data mismatch, PHI logging incident, dan prompt version regression."]
    ],
    operations: [
      ["Human-in-the-loop", "Tidak ada output yang menjadi final tanpa coder atau claim officer approval."],
      ["Reference governance", "ICD dan INA-CBG reference table punya version, effective date, import history, dan validation status."],
      ["Security", "PHI/PII handling, signed URL, redaction log, role-based access, MFA, CSRF/API protection, dan restricted audit access."],
      ["Deployment", "Cloud Run service, Cloud SQL registry/workflow tables, Cloud Storage document bucket, BigQuery audit tables, Secret Manager, dan Cloud Monitoring."]
    ],
    limitations: "Sistem tidak memberi diagnosis, treatment recommendation, atau clinical decision support. INA-CBG hanya candidate explanation dan bukan official BPJS grouper. OCR dan speech output dianggap unverified sampai direview oleh user yang berwenang."
  },
  "demand-forecasting-system": {
    title: "Demand Forecasting System",
    industry: "Demand Planning",
    company: "Juicy Juice",
    period: "Dec 2024 - Mar 2025",
    repository: "Private/company repository",
    artifacts: "Public case study, forecasting workflow, evaluation summary, architecture diagram, monitoring plan",
    summary: "Forecasting dan inventory planning system untuk membantu planner memperkirakan demand, menghitung safety stock, reorder point, dan rekomendasi pembelian dari ERP-style sales dan purchase data.",
    snapshot: {
      problem: "Demand tidak stabil, beberapa SKU intermittent, stockout bisa menyembunyikan demand, dan keputusan reorder sering terlambat.",
      output: "Forecast per SKU, demand class, safety stock, reorder point, recommended order, stockout risk, dan planning summary.",
      users: "Supply chain planner, procurement team, inventory analyst, warehouse planner, dan operations manager.",
      tech: "Python, XGBoost, Croston SBA, ADI/CV2, rolling-origin backtest, MLflow, FastAPI, Cloud Run Jobs, BigQuery."
    },
    overview: [
      "Project ini tidak berhenti pada angka forecast. Sistem menghubungkan forecasting dengan inventory policy agar planner bisa melihat risiko stockout, overstock, reorder point, dan purchase recommendation.",
      "Data menggunakan ERP-style sample data. Demand reconstruction dibuat sebagai estimasi operasional untuk membantu planning scenario, bukan klaim ground truth lost sales."
    ],
    flow: [
      ["ERP-style ingestion", "Pipeline membaca sales order, delivered quantity, purchase order, inventory movement, SKU metadata, lead time, dan planning period."],
      ["Data quality control", "Pipeline memeriksa missing value, invalid date, duplicate order, negative quantity, SKU mismatch, dan outlier demand."],
      ["Demand reconstruction", "Observed demand diperkirakan dari delivered quantity dan inventory context untuk mengurangi bias saat terjadi stockout."],
      ["Demand classification", "ADI dan CV2 dipakai untuk membedakan smooth, variable, intermittent, atau lumpy demand."],
      ["Hybrid forecasting", "XGBoost memprediksi SKU dengan pola demand yang cukup stabil, sementara Croston SBA digunakan untuk SKU dengan demand jarang/intermittent."],
      ["Inventory planning", "Forecast dikonversi menjadi safety stock, reorder point, recommended order, fill rate simulation, dan stockout risk."],
      ["Planner workflow", "Console menampilkan forecast, policy assumptions, rekomendasi pembelian, dan audit history untuk review planner."]
    ],
    techStack: [
      ["Frontend / UI", "React + TypeScript planning console untuk forecast overview, SKU detail, reorder plan, inventory risk, dan planner override."],
      ["Backend / API", "FastAPI service untuk forecast lookup, reorder plan, artifact metadata, dan planning summary."],
      ["ML / LLM", "XGBoost untuk supervised demand forecasting, Croston SBA untuk intermittent demand, ADI/CV2 classification untuk memilih treatment SKU."],
      ["Data & Storage", "BigQuery untuk forecast log dan planning event, Cloud Storage untuk model artifacts, MLflow metadata, dan Cloud SQL untuk registry metadata."],
      ["Cloud / Deployment", "Cloud Run Jobs untuk training, forecasting, inventory simulation, dan monthly planning run Cloud Scheduler untuk jadwal batch."],
      ["Monitoring / Governance", "MLflow tracking, quality gates, model registry, drift monitoring, forecast bias alert, job health alert, dan rollback metadata."]
    ],
    aiDetails: [
      ["XGBoost forecasting", "Model gradient boosting berbasis decision tree digunakan untuk demand tabular dengan fitur lag, rolling statistics, calendar features, SKU attributes, dan purchase context."],
      ["Croston SBA", "Croston SBA digunakan untuk SKU dengan demand jarang/intermittent, karena metode forecasting biasa sering bias saat banyak periode bernilai nol."],
      ["ADI/CV2 classification", "ADI mengukur jarak rata-rata antar demand non-zero, sedangkan CV2 mengukur variasi demand. Kombinasi ini menentukan apakah SKU smooth, variable, intermittent, atau lumpy."],
      ["Inventory logic", "Forecast dipakai untuk menghitung safety stock, reorder point, recommended order, dan service-level scenario dengan asumsi lead time dan review period."]
    ],
    interfaces: [
      ["Forecast console", "SKU list, demand class, historical demand, forecast horizon, confidence band, dan warning jika forecast quality turun."],
      ["Inventory console", "Safety stock, reorder point, stockout risk, recommended order, open purchase order, dan planner override reason."],
      ["Forecast API", "Endpoint `/forecast` untuk mengambil forecast per SKU, horizon, demand class, model version, dan confidence metadata."],
      ["Reorder API", "Endpoint `/reorder_plan` untuk menghitung reorder recommendation berdasarkan current stock, lead time, MOQ, lot size, dan service level target."],
      ["Registry API", "Endpoint untuk model/artifact version, training run, approval status, dan rollback reference."]
    ],
    evaluation: [
      ["Forecast accuracy", "MAE, WAPE, sMAPE, forecast bias, rolling-origin backtesting, dan forecast interval quality."],
      ["Inventory outcome", "Simulated stockout count, achieved service level, fill rate, excess inventory units, holding cost proxy, dan stockout cost proxy."],
      ["Data and drift", "Demand distribution drift, SKU coverage, missing feature rate, invalid inventory movement, dan forecast freshness."],
      ["MLOps quality gate", "Training job success, metric regression check, artifact availability, MLflow run completeness, dan rollback readiness."]
    ],
    operations: [
      ["Artifact registry", "Model file, feature schema, demand class threshold, metric report, forecast date, and approval metadata disimpan sebagai manifest."],
      ["Scheduled pipeline", "Cloud Scheduler memicu Cloud Run Jobs untuk retraining, forecast generation, inventory simulation, dan metric logging."],
      ["Monitoring", "Cloud Monitoring mengawasi job failure, forecast quality degradation, stockout risk increase, dan artifact unavailable."],
      ["Deployment", "FastAPI di Cloud Run, batch job di Cloud Run Jobs, artifacts di Cloud Storage, metrics/logs di BigQuery, registry di Cloud SQL, dan secrets di Secret Manager."]
    ],
    limitations: "Demand reconstruction adalah estimasi operasional, bukan bukti pasti lost sales. Forecast monthly perlu konversi lead time days ke planning period. Planner review tetap diperlukan untuk supplier constraint, MOQ, lot size, contract, dan business override."
  },
  "customer-segmentation-recommendation": {
    title: "Customer Segmentation & Recommendation",
    industry: "E-commerce",
    company: "Juicy Juice",
    period: "Jun 2024 - Nov 2024",
    repository: "Private/company repository",
    artifacts: "Public case study, API contract, dashboard/console preview, recommendation evaluation summary",
    summary: "Retail analytics dan recommendation system untuk membagi customer berdasarkan perilaku transaksi, membuat segment profile, dan memberi rekomendasi produk untuk campaign, cross-sell, dan marketing activation.",
    snapshot: {
      problem: "Retail team punya data transaksi, tetapi belum punya segmentasi dan rekomendasi produk yang siap dipakai dalam campaign workflow.",
      output: "RFM segment, segment profile, product recommendation, segment-aware recommendation, fallback status, dan monitoring metrics.",
      users: "Marketing team, CRM team, ecommerce analyst, growth team, dan merchandising team.",
      tech: "Python, RFM, StandardScaler, KMeans, item-user matrix, cosine similarity, FastAPI, React, BigQuery, Cloud Run."
    },
    overview: [
      "Project ini menggunakan transaction analytics untuk menjawab dua kebutuhan retail, yaitu memahami kelompok customer dan memberi rekomendasi produk yang relevan. RFM digunakan untuk segmentasi, sedangkan item-based collaborative filtering digunakan sebagai baseline recommendation.",
      "Sistem berfokus pada end-to-end ML workflow yang mencakup feature pipeline, model artifact, API, console, evaluation, monitoring, fallback logic, dan batasan personalisasi yang jelas."
    ],
    flow: [
      ["Transaction ingestion", "Pipeline membaca invoice, customer ID, product ID, quantity, unit price, invoice date, dan country/store context."],
      ["Cleaning and validation", "Cancellation, invalid quantity, missing customer, duplicate invoice, dan product metadata mismatch dibersihkan atau diberi status quality issue."],
      ["RFM feature pipeline", "Recency, Frequency, dan Monetary dihitung per customer sebagai behavioral features."],
      ["Customer segmentation", "StandardScaler menormalkan RFM, lalu KMeans membentuk cluster. Label bisnis diberikan setelah cluster profiling."],
      ["Recommendation matrix", "Customer-product interaction matrix dibuat dari purchase quantity, lalu cosine similarity menghitung kedekatan antar produk."],
      ["Segment-aware recommendation", "Rekomendasi menggabungkan item similarity dan segment-level popularity dengan fallback ke popular product jika data sparse."],
      ["Activation workflow", "Console dan API memberi output untuk campaign targeting, product bundle suggestion, dan monitoring recommendation quality."]
    ],
    techStack: [
      ["Frontend / UI", "React + TypeScript operations console untuk segment overview, customer profile, recommendation explorer, dan monitoring dashboard."],
      ["Backend / API", "FastAPI service untuk segment assignment, product recommendation, segment-aware recommendation, health, dan artifact metadata."],
      ["ML / LLM", "RFM feature engineering, StandardScaler, KMeans clustering, item-based collaborative filtering, cosine similarity, dan fallback ranking."],
      ["Data & Storage", "Cloud Storage untuk artifacts, BigQuery untuk segmentation/recommendation event logs, dan Cloud SQL untuk artifact registry metadata."],
      ["Cloud / Deployment", "Cloud Run untuk API dan console, Cloud Run Jobs untuk batch segmentation/recommendation refresh, dan Artifact Registry untuk container images."],
      ["Monitoring / Governance", "Artifact versioning, catalog versioning, coverage monitoring, popularity concentration monitoring, cold-start tracking, dan audit events."]
    ],
    aiDetails: [
      ["RFM segmentation", "Recency menunjukkan seberapa baru customer bertransaksi, Frequency menunjukkan seberapa sering transaksi terjadi, dan Monetary menunjukkan nilai belanja."],
      ["KMeans clustering", "KMeans dipakai untuk data-driven grouping setelah RFM distandardisasi. Segment label seperti High-Value atau At-Risk diberikan setelah melihat profil cluster, bukan sebelum training."],
      ["Item-based recommendation", "Produk direpresentasikan dalam item-user matrix. Cosine similarity dipakai untuk mencari produk yang sering dibeli oleh pola customer yang mirip."],
      ["Segment-aware fallback", "final_score menggabungkan similarity score dan segment popularity score. Jika similarity sparse, sistem fallback ke produk populer dalam segment, lalu catalog-level popular product."]
    ],
    interfaces: [
      ["Segment console", "Menampilkan segment size, RFM profile, segment interpretation, customer list, dan recommended activation strategy."],
      ["Recommendation explorer", "User memilih produk atau segment lalu melihat rekomendasi, score, fallback status, dan catalog version."],
      ["Segment API", "Endpoint `/segment` menerima RFM/customer features dan mengembalikan segment label, cluster ID, model version, dan confidence metadata."],
      ["Recommendation API", "Endpoint `/recommend` mengembalikan produk mirip berdasarkan product name atau product ID."],
      ["Segment-aware API", "Endpoint `/recommend_for_segment` menggabungkan product similarity, segment popularity, fallback reason, final score, artifact version, dan catalog version."]
    ],
    evaluation: [
      ["Segmentation validation", "Elbow method, silhouette score, cluster size sanity check, RFM distribution profile, dan cluster stability check."],
      ["Recommendation validation", "Time-based holdout dengan Hit Rate@K, Recall@K, MAP@K, NDCG@K, catalog coverage, recommendation coverage, dan product-neighbor inspection."],
      ["Business monitoring", "Segment population shift, product not-found rate, fallback rate, popularity concentration, cold-start rate, dan recommendation click/purchase feedback jika tersedia."],
      ["Operational monitoring", "API latency, artifact loading status, catalog freshness, batch job success, BigQuery event completeness, dan model artifact version."]
    ],
    operations: [
      ["Artifact registry", "Scaler, KMeans model, cluster label map, product similarity matrix, product catalog, catalog version, dan metadata manifest dikelola sebagai artifact versioned."],
      ["Batch refresh", "Cloud Run Jobs menjalankan segment refresh, product similarity refresh, catalog validation, dan metric logging."],
      ["Audit logging", "Setiap recommendation event mencatat request ID, segment, fallback_used, fallback_reason, final_score, catalog_version, dan artifact_version."],
      ["Deployment", "FastAPI API di Cloud Run, console di Cloud Run atau Cloud Storage + CDN, artifacts di Cloud Storage, logs di BigQuery, dan registry metadata di Cloud SQL."]
    ],
    limitations: "Item-based collaborative filtering adalah baseline dan belum memakai clickstream, session behavior, explicit rating, deep retrieval, atau conversion optimization. RFM segment adalah behavioral grouping, bukan persona kausal. Cold-start tetap perlu fallback untuk produk atau customer baru."
  },
  "credit-scoring-system": {
    title: "Credit Scoring System",
    industry: "Fintech / Risiko Kredit",
    company: "PT Steradian Data Optima",
    period: "Apr 2026 - Present",
    repository: "Private/company repository",
    artifacts: "Public case study, model evaluation summary, API contract, audit flow, architecture diagram, monitoring design",
    summary: "Credit scoring workflow untuk menilai applicant risk, menghasilkan reason codes, mengatur threshold approve/review/decline, dan mencatat audit log untuk underwriting dan model governance.",
    snapshot: {
      problem: "Credit workflow membutuhkan skor yang konsisten, explainable, bisa diaudit, dan punya kontrol terhadap bias data serta kualitas label.",
      output: "Probability of high-risk applicant, approve/review/decline decision, reason codes, review queue, model version, policy version, dan audit log.",
      users: "Risk analyst, underwriter, credit operations, model risk team, dan compliance reviewer.",
      tech: "Python, LightGBM, SMOTENC, calibration, SHAP/reason codes, FastAPI, React, BigQuery, Cloud SQL, Cloud Run."
    },
    overview: [
      "Project ini membangun workflow risk decisioning end-to-end untuk menilai risiko kredit applicant, mengubah skor model menjadi keputusan approve/review/decline, dan menyediakan reason codes untuk proses underwriting.",
      "Sistem menonjolkan target definition, leakage control, validation, cost assumptions, audit trail, dan model limitation agar keputusan risiko dapat dijelaskan oleh risk analyst, underwriter, dan model risk reviewer."
    ],
    flow: [
      ["Applicant input", "Applicant data masuk melalui API atau batch scoring dengan schema validation untuk numeric, categorical, dan missing fields."],
      ["Feature processing", "Pipeline menjalankan feature engineering, categorical encoding, imbalance handling, outlier treatment, dan feature selection."],
      ["Risk model", "Model utama menggunakan LightGBM, algoritma gradient boosting berbasis decision tree yang kuat untuk data tabular."],
      ["Probability calibration", "Model score dikalibrasi agar probability lebih stabil untuk dipakai dalam threshold policy."],
      ["Decision policy", "Threshold memetakan score menjadi approve, review, atau decline, lalu policy rules menambah business guardrails."],
      ["Reason codes", "SHAP atau feature contribution dipakai untuk menjelaskan faktor utama yang mendorong score."],
      ["Audit and monitoring", "Prediction, model version, policy version, reason codes, override, dan review action dikirim ke BigQuery."]
    ],
    techStack: [
      ["Frontend / UI", "React + TypeScript risk operations console untuk applicant queue, score detail, reason codes, override workflow, model health, dan audit view."],
      ["Backend / API", "FastAPI scoring service untuk `/predict`, `/predict_batch`, `/health`, `/model_info`, `/explain`, dan audit logging."],
      ["ML / LLM", "LightGBM untuk tabular risk scoring, SMOTENC untuk menangani imbalance pada data campuran numeric/categorical, calibration, threshold tuning, dan SHAP-style reason codes."],
      ["Data & Storage", "Cloud Storage untuk model artifacts, BigQuery untuk prediction/audit logs, dan Cloud SQL untuk model registry serta threshold/policy metadata."],
      ["Cloud / Deployment", "Cloud Run untuk scoring API dan console, Artifact Registry untuk container images, Secret Manager untuk secrets, dan Cloud Build/GitHub Actions untuk CI/CD."],
      ["Monitoring / Governance", "Model registry, challenger comparison, drift PSI, decision distribution, reason code distribution, override trend, and rollback controls."]
    ],
    aiDetails: [
      ["Target definition", "Output model disebut probability_of_high_risk_applicant. Karena dataset benchmark tidak menyediakan repayment/default history, label diperlakukan sebagai proxy untuk pengembangan risk scoring workflow."],
      ["LightGBM model", "LightGBM dipilih sebagai model utama karena efektif untuk data tabular, menangani non-linear relationship, dan sering kuat dibanding baseline seperti logistic regression atau random forest."],
      ["SMOTENC and calibration", "SMOTENC membantu mengatasi class imbalance pada data yang punya fitur numeric dan categorical. Calibration membantu score lebih layak dipakai sebagai probability untuk policy threshold."],
      ["Reason codes", "Reason codes dibuat dari kontribusi fitur sehingga underwriter dapat melihat faktor yang mendorong score, bukan hanya menerima angka risk probability."]
    ],
    interfaces: [
      ["Risk operations console", "Applicant queue, decision detail, reason code panel, manual override, model health, alert center, dan audit search."],
      ["Predict API", "Endpoint `/predict` menerima applicant payload dan mengembalikan risk probability, decision, threshold version, model version, dan reason codes."],
      ["Batch API", "Endpoint `/predict_batch` untuk scoring banyak applicant dengan batch ID dan logging status."],
      ["Explain API", "Endpoint `/explain` mengembalikan reason codes dan feature contribution untuk applicant tertentu."],
      ["Model info API", "Endpoint `/model_info` menampilkan model version, training date, feature schema, metrics, dan active threshold policy."]
    ],
    evaluation: [
      ["Model metrics", "ROC-AUC, precision, recall, F1, calibration check, confusion matrix, dan threshold-based decision distribution."],
      ["Leakage controls", "Holdout validation, target definition review, feature leakage check, duplicate applicant check, dan no future information rule."],
      ["Business cost", "False negative cost proxy, false positive/review cost, total risk cost, dan threshold sensitivity analysis."],
      ["Production monitoring", "PSI drift, score distribution shift, approval/review/decline trend, override rate, reason code distribution, API latency, dan error rate."]
    ],
    operations: [
      ["Governance", "Model registry menyimpan model version, artifact path, feature schema, metrics, approval metadata, threshold version, policy version, dan rollback reference."],
      ["Auditability", "Setiap score mencatat request ID, model version, threshold version, reason codes, decision, reviewer action, dan override reason."],
      ["Security", "OAuth/IAP/IAM access, Secret Manager, least-privilege service account, encrypted storage, dan audit log access control."],
      ["Deployment", "FastAPI scoring service di Cloud Run, model artifact di Cloud Storage, logs di BigQuery, registry metadata di Cloud SQL, dan observability via Cloud Logging/Monitoring."]
    ],
    limitations: "Benchmark label adalah proxy dan bukan real default atau repayment label. Sistem belum memakai bureau score, repayment history, delinquency events, exposure, tenor, collateral, atau post-disbursement outcome. Limitasi ini dicatat agar interpretasi model tetap sesuai dengan cakupan data."
  },
  "aluminium-market-signal": {
    title: "Aluminium Market Signal",
    industry: "Commodity / Pricing Intelligence",
    company: "PT Steradian Data Optima",
    period: "Dec 2025 - Mar 2026",
    repository: "Private/company repository",
    artifacts: "Public case study, dashboard/console preview, quote decision log schema, feature design, deployment notes",
    summary: "Market intelligence system untuk membantu tim commercial membaca sinyal pasar aluminium bulanan dan menentukan kapan kondisi pasar berprioritas rendah, perlu dipantau, atau perlu ditindaklanjuti.",
    snapshot: {
      problem: "Prediksi harga komoditas sangat noisy, tetapi tim commercial tetap butuh sinyal praktis untuk quote urgency, watchlist, dan escalation.",
      output: "Monthly actionable market signal, directional context, confidence, market driver explanation, news sentiment, dan quote decision log.",
      users: "Commercial team, pricing analyst, sales operations, procurement, dan market intelligence team.",
      tech: "Python, time-series features, classification model, LLM news sentiment, FastAPI, BigQuery, Cloud Run Jobs, Cloud Monitoring."
    },
    overview: [
      "Project ini sengaja tidak mengklaim bisa memprediksi harga aluminium secara presisi. Problem direframe menjadi monthly actionability classification untuk menilai apakah market window berprioritas rendah, perlu dipantau, atau perlu ditindaklanjuti.",
      "Sistem memisahkan actionability dari direction. Model utama menilai apakah pasar perlu perhatian, sedangkan directional context memberi overlay bullish, bearish, mixed, atau unclear berdasarkan market drivers dan news sentiment."
    ],
    flow: [
      ["Monthly market data", "Pipeline membaca harga aluminium bulanan, return, volatility, macro indicators, inventory/supply-demand proxy, dan market driver data."],
      ["Feature engineering", "Sistem membuat lag features, rolling return, volatility, momentum, drawdown, macro change, dan calendar features dengan leakage control."],
      ["Target framing", "Label actionable_market_move dibuat dari forward monthly return magnitude sebagai proxy operational actionability."],
      ["Signal classification", "Model klasifikasi memprediksi probability_actionable_market_move dan memetakannya ke prioritas rendah, perlu dipantau, atau perlu ditindaklanjuti."],
      ["Directional overlay", "Recent return direction, market driver interpretation, dan news sentiment memberi directional_context dengan nilai bullish, bearish, mixed, atau unclear."],
      ["Commercial workflow", "Signal dipakai untuk quote urgency, watchlist, market note, dan escalation workflow."],
      ["Feedback loop", "Quote decision log mencatat action, context, dan outcome proxy agar threshold bisa dikalibrasi ulang dengan data bisnis."]
    ],
    techStack: [
      ["Frontend / UI", "React + TypeScript market operations console untuk latest signal, monthly trend, market drivers, news briefing, watchlist, dan quote decision log."],
      ["Backend / API", "FastAPI service untuk latest signal, historical signal, news sentiment, model info, dan quote decision logging."],
      ["ML / LLM", "Classification model untuk actionable market move, time-series feature engineering, directional overlay, dan LLM untuk news sentiment/market briefing."],
      ["Data & Storage", "BigQuery untuk market data, feature table, signal log, news score, dan quote decision log Cloud Storage untuk model artifacts."],
      ["Cloud / Deployment", "Cloud Run untuk API/console, Cloud Run Jobs untuk monthly signal generation dan news scoring, Cloud Scheduler untuk jadwal pipeline."],
      ["Monitoring / Governance", "Model registry, threshold version, signal policy version, news prompt version, sentiment quality target, drift monitoring, dan rollback."]
    ],
    aiDetails: [
      ["Actionability model", "Model klasifikasi memprediksi apakah monthly market move cukup besar untuk ditindaklanjuti secara commercial, bukan memprediksi harga exact."],
      ["Business target proxy", "actionable_market_move berasal dari forward monthly return magnitude. Ini proxy awal yang idealnya dikalibrasi dengan quote win rate, margin impact, atau pricing committee decisions."],
      ["Directional context", "Arah pasar tidak dicampur ke target utama. Sistem memberi directional_context secara terpisah agar user tahu apakah sinyal cenderung bullish, bearish, mixed, atau unclear."],
      ["LLM news sentiment", "LLM meringkas berita dan memberi sentiment/context dalam JSON schema dengan relevance check, sentiment agreement, fallback reason, dan no unsupported market claim."]
    ],
    interfaces: [
      ["Market console", "Latest monthly signal, probability, decision band, directional context, key drivers, news briefing, dan confidence note."],
      ["Signal API", "Endpoint untuk mengambil latest signal, historical monthly signal, model version, threshold version, dan driver explanation."],
      ["News API", "Endpoint untuk news sentiment score, article relevance, source metadata, prompt version, dan fallback status."],
      ["Quote log API", "Endpoint untuk mencatat quote decision, commercial action, market note, escalation status, dan business feedback."],
      ["Model info API", "Endpoint untuk melihat active model, training period, metric summary, target definition, dan threshold policy."]
    ],
    evaluation: [
      ["Signal metrics", "Balanced accuracy, precision, recall, F1, ROC-AUC, signal lift, threshold stability, dan time-aware validation."],
      ["Market realism", "Metric acceptance tidak dibuat terlalu tinggi karena market data noisy. Fokusnya adalah useful signal, bukan perfect prediction."],
      ["News quality", "JSON validity, relevance precision, sentiment agreement, unsupported claim rate, fallback rate, dan source freshness."],
      ["Business monitoring", "Quote decision feedback, escalation acceptance, signal distribution, market data freshness, drift, API latency, dan monthly job success."]
    ],
    operations: [
      ["Governance", "Model registry menyimpan model version, feature window, threshold version, signal policy, news prompt version, metric summary, dan rollback reference."],
      ["Audit logging", "Setiap signal dan quote decision mencatat request ID, model version, input month, decision band, directional context, news context, dan user action."],
      ["Scheduled operation", "Cloud Scheduler memicu Cloud Run Job bulanan untuk data refresh, feature generation, scoring, news briefing, dan BigQuery logging."],
      ["Deployment", "FastAPI API di Cloud Run, batch scoring di Cloud Run Jobs, data/logs di BigQuery, artifacts di Cloud Storage, metadata di Cloud SQL, secrets di Secret Manager, dan alerts di Cloud Monitoring."]
    ],
    limitations: "actionable_market_move adalah proxy dari forward monthly return magnitude, bukan realized margin atau quote conversion. Directional context adalah overlay, bukan trading advice. Threshold idealnya dikalibrasi ulang dengan quote win rate, margin impact, escalation history, dan pricing committee decisions."
  },
  "rainfall-prediction-citarum": {
    title: "Rainfall Prediction - DAS Citarum Hulu",
    industry: "Water Resources",
    company: "PT LAPI ITB",
    period: "Dec 2023 - Feb 2024",
    repository: "Private/company repository",
    artifacts: "Public case study, model evaluation summary, feature design, Streamlit app preview",
    summary: "Model prediksi curah hujan untuk DAS Citarum Hulu menggunakan data BMKG 2000-2019, feature engineering cuaca, evaluasi model regresi, dan aplikasi Streamlit untuk eksplorasi hasil prediksi.",
    snapshot: {
      problem: "Analisis hidrologi membutuhkan estimasi curah hujan yang bisa diuji dengan data historis, dibandingkan antar model, dan dipahami oleh tim teknis.",
      output: "Prediksi curah hujan, perbandingan performa model, metric RMSE/MAE/R-squared, visualisasi data, dan aplikasi eksplorasi hasil prediksi.",
      users: "Tim water resources, hydrology analyst, civil/water engineer, dan stakeholder teknis.",
      tech: "Python, Pandas, scikit-learn, XGBoost, Random Forest, AdaBoost, Gradient Boosting, Streamlit, data BMKG 2000-2019."
    },
    overview: [
      "Project ini berfokus pada prediksi curah hujan di DAS Citarum Hulu dengan pendekatan machine learning regression. Dataset berasal dari data historis BMKG periode 2000-2019 yang diproses menjadi fitur cuaca untuk training dan evaluasi model.",
      "Output tidak diposisikan sebagai keputusan hidrologi final. Model digunakan sebagai alat bantu analisis untuk membandingkan pola historis, performa pendekatan ML, dan kelayakan visualisasi hasil prediksi."
    ],
    flow: [
      ["Data collection", "Menggunakan data historis BMKG 2000-2019 yang relevan dengan wilayah DAS Citarum Hulu."],
      ["Data preparation", "Membersihkan missing value, memeriksa rentang nilai cuaca, menyelaraskan tanggal, dan menyiapkan target curah hujan."],
      ["Feature engineering", "Menyusun fitur temporal dan cuaca seperti lag, rolling statistics, tren historis, serta variasi musiman."],
      ["Model training", "Menguji Random Forest, AdaBoost, Gradient Boosting, dan XGBoost untuk memprediksi curah hujan."],
      ["Model evaluation", "Membandingkan performa model menggunakan RMSE, MAE, R-squared, residual pattern, dan visualisasi prediksi vs aktual."],
      ["Result exploration", "Membuat aplikasi Streamlit untuk melihat input, prediksi, grafik historis, dan ringkasan metric model."]
    ],
    techStack: [
      ["Data", "Data BMKG 2000-2019, Python, Pandas, NumPy, dan preprocessing pipeline untuk time-series tabular weather data."],
      ["Machine Learning", "Random Forest, AdaBoost, Gradient Boosting, XGBoost, train/test split berbasis waktu, dan model evaluation."],
      ["Evaluation", "RMSE, MAE, R-squared, visual comparison, residual check, dan sanity check terhadap pola musiman."],
      ["Interface", "Streamlit app untuk eksplorasi hasil prediksi, visualisasi curah hujan historis, dan perbandingan metric model."],
      ["Artifacts", "Feature design, evaluation summary, model comparison, visualisasi hasil, dan catatan keterbatasan data."]
    ],
    aiDetails: [
      ["Regression framing", "Masalah diposisikan sebagai supervised regression untuk memperkirakan nilai curah hujan berdasarkan fitur historis dan cuaca."],
      ["Tree-based models", "Random Forest, AdaBoost, Gradient Boosting, dan XGBoost dipakai karena kuat untuk hubungan non-linear pada data tabular."],
      ["Time-aware validation", "Evaluasi memperhatikan urutan waktu agar hasil tidak terlalu optimistis akibat kebocoran informasi dari periode masa depan."],
      ["Feature interpretation", "Analisis fitur digunakan untuk memahami variabel yang paling berpengaruh terhadap prediksi model."]
    ],
    interfaces: [
      ["Streamlit app", "Halaman eksplorasi untuk melihat data historis, memilih model, melihat prediksi, dan membaca metric evaluasi."],
      ["Model comparison view", "Ringkasan performa beberapa model dengan RMSE, MAE, dan R-squared."],
      ["Prediction chart", "Grafik perbandingan prediksi dan aktual untuk membantu validasi visual."],
      ["Data quality view", "Ringkasan missing value, rentang tanggal, dan distribusi target curah hujan."]
    ],
    evaluation: [
      ["Regression metrics", "RMSE, MAE, dan R-squared digunakan untuk menilai error prediksi dan kemampuan model menjelaskan variasi target."],
      ["Model comparison", "Perbandingan model tree-based dilakukan untuk melihat pendekatan yang paling stabil pada data historis."],
      ["Visual validation", "Grafik prediksi vs aktual digunakan untuk mengecek apakah model mengikuti pola besar atau hanya bagus secara metric."],
      ["Data limitation", "Evaluasi mencatat keterbatasan data historis, cakupan stasiun, missing value, dan risiko generalisasi untuk periode ekstrem."]
    ],
    operations: [
      ["Reproducibility", "Pipeline menyimpan tahapan preprocessing, feature engineering, training, dan evaluation agar hasil bisa ditelusuri ulang."],
      ["Model artifact", "Model terbaik dan ringkasan metric disiapkan sebagai artifact untuk analisis lanjutan."],
      ["Technical documentation", "Catatan data, asumsi, metric, dan keterbatasan disusun agar hasil dapat dipahami oleh tim teknis."],
      ["App delivery", "Aplikasi Streamlit digunakan sebagai interface eksplorasi internal untuk meninjau hasil model dan visualisasi."]
    ],
    limitations: "Model bergantung pada kualitas dan cakupan data BMKG 2000-2019. Prediksi curah hujan tidak menggantikan analisis hidrologi lengkap, tidak mencakup semua faktor klimatologis ekstrem, dan perlu validasi tambahan sebelum dipakai untuk keputusan teknis berisiko tinggi."
  }
};
