import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Search,
  Terminal,
  Code2,
  Server,
  Monitor,
  Sliders,
  Network,
  Package,
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

/* ────────────────────── SERVICES 1 DATA ────────────────────── */

const services1List = [
  {
    title: 'Methodology Consulting',
    icon: Search,
    points: [
      'Data analysis and statistics',
      'Machine learning',
      'Artificial intelligence',
      'Experiment design',
      'Method development',
      'Data and text mining'
    ]
  },
  {
    title: 'Scientific Programming',
    icon: Terminal,
    points: [
      'R, Python, Julia package development',
      'Code review and optimization',
      'Porting code to low-level languages',
      'Parallel and distributed computing',
      'In-database data science',
      'GPU / FPGA programming'
    ]
  },
  {
    title: 'Application Development and Integration',
    icon: Code2,
    points: [
      'Desktop and web applications',
      'Automation of analyses or predictive modeling',
      'Data science APIs',
      'Scientific data stores',
      'Big data architecture',
      'Data science tooling'
    ]
  },
  {
    title: 'Data Science Platforms',
    icon: Server,
    points: [
      'Data analysis orchestration',
      'Machine learning platform design',
      'Data science infrastructure setup and hosting',
      'Data science APIs as a service',
      'Managed services for scientific data stores'
    ]
  }
];

const productsList = [
  {
    title: 'Architect',
    icon: Monitor,
    points: [
      'IDE for data science, state of the art',
      'Comfort and productivity for the R, Python and Julia developer',
      'Support of low-level languages (C, C++, FORTRAN)',
      'Server version for teams and HPC environments',
      'Fully open source, including all enterprise features'
    ]
  },
  {
    title: 'ShinyProxy',
    icon: Sliders,
    points: [
      'Shiny app deployment for companies and large organizations',
      'Highly scalable design using Docker infrastructure',
      'Authentication and authorization, single-sign on deployments',
      'Usage statistics and administrator views',
      'Fully open source, including all enterprise features'
    ]
  },
  {
    title: 'R Service Bus',
    icon: Network,
    points: [
      'Middleware for automation of R-based jobs',
      'Rich set of supported protocols (REST, SOAP, e-mail protocols, etc.)',
      'Integrated management of multiple R pools for distributed computing',
      'Synchronous and asynchronous APIs, admin API',
      'Supports plain R scripts and packages out of the box'
    ]
  },
  {
    title: 'RDepot',
    icon: Package,
    points: [
      'Corporate management of R package repositories',
      'RESTful APIs for package submission and repository generation',
      'Authentication and authorization for actions on multiple repositories',
      'Support of continuous integration infrastructure',
      'Highly available repository set-up and full audit trails'
    ]
  }
];

/* ────────────────────── SERVICES 2 DATA ────────────────────── */

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

const services2List: ServiceDetail[] = [
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

const faqsList = [
  {
    q: 'How does GenQuantaa support both software systems and scientific consulting?',
    a: 'We offer an integrated hybrid approach. Life science teams can license our platforms (Platform, Chemistry, GPT, Digital Twin) for their internal computational teams while hiring our expert drug development consultants to design and write GLP, DMPK, and regulatory submissions.'
  },
  {
    q: 'Are custom LIMS and ELN services covered under GxP compliance?',
    a: 'Absolutely. All our informatics designs (such as Electronic Lab Notebook integrations and Lab Information Management Systems) conform strictly to GxP, HIPAA, and GDPR standards. Database models are fully validated against 21 CFR Part 11.'
  },
  {
    q: 'What is the typical timeline for starting a consulting engagement?',
    a: 'Our coordinators schedule an in-depth scoping call within 48 hours of your submission. Depending on the complexity of the project (e.g. customized PopPK modeling vs. comprehensive eCTD compilation), work can commence in 2 to 4 weeks.'
  },
  {
    q: 'Can we run proprietary machine learning models on the GenQuantaa platform?',
    a: 'Yes, our Software and Compute Platform is fully modular. You can import custom Docker containers, Python classifiers, and parameters to execute securely beside our native generative chemistry and target mapping tools.'
  },
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
  }
];

export default function ServicesPage() {
  const [filter, setFilter] = useState<'all' | 'regulatory' | 'discovery' | 'preclinical' | 'early-clinical' | 'late-clinical'>('all');
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('general');
  const [notes, setNotes] = useState('');

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location]);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setInquirySubmitted(true);
    setTimeout(() => {
      setEmail('');
      setNotes('');
      setInquirySubmitted(false);
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

  const filteredServices = services2List.filter((service) => {
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

        <div className="max-w-4xl space-y-6">
          <span className="inline-block px-3 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600">
            GENQUANTAA SERVICES
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-normal tracking-tight leading-[1.12] bg-gradient-to-r from-[#0e172c] to-[#0f269a] bg-clip-text text-transparent max-w-4xl font-sans py-2">
            Scientific Informatics & Drug Development Services
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-3xl font-light">
            GenQuantaa accelerates life science discovery and milestones. We offer custom informatics, data science platforms, and expert drug development consulting to support sponsors through the entire journey.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#services-1"
              className="px-8 py-3.5 rounded-xl text-sm font-semibold bg-[#0f269a] hover:bg-[#0a1a72] text-white shadow-md transition-all cursor-pointer"
            >
              1. Informatics & Data Analytics
            </a>
            <a
              href="#services-2"
              className="px-8 py-3.5 rounded-xl text-sm font-semibold border border-slate-300 text-slate-700 hover:bg-slate-50 shadow-sm transition-all cursor-pointer"
            >
              2. Drug Development Services
            </a>
            <a
              href="#inquiry-form"
              className="px-8 py-3.5 rounded-xl text-sm font-semibold bg-[#0f269a] hover:bg-[#0a1a72] text-white shadow-md transition-all cursor-pointer"
            >
              Send an Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* ────────────────────── SECTION 1: SERVICES 1 ────────────────────── */}
      <div id="services-1" className="scroll-mt-24 border-t border-slate-200/80">
        {/* Row 1: Explore Our Services */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="space-y-12">
            <div className="space-y-3 max-w-3xl text-left">
              <span className="text-xs font-bold text-[#0f269a] uppercase tracking-widest font-mono block">
                COMPUTATIONAL SOLUTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal leading-tight text-slate-900">
                Informatics & Data Analytics
              </h2>
              <p className="text-slate-500 text-sm max-w-2xl">
                Empower your scientific and development teams with elite methodology consulting, customized programming, and scalable deployment architectures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services1List.map((svc, idx) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-150 rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(15,38,154,0.06)] duration-300 transition-all relative overflow-hidden group min-h-[380px]"
                  >
                    {/* Styled top blue bar */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0f269a] to-blue-500 rounded-t-3xl"></div>
                    
                    {/* Icon section */}
                    <div className="flex justify-start mb-6 mt-2">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0f269a] group-hover:scale-110 duration-300 transition-transform">
                        <Icon size={24} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wide text-left mb-6 font-sans min-h-[40px] flex items-center">
                      {svc.title}
                    </h3>

                    {/* Points */}
                    <ul className="space-y-3.5 pl-1 text-xs text-slate-600 font-medium flex-grow text-left">
                      {svc.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-blue-500"></span>
                          <span className="leading-snug">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Row 2: Discover Our Products */}
        <section className="max-w-7xl mx-auto px-6 py-16 mb-8">
          <div className="space-y-12">
            <div className="space-y-3 max-w-3xl text-left">
              <span className="text-xs font-bold text-[#0f269a] uppercase tracking-widest font-mono block">
                OPEN-SOURCE INFRASTRUCTURE
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal leading-tight text-slate-900">
                Scientific Informatics Products
              </h2>
              <p className="text-slate-500 text-sm max-w-2xl">
                Advanced tooling, IDE packages, and middleware to automate, scale, and govern your scientific computing workloads.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {productsList.map((prod, idx) => {
                const Icon = prod.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-150 rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(15,38,154,0.06)] duration-300 transition-all relative overflow-hidden group min-h-[380px]"
                  >
                    {/* Styled top blue bar */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0f269a] to-blue-500 rounded-t-3xl"></div>
                    
                    {/* Icon section */}
                    <div className="flex justify-start mb-6 mt-2">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0f269a] group-hover:scale-110 duration-300 transition-transform">
                        <Icon size={24} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wide text-left mb-6 font-sans min-h-[40px] flex items-center">
                      {prod.title}
                    </h3>

                    {/* Points */}
                    <ul className="space-y-3.5 pl-1 text-xs text-slate-600 font-medium flex-grow text-left">
                      {prod.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-blue-500"></span>
                          <span className="leading-snug">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* ────────────────────── SECTION 2: SERVICES 2 ────────────────────── */}
      <div id="services-2" className="scroll-mt-24 border-t border-slate-200/80 pt-16">
        {/* Stats Counter Section */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
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
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] py-16 px-6 sm:px-8 relative">
            <div className="absolute inset-0 bg-[#0f269a]/5 blur-3xl pointer-events-none"></div>
            <div className="relative z-10 space-y-12">
              <div className="space-y-3 max-w-3xl text-left">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono block">
                  DRUG DEVELOPMENT SERVICES
                </span>
                <h2 className="text-3xl sm:text-4xl font-normal leading-tight">
                  Drug Development Services
                </h2>
                <p className="text-slate-400 text-sm max-w-2xl">
                  Filter by therapeutic lifecycle phase to explore custom PopPK modeling, toxicity profiling, crystal optimizations, or agency compilation services.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-white/10 pb-6">
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
        </section>

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

        {/* Why Choose Pillars wrapped in Product theme block */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] py-16 px-6 sm:px-12 text-left relative">
            <div className="absolute inset-0 bg-[#0f269a]/5 blur-3xl pointer-events-none"></div>
            <div className="space-y-12 relative z-10">
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
        </section>

        {/* Integrated Solutions Section */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
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
                  className="px-6 py-3 bg-[#0f269a] hover:bg-[#0a1a72] text-white text-xs font-bold font-mono uppercase tracking-wider rounded-lg shadow-sm transition-all"
                >
                  Explore Solutions
                </Link>
                <Link
                  to="/discovery"
                  className="px-6 py-3 border border-white/10 text-slate-300 hover:bg-white/5 text-xs font-bold font-mono uppercase tracking-wider rounded-lg transition-all"
                >
                  Explore Software
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
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
        </section>
      </div>

      {/* ────────────────────── CONTACT & INQUIRY FORM ────────────────────── */}
      <section id="inquiry-form" className="max-w-4xl mx-auto px-4 sm:px-6 mb-16 scroll-mt-24">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] py-16 px-6 sm:px-12 text-center relative">
          <div className="absolute inset-0 bg-[#0f269a]/5 blur-3xl pointer-events-none"></div>
          <div className="space-y-12 relative z-10">
            <div className="text-center space-y-4">
              <HelpCircle className="w-10 h-10 text-blue-400 mx-auto" />
              <h2 className="text-3xl font-normal text-white">Send an Inquiry</h2>
              <p className="text-slate-400 text-sm font-light">
                Discuss custom compute deployments, GxP lab systems, or drug development consulting with our team.
              </p>
            </div>

            <div className="bg-[#0b1424] border border-white/10 rounded-3xl p-8 shadow-md">
              <form onSubmit={handleInquirySubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                      Inquiry Scoping Division
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full px-3.5 py-3 rounded-lg border border-white/10 text-slate-300 bg-[#0d1527] text-xs focus:outline-none focus:border-[#0f269a] focus:ring-1 focus:ring-[#0f269a]"
                    >
                      <option value="general">General Services Scope</option>
                      <option value="biopharma">Bio-Pharma R&D Informatics</option>
                      <option value="clinical">Clinical Trial Modeling & MIDD</option>
                      <option value="lims">LIMS & Lab Automation Systems</option>
                      <option value="bioinformatics">Bioinformatics & AI Platform Compute</option>
                      <option value="early-development">Early Development (Nonclinical/GLP)</option>
                      <option value="clinical-pharm">Clinical Pharmacology (MIDD/DDI)</option>
                      <option value="regulatory">Regulatory Strategy (eCTD/Submissions)</option>
                      <option value="cmc-formulation">CMC (Chemistry, Formulation, Controls)</option>
                      <option value="due-diligence">Due Diligence & Asset Evaluation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                      Work Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="support@genquantaa.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-white/10 text-slate-300 bg-[#0d1527] text-xs focus:outline-none focus:border-[#0f269a] focus:ring-1 focus:ring-[#0f269a]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                    Scoping Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your computational workflow, validation criteria, or consulting milestones..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-white/10 text-slate-300 bg-[#0d1527] text-xs focus:outline-none focus:border-[#0f269a] focus:ring-1 focus:ring-[#0f269a] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#0f269a] hover:bg-[#0a1a72] active:scale-98 transition-all rounded-xl font-bold text-white text-xs uppercase tracking-wider font-mono shadow-md"
                >
                  Submit Inquiry
                </button>

                {inquirySubmitted && (
                  <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 text-xs font-semibold animate-pulse text-center">
                    ✓ Inquiry submitted successfully. Our scientific coordinators will contact you shortly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────── FAQ SECTION ────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-24">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] py-16 px-6 sm:px-12 relative">
          <div className="absolute inset-0 bg-[#0f269a]/5 blur-3xl pointer-events-none"></div>
          <div className="space-y-12 relative z-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-normal text-white">Services FAQ</h2>
              <p className="text-slate-400 text-sm font-light">Clear answers on scientific informatics, validations, and compliance.</p>
            </div>

            <div className="space-y-4">
              {faqsList.map((faq, idx) => {
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
      </section>

      <Footer />
    </div>
  );
}
