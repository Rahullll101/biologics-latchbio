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

  return (
    <footer className="w-full bg-[#070b13] text-white border-t border-white/10 pt-16 pb-12 px-6 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Grid: Brand, Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand & Tagline */}
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="GENQUANTAA Logo" className="h-10 w-auto object-contain" />
            </div>
            <div>
              <div className="font-extrabold text-sm font-mono text-white tracking-wider">GENQUANTAA</div>
              <div className="text-[10px] text-slate-500 mt-0.5">© 2026 ZEROKOST INC. ALL RIGHTS RESERVED.</div>
              <div className="text-[10px] text-slate-500 mt-0.5 font-mono">
                ZEROKOST HEALTHCARE PRIVATE LIMITED (CIN: U46497TS2023PTC172499)
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-xs text-slate-400">
              <a href="tel:+917036955133" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 7036955133
              </a>
              <a href="mailto:connect@genquantaa.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                connect@genquantaa.com
              </a>
            </div>

            <div className="pt-1">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 tracking-wider uppercase">
                Emerging AI StartUp for Enterprise Grade solutions
              </span>
            </div>
          </div>


          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/home" className="hover:text-white transition-colors">Life Science</Link></li>
              <li><Link to="/home#our-solutions" className="hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/company" className="hover:text-white transition-colors">Company</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms and Conditions</Link></li>
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

