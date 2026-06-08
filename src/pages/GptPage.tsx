import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SnakePipeline from '../components/SnakePipeline';
import {
  Hourglass,
  BarChart as ChartIcon,
  Brain,
  Shield,
  Lock,
  Database,
  Zap,
  ChevronRight,
  MousePointer2,
  ArrowRight,
  Cpu,
  Activity,
  Layers,
  FileText,
  Sparkles,
  Target,
  Microscope,
  ShieldCheck,
  RefreshCw,
  Network,
  Dna,
  X
} from 'lucide-react';

// Custom workflow data for the SnakePipeline component
const workflowData = [
  {
    id: 'wallah',
    steps: [
      {
        id: 'pace',
        phase: 'PHASE 1: DATA INGESTION',
        title: 'Clinical Inputs',
        desc: 'Ingest patient transcriptomic and cohort longitudinal datasets.',
        outputLabel: 'ARCHITECTURE OUTPUT',
        outputValue: 'Normalized Profiling Data',
        color: 'cyan',
        icon: 'Database'
      },
      {
        id: 'molspace',
        phase: 'PHASE 1: DATA INGESTION',
        title: 'Gene Alignment',
        desc: 'Extract and align 15-gene senescence markers.',
        outputLabel: 'ARCHITECTURE OUTPUT',
        outputValue: 'Aligned Biomarker Matrix',
        color: 'cyan',
        icon: 'Dna'
      },
      {
        id: 'setup',
        phase: 'PHASE 2: SIMULATION',
        title: 'Omics Synthesis',
        desc: 'Generate statistically faithful synthetic cohort datasets.',
        outputLabel: 'ARCHITECTURE OUTPUT',
        outputValue: 'HIPAA-Compliant Matrices',
        color: 'blue',
        icon: 'Layers'
      },
      {
        id: 'genchem',
        phase: 'PHASE 2: SIMULATION',
        title: 'Aging Clock Analysis',
        desc: 'Calculate cellular age acceleration scores.',
        outputLabel: 'ARCHITECTURE OUTPUT',
        outputValue: 'Calculated Aging Deltas',
        color: 'blue',
        icon: 'Hourglass'
      },
      {
        id: 'reward',
        phase: 'PHASE 3: TARGET VALIDATION',
        title: 'Pathway Mapping',
        desc: 'Simulate pathway response to gene perturbations.',
        outputLabel: 'ARCHITECTURE OUTPUT',
        outputValue: 'Perturbation Flow Maps',
        color: 'emerald',
        icon: 'Network'
      },
      {
        id: 'gnn',
        phase: 'PHASE 3: TARGET VALIDATION',
        title: 'Virtual HTS Screening',
        desc: 'Screen 60,000+ compounds for binding and efficacy.',
        outputLabel: 'ARCHITECTURE OUTPUT',
        outputValue: 'Ranked Hit Shortlists',
        color: 'emerald',
        icon: 'Cpu'
      },
      {
        id: 'gqai',
        phase: 'PHASE 3: TARGET VALIDATION',
        title: 'Compliance Check',
        desc: 'Verify absolute privacy bounds and HIPAA metrics.',
        outputLabel: 'ARCHITECTURE OUTPUT',
        outputValue: 'Data Sovereignty Logs',
        color: 'emerald',
        icon: 'ShieldCheck'
      },
      {
        id: 'retro',
        phase: 'PHASE 3: TARGET VALIDATION',
        title: 'Intervention Mapping',
        desc: 'Generate multi-therapy combination recommendations.',
        outputLabel: 'ARCHITECTURE OUTPUT',
        outputValue: 'Prioritized Target Schemes',
        color: 'emerald',
        icon: 'GitMerge'
      }
    ]
  }
];

export default function GptPage() {
  if (typeof window !== 'undefined') {
    (window as any).GptPageLoaded = true;
  }

  const [selectedFeature, setSelectedFeature] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeMethodologyIndex, setActiveMethodologyIndex] = useState(0);

  const features = [
    {
      id: 'wallah1',
      title: 'GQ GPT 1',
      subtitle: 'The Biological Aging Clock',
      icon: Hourglass,
      description: 'Predicting cellular age and disease risk signatures through 15-gene analysis.',
      fullExplanation: [
        "GQ GPT 1 provides a high-precision Biological Aging Clock that differentiates between chronological age and cellular health. By analyzing specific 15-gene molecular signatures, the system identifies the key drivers of senescence and biological decline.",
        "The platform calculates a proprietary 'Age Acceleration Score,' which allows researchers to rank candidates for anti-aging therapeutic interventions. This mechanistic insight helps identify novel targets for age-related diseases like Alzheimer's and cardiovascular decline."
      ],
      capabilities: [
        "Age Acceleration Scoring",
        "15-Gene Signature Analysis",
        "Cellular Senescence Mapping",
        "Disease Risk Probability",
        "Therapeutic Target Ranking"
      ],
      processData: {
        input: {
          title: "Molecular Profiling",
          items: [
            { label: "15-Gene Signatures", icon: Dna, description: "Key genes linked to cellular senescence." },
            { label: "Clinical Metadata", icon: Database, description: "Baseline health and age metrics." },
            { label: "Epigenetic Drift", icon: Microscope, description: "Methylation patterns across CpG islands." }
          ]
        },
        processing: {
          title: "Simulation Engine",
          groups: [
            {
              title: "Feature Extraction",
              items: [
                { label: "15-Gene Signature", icon: Dna },
                { label: "Epigenetic Drift", icon: Microscope },
                { label: "Senescence Map", icon: Layers },
                { label: "Cell Cycle Scan", icon: Activity }
              ]
            },
            {
              title: "Calculation",
              items: [
                { label: "Aging Delta AI", icon: Cpu },
                { label: "Drift Calibration", icon: Brain },
                { label: "Biological Sync", icon: RefreshCw },
                { label: "Longevity Triage", icon: Target }
              ]
            }
          ]
        },
        output: {
          title: "Longevity Insights",
          items: [
            { label: "Acceleration Score", icon: FileText, description: "Biological vs Chronological age delta." },
            { label: "Ranked Targets", icon: Target, description: "Prioritized anti-aging interventions." },
            { label: "Intervention Map", icon: Network, description: "Visual recommendation of therapy combinations." }
          ]
        }
      }
    },
    {
      id: 'wallah2',
      title: 'GQ GPT 2',
      subtitle: 'Synthetic Omics Generator',
      icon: ChartIcon,
      description: 'HIPAA-compliant generation of biologically faithful research data.',
      fullExplanation: [
        "GQ GPT 2 is a state-of-the-art generative engine for synthetic biological data. It allows researchers to create high-fidelity transcriptome (RNA-Seq) and methylation matrices that are statistically indistinguishable from real patient data.",
        "This ensures full HIPAA and GDPR compliance by enabling massive-scale model training without the need for sensitive, identifying patient information. The synthetic data preserves all complex biological correlations, making it a perfect proxy for early-phase in-silico experimentation."
      ],
      capabilities: [
        "RNA-Seq Synthetic Generation",
        "Methylation Matrix Simulation",
        "HIPAA/GDPR Compliance",
        "Privacy-First Data Scaling",
        "Biological Correlation Fidelity"
      ],
      processData: {
        input: {
          title: "Baseline Metadata",
          items: [
            { label: "Real Omics Data", icon: Database, description: "Small, anonymized real-world datasets." },
            { label: "Feature Constraints", icon: Layers, description: "Biological bounds for gene expression." }
          ]
        },
        processing: {
          title: "Generative Scaling",
          groups: [
            {
              title: "Architectures",
              items: [
                { label: "GAN / VAE Ensemble", icon: Brain },
                { label: "Privacy Triage", icon: Cpu },
                { label: "Latent Mapping", icon: Layers },
                { label: "Noise Injection", icon: Zap }
              ]
            },
            {
              title: "Validation",
              items: [
                { label: "Correlation Sync", icon: Activity },
                { label: "Fidelity Scoring", icon: Sparkles },
                { label: "HIPAA Check", icon: ShieldCheck },
                { label: "Matrix Verify", icon: Target }
              ]
            }
          ]
        },
        output: {
          title: "Synthetic Assets",
          items: [
            { label: "RNA-Seq Matrices", icon: ChartIcon, description: "HIPAA-compliant synthetic datasets." },
            { label: "Validation Report", icon: FileText, description: "Statistical proof of data fidelity." }
          ]
        }
      }
    },
    {
      id: 'wallah3',
      title: 'GQ GPT 3',
      subtitle: 'Digital Discovery Engine',
      icon: Brain,
      description: 'High-throughput virtual screening and gene perturbation mapping.',
      fullExplanation: [
        "GQ GPT 3 performs virtual High-Throughput Screening (HTS) at unprecedented scales, capable of simulating the effects of 60,000+ compounds in a digital environment.",
        "The engine generates 'Gene Expression Perturbation Maps' that visualize how specific molecules affect biological pathways at a mechanistic level. This allows researchers to predict both primary efficacy and potential off-target effects before a single physical experiment is conducted."
      ],
      capabilities: [
        "60k+ Compound Virtual HTS",
        "Gene Perturbation Mapping",
        "Pathway Efficacy Prediction",
        "Mechanism-of-Action Insights",
        "Side-Effect Profiling"
      ]
    }
  ];

  const handleOpenModal = (feature: any) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const methodologyFeatures = features.filter(f => f.processData);
  const activeMethodology = methodologyFeatures[activeMethodologyIndex];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0f269a] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto text-left overflow-hidden">
        {/* Floating Glowing Gradients behind Hero */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#0f269a]/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-4xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600">
            <MousePointer2 size={12} className="text-primary animate-pulse" />
            <span>In-Silico Simulation Lab</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-normal tracking-tight leading-[1.12] bg-gradient-to-r from-[#0e172c] to-[#0f269a] bg-clip-text text-transparent max-w-3xl font-sans py-2">
            GQ GPT
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Accelerate discovery through mechanistic simulation. <br />
            Run complex biological experiments on screen — instantly and securely.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <a
              href="https://genquantaa.com/contact##"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-bold text-white bg-[#0f269a] hover:bg-[#0a1a72] transition-all text-sm shadow-md text-center flex items-center justify-center gap-2"
            >
              <span>Secure Enterprise Access</span>
              <ArrowRight size={16} />
            </a>
            <Link
              to="/solutions"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-bold text-[#0f269a] bg-[#0f269a]/10 hover:bg-[#0f269a]/20 transition-colors text-sm shadow-md text-center"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Methodology Section - Custom Inlined ThreeStepProcess */}
      <section className="py-24 bg-slate-50 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Operational Methodology</h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-10 text-sm md:text-base">
              Explore the digital laboratory. Select a module to see how GQ GPT simulates biological reality with high-fidelity AI models.
            </p>

            {/* Selector for Methodology */}
            <div className="flex flex-wrap justify-center gap-3">
              {methodologyFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                const isActive = activeMethodologyIndex === idx;
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveMethodologyIndex(idx)}
                    className={`px-5 py-3.5 rounded-xl font-bold transition-all flex items-center gap-2 text-xs md:text-sm border ${
                      isActive
                        ? 'bg-[#0f269a] text-white border-[#0f269a] shadow-lg shadow-[#0f269a]/20 scale-105'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{feature.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Render 3-Step Visualizer */}
          {activeMethodology && activeMethodology.processData && (
            <div className="relative mt-12 bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
              <div className="text-center mb-12">
                <span className="text-[10px] font-bold text-[#0f269a] uppercase tracking-widest block font-mono">
                  Interactive Pipeline Flow
                </span>
                <h3 className="text-2xl font-bold text-slate-800 mt-2">
                  {activeMethodology.title} - {activeMethodology.subtitle}
                </h3>
              </div>

              {/* 3-Column Layout representing Inputs -> Processing -> Outputs */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative">
                {/* Inputs Column */}
                <div className="flex flex-col bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Database className="w-5 h-5 text-[#0f269a]" />
                    <h4 className="font-bold text-sm uppercase tracking-wider text-slate-800">
                      {activeMethodology.processData.input.title}
                    </h4>
                  </div>
                  <div className="space-y-4 flex-grow">
                    {activeMethodology.processData.input.items.map((item: any, i: number) => {
                      const ItemIcon = item.icon;
                      return (
                        <div key={i} className="bg-white border border-slate-100 rounded-xl p-4 flex gap-3 shadow-2xs">
                          <div className="w-8 h-8 rounded-lg bg-[#0f269a]/10 flex items-center justify-center text-[#0f269a] shrink-0">
                            <ItemIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-800">{item.label}</div>
                            <div className="text-[10px] text-slate-500 mt-0.5">{item.description}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Processing Column */}
                <div className="flex flex-col bg-slate-50 border border-slate-200 rounded-2xl p-6 relative">
                  <div className="flex items-center gap-2 mb-6">
                    <Activity className="w-5 h-5 text-blue-500" />
                    <h4 className="font-bold text-sm uppercase tracking-wider text-slate-800">
                      {activeMethodology.processData.processing.title}
                    </h4>
                  </div>
                  <div className="space-y-6 flex-grow">
                    {activeMethodology.processData.processing.groups.map((group: any, gIdx: number) => (
                      <div key={gIdx} className="space-y-3">
                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                          {group.title}
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {group.items.map((item: any, i: number) => {
                            const ItemIcon = item.icon;
                            return (
                              <div key={i} className="bg-white border border-slate-100 rounded-lg p-2.5 flex items-center gap-2 text-2xs font-bold text-slate-800 shadow-3xs">
                                <ItemIcon className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                                <span className="truncate">{item.label}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outputs Column */}
                <div className="flex flex-col bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Target className="w-5 h-5 text-emerald-500" />
                    <h4 className="font-bold text-sm uppercase tracking-wider text-slate-800">
                      {activeMethodology.processData.output.title}
                    </h4>
                  </div>
                  <div className="space-y-4 flex-grow">
                    {activeMethodology.processData.output.items.map((item: any, i: number) => {
                      const ItemIcon = item.icon;
                      return (
                        <div key={i} className="bg-white border border-slate-100 rounded-xl p-4 flex gap-3 shadow-2xs">
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                            <ItemIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-800">{item.label}</div>
                            <div className="text-[10px] text-slate-500 mt-0.5">{item.description}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Core Modules Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Core Modules</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Mechanistic biological simulation from aging clocks to high-throughput discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                onClick={() => handleOpenModal(feature)}
                className="bg-white border border-slate-200 p-8 sm:p-10 rounded-3xl flex flex-col h-full items-center text-center group cursor-pointer hover:border-slate-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0f269a]/10 flex items-center justify-center text-[#0f269a] mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-1 text-slate-800">{feature.title}</h3>
                <p className="text-[#0f269a] font-bold text-xs uppercase tracking-widest mb-4">
                  {feature.subtitle}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  {feature.description}
                </p>

                <div className="flex items-center gap-1.5 text-[#0f269a] font-bold text-xs border-t border-slate-100 pt-6 w-full justify-center">
                  <span>Know More</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Security & Data Sovereignty Section */}
      <section className="py-24 px-6 bg-slate-50 border-y border-primary/10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-12 sm:p-16 rounded-3xl border border-slate-200 text-center shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600" />
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 mx-auto mb-6">
              <Lock className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Security & Data Sovereignty</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-base leading-relaxed">
              GQ GPT is designed for secure, on-premises deployment. Proprietary compound structures and patient data never leave your organization's firewall.
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-2 border-t border-slate-100">
              <div className="flex flex-col items-center">
                <Shield className="text-[#0f269a] mb-2 w-6 h-6" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700">HIPAA Compliant</span>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="text-[#0f269a] mb-2 w-6 h-6" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700">GDPR Ready</span>
              </div>
              <div className="flex flex-col items-center">
                <Database className="text-[#0f269a] mb-2 w-6 h-6" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700">On-Premises Option</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Research Workflow (Snake Pipeline) */}
      <section className="py-24 bg-white border-y border-primary/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">Integrated Research Workflow</h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-sm md:text-base">
              From biological insight to digital screening — accelerating discovery through mechanistic simulation.
            </p>
          </div>

          <SnakePipeline workflow={workflowData.find(w => w.id === 'wallah')!} />

          {/* Business Impact Card */}
          <div className="mt-16 bg-slate-50 p-8 sm:p-12 rounded-[32px] border border-slate-200">
            <h4 className="font-bold mb-8 flex items-center gap-2 text-[#0f269a] text-xs uppercase tracking-widest font-mono">
              <Zap size={16} />
              <span>The Business Impact</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: "Time to Results", value: "Seconds vs Months", color: "text-[#0f269a]" },
                { label: "Regulatory Friction", value: "Zero (Synthetic Data)", color: "text-[#0f269a]" },
                { label: "Infrastructure Cost", value: "Minimal Footprint", color: "text-[#0f269a]" }
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center border-b border-slate-200/80 pb-4">
                  <span className="text-slate-500 font-medium text-sm">{stat.label}</span>
                  <span className={`font-bold text-sm ${stat.color}`}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Advantage Section */}
      <section className="py-24 px-6 bg-slate-50 border-t border-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight text-slate-800">
                The Strategic Advantage: <br />
                <span className="text-[#0f269a]">Why GQ GPT?</span>
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                In a world of strict data regulations and high-stakes biological IP, **security is the first requirement**. GQ GPT is the only platform that combines high-fidelity simulation with absolute data sovereignty.
              </p>

              <div className="space-y-4">
                {[
                  {
                    q: "Whom does it help?",
                    a: "Data Scientists, Precision Medicine researchers, and organizations operating in jurisdictions with strict privacy mandates (HIPAA/GDPR) who need to scale their models without identifying patient data."
                  },
                  {
                    q: "Why should a client buy it?",
                    a: "Because it removes the 'Data Bottleneck'. GQ GPT generates millions of synthetic data points that are statistically perfect, allowing for massive-scale training on-premises without regulatory friction."
                  },
                  {
                    q: "The Business Perspective",
                    a: "It reduces the cost and risk of data acquisition. By simulating the 'Digital Discovery' lab, organizations can fail fast and pivot early, saving millions in physical assay costs and avoiding data breach liabilities."
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200">
                    <h4 className="font-bold text-[#0f269a] mb-2 flex items-center gap-1.5 text-sm">
                      <Shield size={16} />
                      <span>{item.q}</span>
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed pl-5">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ROI Highlight Card */}
            <div className="relative">
              <div className="bg-[#0e172c] p-10 sm:p-12 rounded-[32px] shadow-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
                <h3 className="text-xl font-bold mb-8 relative z-10">Data Sovereignty ROI</h3>
                <div className="space-y-8 relative z-10 font-sans">
                  <div className="flex items-center gap-5">
                    <div className="text-4xl font-extrabold text-[#22d3ee]">0%</div>
                    <div className="text-xs font-semibold text-slate-300 leading-relaxed">
                      External Data Leakage Risk <br />(On-Premises Native)
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="text-4xl font-extrabold text-[#22d3ee]">Zero</div>
                    <div className="text-xs font-semibold text-slate-300 leading-relaxed">
                      Regulatory Friction <br />(Synthetic Data-Powered)
                    </div>
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <a
                      href="https://genquantaa.com/contact##"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all inline-block text-center text-sm shadow-md"
                    >
                      Secure Enterprise Access
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Detail Modal */}
      {isModalOpen && selectedFeature && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl relative p-6 sm:p-10">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1"
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#0f269a]/10 flex items-center justify-center text-[#0f269a]">
                  {(() => {
                    const Icon = selectedFeature.icon;
                    return <Icon size={24} />;
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">{selectedFeature.title}</h3>
                  <span className="text-xs text-[#0f269a] font-bold uppercase tracking-wider">
                    {selectedFeature.subtitle}
                  </span>
                </div>
              </div>

              {/* Explanations */}
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                {selectedFeature.fullExplanation?.map((paragraph: string, idx: number) => (
                  <p key={idx}>{paragraph}</p>
                )) || <p>{selectedFeature.description}</p>}
              </div>

              {/* Capabilities List */}
              {selectedFeature.capabilities && (
                <div className="space-y-3 border-t border-slate-100 pt-5">
                  <h4 className="font-bold text-xs text-slate-800 uppercase tracking-wider font-mono">
                    Key Capabilities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedFeature.capabilities.map((cap: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-[#0f269a]/5 border border-[#0f269a]/10 rounded-lg text-xs font-semibold text-[#0f269a]"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
