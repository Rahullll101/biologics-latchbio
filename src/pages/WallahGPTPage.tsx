import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FeatureDetailModal } from '../components/FeatureDetailModal';

import { 
  Hourglass, BarChart as ChartIcon, Brain, Shield, Lock, 
  Database, Zap, ChevronRight,
  MousePointer2, ArrowRight, Cpu, Activity, Layers, FileText, Sparkles, Target, Microscope, ShieldCheck, RefreshCw, Network
} from 'lucide-react';

import { motion } from 'framer-motion';
import { FadeInWhenVisible } from '../components/FadeInWhenVisible';
import { SnakePipeline, workflowData } from '../components/WorkflowPipeline';
import { ThreeStepProcess } from '../components/ThreeStepProcess';
import { DnaHelixIcon } from '../components/ScientificIcons';

export const WallahGPTPage = () => {
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
            { label: "15-Gene Signatures", icon: DnaHelixIcon, description: "Key genes linked to cellular senescence." },
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
                { label: "15-Gene Signature", icon: DnaHelixIcon },
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
            <span>In-Silico Simulation Lab</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-normal tracking-tight leading-[1.12] bg-gradient-to-r from-[#0e172c] to-[#0f269a] bg-clip-text text-transparent max-w-3xl font-sans py-2">
            GQ GPT Solutions
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Accelerate discovery through mechanistic simulation. <br />
            Run complex experiments on screen — instantly and securely.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <a
              href="mailto:support@Genquantaa.com"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-bold text-white bg-[#0f269a] hover:bg-[#0a1a72] transition-all text-sm shadow-md text-center flex items-center justify-center gap-2"
            >
              <span>Request Demo</span>
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

      {/* Methodology Section - The 3 Step Process requested by USER */}
      <section className="py-24 bg-white border-t border-blue-600/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Operational Methodology</h2>
            <p className="text-slate-500 max-w-2xl mx-auto mb-12">
              Explore the digital laboratory. Select a module to see how GQ GPT simulates biological reality with high-fidelity AI models.
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
              context="compute"
              variant="loop"
              input={features.filter(f => f.processData)[activeMethodologyIndex].processData!.input}
              processing={features.filter(f => f.processData)[activeMethodologyIndex].processData!.processing}
              output={features.filter(f => f.processData)[activeMethodologyIndex].processData!.output}
            />
          </motion.div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-4xl font-bold mb-4 text-slate-900">Core Modules</h2>
             <p className="text-slate-500">Mechanistic biological simulation from aging clocks to high-throughput discovery.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 perspective-1000 relative z-10">
            {features.map((feature, i) => (
              <FadeInWhenVisible key={i}>
                <motion.div 
                  whileHover={{ 
                    y: -15,
                    rotateX: 2,
                    boxShadow: "0 25px 50px rgba(11, 95, 255, 0.15), 0 0 30px rgba(11, 95, 255, 0.25)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => handleOpenModal(feature)}
                  className="p-12 rounded-[40px] flex flex-col h-full bg-white text-center items-center group cursor-pointer border border-slate-100 shadow-sm"
                >
                  <div className="w-20 h-20 rounded-3xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform">
                    <feature.icon size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">{feature.title}</h3>
                  <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-6">{feature.subtitle}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow break-words font-light">
                    {feature.description}
                  </p>

                  <div className="flex items-center gap-2 text-blue-600 font-bold border-t border-slate-50 pt-8 w-full justify-center mt-auto">
                    Know More <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section (Light Theme Refined) */}
      <section className="py-24 px-6 bg-white border-y border-blue-600/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-50 p-16 rounded-[48px] border border-blue-600/10 text-center shadow-sm relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-blue-600 rounded-t-full" />
            <Lock className="w-16 h-16 text-blue-600 mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Security & Data Sovereignty</h2>
            <p className="text-slate-500 max-w-2xl mx-auto mb-12 text-lg font-light">
              WallahGPT is designed for secure, on-premises deployment. Proprietary compound structures 
              and patient data never leave your organization's firewall.
            </p>
            <div className="flex flex-wrap justify-center gap-12 text-slate-700">
               <div className="flex flex-col items-center">
                  <Shield className="text-blue-600 mb-2 w-8 h-8" />
                  <span className="text-sm font-bold uppercase tracking-widest">HIPAA Compliant</span>
               </div>
               <div className="flex flex-col items-center">
                  <Shield className="text-blue-600 mb-2 w-8 h-8" />
                  <span className="text-sm font-bold uppercase tracking-widest">GDPR Ready</span>
               </div>
               <div className="flex flex-col items-center">
                  <Database className="text-blue-600 mb-2 w-8 h-8" />
                  <span className="text-sm font-bold uppercase tracking-widest">On-Premises Option</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Research Workflow (Interactive Snake Pipeline) */}
      <section className="py-24 px-6 bg-slate-50/50 border-y border-blue-600/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Integrated Research Workflow</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              From biological insight to digital screening — accelerating discovery through mechanistic simulation.
            </p>
          </div>
          
          <SnakePipeline workflow={workflowData.find(w => w.id === 'wallah')!} />
          
          <div className="mt-20 bg-white p-12 rounded-[40px] border border-blue-600/10 shadow-sm">
              <h4 className="font-bold mb-8 flex items-center gap-2 text-blue-600 text-sm uppercase tracking-widest">
                <Zap size={20} className="text-blue-600" /> The Business Impact
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {[
                   { label: "Time to Results", value: "Seconds vs Months" },
                   { label: "Regulatory Friction", value: "Zero (Synthetic Data)" },
                   { label: "Infrastructure Cost", value: "Minimal Footprint" }
                 ].map((stat, i) => (
                   <div key={i} className="flex justify-between items-center border-b border-slate-100 pb-4">
                     <span className="text-slate-500 font-medium">{stat.label}</span>
                     <span className="font-bold text-slate-900">{stat.value}</span>
                   </div>
                 ))}
              </div>
          </div>
        </div>
      </section>

      {/* Strategic Advantage Section */}
      <section className="py-24 px-6 bg-white border-t border-blue-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold leading-tight text-slate-900">The Strategic Advantage: <br /><span className="text-blue-600">Why WallahGPT?</span></h2>
              <p className="text-lg text-slate-500 leading-relaxed font-light">
                In a world of strict data regulations and high-stakes biological IP, **security is the first requirement**. WallahGPT is the only platform that combines high-fidelity simulation with absolute data sovereignty.
              </p>
              
              <div className="space-y-6">
                {[
                  { 
                    q: "Whom does it help?", 
                    a: "Data Scientists, Precision Medicine researchers, and organizations operating in jurisdictions with strict privacy mandates (HIPAA/GDPR) who need to scale their models without identifying patient data." 
                  },
                  { 
                    q: "Why should a client buy it?", 
                    a: "Because it removes the 'Data Bottleneck'. WallahGPT generates millions of synthetic data points that are statistically perfect, allowing for massive-scale training on-premises without regulatory friction." 
                  },
                  { 
                    q: "The Business Perspective", 
                    a: "It reduces the cost and risk of data acquisition. By simulating the 'Digital Discovery' lab, organizations can fail fast and pivot early, saving millions in physical assay costs and avoiding data breach liabilities." 
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-blue-600/5">
                    <h4 className="font-bold text-blue-600 mb-3 flex items-center gap-2">
                      <Shield size={20} /> {item.q}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-slate-900 p-12 rounded-[48px] shadow-lg text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
                <h3 className="text-2xl font-bold mb-8 relative z-10">Data Sovereignty ROI</h3>
                <div className="space-y-10 relative z-10">
                   <div className="flex items-center gap-6">
                      <div className="text-4xl font-black text-blue-600">0%</div>
                      <div className="text-sm font-medium text-slate-300">External Data Leakage Risk <br />(On-Premises Native)</div>
                   </div>
                   <div className="flex items-center gap-6">
                      <div className="text-4xl font-black text-blue-600">Zero</div>
                      <div className="text-sm font-medium text-slate-300">Regulatory Friction <br />(Synthetic Data-Powered)</div>
                   </div>
                   <div className="pt-8 border-t border-slate-800">
                       <a href="mailto:support@Genquantaa.com" className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all inline-block text-center text-sm">Secure Enterprise Access</a>
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

export default WallahGPTPage;
