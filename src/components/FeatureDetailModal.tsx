import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, FileDown, CheckCircle2, ChevronRight, Beaker } from 'lucide-react';

interface FeatureDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature: {
    title: string;
    subtitle?: string;
    description: string;
    fullExplanation: string[];
    capabilities: string[];
    processData?: any;
    videoThumbnail?: string;
  } | null;
}

export const FeatureDetailModal: React.FC<FeatureDetailModalProps> = ({ isOpen, onClose, feature }) => {
  if (!feature) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={onClose}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[32px] shadow-2xl relative"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-primary/10 px-8 py-6 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-text-primary">{feature.title}</h2>
                {feature.subtitle && <p className="text-primary font-bold text-sm uppercase tracking-widest mt-1">{feature.subtitle}</p>}
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-section-alt flex items-center justify-center text-text-secondary hover:text-primary transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12">
                {/* Detailed Explanation */}
                <div className="space-y-8">
                  <section>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Beaker className="text-primary" /> Scientific Overview
                    </h3>
                    <div className="space-y-4 text-text-secondary leading-relaxed break-words">
                      {feature.fullExplanation.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </section>

                  <section className="bg-section-alt p-8 rounded-3xl border border-primary/10">
                    <h3 className="text-xl font-bold mb-6">Core Capabilities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {feature.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-primary/5 shadow-sm overflow-hidden">
                          <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                          <span className="text-sm font-medium text-text-primary break-words">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Visuals & Assets */}
                <div className="space-y-8">
                  {/* Demo Video Placeholder */}
                  <div className="relative aspect-video rounded-3xl bg-text-primary overflow-hidden shadow-xl group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-bold text-sm">Platform Demo Video</span>
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-glow group-hover:scale-110 transition-transform cursor-pointer">
                          <Play size={24} fill="white" />
                        </div>
                      </div>
                    </div>
                    {/* Placeholder Background */}
                    <div className="absolute inset-0 -z-10 flex items-center justify-center bg-primary/5">
                      <Diamond className="w-20 h-20 text-primary/10" />
                    </div>
                  </div>

                  {/* Brochure Download */}
                  <div className="bg-gradient p-8 rounded-[32px] text-white shadow-glow bg-[#0f269a]">
                    <h4 className="text-xl font-bold mb-4">Scientific Brochure</h4>
                    <p className="text-white/80 text-sm mb-6 leading-relaxed">
                      Download the complete technical specification and peer-reviewed methodology for {feature.title}.
                    </p>
                    <button className="w-full bg-white text-primary py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/90 transition-all shadow-lg text-[#0f269a]">
                      <FileDown size={20} /> Download PDF Brochure
                    </button>
                  </div>

                  {/* Scientific Audit Callout */}
                  <div className="p-6 border-2 border-dashed border-primary/20 rounded-3xl">
                    <p className="text-[11px] text-text-secondary uppercase font-black tracking-widest mb-2">Compliance Status</p>
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <CheckCircle2 size={16} /> FDA 21 CFR Part 11 Validated
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Navigation / Close */}
            <div className="p-8 border-t border-primary/5 text-center">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-section-alt text-text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all flex items-center gap-2 mx-auto"
              >
                Close Exploration <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Diamond = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 12L12 22L22 12L12 2Z" />
  </svg>
);
