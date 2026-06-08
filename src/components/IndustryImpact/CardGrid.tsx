import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ImpactItem } from '../../data/industryImpactData';
import ImpactCard from './ImpactCard';

interface CardGridProps {
  items: ImpactItem[];
  activeTab: string;
}

export default function CardGrid({ items, activeTab }: CardGridProps) {
  // Track which card is hovered to enable neighbor-fading focus states
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const isAnyHovered = hoveredId !== null;

  return (
    <div className="relative w-full py-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="
            flex md:grid
            overflow-x-auto md:overflow-x-visible
            snap-x snap-mandatory scrollbar-none
            pb-8 md:pb-0
            gap-8 md:gap-6 lg:gap-8
            grid-cols-1 md:grid-cols-3 lg:grid-cols-5
            w-full
          "
        >
          {items.map((item) => {
            const isHovered = hoveredId === item.id;

            return (
              <div
                key={item.id}
                className="
                  snap-center shrink-0
                  min-w-[280px] w-[85%] sm:w-[50%] md:w-auto md:min-w-0
                  py-4
                "
              >
                <ImpactCard
                  item={item}
                  isHovered={isHovered}
                  isAnyHovered={isAnyHovered}
                  onHoverStart={() => setHoveredId(item.id)}
                  onHoverEnd={() => setHoveredId(null)}
                />
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
