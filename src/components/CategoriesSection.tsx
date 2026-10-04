import React from 'react';
import { AnimatedItem } from './AnimatedItem';

export const CategoriesSection: React.FC = () => {
  const categories = [
    {
      title: 'سرگرمی',
      desc: 'ویدیوهای خنده‌دار و ری‌اکشن‌ها',
      icon: 'fas fa-laugh-beam',
      direction: 'left' as const,
      delay: 0.1,
    },
    {
      title: 'گیمینگ',
      desc: 'استریم، چالش و بازی‌های جذاب',
      icon: 'fas fa-gamepad',
      direction: 'up' as const,
      delay: 0.2,
    },
    {
      title: 'چالش',
      desc: 'چالش‌های هیجانی و لحظات ماندگار',
      icon: 'fas fa-fire',
      direction: 'right' as const,
      delay: 0.3,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F0F2F5] overflow-hidden border-b-4 border-[#1D1D1F]">
      <div className="max-w-7xl mx-auto px-4">
        
        <AnimatedItem direction="up" className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="bg-[#7000FF] text-white font-black px-3 py-1 rounded-xl border-2 border-[#1D1D1F] text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_#1D1D1F] rotate-1">
              موضوعات
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1D1D1F]">
            نوع <span className="bg-[#FFD600] text-[#1D1D1F] px-3 py-1 rounded-2xl border-3 border-[#1D1D1F] inline-block shadow-[4px_4px_0px_0px_#1D1D1F] -rotate-1">محتوا</span>
          </h2>
        </AnimatedItem>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <AnimatedItem key={cat.title} direction={cat.direction} delay={cat.delay}>
              <div className="cat-card bg-white border-3 border-[#1D1D1F] rounded-3xl p-8 text-center h-full flex flex-col items-center justify-center shadow-[6px_6px_0px_0px_#1D1D1F] hover:shadow-[10px_10px_0px_0px_#FF3E83] hover:-translate-x-1 hover:-translate-y-1 transition-all">
                <div className="cat-icon w-16 h-16 bg-[#FFD600] border-2 border-[#1D1D1F] rounded-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_#1D1D1F] mb-4">
                  <i className={`${cat.icon} text-[#1D1D1F] text-3xl`}></i>
                </div>
                <h3 className="text-[#1D1D1F] font-black text-xl mb-2">{cat.title}</h3>
                <p className="text-[#1D1D1F]/80 font-bold text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </AnimatedItem>
          ))}
        </div>

      </div>
    </section>
  );
};
