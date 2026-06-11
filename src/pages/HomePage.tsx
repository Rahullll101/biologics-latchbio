import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import CountUp from 'react-countup'; // removed due to compatibility issue
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  Brain,
  BarChart3,
  Target,
  ShieldCheck,
  Users,
  Globe,
  Award,
  CheckCircle,
  Send,
  Quote,
  Briefcase,
  TrendingUp,
  Zap,
  Lock,
  Cpu,
  Workflow,
  HeartHandshake,
} from 'lucide-react';

// ─── SECTION 4: Phase data ───────────────────────────────────────────────────
const phases = [
  {
    id: 'discovery',
    label: 'Discovery',
    category: 'Target & Lead Generation',
    headline: 'Identify the Right Target. Accelerate Lead Generation.',
    description:
      'GenQuantaa\'s AI-powered target identification platform combines multi-omic data integration, molecular docking, and generative chemistry to surface high-confidence drug candidates from day one.',
    cta: 'Explore Discovery Tools',
    ctaHref: '/chemistry',
    secondaryCta: 'View Case Study',
    links: ['Target Explorer', 'Virtual Screening', 'Lead Optimisation'],
    image: '/sticky_slide.png',
    color: '#3b82f6',
    accent: 'from-blue-900/60 to-blue-950/80',
  },
  {
    id: 'preclinical',
    label: 'Preclinical',
    category: 'Safety & DMPK',
    headline: 'De-Risk Assets Before They Enter the Clinic.',
    description:
      'Leverage PBPK modelling, ADMET prediction, and GLP toxicology protocol design to build a comprehensive safety profile — and a compelling IND package for regulators.',
    cta: 'View Preclinical Services',
    ctaHref: '/drug-development',
    secondaryCta: 'Download Factsheet',
    links: ['ADMET Intelligence', 'PBPK Modelling', 'GLP Toxicology'],
    image: '/sticky_slide.png',
    color: '#10b981',
    accent: 'from-emerald-900/60 to-emerald-950/80',
  },
  {
    id: 'early-clinical',
    label: 'Early Clinical',
    category: 'Phase I / II Design',
    headline: 'Design Smarter Trials. Optimise First-in-Human Dose.',
    description:
      'Apply model-informed drug development to compress Phase I/II timelines. Our clinical pharmacology team uses PopPK, exposure-response, and adaptive design to eliminate guesswork.',
    cta: 'Explore Clinical Modelling',
    ctaHref: '/digital-twin',
    secondaryCta: 'Learn About MIDD',
    links: ['PopPK / NCA', 'Dose Optimisation', 'Adaptive Design'],
    image: '/sticky_slide.png',
    color: '#8b5cf6',
    accent: 'from-purple-900/60 to-purple-950/80',
  },
  {
    id: 'late-clinical',
    label: 'Late Clinical',
    category: 'Phase III & Submission',
    headline: 'Power Your Pivotal Programme with Data-Driven Confidence.',
    description:
      'From Phase III statistical modelling to integrated clinical study reports, our regulatory experts and biosimulation scientists work in lockstep to deliver submission-ready evidence packages.',
    cta: 'Plan Your Phase III',
    ctaHref: '/drug-development',
    secondaryCta: 'View Submission Services',
    links: ['QSP Modelling', 'E2R Analysis', 'Regulatory Writing'],
    image: '/sticky_slide.png',
    color: '#f59e0b',
    accent: 'from-amber-900/60 to-amber-950/80',
  },
  {
    id: 'regulatory',
    label: 'Regulatory',
    category: 'FDA · EMA · PMDA',
    headline: 'Navigate Complex Filings with Expert Precision.',
    description:
      'Our global regulatory science team provides strategic consulting, benefit-risk framework development, and submission writing for IND, NDA, MAA, and JNDA across 62 countries.',
    cta: 'Explore Regulatory Science',
    ctaHref: '/drug-development',
    secondaryCta: 'View Global Reach',
    links: ['IND / NDA Strategy', 'EMA / PMDA Filings', 'Benefit-Risk'],
    image: '/sticky_slide.png',
    color: '#3b82f6',
    accent: 'from-blue-900/60 to-blue-950/80',
  },
  {
    id: 'market-access',
    label: 'Market Access',
    category: 'HTA & Value Evidence',
    headline: 'Demonstrate Value to Payers and HTA Bodies.',
    description:
      'Build robust health economics models, real-world evidence strategies, and value dossiers that persuade payers in the EU5, US, Japan, and emerging markets.',
    cta: 'Explore Market Access',
    ctaHref: '/solutions',
    secondaryCta: 'See HEOR Capabilities',
    links: ['HEOR Models', 'Real-World Evidence', 'Value Dossiers'],
    image: '/sticky_slide.png',
    color: '#06b6d4',
    accent: 'from-cyan-900/60 to-cyan-950/80',
  },
  {
    id: 'strategic',
    label: 'Strategic',
    category: 'Leadership & Consulting',
    headline: 'Strategic Intelligence for Executive Decision-Making.',
    description:
      'From portfolio prioritisation to due diligence and licensing strategy, GenQuantaa\'s senior advisors bring 30+ years of pharma leadership to guide your most critical business decisions.',
    cta: 'Talk to an Advisor',
    ctaHref: '/solutions',
    secondaryCta: 'View Consulting Services',
    links: ['Due Diligence', 'Portfolio Strategy', 'Licensing & BD'],
    image: '/sticky_slide.png',
    color: '#a855f7',
    accent: 'from-purple-900/60 to-violet-950/80',
  },
];

// ─── SECTION 2: Insights data ────────────────────────────────────────────────
const insights = [
  {
    tag: 'Webinar',
    date: 'June 18, 2026',
    title: 'Advancing PBPK Modelling for Paediatric Oncology Drug Development',
    excerpt: 'Explore how population-based physiological modelling is reshaping paediatric dosing strategies and bridging study design across age cohorts.',
    image: '/screenshots/target_explorer_info.png',
    href: '/drug-development',
    tagColor: '#3b82f6',
  },
  {
    tag: 'White Paper',
    date: 'May 30, 2026',
    title: 'Generative AI in Lead Optimisation: A 2026 Landscape Report',
    excerpt: 'A comprehensive review of transformer and diffusion models in drug design, featuring case studies from oncology and rare disease programs.',
    image: '/screenshots/lead_optimization_results.png',
    href: '/chemistry',
    tagColor: '#8b5cf6',
  },
  {
    tag: 'Case Study',
    date: 'May 12, 2026',
    title: 'Digital Twin Reduces Phase III Clinical Trial Costs by 35%',
    excerpt: 'How a precision oncology biotech leveraged GenQuantaa\'s patient digital twin to streamline enrollment and reduce safety monitoring burden.',
    image: '/screenshots/molecular_docking_results.png',
    href: '/digital-twin',
    tagColor: '#10b981',
  },
];

// ─── SECTION 3: Capabilities ────────────────────────────────────────────────
const capabilities = [
  {
    icon: Brain,
    title: 'Biosimulation & MIDD',
    desc: 'PBPK, PopPK/PD, and QSP models accelerating dose selection, trial design, and label negotiation.',
    href: '/digital-twin',
    color: '#3b82f6',
  },
  {
    icon: FlaskConical,
    title: 'Regulatory Science',
    desc: 'Global regulatory strategy, submission writing, and benefit-risk consulting for FDA, EMA, and PMDA.',
    href: '/drug-development',
    color: '#8b5cf6',
  },
  {
    icon: Target,
    title: 'Drug Discovery AI',
    desc: 'Target identification, virtual screening, and generative chemistry AI to accelerate lead generation.',
    href: '/chemistry',
    color: '#10b981',
  },
  {
    icon: BarChart3,
    title: 'Market Access & HEOR',
    desc: 'Health economics models, RWE strategy, and value dossiers for payers and HTA bodies worldwide.',
    href: '/solutions',
    color: '#f59e0b',
  },
];

// ─── SECTION 6: Case studies ─────────────────────────────────────────────────
const caseStudies = [
  {
    company: 'Biohaven',
    tag: 'Rare Disease · Phase III',
    title: 'PBPK-Guided Dose Bridging Supports Paediatric NDA Approval',
    summary:
      'GenQuantaa built a full physiologically-based pharmacokinetic model to bridge adult PK data to paediatric populations, enabling regulatory submission without additional clinical studies.',
    outcome: '9 months saved in clinical timeline',
    image: '/screenshots/dashboard.png',
    color: '#3b82f6',
  },
  {
    company: 'OncoBridge Sciences',
    tag: 'Oncology · EMA Submission',
    title: 'Exposure-Response Modelling Secures First-Cycle EMA Approval',
    summary:
      'Our regulatory science team developed an integrated E-R model and benefit-risk framework that convinced the EMA committee on the first review cycle — a rare achievement in late-line oncology.',
    outcome: 'First-cycle approval achieved',
    image: '/screenshots/molecular_docking_results.png',
    color: '#10b981',
  },
  {
    company: 'GenePath Pharma',
    tag: 'Market Access · EU5',
    title: 'Health Economics Model Secures Reimbursement in 5 EU Markets',
    summary:
      'A robust cost-effectiveness model and value dossier enabled simultaneous positive HTA decisions across Germany, France, Italy, Spain, and the UK within a single submission cycle.',
    outcome: 'EU5 reimbursement in one cycle',
    image: '/screenshots/lead_optimization_results.png',
    color: '#f59e0b',
  },
];

// ─── SECTION 5: Metrics ──────────────────────────────────────────────────────
const metrics = [
  { value: 500, suffix: '+', label: 'Expert Scientists', icon: Users },
  { value: 1550, suffix: '+', label: 'Drug Approvals Supported', icon: Award },
  { value: 90, suffix: '%', label: 'Top 50 Pharma Clients', icon: TrendingUp },
  { value: 62, suffix: '+', label: 'Countries Served', icon: Globe },
];

// ─── Animated section wrapper ─────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}



const PhaseCard = ({ phase, idx, progress, totalCards, isDesktop }: any) => {
  const isLast = idx === totalCards - 1;
  const startProgress = idx / totalCards;
  const endProgress = (idx + 1) / totalCards;

  const cardScale = useTransform(progress, [startProgress, endProgress], isLast ? [1, 1] : [1, 0.94]);
  const cardOpacity = useTransform(progress, [startProgress, endProgress], isLast ? [1, 1] : [1, 0.85]);
  const cardY = useTransform(progress, [startProgress, endProgress], isLast ? [0, 0] : [0, -20]);
  const imageOverlayOpacity = useTransform(progress, [startProgress, endProgress], isLast ? [0, 0] : [0, 0.7]);

  return (
    <motion.div
      className="lg:sticky relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/50 bg-white grid grid-cols-1 lg:grid-cols-[52%_48%] w-full"
      style={{ 
        height: isDesktop ? '560px' : 'auto', 
        top: isDesktop ? `calc(120px + ${idx * 20}px)` : 'auto',
        scale: isDesktop ? cardScale : 1,
        opacity: isDesktop ? cardOpacity : 1,
        y: isDesktop ? cardY : 0,
      }}
    >
      <div className="p-10 lg:p-16 flex flex-col justify-center">
        <span
          className="inline-block text-xs font-bold uppercase tracking-widest font-mono mb-4 px-3 py-1 rounded-full w-fit"
          style={{ color: phase.color, background: `${phase.color}15` }}
        >
          {phase.category}
        </span>

        {/* Headline */}
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug mb-4">
          {phase.headline}
        </h3>

        {/* Description */}
        <p className="text-slate-500 leading-relaxed mb-6 text-[15px]">
          {phase.description}
        </p>

        {/* Supporting links */}
        <div className="flex flex-wrap gap-2 mb-6">
          {phase.links.map((link: string, i: number) => (
            <span
              key={i}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border"
              style={{ color: phase.color, borderColor: `${phase.color}40`, background: `${phase.color}08` }}
            >
              {link}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <Link
            to={phase.ctaHref}
            className="group flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-bold transition-all hover:scale-105"
            style={{ background: phase.color }}
          >
            {phase.cta}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to={phase.ctaHref}
            className="px-6 py-3 rounded-full border text-sm font-semibold transition-all hover:bg-slate-50"
            style={{ borderColor: `${phase.color}50`, color: phase.color }}
          >
            {phase.secondaryCta}
          </Link>
        </div>
      </div>

      {/* Image panel */}
      <div className="relative hidden lg:block overflow-hidden h-full" style={{ backgroundColor: phase.color }}>
        <motion.div 
          className="absolute inset-0 bg-slate-950 z-10 pointer-events-none" 
          style={{ opacity: isDesktop ? imageOverlayOpacity : 0 }}
        />
        <img
          src={phase.image}
          alt={phase.headline}
          className="w-full h-full object-cover mix-blend-screen"
        />
        {/* Phase label */}
        <div className="absolute bottom-8 right-8 z-20">
          <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3">
            <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Phase {idx + 1}</div>
            <div className="text-lg font-bold text-white">{phase.label}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function HomePage() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', company: '', role: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const metricsRef = useRef(null);
  const metricsInView = useInView(metricsRef, { once: true, margin: '-100px' });

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  // Auto-advance phases removed for scroll animation

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };



  return (
    <div className="min-h-screen bg-white font-sans overflow-x-clip">
      <Navbar />

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden bg-white"
      >

        <div className="relative z-10 w-full pt-40 pb-20 px-6 max-w-7xl mx-auto text-left">
          <div className="max-w-4xl space-y-6">

            {/* Badge — matches product page slate pill */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600"
            >
              Global Biosimulation Leader
            </motion.span>

            {/* Heading — same style as product page h1 */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-[60px] font-normal tracking-tight leading-[1.12] bg-gradient-to-r from-[#0e172c] to-[#0f269a] bg-clip-text text-transparent max-w-3xl font-sans py-2"
            >
              Transforming Drug Development for Good.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-slate-600 text-lg sm:text-xl max-w-2xl leading-relaxed"
            >
              GenQuantaa accelerates medicines using proprietary biosimulation technology,
              model-informed development services, and regulatory science expertise —
              trusted by 2,000+ biopharma organisations across 62 countries.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4"
            >
              <Link
                to="/solutions"
                className="px-8 py-3.5 rounded-lg font-bold text-white text-sm shadow-md transition-colors"
                style={{ background: '#0f269a' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#0a1a72')}
                onMouseLeave={e => (e.currentTarget.style.background = '#0f269a')}
              >
                Explore Solutions →
              </Link>
              <Link
                to="/services"
                className="px-8 py-3.5 rounded-lg font-bold text-sm shadow-md border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors"
              >
                View Services
              </Link>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.8 }}
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200/60"
            >
              {['2,000+ Clients', '62 Countries', '1,550+ Approvals', 'FDA · EMA · PMDA'].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-slate-500">
                  <CheckCircle size={12} className="text-[#0f269a] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 2 — LATEST INSIGHTS
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-20 px-6 max-w-6xl mx-auto">
            <FadeUp>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono block mb-3">Latest Insights</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Stay Ahead of the Science</h2>
                </div>
                <Link to="/drug-development" className="group inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors">
                  View All Resources <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {insights.map((item, idx) => (
                <FadeUp key={idx} delay={idx * 0.1}>
                  <Link
                    to={item.href}
                    className="group flex flex-col rounded-2xl border border-white/8 overflow-hidden hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(8px)' }}
                  >
                    <div className="relative overflow-hidden aspect-video">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white" style={{ background: item.tagColor }}>
                        {item.tag}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-xs text-slate-500 mb-2">{item.date}</p>
                      <h3 className="font-bold text-white mb-3 leading-snug group-hover:text-blue-300 transition-colors text-[15px]">{item.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 flex-grow">{item.excerpt}</p>
                      <span className="inline-flex items-center gap-1 mt-5 text-xs font-bold text-blue-400 group-hover:gap-2 transition-all">
                        Read more <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 3 — FEATURED CAPABILITIES
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-24 px-6 max-w-6xl mx-auto">
            <FadeUp className="text-center mb-16">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono block mb-4">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                End-to-End Drug Development
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                From early discovery through market access, our integrated platform and expert services power every phase.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <FadeUp key={idx} delay={idx * 0.1}>
                    <Link
                      to={cap.href}
                      className="group relative rounded-2xl border border-white/5 bg-white/5 p-8 hover:border-white/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ background: `radial-gradient(circle at 30% 30%, ${cap.color}08 0%, transparent 70%)` }} />
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300" style={{ background: `${cap.color}15` }}>
                        <Icon size={24} style={{ color: cap.color }} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{cap.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed flex-grow">{cap.desc}</p>
                      <span className="inline-flex items-center gap-1 mt-6 text-xs font-bold text-blue-400 group-hover:gap-2 transition-all">
                        Learn more <ArrowRight size={13} />
                      </span>
                    </Link>
                  </FadeUp>
                );
              })}
            </div>
          </section>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 4 — DRUG DEVELOPMENT SOLUTIONS (CENTERPIECE)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <FadeUp className="text-center mb-14">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest font-mono block mb-4">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 max-w-3xl mx-auto leading-tight">
              Drug Development Solutions For Every Phase
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              From target identification to market access, our scientists and consultants
              support every stage of your programme's lifecycle.
            </p>
          </FadeUp>

          {/* Stacked Cards Experience */}
          <div ref={containerRef} className="relative mt-16 max-w-6xl mx-auto flex flex-col gap-8 pb-32">
            {phases.map((phase, idx) => (
              <PhaseCard 
                 key={phase.id}
                 phase={phase}
                 idx={idx}
                 progress={scrollYProgress}
                 totalCards={phases.length}
                 isDesktop={isDesktop}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 5 — EXPERTISE & EXPERIENCE
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]" ref={metricsRef}>
          <section className="py-24 px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left */}
              <FadeUp>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono block mb-4">Our Track Record</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  30+ Years of Scientific Excellence
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  GenQuantaa was founded on a singular vision: accelerate the development of 
                  medicines that improve and save lives. Today, our team of world-leading 
                  scientists, pharmacometricians, and regulatory experts work across every 
                  therapeutic area and development phase.
                </p>
                <Link
                  to="/solutions"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-sm font-bold transition-all hover:scale-105"
                  style={{ background: 'linear-gradient(90deg, #0f269a, #0a1a72)' }}
                >
                  Our Story
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </FadeUp>

              {/* Right — 2×2 metric grid */}
              <div className="grid grid-cols-2 gap-6">
                {metrics.map((m, idx) => {
                  const Icon = m.icon;
                  return (
                    <FadeUp key={idx} delay={idx * 0.1}>
                      <div className="rounded-2xl border border-white/5 bg-white/5 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                          <Icon size={20} className="text-blue-400" />
                        </div>
                        <div className="text-4xl font-bold text-white mb-1">
                          {metricsInView ? (
                            <span>{m.value}{m.suffix}</span>
                          ) : (
                            <span>0{m.suffix}</span>
                          )}
                        </div>
                        <div className="text-sm text-slate-400 font-medium">{m.label}</div>
                      </div>
                    </FadeUp>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 6 — CASE STUDIES CAROUSEL
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#0b1224] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-24 px-6 max-w-6xl mx-auto">
            <FadeUp>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono block mb-3">Outcomes</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Our clients' success stories speak for themselves.</h2>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                navigation={false}
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                className="case-swiper pb-10"
              >
                {caseStudies.map((cs, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="rounded-3xl overflow-hidden border border-white/8 grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[420px]"
                      style={{ background: 'rgba(255,255,255,0.04)' }}>
                      {/* Content */}
                      <div className="p-10 md:p-14 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-6">
                            <span className="text-xs font-bold uppercase tracking-widest font-mono px-3 py-1 rounded-full"
                              style={{ color: cs.color, background: `${cs.color}20` }}>
                              {cs.tag}
                            </span>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-snug">{cs.title}</h3>
                          <p className="text-slate-400 leading-relaxed text-[15px] mb-6">{cs.summary}</p>
                          <div className="flex items-center gap-2 text-sm font-bold" style={{ color: cs.color }}>
                            <CheckCircle size={16} />
                            {cs.outcome}
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ background: cs.color }}>
                            {cs.company[0]}
                          </div>
                          <div>
                            <div className="text-white font-semibold text-sm">{cs.company}</div>
                            <Link to="/drug-development" className="text-xs text-slate-400 hover:text-white transition-colors">Read full case study →</Link>
                          </div>
                        </div>
                      </div>
                      {/* Image */}
                      <div className="relative overflow-hidden hidden lg:block">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1224]/80 to-transparent z-10" />
                        <img src={cs.image} alt={cs.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Simple nav buttons */}
              <div className="flex items-center justify-center gap-3 mt-2">
                <button
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-blue-400 hover:text-blue-400 transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-blue-400 hover:text-blue-400 transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </FadeUp>
          </section>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 7 — TESTIMONIAL
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <div
                className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {/* Glow */}
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #0f269a 0%, transparent 70%)' }} />

                <Quote size={48} className="text-blue-500/30 mb-6" />

                <blockquote className="text-xl md:text-2xl text-white font-light italic leading-relaxed mb-10">
                  "GenQuantaa's biosimulation platform compressed our Phase II design cycle by 40%. 
                  Their PBPK expertise gave us the regulatory confidence to file with certainty — 
                  and we achieved first-cycle FDA approval."
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center font-bold text-white text-lg">
                    PN
                  </div>
                  <div>
                    <div className="text-white font-bold">Dr. Priya Nair</div>
                    <div className="text-slate-400 text-sm">VP Clinical Pharmacology, BioNova Therapeutics</div>
                  </div>
                  <div className="ml-auto hidden md:flex items-center gap-1">
                    {[1,2,3,4,5].map(i => (
                      <span key={i} className="text-blue-400 text-lg">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 7.5 — ENTERPRISE EXCELLENCE & CREDENTIALS
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-24 px-6 max-w-6xl mx-auto">
            <FadeUp className="text-center mb-16">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono block mb-4">
                Enterprise Standards
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Emerging AI StartUp for Enterprise Grade Solutions
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                We combine bleeding-edge scientific intelligence with the industry's most rigorous operational, compliance, and security standards.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'SIEM Enabled',
                  tagline: 'Security Information & Event Management',
                  desc: 'Continuous real-time threat intelligence and security monitoring across all biological computation layers.',
                  icon: ShieldCheck,
                  color: '#3b82f6',
                },
                {
                  title: 'SOAR Orchestrated',
                  tagline: 'Security Orchestration & Response',
                  desc: 'Automated threat response and compliance verification, orchestrating security containment without human delay.',
                  icon: Workflow,
                  color: '#8b5cf6',
                },
                {
                  title: 'Quantum Safe Encrypted',
                  tagline: 'Future-Proof Cryptography',
                  desc: 'Equipped with next-generation post-quantum cryptographic systems safeguarding patient genomics and proprietary IP.',
                  icon: Lock,
                  color: '#10b981',
                },
                {
                  title: 'CMMI - 3 and CMMI 5',
                  tagline: 'Process & Maturity Excellence',
                  desc: 'Engineered in compliance with Capability Maturity Model Integration standards, ensuring highly predictable and high-quality deliveries.',
                  icon: Award,
                  color: '#f59e0b',
                },
                {
                  title: 'AI First Transformed',
                  tagline: 'Native Scientific AI',
                  desc: 'Pioneering the AI-first operation model in life sciences, converting unstructured raw laboratory data into structured intelligence assets.',
                  icon: Cpu,
                  color: '#ec4899',
                },
                {
                  title: 'Best Place to Work',
                  tagline: 'Join Our Diverse Team',
                  desc: 'A certified workspace built on collaboration, growth, and science. Review our structured candidate evaluation and application process.',
                  icon: HeartHandshake,
                  color: '#06b6d4',
                  cta: {
                    label: 'Apply Process',
                    href: 'https://www.genesysquantis.com/templates/login.html'
                  }
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <FadeUp key={idx} delay={idx * 0.08}>
                    <div
                      className="group relative rounded-2xl border border-white/5 bg-white/5 p-8 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full justify-between"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300" style={{ background: `${item.color}15` }}>
                          <Icon size={24} style={{ color: item.color }} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                          {item.tagline}
                        </span>
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors font-sans">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed font-sans font-light">
                          {item.desc}
                        </p>
                      </div>
                      {item.cta && (
                        <div className="mt-6">
                          <a
                            href={item.cta.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-blue-400 group-hover:gap-2 transition-all hover:text-blue-300"
                          >
                            {item.cta.label} <ArrowRight size={12} />
                          </a>
                        </div>
                      )}
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </section>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 8 — CAREERS
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-24 px-6 max-w-6xl mx-auto text-center">
            <FadeUp>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6">
                <Briefcase size={26} className="text-blue-400" />
              </div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono block mb-4">Join Our Team</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                We're a Great Company to Work For.
              </h2>
              <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
                We attract and develop the world's brightest scientific, regulatory, and technology talent — 
                united by one mission: accelerating medicines to the people who need them.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://www.genesysquantis.com/templates/login.html"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm hover:scale-105 transition-all"
                  style={{ background: 'linear-gradient(90deg, #0f269a, #0a1a72)' }}
                >
                  View Open Roles
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/solutions"
                  className="px-8 py-4 rounded-full border border-white/10 text-slate-300 font-semibold text-sm hover:bg-white/5 hover:border-white/20 transition-all"
                >
                  Learn About Our Culture
                </Link>
              </div>
            </FadeUp>
          </section>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 9 — CONTACT
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#0f172a] via-[#090d16] to-[#04070d] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <section className="py-24 px-6 max-w-6xl mx-auto">
            <FadeUp>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left */}
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono block mb-4">Get in Touch</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Transform Your Drug Development Programme.
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed mb-10">
                    Connect with our team of scientists and regulatory experts to discover how 
                    GenQuantaa can compress your development timeline and reduce R&D costs.
                  </p>

                  <div className="space-y-5">
                    {[
                      { icon: ShieldCheck, text: 'Confidential & secure engagement process', color: '#10b981' },
                      { icon: Users, text: 'Dedicated team of PhDs, pharmacometricians & regulatory scientists', color: '#3b82f6' },
                      { icon: Globe, text: 'Global coverage across 62+ countries', color: '#8b5cf6' },
                      { icon: Zap, text: 'Rapid response within 24 business hours', color: '#f59e0b' },
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${item.color}20` }}>
                            <Icon size={16} style={{ color: item.color }} />
                          </div>
                          <span className="text-slate-300 text-[15px]">{item.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right — Form */}
                <div className="rounded-3xl p-8 md:p-10" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
                  {formSubmitted ? (
                    <div className="text-center py-16">
                      <CheckCircle size={56} className="text-emerald-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                      <p className="text-slate-400">Our team will be in touch within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        {(['firstName', 'lastName'] as const).map((field) => (
                          <div key={field}>
                            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                              {field === 'firstName' ? 'First Name' : 'Last Name'}
                            </label>
                            <input
                              type="text"
                              required
                              value={formData[field]}
                              onChange={e => setFormData(p => ({ ...p, [field]: e.target.value }))}
                              className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:ring-2 focus:ring-blue-500/50"
                              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                              placeholder={field === 'firstName' ? 'Jane' : 'Smith'}
                            />
                          </div>
                        ))}
                      </div>

                      {[
                        { field: 'email', label: 'Work Email', type: 'email', placeholder: 'info@Genquantaa.com' },
                        { field: 'company', label: 'Company', type: 'text', placeholder: 'Acme Therapeutics' },
                        { field: 'role', label: 'Your Role', type: 'text', placeholder: 'VP Clinical Pharmacology' },
                      ].map(({ field, label, type, placeholder }) => (
                        <div key={field}>
                          <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">{label}</label>
                          <input
                            type={type}
                            required
                            value={formData[field as keyof typeof formData]}
                            onChange={e => setFormData(p => ({ ...p, [field]: e.target.value }))}
                            className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:ring-2 focus:ring-blue-500/50"
                            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                            placeholder={placeholder}
                          />
                        </div>
                      ))}

                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Message</label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                          className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:ring-2 focus:ring-blue-500/50 resize-none"
                          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                          placeholder="Tell us about your drug development programme and how we can help..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full group flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-bold text-sm transition-all hover:scale-[1.02] active:scale-95"
                        style={{ background: 'linear-gradient(90deg, #0f269a, #0a1a72)' }}
                      >
                        Send Enquiry
                        <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>

                      <p className="text-center text-xs text-slate-500">
                        Your information is always kept confidential. By submitting you agree to our{' '}
                        <Link to="/privacy" className="text-slate-400 hover:text-white underline">Privacy Policy</Link>.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </FadeUp>
          </section>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 10 — FOOTER (unchanged)
      ══════════════════════════════════════════════════════════════════════ */}
      <Footer />

      {/* Swiper custom styles */}
      <style>{`
        .case-swiper .swiper-pagination-bullet {
          background: rgba(255,255,255,0.3);
          opacity: 1;
          width: 8px;
          height: 8px;
        }
        .case-swiper .swiper-pagination-bullet-active {
          background: #0f269a;
          width: 24px;
          border-radius: 4px;
        }
        .case-pagination {
          display: flex;
          align-items: center;
          gap: 6px;
        }
      `}</style>
    </div>
  );
}
