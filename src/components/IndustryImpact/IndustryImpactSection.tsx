import { useState } from 'react';
import BackgroundPattern from './BackgroundPattern';
import IndustryTabs from './IndustryTabs';
import CardGrid from './CardGrid';
import { industryData } from '../../data/industryImpactData';

export default function IndustryImpactSection() {
  const [activeTab, setActiveTab] = useState<string>('software');

  const activeItems = industryData[activeTab] || [];

  return (
    <section className="relative w-full py-24 px-6 md:px-8 overflow-hidden bg-[#ffffff] border-y border-slate-100">
      {/* Muted background burst (under 10% opacity) */}
      <BackgroundPattern />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col">
        
        {/* Header Block: Stacked vertically to allow title to stay on a single line on desktop */}
        <div className="w-full flex flex-col gap-8 mb-16 border-b border-slate-100 pb-10">
          
          {/* Header top */}
          <div className="w-full text-left space-y-3.5">
            <span className="inline-block text-[11px] font-bold text-[#0f269a] tracking-[0.2em] uppercase font-mono">
              VALUE DRIVER ENGINE
            </span>
            
            <h2 
              className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[52px] font-bold text-[#0f269a] tracking-tight lg:whitespace-nowrap"
              style={{ lineHeight: 1.25 }}
            >
              Quantified Impact Across the Value Chain
            </h2>

            <p className="text-slate-500 text-base sm:text-lg font-light leading-relaxed max-w-3xl">
              Transforming scientific data into measurable business outcomes through AI, Informatics, and Digital Acceleration.
            </p>
          </div>

          {/* Tabs bottom */}
          <div className="w-full flex justify-start">
            <IndustryTabs
              activeTab={activeTab}
              onChange={(tabId) => setActiveTab(tabId)}
            />
          </div>

        </div>

        {/* Card Grid container */}
        <CardGrid
          items={activeItems}
          activeTab={activeTab}
        />

      </div>
    </section>
  );
}
