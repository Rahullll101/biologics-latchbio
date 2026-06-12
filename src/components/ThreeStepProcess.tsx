import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Dna, 
  Layers,
  Sparkles,
  ChevronRight,
  Cpu,
  Microscope,
  Network
} from 'lucide-react';

interface ProcessStep {
  title: string;
  items: {
    label: string;
    icon: React.ComponentType<any>;
    description?: string;
  }[];
}

interface ThreeStepProcessProps {
  title: string;
  subtitle?: string;
  variant?: 'standard' | 'split' | 'visual' | 'loop' | 'quadrant';
  context?: 'biology' | 'compute';
  input: ProcessStep;
  processing: {
    title: string;
    groups: {
      title: string;
      items: {
        label: string;
        icon: React.ComponentType<any>;
      }[];
    }[];
  };
  output: ProcessStep;
  image?: string;
}

export const ThreeStepProcess: React.FC<ThreeStepProcessProps> = ({ 
  title, 
  subtitle, 
  variant = 'standard',
  context = 'biology',
  input, 
  processing, 
  output,
  image
}) => {

  const isCompute = context === 'compute';
  const isLoop = variant === 'loop';
  const isQuadrant = variant === 'quadrant';

  return (
    <div className={`w-full max-w-[1400px] mx-auto py-12 px-4 md:px-6 overflow-hidden relative`}>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20 -z-10">
        {isCompute ? (
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
        ) : (
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
        )}
      </div>

      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className={`inline-block px-4 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-[0.2em] ${
              isCompute 
              ? 'bg-blue-500/5 border-blue-500/10 text-blue-600' 
              : 'bg-emerald-500/5 border-emerald-500/10 text-emerald-600'
            }`}
          >
            {subtitle}
          </motion.div>
        )}
      </div>

      {/* Optional Feature Image Visualization */}
      {image && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-5xl mx-auto mb-16 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-white border border-blue-500/10 rounded-[32px] p-2 overflow-hidden shadow-2xl">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto rounded-[24px] object-cover"
            />
            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60"></div>
            
            {/* Caption or Label if needed */}
            <div className="absolute bottom-6 left-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Active Simulation Data</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      { (input.items.length > 0 || processing.groups.length > 0 || output.items.length > 0) && (
        <div className={`flex flex-col lg:flex-row gap-8 lg:gap-4 items-stretch justify-center`}>


        {/* Step 1: Input */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className={`flex-1 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-[40px] p-6 md:p-8 md:py-12 shadow-2xl flex flex-col justify-center group/step transition-all duration-500 hover:border-blue-500/30`}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{input.title}</h3>

            <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/step:scale-110 transition-transform`}>
              {isCompute ? <Database className="w-6 h-6 text-blue-500" /> : <Microscope className="w-6 h-6 text-emerald-500" />}
            </div>
          </div>

          <div className="space-y-8 flex-grow">
            {input.items.map((item, idx) => (
              <div key={idx} className="group/item cursor-pointer">
                <div className="flex items-center gap-5 mb-3">
                  <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-opacity-100 transition-all ${
                    isCompute ? 'group-hover/item:border-blue-500/50 group-hover/item:bg-blue-500/5' : 'group-hover/item:border-emerald-500/50 group-hover/item:bg-emerald-500/5'
                  }`}>
                    <item.icon className={`w-6 h-6 ${isCompute ? 'text-blue-500' : 'text-emerald-500'}`} />
                  </div>
                  <span className={`text-base font-bold text-slate-100 transition-colors break-words flex-grow ${
                    isCompute ? 'group-hover/item:text-blue-500' : 'group-hover/item:text-emerald-500'
                  }`}>{item.label}</span>
                </div>
                {item.description && (
                  <p className="text-sm text-slate-400 pl-16 leading-relaxed opacity-80 group-hover/item:opacity-100 transition-opacity break-words">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Connector 1 */}
        <div className={`flex flex-row w-16 items-center justify-center py-4 relative`}>
           {isLoop && (
             <div className="absolute inset-0 flex items-center justify-center">
               <div className={`w-full h-px ${isCompute ? 'bg-blue-500/20' : 'bg-emerald-500/20'}`} />
             </div>
           )}
          <div className={`h-px w-full bg-gradient-to-r from-blue-500/10 via-blue-500 to-blue-500/10 relative overflow-hidden`}>
            <div className={`flow-dot w-2 h-2 rounded-full bg-blue-400 absolute top-1/2 -translate-y-1/2 left-0`} />
          </div>
          <motion.div 
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-2 z-10"
          >
            <ChevronRight className="text-blue-500 w-6 h-6" />
          </motion.div>
        </div>

        {/* Step 2: Processing */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`flex-[2.2] relative group/process`}
        >
          <div className={`absolute -inset-4 rounded-[60px] blur-3xl opacity-0 group-hover/process:opacity-100 transition-opacity duration-1000 ${
            isCompute ? 'bg-blue-500/10' : 'bg-emerald-500/10'
          }`} />
          
          <div className={`relative bg-slate-900 border rounded-[50px] p-1 shadow-glow overflow-hidden h-full flex flex-col ${
            isCompute ? 'border-blue-500/20' : 'border-emerald-500/20'
          }`}>
            <div className={`absolute inset-0 bg-gradient-to-br opacity-50 ${
              isCompute ? 'from-blue-500/10 via-transparent to-transparent' : 'from-emerald-500/10 via-transparent to-transparent'
            }`} />
            
            <div className="relative bg-slate-950/90 backdrop-blur-3xl rounded-[48px] p-8 md:p-10 h-full flex flex-col justify-center">

              <div className="text-center mb-12">
                <h3 className="text-xl md:text-3xl font-black text-white mb-3 tracking-tighter uppercase">{processing.title}</h3>
                <div className={`w-24 h-1 mx-auto rounded-full ${isCompute ? 'bg-blue-500' : 'bg-emerald-500'}`} />
              </div>

              {/* High-End Grid Card Variant (Replacing Circular) */}
              {isLoop ? (
                <div className="relative flex-grow flex items-center justify-center py-6">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {(() => {
                      const allItems = processing.groups.flatMap(g => g.items);
                      return allItems.slice(0, 8).map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className={`group/card relative bg-white/5 border border-white/5 rounded-3xl p-5 hover:border-blue-500/40 transition-all flex items-center gap-4 overflow-hidden`}
                          >
                            {/* Accent Glow */}
                            <div className={`absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity bg-gradient-to-br ${
                              isCompute ? 'from-blue-500/5 to-transparent' : 'from-emerald-500/5 to-transparent'
                            }`} />
                            
                            <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/card:scale-110 transition-all ${
                              isCompute ? 'group-hover/card:bg-blue-500 group-hover/card:border-blue-500' : 'group-hover/card:bg-emerald-500 group-hover/card:border-emerald-500'
                            }`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            
                            <div className="min-w-0">
                              <span className={`text-[10px] font-black uppercase tracking-[0.2em] block mb-1 ${
                                isCompute ? 'text-blue-500/60' : 'text-emerald-500/60'
                              }`}>Step {idx + 1}</span>
                              <span className="text-sm font-bold text-white block break-words leading-tight">{item.label}</span>
                            </div>
                          </motion.div>
                        );
                      });
                    })()}
                  </div>
                </div>

              ) : isQuadrant ? (
                /* Quadrant Variant Layout */
                <div className="relative flex-grow flex items-center justify-center py-10">
                  <div className="grid grid-cols-2 gap-8 w-full">
                    {processing.groups.slice(0, 4).map((group, gIdx) => (
                      <div key={gIdx} className={`bg-white/5 border border-white/5 rounded-[32px] p-8 hover:border-blue-500/40 transition-all group/qitem flex flex-col gap-4`}>
                        <div className="flex items-center justify-between">
                           <h4 className="text-xs font-black text-blue-500 uppercase tracking-widest">{group.title}</h4>
                           <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                              {(() => {
                                const Icon = group.items[0].icon;
                                return <Icon className="w-4 h-4 text-blue-500" />;
                              })()}
                           </div>
                        </div>

                        <div className="space-y-3">
                           {group.items.map((item, iIdx) => (
                             <div key={iIdx} className="text-sm font-bold text-slate-300 flex items-center gap-3">
                               <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
                               {item.label}
                             </div>
                           ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Central Node for Quadrant */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                     <div className={`w-24 h-24 rounded-full bg-slate-900 border-2 ${isCompute ? 'border-blue-500/50 shadow-glow' : 'border-emerald-500/50 shadow-glow-emerald'} flex items-center justify-center z-20`}>
                        <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full animate-pulse" />
                        <Sparkles className={`w-10 h-10 ${isCompute ? 'text-blue-500' : 'text-emerald-500'} relative z-30`} />
                     </div>
                  </div>
                </div>
              ) : (
                /* Standard & Split Layouts */
                <div className={`grid grid-cols-1 ${variant === 'split' ? 'lg:grid-cols-2' : ''} gap-8 flex-grow`}>
                  {processing.groups.map((group, gIdx) => (
                    <div key={gIdx} className="relative group/group">
                      <div className="relative bg-white/5 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-opacity-100 transition-all h-full group-hover/group:border-blue-500/40">
                        <h4 className={`text-[10px] font-black uppercase tracking-[0.3em] mb-6 flex items-center justify-between ${
                          isCompute ? 'text-blue-500/60' : 'text-emerald-500/60'
                        }`}>
                          {group.title}
                          <span className={`w-2 h-2 rounded-full animate-pulse ${isCompute ? 'bg-blue-500/50' : 'bg-emerald-500/50'}`} />
                        </h4>
                        <div className="grid grid-cols-1 gap-5">
                          {group.items.map((item, iIdx) => (
                            <div key={iIdx} className="flex items-center gap-4 group/pitem">
                              <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/pitem:scale-110 transition-all ${
                                isCompute ? 'group-hover/pitem:bg-blue-500 group-hover/pitem:border-blue-500' : 'group-hover/pitem:bg-emerald-500 group-hover/pitem:border-emerald-500'
                              }`}>
                                <item.icon className="w-5 h-5 text-white group-hover/pitem:scale-110" />
                              </div>
                              <span className="text-sm font-bold text-slate-300 group-hover/pitem:text-white transition-colors">{item.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Central Badge (Only for non-loop/non-quadrant) */}
              {!isLoop && !isQuadrant && (
                <div className="mt-12 flex justify-center">
                  <div className="relative">
                    <div className={`absolute inset-0 blur-2xl rounded-full animate-pulse scale-150 ${isCompute ? 'bg-blue-500/40' : 'bg-emerald-500/40'}`} />
                    <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br flex items-center justify-center shadow-glow animate-float overflow-hidden ${
                      isCompute ? 'from-blue-500 via-blue-400 to-blue-500' : 'from-emerald-500 via-teal-400 to-emerald-600'
                    }`}>
                      <Sparkles className="w-10 h-10 text-white relative z-10" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Connector 2 */}
        <div className={`flex flex-row w-16 items-center justify-center py-4 relative`}>
          <div className={`h-px w-full bg-gradient-to-r from-blue-500/10 via-blue-500 to-blue-500/10 relative overflow-hidden`}>
            <div className={`flow-dot w-2 h-2 rounded-full bg-blue-400 absolute top-1/2 -translate-y-1/2 left-0`} />
          </div>
          <motion.div 
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="mt-2 z-10"
          >
            <ChevronRight className="text-blue-500 w-6 h-6" />
          </motion.div>
        </div>

        {/* Step 3: Output */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className={`flex-1 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-[40px] p-6 md:p-8 md:py-12 shadow-2xl flex flex-col justify-center group/out transition-all duration-500 hover:border-blue-500/30`}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{output.title}</h3>

            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/out:scale-110 transition-transform">
              {isCompute ? <Network className="w-6 h-6 text-blue-500" /> : <Layers className="w-6 h-6 text-emerald-500" />}
            </div>
          </div>

          <div className="space-y-5 flex-grow">
            {output.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-5 p-5 rounded-3xl bg-white/5 border border-transparent hover:border-opacity-30 hover:bg-opacity-10 transition-all group/oitem">
                <div className={`w-2.5 h-2.5 rounded-full mt-2 flex-shrink-0 transition-transform ${
                  isCompute ? 'bg-blue-500 shadow-[0_0_10px_rgba(11,95,255,1)]' : 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,1)]'
                }`} />
                <div className="min-w-0 flex-grow">
                  <span className={`text-base font-bold text-slate-100 block mb-1 break-words transition-colors ${
                    isCompute ? 'group-hover/oitem:text-blue-500' : 'group-hover/oitem:text-emerald-500'
                  }`}>{item.label}</span>
                  {item.description && (
                    <p className="text-sm text-slate-400 leading-relaxed opacity-70 group-hover/oitem:opacity-100 transition-opacity break-words">
                      {item.description}
                    </p>
                  )}
                </div>

              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <motion.div
              animate={isCompute ? { scale: [1, 1.1, 1] } : { rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {isCompute ? <Cpu className="w-20 h-20 text-blue-500/10" /> : <Dna className="w-20 h-20 text-emerald-500/10" />}
            </motion.div>
          </div>
        </motion.div>
      </div>
      )}
    </div>
  );
};
