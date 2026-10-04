import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SiteAlertProps {
  onHeightChange?: (height: number) => void;
}

export const SiteAlert: React.FC<SiteAlertProps> = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        id="site-alert"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-[999] bg-[#FF3E83] text-white py-2.5 px-4 border-b-3 border-[#1D1D1F] shadow-[0_4px_0_0_#1D1D1F]"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3 text-xs sm:text-sm font-black">
            <span className="text-lg">🚧</span>
            <span className="bg-[#FFD600] text-[#1D1D1F] px-2 py-0.5 rounded-lg border-2 border-[#1D1D1F] font-black">
              این سایت هنوز کامل نشده!
            </span>
            <span className="text-white hidden sm:inline">
              — مهدی اگر با ما در تماس باشی، می‌تونیم این سایت رو خیلی بهتر بسازیم 🔥
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://t.me/Mehdijahaaan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFD600] text-[#1D1D1F] font-black text-xs px-3.5 py-1.5 rounded-xl border-2 border-[#1D1D1F] shadow-[2px_2px_0px_0px_#1D1D1F] hover:translate-x-0.5 hover:translate-y-0.5 transition-all whitespace-nowrap flex items-center gap-1.5"
            >
              <i className="fab fa-telegram"></i>
              <span>تماس با مهدی</span>
            </a>
            <button
              onClick={() => setIsVisible(false)}
              className="text-[#1D1D1F] bg-white hover:bg-[#FFD600] border-2 border-[#1D1D1F] rounded-lg w-7 h-7 flex items-center justify-center font-black text-xs transition-colors"
              aria-label="Close alert"
            >
              ✕
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
