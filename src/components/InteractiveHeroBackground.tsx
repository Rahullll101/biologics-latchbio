import React from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

export const InteractiveHeroBackground = () => {
  
  // Scroll Parallax
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 45]);

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  };

  const moveX = useTransform(springX, [-0.5, 0.5], [-30, 30]);
  const moveY = useTransform(springY, [-0.5, 0.5], [-30, 30]);

  return (
    <div 
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
      onMouseMove={handleMouseMove}
    >
      {/* Large Glowing Orb 1 */}
      <motion.div 
        style={{ y: y1, x: moveX, scale: 1.2 }}
        className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]"
      />

      {/* Large Glowing Orb 2 */}
      <motion.div 
        style={{ y: y2, x: moveY, scale: 0.8 }}
        className="absolute top-1/2 -right-24 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px]"
      />

      {/* Floating Geometric Elements */}
      <motion.div
        style={{ y: y1, rotate, x: moveX }}
        className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-blue-500/5 rounded-3xl"
      />
      
      <motion.div
        style={{ y: y2, rotate: -rotate, x: moveY }}
        className="absolute bottom-1/4 left-1/3 w-24 h-24 border-2 border-blue-500/5 rounded-full"
      />

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle, #0f269a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </div>
  );
};
