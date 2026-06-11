import { Link } from 'react-router-dom';

export default function Footer() {
  const logos = [
    { src: '/certified_logos/hippa.png', alt: 'HIPAA Compliant', tileBg: 'bg-[#1a2235] border border-white/10' },
    { src: '/certified_logos/SOC-2.png', alt: 'SOC 2 Type II', tileBg: 'bg-[#f8fafc] border border-slate-200' },
    { src: '/certified_logos/GDPR.png', alt: 'GDPR Compliant', tileBg: 'bg-white border border-slate-100' },
    { src: '/certified_logos/ISO_9001_2015.png', alt: 'ISO 9001:2015 Quality Management', tileBg: 'bg-white border border-slate-100' },
    { src: '/certified_logos/dpiit_logo.png', alt: 'DPIIT Recognized', tileBg: 'bg-white border border-slate-100' },
    { src: '/certified_logos/ethical_ai.png', alt: 'Ethical AI Certified', tileBg: 'bg-white border border-slate-100' },
    { src: '/certified_logos/gem.png', alt: 'GeM Registered', tileBg: 'bg-white border border-slate-100' },
    { src: '/certified_logos/msme.png', alt: 'MSME Registered', tileBg: 'bg-white border border-slate-100' },
    { src: '/certified_logos/t_hub.png', alt: 'T-Hub Incubated', tileBg: 'bg-white border border-slate-100' },
    { src: '/certified_logos/t_works.png', alt: 'T-Works Partner', tileBg: 'bg-white border border-slate-100' },
  ];

  const enterpriseCredentials = [
    { title: 'SIEM Enabled', desc: 'Real-time security threat intelligence' },
    { title: 'SOAR Orchestrated', desc: 'Automated incident containment' },
    { title: 'Quantum Safe Encrypted', desc: 'Post-quantum key cryptography' },
    { title: 'CMMI - 3 and CMMI 5', desc: 'Process maturity & engineering quality' },
    { title: 'AI First Transformed', desc: 'Model-native enterprise operations' },
  ];

  return (
    <footer className="w-full bg-[#070b13] text-white border-t border-white/10 pt-16 pb-12 px-6 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Grid: Brand, Links, Enterprise Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="GENQUANTAA Logo" className="h-14 w-auto shrink-0 object-contain scale-[1.8] origin-left" />
            </div>
            <div>
              <div className="font-extrabold text-sm font-mono text-white tracking-wider">GENQUANTAA</div>
              <div className="text-[10px] text-slate-500 mt-1">© 2026 ZEROKOST INC. ALL RIGHTS RESERVED.</div>
            </div>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 tracking-wider uppercase">
                Emerging AI StartUp for Enterprise Grade solutions
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/platform" className="hover:text-white transition-colors">Product</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms and Conditions</Link></li>
            </ul>
          </div>

          {/* Enterprise Credentials */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Enterprise Credentials</h4>
            <ul className="space-y-2.5 text-xs">
              {enterpriseCredentials.map((cred, idx) => (
                <li key={idx} className="flex flex-col">
                  <span className="font-semibold text-slate-200">{cred.title}</span>
                  <span className="text-[10px] text-slate-500">{cred.desc}</span>
                </li>
              ))}
              <li className="pt-2">
                <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-lg p-2.5 flex justify-between items-center">
                  <div>
                    <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wide">Best Place To Work</div>
                    <div className="text-[9px] text-slate-400">Join our growing team today</div>
                  </div>
                  <a
                    href="https://www.genesysquantis.com/templates/login.html"
                    className="px-2.5 py-1 rounded bg-emerald-500 hover:bg-emerald-600 text-[10px] font-bold text-white transition-colors shadow-sm"
                  >
                    Apply Process
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Certified by */}
        <div className="pt-8 border-t border-white/10 space-y-4">
          <div className="text-xs uppercase tracking-wider text-slate-400 font-bold text-center">Certified by</div>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 bg-white/5 p-6 rounded-2xl border border-white/5">
            {logos.map((logo, idx) => (
              <div 
                key={idx} 
                className={`group relative flex items-center justify-center p-1.5 rounded-lg w-[72px] h-[44px] transition-all hover:scale-105 duration-200 shadow-sm ${logo.tileBg}`}
                title={logo.alt}
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-w-full max-h-full object-contain transition-all duration-200" 
                />
                <span className="absolute bottom-full mb-2 hidden group-hover:block bg-slate-900 text-white text-[9px] px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
                  {logo.alt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

