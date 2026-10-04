import React, { useState, useEffect, useRef } from 'react';
import { AnimatedItem } from './AnimatedItem';

export const StatsSection: React.FC = () => {
  const [counted, setCounted] = useState(false);
  const [counts, setCounts] = useState({
    subs: 0,
    views: 0,
    videos: 0,
    years: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !counted) {
          setCounted(true);
          
          const dur = 2000;
          const steps = 60;
          const stepTime = dur / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            
            setCounts({
              subs: Math.min(168, Math.floor(168 * progress)),
              views: Math.min(39.5, parseFloat((39.5 * progress).toFixed(1))),
              videos: Math.min(316, Math.floor(316 * progress)),
              years: Math.min(6, Math.floor(6 * progress)),
            });

            if (currentStep >= steps) {
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [counted]);

  const statList = [
    {
      id: 'subs',
      num: `${counts.subs}K`,
      label: 'سابسکرایبر',
      icon: 'fas fa-users',
      direction: 'left' as const,
      delay: 0.1,
    },
    {
      id: 'views',
      num: `${counts.views}M`,
      label: 'بازدید کل',
      icon: 'fas fa-eye',
      direction: 'right' as const,
      delay: 0.2,
    },
    {
      id: 'videos',
      num: `${counts.videos}`,
      label: 'ویدیو منتشرشده',
      icon: 'fas fa-video',
      direction: 'left' as const,
      delay: 0.3,
    },
    {
      id: 'years',
      num: `+${counts.years}`,
      label: 'سال از شروع کانال',
      icon: 'fas fa-calendar-alt',
      direction: 'right' as const,
      delay: 0.4,
    },
  ];

  return (
    <section ref={sectionRef} id="stats" className="py-20 sm:py-28 bg-[#F0F2F5] overflow-hidden border-b-4 border-[#1D1D1F]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title Header */}
        <AnimatedItem direction="up" className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="bg-[#7000FF] text-white font-black px-3 py-1 rounded-xl border-2 border-[#1D1D1F] text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_#1D1D1F] -rotate-1">
              آمار کانال
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1D1D1F]">
            آمار <span className="bg-[#FFD600] text-[#1D1D1F] px-3 py-1 rounded-2xl border-3 border-[#1D1D1F] inline-block shadow-[4px_4px_0px_0px_#1D1D1F] rotate-1">کانال</span>
          </h2>
          <p className="text-[#1D1D1F] font-bold mt-3 text-sm">آمار واقعی مهدی جهان — به‌روزرسانی شده</p>
        </AnimatedItem>

        {/* Stat Cards Grid - Alternating Left & Right Animations */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statList.map((stat) => (
            <AnimatedItem
              key={stat.id}
              direction={stat.direction}
              delay={stat.delay}
            >
              <div className="stat-box bg-white border-3 border-[#1D1D1F] rounded-3xl p-5 sm:p-7 text-center h-full flex flex-col justify-between shadow-[6px_6px_0px_0px_#1D1D1F] hover:shadow-[10px_10px_0px_0px_#FF3E83] hover:-translate-x-1 hover:-translate-y-1 transition-all">
                <div>
                  <div className="text-3xl sm:text-5xl font-black text-[#FF3E83] mb-2 font-mono dir-ltr tracking-tight">
                    {stat.num}
                  </div>
                  <p className="text-[#1D1D1F] text-xs sm:text-sm font-black">{stat.label}</p>
                </div>
                <div className="flex justify-center mt-4">
                  <div className="w-12 h-12 bg-[#FFD600] rounded-2xl border-2 border-[#1D1D1F] flex items-center justify-center shadow-[2px_2px_0px_0px_#1D1D1F]">
                    <i className={`${stat.icon} text-[#1D1D1F] text-lg`}></i>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>

        {/* Joined Note */}
        <AnimatedItem direction="up" delay={0.5} className="text-center mt-8">
          <span className="text-[#1D1D1F] font-black text-xs inline-flex items-center gap-2 bg-[#FFD600] px-5 py-2.5 rounded-2xl border-3 border-[#1D1D1F] shadow-[4px_4px_0px_0px_#1D1D1F] -rotate-1">
            <i className="fas fa-calendar-check text-[#FF3E83] text-sm"></i>
            عضویت در یوتیوب: ۱۵ اکتبر ۲۰۱۸ — <span className="text-[#1D1D1F] underline decoration-2">ایران</span>
          </span>
        </AnimatedItem>

      </div>
    </section>
  );
};
