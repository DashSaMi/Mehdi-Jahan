import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 w-12 h-12 bg-[#FF3E83] text-white border-3 border-[#1D1D1F] rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_#1D1D1F] hover:bg-[#FFD600] hover:text-[#1D1D1F] transition-colors z-40"
          aria-label="Scroll to top"
        >
          <i className="fas fa-chevron-up text-lg font-black"></i>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
