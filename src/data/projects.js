window.portfolioProjects = [
  {
    key: "credit-scoring-system",
    title: "Credit Scoring System",
    domain: "Perbankan",
    tags: "Risk Scoring / Governance / Audit",
    href: "./projects/credit-scoring-system.html",
    summary: "Credit scoring workflow untuk risk probability, approve/review/decline policy, reason codes, dan audit trail.",
    problem: "Credit workflow membutuhkan scoring yang konsisten, explainable, bisa diaudit, dan punya model governance.",
    solution: "LightGBM tabular model dengan SMOTENC, calibration, threshold policy, SHAP-style reason codes, dan review queue.",
    highlight: "FastAPI, React console, BigQuery audit logs, Cloud SQL registry, drift monitoring, dan proxy label limitation."
  },
  {
    key: "bpjs-claim-assistant",
    title: "BPJS Claim Assistant",
    domain: "Kesehatan",
    tags: "Structured Output / Human Review / Audit",
    href: "./projects/bpjs-claim-assistant.html",
    summary: "Workflow AI untuk membantu coder menyiapkan saran ICD, evidence, validasi referensi, dan claim readiness.",
    problem: "Clinical coding membutuhkan evidence yang jelas, validasi kode, dan final approval manusia.",
    solution: "LLM structured output dengan ICD master validation, evidence alignment, human review, dan audit trail.",
    highlight: "Gemini-style LLM, ICD-10, ICD-9-CM, INA-CBG candidate explanation, PHI controls, dan BigQuery logs."
  },
  {
    key: "demand-forecasting-system",
    title: "Demand Forecasting System",
    domain: "Supply Chain",
    tags: "Forecasting / Inventory / MLOps",
    href: "./projects/demand-forecasting-system.html",
    summary: "Forecasting dan inventory planning system untuk demand, safety stock, reorder point, dan purchase recommendation.",
    problem: "Demand tidak stabil, SKU intermittent, dan keputusan reorder sering terlambat.",
    solution: "Hybrid forecasting dengan XGBoost, Croston SBA, ADI/CV2 classification, dan inventory simulation.",
    highlight: "Rolling-origin backtest, WAPE/sMAPE/bias, MLflow, Cloud Run Jobs, BigQuery, dan model registry."
  },
  {
    key: "customer-segmentation-recommendation",
    title: "Customer Segmentation & Recommendation",
    domain: "Retail",
    tags: "RFM / Recommendation / API",
    href: "./projects/customer-segmentation-recommendation.html",
    summary: "Retail analytics system untuk RFM segmentation, product recommendation, dan campaign activation.",
    problem: "Data transaksi belum otomatis berubah menjadi segment customer dan rekomendasi produk yang bisa dipakai campaign.",
    solution: "RFM + KMeans untuk segmentasi dan item-based collaborative filtering dengan segment-aware fallback.",
    highlight: "StandardScaler, KMeans, cosine similarity, Hit Rate@K, Recall@K, MAP@K, NDCG@K, FastAPI, dan Cloud Run."
  },
  {
    key: "aluminium-market-signal",
    title: "Aluminium Market Signal",
    domain: "Komoditas",
    tags: "Signal ML / Sentiment / Decision Support",
    href: "./projects/aluminium-market-signal.html",
    summary: "Market intelligence system untuk monthly aluminium signal, directional context, dan quote decision support.",
    problem: "Prediksi harga komoditas noisy, tetapi tim commercial tetap butuh sinyal praktis untuk quote urgency.",
    solution: "Klasifikasi actionable market move dengan directional overlay, news sentiment LLM, dan quote feedback loop.",
    highlight: "Monthly target framing, classification model, LLM news sentiment, BigQuery logs, Cloud Run Jobs, dan threshold governance."
  },
  {
    key: "b2b-meeting-assistant",
    title: "B2B Meeting Assistant",
    domain: "B2B / Konsultan",
    tags: "Realtime AI / LLMOps / Desktop UX",
    href: "./projects/b2b-meeting-assistant.html",
    summary: "Asisten meeting B2B untuk menangkap keputusan, risiko, action item, dan follow-up dari percakapan real-time.",
    problem: "Meeting klien sering panjang, konteks berubah cepat, dan keputusan penting mudah tidak tercatat.",
    solution: "Desktop side panel dengan realtime transcript, LLM action layer, artifact review, dan audit logging.",
    highlight: "Electron, realtime transcription, structured LLM output, consent boundary, Cloud SQL, BigQuery, dan Cloud Run."
  }
];
