import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye,
  Target,
  Brain,
  Zap,
  Microscope,
  ShieldCheck,
  Search,
  TrendingUp,
  Globe,
  Cpu,
  Handshake,
  ArrowRight,
  Sparkles,
  Lock,
  X
} from 'lucide-react';

interface ObjectiveItem {
  id: string;
  num: string;
  title: string;
  desc: string;
  outcome: string;
  icon: any;
}

export default function AboutPage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeen = sessionStorage.getItem('hasSeenMilestonePopup');
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1500); // 1.5s delay for natural feel
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    sessionStorage.setItem('hasSeenMilestonePopup', 'true');
  };

  const objectives: ObjectiveItem[] = [
    {
      id: "obj-1",
      num: "01",
      title: "Build an AI-Native Scientific Intelligence Platform",
      desc: "Develop a unified platform that integrates scientific data, knowledge management, predictive analytics, agentic AI, and workflow automation across the entire R&D lifecycle.",
      outcome: "Enable scientists and decision-makers to access actionable insights in real time.",
      icon: Brain
    },
    {
      id: "obj-2",
      num: "02",
      title: "Accelerate Drug Discovery and Development",
      desc: "Leverage AI, biosimulation, digital twins, and predictive modeling to help clients reduce development timelines, improve candidate selection, and optimize clinical success rates.",
      outcome: "Reduce R&D cycle times by 30–50% for client organizations.",
      icon: Zap
    },
    {
      id: "obj-3",
      num: "03",
      title: "Become a Trusted Scientific Informatics Partner",
      desc: "Provide consulting, implementation, validation, and managed services for scientific applications, laboratory informatics, data platforms, and digital transformation initiatives.",
      outcome: "Become a preferred strategic partner for pharmaceutical, biotech, and healthcare organizations.",
      icon: Microscope
    },
    {
      id: "obj-4",
      num: "04",
      title: "Develop Regulatory Intelligence Solutions",
      desc: "Create AI-driven regulatory intelligence systems that automate regulatory research, submission readiness, compliance monitoring, and evidence generation.",
      outcome: "Improve regulatory efficiency and submission quality while reducing compliance risks.",
      icon: ShieldCheck
    },
    {
      id: "obj-5",
      num: "05",
      title: "Enable Enterprise Knowledge Intelligence",
      desc: "Transform fragmented scientific and organizational knowledge into searchable, AI-accessible intelligence assets.",
      outcome: "Reduce knowledge discovery time and improve cross-functional collaboration.",
      icon: Search
    },
    {
      id: "obj-6",
      num: "06",
      title: "Deliver Measurable Business Impact Through AI",
      desc: "Focus on practical AI deployments that generate measurable ROI through automation, decision support, risk reduction, and productivity improvements.",
      outcome: "Demonstrate quantifiable value creation across research, clinical, quality, and manufacturing operations.",
      icon: TrendingUp
    },
    {
      id: "obj-7",
      num: "07",
      title: "Expand Global Scientific Services Capability",
      desc: "Build multidisciplinary teams combining scientific expertise, AI engineering, data science, regulatory affairs, and digital technology.",
      outcome: "Support clients globally with scalable, high-quality services.",
      icon: Globe
    },
    {
      id: "obj-8",
      num: "08",
      title: "Create Industry-Specific AI Agents",
      desc: "Develop specialized AI agents for drug discovery, clinical development, medical affairs, regulatory affairs, pharmacovigilance, quality management, and manufacturing.",
      outcome: "Automate high-value scientific and operational workflows.",
      icon: Cpu
    },
    {
      id: "obj-9",
      num: "09",
      title: "Establish Strategic Ecosystem Partnerships",
      desc: "Collaborate with pharmaceutical companies, CROs, technology providers, cloud platforms, academic institutions, and regulatory stakeholders.",
      outcome: "Accelerate innovation and market adoption.",
      icon: Handshake
    },
    {
      id: "obj-10",
      num: "10",
      title: "Achieve Sustainable Growth and Market Leadership",
      desc: "Expand recurring revenue through software platforms, managed services, consulting, and AI subscription offerings.",
      outcome: "Position GENQUANTAA among the most trusted AI-driven scientific transformation companies globally.",
      icon: Sparkles
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white font-sans selection:bg-[#3B82F6]/20 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-left relative overflow-hidden">
        {/* Soft background glow accents */}
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[20%] left-[-15%] w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl space-y-6 relative z-10">
          <span className="inline-block px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-semibold text-blue-400 tracking-wider">
            ABOUT GENQUANTAA
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-normal tracking-tight leading-[1.12] bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent max-w-4xl font-sans py-2">
            The AI Operating System for Scientific Enterprises
          </h1>

          <blockquote className="border-l-2 border-blue-500 pl-6 py-2 my-6 text-slate-300 text-lg sm:text-xl font-light italic leading-relaxed max-w-3xl">
            "GENQUANTAA is the AI Operating System for Scientific Enterprises—combining Scientific Intelligence, Agentic AI, Regulatory Intelligence, and Digital R&D Transformation on a single platform."
          </blockquote>
        </div>
      </section>

      {/* Vision & Mission Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 mb-16 text-left relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white/5 border border-white/5 rounded-3xl p-8 space-y-6 shadow-sm hover:border-blue-500/20 transition-all relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
              <Eye className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold tracking-tight text-white">Our Vision</h2>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                To become the leading AI-powered scientific intelligence and digital transformation partner for life sciences, biotechnology, healthcare, and regulated industries by accelerating innovation, improving decision-making, and reducing time-to-market for new therapies and products.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white/5 border border-white/5 rounded-3xl p-8 space-y-6 shadow-sm hover:border-blue-500/20 transition-all relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
              <Target className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold tracking-tight text-white">Our Mission</h2>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                To empower scientific organizations with AI, advanced analytics, scientific informatics, regulatory intelligence, and digital platforms that transform research, development, clinical operations, manufacturing, and commercialization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives (2026-2030) */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5 mb-16 text-left relative z-10">
        <div className="space-y-12">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono block">
              FUTURE ROADMAP
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal leading-tight text-white">
              Strategic Business Objectives (2026–2030)
            </h2>
            <p className="text-slate-400 text-sm font-light">
              Accelerating innovation and driving measurable business impact through practical, unified AI systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((obj) => {
              const IconComponent = obj.icon;

              return (
                <div
                  key={obj.id}
                  className="bg-white/5 border border-white/5 rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:bg-white/[0.07] hover:border-blue-500/30 transition-all duration-300 relative group overflow-hidden"
                >
                  <div className="space-y-6">
                    {/* Header Row */}
                    <div className="flex justify-between items-center">
                      <div className={`w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-4xl font-extrabold text-white/10 group-hover:text-blue-500/30 transition-colors font-mono select-none">
                        {obj.num}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white leading-snug group-hover:text-blue-400 transition-colors duration-300">
                        {obj.title}
                      </h4>
                      <p className="text-slate-400 text-xs leading-relaxed font-light">
                        {obj.desc}
                      </p>
                    </div>
                  </div>

                  {/* Outcome Badge */}
                  <div className="mt-8 border-t border-white/5 pt-4 space-y-1">
                    <span className="text-[9px] font-bold text-blue-500 uppercase tracking-widest font-mono block">
                      KEY OUTCOME
                    </span>
                    <p className="text-slate-300 text-xs font-normal leading-relaxed">
                      {obj.outcome}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Standards & Certifications */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5 mb-16 text-left relative z-10">
        <div className="space-y-12">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono block">
              ENTERPRISE STANDARDS
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal leading-tight text-white">
              Emerging AI StartUp for Enterprise Grade Solutions
            </h2>
            <p className="text-slate-400 text-sm font-light">
              Adhering to the most demanding regulatory, process quality, and information security frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'SIEM & SOAR Enabled',
                desc: 'Continuous security information management and automated threat response workflows.',
                icon: ShieldCheck,
              },
              {
                title: 'Quantum Safe Encrypted',
                desc: 'Future-proof data encryption designed to resist quantum-computing decryption risks.',
                icon: Lock,
              },
              {
                title: 'CMMI - 3 and CMMI 5',
                desc: 'Evaluated process maturity stages ensuring reliable, repeatable delivery metrics.',
                icon: Sparkles,
              },
              {
                title: 'AI First Transformed',
                desc: 'Model-native organization prioritizing neural computation across all functional divisions.',
                icon: Cpu,
              },
              {
                title: 'Best Place to Work',
                desc: 'Fostering an inclusive, high-performance ecosystem with a clear, transparent application process.',
                icon: Handshake,
              },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/5 rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:bg-white/[0.07] hover:border-blue-500/30 transition-all duration-300 relative group overflow-hidden"
                >
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white leading-snug group-hover:text-blue-400 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 text-xs leading-relaxed font-light font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Long-Term Aspiration & CTA */}
      <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] py-16 px-6 sm:px-12 text-center relative">
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            <span className="text-[10px] font-bold font-mono text-blue-400 uppercase tracking-widest block">
              LONG-TERM ASPIRATION
            </span>
            
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-normal leading-tight text-white max-w-2xl mx-auto">
              GENQUANTAA will become the operating system for scientific innovation.
            </h2>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto font-light">
              Enabling organizations to move from data to decisions, from insights to action, and from discovery to impact faster than ever before.
            </p>

            <div className="flex justify-center gap-4 pt-4">
              <Link
                to="/services"
                className="px-8 py-3 rounded-lg text-xs font-bold font-mono uppercase tracking-wider bg-[#0f269a] hover:bg-[#0a1a72] text-white shadow-sm transition-all inline-flex items-center gap-2"
              >
                Explore Services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* 3+ Years Milestone Pop-up Overlay */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.45 }}
              className="relative w-full max-w-md bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] border border-white/10 rounded-3xl p-8 text-center shadow-2xl z-10 overflow-hidden"
            >
              {/* Glow Accent */}
              <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-blue-500/20 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-indigo-500/20 blur-2xl pointer-events-none" />

              {/* Close Button */}
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/5"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>

              {/* Graphic Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20">
                <Sparkles className="w-8 h-8 text-white animate-pulse" />
              </div>

              {/* Milestone Tag */}
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">
                Milestone Celebration
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                Celebrating 3+ Years
              </h3>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-4">
                In Industry Excellence
              </p>

              {/* Body */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light font-sans">
                GenQuantaa is proud to celebrate over three years of transforming R&D operations, scaling spatial omics databases, and implementing enterprise-grade AI models for biopharma organizations globally.
              </p>

              {/* Action Button */}
              <button
                onClick={handleClose}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold text-sm transition-all hover:scale-[1.02] shadow-lg shadow-indigo-500/20"
              >
                Continue to Site
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
