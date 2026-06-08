import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[#070b13] text-white border-t border-white/10 py-16 px-6 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="GENQUANTAA Logo" className="h-16 w-auto shrink-0 object-contain" />
          <div>
            <div className="font-extrabold text-sm font-mono text-white tracking-wider">GENQUANTAA</div>
            <div className="text-[10px] text-slate-500">© 2026 ZEROKOST INC. ALL RIGHTS RESERVED.</div>
          </div>
        </div>

        <div className="flex items-center gap-8 text-xs text-slate-400">
          <Link to="/platform" className="hover:text-white transition-colors">Product</Link>
          <Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms and Conditions</Link>
          <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
        </div>
      </div>
    </footer>
  );
}
