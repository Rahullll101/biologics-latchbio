import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Compass,
  Cpu,
  Award,
  ShieldCheck,
  FlaskConical,
  Database,
  Layers,
  TrendingUp,
  Brain,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  X,
  ChevronDown,
  ChevronUp,
  BookOpen,
  ArrowUpRight
} from 'lucide-react';

interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  icon: React.ReactNode;
  colorClass: string;
  badgeClass: string;
  categories: string[];
  categoryLabel: string;
  subservices: string[];
}

export default function DrugDevelopmentPage() {
  const [filter, setFilter] = useState<'all' | 'regulatory' | 'discovery' | 'preclinical' | 'early-clinical' | 'late-clinical'>('all');
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [proposalSubmitted, setProposalSubmitted] = useState(false);
  const [proposalEmail, setProposalEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('early-development');

  const handleProposalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!proposalEmail) return;
    setProposalSubmitted(true);
    setTimeout(() => {
      setProposalEmail('');
      setProposalSubmitted(false);
    }, 4000);
  };

  const filterOptions = [
    { id: 'all' as const, label: 'All' },
    { id: 'regulatory' as const, label: 'Regulatory' },
    { id: 'discovery' as const, label: 'Discovery' },
    { id: 'preclinical' as const, label: 'Preclinical' },
    { id: 'early-clinical' as const, label: 'Early Clinical' },
    { id: 'late-clinical' as const, label: 'Late Clinical' }
  ];

  const servicesList: ServiceDetail[] = [
    {
      id: 'early-dev',
      title: 'Strategic Early Development Solutions',
      tagline: 'Strategic non-clinical & translational science',
      desc: 'De-risk early phase biological drug assets through integrated non-clinical testing, translational medicine frameworks, and IND filing strategies. Align science and regulatory requirements early to attract investment and milestones.',
      icon: <Compass className="w-6 h-6 text-blue-400" />,
      colorClass: 'bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] border border-white/5 hover:border-blue-500/60 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all shadow-xl',
      badgeClass: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
      categories: ['discovery', 'preclinical'],
      categoryLabel: 'Discovery, Preclinical',
      subservices: [
        'Non-clinical program design & strategy',
        'First-in-Human translational frameworks',
        'IND / CTA document preparation & submittal',
        'Early-stage target & pathway validation'
      ]
    },
    {
      id: 'bio-venture',
      title: 'Bio Venture Catalyst',
      tagline: 'Start-up pipeline acceleration program',
      desc: 'Accelerate drug discovery timelines for early-stage biotech startups. Access integrated biosimulation tools, expert consultant hours, and fast-track regulatory frameworks to turn initial science into investable milestones.',
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      colorClass: 'bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] border border-white/5 hover:border-blue-500/60 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all shadow-xl',
      badgeClass: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
      categories: ['preclinical', 'early-clinical'],
      categoryLabel: 'Preclinical, Early Clinical',
      subservices: [
        'Funding deck validation & candidate profiling',
        'Rapid proof-of-concept modeling',
        'Virtual pipeline testing & target screening',
        'Fast-track IND filing support templates'
      ]
    },
    {
      id: 'due-diligence',
      title: 'Due Diligence & Asset Evaluation',
      tagline: 'Independent pipeline valuation and risk profiling',
      desc: 'Verify clinical profiles, competitive landscapes, and risks of early stage target molecules before investments, licensing, or acquisitions. Partner with our team to obtain objective scientific diligence audits.',
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      colorClass: 'bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] border border-white/5 hover:border-blue-500/60 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all shadow-xl',
      badgeClass: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
      categories: ['discovery', 'preclinical'],
      categoryLabel: 'Discovery, Preclinical',
      subservices: [
        'Quantitative scientific due diligence audits',
        'Clinical candidate risk-reward modeling',
        'Competitive threat landscape profiling',
        'Strategic valuation and pipeline consulting'
      ]
    },
    {
      id: 'nam-strategies',
      title: 'NAM (New Approach Methodology) Strategies',
      tagline: 'Non-animal testing strategies and models',
      desc: 'De-risk assets and fulfill FDA and global testing criteria using non-animal methodologies (NAMs). Leverage quantitative structure-activity relationship (QSAR) models and in vitro cellular simulators to satisfy regulatory submissions.',
      icon: <Brain className="w-6 h-6 text-blue-400" />,
      colorClass: 'bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] border border-white/5 hover:border-blue-500/60 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all shadow-xl',
      badgeClass: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
      categories: ['preclinical'],
      categoryLabel: 'Preclinical',
      subservices: [
        'In silico QSAR toxicology simulations',
        'In vitro cellular assay design & interpretation',
        'Organ-on-a-chip datasets translation models',
        'Non-animal IND data package assembly'
      ]
    },
    {
      id: 'clinical-pharma',
      title: 'Clinical Pharmacology & Translational Medicine',
      tagline: 'Model-informed early clinical success',
      desc: 'Accelerate asset progress from Phase I first-in-human studies into early efficacy cohorts. We combine advanced PK/PD modeling, translational science, and biosimulation to select optimal dose levels and optimize trial designs.',
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      colorClass: 'bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] border border-white/5 hover:border-blue-500/60 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all shadow-xl',
      badgeClass: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
      categories: ['early-clinical'],
      categoryLabel: 'Early Clinical',
      subservices: [
        'Model-informed precision dosing (MIDD)',
        'Pharmacokinetics (PK) & Pharmacodynamics (PD) modeling',
        'Drug-drug interaction (DDI) hazard profiling',
        'First-in-Human starting dose calculation'
      ]
    },
    {
      id: 'regulatory',
      title: 'Regulatory Affairs Consulting',
      tagline: 'Global filing and strategic pathway approval',
      desc: 'Achieve clinical milestones and global filing approvals with strategic consultations for FDA, EMA, PMDA, and other health agencies. Overcome complex regulatory hurdles through expert-written scientific data packages.',
      icon: <Award className="w-6 h-6 text-blue-400" />,
      colorClass: 'bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] border border-white/5 hover:border-blue-500/60 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all shadow-xl',
      badgeClass: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
      categories: ['regulatory', 'late-clinical'],
      categoryLabel: 'Regulatory, Late Clinical',
      subservices: [
        'Pre-IND and Scientific Advice meeting support',
        'eCTD submission writing, publishing & review',
        'Regulatory pathway selection & fast-track designation',
        'Labeling strategy & agency correspondence'
      ]
    },
    {
      id: 'toxicology',
      title: 'Toxicology & Nonclinical Support',
      tagline: 'Robust safety and toxicology profiles',
      desc: 'Unify safety profiles and toxicity evaluations. Design non-clinical study designs that conform to modern GLP and international safety standards, minimizing off-target toxicities and animal testing schedules.',
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
      colorClass: 'bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] border border-white/5 hover:border-blue-500/60 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all shadow-xl',
      badgeClass: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
      categories: ['preclinical'],
      categoryLabel: 'Preclinical',
      subservices: [
        'GLP-compliant study protocol drafting & oversight',
        'Safety package risk assessment & toxicokinetics',
        'In vitro & in vivo safety data integration',
        'Secondary pharmacology liability assessment'
      ]
    },
    {
      id: 'cmc',
      title: 'CMC (Chemistry, Manufacturing & Controls) Services',
      tagline: 'Optimizing formulation and crystal stability',
      desc: 'Optimize compound formulation design, crystallization profiles, and scaling synthesis protocols for clinical trials. De-risk formulation design early to ensure compound stability, bioavailability, and manufacturing consistency.',
      icon: <FlaskConical className="w-6 h-6 text-blue-400" />,
      colorClass: 'bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] border border-white/5 hover:border-blue-500/60 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all shadow-xl',
      badgeClass: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
      categories: ['preclinical', 'early-clinical', 'late-clinical'],
      categoryLabel: 'Preclinical, Early Clinical, Late Clinical',
      subservices: [
        'Crystal polymorph & stability simulations',
        'Excipient compatibility & solubility optimizations',
        'Synthesis scale-up & process validation support',
        'Clinical batch release & analytical validation'
      ]
    },
    {
      id: 'dmpk',
      title: 'DMPK Consulting Services',
      tagline: 'Advanced ADME profiling & clearance scaling',
      desc: 'Understand drug absorption, distribution, metabolism, and excretion (ADME) behavior using physiologically-based pharmacokinetic (PBPK) biosimulation. We scale animal metabolic data to project human clearances with high accuracy.',
      icon: <Database className="w-6 h-6 text-blue-400" />,
      colorClass: 'bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] border border-white/5 hover:border-blue-500/60 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all shadow-xl',
      badgeClass: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
      categories: ['preclinical'],
      categoryLabel: 'Preclinical',
      subservices: [
        'PBPK modeling & Simcyp simulator runs',
        'In vitro intrinsic clearance & half-life estimations',
        'Interspecies scaling & human PK projections',
        'Active metabolite profiling & screening'
      ]
    }
  ];

  const caseStudies = [
    {
      title: 'Failure to Launch: Building Smarter Strategies to Get the Right Drug to the Right Patient',
      type: 'On-Demand Webinar',
      desc: 'Discover why standard development programs fail during translation and how cross-functional modeling de-risks Phase II studies.',
      link: '#'
    },
    {
      title: 'Why You Need an Integrated Development Plan (IDP)',
      type: 'Strategic Whitepaper',
      desc: 'Learn how to synchronize non-clinical safety, CMC formulation, and clinical pharmacology into a single, cohesive timeline.',
      link: '#'
    },
    {
      title: 'Why Performing Key CMC Activities Early Can Aid De-risking Your Drug Development Program',
      type: 'Technical Case Study',
      desc: 'Analyze polymorph crystallization and solubility profiles early to prevent crystallization errors during late-stage clinical scaling.',
      link: '#'
    },
    {
      title: 'ICH M12 Guidelines & Your Drug-Drug Interaction (DDI) Package',
      type: 'Regulatory Update',
      desc: 'Evaluate how new ICH M12 directives modify requirements for transporter and enzyme-based in vitro DDI screening packages.',
      link: '#'
    }
  ];

  const faqs = [
    {
      q: 'What is Model-Informed Drug Development (MIDD) and how does it help?',
      a: 'MIDD combines biosimulation, pharmacometrics, and mechanistic models to predict how candidate compounds interact inside the human body. This optimizes dose selection, reduces animal testing requirements, and builds robust evidence packages that regulators globally (including FDA and EMA) accept.'
    },
    {
      q: 'How does CMC consulting integrate with early-stage toxicology?',
      a: 'If a chemical candidate has poor solubility or is unstable in standard buffers, toxicology studies can yield false-negatives or inconsistent doses. Our Chemistry, Manufacturing, and Controls (CMC) services evaluate crystal forms, solubility, and excipient compatibilities simultaneously with toxicology to ensure assay accuracy.'
    },
    {
      q: 'Can GenQuantaa’s Drug Development Services assist with FDA Pre-IND meetings?',
      a: 'Yes. Our Regulatory Affairs and Clinical Pharmacology teams regularly lead Pre-IND, End-of-Phase 2, and Scientific Advice meetings. We build, write, and submit complete eCTD documentation, helping you address regulator concerns with quantitative modeling data.'
    },
    {
      q: 'How do I start a service consultation?',
      a: 'Simply fill out the inquiry form below or in the hero section. Our R&D team will schedule an initial technical call to evaluate your target pipelines and outline a custom proposal package.'
    }
  ];

  const filteredServices = servicesList.filter((service) => {
    if (filter === 'all') return true;
    return service.categories.includes(filter);
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-[#0f269a]/20 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-16 px-6 max-w-7xl mx-auto text-left relative overflow-hidden">
        {/* Soft background mesh accents */}
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#0f269a]/5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[20%] left-[-15%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl space-y-5">
          <span className="inline-block px-3 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600">
            GENQUANTAA SERVICES
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-normal tracking-tight leading-[1.12] bg-gradient-to-r from-[#0e172c] to-[#0f269a] bg-clip-text text-transparent max-w-3xl font-sans py-2">
            GENQUANTAA Software, AI, Data, and Consulting for the Global Life Sciences Industry
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-3xl font-light">
            At GenQuantaa, we consult with you to address all your drug development challenges. We can streamline every stage of development by providing a tailored solution that combines model-informed drug development with expertise across due diligence, CMC, toxicology, DMPK, regulatory strategy, clinical pharmacology, modeling & simulation, biometrics, and more.
          </p>

          <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
            By uniting data, insights, and expert-driven strategies, we help you deliver new therapies to patients faster, with the precision and confidence that you seek.
          </p>
        </div>
      </section>

      {/* Stats Counter Section (matching screenshot) */}
      <section className="max-w-7xl mx-auto px-6 py-8 border-t border-slate-200/80 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">

          <div className="space-y-2">
            <div className="text-4xl font-extrabold text-[#0f269a] tracking-tight">300+</div>
            <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider leading-relaxed">
              Pharmacology & drug development consultants
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-4xl font-extrabold text-[#0f269a] tracking-tight">90%</div>
            <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider leading-relaxed">
              of FDA approvals for novel drugs since 2014 supported by GenQuantaa
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-4xl font-extrabold text-[#0f269a] tracking-tight">700+</div>
            <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider leading-relaxed">
              Peer-reviewed scientific publications on biosimulation & MIDD
            </div>
          </div>

        </div>
      </section>

      {/* Consulting Cards block container matching Product page layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] py-16 px-6 sm:px-8 relative">
          <div className="absolute inset-0 bg-[#0f269a]/5 blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-white/10 pb-6 mb-12">
            <span className="text-sm font-semibold text-slate-400 whitespace-nowrap">Filter By:</span>
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((opt) => {
                const isActive = filter === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setFilter(opt.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all border ${isActive
                        ? 'bg-[#0f269a] text-white border-[#0f269a] shadow-sm'
                        : 'bg-[#0d1527] text-slate-400 border-white/5 hover:text-slate-200 hover:bg-[#111c34]'
                      }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`border rounded-2xl overflow-hidden cursor-pointer transition-all flex flex-col justify-between ${service.colorClass}`}
              >
                {/* Card Header */}
                <div className="bg-[#0f172a] px-6 py-4 flex items-center justify-between border-b border-white/5 shrink-0">
                  <span className="text-[10px] font-bold text-blue-400 tracking-wider uppercase font-mono">
                    GenQuantaa Consulting
                  </span>
                  <span className="text-[9px] font-semibold text-blue-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5 font-mono">
                    {service.categories.includes('preclinical') ? 'Preclinical' : 'Clinical'}
                  </span>
                </div>

                {/* Card Content Area */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono">
                      Services | {service.categoryLabel}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug text-left">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 text-[13px] leading-relaxed line-clamp-3 font-normal text-left">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-semibold uppercase tracking-wider font-mono">
                      READ DETAILS
                    </span>
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>

      {/* Interactive Detail Modal (Overlay) */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-[#0b1424] border border-white/10 rounded-3xl max-w-2xl w-full p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto text-white animate-scaleIn">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0f172a] border border-white/5 flex items-center justify-center shrink-0">
                  <span className="text-blue-400">
                    {selectedService.icon}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] font-bold font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    SUPPORT DIVISION
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1 text-left">{selectedService.title}</h3>
                </div>
              </div>

              <div className="space-y-3 border-t border-white/5 pt-4 text-left">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Consulting Scope</h4>
                <p className="text-slate-300 text-sm leading-relaxed font-normal">{selectedService.desc}</p>
              </div>

              <div className="space-y-3 text-left">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Program Deliverables & Capabilities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.subservices.map((sub, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 bg-[#0d1527] border border-white/5 rounded-xl text-xs font-semibold text-slate-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex gap-4">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    const el = document.getElementById('inquiry-form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#0f269a] hover:bg-[#0a1a72] text-white text-xs font-bold font-mono uppercase tracking-wider transition-all"
                >
                  Send Inquiry on this Division
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2.5 rounded-xl border border-white/10 text-slate-300 hover:bg-white/5 text-xs font-bold font-mono uppercase tracking-wider transition-all"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dark Indigo Value Pillars Section wrapped in Product theme block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] py-16 px-6 sm:px-12 text-left relative">
          <div className="absolute inset-0 bg-[#0f269a]/5 blur-3xl pointer-events-none"></div>
          <div className="space-y-12">

            <div className="space-y-3 max-w-2xl">
              <span className="text-[10px] font-bold font-mono text-blue-400 uppercase tracking-widest block">
                Why Choose GenQuantaa
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal leading-tight">
                Why choose GenQuantaa drug development consulting solutions?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="bg-white/5 border border-white/5 rounded-2xl p-6 space-y-4">
                <h4 className="font-bold text-white text-lg leading-snug">We support you through the entire journey</h4>
                <p className="text-slate-400 text-xs leading-relaxed font-normal">
                  GenQuantaa is unique in supporting you through the full spectrum of drug development, from discovery through post-market by leveraging the right expertise at the right time.
                </p>
              </div>

              <div className="bg-white/5 border border-white/5 rounded-2xl p-6 space-y-4">
                <h4 className="font-bold text-white text-lg leading-snug">Gain from insight-driven innovation</h4>
                <p className="text-slate-400 text-xs leading-relaxed font-normal">
                  Harness advanced analytics and biosimulation to uncover new opportunities, prioritize the most promising candidates, and deliver the exact body of evidence you need.
                </p>
              </div>

              <div className="bg-white/5 border border-white/5 rounded-2xl p-6 space-y-4">
                <h4 className="font-bold text-white text-lg leading-snug">We’re trusted by regulators</h4>
                <p className="text-slate-400 text-xs leading-relaxed font-normal">
                  Build robust evidence packages with methodologies regulators trust worldwide, ensuring smoother IND and NDA validation pathways.
                </p>
              </div>

              <div className="bg-white/5 border border-white/5 rounded-2xl p-6 space-y-4">
                <h4 className="font-bold text-white text-lg leading-snug">Efficient workflow integration</h4>
                <p className="text-slate-400 text-xs leading-relaxed font-normal">
                  Transform siloed operations, toxicology packages, and CMC teams into streamlined, cost-effective model-informed workflows.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Integrated Solutions Section wrapped in Product theme block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] py-16 px-6 sm:px-12 text-center relative">
          <div className="absolute inset-0 bg-[#0f269a]/5 blur-3xl pointer-events-none"></div>
          <div className="space-y-6 flex flex-col items-center justify-center relative z-10">
            <h2 className="text-3xl sm:text-4xl font-normal leading-tight text-white">
              Integrated solutions for drug development
            </h2>
            <div className="w-16 h-1 bg-[#0f269a]"></div>
            <p className="text-slate-300 text-lg leading-relaxed font-light max-w-3xl">
              Advance your drug’s development journey with a seamless, model-informed approach. By linking insights across all phases, we tailor MIDD-driven strategies to optimize execution and empower confident decision-making—helping you bring innovative therapies to patients faster.
            </p>
            <div className="pt-4 flex gap-4 justify-center">
              <Link
                to="/solutions"
                className="px-6 py-3 bg-[#0f269a] hover:bg-[#0a1a72] text-white text-xs font-bold font-mono uppercase tracking-wider rounded-lg shadow-sm transition-all animate-pulse hover:animate-none"
              >
                Explore Solutions
              </Link>
              <Link
                to="/platform"
                className="px-6 py-3 border border-white/10 text-slate-300 hover:bg-white/5 text-xs font-bold font-mono uppercase tracking-wider rounded-lg transition-all"
              >
                Explore Software
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section wrapped in Product theme block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] py-16 px-6 sm:px-12 relative">
          <div className="absolute inset-0 bg-[#0f269a]/5 blur-3xl pointer-events-none"></div>
          <div className="space-y-12 relative z-10">

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2 text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Resources Hub</span>
                </div>
                <h2 className="text-3xl font-normal text-white">Drug development case studies</h2>
              </div>
              <a
                href="#"
                className="text-blue-400 font-bold text-sm flex items-center gap-1 hover:underline shrink-0"
              >
                View all <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((cs, idx) => (
                <div
                  key={idx}
                  className="bg-[#070b13] border border-white/5 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-white/10 transition-all text-left"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded">
                      {cs.type}
                    </span>
                    <h3 className="font-bold text-white text-base hover:text-blue-400 transition-colors leading-snug">
                      <a href="#" className="flex items-center gap-1">
                        <span>{cs.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-slate-500 shrink-0" />
                      </a>
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed font-normal">
                      {cs.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/5 mt-6 flex items-center justify-end">
                    <a
                      href="#"
                      className="text-xs text-blue-400 font-bold hover:underline flex items-center gap-1"
                    >
                      Watch/Read now <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Form Section wrapped in Product theme block */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] py-16 px-6 sm:px-12 text-center relative">
          <div className="absolute inset-0 bg-[#0f269a]/5 blur-3xl pointer-events-none"></div>
          <div className="space-y-12 relative z-10">
            <div className="text-center space-y-4">
              <HelpCircle className="w-10 h-10 text-blue-400 mx-auto" />
              <h2 className="text-3xl font-normal text-white">Send an Inquiry</h2>
              <p className="text-slate-400 text-sm">Have a drug development challenge? Fill out the details below and we will contact you.</p>
            </div>

            <div className="bg-[#0b1424] border border-white/10 rounded-3xl p-8 shadow-md">
              <form onSubmit={handleProposalSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">Asset Focus area</label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full px-3.5 py-3 rounded-lg border border-white/10 text-slate-300 bg-[#0d1527] text-xs focus:outline-none focus:border-[#0f269a] focus:ring-1 focus:ring-[#0f269a]"
                    >
                      <option value="early-development">Early Development (Nonclinical/GLP)</option>
                      <option value="clinical-pharm">Clinical Pharmacology (MIDD/DDI)</option>
                      <option value="regulatory">Regulatory Strategy (eCTD/Submissions)</option>
                      <option value="cmc-formulation">CMC (Chemistry, Formulation, Controls)</option>
                      <option value="due-diligence">Due Diligence & Asset Evaluation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">Work Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="info@Genquantaa.com"
                      value={proposalEmail}
                      onChange={(e) => setProposalEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-white/10 text-slate-300 bg-[#0d1527] text-xs focus:outline-none focus:border-[#0f269a] focus:ring-1 focus:ring-[#0f269a]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#0f269a] hover:bg-[#0a1a72] active:scale-98 transition-all rounded-xl font-bold text-white text-xs uppercase tracking-wider font-mono shadow-md"
                >
                  Submit Inquiry
                </button>

                {proposalSubmitted && (
                  <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 text-xs font-semibold animate-pulse text-center">
                    ✓ Form submitted successfully. An expert will reach out to you shortly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section wrapped in Product theme block */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] py-16 px-6 sm:px-12 relative">
          <div className="absolute inset-0 bg-[#0f269a]/5 blur-3xl pointer-events-none"></div>
          <div className="space-y-12 relative z-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-normal text-white">Services FAQ</h2>
              <p className="text-slate-400 text-sm">Clear insights into our drug development modeling strategies.</p>
            </div>

            <div className="space-y-4 mt-12">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="bg-[#0b1424] border border-white/10 rounded-xl overflow-hidden shadow-sm transition-all text-left">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-5 flex items-center justify-between text-left focus:outline-none font-bold text-white text-sm sm:text-base group"
                    >
                      <span>{faq.q}</span>
                      <span className="text-slate-400 group-hover:text-white transition-colors">
                        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 border-t border-white/5 pt-4">
                        <p className="text-slate-300 text-sm leading-relaxed font-normal">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Quick Links Showcase wrapped in Product theme block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] py-16 px-6 sm:px-12 relative">
          <div className="absolute inset-0 bg-[#0f269a]/5 blur-3xl pointer-events-none"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

            <div className="bg-[#070b13] border border-white/5 rounded-2xl p-6 space-y-3 text-left">
              <h4 className="font-bold text-white text-base">Explore Solutions</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-normal">
                Learn how GenQuantaa accelerates your pipeline with enlightened strategies and tools.
              </p>
              <Link
                to="/solutions"
                className="text-blue-400 font-bold text-xs hover:underline inline-flex items-center gap-1 pt-2"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-[#070b13] border border-white/5 rounded-2xl p-6 space-y-3 text-left">
              <h4 className="font-bold text-white text-base">Explore Software</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-normal">
                Discover our cutting-edge technology for biosimulation and data analytics.
              </p>
              <Link
                to="/platform"
                className="text-blue-400 font-bold text-xs hover:underline inline-flex items-center gap-1 pt-2"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-[#070b13] border border-white/5 rounded-2xl p-6 space-y-3 text-left">
              <h4 className="font-bold text-white text-base">About Us</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-normal">
                See why GenQuantaa is the global leader in drug development innovation.
              </p>
              <Link
                to="/about"
                className="text-blue-400 font-bold text-xs hover:underline inline-flex items-center gap-1 pt-2"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
