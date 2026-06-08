export interface ImpactItem {
  id: string;
  stage: string;
  title: string;
  metric: string;
  label: string;
  description: string;
  image: string;
}

// Consistent premium branded scientific imagery (using muted, dark-scientific lighting images)
const scientificImages = [
  "https://images.unsplash.com/photo-1579165466521-35b91790e0d1?auto=format&fit=crop&w=800&q=80", // dark microscope green/blue
  "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=800&q=80", // lab experiment green details
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80", // premium glass beaker green fluid
  "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80", // cleanroom researcher
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"  // precision mechanical biotech arm
];

export const industryData: Record<string, ImpactItem[]> = {
  software: [
    {
      id: "soft-1",
      stage: "INGESTION",
      title: "Data Ingestion & Alignment",
      metric: "10X",
      label: "FASTQ Processing Speedup",
      description: "Automate sequence alignments and variant detections on serverless GPU queues with zero database setup lag.",
      image: scientificImages[0]
    },
    {
      id: "soft-2",
      stage: "CHEMISTRY",
      title: "GQ Generative Chemistry",
      metric: "60K",
      label: "Ligand Binding Scans",
      description: "Screen structural vector representations in vector databases to identify novel molecular candidates matching pocket constraints.",
      image: scientificImages[1]
    },
    {
      id: "soft-3",
      stage: "GENETICS",
      title: "GQ GPT Simulation Lab",
      metric: "15-Gene",
      label: "Aging Clock Accuracy",
      description: "Quantify cellular senescence rates and biological aging vectors using custom multi-omics regression layers.",
      image: scientificImages[2]
    },
    {
      id: "soft-4",
      stage: "ONCOLOGY",
      title: "Precision Oncology Twin",
      metric: "3D",
      label: "Automated Tumor Segmenter",
      description: "Track longitudinal RECIST parameters and primary tumor volumes dynamically using MRI and CT slice scans.",
      image: scientificImages[3]
    },
    {
      id: "soft-5",
      stage: "INTEGRATION",
      title: "Model Pipeline REST API",
      metric: "REST",
      label: "Standard Model Connector",
      description: "Import proprietary Python code and Docker models directly beside GenQuantaa's native molecular solvers.",
      image: scientificImages[4]
    }
  ],
  preclinical: [
    {
      id: "pre-1",
      stage: "STRATEGY",
      title: "Early Program Design",
      metric: "2X",
      label: "Increase in IND Candidates",
      description: "Define study endpoints and clinical path maps early to minimize development cycles and secure investment.",
      image: scientificImages[0]
    },
    {
      id: "pre-2",
      stage: "VALIDATION",
      title: "Target Validation",
      metric: "25%",
      label: "Cycle Time Reduction",
      description: "Verify candidate target pathways and receptor pocket matches using unified computational datasets.",
      image: scientificImages[1]
    },
    {
      id: "pre-3",
      stage: "SAFETY",
      title: "GLP Toxicology Support",
      metric: "88%",
      label: "Study Protocol Delivery",
      description: "Design and coordinate compliant GLP toxicology strategies, pairing wet-lab tests with models.",
      image: scientificImages[2]
    },
    {
      id: "pre-4",
      stage: "MODELING",
      title: "QSAR Toxicity Profiles",
      metric: "85%",
      label: "In Silico Error Reduction",
      description: "Model off-target hazards and cellular toxicity profiles computationally to de-risk active formulations.",
      image: scientificImages[3]
    },
    {
      id: "pre-5",
      stage: "VALUATION",
      title: "Quantitative Due Diligence",
      metric: "30+",
      label: "Pipeline Audits Completed",
      description: "Perform objective candidate risk scorecards to de-risk licensing deals and venture transactions.",
      image: scientificImages[4]
    }
  ],
  clinical: [
    {
      id: "clin-1",
      stage: "SCOPING",
      title: "Trial Protocol Simulation",
      metric: "30%",
      label: "Timeline Compression",
      description: "Leverage historical clinical datasets to optimize cohort boundaries and simulate trial outcomes.",
      image: scientificImages[0]
    },
    {
      id: "clin-2",
      stage: "DOSING",
      title: "First-In-Human Projections",
      metric: "2X",
      label: "Safety Dosing Margins",
      description: "Apply model-informed drug development (MIDD) and PopPK/PD models to calculate safe starting doses.",
      image: scientificImages[1]
    },
    {
      id: "clin-3",
      stage: "SCREENING",
      title: "DDI Transporter Audits",
      metric: "100%",
      label: "FDA Compliance Alignment",
      description: "Audit metabolic and transporter interaction hazards against the latest FDA/EMA ICH M12 directives.",
      image: scientificImages[2]
    },
    {
      id: "clin-4",
      stage: "PROGNOSTICS",
      title: "Cox Survival Projections",
      metric: "85%",
      label: "Survival Curve Fidelity",
      description: "Generate hazard ratio models combining clinical milestones with patient mutation configurations.",
      image: scientificImages[3]
    },
    {
      id: "clin-5",
      stage: "MIDD",
      title: "Precision Clinical Dosing",
      metric: "95%",
      label: "Efficacy Target Success",
      description: "Incorporate real-time patient blood concentration indicators to dynamically adapt dosing regimens.",
      image: scientificImages[4]
    }
  ],
  cmc: [
    {
      id: "cmc-1",
      stage: "CRYSTALS",
      title: "Crystallization Control",
      metric: "98%",
      label: "Crystal Stability Rate",
      description: "Simulate polymorph kinetics and phase behavior in-silico to prevent crystal structural errors.",
      image: scientificImages[0]
    },
    {
      id: "cmc-2",
      stage: "SOLUBILITY",
      title: "Solubility Optimizations",
      metric: "4X",
      label: "Formulation Speedup",
      description: "Optimize excipient matches and chemical buffer solubility using advanced thermodynamic models.",
      image: scientificImages[1]
    },
    {
      id: "cmc-3",
      stage: "DIAGNOSTICS",
      title: "Clinical Batch Diagnostics",
      metric: "99%",
      label: "Batch Yield Success",
      description: "Deploy automated metrics to verify synthesis parameters and ensure scaling batch consistency.",
      image: scientificImages[2]
    },
    {
      id: "cmc-4",
      stage: "SCALING",
      title: "Process Scaling Design",
      metric: "92%",
      label: "Chemical Yield Increase",
      description: "Verify reaction safety factors and scaling steps computationally before physical manufacturing.",
      image: scientificImages[3]
    },
    {
      id: "cmc-5",
      stage: "OVERSIGHT",
      title: "GxP Compliance Enforcer",
      metric: "100%",
      label: "21 CFR Part 11 Traceability",
      description: "Enforce strict electronic signatures and storage logs across all lab database networks.",
      image: scientificImages[4]
    }
  ],
  regulatory: [
    {
      id: "reg-1",
      stage: "MEETINGS",
      title: "Agency Scoping Briefs",
      metric: "90%",
      label: "First-Time File Acceptance",
      description: "Prepare pre-IND and scientific advice presentations to handle health agency queries confidently.",
      image: scientificImages[0]
    },
    {
      id: "reg-2",
      stage: "PUBLISHING",
      title: "eCTD Submissions Prep",
      metric: "100%",
      label: "Dossier Document Accuracy",
      description: "Compile and audit technical clinical summaries to satisfy regulatory filing structures.",
      image: scientificImages[1]
    },
    {
      id: "reg-3",
      stage: "FILINGS",
      title: "Fast-Track Submissions",
      metric: "35%",
      label: "Filing Speedup",
      description: "Structure data submissions to obtain breakthrough and priority designation speedups.",
      image: scientificImages[2]
    },
    {
      id: "reg-4",
      stage: "LABELING",
      title: "Prescribing Inserts",
      metric: "100%",
      label: "Global Safety Alignment",
      description: "Audit labeling statements and safety briefs against dynamic regulatory safety data.",
      image: scientificImages[3]
    },
    {
      id: "reg-5",
      stage: "RESPONSES",
      title: "Agency Correspondence",
      metric: "48-Hr",
      label: "Official Response Rate",
      description: "Deploy scientific consulting panels to handle health authority request files instantly.",
      image: scientificImages[4]
    }
  ]
};
