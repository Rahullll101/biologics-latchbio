export const AntibodyIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 12v10M12 12L7 7M12 12l5-5M7 7L4 4M17 7l3-3" />
    <path d="M5 10l-2-1M19 10l2-1" />
  </svg>
);

export const ProteinRibbonIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 18c0-2 2-3 4-3s4 1 4 3 2 3 4 3 4-1 4-3" />
    <path d="M4 12c0-2 2-3 4-3s4 1 4 3 2 3 4 3 4-1 4-3" opacity="0.6" />
    <path d="M4 6c0-2 2-3 4-3s4 1 4 3 2 3 4 3 4-1 4-3" opacity="0.3" />
  </svg>
);

export const PeptideIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 12l3-3 4 4 4-4 4 4 3-3" />
    <circle cx="3" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="6" cy="9" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="10" cy="13" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="14" cy="9" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="18" cy="13" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="21" cy="10" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

export const MoleculeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3v4M12 17v4M4.22 6.22l2.83 2.83M16.95 14.95l2.83 2.83M3 12h4M17 12h4M4.22 17.78l2.83-2.83M16.95 9.05l2.83-2.83" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
  </svg>
);

export const FlaskIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 3h6M10 9h4M10 3v6l-4 8v3a1 1 0 001 1h10a1 1 0 001-1v-3l-4-8V3" />
  </svg>
);

export const DnaHelixIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 3c0 4.4 3.6 8 8 8s8-3.6 8-8" />
    <path d="M16 21c0-4.4-3.6-8-8-8s-8 3.6-8 8" />
    <path d="M8 13c0-4.4 3.6-8 8-8M16 11c0 4.4-3.6 8-8 8" opacity="0.5" />
  </svg>
);
