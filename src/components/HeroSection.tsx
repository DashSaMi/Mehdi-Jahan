import React from 'react';
import { motion } from 'motion/react';

export const HeroSection: React.FC = () => {
  const particles = Array.from({ length: 20 });

  return (
    <section
      id="hero"
      className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden pt-36 pb-20"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 5 + 3}px`,
              height: `${Math.random() * 5 + 3}px`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 12 + 8}s`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 grid-overlay opacity-100 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
        
        {/* Right Side / Text Content - ANIMATES IN FROM RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex-1 text-center lg:text-right hero-text"
        >
          <div className="inline-flex items-center gap-2 bg-[#FF3E83] text-white border-3 border-[#1D1D1F] rounded-2xl px-4 py-2 mb-6 text-sm font-black shadow-[4px_4px_0px_0px_#1D1D1F] -rotate-1">
            <span className="w-3 h-3 rounded-full bg-[#FFD600] border border-[#1D1D1F] animate-pulse"></span>
            یوتیوبر / استریمر ایرانی
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#1D1D1F] leading-none mb-6 tracking-tighter">
            <span className="glitch" data-text="مهدی جهان">
              مهدی جهان
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#1D1D1F] font-black mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
            میخوای از خنده پرتاب بشی؟ یدور تو کانال بچرخ 🤣<br />
            تولیدکننده محتوای سرگرمی — عاشق سوژه‌های عجیب و لحظه‌های خنده‌دار!
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://youtube.com/@mehdijahaan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-vibrant text-white font-black px-8 py-4 rounded-2xl flex items-center gap-2 text-base border-3 border-[#1D1D1F] shadow-[6px_6px_0px_0px_#1D1D1F]"
            >
              <i className="fab fa-youtube text-2xl"></i> کانال یوتیوب
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="btn-cyan text-[#1D1D1F] font-black px-8 py-4 rounded-2xl flex items-center gap-2 text-base border-3 border-[#1D1D1F] shadow-[6px_6px_0px_0px_#1D1D1F]"
            >
              <i className="fas fa-user"></i> درباره من
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 justify-center lg:justify-start flex-wrap">
            <a
              href="https://youtube.com/@mehdijahaan"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="YouTube"
            >
              <i className="fab fa-youtube text-lg"></i>
            </a>
            <a
              href="https://instagram.com/mehdijahaan"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="Instagram"
            >
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a
              href="https://t.me/Mehdijahaaan"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="Telegram"
            >
              <i className="fab fa-telegram text-lg"></i>
            </a>
            <a
              href="https://twitter.com/mehdijahaan"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="Twitter"
            >
              <i className="fab fa-twitter text-lg"></i>
            </a>
            <a
              href="https://twitch.tv/mehdijahaan"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="Twitch"
            >
              <i className="fab fa-twitch text-lg"></i>
            </a>
            <a
              href="https://kick.com/mehdijahaan"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon font-black text-sm text-[#1D1D1F]"
              title="Kick"
            >
              K
            </a>
          </div>
        </motion.div>

        {/* Left Side / Avatar Image - ANIMATES IN FROM LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex-shrink-0 flex items-center justify-center relative"
        >
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-[#FF3E83]/30 blur-2xl"></div>
          <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full avatar-ring p-[4px] border-4 border-[#1D1D1F] shadow-[8px_8px_0px_0px_#1D1D1F]"></div>
          <div
            className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-[#1D1D1F] bg-white shadow-[10px_10px_0px_0px_#FF3E83]"
          >
            <img
              src="https://mehdijahaan.com/Image/your%20image.png"
              alt="مهدی جهان"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div
            className="absolute -bottom-2 -left-2 bg-[#FF3E83] text-white text-sm font-black px-4 py-2 rounded-2xl border-3 border-[#1D1D1F] shadow-[4px_4px_0px_0px_#1D1D1F] flex items-center gap-2 -rotate-3"
          >
            <i className="fab fa-youtube text-base"></i>
            <span>یوتیوبر</span>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 text-xs animate-bounce">
        <span>اسکرول کن</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
};
