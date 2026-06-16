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
  X,
  MapPin,
  Phone,
  CheckCircle,
  Building2,
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
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [demoEmail, setDemoEmail] = useState('');
  const [demoService, setDemoService] = useState('');
  const [demoCompanyName, setDemoCompanyName] = useState('');
  const [demoPersonName, setDemoPersonName] = useState('');
  const [demoPurpose, setDemoPurpose] = useState('');

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('hasSeenMilestonePopup');
    if (!hasSeen) {
      const timer = setTimeout(() => setShowPopup(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    sessionStorage.setItem('hasSeenMilestonePopup', 'true');
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoEmail || !demoService || !demoPersonName || !demoCompanyName || !demoPurpose) return;
    setDemoSubmitted(true);
    setTimeout(() => {
      setDemoEmail('');
      setDemoService('');
      setDemoCompanyName('');
      setDemoPersonName('');
      setDemoPurpose('');
      setDemoSubmitted(false);
    }, 4000);
  };

  const objectives: ObjectiveItem[] = [
    {
      id: 'obj-1', num: '01',
      title: 'Build an AI-Native Scientific Intelligence Platform',
      desc: 'Develop a unified platform that integrates scientific data, knowledge management, predictive analytics, agentic AI, and workflow automation across the entire R&D lifecycle.',
      outcome: 'Enable scientists and decision-makers to access actionable insights in real time.',
      icon: Brain,
    },
    {
      id: 'obj-2', num: '02',
      title: 'Accelerate Drug Discovery and Development',
      desc: 'Leverage AI, biosimulation, digital twins, and predictive modeling to help clients reduce development timelines, improve candidate selection, and optimize clinical success rates.',
      outcome: 'Reduce R&D cycle times by 30–50% for client organizations.',
      icon: Zap,
    },
    {
      id: 'obj-3', num: '03',
      title: 'Become a Trusted Scientific Informatics Partner',
      desc: 'Provide consulting, implementation, validation, and managed services for scientific applications, laboratory informatics, data platforms, and digital transformation initiatives.',
      outcome: 'Become a preferred strategic partner for pharmaceutical, biotech, and healthcare organizations.',
      icon: Microscope,
    },
    {
      id: 'obj-4', num: '04',
      title: 'Develop Regulatory Intelligence Solutions',
      desc: 'Create AI-driven regulatory intelligence systems that automate regulatory research, submission readiness, compliance monitoring, and evidence generation.',
      outcome: 'Improve regulatory efficiency and submission quality while reducing compliance risks.',
      icon: ShieldCheck,
    },
    {
      id: 'obj-5', num: '05',
      title: 'Enable Enterprise Knowledge Intelligence',
      desc: 'Transform fragmented scientific and organizational knowledge into searchable, AI-accessible intelligence assets.',
      outcome: 'Reduce knowledge discovery time and improve cross-functional collaboration.',
      icon: Search,
    },
    {
      id: 'obj-6', num: '06',
      title: 'Deliver Measurable Business Impact Through AI',
      desc: 'Focus on practical AI deployments that generate measurable ROI through automation, decision support, risk reduction, and productivity improvements.',
      outcome: 'Demonstrate quantifiable value creation across research, clinical, quality, and manufacturing operations.',
      icon: TrendingUp,
    },
    {
      id: 'obj-7', num: '07',
      title: 'Expand Global Scientific Services Capability',
      desc: 'Build multidisciplinary teams combining scientific expertise, AI engineering, data science, regulatory affairs, and digital technology.',
      outcome: 'Support clients globally with scalable, high-quality services.',
      icon: Globe,
    },
    {
      id: 'obj-8', num: '08',
      title: 'Create Industry-Specific AI Agents',
      desc: 'Develop specialized AI agents for drug discovery, clinical development, medical affairs, regulatory affairs, pharmacovigilance, quality management, and manufacturing.',
      outcome: 'Automate high-value scientific and operational workflows.',
      icon: Cpu,
    },
    {
      id: 'obj-9', num: '09',
      title: 'Establish Strategic Ecosystem Partnerships',
      desc: 'Collaborate with pharmaceutical companies, CROs, technology providers, cloud platforms, academic institutions, and regulatory stakeholders.',
      outcome: 'Accelerate innovation and market adoption.',
      icon: Handshake,
    },
    {
      id: 'obj-10', num: '10',
      title: 'Achieve Sustainable Growth and Market Leadership',
      desc: 'Expand recurring revenue through software platforms, managed services, consulting, and AI subscription offerings.',
      outcome: 'Position GENQUANTAA among the most trusted AI-driven scientific transformation companies globally.',
      icon: Sparkles,
    },
  ];

  const enterpriseStandards = [
    { title: 'SIEM & SOAR Enabled', desc: 'Continuous security information management and automated threat response workflows.', icon: ShieldCheck },
    { title: 'Quantum Safe Encrypted', desc: 'Future-proof data encryption designed to resist quantum-computing decryption risks.', icon: Lock },
    { title: 'CMMI - 3 and CMMI 5', desc: 'Evaluated process maturity stages ensuring reliable, repeatable delivery metrics.', icon: Sparkles },
    { title: 'AI First Transformed', desc: 'Model-native organization prioritizing neural computation across all functional divisions.', icon: Cpu },
    { title: 'Best Place to Work', desc: 'Fostering an inclusive, high-performance ecosystem with a clear, transparent application process.', icon: Handshake },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-[#0f269a]/20 overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-40 pb-16 px-6 max-w-7xl mx-auto text-left relative overflow-hidden">
        {/* Soft glow accents — same as ServicesPage */}
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#0f269a]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-15%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

        <div className="max-w-4xl space-y-6">
          {/* Badge — ServicesPage style */}
          <span className="inline-block px-3 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600">
            <span className="inline-flex items-center gap-1.5">
              <Building2 size={11} className="text-[#0f269a]" />
              ABOUT GENQUANTAA
            </span>
          </span>

          {/* H1 — exact ServicesPage typography */}
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-normal tracking-tight leading-[1.12] bg-gradient-to-r from-[#0e172c] to-[#0f269a] bg-clip-text text-transparent max-w-4xl font-sans py-2">
            The AI Operating System for Scientific Enterprises
          </h1>

          {/* Subtitle — ServicesPage style */}
          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-3xl font-light">
            GenQuantaa combines Scientific Intelligence, Agentic AI, Regulatory Intelligence, and Digital R&D Transformation on a single platform — accelerating discovery and clinical milestones for life-science organisations worldwide.
          </p>

          {/* CTA row — ServicesPage style */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="mailto:support@genquantaa.com"
              className="px-8 py-3.5 rounded-lg text-xs font-bold font-mono uppercase tracking-wider bg-[#0f269a] hover:bg-[#0a1a72] text-white shadow-sm transition-all"
            >
              Connect With Us
            </a>
            <Link
              to="/services"
              className="px-8 py-3.5 rounded-lg text-xs font-bold font-mono uppercase tracking-wider border border-slate-300 text-slate-700 hover:bg-slate-50 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-200/80 mb-12 text-left">
        <div className="space-y-12">
          {/* Section label + heading — ServicesPage style */}
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-bold text-[#0f269a] uppercase tracking-widest font-mono block">
              Our Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal leading-tight text-slate-900">
              Vision & Mission
            </h2>
            <p className="text-slate-500 text-sm max-w-2xl">
              The guiding principles that shape every product, partnership, and decision at GenQuantaa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Eye,
                label: 'Our Vision',
                sub: 'Where We\'re Headed',
                text: 'To become the leading AI-powered scientific intelligence and digital transformation partner for life sciences, biotechnology, healthcare, and regulated industries by accelerating innovation, improving decision-making, and reducing time-to-market for new therapies and products.',
              },
              {
                icon: Target,
                label: 'Our Mission',
                sub: 'What Drives Us Daily',
                text: 'To empower scientific organizations with AI, advanced analytics, scientific informatics, regulatory intelligence, and digital platforms that transform research, development, clinical operations, manufacturing, and commercialization.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white border border-slate-200/80 rounded-[24px] p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-all relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#0f269a] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0f269a]/10 flex items-center justify-center text-[#0f269a] border border-[#0f269a]/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-0.5">{item.label}</h3>
                      <p className="text-[10px] font-bold text-[#0f269a] uppercase tracking-widest font-mono mb-3">{item.sub}</p>
                      <p className="text-slate-500 text-xs leading-relaxed font-normal">{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Strategic Objectives ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-200/80 mb-12 text-left">
        <div className="space-y-12">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-bold text-[#0f269a] uppercase tracking-widest font-mono block">
              Future Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal leading-tight text-slate-900">
              Strategic Business Objectives (2026–2030)
            </h2>
            <p className="text-slate-500 text-sm max-w-2xl">
              Accelerating innovation and driving measurable business impact through practical, unified AI systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((obj) => {
              const Icon = obj.icon;
              return (
                <div
                  key={obj.id}
                  className="bg-white border border-slate-200/80 rounded-[24px] p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-all relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#0f269a] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="w-10 h-10 rounded-lg bg-[#0f269a]/10 flex items-center justify-center text-[#0f269a] border border-[#0f269a]/20">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-4xl font-extrabold text-[#0f269a]/10 group-hover:text-[#0f269a]/25 transition-colors font-mono select-none">
                        {obj.num}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug mb-2 group-hover:text-[#0f269a] transition-colors">
                        {obj.title}
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed font-normal">{obj.desc}</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <span className="text-[9px] font-bold text-[#0f269a] uppercase tracking-widest font-mono block mb-1">
                      Key Outcome
                    </span>
                    <p className="text-slate-400 text-xs leading-relaxed">{obj.outcome}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Enterprise Standards — dark band ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] py-16 px-6 sm:px-12 text-left relative">
          <div className="absolute inset-0 bg-[#0f269a]/5 blur-3xl pointer-events-none" />

          <div className="space-y-12 relative z-10">
            <div className="space-y-3 max-w-3xl">
              <span className="text-[10px] font-bold font-mono text-blue-400 uppercase tracking-widest block">
                Enterprise Standards
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal leading-tight">
                Emerging AI StartUp for Enterprise-Grade Solutions
              </h2>
              <p className="text-slate-400 text-sm">
                Adhering to the most demanding regulatory, process quality, and information security frameworks.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {enterpriseStandards.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white/5 border border-white/5 rounded-2xl p-8 space-y-4 relative group hover:border-blue-500/30 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                      {item.title}
                    </h4>
                    <p className="text-slate-300 text-xs leading-relaxed">{item.desc}</p>
                    <div className="text-slate-500 text-[10px] font-semibold font-mono border-t border-white/5 pt-3 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400" /> Certified Standard
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Why GenQuantaa ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-200/80 mb-12 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#0f269a] uppercase tracking-widest font-mono block">
                Strategic Mandate
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal leading-tight text-slate-900">
                Why GenQuantaa?
              </h2>
              <p className="text-slate-500 text-sm max-w-xl leading-relaxed">
                Modern life-sciences R&D is no longer limited by scientific hypothesis — it is limited by operational velocity. GenQuantaa is engineered as an enterprise infrastructure to solve the core challenges of the industry.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { q: 'Who does it help?', a: 'Project Leads, CTOs, and R&D Directors who need to move from fragmented ad-hoc tools to a unified, scalable AI Operating System for science.' },
                { q: 'Why should an organisation invest?', a: 'To eliminate data silos across the R&D lifecycle. GenQuantaa provides an unbroken digital chain that compresses discovery timelines by 30–50%.' },
                { q: 'The business perspective', a: 'It turns R&D from a high-risk cost centre into a predictable, AI-driven engine with measurable ROI across research, clinical, quality, and manufacturing.' },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                  <h4 className="text-xs font-bold text-[#0f269a] mb-2 flex items-center gap-2 font-mono uppercase tracking-wider">
                    <CheckCircle size={14} /> {item.q}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact metrics */}
          <div className="bg-white border border-slate-200/80 rounded-[24px] p-10 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 mb-1">Impact at a Glance</h3>
            <p className="text-[10px] font-bold text-[#0f269a] uppercase tracking-widest font-mono mb-8">Quantified Outcomes</p>
            <div className="space-y-8">
              {[
                { label: 'R&D Cycle Compression', value: '30–50%', bar: 50 },
                { label: 'Knowledge Discovery Speed', value: '5× Faster', bar: 80 },
                { label: 'Regulatory Submission Quality', value: '↑ 60%', bar: 60 },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-slate-800">{stat.label}</span>
                    <span className="text-[#0f269a] font-extrabold text-sm tracking-tight">{stat.value}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.bar}%` }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className="h-full bg-[#0f269a] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 bg-[#0f269a]/5 rounded-2xl border border-[#0f269a]/10">
              <p className="text-xs text-slate-500 leading-relaxed">
                GenQuantaa's unified platform provides enterprise-ready infrastructure for AI-driven scientific transformation — from target identification to regulatory submission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Registered Office ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-200/80 mb-12 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold text-[#0f269a] uppercase tracking-widest font-mono block">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal leading-tight text-slate-900">
              Registered Office
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Connect with our corporate headquarters or reach our representatives for administrative and partnership inquiries.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: MapPin,
                label: 'Office Address',
                text: 'Plot No 84-85, Flat No.104, Siva Sai Heights, Gokul Plots, Tirumalgiri, Hyderabad, Telangana — PIN 500072',
              },
              {
                icon: Phone,
                label: 'Phone Number',
                text: '+91 7036955133',
              },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="bg-white border border-slate-200/80 rounded-[24px] p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#0f269a] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-10 h-10 rounded-lg bg-[#0f269a]/10 flex items-center justify-center text-[#0f269a] border border-[#0f269a]/20 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono mb-2">{card.label}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Long-Term CTA ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] py-16 px-6 sm:px-12 text-center relative">
          <div className="absolute inset-0 bg-[#0f269a]/5 blur-3xl pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <span className="text-[10px] font-bold font-mono text-blue-400 uppercase tracking-widest block">
              Long-Term Aspiration
            </span>
            <h2 className="text-3xl font-normal text-white max-w-2xl mx-auto leading-snug">
              GENQUANTAA will become the operating system for scientific innovation.
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Enabling organizations to move from data to decisions, from insights to action, and from discovery to impact faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Link
                to="/services"
                className="px-8 py-3.5 rounded-lg text-xs font-bold font-mono uppercase tracking-wider bg-[#0f269a] hover:bg-[#0a1a72] text-white shadow-sm transition-all inline-flex items-center justify-center gap-2"
              >
                Explore Services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="mailto:support@genquantaa.com"
                className="px-8 py-3.5 rounded-lg text-xs font-bold font-mono uppercase tracking-wider border border-white/20 text-slate-300 hover:bg-white/5 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Request a Demo Section ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10" id="demo">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] py-16 px-6 sm:px-12 text-center relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl pointer-events-none"></div>

          <div className="max-w-xl mx-auto space-y-8 relative z-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-normal text-white">Request a Demo</h2>
              <p className="text-slate-400 text-sm font-light">Select a service below to schedule a personalized platform walkthrough.</p>
            </div>

            <form onSubmit={handleDemoSubmit} className="flex flex-col gap-4 max-w-md mx-auto w-full">
              <select
                required
                value={demoService}
                onChange={(e) => setDemoService(e.target.value)}
                className="w-full px-5 py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-200 focus:outline-none focus:border-blue-500 text-sm appearance-none cursor-pointer"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2364748b\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2em 1.2em' }}
              >
                <option value="" disabled>Select a Service</option>
                <option value="discovery">Discovery Solution</option>
                <option value="chemistry">GQ Chemistry Solution</option>
                <option value="gpt">GQ GPT Solutions</option>
                <option value="digital-twin">Precision Oncology Digital Twin</option>
                <option value="consulting">AI & Data Science Consulting</option>
                <option value="regulatory">Regulatory Affairs Strategy</option>
                <option value="other">Other / General Inquiry</option>
              </select>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                <input
                  type="text"
                  required
                  value={demoPersonName}
                  onChange={(e) => setDemoPersonName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-5 py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-200 focus:outline-none focus:border-blue-500 text-sm placeholder:text-slate-500"
                />
                <input
                  type="text"
                  required
                  value={demoCompanyName}
                  onChange={(e) => setDemoCompanyName(e.target.value)}
                  placeholder="Company Name"
                  className="w-full px-5 py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-200 focus:outline-none focus:border-blue-500 text-sm placeholder:text-slate-500"
                />
              </div>

              <input
                type="text"
                required
                value={demoPurpose}
                onChange={(e) => setDemoPurpose(e.target.value)}
                placeholder="Purpose of Demo (e.g. Pipeline Integration)"
                className="w-full px-5 py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-200 focus:outline-none focus:border-blue-500 text-sm placeholder:text-slate-500"
              />

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
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
                  className="w-full sm:w-auto px-6 py-3 rounded-full font-bold text-white bg-[#0f269a] hover:bg-[#0a1a72] active:scale-95 transition-all text-xs uppercase tracking-wider font-mono shadow-md whitespace-nowrap"
                >
                  Request Demo
                </button>
              </div>
            </form>

            {demoSubmitted && (
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 text-xs font-semibold animate-pulse text-center">
                ✓ Demo request received for {demoService}. We'll be in touch soon!
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />

      {/* ── Milestone Popup ── */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.45 }}
              className="relative w-full max-w-md bg-white border border-slate-200 rounded-[32px] p-8 text-center shadow-2xl z-10"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors p-1 rounded-full hover:bg-slate-100"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>

              <div className="w-14 h-14 rounded-2xl bg-[#0f269a] flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#0f269a]/20">
                <Sparkles className="w-7 h-7 text-white animate-pulse" />
              </div>

              <span className="inline-block px-3 py-1 rounded-full bg-[#0f269a]/10 border border-[#0f269a]/20 text-xs font-bold text-[#0f269a] uppercase tracking-wider font-mono mb-3">
                Milestone Celebration
              </span>

              <h3 className="text-xl font-bold text-slate-900 mb-1 tracking-tight">
                Celebrating 3+ Years
              </h3>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest font-mono mb-4">
                In Industry Excellence
              </p>

              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-normal">
                GenQuantaa is proud to celebrate over three years of transforming R&D operations, scaling spatial omics databases, and implementing enterprise-grade AI models for biopharma organizations globally.
              </p>

              <button
                onClick={handleClose}
                className="w-full py-3.5 rounded-xl bg-[#0f269a] hover:bg-[#0a1a72] text-white font-bold text-xs uppercase tracking-wider font-mono transition-all shadow-sm"
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
