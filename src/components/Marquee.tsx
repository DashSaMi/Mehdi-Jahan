import React from 'react';

export const Marquee: React.FC = () => {
  const marqueeItems = [
    '🎬 یوتیوبر',
    '🎮 استریمر',
    '😂 محتوای سرگرمی',
    '🔥 ویدیوهای جدید',
    '🌟 مهدی جهان',
    '🇮🇷 ایران',
    '📅 از ۲۰۱۸',
  ];

  const fullList = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="bg-[#FF3E83] py-4 overflow-hidden border-y-4 border-[#1D1D1F] shadow-[0_4px_0_0_#1D1D1F]">
      <div className="marquee-track text-white font-black text-base select-none">
        {fullList.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="tracking-wider whitespace-nowrap bg-[#FFD600] text-[#1D1D1F] px-3 py-1 rounded-xl border-2 border-[#1D1D1F] shadow-[2px_2px_0px_0px_#1D1D1F]">{item}</span>
            <span className="text-[#FFD600] text-xl font-black mx-1">★</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
