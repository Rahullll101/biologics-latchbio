import { motion } from 'framer-motion';
import type { ImpactItem } from '../../data/industryImpactData';

interface ImpactCardProps {
  item: ImpactItem;
  isHovered: boolean;
  isAnyHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export default function ImpactCard({
  item,
  isHovered,
  isAnyHovered,
  onHoverStart,
  onHoverEnd
}: ImpactCardProps) {

  // Visual focus states determined by grid hover state
  let opacity = 1.0;
  let scale = 1.0;
  let translateY = 0;

  if (isAnyHovered) {
    if (isHovered) {
      opacity = 1.0;
      scale = 1.04;
      translateY = -8;
    } else {
      opacity = 0.55;
      scale = 0.97;
      translateY = 0;
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity, scale, y: translateY }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className="relative rounded-[24px] min-h-[480px] w-full bg-white border overflow-hidden cursor-pointer flex flex-col justify-between p-8 md:p-9 select-none transition-colors duration-500 ease-out"
      style={{
        borderColor: isHovered ? 'rgba(15, 38, 154, 0.4)' : 'rgba(226, 232, 240, 0.8)',
        boxShadow: isHovered 
          ? '0 20px 40px -15px rgba(15, 38, 154, 0.15)' 
          : '0 4px 6px -1px rgba(0, 0, 0, 0.02)'
      }}
      tabIndex={0}
      aria-label={`${item.stage} Stage: ${item.title}. Metric: ${item.metric} ${item.label}`}
    >
      {/* Absolute Background Image Layer (Hover Fade) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-600 ease-out z-0"
        style={{
          backgroundImage: `url(${item.image})`,
          opacity: isHovered ? 1 : 0
        }}
      />

      {/* Cinematic Dark Overlay Layer (Hover Fade) */}
      <div
        className="absolute inset-0 transition-opacity duration-600 ease-out z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%)',
          opacity: isHovered ? 1 : 0
        }}
      />

      {/* Card Content - elevated above image layers */}
      <div className="relative z-20 flex flex-col h-full justify-between flex-grow">
        
        {/* Top: Stage Name */}
        <div className="text-left">
          <span className={`text-[11px] font-bold tracking-[0.2em] font-mono transition-colors duration-500 uppercase ${
            isHovered ? 'text-slate-300' : 'text-slate-400'
          }`}>
            {item.stage}
          </span>
        </div>

        {/* Middle: Metric and Outcome Label */}
        <div className="space-y-4 pt-12 text-left">
          {/* Dominant Metric */}
          <h3 className={`text-[56px] md:text-[64px] font-extrabold tracking-tight leading-none font-sans transition-colors duration-500 ${
            isHovered ? 'text-blue-500' : 'text-[#0f269a]'
          }`}>
            {item.metric}
          </h3>

          {/* Outcome Label */}
          <h4 className={`text-base md:text-lg font-bold tracking-tight leading-snug transition-colors duration-500 ${
            isHovered ? 'text-white' : 'text-slate-900'
          }`}>
            {item.label}
          </h4>
        </div>

        {/* Bottom: Title & Short Description */}
        <div className="border-t pt-5 mt-8 text-left transition-colors duration-500"
          style={{ borderColor: isHovered ? 'rgba(255, 255, 255, 0.15)' : 'rgba(226, 232, 240, 0.8)' }}
        >
          <div className={`text-[10px] font-bold tracking-widest uppercase font-mono mb-1.5 ${
            isHovered ? 'text-slate-300' : 'text-slate-400'
          }`}>
            {item.title}
          </div>
          <p className={`text-xs md:text-[13px] leading-relaxed transition-colors duration-500 font-normal ${
            isHovered ? 'text-slate-200' : 'text-slate-500'
          }`}>
            {item.description}
          </p>
        </div>

      </div>
    </motion.div>
  );
}
