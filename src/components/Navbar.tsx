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
  Award
} from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const location = useLocation();
  const isSolutionsPath = location.pathname === '/solutions';
  const isChemistryPath = location.pathname === '/chemistry';
  const isGptPath = location.pathname === '/gpt';
  const isDigitalTwinPath = location.pathname === '/digital-twin';
  const isDrugDevelopmentPath = location.pathname === '/drug-development';
  const isServicesPath = location.pathname === '/services';
  const isPlatformPath = location.pathname === '/platform';

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
      category: 'Product',
      title: 'Genquantaa Platform',
      desc: 'A unified biological data & compute engine engineered to automate, scale, and trace genomic and molecular R&D workflows.',
      href: '/platform',
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
        href: '/platform',
        linkLabel: 'Open Dashboard'
      }
    },
    solutions: {
      category: 'Solutions',
      title: 'Enterprise Portals',
      desc: 'Scalable bioinformatics platforms and secure data infrastructure designed for biopharma partners, diagnostic labs, and academic researchers.',
      href: '/solutions',
      discoverLabel: 'View Solutions',
      items: [
        {
          title: 'For Solution Providers',
          desc: 'Deploy customized, fully-branded analysis portals integrated with hardware.',
          icon: Compass
        },
        {
          title: 'For R&D Teams',
          desc: 'Enable collaboration between dry-labs and wet-lab experimental teams.',
          icon: Layers
        },
        {
          title: 'Enterprise Governance',
          desc: 'Robust HIPAA and GDPR compliance with fine-grained access control.',
          icon: ShieldCheck
        },
        {
          title: 'Instrument & Kit Analysis',
          desc: 'A single pane of glass for real-time instrument and kit validation assays.',
          icon: BarChart
        }
      ],
      featured: {
        title: 'Valued Partnerships',
        desc: 'Collaborate with leading life science teams, including Microsoft, Cura Quantis, and GenQuantaa Robotics.',
        image: '/scientist_portrait.png',
        href: '/solutions',
        linkLabel: 'See Client Success'
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
    'drug-development': {
      category: 'Drug Development Service',
      title: 'Model-Informed Development',
      desc: 'Model-informed drug development, GLP toxicology protocols, DMPK calculations, and global regulatory filing strategy.',
      href: '/drug-development',
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
        href: '/drug-development',
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
          title: 'Compute & AI Services',
          desc: 'Genomics workflow automation, generative chemistry design, and oncology twins.',
          icon: Cpu
        },
        {
          title: 'Drug Development Consulting',
          desc: 'Strategic early translation, safety toxicology, clinical pharmacology, and CMC formulation.',
          icon: Compass
        },
        {
          title: 'Regulatory Affairs Strategy',
          desc: 'Global agency meeting support and eCTD submission packages compilation.',
          icon: ShieldCheck
        },
        {
          title: 'Due Diligence & Evaluation',
          desc: 'Independent asset risk profiling, scorecards, and start-up valuations.',
          icon: Award
        }
      ],
      featured: {
        title: 'Integrated Scoping Inquiry',
        desc: 'Submit your requirements and schedule an in-depth technical scoping call with our coordinators.',
        image: '/screenshots/validate_wetlab.png',
        href: '/services',
        linkLabel: 'Contact Scoping Team'
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 w-full z-50 shadow-sm border-b border-slate-100 bg-white">
      {/* Top Gradient Announcement Bar */}
      <div className="bg-gradient-to-r from-[#000428] via-[#004e92] to-[#000428] text-white text-[11px] font-medium py-2.5 px-4 text-center border-b border-white/10 relative z-50 flex items-center justify-center gap-6 overflow-hidden">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="font-bold uppercase tracking-wider bg-white/15 px-1.5 py-0.5 rounded text-[9px]">Takara Bio</span>
          <span>New webinar on spatial analysis of Seeker™ and Trekker™ Datasets</span>
        </div>
        <span className="text-white/30 hidden md:inline">|</span>
        <div className="items-center gap-1.5 shrink-0 hidden md:flex">
          <span className="font-bold uppercase tracking-wider bg-white/15 px-1.5 py-0.5 rounded text-[9px]">NGS Instrument Landscape</span>
          <span>A comprehensive database of the NGS Machines and products available today</span>
        </div>
        <span className="text-white/30 hidden lg:inline">|</span>
        <div className="items-center gap-1.5 shrink-0 hidden lg:flex">
          <span className="font-bold uppercase tracking-wider bg-white/15 px-1.5 py-0.5 rounded text-[9px]">GenQuantaa x Takara Bio</span>
          <span>New webinar on spatial analysis</span>
        </div>
      </div>

      {/* Navigation Bar */}
      <header className="w-full bg-white py-4 px-4 sm:px-8 flex items-center justify-between relative">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link to="/home" className="flex items-center group cursor-pointer w-[185px] shrink-0">
            <img src="/logo.png" alt="GENQUANTAA Logo" className="h-12 w-auto shrink-0 object-contain scale-[2.2] origin-left" />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {/* Product Link */}
            <div className="py-2" onMouseEnter={() => handleMouseEnter('product')} onMouseLeave={handleMouseLeave}>
              <Link
                to="/platform"
                className={`text-sm font-semibold transition-colors relative py-1 ${isPlatformPath ? 'text-[#0f269a] font-bold border-b-2 border-[#0f269a] pb-1' : 'text-slate-600 hover:text-[#0f269a]'
                  }`}
              >
                Product
              </Link>
            </div>

            {/* Solutions Link */}
            <div className="py-2" onMouseEnter={() => handleMouseEnter('solutions')} onMouseLeave={handleMouseLeave}>
              <Link
                to="/solutions"
                className={`text-sm font-semibold transition-colors relative py-1 ${isSolutionsPath ? 'text-[#0f269a] font-bold border-b-2 border-[#0f269a] pb-1' : 'text-slate-600 hover:text-[#0f269a]'
                  }`}
              >
                Solutions
              </Link>
            </div>

            {/* Chemistry Link */}
            <div className="py-2" onMouseEnter={() => handleMouseEnter('chemistry')} onMouseLeave={handleMouseLeave}>
              <Link
                to="/chemistry"
                className={`text-sm font-semibold transition-colors relative py-1 ${isChemistryPath ? 'text-[#0f269a] font-bold border-b-2 border-[#0f269a] pb-1' : 'text-slate-600 hover:text-[#0f269a]'
                  }`}
              >
                GQ Chemistry
              </Link>
            </div>

            {/* GPT Link */}
            <div className="py-2" onMouseEnter={() => handleMouseEnter('gpt')} onMouseLeave={handleMouseLeave}>
              <Link
                to="/gpt"
                className={`text-sm font-semibold transition-colors relative py-1 ${isGptPath ? 'text-[#0f269a] font-bold border-b-2 border-[#0f269a] pb-1' : 'text-slate-600 hover:text-[#0f269a]'
                  }`}
              >
                GQ GPT
              </Link>
            </div>

            {/* Digital Twin Link */}
            <div className="py-2" onMouseEnter={() => handleMouseEnter('digital-twin')} onMouseLeave={handleMouseLeave}>
              <Link
                to="/digital-twin"
                className={`text-sm font-semibold transition-colors relative py-1 ${isDigitalTwinPath ? 'text-[#0f269a] font-bold border-b-2 border-[#0f269a] pb-1' : 'text-slate-600 hover:text-[#0f269a]'
                  }`}
              >
                Digital Twin
              </Link>
            </div>

            {/* Services Link */}
            <div className="py-2" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
              <Link
                to="/services"
                className={`text-sm font-semibold transition-colors relative py-1 ${isServicesPath ? 'text-[#0f269a] font-bold border-b-2 border-[#0f269a] pb-1' : 'text-slate-600 hover:text-[#0f269a]'
                  }`}
              >
                Services
              </Link>
            </div>

            {/* Drug Development Link */}
            <div className="py-2" onMouseEnter={() => handleMouseEnter('drug-development')} onMouseLeave={handleMouseLeave}>
              <Link
                to="/drug-development"
                className={`text-sm font-semibold transition-colors relative py-1 ${isDrugDevelopmentPath ? 'text-[#0f269a] font-bold border-b-2 border-[#0f269a] pb-1' : 'text-slate-600 hover:text-[#0f269a]'
                  }`}
              >
                Drug Development Service
              </Link>
            </div>
          </nav>
        </div>

        {/* Desktop login / signup */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="https://www.genesysquantis.com/templates/login.html" className="text-sm font-semibold text-slate-600 hover:text-[#0f269a] transition-colors">Log In</a>
          <a
            href="https://www.genesysquantis.com/templates/login.html"
            className="px-6 py-2.5 rounded-full text-sm font-bold text-[#0f269a] border border-[#0f269a] hover:bg-[#0f269a]/5 active:scale-98 transition-all"
          >
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
          const menuData = menuConfigs[hoveredLink];
          return (
            <div
              className="absolute top-full left-0 right-0 w-full bg-[#0b1424] text-white border-t border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-50 animate-fadeIn hidden lg:block"
              onMouseEnter={() => handleMouseEnter(hoveredLink)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-7xl mx-auto w-full grid grid-cols-12 text-left">
                {/* Left Column */}
                <div className="col-span-3 bg-[#070d18]/50 p-8 border-r border-slate-800/60 flex flex-col justify-between">
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
                <div className="col-span-6 p-8 grid grid-cols-2 gap-x-8 gap-y-6">
                  {menuData.items.map((item: any, idx: number) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={idx}
                        to={menuData.href}
                        className="group flex gap-3 hover:bg-slate-800/20 p-2.5 -m-2.5 rounded-xl transition-all"
                      >
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
                      </Link>
                    );
                  })}
                </div>

                {/* Right Column */}
                <div className="col-span-3 bg-[#070d18]/30 p-8 flex flex-col justify-between border-l border-slate-800/60">
                  <div className="space-y-4">
                    <span className="text-[10px] font-extrabold text-blue-400 uppercase tracking-wider font-mono">
                      Featured
                    </span>
                    <div className="overflow-hidden rounded-xl border border-slate-800 shadow-lg aspect-video relative group/img bg-slate-900 flex items-center justify-center">
                      <img
                        src={menuData.featured.image}
                        alt={menuData.featured.title}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
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
              to="/platform"
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-semibold py-2 px-3 rounded-lg transition-all ${isPlatformPath
                  ? 'text-[#0f269a] bg-[#0f269a]/5 font-bold'
                  : 'text-slate-600 hover:text-[#0f269a] hover:bg-slate-50'
                }`}
            >
              Product
            </Link>
            <Link
              to="/solutions"
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-semibold py-2 px-3 rounded-lg transition-all ${isSolutionsPath
                  ? 'text-[#0f269a] bg-[#0f269a]/5 font-bold'
                  : 'text-slate-600 hover:text-[#0f269a] hover:bg-slate-50'
                }`}
            >
              Solutions
            </Link>
            <Link
              to="/chemistry"
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-semibold py-2 px-3 rounded-lg transition-all ${isChemistryPath
                  ? 'text-[#0f269a] bg-[#0f269a]/5 font-bold'
                  : 'text-slate-600 hover:text-[#0f269a] hover:bg-slate-50'
                }`}
            >
              GQ Chemistry
            </Link>
            <Link
              to="/gpt"
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-semibold py-2 px-3 rounded-lg transition-all ${isGptPath
                  ? 'text-[#0f269a] bg-[#0f269a]/5 font-bold'
                  : 'text-slate-600 hover:text-[#0f269a] hover:bg-slate-50'
                }`}
            >
              GQ GPT
            </Link>
            <Link
              to="/digital-twin"
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-semibold py-2 px-3 rounded-lg transition-all ${isDigitalTwinPath
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
              to="/drug-development"
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-semibold py-2 px-3 rounded-lg transition-all ${isDrugDevelopmentPath
                  ? 'text-[#0f269a] bg-[#0f269a]/5 font-bold'
                  : 'text-slate-600 hover:text-[#0f269a] hover:bg-slate-50'
                }`}
            >
              Drug Development Service
            </Link>

            <div className="h-px bg-slate-100 my-2" />

            <div className="flex flex-col gap-2 px-3">
              <a
                href="https://www.genesysquantis.com/templates/login.html"
                onClick={() => setIsMenuOpen(false)}
                className="text-center text-sm font-semibold text-slate-600 hover:text-[#0f269a] py-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Log In
              </a>
              <a
                href="https://www.genesysquantis.com/templates/login.html"
                onClick={() => setIsMenuOpen(false)}
                className="text-center px-6 py-2.5 rounded-full text-sm font-bold text-[#0f269a] border border-[#0f269a] hover:bg-[#0f269a]/5 active:scale-98 transition-all"
              >
                Sign Up
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
