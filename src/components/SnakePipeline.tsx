import { useState } from 'react';
import {
  FileSearch,
  GitBranch,
  Sliders,
  Activity,
  ShieldCheck,
  Cpu,
  BarChart2,
  GitMerge,
  Database,
  Dna,
  Layers,
  Hourglass,
  Network
} from 'lucide-react';

interface Step {
  id: string;
  phase: string;
  title: string;
  desc: string;
  outputLabel: string;
  outputValue: string;
  color: 'cyan' | 'blue' | 'emerald';
  icon: React.ComponentType<{ className?: string }>;
}

export default function SnakePipeline({ workflow }: { workflow: { steps: any[] } }) {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  // Map icon strings to Lucide components
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    FileSearch: FileSearch,
    GitBranch: GitBranch,
    Sliders: Sliders,
    Activity: Activity,
    ShieldCheck: ShieldCheck,
    Cpu: Cpu,
    BarChart: BarChart2,
    GitMerge: GitMerge,
    Database: Database,
    Dna: Dna,
    Layers: Layers,
    Hourglass: Hourglass,
    Network: Network,
  };

  const steps: Step[] = (workflow?.steps || []).map((step) => ({
    ...step,
    icon: iconMap[step.icon] || Activity,
  }));

  // Define colors for each type
  const colorStyles = {
    cyan: {
      border: 'group-hover:border-cyan-500/50',
      text: 'text-cyan-400',
      bg: 'bg-cyan-950/20 border-cyan-800/30 text-cyan-400',
      iconBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      glow: 'shadow-[0_0_20px_rgba(34,211,238,0.15)]',
    },
    blue: {
      border: 'group-hover:border-blue-500/50',
      text: 'text-blue-400',
      bg: 'bg-blue-950/20 border-blue-800/30 text-blue-400',
      iconBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      glow: 'shadow-[0_0_20px_rgba(59,130,246,0.15)]',
    },
    emerald: {
      border: 'group-hover:border-emerald-500/50',
      text: 'text-emerald-400',
      bg: 'bg-emerald-950/20 border-emerald-800/30 text-emerald-400',
      iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      glow: 'shadow-[0_0_20px_rgba(16,185,129,0.15)]',
    },
  };

  return (
    <div className="relative w-full bg-[#050814] rounded-[32px] p-6 sm:p-10 lg:p-12 border border-slate-800 overflow-hidden">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* SVG Snake Connection Line - Desktop Only */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 450" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background Path */}
          <path
            d="M 150 115 L 1050 115 C 1130 115, 1130 335, 1050 335 L 150 335"
            stroke="rgba(30, 41, 59, 0.5)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Animated Flow Path */}
          <path
            d="M 150 115 L 1050 115 C 1130 115, 1130 335, 1050 335 L 150 335"
            stroke="url(#snake-gradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="16 12"
            className="animate-flow"
          />
          
          {/* Arrow Heads */}
          {/* Row 1 Right Arrows */}
          <path d="M 450 115 L 442 110 M 450 115 L 442 120" stroke="rgba(34, 211, 238, 0.4)" strokeWidth="3" strokeLinecap="round" />
          <path d="M 750 115 L 742 110 M 750 115 L 742 120" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="3" strokeLinecap="round" />
          
          {/* Row 2 Left Arrows */}
          <path d="M 750 335 L 758 330 M 750 335 L 758 340" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="3" strokeLinecap="round" />
          <path d="M 450 335 L 458 330 M 450 335 L 458 340" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="3" strokeLinecap="round" />

          {/* Start and End Dots */}
          <circle cx="150" cy="115" r="6" fill="#22d3ee" className="animate-ping opacity-75" />
          <circle cx="150" cy="115" r="4" fill="#22d3ee" />
          
          <circle cx="150" cy="335" r="6" fill="#10b981" className="animate-ping opacity-75" />
          <circle cx="150" cy="335" r="4" fill="#10b981" />

          {/* Gradients definition */}
          <defs>
            <linearGradient id="snake-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Grid of Steps */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const style = colorStyles[step.color] || colorStyles.cyan;
          const isHovered = hoveredStep === idx;
          const isAnyHovered = hoveredStep !== null;

          // Desktop positioning: Snake order (1, 2, 3, 4 then 8, 7, 6, 5)
          // Index mapping to Grid Position (1-indexed):
          // Step 1 (idx 0): Col 1, Row 1
          // Step 2 (idx 1): Col 2, Row 1
          // Step 3 (idx 2): Col 3, Row 1
          // Step 4 (idx 3): Col 4, Row 1
          // Step 5 (idx 4): Col 4, Row 2
          // Step 6 (idx 5): Col 3, Row 2
          // Step 7 (idx 6): Col 2, Row 2
          // Step 8 (idx 7): Col 1, Row 2
          const gridClasses = [
            'lg:col-start-1 lg:row-start-1',
            'lg:col-start-2 lg:row-start-1',
            'lg:col-start-3 lg:row-start-1',
            'lg:col-start-4 lg:row-start-1',
            'lg:col-start-4 lg:row-start-2',
            'lg:col-start-3 lg:row-start-2',
            'lg:col-start-2 lg:row-start-2',
            'lg:col-start-1 lg:row-start-2',
          ][idx];

          return (
            <div
              key={step.id}
              className={`${gridClasses} group relative transition-all duration-300 ${
                isAnyHovered && !isHovered ? 'opacity-40 scale-[0.98]' : 'opacity-100 scale-100'
              }`}
              onMouseEnter={() => setHoveredStep(idx)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {/* Card Container */}
              <div
                className={`h-full flex flex-col bg-[#0b0f19]/90 border border-slate-800 rounded-2xl p-6 transition-all duration-300 ${style.border} ${
                  isHovered ? `border-slate-700 ${style.glow}` : ''
                }`}
              >
                {/* Step Marker Dot */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-bold tracking-widest ${style.text}`}>
                    {step.phase}
                  </span>
                  <span className="text-[10px] font-mono text-slate-600 font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Header Icon + Title */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${style.iconBg} ${isHovered ? 'scale-110' : ''}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-bold text-base tracking-tight group-hover:text-white transition-colors">
                    {step.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-xs leading-relaxed mb-6 flex-grow">
                  {step.desc}
                </p>

                {/* Divider */}
                <div className="h-px bg-slate-800/80 w-full mb-4" />

                {/* Output Section */}
                <div className="space-y-1.5 mt-auto">
                  <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                    {step.outputLabel}
                  </div>
                  <div className={`text-2xs font-semibold px-2.5 py-1.5 rounded-lg border text-center font-mono ${style.bg}`}>
                    {step.outputValue}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
