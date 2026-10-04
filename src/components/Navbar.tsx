import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'خانه', href: '#hero' },
    { name: 'درباره من', href: '#about' },
    { name: 'آمار', href: '#stats' },
    { name: 'ویدیوها', href: '#videos' },
    { name: 'مرچ', href: '#merch' },
    { name: 'مسیر', href: '#journey' },
    { name: 'تماس', href: '#contact' },
    { name: 'سازنده سایت', href: '#creator' },
  ];

  return (
    <nav
      className={`navbar fixed left-0 right-0 z-50 px-4 py-3 transition-all duration-300 ${
        scrolled ? 'bg-white/95 border-b-4 border-[#1D1D1F] shadow-[0_4px_0_0_#1D1D1F]' : 'bg-white/90 border-b-3 border-[#1D1D1F]'
      }`}
      style={{ top: '44px' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo - Animated from Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-2xl bg-[#FF3E83] flex items-center justify-center text-white font-black text-xl rotate-3 border-2 border-[#1D1D1F] shadow-[3px_3px_0px_0px_#1D1D1F]">
            <i className="fab fa-youtube text-white text-base"></i>
          </div>
          <span className="text-[#1D1D1F] font-black text-2xl tracking-tighter italic">مهدی جهان</span>
        </motion.div>

        {/* Desktop Navigation Links - Animated from Up */}
        <ul className="hidden lg:flex items-center gap-6 text-sm text-[#1D1D1F] font-black uppercase italic bg-white py-2 px-6 rounded-2xl border-2 border-[#1D1D1F] shadow-[3px_3px_0px_0px_#1D1D1F]">
          {navLinks.map((link, idx) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
            >
              <a
                href={link.href}
                className="hover:text-[#FF3E83] transition-colors duration-200 py-1"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Subscribe Button - Animated from Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex"
        >
          <a
            href="https://youtube.com/@mehdijahaan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-vibrant text-white text-sm font-black px-6 py-2.5 rounded-2xl flex items-center gap-2 border-2 border-[#1D1D1F]"
          >
            <i className="fab fa-youtube text-base"></i> سابسکرایب
          </a>
        </motion.div>

        {/* Hamburger Mobile Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#1D1D1F] text-2xl p-2 bg-[#FFD600] rounded-xl border-2 border-[#1D1D1F] shadow-[2px_2px_0px_0px_#1D1D1F] focus:outline-none"
          aria-label="Toggle menu"
        >
          <i className={mobileMenuOpen ? 'fas fa-times text-[#FF3E83]' : 'fas fa-bars'}></i>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-3 bg-white rounded-2xl p-5 border-4 border-[#1D1D1F] shadow-[6px_6px_0px_0px_#1D1D1F] overflow-hidden"
          >
            <ul className="flex flex-col gap-2 text-sm text-[#1D1D1F] font-black">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2.5 px-4 rounded-xl hover:bg-[#FFD600] hover:text-[#1D1D1F] border-2 border-transparent hover:border-[#1D1D1F] transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://youtube.com/@mehdijahaan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-vibrant mt-4 w-full text-white font-black py-3 rounded-xl flex items-center justify-center gap-2 text-sm border-2 border-[#1D1D1F] shadow-[4px_4px_0px_0px_#1D1D1F]"
            >
              <i className="fab fa-youtube"></i> سابسکرایب در یوتیوب
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
