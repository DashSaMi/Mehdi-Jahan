import React from 'react';
import { AnimatedItem } from './AnimatedItem';

export const JourneySection: React.FC = () => {
  const milestones = [
    {
      year: '۱۳۹۸ — Oct 2018',
      title: 'شروع کانال یوتیوب',
      desc: 'اولین ویدیو رو آپلود کردم — قدمی که همه چیز رو تغییر داد و شروع یه ماجرای جدید بود!',
      icon: 'fas fa-star',
      direction: 'right' as const,
      color: 'bg-red-600',
    },
    {
      year: '۱۴۰۱',
      title: 'رشد سریع و شروع استریم',
      desc: 'وارد دنیای استریمینگ شدم، مخاطبان بیشتری پیدا کردم و محتوای متنوع‌تری تولید کردم.',
      icon: 'fas fa-users',
      direction: 'left' as const,
      color: 'bg-red-600',
    },
    {
      year: '۱۴۰۴',
      title: '۱۶۸ هزار سابسکرایبر و ۳۹ میلیون بازدید',
      desc: 'با بیش از ۳۱۶ ویدیو و ۳۹ میلیون بازدید، یه جامعه بزرگ از طرفداران ساختم!',
      icon: 'fas fa-trophy',
      direction: 'right' as const,
      color: 'bg-red-600',
    },
    {
      year: '۱۴۰۵ — آینده روشن',
      title: 'مرچ اختصاصی + رکوردهای جدید!',
      desc: 'در راهه: مرچ اختصاصی، محتوای بیشتر، و پیشرفت بیشتر. آینده مهدی جهان خیلی روشنه! 🚀',
      icon: 'fas fa-rocket',
      direction: 'left' as const,
      color: 'bg-amber-500 text-black',
      highlight: true,
    },
  ];

  return (
    <section id="journey" className="py-20 sm:py-28 bg-[#F0F2F5] overflow-hidden border-b-4 border-[#1D1D1F]">
      <div className="max-w-3xl mx-auto px-4">
        
        <AnimatedItem direction="up" className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="bg-[#7000FF] text-white font-black px-3 py-1 rounded-xl border-2 border-[#1D1D1F] text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_#1D1D1F] -rotate-1">
              مسیر
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1D1D1F]">
            مسیر <span className="bg-[#FFD600] text-[#1D1D1F] px-3 py-1 rounded-2xl border-3 border-[#1D1D1F] inline-block shadow-[4px_4px_0px_0px_#1D1D1F] rotate-1">من</span>
          </h2>
        </AnimatedItem>

        {/* Timeline Container */}
        <div className="relative tl-line pr-8 space-y-8 sm:space-y-10 border-r-4 border-[#1D1D1F]">
          {milestones.map((item, idx) => (
            <AnimatedItem key={idx} direction={item.direction} delay={0.1 * idx}>
              <div className="relative">
                {/* Timeline Icon Badge */}
                <div
                  className="absolute -right-[43px] w-9 h-9 rounded-2xl bg-[#FF3E83] text-white border-2 border-[#1D1D1F] flex items-center justify-center shadow-[2px_2px_0px_0px_#1D1D1F]"
                >
                  <i className={`${item.icon} text-xs text-white`}></i>
                </div>

                {/* Card */}
                <div
                  className="bg-white border-3 border-[#1D1D1F] rounded-3xl p-6 shadow-[6px_6px_0px_0px_#1D1D1F] hover:shadow-[10px_10px_0px_0px_#00D1FF] hover:-translate-x-1 hover:-translate-y-1 transition-all"
                >
                  <span
                    className="inline-block text-xs font-black px-3 py-1 rounded-xl border-2 border-[#1D1D1F] bg-[#FFD600] text-[#1D1D1F] shadow-[2px_2px_0px_0px_#1D1D1F] mb-2"
                  >
                    {item.year}
                  </span>
                  <h3 className="text-[#1D1D1F] font-black text-lg sm:text-xl mb-2">{item.title}</h3>
                  <p className="text-[#1D1D1F]/80 font-bold text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>

      </div>
    </section>
  );
};
