import { motion } from 'framer-motion';

interface TabOption {
  id: string;
  label: string;
}

interface IndustryTabsProps {
  activeTab: string;
  onChange: (tabId: string) => void;
}

export default function IndustryTabs({ activeTab, onChange }: IndustryTabsProps) {
  const tabs: TabOption[] = [
    { id: 'software', label: 'Software & AI' },
    { id: 'preclinical', label: 'Preclinical / Early Dev' },
    { id: 'clinical', label: 'Clinical Pharmacology' },
    { id: 'cmc', label: 'CMC / Formulation' },
    { id: 'regulatory', label: 'Regulatory Affairs' }
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 relative z-10">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className="relative px-7 py-3 rounded-full text-[13px] font-semibold tracking-wide border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0f269a]/30 overflow-hidden"
            style={{
              borderColor: isActive ? 'transparent' : '#e2e8f0',
              color: isActive ? '#ffffff' : '#64748b',
              background: isActive ? 'transparent' : '#ffffff',
            }}
            aria-selected={isActive}
            role="tab"
          >
            {/* Sliding Premium Active Background Pill */}
            {isActive && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-[#0f269a] z-0"
                transition={{ type: 'spring', stiffness: 350, damping: 32 }}
              />
            )}

            {/* Tab Label Text */}
            <span className="relative z-10">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
