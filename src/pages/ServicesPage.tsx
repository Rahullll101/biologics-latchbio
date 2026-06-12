import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Cpu,
  Layers,
  Brain,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { IndustryImpactSection } from '../components/IndustryImpact';

export default function ServicesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('general');
  const [notes, setNotes] = useState('');

  const partnersStats = [
    {
      value: '1 in 3',
      label: 'Team Members are Ph.D. Scientists',
      desc: 'Ensuring your pipeline designs, simulations, and data packages are engineered with deep scientific understanding.'
    },
    {
      value: '300+',
      label: 'Scientific Informatics Experts',
      desc: 'A global footprint of pharmacometricians, software developers, and CMC formulation architects.'
    },
    {
      value: '18/20',
      label: 'Top Global Biopharma Partners',
      desc: 'Trusted by the largest clinical sponsors to design, validate, and submit their core novel candidates.'
    },
    {
      value: '90%',
      label: 'Repeat Client Retention Rate',
      desc: 'Our commitment to scientific transparency, data compliance, and robust execution delivers lasting collaborations.'
    }
  ];

  const faqs = [
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
    }
  ];

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
            Where Science Meets Practical AI
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-3xl font-light">
            GenQuantaa is the leading global enabler of AI and data-driven enterprise informatics for science-driven organizations. We help CxOs leverage Data, Technology, and Practical AI to accelerate discovery and clinical milestones.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#inquiry-form"
              className="px-8 py-3.5 rounded-lg text-xs font-bold font-mono uppercase tracking-wider bg-[#0f269a] hover:bg-[#0a1a72] text-white shadow-sm transition-all"
            >
              Connect With Us
            </a>
            <a
              href="#value-chain"
              className="px-8 py-3.5 rounded-lg text-xs font-bold font-mono uppercase tracking-wider border border-slate-300 text-slate-700 hover:bg-slate-50 transition-all"
            >
              Explore Value Chain
            </a>
          </div>
        </div>
      </section>

      {/* Premium Zifo-Style Quantified Impact Section */}
      <div id="value-chain">
        <IndustryImpactSection />
      </div>

      {/* Partner Statistics Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-200/80 mb-12 text-left">
        <div className="space-y-12">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-bold text-[#0f269a] uppercase tracking-widest font-mono block">
              Leading Informatics Partner
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal leading-tight text-slate-900">
              Leading Partner for Enterprise Scientific Informatics
            </h2>
            <p className="text-slate-500 text-sm max-w-2xl">
              We focus 100% of our consulting and platform capabilities on the life sciences, enabling CxOs to capture and structure scientific workflows with practical AI models.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnersStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-[24px] p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#0f269a] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="space-y-4">
                  <div className="text-4xl font-extrabold text-[#0f269a] tracking-tight">{stat.value}</div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">{stat.label}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-normal">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical AI Framework Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] py-16 px-6 sm:px-12 text-left relative">
          <div className="absolute inset-0 bg-[#0f269a]/5 blur-3xl pointer-events-none"></div>

          <div className="space-y-12 relative z-10">
            <div className="space-y-3 max-w-3xl">
              <span className="text-[10px] font-bold font-mono text-blue-400 uppercase tracking-widest block">
                INTELLIGENCE LAYER
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal leading-tight">
                Practical AI: Work with a Science-Led AI Partner
              </h2>
              <p className="text-slate-400 text-sm">
                Deliver computational results with a framework combining Domain Expertise, Advanced Modeling, and Orchestrated Infrastructure.
              </p>
            </div>

            {/* Framework Visual Cards Flow */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Layer 1 */}
              <div className="bg-white/5 border border-white/5 rounded-2xl p-8 space-y-4 relative group hover:border-blue-500/30 transition-all">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                  1. Domain Expert Knowledge
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Wet-lab methodologies, DMPK parameters, GxP standards, and FDA compliance meeting protocols are codified directly into workspace configurations.
                </p>
                <div className="text-slate-500 text-[10px] font-semibold font-mono border-t border-white/5 pt-3 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400" /> Compliance Built-In
                </div>
              </div>

              {/* Layer 2 */}
              <div className="bg-white/5 border border-white/5 rounded-2xl p-8 space-y-4 relative group hover:border-blue-500/30 transition-all">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                  <Brain className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                  2. Practical AI Modeling
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Generative design of novel candidates, epigenetic aging clock metrics, Cox prognostic models, and molecular docking simulators generate key insights.
                </p>
                <div className="text-slate-500 text-[10px] font-semibold font-mono border-t border-white/5 pt-3 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400" /> Advanced Biosimulation
                </div>
              </div>

              {/* Layer 3 */}
              <div className="bg-white/5 border border-white/5 rounded-2xl p-8 space-y-4 relative group hover:border-blue-500/30 transition-all">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                  3. System of Knowledge Layer
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Orchestrated cloud computing run pipelines, vector-indexed database systems, electronic lab notebook parameters, and API hardware connections.
                </p>
                <div className="text-slate-500 text-[10px] font-semibold font-mono border-t border-white/5 pt-3 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400" /> Traceable Data Infrastructure
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Target Industries Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 mb-12 text-left">
        <div className="space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#0f269a] uppercase tracking-widest font-mono block">
              Global Support Segments
            </span>
            <h2 className="text-3xl font-normal leading-tight text-slate-900">
              Trusted by the Industry. Built for Science
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Life Sciences */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-[#0f269a] border-b border-slate-100 pb-4">Life Sciences</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Biotech Partners</h4>
                    <p className="text-slate-500 text-[11px] mt-0.5">De-risk starting candidates and scale data pipelines early.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Gene & Molecular Therapy</h4>
                    <p className="text-slate-500 text-[11px] mt-0.5">Model methylation aging vectors and project targeted dosage.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Clinical Research Organizations</h4>
                    <p className="text-slate-500 text-[11px] mt-0.5">Automate GxP instrument logs and manage compliance pipelines.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Industries Powered by Science */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-[#0f269a] border-b border-slate-100 pb-4">Industries Powered by Science</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Agriculture & Food</h4>
                    <p className="text-slate-500 text-[11px] mt-0.5">Scale analytical plant gene datasets and record workflow logs.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Materials & Chemical</h4>
                    <p className="text-slate-500 text-[11px] mt-0.5">Simulate crystal properties, solubility, and processes in-silico.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Process & Manufacturing</h4>
                    <p className="text-slate-500 text-[11px] mt-0.5">Deploy automated electronic templates to enforce tracing protocols.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <div id="inquiry-form" className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] py-16 px-6 sm:px-12 text-center relative">
          <div className="absolute inset-0 bg-[#0f269a]/5 blur-3xl pointer-events-none"></div>

          <div className="space-y-12 relative z-10">
            <div className="text-center space-y-4">
              <HelpCircle className="w-10 h-10 text-blue-400 mx-auto" />
              <h2 className="text-3xl font-normal text-white">Connect With Us</h2>
              <p className="text-slate-400 text-sm">
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
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                      Work Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="support@Genquantaa.com"
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
      </div>

      {/* Services FAQ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-gradient-to-br from-[#0c142b] via-[#0b0f19] to-[#05070c] text-white rounded-[32px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] py-16 px-6 sm:px-12 relative">
          <div className="absolute inset-0 bg-[#0f269a]/5 blur-3xl pointer-events-none"></div>

          <div className="space-y-12 relative z-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-normal text-white">Services FAQ</h2>
              <p className="text-slate-400 text-sm">Clear answers on scientific informatics, validations, and compliance.</p>
            </div>

            <div className="space-y-4">
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

      <Footer />
    </div>
  );
}
