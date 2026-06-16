import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FeatureDetailModal } from '../components/FeatureDetailModal';

import { 
  Search, Zap, FlaskConical, ShieldCheck, 
  Bot, Shield, CheckCircle, ChevronRight,
  MousePointer2, ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FadeInWhenVisible } from '../components/FadeInWhenVisible';
import { SnakePipeline, workflowData } from '../components/WorkflowPipeline';
import { ThreeStepProcess } from '../components/ThreeStepProcess';
import { DnaHelixIcon } from '../components/ScientificIcons';

// Public workflow images direct paths
const targetIdImg = '/workflow_images/Target Identification.png';
const virtualHitImg = '/workflow_images/Virtual Hit Screening.png';
const molecularDockingImg = '/workflow_images/Molecular Docking.png';
const leadOptImg = '/workflow_images/Lead Optimization.png';
const admetImg = '/workflow_images/ADMET Intel.png';
const wetLabImg = '/workflow_images/wet-lab.png';

export const BiologicsDiscoveryPage = () => {
  const [selectedFeature, setSelectedFeature] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeMethodologyIndex, setActiveMethodologyIndex] = useState(0);

  const features = [
    {
      id: 'target-id',
      title: 'Target Identification',
      subtitle: 'Neural-Bio Interface',
      icon: DnaHelixIcon,
      image: targetIdImg,
      description: 'Mapping gene symbols to UniProt dossiers with AlphaFold fallback logic.',
      fullExplanation: [
        "The Target Identification module uses a specialized Neural-Bio Interface to resolve genomic symbols into detailed biochemical dossiers. By integrating UniProtKB and RCSB PDB databases, the system builds a comprehensive map of the biological target.",
        "In cases where experimental 3D structures are missing, the platform automatically triggers an AlphaFold-powered fallback mechanism to predict high-accuracy protein folding. The algorithm then utilizes geometric deep learning to identify potential binding pockets and calculate quantitative druggability scores based on steric and electrostatic complementarity."
      ],
      capabilities: [
        "UniProtKB & PDB Integration",
        "AlphaFold Protein Folding",
        "Geometric Pocket Discovery",
        "Druggability Probability Scoring",
        "Functional Domain Mapping"
      ],
      processData: {
        input: {
          title: "Data Acquisition",
          items: [
            { label: "UniProt API Ingestion", icon: Search, description: "Automated retrieval of target sequences and biological context." },
            { label: "PDB Coordinate Fetch", icon: FlaskConical, description: "Retrieval of experimental structures where available." }
          ]
        },
        processing: {
          title: "Neural-Bio Interface",
          groups: [
            {
              title: "Structure Generation",
              items: [
                { label: "AlphaFold Fallback Prediction", icon: Bot },
                { label: "Geometry Deep Learning Pocket Detection", icon: ShieldCheck }
              ]
            }
          ]
        },
        output: {
          title: "Biochemical Dossier",
          items: [
            { label: "Steric & Electrostatic Maps", icon: Search, description: "Mapping binding cavity features." },
            { label: "Druggability Scores", icon: ShieldCheck, description: "Calculated binding pocket probabilities." }
          ]
        }
      }
    },
    {
      id: 'hit-screening',
      title: 'Virtual Hit Screening',
      subtitle: 'XGBoost Triage',
      icon: Search,
      image: virtualHitImg,
      description: '2,400D mathematical fingerprinting for high-accuracy binding prediction.',
      fullExplanation: [
        "Our Virtual Hit Screening engine performs compound triage at astronomical scales. By representing molecules using 2,400-dimensional mathematical fingerprints, the system captures subtle chemical nuances that traditional methods miss.",
        "The core logic is powered by XGBoost models trained on a proprietary dataset of over 100 million assay results. This allows the system to predict binding affinities with sub-nanomolar accuracy, significantly reducing the pool of candidates for physical screening."
      ],
      capabilities: [
        "2,400D Vector Fingerprinting",
        "XGBoost Affinity Prediction",
        "Real-time Streaming Triage",
        "Fragment-based Library Search",
        "Scaffold Diversity Enforcement"
      ],
      processData: {
        input: {
          title: "Library Ingestion",
          items: [
            { label: "SMILES/SDF Parsing", icon: Search, description: "Ingesting multi-million compound libraries in real time." }
          ]
        },
        processing: {
          title: "XGBoost Triage",
          groups: [
            {
              title: "Triage Engine",
              items: [
                { label: "2,400D Fingerprint Vectorization", icon: Bot },
                { label: "Affinity Score Calculation", icon: ShieldCheck }
              ]
            }
          ]
        },
        output: {
          title: "Candidate List",
          items: [
            { label: "Top Scoring Matches", icon: Zap, description: "Molecules satisfying target affinity criteria." }
          ]
        }
      }
    },
    {
      id: 'docking',
      title: 'Molecular Docking',
      subtitle: 'Physics-Based Simulation',
      icon: FlaskConical,
      image: molecularDockingImg,
      description: 'Thermodynamic binding simulation using AutoDock Vina & Monte Carlo search.',
      fullExplanation: [
        "The Molecular Docking engine simulates the physical reality of ligand-receptor interactions. Utilizing the AutoDock Vina engine, the system performs a Monte Carlo search across the target's conformational space to identify the most stable binding poses.",
        "Each pose is evaluated using a physics-based scoring function that calculates Delta-G free energy, accounting for hydrogen bonding, van der Waals forces, and electrostatic interactions. The results are visualized in a high-performance GL-rendered 3D viewport."
      ],
      capabilities: [
        "AutoDock Vina Engine",
        "Monte Carlo Conformational Search",
        "Free Energy (Delta-G) Calculation",
        "3D Binding Visualization",
        "Binding Affinity Ranking"
      ],
      processData: {
        input: {
          title: "Structural Prep",
          items: [
            { label: "PDBQT Ingestion", icon: Search, description: "Preparing ligand and receptor structure parameters." }
          ]
        },
        processing: {
          title: "Physics Simulation",
          groups: [
            {
              title: "Docking Logic",
              items: [
                { label: "Monte Carlo Grid Search", icon: Bot },
                { label: "Scoring Function Pose Ranking", icon: ShieldCheck }
              ]
            }
          ]
        },
        output: {
          title: "Docking Report",
          items: [
            { label: "Delta-G Binding Pose Matrix", icon: FlaskConical, description: "Thermodynamic scoring and pose coordinates." }
          ]
        }
      }
    },
    {
      id: 'lead-opt',
      title: 'Lead Optimization',
      subtitle: 'Generative Evolutionary AI',
      icon: Zap,
      image: leadOptImg,
      description: 'AI-driven molecular evolution with strict Synthetic Accessibility (SA) enforcement.',
      fullExplanation: [
        "Lead Optimization transforms hits into clinical candidates through a generative evolutionary process. Our Genetic Algorithm mutates molecules through crossover and point-mutations to optimize for multiple parameters simultaneously.",
        "Crucially, the system strictly enforces Synthetic Accessibility (SA) scores at every generation. This ensures that the AI-designed molecules aren't just theoretically effective, but can be reliably synthesized in a standard wet-lab environment."
      ],
      capabilities: [
        "Genetic Algorithm Evolution",
        "Multi-Parameter Optimization (MPO)",
        "SA Score Enforcement",
        "SAR Trend Tracking",
        "Bioisosteric Replacements"
      ],
      processData: {
        input: {
          title: "Lead Candidate",
          items: [
            { label: "Core Scaffold Structure", icon: Search, description: "Hit compound chosen for optimization." }
          ]
        },
        processing: {
          title: "Generative Evolution",
          groups: [
            {
              title: "Genetic Evolution",
              items: [
                { label: "Bioisosteric Crossover & Mutation", icon: Bot },
                { label: "Multi-Parameter Fitness Evaluation", icon: ShieldCheck }
              ]
            }
          ]
        },
        output: {
          title: "Optimized Leads",
          items: [
            { label: "Optimized Scaffold Profiles", icon: Zap, description: "Molecules with high potency and optimized pharmacokinetics." }
          ]
        }
      }
    },
    {
      id: 'admet',
      title: 'ADMET Intelligence',
      subtitle: 'GNN Property Prediction',
      icon: ShieldCheck,
      image: admetImg,
      description: 'Automated pharmacology & toxicity profiling via Graph Neural Networks.',
      fullExplanation: [
        "The ADMET module provides early-phase safety profiling using state-of-the-art Graph Neural Networks (GNNs). By treating molecules as dynamic graphs, the system identifies structural motifs responsible for toxicity or poor bioavailability.",
        "The models predict critical metrics such as Blood-Brain Barrier (BBB) penetration, hERG channel inhibition (cardiotoxicity), and CYP450 metabolic profiles. This 'Safety-First' approach ensures that developers identify potential failures before they reach expensive clinical trials."
      ],
      capabilities: [
        "GNN Toxicity Detection",
        "BBB Penetration Prediction",
        "hERG Inhibition Risk",
        "CYP450 Metabolism Profiling",
        "Pharmacokinetic Radar Maps"
      ],
      processData: {
        input: {
          title: "Molecular Graphs",
          items: [
            { label: "Atomic Connectivity Matrix", icon: Search, description: "Chemical structures mapped as numerical node graphs." }
          ]
        },
        processing: {
          title: "Safety Profiling",
          groups: [
            {
              title: "ADMET Prediction",
              items: [
                { label: "Graph Convolutional Network Evaluation", icon: Bot },
                { label: "Toxicity Hotspot Isolation", icon: ShieldCheck }
              ]
            }
          ]
        },
        output: {
          title: "Safety Passport",
          items: [
            { label: "GNN Clearance Radar", icon: ShieldCheck, description: "ADMET scores, hERG hazard alerts, and BBB profiles." }
          ]
        }
      }
    },
    {
      id: 'robotic',
      title: 'Wet-Lab Validation',
      subtitle: 'Native Integration',
      icon: Bot,
      image: wetLabImg,
      description: 'Direct bridge from in-silico prediction to automated wet-lab validation.',
      fullExplanation: [
        "Wet-Lab Validation closes the loop between the digital and physical laboratories. The system natively integrates with automated liquid handlers by automatically generating executable Python protocols based on the platform's predictions.",
        "This seamless transition eliminates human transcription errors and enables high-throughput blinded assays for hit confirmation. The platform tracks the results of these experiments, feeding the physical data back into the AI models for continuous learning."
      ],
      capabilities: [
        "Automated Liquid Handling",
        "Protocol Generation",
        "High-Throughput Assays",
        "Physical-Digital Feedback",
        "Assay Result Tracking"
      ],
      processData: {
        input: {
          title: "Digital Protocols",
          items: [
            { label: "Assay Sequence Parameters", icon: Search, description: "Hit lists and dilution matrices generated by evolution." }
          ]
        },
        processing: {
          title: "Wet-Lab Sync",
          groups: [
            {
              title: "Automation Execution",
              items: [
                { label: "OT-2 Python Protocol Generator", icon: Bot },
                { label: "SPR Assay Result Ingestion", icon: ShieldCheck }
              ]
            }
          ]
        },
        output: {
          title: "Wet-lab Validation",
          items: [
            { label: "Confirmed Binding Affinity Results", icon: Bot, description: "Assay metrics feeding back to improve GNN accuracy." }
          ]
        }
      }
    }
  ];

  const handleOpenModal = (feature: any) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

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
            <MousePointer2 size={12} className="text-blue-600 animate-pulse" />
            <span>Interactive Platform Demo</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-normal tracking-tight leading-[1.12] bg-gradient-to-r from-[#0e172c] to-[#0f269a] bg-clip-text text-transparent max-w-3xl font-sans py-2">
            GQ Discovery 2.0
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl leading-relaxed">
            The enterprise operating system for drug discovery. <br />
            Bridging the gap from genomic hypothesis to validated lab protocols.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <a
              href="mailto:support@genquantaa.com"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl text-sm font-semibold text-white bg-[#0f269a] hover:bg-[#0a1a72] transition-all shadow-md text-center flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Request Demo</span>
              <ArrowRight size={16} />
            </a>
            <Link
              to="/solutions"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl text-sm font-semibold text-[#0f269a] border border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm text-center cursor-pointer whitespace-nowrap"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Methodology Section - The 3 Step Process requested by USER */}
      <section className="py-24 bg-white border-t border-blue-600/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Operational Methodology</h2>
            <p className="text-slate-500 max-w-2xl mx-auto mb-12">
              Deep dive into the scientific pipelines powering GenQuantaa. Select a module to explore its specific input-to-output architecture.
            </p>

            {/* Feature Selector for Methodology */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {features.filter(f => f.processData).map((feature, idx) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveMethodologyIndex(idx)}
                  className={`px-6 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 border ${
                    activeMethodologyIndex === idx 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105' 
                    : 'bg-white text-slate-500 border-blue-600/10 hover:border-blue-600/30'
                  }`}
                >
                  <feature.icon size={20} />
                  {feature.title}
                </button>
              ))}
            </div>
          </div>
          
          <motion.div
            key={activeMethodologyIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ThreeStepProcess 
              title={features.filter(f => f.processData)[activeMethodologyIndex].title + " Pipeline"}
              subtitle={features.filter(f => f.processData)[activeMethodologyIndex].subtitle}
              context="biology"
              variant="loop"
              input={features.filter(f => f.processData)[activeMethodologyIndex].processData!.input}
              processing={features.filter(f => f.processData)[activeMethodologyIndex].processData!.processing}
              output={features.filter(f => f.processData)[activeMethodologyIndex].processData!.output}
              image={(features.filter(f => f.processData)[activeMethodologyIndex] as any).image}
            />
          </motion.div>
        </div>
      </section>

      {/* Detailed Features Grid */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Core Capability Modules</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Click on any module to explore its scientific methodology, technical documentation, and demo videos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {features.map((feature, i) => (
              <FadeInWhenVisible key={i}>
                <motion.div 
                  whileHover={{ 
                    y: -12,
                    rotateX: 2,
                    boxShadow: "0 20px 40px rgba(11, 95, 255, 0.12), 0 0 20px rgba(11, 95, 255, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => handleOpenModal(feature)}
                  className="p-10 rounded-[40px] flex flex-col h-full bg-white group cursor-pointer border border-slate-100 shadow-sm"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">{feature.title}</h3>
                  <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-6">{feature.subtitle}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow break-words">
                    {feature.description}
                  </p>

                  <div className="flex items-center gap-2 text-blue-600 font-bold border-t border-slate-50 pt-6 w-full mt-auto">
                    Know More <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Visualization (Interactive Snake Pipeline) */}
      <section className="py-24 bg-[#070b13] text-white relative overflow-hidden border-y border-blue-600/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Operational Pipeline</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From target identification to clinical candidate selection — an unbroken digital chain.
            </p>
          </div>
          
          <SnakePipeline workflow={workflowData.find(w => w.id === 'biologics')!} />
        </div>
      </section>

      {/* Strategic Value */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-white border border-blue-600/10 rounded-[40px] p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 leading-tight text-slate-900">Strategic Business <br /> Outcomes</h2>
              <div className="space-y-8">
                {[
                  { title: "Timeline Compression", value: "85%", desc: "Reduction in target-to-hit discovery cycles via AI parallelization." },
                  { title: "Cost Efficiency", value: "100X", desc: "Reduction in marginal screening costs compared to physical HTS." },
                  { title: "Risk Mitigation", value: "60%", desc: "Improvement in clinical candidate quality via early ADMET profiling." }
                ].map((stat, i) => (
                  <div key={i} className="flex items-start gap-6">
                    <div className="text-4xl font-black text-blue-600 leading-none min-w-[100px]">{stat.value}</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{stat.title}</h4>
                      <p className="text-slate-500 text-sm">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-full flex items-center">
              <div className="bg-slate-50 p-10 rounded-[40px] border border-blue-600/10 w-full">
                <h4 className="text-blue-600 font-bold mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
                  <Shield size={20} /> Regulatory Compliance
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Our discovery workflows are designed to meet global pharmaceutical standards, ensuring data integrity and traceable computational logic throughout the target identification and validation phases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Mandate Section */}
      <section className="py-24 px-6 bg-slate-50/50 border-t border-blue-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold leading-tight text-slate-900">The Strategic Mandate: <br /><span className="text-blue-600">Why GenQuantaa?</span></h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Modern drug discovery is no longer limited by scientific hypothesis, but by operational velocity. GenQuantaa is designed as an enterprise infrastructure to solve the three core challenges of modern pharma.
              </p>
              
              <div className="space-y-6">
                {[
                  { 
                    q: "Whom does it help?", 
                    a: "Project Leads, CTOs, and R&D Directors who need to transition from fragmented ad-hoc tools to a unified, scalable 'Drug Operating System'." 
                  },
                  { 
                    q: "Why should a client buy it?", 
                    a: "To eliminate the data silos between Target ID and Validation. GQ Discovery provides an unbroken digital chain that compresses discovery timelines by 85%." 
                  },
                  { 
                    q: "The Business Perspective", 
                    a: "It turns R&D from a high-risk cost center into a predictable, AI-driven discovery engine with a 60% improvement in clinical candidate quality." 
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-blue-600/5">
                    <h4 className="font-bold text-blue-600 mb-2 flex items-center gap-2">
                      <CheckCircle size={18} /> {item.q}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-12 rounded-[48px] shadow-sm border border-blue-600/10">
                <h3 className="text-2xl font-bold mb-6 text-slate-900">The ROI of Digitalization</h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-sm text-slate-800">Pipeline Velocity</span>
                      <span className="text-blue-600 font-bold">8.5x* Faster</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-blue-600" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-sm text-slate-800">Marginal Screening Cost</span>
                      <span className="text-blue-600 font-bold">100x* Lower</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="w-[99%] h-full bg-blue-600" />
                    </div>
                  </div>
                  <div className="p-6 bg-blue-600/5 rounded-2xl border border-blue-600/10 mt-8">
                     <p className="text-sm text-slate-500">
                       The GQ Discovery 2.0 framework provides an enterprise-ready infrastructure for modern biologics discovery, optimizing the digital chain from target ID to robotic validation.
                     </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureDetailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        feature={selectedFeature} 
      />

      <Footer />
    </div>
  );
};
export default BiologicsDiscoveryPage;
