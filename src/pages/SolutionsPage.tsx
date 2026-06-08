import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  ArrowRight,
  Layers,
  FileCode,
  CheckCircle,
  Boxes,
  Database,
  Key,
  ShieldCheck,
  BarChart,
  FileCheck,
  Cloud,
  Lock,
  ChevronDown,
  ChevronUp,
  Workflow,
  Sparkles,
  Server
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface SecurityFeature {
  title: string;
  content: string;
  icon: any;
}

export default function SolutionsPage() {
  const [searchInput, setSearchInput] = useState('');
  const [openSecurityIndex, setOpenSecurityIndex] = useState<number | null>(0);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [demoEmail, setDemoEmail] = useState('');

  const securityFeatures: SecurityFeature[] = [
    {
      title: 'Single-Sign On (SSO)',
      content: 'Control user access and make it easy for your team to use GenQuantaa. Integrates with Okta, Azure AD, and Ping Identity.',
      icon: Key
    },
    {
      title: 'Custom Governance Controls',
      content: 'Implement fine-grained access controls, project-level workspaces, and define user permissions with precision.',
      icon: ShieldCheck
    },
    {
      title: 'Analytics and Reporting',
      content: 'Gain deep insights into platform usage, computational resource allocation, and team activity with audit logs.',
      icon: BarChart
    },
    {
      title: 'HIPAA & GxP Compliant',
      content: 'Built from the ground up to meet the most stringent enterprise compliance standards including 21 CFR Part 11.',
      icon: FileCheck
    },
    {
      title: 'Secure Cloud & VPC',
      content: 'Deploy in our isolated VPC or entirely within your own cloud infrastructure (AWS, GCP, or Azure).',
      icon: Cloud
    },
    {
      title: 'Encrypted Data Assets',
      content: 'All data is encrypted in transit and at rest using industry-standard AES-256 and custom key management.',
      icon: Lock
    }
  ];

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoEmail) return;
    setDemoSubmitted(true);
    setTimeout(() => {
      setDemoEmail('');
      setDemoSubmitted(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-blue-500/10 overflow-x-hidden">
      <Navbar />

      {/* Hero Section (Light Theme) */}
      <section className="pt-40 pb-16 px-6 max-w-7xl mx-auto text-center relative overflow-hidden">
        {/* Soft light blue radial glow effects */}
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none"></div>
        <div className="absolute top-[20%] right-[5%] w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="inline-block px-3 py-1 rounded bg-slate-200/60 border border-slate-300/40 text-xs font-semibold text-[#0f269a] tracking-wider font-mono">
            ENTERPRISE PORTALS
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-normal tracking-tight leading-[1.12] bg-gradient-to-r from-[#0e172c] to-[#0f269a] bg-clip-text text-transparent py-2">
            The AI Agent for Biology Data Analysis
          </h1>
          
          <p className="text-slate-500 text-lg font-light max-w-2xl mx-auto">
            Interact directly with biological datasets using agentic AI. Extract insights, run alignments, and validate models instantly.
          </p>

          {/* Search Bar Container */}
          <div className="max-w-2xl mx-auto relative pt-4">
            <div className="relative rounded-full border border-slate-200 bg-white p-1.5 focus-within:border-blue-500/40 focus-within:ring-2 focus-within:ring-blue-500/10 transition-all duration-300 shadow-sm">
              <input 
                type="text" 
                placeholder="Identify cell types in mouse ovary data from Takara Seeker 3x3."
                className="w-full bg-transparent pl-12 pr-16 py-3 text-sm focus:outline-none placeholder:text-slate-400 text-slate-700"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <Plus className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-500 active:scale-95 transition-all">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono mt-3 px-4">
              <span>Supports FASTQ, CSV, Excel, H5AD, TIFF</span>
              <span>Powered by Claude 4.5 Opus</span>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-28 space-y-12 max-w-5xl mx-auto relative z-10 border-t border-slate-200/60 pt-16">
          <div className="text-center space-y-4">
            <h4 className="text-[10px] font-extrabold tracking-[0.2em] text-[#0f269a] uppercase font-mono">
              SUPPORTED SEGMENTS
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xl sm:text-2xl font-bold tracking-tight">
              <span className="text-[#0f269a]">Artificial Intelligence</span>
              <span className="text-slate-300 font-light">/</span>
              <span className="text-slate-800">Life Sciences</span>
              <span className="text-slate-300 font-light">/</span>
              <span className="text-[#0f269a]">Scientific Informatics</span>
            </div>
          </div>

          {/* Our Clients Highlight Section */}
          <div className="text-center space-y-2.5 pt-4">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold text-blue-600 uppercase tracking-widest font-mono">
              OUR CLIENTS & PARTNERS
            </span>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Trusted by Leading Organizations
            </h3>
            <p className="text-slate-500 text-xs max-w-md mx-auto font-light">
              Collaborating with global technology leaders, CROs, and digital healthcare networks.
            </p>
          </div>

          {/* Partners Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-center max-w-4xl mx-auto pt-2 opacity-80 hover:opacity-100 transition-opacity">
            <div className="flex items-center justify-center shrink-0">
              <span className="text-base font-bold tracking-tight text-slate-800 font-sans">Microsoft</span>
            </div>
            <div className="flex items-center justify-center shrink-0">
              <span className="text-[11px] font-bold tracking-[0.16em] text-slate-700 font-sans uppercase">Critical River</span>
            </div>
            <div className="flex items-center justify-center shrink-0">
              <span className="text-xs font-semibold text-slate-600 font-sans">American IT Solutions</span>
            </div>
            <div className="flex items-center justify-center shrink-0">
              <span className="text-xs font-extrabold tracking-[0.1em] text-slate-800 font-sans uppercase">GenQuantis</span>
            </div>
            <div className="flex items-center justify-center shrink-0">
              <span className="text-xs font-serif text-slate-700 tracking-wide">Cura Quantis</span>
            </div>
            <div className="flex items-center justify-center shrink-0">
              <span className="text-xs font-bold tracking-tight text-slate-800 font-mono uppercase">GenQuantis <span className="text-blue-600 font-sans font-light">Robotics</span></span>
            </div>
            <div className="flex items-center justify-center shrink-0">
              <span className="text-xs font-black tracking-tight text-slate-700 font-sans">Simple<span className="text-slate-500 font-light">POS</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Dark Gradient Container: Solution Providers vs R&D Teams (Product Page Style) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 relative z-10">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] py-20 px-6 sm:px-12 relative">
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
            {/* Left Column: Solution Providers */}
            <div className="space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <span className="text-[10px] font-bold font-mono text-blue-400 uppercase tracking-widest block">
                  GENQUANTAA FOR
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-white">
                  Solution & Assay Providers
                </h2>
                
                {/* Product Card Visual */}
                <div className="bg-white/5 border border-white/5 rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden group hover:border-blue-500/20 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-[10px] text-blue-400 font-semibold uppercase tracking-wider mb-6 font-mono">
                    Kit Analysis Portal Mockup
                  </div>
                  <div className="border border-white/5 rounded-2xl p-6 bg-slate-950/40 backdrop-blur-sm">
                    <div className="bg-slate-900 border border-white/5 rounded-xl p-6 text-center max-w-xs mx-auto space-y-4">
                      <div className="text-blue-400 flex items-center justify-center gap-2">
                        <Layers className="w-5 h-5 text-blue-500" /> 
                        <span className="font-bold text-white text-base">HaspBio Portal</span>
                      </div>
                      <div className="text-white font-bold text-lg leading-tight">
                        Access your Analysis Package
                      </div>
                      <p className="text-[10px] text-slate-400 leading-relaxed">
                        Redeem the Analysis Package provided with your PrimeSeq Kit to run downstream alignments and generate report metrics.
                      </p>
                      <button className="bg-white/5 border border-white/10 text-white text-xs font-medium py-2.5 px-4 rounded-lg inline-flex items-center gap-2 hover:bg-white/10 transition-all w-full justify-center">
                        <FileCode className="w-3.5 h-3.5 text-blue-400" /> Redeem Analysis Package
                      </button>
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 text-base leading-relaxed font-light">
                  Sell more kits, assays, and sequencing services by offering a simplified, secure, and white-labeled data analysis experience directly to your end customers.
                </p>
              </div>
              
              <div>
                <a 
                  href="#demo"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 tracking-wider uppercase font-mono group"
                >
                  Learn more about white-labeling <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: R&D Teams */}
            <div className="space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <span className="text-[10px] font-bold font-mono text-blue-400 uppercase tracking-widest block">
                  GENQUANTAA FOR
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-white">
                  R&D & Lab Teams
                </h2>
                
                {/* Flowchart Visual */}
                <div className="bg-white/5 border border-white/5 rounded-3xl p-6 md:p-8 shadow-sm space-y-6 relative overflow-hidden group hover:border-blue-500/20 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-[10px] text-blue-400 font-semibold uppercase tracking-wider mb-2 font-mono">
                    Drug Discovery Workflow Impact
                  </div>
                  
                  <div className="space-y-6">
                    {/* Without GenQuantaa */}
                    <div className="space-y-2">
                      <div className="text-[11px] text-red-400 font-semibold uppercase tracking-wider font-mono">
                        Without GenQuantaa
                      </div>
                      <div className="flex items-center text-[10px]">
                        <div className="h-8 px-3 bg-white/5 border border-white/5 rounded-l-lg flex items-center text-slate-300 font-medium">
                          Wet Lab
                        </div>
                        <div className="h-8 flex-1 bg-red-500/10 border-y border-red-500/20 flex items-center justify-center text-red-400 font-medium">
                          Data Lag (~3-6 Months)
                        </div>
                        <div className="h-8 px-3 bg-white/5 border border-white/5 rounded-r-lg flex items-center text-slate-500">
                          Analysis
                        </div>
                      </div>
                      <p className="text-[10px] text-slate-500 leading-normal">
                        Fragmented systems, slow communication loops, and isolated local computational scripts.
                      </p>
                    </div>

                    {/* With GenQuantaa */}
                    <div className="space-y-2">
                      <div className="text-[11px] text-blue-400 font-semibold uppercase tracking-wider font-mono">
                        With GenQuantaa
                      </div>
                      <div className="flex items-center text-[10px]">
                        <div className="h-8 px-3 bg-white/5 border border-white/5 rounded-l-lg flex items-center text-slate-300 font-medium">
                          Wet Lab
                        </div>
                        <div className="h-8 flex-1 bg-blue-500/20 border-y border-blue-500/30 flex items-center justify-center text-blue-400 font-medium">
                          Instant Run (Sync-Sync)
                        </div>
                        <div className="h-8 px-3 bg-blue-50 text-white rounded-r-lg flex items-center justify-center font-bold">
                          Interactive
                        </div>
                      </div>
                      <p className="text-[10px] text-slate-300 leading-normal">
                        Unified pipelines, automated processing runs, and real-time visualization dashboards.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 text-base leading-relaxed font-light">
                  Accelerate downstream bioinformatics workflows. Unify wet-lab test parameters with predictive machine learning modules on a compliant secure platform.
                </p>
              </div>

              <div>
                <a 
                  href="#demo"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 tracking-wider uppercase font-mono group"
                >
                  Explore pipeline integrations <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Role-Based Solutions: Bioinformatic Product Teams vs Computational Scientists (Light Theme) */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-200/60 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 relative">
          {/* Center Vertical Divider Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200/60 -translate-x-1/2"></div>
          
          {/* Left Column: Product Teams */}
          <div className="space-y-8 pr-0 md:pr-10">
            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-[#0f269a] border border-blue-500/20">
              <Boxes className="w-6 h-6" />
            </div>
            
            <div className="space-y-3">
              <span className="text-[10px] font-bold font-mono text-blue-600 uppercase tracking-widest block">
                BIOINFORMATIC PRODUCT TEAMS
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                Extend In-House Analytics Tools
              </h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">
                Scale your analytical infrastructure with a fully branded platform, freeing up core engineering resources.
              </p>
            </div>

            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-4">
                <Layers className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-slate-600 text-xs leading-relaxed font-light">
                  <strong className="text-slate-800 block font-semibold mb-1">Scale Constraints</strong>
                  In-house R&D pipelines are restricted by hardware setup schedules, scripting backlog, and custom tool engineering time.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Database className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-slate-600 text-xs leading-relaxed font-light">
                  <strong className="text-slate-800 block font-semibold mb-1">Standard SaaS Limits</strong>
                  Generic cloud portals sacrifice compliance standards, data visibility, and database customization.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-slate-600 text-xs leading-relaxed font-light">
                  <strong className="text-slate-800 block font-semibold mb-1">The GenQuantaa Integration</strong>
                  Deploy custom docker images beside our native algorithms. Retain absolute control of data, compute nodes, and dashboard visualization metrics.
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column: Computational Scientists */}
          <div className="space-y-8 pl-0 md:pl-10">
            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-[#0f269a] border border-blue-500/20">
              <Workflow className="w-6 h-6" />
            </div>
            
            <div className="space-y-3">
              <span className="text-[10px] font-bold font-mono text-blue-600 uppercase tracking-widest block">
                COMPUTATIONAL SCIENTISTS
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                Run Code & Deploy Interactive Reports
              </h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">
                Connect Python/R algorithms to serverless pipelines, execute models, and build beautiful reports for lab teams.
              </p>
            </div>

            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-4">
                <FileCode className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-slate-600 text-xs leading-relaxed font-light">
                  <strong className="text-slate-800 block font-semibold mb-1">Reproducible Runs</strong>
                  Verify algorithm history, track parameter outputs, and secure code repositories automatically.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Server className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-slate-600 text-xs leading-relaxed font-light">
                  <strong className="text-slate-800 block font-semibold mb-1">VPC Infrastructure Sync</strong>
                  Integrate computation directly beside your enterprise AWS/GCP data lakes and local beakers.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-slate-600 text-xs leading-relaxed font-light">
                  <strong className="text-slate-800 block font-semibold mb-1">Collaborative Dashboards</strong>
                  Transform complex terminal inputs into user-friendly slider widgets so non-computational colleagues can explore outcomes.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Floating Dark Gradient Container: Product / Architecture Section (Product Page Style) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 relative z-10">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] py-20 px-6 sm:px-12 text-center relative">
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl pointer-events-none"></div>

          <div className="space-y-4 max-w-3xl mx-auto mb-16 relative z-10">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">
              SYSTEM ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
              A Single Pane of Glass for Biological Data
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto font-light">
              Orchestrating databases, pipeline compute clusters, and user-facing dashboards inside a single unified system.
            </p>
          </div>
          
          {/* Frame around Architecture Diagram */}
          <div className="border border-white/5 rounded-2xl p-6 md:p-8 bg-slate-950/40 backdrop-blur-sm shadow-[0_0_50px_rgba(0,0,0,0.2)] relative z-10">
            <img 
              src="/Architecture v2.0.png" 
              alt="GenQuantaa Architecture v2.0" 
              className="w-full max-w-4xl h-auto object-contain rounded-xl mx-auto" 
            />
          </div>
        </div>
      </div>

      {/* Enterprise Security Section (Light Theme) */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-200/60 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Block */}
          <div className="space-y-6 text-left">
            <span className="text-[10px] font-bold font-mono text-blue-600 uppercase tracking-widest block">
              ENTERPRISE READY
            </span>
            <h2 className="text-4xl font-normal leading-tight text-slate-900">
              Enterprise Security<br />and Compliance
            </h2>
            <div className="w-20 h-0.5 bg-[#0f269a]"></div>
            <p className="text-slate-500 text-base leading-relaxed max-w-md font-light">
              GenQuantaa provides clinical sponsors, bioinformaticians, and data administrators with everything they need to manage security audits, access privileges, and deployments at scale.
            </p>
          </div>

          {/* Right Block: Accordion */}
          <div className="space-y-3">
            {securityFeatures.map((feature, idx) => {
              const isOpen = openSecurityIndex === idx;
              const FeatureIcon = feature.icon;

              return (
                <div 
                  key={idx} 
                  className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 hover:bg-slate-100/50 transition-all"
                >
                  <button
                    onClick={() => setOpenSecurityIndex(isOpen ? null : idx)}
                    className="w-full p-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-blue-50/50 flex items-center justify-center text-[#0f269a] border border-blue-100">
                        <FeatureIcon className="w-4 h-4" />
                      </div>
                      <span className="text-base font-bold text-slate-800">{feature.title}</span>
                    </div>
                    <div className="text-slate-400 hover:text-slate-700 transition-colors">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 pl-[60px] border-t border-slate-200 pt-3">
                          <p className="text-slate-500 text-xs leading-relaxed font-light">
                            {feature.content}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Floating Dark Gradient Container: Request a Demo Section (Bottom Banner Style) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] py-16 px-6 sm:px-12 text-center relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl pointer-events-none"></div>

          <div className="max-w-xl mx-auto space-y-8 relative z-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-normal text-white">Request a Demo</h2>
              <p className="text-slate-400 text-sm font-light">Access the leading data platform for biological R&D.</p>
            </div>
            
            <ul className="space-y-3.5 text-xs text-slate-300 font-light text-left max-w-md mx-auto border-y border-white/5 py-6">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>The best cloud platform for processing biological workflows</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Save over 72% in resource allocation vs. AWS, GCP, and Azure</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Trusted by more than 4,000 computational biophysicists</span>
              </li>
            </ul>

            <form onSubmit={handleDemoSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={demoEmail}
                onChange={(e) => setDemoEmail(e.target.value)}
                placeholder="Enter your work email..."
                className="w-full px-5 py-3 rounded-full bg-slate-900 border border-white/10 text-slate-200 focus:outline-none focus:border-blue-500 text-xs placeholder:text-slate-500"
              />
              <button 
                type="submit" 
                className="w-full sm:w-auto px-6 py-3 rounded-full font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all text-xs uppercase tracking-wider font-mono shadow-md whitespace-nowrap"
              >
                Request Demo
              </button>
            </form>

            {demoSubmitted && (
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 text-xs font-semibold animate-pulse text-center">
                ✓ Scoping request received. An agent will coordinate with your team.
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
