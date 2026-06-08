import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Check, RefreshCw, Download } from 'lucide-react';

export default function DigitalTwinPage() {
  if (typeof window !== 'undefined') {
    (window as any).DigitalTwinPageLoaded = true;
  }

  const [emailInput, setEmailInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Section 1: Tumor Analysis Interactive State
  const [ctSliceIndex, setCtSliceIndex] = useState(5);
  
  // Section 3: Survival Prediction Interactive State
  const [patientAge, setPatientAge] = useState(65);
  const [tumorStage, setTumorStage] = useState<'I' | 'II' | 'III' | 'IV'>('II');
  const [mutationStatus, setMutationStatus] = useState<'None' | 'EGFR' | 'ALK'>('EGFR');

  // Section 4: Longitudinal Monitoring RECIST State
  const [recistState, setRecistState] = useState<'CR' | 'PR' | 'SD' | 'PD'>('PR');

  // Section 5: Radiogenomics State
  const [selectedMutation, setSelectedMutation] = useState<'EGFR' | 'KRAS' | 'PDL1' | 'ALK'>('EGFR');

  // Section 6: Digital Twin Time Slider
  const [simulationMonth, setSimulationMonth] = useState(0);

  // Section 7: Treatment Response Simulation State
  const [selectedTherapy, setSelectedTherapy] = useState<'Chemo' | 'Targeted' | 'Immuno' | 'Combination'>('Combination');

  // Section 8: Clinical Decision Support State
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const [reportGenerated, setReportGenerated] = useState(false);

  // Section 9: Healthcare & Research Solutions State
  const [selectedPatientId, setSelectedPatientId] = useState('PT-4821');

  const startReportGeneration = () => {
    setIsGeneratingReport(true);
    setReportGenerated(false);
    setTimeout(() => {
      setIsGeneratingReport(false);
      setReportGenerated(true);
    }, 1500);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setEmailInput('');
      setIsSubmitted(false);
    }, 3000);
  };

  // Helper values for Section 3 (Survival Calculation)
  const calculateSurvivalRates = () => {
    let base1 = 0.95;
    let base2 = 0.88;
    let base5 = 0.72;

    if (tumorStage === 'I') {
      base1 = 0.98; base2 = 0.94; base5 = 0.85;
    } else if (tumorStage === 'II') {
      base1 = 0.92; base2 = 0.82; base5 = 0.65;
    } else if (tumorStage === 'III') {
      base1 = 0.81; base2 = 0.66; base5 = 0.38;
    } else {
      base1 = 0.55; base2 = 0.35; base5 = 0.15;
    }

    if (mutationStatus === 'EGFR' && tumorStage !== 'IV') {
      base2 += 0.05; base5 += 0.08;
    } else if (mutationStatus === 'ALK') {
      base2 += 0.07; base5 += 0.10;
    }

    // Clamp values
    const clamp = (val: number) => Math.min(Math.max(Math.round(val * 100), 5), 99);
    return {
      yr1: clamp(base1),
      yr2: clamp(base2),
      yr5: clamp(base5),
      riskClass: tumorStage === 'I' ? 'Low' : tumorStage === 'II' ? 'Intermediate' : 'High'
    };
  };

  const survivalRates = calculateSurvivalRates();

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0f269a] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* HERO SECTION */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white pt-40 pb-20 px-6 max-w-7xl mx-auto text-left relative">
        <div className="absolute top-[10%] right-[5%] w-[450px] h-[450px] rounded-full bg-gradient-to-r from-blue-500/5 to-cyan-500/5 blur-3xl pointer-events-none z-0"></div>
        <div className="max-w-4xl space-y-6 relative z-10">
          <span className="inline-block px-3 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600">
            Clinical AI Platform for Lung Cancer Management
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-normal tracking-tight leading-[1.12] bg-gradient-to-r from-[#0e172c] to-[#0f269a] bg-clip-text text-transparent max-w-3xl font-sans py-2">
            Accelerating Precision Oncology Through AI and Digital Twin Technology
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl max-w-3xl leading-relaxed">
            A comprehensive lung cancer intelligence platform that combines advanced medical imaging analysis, radiomics, radiogenomics, survival prediction, disease progression monitoring, and patient-specific digital twin simulations. Empower clinicians with actionable insights for personalized treatment planning, outcome prediction, and data-driven oncology decision-making.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <form onSubmit={handleContactSubmit} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
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
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-bold text-white bg-[#0f269a] hover:bg-[#0a1a72] transition-colors text-sm shadow-md"
              >
                Request Demo
              </button>
            </form>
            <a
              href="#transform"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-bold text-[#0f269a] bg-[#0f269a]/10 hover:bg-[#0f269a]/20 transition-colors text-sm shadow-md flex items-center justify-center"
            >
              Explore Platform
            </a>
          </div>

          {isSubmitted && (
            <p className="text-xs text-emerald-600 font-semibold animate-pulse pt-2">
              ✓ Request received. We will contact you at this email.
            </p>
          )}

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 border-t border-slate-100 mt-16 text-left">
            <div>
              <div className="text-4xl font-extrabold text-[#0f269a] tracking-tight">100+</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1.5">Radiomic Biomarkers Extracted</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[#0f269a] tracking-tight">4</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1.5">Therapy Simulation Models</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[#0f269a] tracking-tight">5-Year</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1.5">Survival Prediction Capability</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[#0f269a] tracking-tight">1 Platform</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1.5">Unified Precision Oncology Solution</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* BELOW HERO SECTION */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="transform" className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#0e172c] to-[#0f269a] bg-clip-text text-transparent leading-tight">
              Transforming Lung Cancer Care Through Artificial Intelligence
            </h2>
            <div className="h-1 w-20 bg-[#0f269a]/80 rounded"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-600 text-sm md:text-base leading-relaxed pt-4">
              <p>
                Lung cancer remains one of the most challenging diseases in modern healthcare, requiring accurate diagnosis, continuous monitoring, personalized treatment planning, and timely intervention. Traditional approaches often rely on isolated clinical observations, imaging assessments, and invasive procedures.
              </p>
              <p>
                Our Lung Cancer Digital Twin Platform bridges this gap by combining artificial intelligence, advanced medical imaging analytics, radiomics, radiogenomics, and computational oncology into a single integrated ecosystem. The platform enables clinicians to move beyond static reports and gain dynamic insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 1: AI-Powered Tumor Analysis */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#062024] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-20 px-6 max-w-6xl mx-auto relative">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Text Area */}
              <div className="w-full lg:w-1/2 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  AI-Powered Tumor Analysis
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  Comprehensive Tumor Intelligence from Medical Imaging
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  The platform automatically analyzes lung CT scans and transforms imaging data into clinically meaningful information. Through advanced AI-driven workflows, healthcare providers can obtain detailed tumor assessments with greater speed, consistency, and accuracy.
                </p>

                <div className="space-y-4 pt-2">
                  <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">Key Capabilities</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-500 shrink-0" />
                      <span>Lung CT Scan Processing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-500 shrink-0" />
                      <span>Tumor Detection & Segmentation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-500 shrink-0" />
                      <span>3D Tumor Reconstruction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-500 shrink-0" />
                      <span>Tumor Quantification</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-mono mb-2">Quantification Parameters</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Volume', 'Max Diameter', 'Surface Area', 'Tumor Location', 'Anatomical Positioning'].map((param) => (
                      <span key={param} className="px-2.5 py-1 bg-white/5 border border-white/5 rounded text-xs text-slate-300 font-mono">
                        {param}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive Widget - CT Scan Slice Simulator */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-cyan-500/10 blur-3xl pointer-events-none"></div>
                <div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#090d16] p-2 hover:border-white/20 transition-all duration-300">
                  {/* Top bar */}
                  <div className="bg-[#0f1422] border-b border-white/5 px-3 py-2 flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">DICOM_slice_viewer.png</span>
                  </div>

                  {/* CT View simulator */}
                  <div className="bg-black relative flex flex-col items-center justify-between p-6 min-h-[340px]">
                    
                    {/* Simulated CT Scan Slice Drawing */}
                    <div className="relative w-44 h-44 border border-white/10 rounded-full flex items-center justify-center overflow-hidden bg-[#0a0a0c]">
                      {/* Grid overlay */}
                      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:10px_10px]"></div>
                      
                      {/* Chest outline */}
                      <svg className="w-full h-full p-2" viewBox="0 0 200 200">
                        {/* Lungs */}
                        <path d="M 40,80 Q 20,40 50,40 Q 90,40 85,90 Q 80,140 50,150 Q 30,130 40,80 Z" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                        <path d="M 160,80 Q 180,40 150,40 Q 110,40 115,90 Q 120,140 150,150 Q 170,130 160,80 Z" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                        
                        {/* Spine */}
                        <circle cx="100" cy="165" r="10" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        
                        {/* Interactive Nodule (shifts with depth slice) */}
                        <circle 
                          cx={55 + (ctSliceIndex * 2.5)} 
                          cy={70 + (ctSliceIndex * 3)} 
                          r={6 + (Math.sin(ctSliceIndex * 0.5) * 4)} 
                          fill="rgba(34, 211, 238, 0.45)" 
                          stroke="#22d3ee" 
                          strokeWidth="1.5"
                          className="animate-pulse"
                        />
                      </svg>

                      {/* Coordinates */}
                      <div className="absolute top-2 left-2 text-[9px] font-mono text-slate-500">
                        Z-Loc: {ctSliceIndex * 12}mm
                      </div>
                      <div className="absolute bottom-2 right-2 text-[9px] font-mono text-cyan-400">
                        Tumor Detected
                      </div>
                    </div>

                    {/* Controls & Metrics */}
                    <div className="w-full space-y-4 mt-4 font-mono text-left text-xs text-slate-300">
                      <div className="space-y-1">
                        <div className="flex justify-between text-2xs text-slate-400">
                          <span>CT Scan Depth Slice:</span>
                          <span className="text-cyan-400 font-bold">Slice {ctSliceIndex}/10</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={ctSliceIndex}
                          onChange={(e) => setCtSliceIndex(parseInt(e.target.value))}
                          className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 border-t border-white/5 pt-3 text-[10px]">
                        <div className="flex justify-between">
                          <span className="text-slate-500">Volume:</span>
                          <span className="text-white font-bold">{(ctSliceIndex * 0.72 + 1.2).toFixed(2)} cm³</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Diameter:</span>
                          <span className="text-white">{(ctSliceIndex * 2.2 + 8.5).toFixed(1)} mm</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Surface Area:</span>
                          <span className="text-white font-bold">{(ctSliceIndex * 4.8 + 22.4).toFixed(1)} mm²</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Anatomy:</span>
                          <span className="text-white">R. Upper Lobe</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 2: Advanced Radiomics and Imaging Biomarkers */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#081b35] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-20 px-6 max-w-6xl mx-auto relative">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              {/* Text Area */}
              <div className="w-full lg:w-1/2 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  Advanced Radiomics
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  Unlock Hidden Insights from Medical Images
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Medical images contain far more information than what can be observed visually. Our radiomics engine extracts hundreds of quantitative biomarkers that reveal critical characteristics about tumor behavior, aggressiveness, and biological complexity.
                </p>

                <div className="space-y-3 pt-2">
                  <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">Radiomics Analysis Includes</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
                    <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                      <span className="font-bold text-blue-400 block mb-1">Shape Analysis</span>
                      <span>Evaluate tumor geometry and structural complexity.</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                      <span className="font-bold text-blue-400 block mb-1">Texture Analysis</span>
                      <span>Measure heterogeneity patterns that may indicate aggressive disease.</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                      <span className="font-bold text-blue-400 block mb-1">Statistical Features</span>
                      <span>Extract first-order and higher-order imaging biomarkers.</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                      <span className="font-bold text-blue-400 block mb-1">Multi-Scale Features</span>
                      <span>Capture imaging patterns across different spatial resolutions.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Widget - Radiomics Browser */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-blue-500/10 blur-3xl pointer-events-none"></div>
                <div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#090d16] p-2 hover:border-white/20 transition-all duration-300">
                  <div className="bg-[#0f1422] border-b border-white/5 px-3 py-2 flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">radiomics_biomarkers.png</span>
                  </div>

                  <div className="bg-[#05070c] p-6 min-h-[340px] flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center border-b border-white/5 pb-3">
                        <h4 className="font-bold text-xs text-white uppercase tracking-wider font-mono">
                          Radiomics Feature Registry
                        </h4>
                        <span className="text-[10px] bg-blue-500/15 border border-blue-500/20 text-blue-400 font-mono font-bold px-2 py-0.5 rounded">
                          114 features
                        </span>
                      </div>

                      <div className="space-y-2 max-h-52 overflow-y-auto pr-1 scrollbar-thin">
                        {[
                          { category: 'First-order', name: 'Energy (Total Intensity)', val: '1.42e+06', desc: 'Measures total voxel intensity strength.' },
                          { category: 'Shape-based', name: 'Sphericity Ratio', val: '0.842', desc: 'Indicates how closely the tumor resembles a sphere.' },
                          { category: 'GLCM (Texture)', name: 'Contrast / Heterogeneity', val: '4.891', desc: 'Reflects local variation in pixel contrasts.' },
                          { category: 'GLRLM (Texture)', name: 'Run Length Non-Uniformity', val: '124.8', desc: 'Measures uniformity of voxel run patterns.' },
                          { category: 'NGTDM (Texture)', name: 'Complexity Attribute', val: '0.512', desc: 'Details rapid changes in structural values.' },
                        ].map((feat, idx) => (
                          <div key={idx} className="bg-white/5 border border-white/5 rounded p-2.5 text-left text-2xs font-mono group/row hover:border-blue-500/30 transition-colors">
                            <div className="flex justify-between items-start mb-1">
                              <span className="text-blue-400 font-bold">{feat.name}</span>
                              <span className="text-slate-200 font-bold">{feat.val}</span>
                            </div>
                            <p className="text-slate-500 text-[9px] font-sans">{feat.desc}</p>
                            <span className="text-[8px] bg-slate-800 text-slate-400 px-1 py-0.5 rounded inline-block mt-1.5 uppercase font-bold tracking-wider">{feat.category}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-white/5 pt-3 mt-4 text-[10px] text-slate-500 font-mono text-left leading-relaxed">
                      Radiomics datasets enable prognostic classification algorithms to map predictive outcomes automatically.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 3: Survival Prediction and Risk Stratification */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#200a18] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-20 px-6 max-w-6xl mx-auto relative">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Text Area */}
              <div className="w-full lg:w-1/2 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  Survival Prediction
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  Predict Patient Outcomes with AI
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Understanding patient prognosis is critical for selecting appropriate treatment strategies and managing long-term care. Our AI-powered survival prediction engine combines imaging biomarkers and clinical information to estimate patient outcomes and identify high-risk cases.
                </p>

                <div className="space-y-3 pt-2">
                  <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">Survival Estimation Bounds</span>
                  <div className="grid grid-cols-3 gap-2 font-mono text-center">
                    <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                      <span className="block text-slate-500 text-[10px]">1-YEAR</span>
                      <span className="text-white font-bold text-base">{survivalRates.yr1}%</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                      <span className="block text-slate-500 text-[10px]">2-YEAR</span>
                      <span className="text-white font-bold text-base">{survivalRates.yr2}%</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                      <span className="block text-slate-500 text-[10px]">5-YEAR</span>
                      <span className="text-emerald-400 font-bold text-base">{survivalRates.yr5}%</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 block font-mono">PATIENT RISK CATEGORY:</span>
                    <span className={`text-sm font-bold font-mono tracking-wider ${survivalRates.riskClass === 'Low' ? 'text-emerald-400' : survivalRates.riskClass === 'Intermediate' ? 'text-yellow-400' : 'text-red-400 animate-pulse'}`}>
                      {survivalRates.riskClass.toUpperCase()} RISK
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive Widget - Prognostic Survival curve */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-pink-500/10 blur-3xl pointer-events-none"></div>
                <div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#090d16] p-2 hover:border-white/20 transition-all duration-300">
                  <div className="bg-[#0f1422] border-b border-white/5 px-3 py-2 flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">survival_cox_model.png</span>
                  </div>

                  <div className="bg-black p-5 min-h-[340px] flex flex-col justify-between text-left">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="font-bold text-white uppercase tracking-wider">Patient Parameters</span>
                        <span className="text-pink-400">Cox Proportional Hazard</span>
                      </div>

                      {/* Parameter selections */}
                      <div className="grid grid-cols-3 gap-3 text-2xs font-mono">
                        <div className="space-y-1">
                          <label className="text-slate-500">AGE: {patientAge}</label>
                          <input 
                            type="range" min="40" max="90" value={patientAge} 
                            onChange={(e) => setPatientAge(parseInt(e.target.value))}
                            className="w-full accent-pink-500" 
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-slate-500">TUMOR STAGE:</label>
                          <select 
                            value={tumorStage} 
                            onChange={(e: any) => setTumorStage(e.target.value)}
                            className="w-full bg-[#111625] border border-white/10 rounded text-slate-200 px-1 py-0.5 focus:outline-none"
                          >
                            <option value="I">Stage I</option>
                            <option value="II">Stage II</option>
                            <option value="III">Stage III</option>
                            <option value="IV">Stage IV</option>
                          </select>
                        </div>
                        <div className="space-y-1">
                          <label className="text-slate-500">GENOMICS:</label>
                          <select 
                            value={mutationStatus} 
                            onChange={(e: any) => setMutationStatus(e.target.value)}
                            className="w-full bg-[#111625] border border-white/10 rounded text-slate-200 px-1 py-0.5 focus:outline-none"
                          >
                            <option value="None">Wild Type</option>
                            <option value="EGFR">EGFR Mutation</option>
                            <option value="ALK">ALK Fusion</option>
                          </select>
                        </div>
                      </div>

                      {/* SVG Kaplan-Meier Curve */}
                      <div className="w-full h-36 bg-[#0a0a0c] border border-white/5 rounded p-3 relative">
                        <div className="absolute top-1 left-2 text-[8px] font-mono text-slate-600">KM Survival Probability %</div>
                        <svg className="w-full h-full" viewBox="0 0 200 100" fill="none">
                          {/* Grid line */}
                          <line x1="20" y1="90" x2="190" y2="90" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                          <line x1="20" y1="10" x2="20" y2="90" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                          
                          {/* Kaplan-Meier Line (drawn dynamically based on stage) */}
                          <path 
                            d={
                              tumorStage === 'I' ? "M 20,15 L 60,20 L 100,28 L 140,32 L 190,40" :
                              tumorStage === 'II' ? "M 20,15 L 60,30 L 100,45 L 140,55 L 190,65" :
                              tumorStage === 'III' ? "M 20,15 L 60,45 L 100,68 L 140,76 L 190,82" :
                              "M 20,15 L 60,65 L 100,82 L 140,88 L 190,92"
                            } 
                            stroke="#ec4899" 
                            strokeWidth="2" 
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-all duration-500"
                          />

                          {/* Time Labels */}
                          <text x="20" y="98" fill="#475569" fontSize="6" fontFamily="monospace">0m</text>
                          <text x="60" y="98" fill="#475569" fontSize="6" fontFamily="monospace">12m</text>
                          <text x="100" y="98" fill="#475569" fontSize="6" fontFamily="monospace">24m</text>
                          <text x="140" y="98" fill="#475569" fontSize="6" fontFamily="monospace">36m</text>
                          <text x="180" y="98" fill="#475569" fontSize="6" fontFamily="monospace">60m</text>
                        </svg>
                      </div>
                    </div>
                    
                    <div className="text-[9px] font-mono text-slate-500 flex justify-between items-center border-t border-white/5 pt-3">
                      <span>CONFIDENCE MARGIN: 95% CI</span>
                      <span>COHORT COMPARE: VALIDATED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 4: Longitudinal Disease Monitoring */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#062024] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-20 px-6 max-w-6xl mx-auto relative">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              {/* Text Area */}
              <div className="w-full lg:w-1/2 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  Longitudinal Monitoring
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  Track Disease Progression Over Time
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Cancer management requires continuous monitoring throughout the patient journey. The platform enables clinicians to evaluate tumor evolution across multiple imaging studies and treatment cycles.
                </p>

                <div className="space-y-3 pt-2">
                  <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">Monitoring Capabilities</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-500" />
                      <span>Tumor Progression Tracking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-500" />
                      <span>Volume Doubling Time Analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-500" />
                      <span>Growth Trend Analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-500" />
                      <span>RECIST Response Evaluation</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5">
                  <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-mono mb-2">RECIST 1.1 Criteria</span>
                  <div className="flex gap-2">
                    {[
                      { key: 'CR' as const, label: 'Complete Response (CR)' },
                      { key: 'PR' as const, label: 'Partial Response (PR)' },
                      { key: 'SD' as const, label: 'Stable Disease (SD)' },
                      { key: 'PD' as const, label: 'Progressive Disease (PD)' }
                    ].map((btn) => (
                      <button
                        key={btn.key}
                        onClick={() => setRecistState(btn.key)}
                        className={`px-2 py-1.5 rounded text-[10px] font-bold font-mono border transition-colors ${recistState === btn.key ? 'bg-cyan-600 border-cyan-600 text-white' : 'bg-slate-900 border-white/5 text-slate-400 hover:text-slate-200'}`}
                      >
                        {btn.key}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive Widget - RECIST Monitoring Panel */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-cyan-500/10 blur-3xl pointer-events-none"></div>
                <div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#090d16] p-2 hover:border-white/20 transition-all duration-300">
                  <div className="bg-[#0f1422] border-b border-white/5 px-3 py-2 flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">longitudinal_monitoring.png</span>
                  </div>

                  <div className="bg-black p-5 min-h-[340px] flex flex-col justify-between text-left">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="font-bold text-white uppercase tracking-wider">RECIST Response Detail</span>
                        <span className="text-cyan-400 font-bold">
                          {recistState === 'CR' ? 'Full Clearance' : recistState === 'PR' ? '-38% Volume Change' : recistState === 'SD' ? 'No Growth (<20%)' : '+45% Progression'}
                        </span>
                      </div>

                      {/* SVG RECIST timeline chart */}
                      <div className="w-full h-36 bg-[#0a0a0c] border border-white/5 rounded p-3 relative">
                        <svg className="w-full h-full" viewBox="0 0 200 100" fill="none">
                          <line x1="20" y1="50" x2="190" y2="50" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                          
                          {/* RECIST line paths */}
                          <path 
                            d={
                              recistState === 'CR' ? "M 20,40 L 70,50 L 120,70 L 170,95" :
                              recistState === 'PR' ? "M 20,40 L 70,45 L 120,58 L 170,68" :
                              recistState === 'SD' ? "M 20,40 L 70,41 L 120,39 L 170,42" :
                              "M 20,40 L 70,30 L 120,20 L 170,10"
                            } 
                            stroke="#22d3ee" 
                            strokeWidth="2" 
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-all duration-500"
                          />

                          {/* Data points */}
                          <circle cx="20" cy="40" r="3" fill="#22d3ee" />
                          <circle cx="70" cy={recistState === 'CR' ? 50 : recistState === 'PR' ? 45 : recistState === 'SD' ? 41 : 30} r="3" fill="#22d3ee" />
                          <circle cx="120" cy={recistState === 'CR' ? 70 : recistState === 'PR' ? 58 : recistState === 'SD' ? 39 : 20} r="3" fill="#22d3ee" />
                          <circle cx="170" cy={recistState === 'CR' ? 95 : recistState === 'PR' ? 68 : recistState === 'SD' ? 42 : 10} r="3" fill="#22d3ee" />

                          {/* Timeline markers */}
                          <text x="15" y="98" fill="#475569" fontSize="6" fontFamily="monospace">Cycle 1</text>
                          <text x="65" y="98" fill="#475569" fontSize="6" fontFamily="monospace">Cycle 2</text>
                          <text x="115" y="98" fill="#475569" fontSize="6" fontFamily="monospace">Cycle 3</text>
                          <text x="165" y="98" fill="#475569" fontSize="6" fontFamily="monospace">Cycle 4</text>
                        </svg>
                      </div>

                      {/* Simulation info */}
                      <div className="grid grid-cols-2 gap-4 font-mono text-[10px] text-slate-300">
                        <div className="bg-white/5 p-2.5 rounded border border-white/5">
                          <span className="text-slate-500 block">Growth Trend:</span>
                          <span className="text-white font-bold">{recistState === 'PD' ? 'Rapid Progression' : recistState === 'CR' ? 'Total Response' : 'Stable'}</span>
                        </div>
                        <div className="bg-white/5 p-2.5 rounded border border-white/5">
                          <span className="text-slate-500 block">Doubling Time (VDT):</span>
                          <span className="text-white font-bold">{recistState === 'PD' ? '42 Days (Fast)' : recistState === 'SD' ? '418 Days (Slow)' : 'N/A'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-[9px] font-mono text-slate-500 border-t border-white/5 pt-3 mt-2 flex justify-between">
                      <span>RECIST 1.1 CLASSIFIER: ACTIVE</span>
                      <span>RECURRENCE RISK: {recistState === 'PD' ? 'HIGH' : 'LOW'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 5: Radiogenomics and Precision Oncology */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#1b0c30] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-20 px-6 max-w-6xl mx-auto relative">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Text Area */}
              <div className="w-full lg:w-1/2 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  Radiogenomics
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  Connecting Medical Imaging and Tumor Biology
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Radiogenomics bridges the gap between imaging and molecular biology by using AI to predict genomic characteristics directly from CT scans and radiomic biomarkers.
                </p>

                <div className="space-y-3 pt-2">
                  <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">Biomarker Mutation Predictor</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { key: 'EGFR' as const, name: 'EGFR mutation', accuracy: '89.2%' },
                      { key: 'KRAS' as const, name: 'KRAS mutation', accuracy: '81.4%' },
                      { key: 'PDL1' as const, name: 'PD-L1 Expression', accuracy: '84.8%' },
                      { key: 'ALK' as const, name: 'ALK Fusion', accuracy: '86.1%' }
                    ].map((mut) => (
                      <button
                        key={mut.key}
                        onClick={() => setSelectedMutation(mut.key)}
                        className={`p-3 rounded-lg border text-left flex flex-col justify-between font-mono ${selectedMutation === mut.key ? 'bg-purple-600/10 border-purple-500/40 text-white shadow-lg' : 'bg-slate-900 border-white/5 text-slate-400 hover:text-slate-200'}`}
                      >
                        <span className="text-2xs font-bold">{mut.name}</span>
                        <span className="text-[10px] text-purple-400 font-semibold mt-2">{mut.accuracy} Acc.</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-mono mb-2">Precision Oncology Benefits</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-500" />
                      <span>Reduced dependency on biopsies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-500" />
                      <span>Actionable molecular insights</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Widget - Radiogenomics Mutation matcher */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-purple-500/10 blur-3xl pointer-events-none"></div>
                <div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#090d16] p-2 hover:border-white/20 transition-all duration-300">
                  <div className="bg-[#0f1422] border-b border-white/5 px-3 py-2 flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">mutation_therapy_matcher.png</span>
                  </div>

                  <div className="bg-black p-5 min-h-[340px] flex flex-col justify-between text-left font-mono">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-white uppercase tracking-wider">Radiomic Genotype Profile</span>
                        <span className="text-purple-400">Radiogenomics V2.1</span>
                      </div>

                      <div className="bg-white/5 border border-white/5 rounded p-4 space-y-3">
                        <div className="flex justify-between items-center border-b border-white/5 pb-2">
                          <span className="text-slate-500 text-xs">Genomic Predictor:</span>
                          <span className="text-white font-bold">{selectedMutation === 'EGFR' ? 'EGFR (L858R / Ex19Del)' : selectedMutation === 'KRAS' ? 'KRAS G12C mutation' : selectedMutation === 'PDL1' ? 'PD-L1 High expression' : 'EML4-ALK Fusion'}</span>
                        </div>

                        <div className="text-xs space-y-1">
                          <span className="text-slate-500 block text-2xs uppercase tracking-widest">Targeted Drug Match:</span>
                          <span className="text-purple-400 font-bold block text-sm">
                            {selectedMutation === 'EGFR' ? 'Osimertinib (Tagrisso)' : selectedMutation === 'KRAS' ? 'Sotorasib (Lumakras)' : selectedMutation === 'PDL1' ? 'Pembrolizumab (Keytruda)' : 'Alectinib (Alecensa)'}
                          </span>
                          <p className="text-slate-400 font-sans text-2xs leading-relaxed pt-1.5">
                            {selectedMutation === 'EGFR' ? 'Third-generation EGFR tyrosine kinase inhibitor specifically designed to target sensitizing and T790M resistance mutations.' : 
                             selectedMutation === 'KRAS' ? 'Small molecule inhibitor that covalently and irreversibly binds to the cysteine residue in KRAS G12C, locking it in an inactive state.' : 
                             selectedMutation === 'PDL1' ? 'Programmed death receptor-1 (PD-1) blocking antibody designed to augment T-cell response to tumor cells.' : 
                             'Highly selective tyrosine kinase inhibitor targeting ALK and RET, demonstrating excellent intracranial efficacy.'}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="text-[9px] text-slate-500 border-t border-white/5 pt-3 mt-4 flex justify-between">
                      <span>PREDICTIVE CONFIDENCE: HIGH</span>
                      <span>VALIDATION COHORT: NSCLC</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 6: Digital Twin Technology */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#051c12] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-20 px-6 max-w-6xl mx-auto relative">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              {/* Text Area */}
              <div className="w-full lg:w-1/2 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  Digital Twin Technology
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  Creating Virtual Models of Individual Tumors
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  At the core of the platform is Digital Twin technology, which creates a computational representation of each patient's tumor. A Digital Twin acts as a virtual model that continuously reflects patient-specific tumor characteristics and can be used to simulate disease behavior under different conditions.
                </p>

                <div className="space-y-3 pt-2">
                  <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">Twin Capabilities</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Patient-Specific Digital Twin Creation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Tumor Growth Simulation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Disease Behavior Modeling</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Personalized Cancer Modeling</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Widget - Digital Twin time simulator */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-emerald-500/10 blur-3xl pointer-events-none"></div>
                <div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#090d16] p-2 hover:border-white/20 transition-all duration-300">
                  <div className="bg-[#0f1422] border-b border-white/5 px-3 py-2 flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">tumor_growth_forecast.png</span>
                  </div>

                  <div className="bg-black p-5 min-h-[340px] flex flex-col justify-between text-left font-mono">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-white uppercase tracking-wider">Dynamic Growth Projection</span>
                        <span className="text-emerald-400 font-bold">Month +{simulationMonth}</span>
                      </div>

                      {/* Virtual Lung Outline + Tumor projection bubble */}
                      <div className="w-full h-36 bg-[#0a0a0c] border border-white/5 rounded flex items-center justify-center relative overflow-hidden">
                        <svg className="w-full h-full p-2" viewBox="0 0 200 100">
                          {/* Lungs schematic */}
                          <path d="M 50,45 Q 35,20 60,20 Q 80,20 75,55 Q 70,85 50,90 Z" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                          <path d="M 150,45 Q 165,20 140,20 Q 120,20 125,55 Q 130,85 150,90 Z" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                          
                          {/* Virtual tumor growing dynamically based on slider */}
                          <circle 
                            cx="145" 
                            cy="45" 
                            r={4 + (simulationMonth * 1.5)} 
                            fill="rgba(16, 185, 129, 0.4)" 
                            stroke="#10b981" 
                            strokeWidth="1.5" 
                          />
                        </svg>

                        <div className="absolute top-2 right-2 text-2xs text-slate-500">
                          Projected Diameter: {(8 + simulationMonth * 3.2).toFixed(1)} mm
                        </div>
                      </div>

                      {/* Slider control */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-2xs text-slate-400">
                          <span>Forecast Timeline:</span>
                          <span className="text-emerald-400 font-bold">{simulationMonth === 0 ? 'Baseline (Month 0)' : `${simulationMonth} Months Forward`}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="12"
                          value={simulationMonth}
                          onChange={(e) => setSimulationMonth(parseInt(e.target.value))}
                          className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                        />
                      </div>
                    </div>

                    <div className="text-[9px] text-slate-500 border-t border-white/5 pt-3 mt-2 flex justify-between">
                      <span>COMPUTATIONAL TWIN ID: GQ-NSCLC-018</span>
                      <span>PREDICTIVE ACCURACY: 91.2%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 7: Treatment Response Simulation */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#062024] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-20 px-6 max-w-6xl mx-auto relative">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Text Area */}
              <div className="w-full lg:w-1/2 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  Treatment Simulation
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  Evaluate Therapies Before Clinical Intervention
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  The platform allows clinicians to simulate and compare treatment strategies using patient-specific digital twins. What-if scenarios predict outcomes, tumor volume curves, and regression timescales.
                </p>

                <div className="space-y-3 pt-2">
                  <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">Simulation Models Available</span>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    {[
                      { key: 'Chemo' as const, label: 'Chemotherapy Simulation' },
                      { key: 'Targeted' as const, label: 'Targeted Therapy' },
                      { key: 'Immuno' as const, label: 'Immunotherapy Model' },
                      { key: 'Combination' as const, label: 'Combination Therapy' }
                    ].map((model) => (
                      <button
                        key={model.key}
                        onClick={() => setSelectedTherapy(model.key)}
                        className={`p-3 rounded-lg border text-left ${selectedTherapy === model.key ? 'bg-cyan-600/10 border-cyan-500/40 text-white shadow-lg' : 'bg-slate-900 border-white/5 text-slate-400 hover:text-slate-200'}`}
                      >
                        {model.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-mono mb-2">Simulated Outcomes Generated</span>
                  <div className="flex flex-wrap gap-1.5 text-xs text-slate-300 font-mono">
                    {['Tumor Growth Curves', 'Tumor Reduction Forecasts', 'Treatment Response Trajectories', 'Comparative Therapy Analysis', 'Time-to-Response Estimates'].map((item) => (
                      <span key={item} className="px-2 py-1 bg-white/5 border border-white/5 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive Widget - Treatment curve graph */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-cyan-500/10 blur-3xl pointer-events-none"></div>
                <div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#090d16] p-2 hover:border-white/20 transition-all duration-300">
                  <div className="bg-[#0f1422] border-b border-white/5 px-3 py-2 flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">therapeutic_outcomes.png</span>
                  </div>

                  <div className="bg-black p-5 min-h-[340px] flex flex-col justify-between text-left font-mono">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-white uppercase tracking-wider">Tumor Reduction Forecast</span>
                        <span className="text-cyan-400 font-bold">{selectedTherapy === 'Combination' ? 'Max Response' : 'Partial Response'}</span>
                      </div>

                      {/* SVG Line Graph */}
                      <div className="w-full h-40 bg-[#0a0a0c] border border-white/5 rounded p-3 relative">
                        <svg className="w-full h-full" viewBox="0 0 200 100" fill="none">
                          {/* Grid line */}
                          <line x1="20" y1="90" x2="190" y2="90" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                          <line x1="20" y1="10" x2="20" y2="90" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                          
                          {/* Baseline growth curve (grey) */}
                          <path d="M 20,40 L 60,35 L 100,28 L 140,20 L 190,12" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
                          <text x="135" y="15" fill="#475569" fontSize="5">No Treatment</text>

                          {/* Interactive therapy response line */}
                          <path 
                            d={
                              selectedTherapy === 'Chemo' ? "M 20,40 L 60,45 L 100,50 L 140,48 L 190,44" :
                              selectedTherapy === 'Targeted' ? "M 20,40 L 60,48 L 100,58 L 140,65 L 190,70" :
                              selectedTherapy === 'Immuno' ? "M 20,40 L 60,42 L 100,48 L 140,55 L 190,62" :
                              "M 20,40 L 60,52 L 100,68 L 140,81 L 190,88" // Combination (fastest reduction)
                            } 
                            stroke="#22d3ee" 
                            strokeWidth="2" 
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-all duration-500"
                          />

                          {/* Axes */}
                          <text x="20" y="98" fill="#475569" fontSize="6">0d</text>
                          <text x="75" y="98" fill="#475569" fontSize="6">30d</text>
                          <text x="130" y="98" fill="#475569" fontSize="6">60d</text>
                          <text x="180" y="98" fill="#475569" fontSize="6">90d</text>
                        </svg>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-2 text-2xs text-slate-300">
                        <div className="bg-white/5 p-2 rounded">
                          <span className="text-slate-500 block">Reduction:</span>
                          <span className="text-emerald-400 font-bold">{selectedTherapy === 'Combination' ? '82%' : selectedTherapy === 'Targeted' ? '65%' : '40%'}</span>
                        </div>
                        <div className="bg-white/5 p-2 rounded">
                          <span className="text-slate-500 block">Time-to-Resp:</span>
                          <span className="text-white">{selectedTherapy === 'Combination' ? '18 Days' : '34 Days'}</span>
                        </div>
                        <div className="bg-white/5 p-2 rounded">
                          <span className="text-slate-500 block">Response Class:</span>
                          <span className="text-white">{selectedTherapy === 'Combination' ? 'Complete' : 'Partial'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 8: Clinical Decision Support */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#200a18] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-20 px-6 max-w-6xl mx-auto relative">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              
              {/* Text Area */}
              <div className="w-full lg:w-1/2 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  Clinical Decision Support
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  Empowering Precision Oncology Workflows
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  The platform consolidates imaging intelligence, biomarker analysis, prognostic insights, and simulation outputs into a unified clinical decision-support environment.
                </p>

                <div className="space-y-4 pt-2">
                  <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">Decision Support Capabilities</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-pink-500 shrink-0" />
                      <span>Personalized Treatment Planning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-pink-500 shrink-0" />
                      <span>Therapy Selection Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-pink-500 shrink-0" />
                      <span>Outcome Forecasting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-pink-500 shrink-0" />
                      <span>Multidisciplinary Collaboration</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-mono mb-2">Clinical Benefits</span>
                  <div className="flex flex-wrap gap-1.5 text-xs text-slate-300 font-mono">
                    {['Better-informed decisions', 'Improved patient outcomes', 'Enhanced collaboration', 'Precision medicine enablement'].map((b) => (
                      <span key={b} className="px-2 py-1 bg-white/5 border border-white/5 rounded">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive Widget - Clinical Dossier generator */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-pink-500/10 blur-3xl pointer-events-none"></div>
                <div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#090d16] p-2 hover:border-white/20 transition-all duration-300">
                  <div className="bg-[#0f1422] border-b border-white/5 px-3 py-2 flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">clinical_board_support.png</span>
                  </div>

                  <div className="bg-black p-5 min-h-[340px] flex flex-col justify-between text-left font-mono">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-white uppercase tracking-wider">Oncology Board Dossier</span>
                        <span className="text-pink-400">Validated</span>
                      </div>

                      {/* Twin Summary Card */}
                      <div className="bg-white/5 border border-white/5 rounded p-3 text-2xs space-y-2">
                        <div className="flex justify-between border-b border-white/5 pb-1.5">
                          <span className="text-slate-500">Patient ID:</span>
                          <span className="text-white font-bold">GQ-NSCLC-018</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-1.5">
                          <span className="text-slate-500">Radiomic Volume:</span>
                          <span className="text-white">{(ctSliceIndex * 0.72 + 1.2).toFixed(2)} cm³</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-1.5">
                          <span className="text-slate-500">Genomics (Cox):</span>
                          <span className="text-purple-400 font-bold">{selectedMutation} mutant</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-1.5">
                          <span className="text-slate-500">5-Yr Survival:</span>
                          <span className="text-emerald-400 font-bold">{survivalRates.yr5}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Suggested Action:</span>
                          <span className="text-white font-bold">{selectedTherapy === 'Combination' ? 'Comb. Targeted/Immuno' : 'Standard regimen'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-white/5 pt-3 mt-4 flex items-center justify-end">
                      {reportGenerated ? (
                        <div className="flex items-center gap-2 text-2xs text-emerald-400">
                          <Check className="w-4 h-4" />
                          <span>Dossier Compiled successfully!</span>
                        </div>
                      ) : (
                        <button
                          onClick={startReportGeneration}
                          disabled={isGeneratingReport}
                          className="px-4 py-2 bg-pink-600 hover:bg-pink-700 disabled:bg-pink-600/40 active:scale-98 transition-all rounded text-2xs text-white uppercase tracking-wider flex items-center gap-1.5 font-bold"
                        >
                          {isGeneratingReport ? (
                            <>
                              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                              <span>Compiling Dossier...</span>
                            </>
                          ) : (
                            <>
                              <Download className="w-3.5 h-3.5" />
                              <span>Compile Patient Dossier</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 9: Healthcare and Research Solutions */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#081b35] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-20 px-6 max-w-6xl mx-auto relative">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              
              {/* Text Area */}
              <div className="w-full lg:w-1/2 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  Healthcare and Research Solutions
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  Built for Clinical and Research Excellence
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  The platform supports hospitals, cancer centers, research institutions, and healthcare organizations seeking advanced computational oncology capabilities.
                </p>

                <div className="space-y-4 pt-2">
                  <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">PACS & DICOM Integrations</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>DICOM Studies Retrieve & Auto-Q/C</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>Patient Registry Database Vault</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-mono mb-2">Research Core Topics Supported</span>
                  <div className="flex flex-wrap gap-1.5 text-xs text-slate-300 font-mono">
                    {['Radiomics Extraction', 'Radiogenomics Mapping', 'Survival Prediction', 'Digital Twin Modeling'].map((item) => (
                      <span key={item} className="px-2 py-1 bg-white/5 border border-white/5 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive Widget - Patient Registry DICOM list */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-blue-500/10 blur-3xl pointer-events-none"></div>
                <div className="border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#090d16] p-2 hover:border-white/20 transition-all duration-300">
                  <div className="bg-[#0f1422] border-b border-white/5 px-3 py-2 flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block"></span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">pacs_registry_node.png</span>
                  </div>

                  <div className="bg-black p-5 min-h-[340px] flex flex-col justify-between text-left font-mono">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-white uppercase tracking-wider">DICOM Patient Registry</span>
                        <span className="text-blue-400 font-bold">Node: Active</span>
                      </div>

                      {/* Mini Patients Table */}
                      <div className="bg-white/5 border border-white/5 rounded overflow-hidden text-[10px]">
                        <table className="w-full text-left">
                          <thead>
                            <tr className="bg-slate-900 border-b border-white/10 text-slate-500">
                              <th className="p-2">Patient ID</th>
                              <th className="p-2">Genomics</th>
                              <th className="p-2 text-right">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 text-slate-300">
                            {[
                              { id: 'PT-4821', mut: 'EGFR mutant', status: 'Synchronized' },
                              { id: 'PT-8910', mut: 'ALK fusion', status: 'Synchronized' },
                              { id: 'PT-2211', mut: 'Wild Type', status: 'Pending Scan' }
                            ].map((pat) => (
                              <tr 
                                key={pat.id} 
                                onClick={() => setSelectedPatientId(pat.id)}
                                className={`cursor-pointer hover:bg-white/5 transition-colors ${selectedPatientId === pat.id ? 'bg-blue-600/10 text-white font-bold' : ''}`}
                              >
                                <td className="p-2">{pat.id}</td>
                                <td className="p-2">{pat.mut}</td>
                                <td className="p-2 text-right text-blue-400">{pat.status}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* DICOM PACS Details */}
                      <div className="bg-white/5 p-3 rounded border border-white/5 text-2xs space-y-1.5 text-slate-300">
                        <span className="text-slate-500 text-[8px] uppercase tracking-wider block">PACS Sync Parameters ({selectedPatientId})</span>
                        <div className="flex justify-between">
                          <span>AE Title:</span>
                          <span className="text-white">GENQ_PACS_NODE</span>
                        </div>
                        <div className="flex justify-between">
                          <span>PACS Host:</span>
                          <span className="text-white">{selectedPatientId === 'PT-4821' ? '10.140.2.1' : selectedPatientId === 'PT-8910' ? '10.140.2.2' : '10.140.2.3'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Series / Dose:</span>
                          <span className="text-white">{selectedPatientId === 'PT-4821' ? '14 / 7.2 mSv' : selectedPatientId === 'PT-8910' ? '28 / 12.4 mSv' : '8 / 4.1 mSv'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-[9px] text-slate-500 border-t border-white/5 pt-3 mt-2 flex justify-between">
                      <span>C-GET/C-STORE: VERIFIED</span>
                      <span>PORT: 104 (DICOM)</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* FINAL CTA SECTION */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center border-t border-slate-100">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0f269a] mb-3">Ready to Transform Lung Cancer Care?</h2>
        <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto leading-relaxed">
          Empower your organization with AI-powered tumor intelligence, predictive analytics, digital twin simulations, and precision oncology decision support.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm text-[#0f269a] font-semibold font-mono">
          <span className="flex items-center gap-1"><Check className="w-4 h-4" /> AI-Powered Tumor Diagnostics</span>
          <span className="flex items-center gap-1"><Check className="w-4 h-4" /> Dynamic Patient Digital Twins</span>
          <span className="flex items-center gap-1"><Check className="w-4 h-4" /> Radiogenomics Biomarker Scans</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your work email..."
            className="w-full px-5 py-3.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#0f269a] text-sm"
          />
          <button 
            onClick={() => alert('Thank you! Our precision oncology team will contact you shortly.')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-bold text-white bg-[#0f269a] hover:bg-[#0a1a72] transition-colors text-sm shadow-md whitespace-nowrap"
          >
            Schedule a Demo
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
