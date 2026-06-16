import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Check,
  Key,
  ShieldCheck,
  BarChart,
  FileCheck,
  Cloud,
  Lock,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import SnakePipeline from '../components/SnakePipeline';

const workflowData = [
  {
    id: 'chemistry',
    steps: [
      {
        id: 'pace',
        phase: 'PHASE 1: INTELLIGENCE',
        title: 'PACE Extraction',
        desc: 'AI-driven extraction of structures and SAR data from patents.',
        outputLabel: 'ARCHITECTURE OUTPUT',
        outputValue: 'Competitive Dataset & Potency Table',
        color: 'cyan',
        icon: 'FileSearch'
      },
      {
        id: 'molspace',
        phase: 'PHASE 1: INTELLIGENCE',
        title: 'MolSpace Explorer',
        desc: 'UMAP visualization of high-dimensional chemical spaces.',
        outputLabel: 'ARCHITECTURE OUTPUT',
        outputValue: 'Interactive Chemical IP Map',
        color: 'cyan',
        icon: 'GitBranch'
      },
      {
        id: 'setup',
        phase: 'PHASE 2: DESIGN',
        title: 'Experiment Setup',
        desc: 'Defines SBDD/LBDD constraints and pharmacophore targets.',
        outputLabel: 'ARCHITECTURE OUTPUT',
        outputValue: 'Unique Experiment UUID',
        color: 'blue',
        icon: 'Sliders'
      },
      {
        id: 'genchem',
        phase: 'PHASE 2: DESIGN',
        title: 'Generative Chemistry',
        desc: 'Ensemble of LSTM, VAE, and Transformers designing molecules.',
        outputLabel: 'ARCHITECTURE OUTPUT',
        outputValue: 'Deduplicated Candidate Pool',
        color: 'blue',
        icon: 'Activity'
      },
      {
        id: 'reward',
        phase: 'PHASE 3: DEEP VALIDATION',
        title: 'Reward Engine',
        desc: '9-step filter for Lipinski, ADMET, Novelty, and Binding.',
        outputLabel: 'ARCHITECTURE OUTPUT',
        outputValue: 'Ranked Shortlist',
        color: 'emerald',
        icon: 'ShieldCheck'
      },
      {
        id: 'gnn',
        phase: 'PHASE 3: DEEP VALIDATION',
        title: 'GNN and Transformers',
        desc: 'Fine-tunes foundation models on project-specific data.',
        outputLabel: 'ARCHITECTURE OUTPUT',
        outputValue: 'High-Accuracy Target Predictions',
        color: 'emerald',
        icon: 'Cpu'
      },
      {
        id: 'gqai',
        phase: 'PHASE 3: DEEP VALIDATION',
        title: 'GQ AI Chemistry',
        desc: 'OpenMM molecular dynamics for physical binding energy.',
        outputLabel: 'ARCHITECTURE OUTPUT',
        outputValue: 'Gibbs Free Energy (ΔG)',
        color: 'emerald',
        icon: 'BarChart'
      },
      {
        id: 'retro',
        phase: 'PHASE 3: DEEP VALIDATION',
        title: 'Retrosynthesis',
        desc: 'Tree-search backward planning to starting materials.',
        outputLabel: 'ARCHITECTURE OUTPUT',
        outputValue: 'Validated Synthetic Routes',
        color: 'emerald',
        icon: 'GitMerge'
      }
    ]
  }
];

export default function ChemistryPage() {

  if (typeof window !== 'undefined') {
    (window as any).ChemistryPageLoaded = true;
  }

  const [emailInput, setEmailInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openSecurityIndex, setOpenSecurityIndex] = useState<number | null>(0);

  // Tab states for multi-image modules
  const [genChemTab, setGenChemTab] = useState<'overview' | 'profile' | 'seed'>('overview');
  const [mdflowTab, setMdflowTab] = useState<'upload' | 'params'>('upload');
  const [modelTrainTab, setModelTrainTab] = useState<'data' | 'features'>('data');
  const [nachoTab, setNachoTab] = useState<'dataset' | 'finetune'>('dataset');

  const securityFeatures = [
    {
      title: 'Single-Sign On (SSO)',
      content: 'Control user access and make it easy for your team to use GenQuantaa.',
      icon: <Key className="w-5 h-5" />
    },
    {
      title: 'Custom Governance Controls',
      content: 'Implement fine-grained access controls and define user permissions with precision.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Analytics and Reporting',
      content: 'Gain deep insights into platform usage, computational resource allocation, and team activity.',
      icon: <BarChart className="w-5 h-5" />
    },
    {
      title: 'HIPAA-Compliant',
      content: 'Built from the ground up to meet the most stringent enterprise compliance standards.',
      icon: <FileCheck className="w-5 h-5" />
    },
    {
      title: 'Secure Cloud',
      content: 'Deploy in our isolated VPC or entirely within your own cloud infrastructure.',
      icon: <Cloud className="w-5 h-5" />
    },
    {
      title: 'Encrypted Data',
      content: 'All data is encrypted in transit and at rest using industry-standard AES-256.',
      icon: <Lock className="w-5 h-5" />
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setEmailInput('');
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0f269a] selection:text-white overflow-x-hidden">

      <Navbar />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* HERO SECTION */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white pt-40 pb-20 px-6 max-w-7xl mx-auto text-left relative">
        <div className="max-w-4xl space-y-6">
          <span className="inline-block px-3 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600">
            GQ Chemistry
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-normal tracking-tight leading-[1.12] bg-gradient-to-r from-[#0e172c] to-[#0f269a] bg-clip-text text-transparent max-w-3xl font-sans py-2">
            GenQuantaa Generative Intelligence Platform
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl leading-relaxed">
            An enterprise-grade, end-to-end Generative Intelligence platform engineered for modern pharmaceutical research and computational drug discovery — unifying eight specialized AI-powered modules into a single, cohesive environment.
          </p>

          <form onSubmit={handleContactSubmit} className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <input
              type="email"
              placeholder="Enter your work email..."
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="w-full sm:w-80 px-4 py-3.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#0f269a] text-sm shadow-sm"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl text-sm font-semibold text-white bg-[#0f269a] hover:bg-[#0a1a72] transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              Request Demo
            </button>
            <Link
              to="/chemistry-solution"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl text-sm font-semibold text-[#0f269a] border border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center cursor-pointer whitespace-nowrap"
            >
              Explore GQ Chemistry Solution
            </Link>
          </form>

          {isSubmitted && (
            <p className="text-xs text-emerald-600 font-semibold animate-pulse pt-2">
              ✓ Request received. We will contact you at this email.
            </p>
          )}
        </div>
      </section>

      {/* Process Visualization (Interactive Snake Pipeline) */}
      <section className="py-24 bg-slate-50 border-y border-primary/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Quantis Pipeline</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Expert-level chemical space navigation and generative design engine.
            </p>
          </div>
          
          <SnakePipeline workflow={workflowData.find(w => w.id === 'chemistry')!} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* MODULE 1: GENERATIVE CHEMISTRY — Emerald, Left-Right, 3 tabs */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#051c12] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-20 px-6 max-w-6xl mx-auto relative">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Text */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  GENERATIVE CHEMISTRY
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  AI-driven novel molecule design from target constraints.
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  The Generative Chemistry module leverages generative AI to design novel small molecule candidates by learning from user-defined structural and pharmacological constraints. It explores a vast chemical space to propose high-affinity lead compounds that satisfy binding, synthetic feasibility, and novelty criteria — all in seconds.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Structure-Based (SBDD) & Ligand-Based (LBDD) Design</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Pharmacophore Query & Mandatory Residue Constraints</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Synthetic Feasibility & Patent Novelty Filtering</span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="pt-4 space-y-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-mono">Interactive Panel View</span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setGenChemTab('overview')}
                      className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all border ${genChemTab === 'overview' ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-slate-900 text-slate-400 border-white/5 hover:text-slate-200'}`}
                    >
                      Overview & Methodology
                    </button>
                    <button
                      onClick={() => setGenChemTab('profile')}
                      className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all border ${genChemTab === 'profile' ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-slate-900 text-slate-400 border-white/5 hover:text-slate-200'}`}
                    >
                      Target Profile Inputs
                    </button>
                    <button
                      onClick={() => setGenChemTab('seed')}
                      className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all border ${genChemTab === 'seed' ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-slate-900 text-slate-400 border-white/5 hover:text-slate-200'}`}
                    >
                      Seed Validation
                    </button>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-emerald-500/10 blur-3xl pointer-events-none"></div>
                <div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#090d16] p-2 hover:border-white/20 transition-all duration-300">
                  <div className="bg-[#0f1422] border-b border-white/5 px-3 py-2 flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">generative_chemistry.png</span>
                  </div>
                  <div className="bg-[#05070c] relative flex items-center justify-center p-2 min-h-[300px]">
                    {genChemTab === 'overview' && <img src="/chemis_ss/Generative_Chemistry.png" alt="Generative Chemistry Overview" className="w-full h-auto object-contain max-h-[400px]" />}
                    {genChemTab === 'profile' && <img src="/chemis_ss/Generative_Chemistry02.png" alt="Target Profile Inputs" className="w-full h-auto object-contain max-h-[400px]" />}
                    {genChemTab === 'seed' && <img src="/chemis_ss/Generative_Chemistry03.png" alt="Seed Molecule Validation" className="w-full h-auto object-contain max-h-[400px]" />}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* MODULE 2: MDFLOW — Blue, Right-Left, 2 tabs */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#081b35] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-20 px-6 max-w-6xl mx-auto relative">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              {/* Text */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  MDFLOW — MOLECULAR DYNAMICS
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  Physics-based simulation of protein-ligand binding dynamics.
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  MDFlow enables researchers to model and simulate the dynamic behavior of protein-ligand complexes under realistic physical force fields. Rather than treating molecular interactions as static, MDFlow captures the time-evolving conformational landscape — revealing binding stability, residence times, and induced fit effects that static docking cannot detect.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-blue-500" />
                    <span>PDB & MOL2 Protein Structure Upload</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-blue-500" />
                    <span>Configurable Force Fields (AMBER14, CHARMM36, GROMOS96)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-blue-500" />
                    <span>RMSD/RMSF Plots & MM-GBSA Binding Free Energy</span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="pt-4 space-y-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-mono">Interactive Panel View</span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setMdflowTab('upload')}
                      className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all border ${mdflowTab === 'upload' ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-900 text-slate-400 border-white/5 hover:text-slate-200'}`}
                    >
                      Protein Upload & Results
                    </button>
                    <button
                      onClick={() => setMdflowTab('params')}
                      className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all border ${mdflowTab === 'params' ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-900 text-slate-400 border-white/5 hover:text-slate-200'}`}
                    >
                      Simulation Parameters
                    </button>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-blue-500/10 blur-3xl pointer-events-none"></div>
                <div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#090d16] p-2 hover:border-white/20 transition-all duration-300">
                  <div className="bg-[#0f1422] border-b border-white/5 px-3 py-2 flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">mdflow_simulation.png</span>
                  </div>
                  <div className="bg-[#05070c] relative flex items-center justify-center p-2 min-h-[300px]">
                    {mdflowTab === 'upload' && <img src="/chemis_ss/MDFlow.png" alt="MDFlow Protein Upload" className="w-full h-auto object-contain max-h-[400px]" />}
                    {mdflowTab === 'params' && <img src="/chemis_ss/MdFow02.png" alt="MDFlow Simulation Parameters" className="w-full h-auto object-contain max-h-[400px]" />}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* MODULE 3: MODEL TRAINING — Pink, Left-Right, 2 tabs */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#200a18] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-20 px-6 max-w-6xl mx-auto relative">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Text */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  MODEL TRAINING — QSAR
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  Build predictive ADMET models from proprietary data.
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  The Model Training module enables researchers to build, fine-tune, and deploy predictive machine learning models tailored to their proprietary biological datasets. Using QSAR methodology, this module trains models that predict physicochemical and biological properties of novel compounds — dramatically reducing the cost and time of physical screening campaigns.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-pink-500" />
                    <span>CSV / SDF Dataset Upload with Auto-Preprocessing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-pink-500" />
                    <span>Morgan Fingerprints, MACCS Keys & Physicochemical Descriptors</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-pink-500" />
                    <span>Cross-Validation R², RMSE & Feature Importance Reports</span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="pt-4 space-y-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-mono">Interactive Panel View</span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setModelTrainTab('data')}
                      className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all border ${modelTrainTab === 'data' ? 'bg-pink-600 text-white border-pink-600' : 'bg-slate-900 text-slate-400 border-white/5 hover:text-slate-200'}`}
                    >
                      Data Upload & Pipeline
                    </button>
                    <button
                      onClick={() => setModelTrainTab('features')}
                      className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all border ${modelTrainTab === 'features' ? 'bg-pink-600 text-white border-pink-600' : 'bg-slate-900 text-slate-400 border-white/5 hover:text-slate-200'}`}
                    >
                      Feature Configuration
                    </button>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-pink-500/10 blur-3xl pointer-events-none"></div>
                <div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#090d16] p-2 hover:border-white/20 transition-all duration-300">
                  <div className="bg-[#0f1422] border-b border-white/5 px-3 py-2 flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">model_training_pipeline.png</span>
                  </div>
                  <div className="bg-[#05070c] relative flex items-center justify-center p-2 min-h-[300px]">
                    {modelTrainTab === 'data' && <img src="/chemis_ss/model_training.png" alt="Model Training Data Upload" className="w-full h-auto object-contain max-h-[400px]" />}
                    {modelTrainTab === 'features' && <img src="/chemis_ss/model_training02.png" alt="Feature Configuration" className="w-full h-auto object-contain max-h-[400px]" />}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* MODULE 4: RETROSYNTHESIS — Cyan, Right-Left, 1 image */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#062024] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-20 px-6 max-w-6xl mx-auto relative">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              {/* Text */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  RETROSYNTHESIS
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  AI-powered synthetic route planning from target molecule.
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  The Retrosynthesis module applies AI-driven retrosynthetic analysis to decompose a complex target molecule into simpler, commercially available precursors via known chemical transformations. GenQuantaa maps over 2.4 million reaction templates to identify the most efficient, cost-effective, and experimentally validated synthetic routes.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-cyan-500" />
                    <span>2.4 Million Reaction Template Library</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-cyan-500" />
                    <span>Step-by-Step Route Breakdown with Reagents & Conditions</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-cyan-500" />
                    <span>Commercial Building Block Sourcing & Cost Estimation</span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-cyan-500/10 blur-3xl pointer-events-none"></div>
                <div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#090d16] p-2 hover:border-white/20 transition-all duration-300">
                  <div className="bg-[#0f1422] border-b border-white/5 px-3 py-2 flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">retrosynthesis_routes.png</span>
                  </div>
                  <div className="bg-[#05070c] relative flex items-center justify-center p-2 min-h-[300px]">
                    <img src="/chemis_ss/retrosynnthesis.png" alt="Retrosynthesis Route Planning" className="w-full h-auto object-contain max-h-[400px]" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* MODULE 5: ALCHEMISTRY — Purple, Left-Right, 1 image */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#1b0c30] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-20 px-6 max-w-6xl mx-auto relative">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Text */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  ALCHEMISTRY — FEP
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  Relative binding free energy calculations for lead optimization.
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Alchemistry implements Free Energy Perturbation (FEP) methodology to calculate the relative binding free energies (ΔΔG) between congeneric ligand series. This enables precise, physics-based lead optimization — quantitatively predicting how small structural modifications affect drug binding affinity without running physical experiments.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-purple-500" />
                    <span>PDB Protein Structure & Ligand Series Upload</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-purple-500" />
                    <span>ΔΔG Matrix & Convergence Analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-purple-500" />
                    <span>Lead Compound Ranking by Binding Affinity</span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-purple-500/10 blur-3xl pointer-events-none"></div>
                <div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#090d16] p-2 hover:border-white/20 transition-all duration-300">
                  <div className="bg-[#0f1422] border-b border-white/5 px-3 py-2 flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">alchemistry_fep.png</span>
                  </div>
                  <div className="bg-[#05070c] relative flex items-center justify-center p-2 min-h-[300px]">
                    <img src="/chemis_ss/alchemistry.png" alt="Alchemistry FEP Configuration" className="w-full h-auto object-contain max-h-[400px]" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* MODULE 6: NACHO01 — Emerald, Right-Left, 2 tabs */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#051c12] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-20 px-6 max-w-6xl mx-auto relative">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              {/* Text */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  NACHO01 — ML DOCKING
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  Deep learning inference with fine-tunable foundation models.
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Nacho01 is GenQuantaa's state-of-the-art deep learning inference engine. It enables users to fine-tune pre-trained foundation models — including Graph Neural Networks (GNNs) and chemical transformers — on proprietary molecular datasets. Once fine-tuned, the model can infer biological properties of new compounds in milliseconds, replacing expensive physical assays.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>GNN / ChemBERTa / MPNN Architecture Selection</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>GPU-Accelerated Fine-Tuning (A100, FP32/BF16)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>SHAP Feature Attribution for Model Interpretability</span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="pt-4 space-y-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-mono">Interactive Panel View</span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setNachoTab('dataset')}
                      className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all border ${nachoTab === 'dataset' ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-slate-900 text-slate-400 border-white/5 hover:text-slate-200'}`}
                    >
                      Dataset Upload & Config
                    </button>
                    <button
                      onClick={() => setNachoTab('finetune')}
                      className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all border ${nachoTab === 'finetune' ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-slate-900 text-slate-400 border-white/5 hover:text-slate-200'}`}
                    >
                      Fine-Tuning Architecture
                    </button>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-emerald-500/10 blur-3xl pointer-events-none"></div>
                <div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#090d16] p-2 hover:border-white/20 transition-all duration-300">
                  <div className="bg-[#0f1422] border-b border-white/5 px-3 py-2 flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">nacho01_ml_docking.png</span>
                  </div>
                  <div className="bg-[#05070c] relative flex items-center justify-center p-2 min-h-[300px]">
                    {nachoTab === 'dataset' && <img src="/chemis_ss/nacho01.png" alt="Nacho01 Dataset Upload" className="w-full h-auto object-contain max-h-[400px]" />}
                    {nachoTab === 'finetune' && <img src="/chemis_ss/nacho02.png" alt="Nacho01 Fine-Tuning" className="w-full h-auto object-contain max-h-[400px]" />}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* MODULE 7: MOLSPACE — Blue, Left-Right, 1 image */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#081b35] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-20 px-6 max-w-6xl mx-auto relative">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Text */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  MOLSPACE — CHEMICAL SPACE
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  Interactive chemical space exploration with UMAP projections.
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  MolSpace provides an interactive visualization platform for exploring the chemical space of large molecular libraries. It applies UMAP dimensionality reduction on high-dimensional Morgan fingerprints to generate a 2D or 3D interactive chemical map — enabling researchers to visually identify scaffold clusters, diversity gaps, and novel bioactive regions.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-blue-500" />
                    <span>Morgan Fingerprint-Based UMAP Dimensionality Reduction</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-blue-500" />
                    <span>HDBSCAN Density Clustering for Scaffold Families</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-blue-500" />
                    <span>Export Subsets to Generative Chemistry or Retrosynthesis</span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-blue-500/10 blur-3xl pointer-events-none"></div>
                <div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#090d16] p-2 hover:border-white/20 transition-all duration-300">
                  <div className="bg-[#0f1422] border-b border-white/5 px-3 py-2 flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">molspace_chemical_map.png</span>
                  </div>
                  <div className="bg-[#05070c] relative flex items-center justify-center p-2 min-h-[300px]">
                    <img src="/chemis_ss/molspace.png" alt="MolSpace Chemical Space Explorer" className="w-full h-auto object-contain max-h-[400px]" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* MODULE 8: PACE PATENT MINER — Pink, Right-Left, 1 image */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#200a18] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-20 px-6 max-w-6xl mx-auto relative">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              {/* Text */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  PACE PATENT MINER
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  Automated chemical intelligence extraction from patent literature.
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  PACE Patent Miner deploys advanced computer vision and natural language processing models to automatically extract chemical intelligence from unstructured patent documents, scientific literature, and clinical trial reports. It reconstructs tabular Structure-Activity Relationship (SAR) data directly from figures and text — a process that previously required days of manual extraction.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-pink-500" />
                    <span>PDF, PNG & JPG Document Processing (up to 50 MB)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-pink-500" />
                    <span>Computer Vision Structure Extraction & NLP Claim Parsing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-pink-500" />
                    <span>SAR Table Reconstruction & Comparative Novelty Reports</span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-pink-500/10 blur-3xl pointer-events-none"></div>
                <div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#090d16] p-2 hover:border-white/20 transition-all duration-300">
                  <div className="bg-[#0f1422] border-b border-white/5 px-3 py-2 flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">pace_patent_miner.png</span>
                  </div>
                  <div className="bg-[#05070c] relative flex items-center justify-center p-2 min-h-[300px]">
                    <img src="/chemis_ss/pace_patent.png" alt="PACE Patent Miner Interface" className="w-full h-auto object-contain max-h-[400px]" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* ENTERPRISE SECURITY SECTION */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-100 bg-white">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-light text-slate-900 mb-6 leading-tight">
              Enterprise Security<br />and Compliance
            </h2>
            <div className="w-full h-px bg-slate-200 mb-8"></div>
            <p className="text-slate-700 text-lg leading-relaxed max-w-md">
              GenQuantaa gives enterprise biopharma systems everything they need to manage security, compliance, and deployment—so scientists, bioinformaticians, and administrators can work seamlessly, at scale.
            </p>
          </div>

          {/* Right Column - Accordion */}
          <div className="space-y-0">
            {securityFeatures.map((feature, idx) => {
              const isOpen = openSecurityIndex === idx;
              return (
                <div key={idx} className="border-b border-slate-200">
                  <button
                    onClick={() => setOpenSecurityIndex(isOpen ? null : idx)}
                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-slate-800 group-hover:text-black transition-colors">
                        {feature.icon}
                      </div>
                      <span className="text-lg font-semibold text-slate-900">{feature.title}</span>
                    </div>
                    <div className="text-slate-400 group-hover:text-slate-600 transition-colors">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="pb-6 pl-9 pr-4">
                      <p className="text-slate-600 text-sm">{feature.content}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
