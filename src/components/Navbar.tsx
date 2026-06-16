import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Database,
  Activity,
  Brain,
  Cpu,
  Compass,
  Layers,
  ShieldCheck,
  BarChart,
  Sparkles,
  FlaskConical,
  Hourglass,
  Dna,
  Target,
  Microscope,
  Zap,
  Award,
  BookOpen,
  FileText,
} from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeSolutionTab, setActiveSolutionTab] = useState<'clinical' | 'quality' | 'data' | 'market-access' | 'rnd'>('rnd');

  const location = useLocation();
  const isSolutionsPath = location.pathname === '/solutions' || location.hash === '#our-solutions';
  const isChemistryPath = location.pathname === '/chemistry';
  const isGptPath = location.pathname === '/gpt';
  const isDigitalTwinPath = location.pathname === '/digital-twin';

  const isServicesPath = location.pathname === '/services';
  const isPlatformPath = location.pathname === '/home' || location.pathname === '/';
  const isCompanyPath = location.pathname === '/company';

  const handleMouseEnter = (linkName: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoveredLink(linkName);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredLink(null);
    }, 150);
  };

  const menuConfigs: Record<string, any> = {
    product: {
      category: 'Discovery',
      title: 'Genquantaa Platform',
      desc: 'A unified biological data & compute engine engineered to automate, scale, and trace genomic and molecular R&D workflows.',
      href: '/discovery',
      discoverLabel: 'Explore Platform',
      items: [
        {
          title: 'Data Ingestion & Alignment',
          desc: 'Upload FASTQ files and clinical datasets with high throughput.',
          icon: Database
        },
        {
          title: 'AI Preprocessing & Vectors',
          desc: 'Generate structural embeddings in high-performance vector databases.',
          icon: Activity
        },
        {
          title: 'Scientific Compute Engine',
          desc: 'Run molecular docking and workflow simulators instantly.',
          icon: Brain
        },
        {
          title: 'Orchestration & Infrastructure',
          desc: 'Kubernetes pipelines executing on H100 GPUs with Redis queues.',
          icon: Cpu
        }
      ],
      featured: {
        title: 'Genquantaa Compute Dashboard',
        desc: 'Run, trace, and manage complex pipeline runs in a single cloud dashboard.',
        image: '/screenshots/dashboard.png',
        href: '/discovery',
        linkLabel: 'Open Dashboard'
      }
    },
    solutions: {
      category: 'Solutions',
      title: 'Enterprise Portals',
      desc: 'Scalable bioinformatics platforms and secure data infrastructure designed for biopharma partners, diagnostic labs, and academic researchers.',
      href: '/home#our-solutions',
      discoverLabel: 'View Solutions',
      items: [
        {
          title: 'Discovery Solution',
          desc: 'Explore our integrated genomic and biological discovery platform workflows.',
          icon: Compass,
          href: '/discovery-solution'
        },
        {
          title: 'GQ Chemistry Solution',
          desc: 'Explore computational chemistry, retrosynthesis and lead optimization.',
          icon: FlaskConical,
          href: '/chemistry-solution'
        },
        {
          title: 'GQ GPT Solutions',
          desc: 'Explore synthetic omics generators, aging clocks and target explorers.',
          icon: Brain,
          href: '/gpt-solutions'
        }
      ],
      featured: {
        title: 'Valued Partnerships',
        desc: 'Collaborate with leading life science teams, including Microsoft, Cura Quantis, and GenQuantaa Robotics.',
        image: '/scientist_portrait.png',
        href: '/home#our-solutions',
        linkLabel: 'See Client Success'
      }
    },
    software: {
      category: 'Our software',
      title: 'Our software',
      desc: "GenQuantaa's software suite delivers next-generation, high-performance computational intelligence across all R&D and drug development stages. By unifying AI-driven molecular dynamics, automated validation, and advanced analytics, our tools unify research pipelines, accelerate regulatory breakthroughs, and scale scientific insights.",
      href: '/discovery',
      discoverLabel: 'View all',
      items: [
        {
          title: 'GENQUANTAA Kinetica™',
          desc: 'PK/PD and toxicokinetic modeling',
          icon: Activity,
          href: '/discovery'
        },
        {
          title: 'GENQUANTAA Simulate™',
          desc: 'PBPK modeling and simulation',
          icon: Cpu,
          href: '/discovery'
        },
        {
          title: 'GENQUANTAA Validate™',
          desc: 'CDISC data validation',
          icon: ShieldCheck,
          href: '/discovery'
        },
        {
          title: 'GENQUANTAA Discover™',
          desc: 'Scientific informatics platform',
          icon: Compass,
          href: '/discovery'
        },
        {
          title: 'GENQUANTAA Insight™',
          desc: 'Biological and pharmacological intelligence',
          icon: Brain,
          href: '/discovery'
        },
        {
          title: 'GENQUANTAA Intelligence™',
          desc: 'AI platform for life sciences',
          icon: Sparkles,
          href: '/discovery'
        },
        {
          title: 'GENQUANTAA Submit™',
          desc: 'eCTD submission management',
          icon: Database,
          href: '/discovery'
        },
        {
          title: 'GENQUANTAA Author™',
          desc: 'Regulatory writing GenAI',
          icon: Cpu,
          href: '/discovery'
        },
        {
          title: 'GENQUANTAA Value™',
          desc: 'Value communication and HEOR storytelling',
          icon: BarChart,
          href: '/discovery'
        },
        {
          title: 'GENQUANTAA ChemVista™',
          desc: 'Chemical intelligence',
          icon: FlaskConical,
          href: '/discovery'
        },
        {
          title: 'GENQUANTAA Explorer™',
          desc: 'Nonclinical data exploration',
          icon: Layers,
          href: '/discovery'
        }
      ],
      bySolution: {
        title: 'Software by solution',
        linkLabel: 'View software',
        href: '/discovery',
        items: [
          { title: 'Regulatory', href: '/services' },
          { title: 'Discovery', href: '/discovery' },
          { title: 'Preclinical', href: '/discovery' },
          { title: 'Early Clinical', href: '/discovery' },
          { title: 'Late Clinical', href: '/discovery' },
          { title: 'Market Access & Commercial', href: '/discovery' }
        ]
      }
    },
    chemistry: {
      category: 'GQ Chemistry',
      title: 'Generative Suite',
      desc: 'Generative chemistry intelligence engineered for modern pharmaceutical research — planning synthesis pathways and predicting ligand binding.',
      href: '/chemistry',
      discoverLabel: 'Explore Chemistry Suite',
      items: [
        {
          title: 'Generative Novel Design',
          desc: 'AI-driven design of novel small molecules matching target constraints.',
          icon: Sparkles
        },
        {
          title: 'Molecular Dynamics (MDFlow)',
          desc: 'Automate MD parameter files, parameterization, and free energy runs.',
          icon: Activity
        },
        {
          title: 'Model Training & ADMET',
          desc: 'Build custom predictive models for toxicity, clearance, and absorption.',
          icon: FlaskConical
        },
        {
          title: 'Retrosynthetic Route Planning',
          desc: 'Execute multi-step retrosynthesis predictions to find synthetic routes.',
          icon: Compass
        }
      ],
      featured: {
        title: 'Lead Optimization Suite',
        desc: 'Search and screen trillions of chemical compounds in-silico to optimize candidate selectivity.',
        image: '/screenshots/lead_optimization.png',
        href: '/chemistry',
        linkLabel: 'Run Docking Simulation'
      }
    },
    gpt: {
      category: 'GQ GPT',
      title: 'In-Silico Simulation Lab',
      desc: 'An advanced in-silico simulation lab utilizing biological aging clocks, synthetic data generators, and virtual high-throughput screening.',
      href: '/gpt',
      discoverLabel: 'Open In-Silico Lab',
      items: [
        {
          title: 'Biological Aging Clock',
          desc: 'Differentiate cellular senescence and chronological age using 15-gene methylation.',
          icon: Hourglass
        },
        {
          title: 'Synthetic Omics Generator',
          desc: 'Create statistically identical RNA-Seq and transcriptomic datasets securely.',
          icon: Dna
        },
        {
          title: 'Digital Discovery Engine',
          desc: 'Execute virtual high-throughput screenings simulating over 60,000+ compounds.',
          icon: Brain
        },
        {
          title: 'Target Receptor Explorer',
          desc: 'Scan candidate disease receptors and locate druggable pockets with scanners.',
          icon: Target
        }
      ],
      featured: {
        title: 'Target Explorer',
        desc: 'Identify and analyze candidate disease receptors and locate active pockets.',
        image: '/screenshots/target_explorer.png',
        href: '/gpt',
        linkLabel: 'Explore Receptor Maps'
      }
    },
    'digital-twin': {
      category: 'Digital Twin',
      title: 'Precision Oncology',
      desc: 'A precision oncology digital twin platform combining patient medical imaging, survival models, and targeted mutation therapy matchers.',
      href: '/digital-twin',
      discoverLabel: 'Launch Digital Twin',
      items: [
        {
          title: '3D DICOM Segmenter',
          desc: 'Analyze MRI/CT slices to automatically calculate primary tumor volumes.',
          icon: Microscope
        },
        {
          title: 'Cox Survival Models',
          desc: 'Predict five-year survival rates and hazard indices using personalized risk.',
          icon: Activity
        },
        {
          title: 'Longitudinal RECIST Tracking',
          desc: 'Monitor disease progression, stable response, or complete remission.',
          icon: Layers
        },
        {
          title: 'Mutation Therapy Matcher',
          desc: 'Match genomic mutations (EGFR, KRAS, ALK) to optimal targeted therapies.',
          icon: Target
        }
      ],
      featured: {
        title: 'Precision Oncology Dashboard',
        desc: 'Unify medical imaging analytics, clinical data, and survival curves in a single model.',
        image: '/screenshots/target_explorer_info.png',
        href: '/digital-twin',
        linkLabel: 'Simulate Therapy Response'
      }
    },
    'services-2': {
      category: 'Drug Development Services',
      title: 'Model-Informed Development',
      desc: 'Model-informed drug development, GLP toxicology protocols, DMPK calculations, and global regulatory filing strategy.',
      href: '/services#services-2',
      discoverLabel: 'Review Services',
      items: [
        {
          title: 'Strategic Early Development',
          desc: 'Design non-clinical study programs and translation frameworks.',
          icon: Compass
        },
        {
          title: 'Bio Venture Catalyst',
          desc: 'De-risk early-stage assets and build pipelines for startups.',
          icon: Zap
        },
        {
          title: 'Diligence & Evaluation',
          desc: 'Perform quantitative due diligence audits and risk profiling.',
          icon: Award
        },
        {
          title: 'CMC Formulation & Scaling',
          desc: 'Optimize polymorph stability and clinical manufacturing processes.',
          icon: FlaskConical
        }
      ],
      featured: {
        title: 'GLP Safety & Toxicology',
        desc: 'Ensure safety parameters meet FDA, EMA, and PMDA requirements with experts.',
        image: '/screenshots/validate_wetlab.png',
        href: '/services#services-2',
        linkLabel: 'Submit Service Inquiry'
      }
    },
    services: {
      category: 'Services',
      title: 'Expert R&D Services',
      desc: 'Discover our unified computational platform engines, generative design software, and world-class scientific consulting services.',
      href: '/services',
      discoverLabel: 'Explore Services',
      items: [
        {
          title: 'Informatics & Data Analytics',
          desc: 'Next-generation computational engines, AI design, and custom workflow pipelines.',
          icon: Cpu,
          href: '/services#services-1'
        },
        {
          title: 'Drug Development Services',
          desc: 'Strategic translation, safety toxicology, CMC formulation, and clinical pharmacology.',
          icon: Compass,
          href: '/services#services-2'
        },
        {
          title: 'Regulatory Affairs Strategy',
          desc: 'Global agency meeting support and eCTD submission packages compilation.',
          icon: ShieldCheck,
          href: '/services#services-2'
        },
        {
          title: 'Due Diligence & Evaluation',
          desc: 'Independent asset risk profiling, scorecards, and start-up valuations.',
          icon: Award,
          href: '/services#services-2'
        }
      ],
      featured: {
        title: 'Integrated Scoping Inquiry',
        desc: 'Submit your requirements and schedule an in-depth technical scoping call with our coordinators.',
        image: '/screenshots/validate_wetlab.png',
        href: '/services',
        linkLabel: 'Contact Scoping Team'
      }
    },
    company: {
      category: 'Company',
      title: 'About GenQuantaa',
      desc: 'Learn about our scientific mission, compliance standards, privacy protections, and user agreements.',
      href: '/company',
      discoverLabel: 'Explore Company',
      items: [
        {
          title: 'Company Overview',
          desc: 'Learn about our scientific mission, core values, leadership team, and advisors.',
          icon: Award,
          href: '/company'
        },
        {
          title: 'Privacy Policy',
          desc: 'Review our data protection standards, compliance metrics, and user privacy rights.',
          icon: ShieldCheck,
          href: '/privacy'
        },
        {
          title: 'Terms of Use',
          desc: 'Read the general terms, conditions of service, and user licensing parameters.',
          icon: FileText,
          href: '/terms'
        },
        {
          title: 'Cookie Policy',
          desc: 'Learn how we manage session storage, cookies, and local preferences.',
          icon: Database,
          href: '/cookies'
        }
      ],
      featured: {
        title: 'Valued Partnerships',
        desc: 'Collaborate with leading life science teams, including Microsoft, Cura Quantis, and GenQuantaa Robotics.',
        image: '/Dr. Srimadhurmayi Poluri.png',
        href: '/company',
        linkLabel: 'Read Success Stories',
        objectFit: 'contain'
      }
    },
    businesses: {
      category: 'Our Businesses',
      title: 'GenQuantaa Ecosystem',
      desc: 'Explore the different divisions, subsidiaries, and platforms under GenQuantaa.',
      href: '/home',
      discoverLabel: 'Explore All',
      items: [
        {
          title: 'Academy',
          desc: 'GenQuantaa educational initiatives and learning programs.',
          icon: BookOpen,
          href: 'https://academy.genquantis.com/#home'
        },
        {
          title: 'Healthcare',
          desc: 'CuraQuantis healthcare solutions and clinical applications.',
          icon: Activity,
          href: 'https://curaquantis.com/'
        },
        {
          title: 'Quantum',
          desc: 'Quantum computing and advanced algorithms research.',
          icon: Cpu,
          href: 'https://genquantis.com/'
        },
        {
          title: 'Life Science',
          desc: 'Life Sciences platform and drug discovery solutions.',
          icon: FlaskConical,
          href: '/home'
        }
      ],
      featured: {
        title: 'Enterprise Innovation',
        desc: 'Bridging the gap between cutting-edge technology and impactful life science applications.',
        image: '/screenshots/dashboard.png',
        href: '/home',
        linkLabel: 'Learn More'
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 w-full z-50 shadow-sm border-b border-slate-100 bg-white">
      {/* Top Banner Marquee */}
      <div className="bg-[#0b1120] text-white py-1.5 text-xs sm:text-sm font-semibold tracking-wide overflow-hidden flex">
        <div className="animate-marquee flex whitespace-nowrap w-max">
          <span className="mx-8">Accelerating Life Sciences Innovation with AI-Powered Platforms</span>
          <span className="mx-8">Accelerating Life Sciences Innovation with AI-Powered Platforms</span>
          <span className="mx-8">Accelerating Life Sciences Innovation with AI-Powered Platforms</span>
          <span className="mx-8">Accelerating Life Sciences Innovation with AI-Powered Platforms</span>
          <span className="mx-8">Accelerating Life Sciences Innovation with AI-Powered Platforms</span>
          {/* Duplicate set for seamless looping */}
          <span className="mx-8">Accelerating Life Sciences Innovation with AI-Powered Platforms</span>
          <span className="mx-8">Accelerating Life Sciences Innovation with AI-Powered Platforms</span>
          <span className="mx-8">Accelerating Life Sciences Innovation with AI-Powered Platforms</span>
          <span className="mx-8">Accelerating Life Sciences Innovation with AI-Powered Platforms</span>
          <span className="mx-8">Accelerating Life Sciences Innovation with AI-Powered Platforms</span>
        </div>
      </div>
      
      {/* Navigation Bar */}
      <header className="w-full bg-white py-4 px-4 sm:px-8 flex items-center justify-between relative">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link to="/discovery-solution" className="flex items-center group cursor-pointer shrink-0">
            <img src="/logo.png" alt="GENQUANTAA Logo" className="h-12 sm:h-14 w-auto object-contain" />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {/* Product Link */}
            <div className="py-2" onMouseEnter={() => handleMouseEnter('product')} onMouseLeave={handleMouseLeave}>
              <Link
                to="/home"
                className={`text-sm font-semibold transition-colors relative py-1 ${
                  isPlatformPath || hoveredLink === 'product'
                    ? 'text-[#0f269a] font-bold border-b-2 border-[#0f269a] pb-1'
                    : 'text-slate-600 hover:text-[#0f269a]'
                }`}
              >
                Life Science
              </Link>
            </div>

            {/* Solutions Link */}
            <div className="py-2" onMouseEnter={() => handleMouseEnter('solutions')} onMouseLeave={handleMouseLeave}>
              <Link
                to="/home#our-solutions"
                className={`text-sm font-semibold transition-colors relative py-1 ${
                  (isSolutionsPath || location.pathname === '/discovery-solution' || location.pathname === '/chemistry-solution' || location.pathname === '/gpt-solutions' || hoveredLink === 'solutions')
                    ? 'text-[#0f269a] font-bold border-b-2 border-[#0f269a] pb-1'
                    : 'text-slate-600 hover:text-[#0f269a]'
                }`}
              >
                Solutions
              </Link>
            </div>

            {/* Software Link (Not Clickable, Hoverable) */}
            <div className="py-2" onMouseEnter={() => handleMouseEnter('software')} onMouseLeave={handleMouseLeave}>
              <span
                className={`text-sm font-semibold transition-colors relative py-1 cursor-default ${
                  (isChemistryPath || isGptPath || isDigitalTwinPath || hoveredLink === 'software')
                    ? 'text-[#0f269a] font-bold border-b-2 border-[#0f269a] pb-1'
                    : 'text-slate-600 hover:text-[#0f269a]'
                }`}
              >
                Software
              </span>
            </div>

            {/* Services Link */}
            <div className="py-2" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
              <Link
                to="/services"
                className={`text-sm font-semibold transition-colors relative py-1 ${
                  isServicesPath || hoveredLink === 'services'
                    ? 'text-[#0f269a] font-bold border-b-2 border-[#0f269a] pb-1'
                    : 'text-slate-600 hover:text-[#0f269a]'
                }`}
              >
                Services
              </Link>
            </div>



            {/* Company Link */}
            <div className="py-2" onMouseEnter={() => handleMouseEnter('company')} onMouseLeave={handleMouseLeave}>
              <Link
                to="/company"
                className={`text-sm font-semibold transition-colors relative py-1 ${
                  isCompanyPath || hoveredLink === 'company'
                    ? 'text-[#0f269a] font-bold border-b-2 border-[#0f269a] pb-1'
                    : 'text-slate-600 hover:text-[#0f269a]'
                }`}
              >
                Company
              </Link>
            </div>

            {/* Additional Links */}
            <div className="flex items-center gap-6 ml-2">
              {/* Businesses Link */}
              <div className="py-2" onMouseEnter={() => handleMouseEnter('businesses')} onMouseLeave={handleMouseLeave}>
                <span
                  className={`text-sm font-semibold transition-colors relative py-1 cursor-default ${
                    hoveredLink === 'businesses'
                      ? 'text-[#0f269a] font-bold border-b-2 border-[#0f269a] pb-1'
                      : 'text-slate-600 hover:text-[#0f269a]'
                  }`}
                >
                  Businesses
                </span>
              </div>
              <Link to="/discovery" className="text-sm font-semibold text-slate-600 hover:text-[#0f269a] transition-colors">
                Explore Discovery
              </Link>
              <Link to="/company#demo" className="text-sm font-semibold text-[#0f269a] hover:text-[#0a1a72] transition-colors">
                Request Demo
              </Link>
            </div>
          </nav>
        </div>

        {/* Right Side Action Links */}
        <div className="hidden lg:flex items-center gap-6 pr-4">
          <a href="https://www.genesysquantis.com/templates/login.html" className="px-5 py-2 rounded-xl bg-[#0f269a] hover:bg-[#0a1a72] text-white text-sm font-semibold shadow-sm transition-all transform hover:-translate-y-0.5">
            Sign Up
          </a>
        </div>



        {/* Mobile menu button (hamburger menu) */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full text-slate-600 hover:text-[#0f269a] hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Render Mega Menu */}
        {hoveredLink && menuConfigs[hoveredLink] && (() => {
          if (hoveredLink === 'solutions') {
            return (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 w-[92vw] max-w-6xl bg-[#0b1424] text-white border border-slate-800/80 shadow-[0_25px_60px_rgba(0,0,0,0.5)] z-50 animate-fadeIn hidden lg:block rounded-2xl overflow-hidden mt-2"
                onMouseEnter={() => handleMouseEnter('solutions')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-full grid grid-cols-12 text-left">
                  {/* Left Sidebar (Tabs) */}
                  <div className="col-span-3 bg-[#070d18]/60 border-r border-slate-800/80 flex flex-col py-4">
                    {[
                      { id: 'rnd', label: 'R&D' },
                      { id: 'clinical', label: 'Clinical' },
                      { id: 'quality', label: 'Quality' },
                      { id: 'data', label: 'Data' },
                      { id: 'market-access', label: 'Market Access & Commercial' }
                    ].map((tab) => (
                      <div
                        key={tab.id}
                        onMouseEnter={() => setActiveSolutionTab(tab.id as any)}
                        className={`px-6 py-3 cursor-pointer font-sans font-bold text-sm tracking-wide transition-all border-l-4 ${
                          activeSolutionTab === tab.id
                            ? 'bg-[#0f269a] text-white border-[#0f269a]'
                            : 'text-slate-400 hover:text-white hover:bg-[#0f269a]/20 border-transparent'
                        }`}
                      >
                        {tab.label}
                      </div>
                    ))}
                  </div>

                  {/* Right Content Area */}
                  <div className="col-span-9 p-6 flex flex-col justify-between">
                    <div>
                      {/* Cloud Header & Title */}
                      <span className="text-[10px] font-extrabold text-[#00A878] uppercase tracking-wider font-mono">
                        {
                          {
                            clinical: 'GENQUANTAA DEVELOPMENT CLOUD',
                            quality: 'GENQUANTAA QUALITY CLOUD',
                            data: 'GENQUANTAA DATA CLOUD',
                            'market-access': 'GENQUANTAA COMMERCIAL CLOUD',
                            rnd: 'Discovery Platform For Biology'
                          }[activeSolutionTab]
                        }
                      </span>
                      <h3 className="text-xl font-bold text-white mt-2 mb-4 font-sans">
                        {
                          {
                            clinical: 'GenQuantaa Clinical Platform',
                            quality: 'GenQuantaa Quality Platform',
                            data: 'GenQuantaa Data Platform',
                            'market-access': 'GenQuantaa Market Access Platform',
                            rnd: 'Discovery Platform For Biology'
                          }[activeSolutionTab]
                        }
                      </h3>

                      {/* Columns Content */}
                      {activeSolutionTab === 'clinical' && (
                        <div className="grid grid-cols-2 gap-x-12">
                          <div>
                            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                              Life Sciences
                            </h4>
                            <div className="space-y-4">
                              {[
                                { title: 'Digital Twin', desc: 'Precision oncology segmentation, longitudinal RECIST tracking, and risk models', href: '/digital-twin', icon: Layers }
                              ].map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                  <Link
                                    key={idx}
                                    to={item.href}
                                    onClick={handleMouseLeave}
                                    className="group flex gap-3 hover:bg-slate-800/20 p-2.5 -m-2.5 rounded-xl transition-all"
                                  >
                                    <div className="shrink-0 w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 group-hover:bg-[#0f269a]/20 group-hover:text-blue-400 transition-colors">
                                      <Icon size={16} />
                                    </div>
                                    <div>
                                      <h5 className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                                        {item.title}
                                      </h5>
                                      <p className="text-[10px] text-slate-500 group-hover:text-slate-400 leading-normal mt-1 transition-colors">
                                        {item.desc}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}

                      {activeSolutionTab === 'quality' && (
                        <div className="grid grid-cols-2 gap-x-12">
                          {/* Left Column: Quality */}
                          <div>
                            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                              Quality
                            </h4>
                            <div className="space-y-4">
                              {[
                                { title: 'QMS', desc: 'Quality Management System for CAPA, audit trails, and compliance', href: '/discovery-solution', icon: ShieldCheck }
                              ].map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                  <Link
                                    key={idx}
                                    to={item.href}
                                    onClick={handleMouseLeave}
                                    className="group flex gap-3 hover:bg-slate-800/20 p-2.5 -m-2.5 rounded-xl transition-all"
                                  >
                                    <div className="shrink-0 w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 group-hover:bg-[#0f269a]/20 group-hover:text-blue-400 transition-colors">
                                      <Icon size={16} />
                                    </div>
                                    <div>
                                      <h5 className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                                        {item.title}
                                      </h5>
                                      <p className="text-[10px] text-slate-500 group-hover:text-slate-400 leading-normal mt-1 transition-colors">
                                        {item.desc}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>

                          {/* Right Column: Training */}
                          <div>
                            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                              Training
                            </h4>
                            <div className="space-y-4">
                              {[
                                { title: 'DMS', desc: 'Document Management System for version control and regulatory dossiers', href: '/discovery-solution', icon: FileText },
                                { title: 'TMS', desc: 'Training Management System for global teams and operations', href: '/discovery-solution', icon: Database },
                                { title: 'LMS', desc: 'Learning Management System for compliance programs and training courses', href: '/discovery-solution', icon: BookOpen }
                              ].map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                  <Link
                                    key={idx}
                                    to={item.href}
                                    onClick={handleMouseLeave}
                                    className="group flex gap-3 hover:bg-slate-800/20 p-2.5 -m-2.5 rounded-xl transition-all"
                                  >
                                    <div className="shrink-0 w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 group-hover:bg-[#0f269a]/20 group-hover:text-blue-400 transition-colors">
                                      <Icon size={16} />
                                    </div>
                                    <div>
                                      <h5 className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                                        {item.title}
                                      </h5>
                                      <p className="text-[10px] text-slate-500 group-hover:text-slate-400 leading-normal mt-1 transition-colors">
                                        {item.desc}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}

                      {activeSolutionTab === 'data' && (
                        <div className="grid grid-cols-2 gap-x-12">
                          <div>
                            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                              Services
                            </h4>
                            <div className="space-y-4">
                              {[
                               { title: 'Informatics & Data Analytics', desc: 'Next-generation computational engines, AI design, and custom workflow pipelines', href: '/services#services-1', icon: Cpu },
                                { title: 'Drug Development Services', desc: 'Strategic translation, safety toxicology, CMC formulation, and clinical pharmacology', href: '/services#services-2', icon: Compass }
                              ].map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                  <Link
                                    key={idx}
                                    to={item.href}
                                    onClick={handleMouseLeave}
                                    className="group flex gap-3 hover:bg-slate-800/20 p-2.5 -m-2.5 rounded-xl transition-all"
                                  >
                                    <div className="shrink-0 w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 group-hover:bg-[#0f269a]/20 group-hover:text-blue-400 transition-colors">
                                      <Icon size={16} />
                                    </div>
                                    <div>
                                      <h5 className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                                        {item.title}
                                      </h5>
                                      <p className="text-[10px] text-slate-500 group-hover:text-slate-400 leading-normal mt-1 transition-colors">
                                        {item.desc}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}

                      {activeSolutionTab === 'market-access' && (
                        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                          {[
                            { title: 'Franchise360™ + Command Center™', desc: 'Executive performance dashboard.', href: '/solutions', icon: BarChart },
                            { title: 'MarketMind™ + EngageAI™', desc: 'Marketing and engagement intelligence.', href: '/solutions', icon: Sparkles },
                            { title: 'SalesPilot™ + ForecastAI™', desc: 'Sales planning and forecasting.', href: '/solutions', icon: Target },
                            { title: 'AgentStudio™ + InsightLens™', desc: 'AI agents and business insights.', href: '/solutions', icon: Brain },
                            { title: 'InsightLens™ + ForecastAI™', desc: 'Analytics and predictive planning.', href: '/solutions', icon: Database },
                            { title: 'SalesPilot™ + Elevate™', desc: 'Sales intelligence and learning.', href: '/solutions', icon: BookOpen },
                            { title: 'Franchise360™ + Command Center™', desc: 'Commercial operations control tower.', href: '/solutions', icon: Layers }
                          ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={idx}
                                to={item.href}
                                onClick={handleMouseLeave}
                                className="group flex gap-3 hover:bg-slate-800/20 p-2.5 -m-2.5 rounded-xl transition-all"
                              >
                                <div className="shrink-0 w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 group-hover:bg-[#0f269a]/20 group-hover:text-blue-400 transition-colors">
                                  <Icon size={16} />
                                </div>
                                <div>
                                  <h5 className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                                    {item.title}
                                  </h5>
                                  <p className="text-[10px] text-slate-500 group-hover:text-slate-400 leading-normal mt-1 transition-colors">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      )}

                      {activeSolutionTab === 'rnd' && (
                        <div className="grid grid-cols-2 gap-x-12">
                          <div>
                            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                              Research & Development
                            </h4>
                            <div className="space-y-4">
                              {[
                                { title: 'Drug Discovery', desc: 'Unified data ingestion & scientific compute engine for automated genomics', href: '/discovery', icon: Compass },
                                { title: 'GQ GPT', desc: 'Senescence aging clocks, synthetic omics generators, and simulated screenings', href: '/gpt', icon: Brain },
                                { title: 'GQ Chemistry', desc: 'AI-driven synthesis pathway planning and ligand binding prediction', href: '/chemistry', icon: FlaskConical }
                              ].map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                  <Link
                                    key={idx}
                                    to={item.href}
                                    onClick={handleMouseLeave}
                                    className="group flex gap-3 hover:bg-slate-800/20 p-2.5 -m-2.5 rounded-xl transition-all"
                                  >
                                    <div className="shrink-0 w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 group-hover:bg-[#0f269a]/20 group-hover:text-blue-400 transition-colors">
                                      <Icon size={16} />
                                    </div>
                                    <div>
                                      <h5 className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                                        {item.title}
                                      </h5>
                                      <p className="text-[10px] text-slate-500 group-hover:text-slate-400 leading-normal mt-1 transition-colors">
                                        {item.desc}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          const menuData = menuConfigs[hoveredLink];
          return (
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 w-[92vw] max-w-6xl bg-[#0b1424] text-white border border-slate-800/80 shadow-[0_25px_60px_rgba(0,0,0,0.5)] z-50 animate-fadeIn hidden lg:block rounded-2xl overflow-hidden mt-2"
              onMouseEnter={() => handleMouseEnter(hoveredLink)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-full grid grid-cols-12 text-left">
                {/* Left Column */}
                <div className="col-span-3 bg-[#070d18]/50 p-6 border-r border-slate-800/60 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold text-[#00A878] uppercase tracking-wider font-mono">
                      {menuData.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2 mb-4 font-sans">
                      {menuData.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-sans font-normal">
                      {menuData.desc}
                    </p>
                  </div>
                  <Link
                    to={menuData.href}
                    className="group text-xs font-semibold text-[#00A878] hover:text-[#008F66] flex items-center gap-1.5 mt-8 transition-colors self-start"
                  >
                    {menuData.discoverLabel}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Center Column */}
                <div className="col-span-6 p-6 grid grid-cols-2 gap-x-6 gap-y-4">
                  {menuData.items.map((item: any, idx: number) => {
                    const IconComponent = item.icon;
                    const href = item.href || menuData.href;
                    const isExternal = href.startsWith('http');

                    const innerContent = (
                      <>
                        {IconComponent && (
                          <div className="shrink-0 w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 group-hover:bg-[#0f269a]/20 group-hover:text-blue-400 transition-colors">
                            <IconComponent size={16} />
                          </div>
                        )}
                        <div>
                          <h4 className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-[10px] text-slate-500 group-hover:text-slate-400 leading-normal mt-1 transition-colors">
                            {item.desc}
                          </p>
                        </div>
                      </>
                    );

                    return isExternal ? (
                      <a
                        key={idx}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex gap-3 hover:bg-slate-800/20 p-2.5 -m-2.5 rounded-xl transition-all"
                      >
                        {innerContent}
                      </a>
                    ) : (
                      <Link
                        key={idx}
                        to={href}
                        className="group flex gap-3 hover:bg-slate-800/20 p-2.5 -m-2.5 rounded-xl transition-all"
                      >
                        {innerContent}
                      </Link>
                    );
                  })}
                </div>

                {/* Right Column */}
                <div className="col-span-3 bg-[#070d18]/30 p-6 flex flex-col justify-between border-l border-slate-800/60">
                  {menuData.bySolution ? (
                    <div className="space-y-4">
                      <span className="text-[10px] font-extrabold text-blue-400 uppercase tracking-wider font-mono">
                        {menuData.bySolution.title}
                      </span>
                      <ul className="space-y-2 mt-4">
                        {menuData.bySolution.items.map((solItem: any, idx: number) => (
                          <li key={idx}>
                            <Link
                              to={solItem.href || '#'}
                              className="text-xs text-slate-400 hover:text-blue-400 transition-colors font-medium block py-0.5"
                            >
                              {solItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={menuData.bySolution.href || '#'}
                        className="group text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 pt-6 transition-colors self-start"
                      >
                        {menuData.bySolution.linkLabel || 'View software'}
                        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-4">
                        <span className="text-[10px] font-extrabold text-blue-400 uppercase tracking-wider font-mono">
                          Featured
                        </span>
                        <div className="overflow-hidden rounded-xl border border-slate-800 shadow-lg aspect-video relative group/img bg-slate-900 flex items-center justify-center">
                          <img
                            src={menuData.featured.image}
                            alt={menuData.featured.title}
                            className={`w-full h-full ${
                              menuData.featured.objectFit === 'contain' ? 'object-contain p-2' : 'object-cover'
                            } group-hover/img:scale-105 transition-transform duration-500`}
                          />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white">
                            {menuData.featured.title}
                          </h4>
                          <p className="text-[10px] text-slate-400 leading-normal mt-1">
                            {menuData.featured.desc}
                          </p>
                        </div>
                      </div>
                      <Link
                        to={menuData.featured.href}
                        className="group text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-6 transition-colors self-start"
                      >
                        {menuData.featured.linkLabel}
                        <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })()}
      </header>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white shadow-lg">
          <nav className="flex flex-col py-4 px-6 gap-2">
            <Link
              to="/home"
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-semibold py-2 px-3 rounded-lg transition-all ${isPlatformPath
                  ? 'text-[#0f269a] bg-[#0f269a]/5 font-bold'
                  : 'text-slate-600 hover:text-[#0f269a] hover:bg-slate-50'
                }`}
            >
              Life Science
            </Link>
            <div className="px-3 pt-3 pb-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
              Solutions
            </div>
            <Link
              to="/discovery-solution"
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-semibold py-2 pl-6 pr-3 rounded-lg transition-all ${location.pathname === '/discovery-solution'
                  ? 'text-[#0f269a] bg-[#0f269a]/5 font-bold'
                  : 'text-slate-600 hover:text-[#0f269a] hover:bg-slate-50'
                }`}
            >
              Discovery Solution
            </Link>
            <Link
              to="/chemistry-solution"
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-semibold py-2 pl-6 pr-3 rounded-lg transition-all ${location.pathname === '/chemistry-solution'
                  ? 'text-[#0f269a] bg-[#0f269a]/5 font-bold'
                  : 'text-slate-600 hover:text-[#0f269a] hover:bg-slate-50'
                }`}
            >
              GQ Chemistry Solution
            </Link>
            <Link
              to="/gpt-solutions"
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-semibold py-2 pl-6 pr-3 rounded-lg transition-all ${location.pathname === '/gpt-solutions'
                  ? 'text-[#0f269a] bg-[#0f269a]/5 font-bold'
                  : 'text-slate-600 hover:text-[#0f269a] hover:bg-slate-50'
                }`}
            >
              GQ GPT Solutions
            </Link>
            <div className="px-3 pt-3 pb-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
              Software
            </div>
            <Link
              to="/chemistry"
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-semibold py-2 pl-6 pr-3 rounded-lg transition-all ${isChemistryPath
                  ? 'text-[#0f269a] bg-[#0f269a]/5 font-bold'
                  : 'text-slate-600 hover:text-[#0f269a] hover:bg-slate-50'
                }`}
            >
              GQ Chemistry
            </Link>
            <Link
              to="/gpt"
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-semibold py-2 pl-6 pr-3 rounded-lg transition-all ${isGptPath
                  ? 'text-[#0f269a] bg-[#0f269a]/5 font-bold'
                  : 'text-slate-600 hover:text-[#0f269a] hover:bg-slate-50'
                }`}
            >
              GQ GPT
            </Link>
            <Link
              to="/digital-twin"
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-semibold py-2 pl-6 pr-3 rounded-lg transition-all ${isDigitalTwinPath
                  ? 'text-[#0f269a] bg-[#0f269a]/5 font-bold'
                  : 'text-slate-600 hover:text-[#0f269a] hover:bg-slate-50'
                }`}
            >
              Digital Twin
            </Link>
            <Link
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-semibold py-2 px-3 rounded-lg transition-all ${isServicesPath
                  ? 'text-[#0f269a] bg-[#0f269a]/5 font-bold'
                  : 'text-slate-600 hover:text-[#0f269a] hover:bg-slate-50'
                }`}
            >
              Services
            </Link>

            <Link
              to="/company"
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-semibold py-2 px-3 rounded-lg transition-all ${isCompanyPath
                  ? 'text-[#0f269a] bg-[#0f269a]/5 font-bold'
                  : 'text-slate-600 hover:text-[#0f269a] hover:bg-slate-50'
                }`}
            >
              Company
            </Link>


          </nav>
        </div>
      )}
    </div>
  );
}
