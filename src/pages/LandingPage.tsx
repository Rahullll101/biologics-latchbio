import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Database,
  Dna,
  Laptop,
  HardDrive,
  Network,
  Cpu,
  Check,
  Upload,
  Search,
  Settings,
  Brain,
  Layers,
  GitBranch,
  Server,
  CheckCircle,
  RefreshCw,
  Download,
  Key,
  ShieldCheck,
  BarChart,
  FileCheck,
  Cloud,
  Lock,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function LandingPage() {

  if (typeof window !== 'undefined') {
    (window as any).LandingPageLoaded = true;
  }
  const [emailInput, setEmailInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Workflow layer state (moved to top)
  const [activeWorkflowLayer, setActiveWorkflowLayer] = useState<number>(3); // default to Layer 3: Scientific AI Engine

  // Auto-play state and logic for workflow slider
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(2); // start with 2 to match layer 3
  const [isMobile, setIsMobile] = useState(false);

  // Link currentSlideIndex to activeWorkflowLayer
  useEffect(() => {
    setActiveWorkflowLayer(currentSlideIndex + 1);
  }, [currentSlideIndex]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => {
        const maxIndex = 5;
        const next = prev >= maxIndex ? 0 : prev + 1;
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Touch Swipe Handlers for Mobile Slider
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    const maxIndex = 5;

    if (isLeftSwipe) {
      setCurrentSlideIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }
    if (isRightSwipe) {
      setCurrentSlideIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
    setIsAutoPlaying(true);
  };

  const [openSecurityIndex, setOpenSecurityIndex] = useState<number | null>(0);

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

  // Screenshot state toggles for each stage
  const [s1Tab, setS1Tab] = useState<'ingestion' | 'scan' | 'results'>('results');
  const [s2Tab, setS2Tab] = useState<'input' | 'blinded' | 'complete'>('complete');
  const [s3Tab, setS3Tab] = useState<'input' | 'admet' | 'results'>('results');
  const [s4Tab, setS4Tab] = useState<'preformulation' | 'formulation'>('formulation');
  const [s5Tab, setS5Tab] = useState<'input' | 'code' | 'validation'>('validation');

  const [storageTab, setStorageTab] = useState<'formulation' | 'preformulation' | 'robotic'>('formulation');



  // Layer 1 (Data Ingestion) state
  const [ingestionStep, setIngestionStep] = useState<'idle' | 'fetching' | 'success'>('idle');
  const [ingestionLogs, setIngestionLogs] = useState<string[]>([]);

  // Layer 2 (AI Preprocessing) state
  const [prepStep, setPrepStep] = useState<'idle' | 'cleaning' | 'vectorizing' | 'success'>('idle');
  const [prepProgress, setPrepProgress] = useState(0);

  // Layer 3 (Scientific AI Engine) state
  const [activeEngineCard, setActiveEngineCard] = useState<'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'>('A');

  // Layer 4 (AI Infrastructure) state
  const [isHeavyLoad, setIsHeavyLoad] = useState(false);

  // Layer 5 (Data Storage) state
  const [inspectingDbDocument, setInspectingDbDocument] = useState<'none' | 'result' | 'chroma'>('result');

  // Layer 6 (Visualization & Reporting) state
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [pdfGenerated, setPdfGenerated] = useState(false);

  const startIngestionSimulation = (query: string) => {
    setIngestionStep('fetching');
    setIngestionLogs(['[INFO] Initializing sequence query...', `[INFO] Query value: "${query}"`]);

    setTimeout(() => {
      setIngestionLogs(prev => [...prev, '[DATABASE] Querying UniProt API for biological records...', '[DATABASE] Retrieved UniProt entry: EGFR_HUMAN (P00533)']);
    }, 800);

    setTimeout(() => {
      setIngestionLogs(prev => [...prev, '[PDB] Fetching crystal structure structure.pdb (resolution: 1.8Å)...', '[ALPHAFOLD] Loading local pre-computed active-site pocket mapping...']);
    }, 1600);

    setTimeout(() => {
      setIngestionLogs(prev => [...prev, '[INFO] Parse successful. Active sites mapped to coordinates.', '[SUCCESS] Ready for pre-processing.']);
      setIngestionStep('success');
    }, 2400);
  };

  const startPrepSimulation = () => {
    setPrepStep('cleaning');
    setPrepProgress(25);

    setTimeout(() => {
      setPrepProgress(50);
    }, 800);

    setTimeout(() => {
      setPrepProgress(75);
    }, 1600);

    setTimeout(() => {
      setPrepProgress(100);
      setPrepStep('success');
    }, 2400);
  };

  const startPdfGeneration = () => {
    setIsGeneratingPdf(true);
    setPdfGenerated(false);
    setTimeout(() => {
      setIsGeneratingPdf(false);
      setPdfGenerated(true);
    }, 1500);
  };

  const engineCards = [
    {
      id: 'A' as const,
      name: 'A. Target Explorer',
      input: 'Disease Name, Gene, Protein',
      models: 'AlphaFold, Protein Insight Models',
      output: 'Potential Drug Targets, Protein Insights, Biological Pathways',
      screenshot: '/screenshots/target_explorer_info.png'
    },
    {
      id: 'B' as const,
      name: 'B. Hit Screening',
      input: 'Compound Library, SMILES',
      models: 'XGBoost, QSAR Models, ML Classification',
      output: 'Active Hits, Toxicity Prediction, Drug-Likeness',
      screenshot: '/screenshots/pocket_discovery_scanning.png'
    },
    {
      id: 'C' as const,
      name: 'C. Molecular Docking',
      input: 'Protein PDB, Ligand Structure',
      models: 'AutoDock Vina, DiffDock Engine',
      output: 'Binding Affinity (ΔG kcal/mol), Docked Complex, Binding Poses',
      screenshot: '/screenshots/molecular_docking_results.png'
    },
    {
      id: 'D' as const,
      name: 'D. Lead Optimization',
      input: 'Top Hits Molecular Scaffolds',
      models: 'MolGPT, Transformer Models, Diffusion Models',
      output: 'Optimized Molecules, Improved Binding, Synthesizable Compounds',
      screenshot: '/screenshots/lead_optimization_results.png'
    },
    {
      id: 'E' as const,
      name: 'E. ADMET Intelligence',
      input: 'Optimized Molecules SMILES',
      models: 'Deep Learning Classifiers, Toxicity Prediction Models',
      output: 'Absorption, Toxicity, Solubility, Drug Safety',
      screenshot: '/screenshots/admet_prediction_complete.png'
    },
    {
      id: 'F' as const,
      name: 'F. Formulation Design',
      input: 'Drug Compound, Excipients',
      models: 'Ingredient Ratio Optimizers, Excipient Compatibility Networks',
      output: 'Excipient Recommendation, Formulation Suggestions, Stability Analysis',
      screenshot: '/screenshots/FORMULATION.png'
    },
    {
      id: 'G' as const,
      name: 'G. Robotic Lab (Future)',
      input: 'Approved Lead Candidate',
      models: 'OT-2 Protocol Compiler, Automated Experiment Engines',
      output: 'Automated Experiment Pipeline, Lab Execution scripts',
      screenshot: '/screenshots/robotic_validation_code.png'
    }
  ];

  const renderLayer1Content = () => (
    <div className="space-y-6 text-left">
      <div className="space-y-2">
        <h4 className="text-xl font-bold text-white">1. Data Input Layer</h4>
        <p className="text-slate-400 text-sm">
          Ingests raw researcher inputs and connects securely to external bioinformatic APIs & data sources.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4 bg-white/5 border border-white/5 rounded-xl p-5 backdrop-blur-md">
          <div>
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block font-mono">User Inputs</span>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {['Protein Sequence', 'Protein Structure (PDB)', 'Disease Name', 'Compound SMILES', 'Molecular Dataset', 'Clinical Data', 'CSV / SDF Upload', 'Research Query'].map((item) => (
                <span key={item} className="px-2 py-1 bg-white/5 border border-white/5 rounded text-xs text-slate-300 font-mono">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="border-t border-white/5 pt-4">
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block font-mono">APIs / Data Sources</span>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {['UniProt', 'PDB', 'ChEMBL', 'PubChem', 'AlphaFold'].map((item) => (
                <span key={item} className="px-2 py-1 bg-[#10b981]/10 border border-[#10b981]/20 rounded text-xs text-emerald-300 font-mono">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 bg-black/40 border border-white/10 rounded-xl p-5 flex flex-col justify-between min-h-[250px]">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono mb-2">Ingestion Console Simulator</span>
            {ingestionStep === 'idle' ? (
              <div className="space-y-3">
                <p className="text-xs text-slate-400">Select a target molecule or query to simulate our live data-source ingestion flow:</p>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => startIngestionSimulation('EGFR Kinase receptor')}
                    className="w-full text-left px-3 py-2 bg-white/5 border border-white/5 hover:border-blue-500/30 rounded text-xs font-mono text-slate-300 flex items-center justify-between group"
                  >
                    <span>Fetch EGFR Kinase receptor</span>
                    <Search className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  </button>
                  <button
                    onClick={() => startIngestionSimulation('hERG Cardiac channel')}
                    className="w-full text-left px-3 py-2 bg-white/5 border border-white/5 hover:border-blue-500/30 rounded text-xs font-mono text-slate-300 flex items-center justify-between group"
                  >
                    <span>Fetch hERG Cardiac channel</span>
                    <Search className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  </button>
                  <button
                    onClick={() => startIngestionSimulation('Sildenafil SDF library upload')}
                    className="w-full text-left px-3 py-2 bg-white/5 border border-white/5 hover:border-blue-500/30 rounded text-xs font-mono text-slate-300 flex items-center justify-between group"
                  >
                    <span>Upload Compound Library (.sdf)</span>
                    <Upload className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-black/60 rounded p-3 border border-white/5 font-mono text-[10px] text-slate-300 space-y-1.5 h-44 overflow-y-auto">
                {ingestionLogs.map((log, idx) => {
                  let color = 'text-slate-400';
                  if (log.startsWith('[DATABASE]')) color = 'text-cyan-400';
                  if (log.startsWith('[PDB]') || log.startsWith('[ALPHAFOLD]')) color = 'text-purple-400';
                  if (log.startsWith('[SUCCESS]')) color = 'text-emerald-400 font-bold';
                  return <div key={idx} className={color}>{log}</div>;
                })}
                {ingestionStep === 'fetching' && (
                  <div className="flex items-center gap-1.5 text-blue-400 animate-pulse mt-2">
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    <span>Accessing databases...</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {ingestionStep !== 'idle' && (
            <button
              onClick={() => {
                setIngestionStep('idle');
                setIngestionLogs([]);
              }}
              className="text-[10px] text-blue-400 hover:text-blue-300 font-bold tracking-wider font-mono uppercase self-start mt-2"
            >
              ← Reset Console
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const renderLayer2Content = () => (
    <div className="space-y-6 text-left">
      <div className="space-y-2">
        <h4 className="text-xl font-bold text-white">2. AI Preprocessing Layer</h4>
        <p className="text-slate-400 text-sm">
          Cleans protein structures, prepares ligands, extracts physicochemical descriptors, and vectorizes embeddings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4 bg-white/5 border border-white/5 rounded-xl p-5 backdrop-blur-md">
          <div>
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block font-mono">What happens here</span>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {['Protein Cleaning', 'Ligand Preparation', 'Feature Extraction', 'Molecular Fingerprinting', 'Descriptor Generation', 'Data Embedding', 'Vectorization'].map((item) => (
                <span key={item} className="px-2 py-1 bg-white/5 border border-white/5 rounded text-xs text-slate-300 font-mono">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="border-t border-white/5 pt-4">
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block font-mono">Models & Tools</span>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {['RDKit', 'BioPython', 'OpenBabel', 'ChromaDB Embeddings'].map((item) => (
                <span key={item} className="px-2 py-1 bg-[#10b981]/10 border border-[#10b981]/20 rounded text-xs text-emerald-300 font-mono">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 bg-black/40 border border-white/10 rounded-xl p-5 flex flex-col justify-between min-h-[250px]">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono mb-2">Molecular Preparation Engine</span>
            {prepStep === 'idle' ? (
              <div className="space-y-4 text-center py-6">
                <p className="text-xs text-slate-400">Initialize RDKit feature extraction and structure cleaning pipeline:</p>
                <button
                  onClick={startPrepSimulation}
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 active:scale-98 transition-all rounded-lg font-bold text-xs text-white uppercase tracking-wider font-mono flex items-center justify-center gap-2 mx-auto"
                >
                  <Settings className="w-4 h-4" />
                  <span>Start Preprocessing</span>
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Pipeline progress</span>
                    <span className="text-blue-400 font-bold">{prepProgress}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-white/5">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
                      style={{ width: `${prepProgress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-black/60 rounded p-3 border border-white/5 font-mono text-[10px] text-slate-300 space-y-1.5 h-24 overflow-y-auto">
                  {prepProgress >= 25 && <div className="text-cyan-400">✓ BioPython: Cleaning protein residues, removing solvent molecules</div>}
                  {prepProgress >= 50 && <div className="text-purple-400">✓ OpenBabel: Adding hydrogens & parsing receptor coordinates</div>}
                  {prepProgress >= 75 && <div className="text-blue-400">✓ RDKit: Generated 2048-bit Morgan Molecular Fingerprints</div>}
                  {prepProgress >= 100 && <div className="text-emerald-400 font-bold">✓ ChromaDB: Embeddings generated and stored successfully!</div>}
                </div>
              </div>
            )}
          </div>

          {prepStep === 'success' && (
            <button
              onClick={() => setPrepStep('idle')}
              className="text-[10px] text-blue-400 hover:text-blue-300 font-bold tracking-wider font-mono uppercase self-start mt-2"
            >
              ← Reset Preprocessor
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const renderLayer3Content = () => {
    const activeCard = engineCards.find(c => c.id === activeEngineCard) || engineCards[0];
    return (
      <div className="space-y-6 text-left">
        <div className="space-y-2">
          <h4 className="text-xl font-bold text-white">3. Scientific AI Engine</h4>
          <p className="text-slate-400 text-sm">
            The core intelligence layer: divided into 7 domain-specific modules. Select a card below to view specifications and see its live screen output on the right.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[460px] overflow-y-auto pr-2 scrollbar-thin">
            {engineCards.map((card) => {
              const isSelected = activeEngineCard === card.id;
              return (
                <div
                  key={card.id}
                  onClick={() => setActiveEngineCard(card.id)}
                  className={`cursor-pointer rounded-lg p-4 border transition-all duration-200 flex flex-col justify-between space-y-2 ${isSelected ? 'bg-blue-600/10 border-blue-500/40 text-white' : 'bg-[#0f1322]/60 border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/10'}`}
                >
                  <div>
                    <div className="font-bold text-xs leading-tight flex items-center gap-1.5">
                      <Brain className={`w-3.5 h-3.5 ${isSelected ? 'text-blue-400' : 'text-slate-500'}`} />
                      <span>{card.name}</span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1 font-mono leading-relaxed line-clamp-2">
                      <strong className="text-slate-300">Models:</strong> {card.models}
                    </p>
                  </div>
                  <span className="text-[9px] font-bold text-blue-400/80 font-mono tracking-wider">
                    {isSelected ? 'ACTIVE VIEWING' : 'CLICK TO INSPECT'}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-6 bg-[#05070c] border border-white/10 rounded-xl overflow-hidden shadow-xl flex flex-col justify-between min-h-[380px]">
            <div className="bg-[#0f1422] border-b border-white/5 px-4 py-2 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300 font-bold">{activeCard.name} screen_output</span>
              <span className="text-[10px] text-slate-500">live_preview.png</span>
            </div>

            <div className="p-3 bg-black/40 flex-grow flex items-center justify-center min-h-[220px]">
              <img
                src={activeCard.screenshot}
                alt={activeCard.name}
                className="w-full h-auto object-contain max-h-[240px] rounded border border-white/5 shadow-inner"
              />
            </div>

            <div className="bg-[#0f1422]/40 border-t border-white/5 p-4 space-y-2 text-xs font-mono">
              <div>
                <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest block font-mono">Input Parameters</span>
                <span className="text-slate-300">{activeCard.input}</span>
              </div>
              <div className="border-t border-white/5 pt-2">
                <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest block font-mono">Output Data Schema</span>
                <span className="text-slate-300">{activeCard.output}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderLayer4Content = () => (
    <div className="space-y-6 text-left">
      <div className="space-y-2">
        <h4 className="text-xl font-bold text-white">4. AI Infrastructure Layer</h4>
        <p className="text-slate-400 text-sm">
          A powerful backend network coordinates FastAPI API endpoints, Celery workers, Redis message queues, and Kubernetes GPU nodes to run jobs asynchronously.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-4 bg-white/5 border border-white/5 rounded-xl p-5 backdrop-blur-md md:col-span-1">
          <div>
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block font-mono">Infrastructure Components</span>
            <div className="flex flex-col gap-2 mt-3 font-mono text-xs">
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">API Gateway</span>
                <span className="text-white font-bold">FastAPI Backend</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Message Broker</span>
                <span className="text-white font-bold">Redis Queue</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Async Workers</span>
                <span className="text-white font-bold">Celery Workers</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Compute Stack</span>
                <span className="text-white font-bold">GPU H100 Workers</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Job Updates</span>
                <span className="text-white font-bold">WebSocket Stream</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">Orchestrator</span>
                <span className="text-white font-bold">Kubernetes Pods</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-4">
            <button
              onClick={() => setIsHeavyLoad(!isHeavyLoad)}
              className={`w-full py-2.5 rounded font-bold text-xs font-mono uppercase tracking-wider transition-colors border ${isHeavyLoad ? 'bg-red-600 border-red-600 text-white hover:bg-red-700 animate-pulse' : 'bg-slate-900 border-white/10 text-slate-300 hover:text-white hover:border-white/20'}`}
            >
              {isHeavyLoad ? '✓ High Load Activated' : 'Simulate Heavy Load'}
            </button>
          </div>
        </div>

        <div className="bg-black/40 border border-white/10 rounded-xl p-5 md:col-span-2 flex flex-col justify-between min-h-[350px] relative overflow-hidden">
          <div className="absolute top-2 right-2 flex items-center gap-1.5 text-[9px] font-mono text-slate-500">
            <span className={`w-2 h-2 rounded-full ${isHeavyLoad ? 'bg-red-500 animate-ping' : 'bg-emerald-500 animate-pulse'}`}></span>
            <span>SYSTEM HEALTH: {isHeavyLoad ? 'LOAD LIMIT' : 'OPTIMAL'}</span>
          </div>

          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono mb-6">Orchestration & Data Flow Topology</span>

            <div className="grid grid-cols-3 gap-4 relative z-10 pt-4">
              <div className="bg-[#111625] border border-white/5 rounded-lg p-4 flex flex-col items-center justify-center text-center space-y-2 relative">
                <Server className="w-5 h-5 text-blue-400" />
                <span className="font-bold text-[10px] text-white">FastAPI Gateway</span>
                <span className="text-[9px] font-mono text-slate-500">HTTP & /ws/stream</span>
              </div>

              <div className="bg-[#111625] border border-white/5 rounded-lg p-4 flex flex-col items-center justify-center text-center space-y-2 relative">
                <RefreshCw className="w-5 h-5 text-purple-400 animate-spin-slow" />
                <span className="font-bold text-[10px] text-white">Redis Queue</span>
                <span className="text-[9px] font-mono text-slate-500">{isHeavyLoad ? '24 queued runs' : 'Queue: idle'}</span>
              </div>

              <div className="bg-[#111625] border border-white/5 rounded-lg p-4 flex flex-col items-center justify-center text-center space-y-2 relative">
                <Cpu className={`w-5 h-5 text-cyan-400 ${isHeavyLoad ? 'animate-pulse text-red-400' : ''}`} />
                <span className="font-bold text-[10px] text-white">GPU Node Pool</span>
                <span className="text-[9px] font-mono text-slate-500">{isHeavyLoad ? '98% capacity' : '32% capacity'}</span>
              </div>
            </div>

            <div className="w-full h-12 relative pointer-events-none mt-2">
              <svg className="w-full h-full" viewBox="0 0 500 50" fill="none">
                <path d="M 80 25 L 420 25" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
                <path
                  d="M 80 25 L 420 25"
                  stroke={isHeavyLoad ? 'rgba(239, 68, 68, 0.4)' : 'rgba(59, 130, 246, 0.3)'}
                  strokeWidth="4"
                  strokeDasharray="15 15"
                  className={isHeavyLoad ? 'animate-flow-fast' : 'animate-flow'}
                />
              </svg>
            </div>

            <div className="border-t border-white/5 pt-4 mt-2">
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block font-mono mb-2">Kubernetes Pod Instances</span>
              <div className="flex flex-wrap gap-1.5">
                {Array.from({ length: isHeavyLoad ? 16 : 8 }).map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${isHeavyLoad ? 'bg-red-500/10 border-red-500/30' : 'bg-emerald-500/10 border-emerald-500/30'} transition-all duration-300 animate-pulse`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isHeavyLoad ? 'bg-red-400' : 'bg-emerald-400'}`}></span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLayer5Content = () => (
    <div className="space-y-6 text-left">
      <div className="space-y-2">
        <h4 className="text-xl font-bold text-white">5. Data Storage Layer</h4>
        <p className="text-slate-400 text-sm">
          Stores high-dimensional molecular vector embeddings alongside relational metadata logs and model run checkpoints.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4 bg-white/5 border border-white/5 rounded-xl p-5 backdrop-blur-md flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block font-mono">Databases Used</span>
              <div className="flex flex-col gap-2 mt-2">
                <button
                  onClick={() => setInspectingDbDocument('result')}
                  className={`text-left p-2.5 rounded border transition-colors flex items-center justify-between ${inspectingDbDocument === 'result' ? 'bg-blue-600/10 border-blue-500/40 text-white' : 'bg-[#0f1322] border-white/5 text-slate-400 hover:text-slate-200'}`}
                >
                  <span className="text-xs font-mono">MongoDB Atlas</span>
                  <Database className="w-3.5 h-3.5 text-slate-400" />
                </button>
                <button
                  onClick={() => setInspectingDbDocument('chroma')}
                  className={`text-left p-2.5 rounded border transition-colors flex items-center justify-between ${inspectingDbDocument === 'chroma' ? 'bg-blue-600/10 border-blue-500/40 text-white' : 'bg-[#0f1322] border-white/5 text-slate-400 hover:text-slate-200'}`}
                >
                  <span className="text-xs font-mono">ChromaDB Vector Store</span>
                  <Network className="w-3.5 h-3.5 text-slate-400" />
                </button>
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 space-y-1">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block font-mono">Data Assets</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {['Experiment Results', 'Model Artifacts', 'Vector Embeddings', 'PDB cache'].map((item) => (
                  <span key={item} className="px-2 py-0.5 bg-white/5 rounded text-[10px] text-slate-400 font-mono">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-8 bg-black/40 border border-white/10 rounded-xl p-5 flex flex-col justify-between min-h-[300px]">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono mb-4">Schema Document Inspector</span>

            {inspectingDbDocument === 'result' ? (
              <div className="space-y-2">
                <span className="text-xs text-slate-300 font-bold block">MongoDB Document (Result Collection):</span>
                <pre className="bg-[#05070c] rounded p-4 border border-white/5 font-mono text-[10px] text-slate-400 overflow-x-auto leading-relaxed">
                  {`{
  "_id": "664c39f0a2df3859d04821a",
  "company": "GenQuantaa Pvt. Ltd.",
  "run_metadata": {
    "session_id": "gq_run_94821a",
    "target_gene": "EGFR_HUMAN",
    "uniprot_id": "P00533",
    "compounds_screened": 12450
  },
  "results": {
    "best_hits": [
      { "smiles": "CC(=O)NC1=CC=C(C=C1)O", "docking_score": -9.4 },
      { "smiles": "CN1C=NC2=C1C(=O)N(C(=O)N2C)C", "docking_score": -8.8 }
    ]
  },
  "status": "completed",
  "timestamp": "2026-05-21T05:14:02Z"
}`}
                </pre>
              </div>
            ) : (
              <div className="space-y-2">
                <span className="text-xs text-slate-300 font-bold block">ChromaDB Vector Embeddings collection:</span>
                <pre className="bg-[#05070c] rounded p-4 border border-white/5 font-mono text-[10px] text-slate-400 overflow-x-auto leading-relaxed">
                  {`{
  "collection": "biologics_embeddings",
  "vector_dimensions": 1536,
  "distance_metric": "cosine",
  "embeddings_metadata": {
    "target_id": "P00533",
    "feature_count": 2048,
    "rdkit_morgan_radius": 2
  },
  "index_health": "synchronized",
  "total_records": 12450
}`}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderLayer6Content = () => (
    <div className="space-y-6 text-left">
      <div className="space-y-2">
        <h4 className="text-xl font-bold text-white">6. Visualization & Reporting Layer</h4>
        <p className="text-slate-400 text-sm">
          Integrates 3D molecular viewers, Plotly analytics dashboards, and generates structured PDF discovery dossiers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4 bg-white/5 border border-white/5 rounded-xl p-5 backdrop-blur-md flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block font-mono">Frontend Visualization</span>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {['3Dmol.js', 'Plotly', 'Chart.js', 'Molecular Viewer', 'Analytics Dashboard'].map((item) => (
                  <span key={item} className="px-2 py-1 bg-white/5 border border-white/5 rounded text-xs text-slate-300 font-mono">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-t border-white/5 pt-4">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block font-mono">Output Formats</span>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {['PDF Reports', 'Scientific Graphs', 'Docking Results', 'ADMET Reports', 'AI Recommendations'].map((item) => (
                  <span key={item} className="px-2 py-1 bg-[#10b981]/10 border border-[#10b981]/20 rounded text-xs text-emerald-300 font-mono">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-8 bg-black/40 border border-white/10 rounded-xl p-5 flex flex-col justify-between min-h-[300px]">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono mb-4">Scientific Dossier Hub</span>

            <div className="bg-[#05070c] border border-white/5 rounded p-4 space-y-4">
              <div className="flex justify-between items-start border-b border-white/5 pb-3">
                <div>
                  <h5 className="font-bold text-white text-xs">GENQUANTAA DISCOVERY REPORT</h5>
                  <span className="text-[8px] font-mono text-slate-500">SESSION: GQ-94821A | RECEPTOR: EGFR</span>
                </div>
                <span className="text-[9px] bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 font-mono font-bold px-2 py-0.5 rounded">
                  AUDIT-READY
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 font-mono text-[9px] text-slate-400">
                <div className="bg-white/5 p-2 rounded">
                  <span className="block text-slate-500">HIT ACCURACY</span>
                  <span className="text-white font-bold text-xs mt-0.5 block">87.4%</span>
                </div>
                <div className="bg-white/5 p-2 rounded">
                  <span className="block text-slate-500">BEST DOCKING</span>
                  <span className="text-emerald-400 font-bold text-xs mt-0.5 block">-9.4 kcal/mol</span>
                </div>
                <div className="bg-white/5 p-2 rounded">
                  <span className="block text-slate-500">QED SCORE</span>
                  <span className="text-white font-bold text-xs mt-0.5 block">0.86</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/5 mt-4">
            {pdfGenerated ? (
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>PDF generated successfully!</span>
              </div>
            ) : (
              <button
                onClick={startPdfGeneration}
                disabled={isGeneratingPdf}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/40 active:scale-98 transition-all rounded font-bold text-xs font-mono uppercase tracking-wider text-white flex items-center gap-1.5"
              >
                {isGeneratingPdf ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Compiling dossier...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Generate PDF Dossier</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

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

      {/* Pure White Hero Section */}
      <section className="bg-white pt-40 pb-20 px-6 max-w-7xl mx-auto text-left relative">
        <div className="max-w-4xl space-y-6">
          <span className="inline-block px-3 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600">
            Discovery
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-normal tracking-tight leading-[1.12] bg-gradient-to-r from-[#0e172c] to-[#0f269a] bg-clip-text text-transparent max-w-4xl font-sans py-2">
            From Years to Weeks: The Genesys Quantis Platform Accelerating the Future of Drug Discovery.
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl leading-relaxed font-light">
            Log in now to transform insights into breakthroughs.
          </p>

          <form onSubmit={handleContactSubmit} className="flex flex-col sm:flex-row sm:flex-wrap items-center gap-4 pt-4">
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
              Request a Demo
            </button>
            <Link
              to="/discovery-solution"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl text-sm font-semibold text-[#0f269a] border border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center cursor-pointer whitespace-nowrap"
            >
              Explore Discovery Solution
            </Link>
            <a
              href="https://www.genesysquantis.com/templates/login.html"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl text-sm font-semibold border border-slate-200 text-[#0f269a] bg-white hover:bg-slate-50 shadow-sm transition-all flex items-center justify-center cursor-pointer whitespace-nowrap"
            >
              Sign up to Discovery Platform
            </a>
          </form>

          {isSubmitted && (
            <p className="text-xs text-emerald-600 font-semibold animate-pulse pt-2">
              ✓ Request received. We will contact you at this email.
            </p>
          )}
        </div>
      </section>

      {/* Section 1: Workflow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          {/* Core Decisions Intro */}
          <section className="pt-24 pb-16 px-6 max-w-6xl mx-auto text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              Make scientific decisions faster than ever.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Centralize and standardize all your data and computation into a single source of truth.
            </p>

            {/* Central Tablet Graphic with Custom Mockup Theme (Enlarged browser style) */}
            <div className="relative pt-12 pb-6 max-w-4xl mx-auto flex flex-col items-center group w-full">
              <div className="relative w-full max-w-3xl aspect-[16/10] bg-[#090d16] border border-white/10 rounded-2xl p-1.5 shadow-[0_0_50px_rgba(59,130,246,0.25)]">
                {/* Browser/Tablet Screen wrapper */}
                <div className="w-full h-full border border-white/5 bg-[#0d1222] rounded-[11px] flex flex-col relative overflow-hidden">
                  
                  {/* Browser top window bar decoration */}
                  <div className="h-7 bg-[#0b0f19] border-b border-white/5 flex items-center px-4 shrink-0 justify-between">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">genquantaa.com/dashboard</span>
                    <div className="w-12"></div> {/* spacer to balance window controls */}
                  </div>

                  {/* Screen Content Wrapper */}
                  <div className="relative flex-grow w-full h-full overflow-hidden">
                    {/* Glow behind dashboard */}
                    <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-xl"></div>

                    {/* Dashboard Image */}
                    <img
                      src="/screenshots/dashboard.png"
                      alt="GenQuantaa Dashboard"
                      className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal Sliding Carousel in screenshot style */}
            <div 
              className="w-full py-8 relative select-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Sliding Track Viewport */}
              <div className="w-full overflow-visible px-4 lg:px-0 pb-6">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ 
                    width: isMobile ? '600%' : '200%', 
                    transform: `translateX(-${
                      isMobile 
                        ? currentSlideIndex * (100 / 6) 
                        : Math.min(currentSlideIndex, 3) * (100 / 6)
                    }%)` 
                  }}
                >
                  {[
                    {
                      layer: 1,
                      category: 'Data',
                      index: '1/6',
                      title: 'Multi-Modal Inputs',
                      desc: 'Upload Protein Sequences, SMILES, PDB structures, or datasets. Auto-queries UniProt, PDB, ChEMBL, PubChem, and AlphaFold.',
                      bannerClass: 'bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-900',
                    },
                    {
                      layer: 2,
                      category: 'Preprocessing',
                      index: '2/6',
                      title: 'Biomolecular Cleaning',
                      desc: 'Cleans proteins and prepares ligands. Generates Morgan fingerprints and 3D vector embeddings with RDKit and BioPython.',
                      bannerClass: 'bg-gradient-to-r from-teal-500 via-emerald-600 to-teal-800',
                    },
                    {
                      layer: 3,
                      category: 'AI Engine',
                      index: '3/6',
                      title: 'Target & Hit Screening',
                      desc: 'Run XGBoost classification, AutoDock Vina binding simulations, scaffold optimization, and ADMET toxicity risk profiling.',
                      bannerClass: 'bg-gradient-to-r from-blue-500 via-cyan-600 to-blue-700',
                    },
                    {
                      layer: 4,
                      category: 'Infrastructure',
                      index: '4/6',
                      title: 'GPU Infrastructure',
                      desc: 'Deploy Kubernetes GPU worker nodes, FastAPI task queues, and secure Amazon S3 storage vaults.',
                      bannerClass: 'bg-gradient-to-r from-purple-600 via-violet-700 to-purple-800',
                    },
                    {
                      layer: 5,
                      category: 'Storage',
                      index: '5/6',
                      title: 'Data Storage',
                      desc: 'Stores high-dimensional molecular vector embeddings alongside relational metadata logs and model run checkpoints.',
                      bannerClass: 'bg-gradient-to-r from-cyan-600 via-sky-700 to-cyan-800',
                    },
                    {
                      layer: 6,
                      category: 'Reporting',
                      index: '6/6',
                      title: 'Interactive Dossiers',
                      desc: 'Interactive Mol* 3D molecular structures, target pocket maps, and automated PDF dossier reports.',
                      bannerClass: 'bg-gradient-to-r from-fuchsia-600 via-pink-700 to-fuchsia-800',
                    },
                  ].map((slide) => {
                    const Icon = slide.layer === 1 || slide.layer === 5 ? Database : (slide.layer === 2 ? Layers : (slide.layer === 3 ? GitBranch : Cpu));
                    return (
                      <div key={slide.layer} className="w-1/6 px-3 shrink-0 transition-all duration-300">
                        <div 
                          onClick={() => {
                            setIsAutoPlaying(false);
                            setCurrentSlideIndex(slide.layer - 1);
                          }}
                          className={`rounded-3xl overflow-hidden transition-all duration-300 flex flex-col min-h-[350px] h-full border text-left cursor-pointer ${
                            currentSlideIndex === slide.layer - 1
                              ? `bg-[#0b1424] opacity-100 scale-[1.01] ${
                                  {
                                    1: 'border-emerald-500/60 shadow-[0_0_25px_rgba(16,185,129,0.22)]',
                                    2: 'border-pink-500/60 shadow-[0_0_25px_rgba(236,72,153,0.22)]',
                                    3: 'border-blue-500/60 shadow-[0_0_25px_rgba(59,130,246,0.22)]',
                                    4: 'border-purple-500/60 shadow-[0_0_25px_rgba(139,92,246,0.22)]',
                                    5: 'border-cyan-500/60 shadow-[0_0_25px_rgba(6,182,212,0.22)]',
                                    6: 'border-fuchsia-500/60 shadow-[0_0_25px_rgba(217,70,239,0.22)]',
                                  }[slide.layer as 1 | 2 | 3 | 4 | 5 | 6]
                                }`
                              : 'border-white/5 bg-[#070b13]/80 opacity-40 hover:opacity-85 shadow-sm'
                          }`}
                        >
                          {/* Card Body — TEXT ON TOP */}
                          <div className="p-6 sm:p-7 flex flex-col flex-grow">
                            <div>
                              {/* Header category + index bubble */}
                              <div className="flex justify-between items-center text-xs font-semibold text-slate-400">
                                <span className={currentSlideIndex === slide.layer - 1 ? 'text-[#a7f3d0]' : 'text-slate-400'}>{slide.category}</span>
                                <span className="bg-slate-800 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full font-mono">
                                  {slide.index}
                                </span>
                              </div>

                              {/* Title */}
                              <h3 className={`font-medium text-lg mt-3.5 mb-2 leading-snug tracking-tight ${
                                currentSlideIndex === slide.layer - 1 ? 'text-white' : 'text-slate-200'
                              }`}>
                                {slide.title}
                              </h3>

                              {/* Description */}
                              <p className={`text-[13px] leading-relaxed font-sans font-normal ${
                                currentSlideIndex === slide.layer - 1 ? 'text-slate-300' : 'text-slate-500'
                              }`}>
                                {slide.desc}
                              </p>
                            </div>
                          </div>

                          {/* Banner Graphic — IMAGE ON BOTTOM */}
                          <div className={`h-24 sm:h-28 ${slide.bannerClass} relative overflow-hidden flex items-center justify-between px-6 shrink-0 mt-auto`}>
                            {/* Technical overlay pattern */}
                            <div className="absolute inset-0 opacity-15" style={{
                              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                              backgroundSize: '10px 10px'
                            }} />
                            <Icon className="w-8 h-8 text-white/40 absolute -right-2 -bottom-2 transform rotate-12" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Slider Controls at Bottom Left (matching screenshot style) */}
              <div className="flex gap-2 justify-start mt-6 pl-4">
                <button
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentSlideIndex((prev) => (prev === 0 ? 5 : prev - 1));
                  }}
                  className="p-3 border border-white/10 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-400 hover:text-white transition-all shadow-md active:scale-95 focus:outline-none"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentSlideIndex((prev) => (prev >= 5 ? 0 : prev + 1));
                  }}
                  className="p-3 border border-white/10 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-400 hover:text-white transition-all shadow-md active:scale-95 focus:outline-none"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

            {/* Active Simulation Display Panel (Interactive workflow area) */}
            <div className="pt-10 max-w-6xl mx-auto text-left relative z-10">
              <div className="bg-[#090d16] border border-white/10 rounded-2xl p-8 shadow-2xl relative flex flex-col justify-between min-h-[500px]">
                {/* Decorative radial blur element */}
                <div className="absolute inset-0 bg-blue-500/5 blur-3xl pointer-events-none rounded-2xl"></div>

                <div className="relative z-10 w-full">
                  {activeWorkflowLayer === 1 && renderLayer1Content()}
                  {activeWorkflowLayer === 2 && renderLayer2Content()}
                  {activeWorkflowLayer === 3 && renderLayer3Content()}
                  {activeWorkflowLayer === 4 && renderLayer4Content()}
                  {activeWorkflowLayer === 5 && renderLayer5Content()}
                  {activeWorkflowLayer === 6 && renderLayer6Content()}
                </div>

                {/* Bottom footer bar in panel */}
                <div className="border-t border-white/5 pt-4 mt-8 flex items-center justify-between text-[10px] font-mono text-slate-500 relative z-10">
                  <span>GENQUANTAA V2.0 PRODUCTION PIPELINE</span>
                  <span className="uppercase tracking-widest text-blue-400/80 font-bold">Layer 0{activeWorkflowLayer} of 06</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Section 2: Latch Data */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#051c12] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          {/* Latch Data Section */}
          <section className="py-24 px-6 max-w-6xl mx-auto space-y-12">
            <div className="max-w-2xl space-y-3 text-left">
              <div className="flex items-center gap-2 text-[#10b981] font-bold text-sm tracking-wider uppercase font-mono">
                <HardDrive className="w-4.5 h-4.5" />
                <span>GenQuantaa Data</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                A storage solution for modern R&D.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Connect your instruments, workflows, and reports into your own private workspace secured by Amazon s3.
              </p>
            </div>

            <div className="bg-[#090d16] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              <div className="bg-[#0f1422] border-b border-white/5 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
                  </div>
                </div>
                <span className="text-[10px] text-slate-500 font-mono hidden sm:inline">Data Registry.mp4</span>
              </div>

              <div className="bg-[#05070c] relative flex items-center justify-center p-2 min-h-[300px]">
                <video
                  src="/Data Registry.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-contain max-h-[500px]"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Section 3 - Stage 1: Target Discovery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#051c12] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-20 px-6 max-w-6xl mx-auto relative">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  TARGET EXPLORATION
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  Ingest receptors, predict cavities, map structures.
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Explore primary gene transcripts and target structures instantly. Use advanced bioinformatic algorithms to parse target sequences, visualize PDB structures, and pinpoint active pocket binding locations with high spatial accuracy.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Recombinant Target Registry</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Folding & Pocket Scan (AlphaFold)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Surface Druggability Cavity Scoring</span>
                  </div>
                </div>

                {/* Selector */}
                <div className="pt-4 space-y-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-mono">Interactive Panel View</span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setS1Tab('ingestion')}
                      className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all border ${s1Tab === 'ingestion' ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-slate-900 text-slate-400 border-white/5 hover:text-slate-200'}`}
                    >
                      Target Ingestion
                    </button>
                    <button
                      onClick={() => setS1Tab('scan')}
                      className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all border ${s1Tab === 'scan' ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-slate-900 text-slate-400 border-white/5 hover:text-slate-200'}`}
                    >
                      Cavity Scan
                    </button>
                    <button
                      onClick={() => setS1Tab('results')}
                      className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all border ${s1Tab === 'results' ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-slate-900 text-slate-400 border-white/5 hover:text-slate-200'}`}
                    >
                      Discovery Cavities
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-emerald-500/10 blur-3xl pointer-events-none"></div>
                <div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#090d16] p-2 hover:border-white/20 transition-all duration-300">
                  <div className="bg-[#0f1422] border-b border-white/5 px-3 py-2 flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">target_explorer_panel.png</span>
                  </div>
                  <div className="bg-[#05070c] relative flex items-center justify-center p-2 min-h-[300px]">
                    {s1Tab === 'ingestion' && <img src="/screenshots/target_explorer.png" alt="Target Ingestion" className="w-full h-auto object-contain max-h-[400px]" />}
                    {s1Tab === 'scan' && <img src="/screenshots/pocket_discovery_scanning.png" alt="Pocket scan" className="w-full h-auto object-contain max-h-[400px]" />}
                    {s1Tab === 'results' && <img src="/screenshots/target_explorer_info.png" alt="Pocket Results" className="w-full h-auto object-contain max-h-[400px]" />}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Section 3 - Stage 2: Molecular Docking & Screening */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#081b35] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-20 px-6 max-w-6xl mx-auto relative">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  VIRTUAL SCREENING
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  High-throughput virtual screening & binding simulations.
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Simulate millions of receptor-ligand configurations with optimized Autodock Vina integration. Track docking runs in real-time, compute energy scoring metrics, and extract high-affinity compounds into a structured pipeline.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-blue-500" />
                    <span>Autodock Vina integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-blue-500" />
                    <span>Blinded screening parameters</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-blue-500" />
                    <span>Affinity metrics</span>
                  </div>
                </div>

                {/* Selector */}
                <div className="pt-4 space-y-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-mono">Interactive Panel View</span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setS2Tab('input')}
                      className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all border ${s2Tab === 'input' ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-900 text-slate-400 border-white/5 hover:text-slate-200'}`}
                    >
                      Docking Configuration
                    </button>
                    <button
                      onClick={() => setS2Tab('blinded')}
                      className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all border ${s2Tab === 'blinded' ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-900 text-slate-400 border-white/5 hover:text-slate-200'}`}
                    >
                      Blinded Screen
                    </button>
                    <button
                      onClick={() => setS2Tab('complete')}
                      className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all border ${s2Tab === 'complete' ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-900 text-slate-400 border-white/5 hover:text-slate-200'}`}
                    >
                      Docking Complete
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-blue-500/10 blur-3xl pointer-events-none"></div>
                <div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#090d16] p-2 hover:border-white/20 transition-all duration-300">
                  <div className="bg-[#0f1422] border-b border-white/5 px-3 py-2 flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">molecular_docking_workspace.png</span>
                  </div>
                  <div className="bg-[#05070c] relative flex items-center justify-center p-2 min-h-[300px]">
                    {s2Tab === 'input' && <img src="/screenshots/molecular_docking_input.png" alt="Docking Input" className="w-full h-auto object-contain max-h-[400px]" />}
                    {s2Tab === 'blinded' && <img src="/screenshots/bLINDEDSCREEN.png" alt="Blinded screen" className="w-full h-auto object-contain max-h-[400px]" />}
                    {s2Tab === 'complete' && <img src="/screenshots/molecular_docking_results.png" alt="Docking complete results" className="w-full h-auto object-contain max-h-[400px]" />}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Section 3 - Stage 3: Lead Optimization */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#200a18] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-20 px-6 max-w-6xl mx-auto relative">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  LEAD OPTIMIZATION
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  Generative lead optimization & ADMET predictive models.
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Optimize molecule scaffolds to meet multiparameter pharmacokinetics targets. Model absorption, distribution, metabolism, excretion, and toxicity profiles using AI predictions to discard risky compounds before chemical synthesis.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-pink-500" />
                    <span>Scaffold-hopping networks</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-pink-500" />
                    <span>Permeability & cardiac blockage risk</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-pink-500" />
                    <span>Quantitative drug-likeness (QED)</span>
                  </div>
                </div>

                {/* Selector */}
                <div className="pt-4 space-y-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-mono">Interactive Panel View</span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setS3Tab('input')}
                      className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all border ${s3Tab === 'input' ? 'bg-pink-600 text-white border-pink-600' : 'bg-slate-900 text-slate-400 border-white/5 hover:text-slate-200'}`}
                    >
                      Evolution Input
                    </button>
                    <button
                      onClick={() => setS3Tab('admet')}
                      className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all border ${s3Tab === 'admet' ? 'bg-pink-600 text-white border-pink-600' : 'bg-slate-900 text-slate-400 border-white/5 hover:text-slate-200'}`}
                    >
                      ADMET Profiles
                    </button>
                    <button
                      onClick={() => setS3Tab('results')}
                      className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all border ${s3Tab === 'results' ? 'bg-pink-600 text-white border-pink-600' : 'bg-slate-900 text-slate-400 border-white/5 hover:text-slate-200'}`}
                    >
                      Generated Variants
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-pink-500/10 blur-3xl pointer-events-none"></div>
                <div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#090d16] p-2 hover:border-white/20 transition-all duration-300">
                  <div className="bg-[#0f1422] border-b border-white/5 px-3 py-2 flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">lead_scaffold_generator.png</span>
                  </div>
                  <div className="bg-[#05070c] relative flex items-center justify-center p-2 min-h-[300px]">
                    {s3Tab === 'input' && <img src="/screenshots/lead_optimization_input.png" alt="Evolution Parameters" className="w-full h-auto object-contain max-h-[400px]" />}
                    {s3Tab === 'admet' && <img src="/screenshots/admet_prediction_complete.png" alt="ADMET complete" className="w-full h-auto object-contain max-h-[400px]" />}
                    {s3Tab === 'results' && <img src="/screenshots/lead_optimization_results.png" alt="Generative scaffolds list" className="w-full h-auto object-contain max-h-[400px]" />}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Section 3 - Stage 4: Preformulation & Stability */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#062024] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-20 px-6 max-w-6xl mx-auto relative">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  PREFORMULATION & FORMULATION DESIGN
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight font-sans">
                  Preformulation profiling / Formulation design
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Model compound solubility, excipient compatibility, and crystal polymorph stability. Run thermal stability simulations and track pH profiles in a centralized environment before physical batch mixing.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-cyan-500" />
                    <span>Solubility predictions</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-cyan-500" />
                    <span>pH & temperature stability logs</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-cyan-500" />
                    <span>Excipient compatibilities</span>
                  </div>
                </div>

                {/* Selector */}
                <div className="pt-4 space-y-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-mono">Interactive Panel View</span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setS4Tab('preformulation')}
                      className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all border ${s4Tab === 'preformulation' ? 'bg-cyan-600 text-white border-cyan-600' : 'bg-slate-900 text-slate-400 border-white/5 hover:text-slate-200'}`}
                    >
                      Preformulation Solubility Plots
                    </button>
                    <button
                      onClick={() => setS4Tab('formulation')}
                      className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all border ${s4Tab === 'formulation' ? 'bg-cyan-600 text-white border-cyan-600' : 'bg-slate-900 text-slate-400 border-white/5 hover:text-slate-200'}`}
                    >
                      Recipe Stability
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-cyan-500/10 blur-3xl pointer-events-none"></div>
                <div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#090d16] p-2 hover:border-white/20 transition-all duration-300">
                  <div className="bg-[#0f1422] border-b border-white/5 px-3 py-2 flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">preformulation_metrics.png</span>
                  </div>
                  <div className="bg-[#05070c] relative flex items-center justify-center p-2 min-h-[300px]">
                    {s4Tab === 'preformulation' && <img src="/screenshots/PREFORMULATION.png" alt="Solubility plots" className="w-full h-auto object-contain max-h-[400px]" />}
                    {s4Tab === 'formulation' && <img src="/screenshots/FORMULATION.png" alt="Crystallization models" className="w-full h-auto object-contain max-h-[400px]" />}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Section 3 - Stage 5: Dry-to-Wet Lab Automation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#1b0c30] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-20 px-6 max-w-6xl mx-auto relative">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  WET-LAB AUTOMATION
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  Wet lab with ROBOTIC Automation
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Bridge the physical lab barrier. GenQuantaa auto-generates OT-2 protocol scripts, maps microplate layouts, queues SPR validation workflows, and parses assay outputs directly back into the digital Registry.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-purple-500" />
                    <span>OT-2 Python script compiler</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-purple-500" />
                    <span>96-well dilution plate layouts</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-purple-500" />
                    <span>SPR binding measurements</span>
                  </div>
                </div>

                {/* Selector */}
                <div className="pt-4 space-y-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-mono">Interactive Panel View</span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setS5Tab('input')}
                      className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all border ${s5Tab === 'input' ? 'bg-purple-600 text-white border-purple-600' : 'bg-slate-900 text-slate-400 border-white/5 hover:text-slate-200'}`}
                    >
                      Robotic Parameters
                    </button>
                    <button
                      onClick={() => setS5Tab('code')}
                      className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all border ${s5Tab === 'code' ? 'bg-purple-600 text-white border-purple-600' : 'bg-slate-900 text-slate-400 border-white/5 hover:text-slate-200'}`}
                    >
                      OT-2 Protocol Code
                    </button>
                    <button
                      onClick={() => setS5Tab('validation')}
                      className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all border ${s5Tab === 'validation' ? 'bg-purple-600 text-white border-purple-600' : 'bg-slate-900 text-slate-400 border-white/5 hover:text-slate-200'}`}
                    >
                      SPR Assay Curve
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-purple-500/10 blur-3xl pointer-events-none"></div>
                <div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#090d16] p-2 hover:border-white/20 transition-all duration-300">
                  <div className="bg-[#0f1422] border-b border-white/5 px-3 py-2 flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">robotic_pipetting_routine.png</span>
                  </div>
                  <div className="bg-[#05070c] relative flex items-center justify-center p-2 min-h-[300px]">
                    {s5Tab === 'input' && <img src="/screenshots/robotic_validation_input.png" alt="Robotic layout settings" className="w-full h-auto object-contain max-h-[400px]" />}
                    {s5Tab === 'code' && <img src="/screenshots/robotic_validation_code.png" alt="Opentrons python code" className="w-full h-auto object-contain max-h-[400px]" />}
                    {s5Tab === 'validation' && <img src="/screenshots/validate_wetlab.png" alt="Binding assay data" className="w-full h-auto object-contain max-h-[400px]" />}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Section 4: Security Compliance */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#051c12] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          {/* Security Compliance Section */}
          <section className="py-24 px-6 max-w-6xl mx-auto space-y-12">
            <div className="max-w-3xl space-y-4 text-left">
              <span className="text-[#10b981] font-bold text-sm tracking-wider uppercase font-mono">
                Enterprise data security
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight font-sans">
                Secure and private in your own cloud environment.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                Keep ownership and privacy over your data on Amazon s3 with 99.999999999% (11 9s) of data durability. GenQuantaa helps you save months and become compliant on day one with the latest regulations, standards, and industry frameworks such as SOC-2 Type II and HIPAA. Contact us at <a href="mailto:support@genquantaa.com" className="text-blue-400 font-semibold underline hover:text-blue-300 transition-colors">support@genquantaa.com</a>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto pt-6 text-center">
              <div className="bg-[#111625] p-8 rounded-2xl border border-white/5 flex flex-col items-center gap-4 hover:border-white/10 transition-colors">
                <div className="w-24 h-24 flex items-center justify-center">
                  <img src="https://latch.bio/_next/static/media/hipaa-badge.6deb83e7.svg" alt="HIPAA Compliant" className="w-full h-full object-contain" />
                </div>
                <h4 className="font-extrabold text-white text-lg tracking-wider">HIPAA</h4>
                <p className="text-xs text-slate-400">Compliant Protected Health Information environments.</p>
              </div>

              <div className="bg-[#111625] p-8 rounded-2xl border border-white/5 flex flex-col items-center gap-4 hover:border-white/10 transition-colors">
                <div className="w-24 h-24 flex items-center justify-center">
                  <img src="https://latch.bio/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsoc2-badge.7d475373.png&w=1080&q=75" alt="SOC 2 Type II" className="w-full h-full object-contain" />
                </div>
                <h4 className="font-extrabold text-white text-lg tracking-wider">SOC-II</h4>
                <p className="text-xs text-slate-400">Audited organizational security and operational standards compliance.</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Section 5: Unlimited Storage & Integrations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#051c12] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          {/* Unlimited Storage & Schematic Connection Section */}
          <section className="py-24 px-6 max-w-6xl mx-auto space-y-12">
            <div className="max-w-2xl space-y-3 text-left">
              <span className="text-[#10b981] font-bold text-sm tracking-wider uppercase font-mono">
                Unlimited storage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Store any data, any size, from anywhere.
              </h2>
            </div>

            <div className="bg-[#0d1222] border border-white/5 rounded-2xl p-12 flex flex-col items-center justify-center relative min-h-[300px]">
              <div className="absolute inset-0 z-0 hidden sm:block">
                <svg className="w-full h-full" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                  <path d="M 120 70 L 480 70" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M 300 70 L 300 150" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M 120 70 L 300 70" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                  <path d="M 210 70 L 300 70" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                  <path d="M 390 70 L 300 70" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                  <path d="M 480 70 L 300 70" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                </svg>
              </div>

              <div className="relative z-10 w-full flex flex-col items-center gap-12">
                <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 sm:gap-2 w-full max-w-2xl relative">

                  {/* Node 1: Benchling */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-lg bg-[#111625] border border-white/10 flex items-center justify-center shadow-lg">
                      <Dna className="w-6 h-6 text-slate-300" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 font-mono">benchling</span>
                  </div>

                  {/* Node 2: Illumina */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-lg bg-[#111625] border border-white/10 flex items-center justify-center shadow-lg">
                      <Laptop className="w-6 h-6 text-slate-300" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 font-mono">illumina</span>
                  </div>

                  {/* Center Hub: GenQuantaa emblem */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-600/30 border border-blue-400/20">
                      <svg className="w-9 h-9 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 15 L80 45 L50 75 L20 45 Z" fill="#ffffff" opacity="0.2" />
                        <path d="M50 15 L80 45 L50 75 L20 45" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="50" cy="15" r="8" fill="#ffffff" />
                        <circle cx="80" cy="45" r="8" fill="#ffffff" />
                        <circle cx="50" cy="75" r="8" fill="#ffffff" />
                        <circle cx="20" cy="45" r="8" fill="#ffffff" />
                      </svg>
                    </div>
                    <span className="text-xs font-black tracking-widest uppercase text-white font-mono">GenQuantaa</span>
                  </div>

                  {/* Node 3: Excel */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-lg bg-[#111625] border border-white/10 flex items-center justify-center shadow-lg">
                      <Database className="w-6 h-6 text-slate-300" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 font-mono">excel</span>
                  </div>

                  {/* Node 4: Local computers */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-lg bg-[#111625] border border-white/10 flex items-center justify-center shadow-lg">
                      <Laptop className="w-6 h-6 text-slate-300" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 font-mono">local computers</span>
                  </div>

                </div>

                <div className="flex flex-col items-center gap-1.5 pt-2">
                  <div className="w-10 h-10 rounded-full bg-[#111625] border border-white/10 flex items-center justify-center">
                    <Database className="w-5 h-5 text-slate-400" />
                  </div>
                  <span className="text-[9px] font-bold tracking-widest text-slate-500 font-mono uppercase">AWS / GCP / Azure</span>
                </div>
              </div>
            </div>

            <div className="space-y-8 pt-4">
              <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
                A simple and accessible way to see every piece of data your team generates. Import from Benchling, AWS, DropBox, GCP, or Azure.
              </p>

              <div className="bg-[#090d16] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-[#0f1422] border-b border-white/5 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
                    </div>
                    <div className="flex gap-1 ml-4">
                      <button
                        onClick={() => setStorageTab('formulation')}
                        className={`px-3 py-1 text-[10px] font-bold rounded transition-colors ${storageTab === 'formulation' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-slate-200'}`}
                      >
                        Recipe Formulations
                      </button>
                      <button
                        onClick={() => setStorageTab('preformulation')}
                        className={`px-3 py-1 text-[10px] font-bold rounded transition-colors ${storageTab === 'preformulation' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-slate-200'}`}
                      >
                        Preformulation Charts
                      </button>
                      <button
                        onClick={() => setStorageTab('robotic')}
                        className={`px-3 py-1 text-[10px] font-bold rounded transition-colors ${storageTab === 'robotic' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-slate-200'}`}
                      >
                        OT-2 Robotic Inputs
                      </button>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono hidden sm:inline">biologics_import_registry.png</span>
                </div>

                <div className="bg-[#05070c] relative flex items-center justify-center p-2 min-h-[300px]">
                  {storageTab === 'formulation' && <img src="/screenshots/FORMULATION.png" alt="Recipe formulations" className="w-full h-auto object-contain max-h-[500px]" />}
                  {storageTab === 'preformulation' && <img src="/screenshots/PREFORMULATION.png" alt="Preformulation solubility charts" className="w-full h-auto object-contain max-h-[500px]" />}
                  {storageTab === 'robotic' && <img src="/screenshots/robotic_validation_input.png" alt="OT-2 Robotic layout parameters" className="w-full h-auto object-contain max-h-[500px]" />}
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>

      {/* Enterprise Security Section */}
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
