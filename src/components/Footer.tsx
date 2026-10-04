import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1D1D1F] text-white border-t-4 border-[#1D1D1F] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FF3E83] border-2 border-white flex items-center justify-center shadow-[3px_3px_0px_0px_#FFD600]">
              <i className="fab fa-youtube text-white text-lg"></i>
            </div>
            <div>
              <p className="text-white font-black text-xl leading-tight">مهدی جهان</p>
              <p className="text-[#FFD600] font-bold text-xs">یوتیوبر / استریمر — از ۲۰۱۸</p>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap justify-center">
            <a
              href="https://youtube.com/@mehdijahaan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-[#FF3E83] border-2 border-white rounded-2xl flex items-center justify-center text-white shadow-[2px_2px_0px_0px_#FFD600] hover:-translate-y-1 transition-all"
              title="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://instagram.com/mehdijahaan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-[#7000FF] border-2 border-white rounded-2xl flex items-center justify-center text-white shadow-[2px_2px_0px_0px_#FFD600] hover:-translate-y-1 transition-all"
              title="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://t.me/Mehdijahaaan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-[#00D1FF] border-2 border-white rounded-2xl flex items-center justify-center text-[#1D1D1F] shadow-[2px_2px_0px_0px_#FFD600] hover:-translate-y-1 transition-all"
              title="Telegram"
            >
              <i className="fab fa-telegram"></i>
            </a>
            <a
              href="https://twitter.com/mehdijahaan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-white border-2 border-white rounded-2xl flex items-center justify-center text-[#1D1D1F] shadow-[2px_2px_0px_0px_#FFD600] hover:-translate-y-1 transition-all"
              title="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://twitch.tv/mehdijahaan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-[#7000FF] border-2 border-white rounded-2xl flex items-center justify-center text-white shadow-[2px_2px_0px_0px_#FFD600] hover:-translate-y-1 transition-all"
              title="Twitch"
            >
              <i className="fab fa-twitch"></i>
            </a>
            <a
              href="https://kick.com/mehdijahaan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-[#FFD600] border-2 border-white rounded-2xl flex items-center justify-center font-black text-xs text-[#1D1D1F] shadow-[2px_2px_0px_0px_#FF3E83] hover:-translate-y-1 transition-all"
              title="Kick"
            >
              K
            </a>
          </div>

        </div>

        <div className="border-t-2 border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-bold text-gray-300">
          <p>© ۱۴۰۵ مهدی جهان — همه حقوق محفوظ است</p>
          <p className="flex items-center gap-1">
            ساخته شده با <i className="fas fa-heart text-[#FF3E83] mx-1"></i> توسط{' '}
            <span className="text-[#FFD600] font-black">سامان کریمیان</span> — یه فن بزرگ مهدی جهان
          </p>
        </div>
      </div>
    </footer>
  );
};
