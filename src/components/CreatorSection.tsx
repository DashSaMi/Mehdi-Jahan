import React from 'react';
import { AnimatedItem } from './AnimatedItem';

export const CreatorSection: React.FC = () => {
  return (
    <section id="creator" className="creator-section py-24 sm:py-32 relative overflow-hidden bg-[#F0F2F5] border-b-4 border-[#1D1D1F]">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Title */}
        <AnimatedItem direction="up" className="text-center mb-14">
          <span className="bg-[#7000FF] text-white font-black px-4 py-1.5 rounded-xl border-2 border-[#1D1D1F] text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_#1D1D1F] inline-block mb-4 -rotate-1">
            سازنده سایت
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1D1D1F] leading-tight">
            من این سایت رو<br />
            <span className="bg-[#FFD600] text-[#1D1D1F] px-4 py-1.5 rounded-2xl border-3 border-[#1D1D1F] inline-block shadow-[6px_6px_0px_0px_#1D1D1F] rotate-1 mt-2">ساختم!</span>
          </h2>
        </AnimatedItem>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          
          {/* Creator Avatar & Tags - ANIMATE FROM LEFT */}
          <AnimatedItem direction="left" className="flex-shrink-0 text-center">
            <div className="relative inline-block">
              <div
                className="w-36 h-36 sm:w-40 sm:h-40 rounded-3xl overflow-hidden border-4 border-[#1D1D1F] bg-[#FF3E83] shadow-[6px_6px_0px_0px_#1D1D1F]"
              >
                <img
                  src="/cro.png"
                  alt="سامان کریمیان"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#FFD600] border-2 border-[#1D1D1F] rounded-2xl px-3 py-1 text-xs text-[#1D1D1F] font-black shadow-[3px_3px_0px_0px_#1D1D1F]">
                <i className="fas fa-code ml-1"></i>Dev
              </div>
            </div>

            <h3 className="text-[#1D1D1F] font-black text-2xl mt-5">سامان کریمیان</h3>
            <p className="text-[#1D1D1F]/70 font-bold text-sm mt-1">Saman Karimian</p>

            <div className="flex justify-center gap-2 mt-4 flex-wrap">
              {['HTML', 'CSS', 'JS', 'Tailwind', 'React', 'Motion'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-black px-3 py-1.5 rounded-xl border-2 border-[#1D1D1F] bg-[#00D1FF] text-[#1D1D1F] shadow-[2px_2px_0px_0px_#1D1D1F]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedItem>

          {/* Creator Details & Tech Stack - ANIMATE FROM RIGHT */}
          <AnimatedItem direction="right" className="flex-1 text-center md:text-right">
            
            <div
              className="rounded-3xl p-5 sm:p-6 mb-5 relative bg-[#FFD600] border-3 border-[#1D1D1F] shadow-[6px_6px_0px_0px_#1D1D1F]"
            >
              <p className="text-[#1D1D1F] font-bold text-sm sm:text-base leading-relaxed">
                سلام! من <strong className="bg-[#FF3E83] text-white px-2 py-0.5 rounded-lg border border-[#1D1D1F]">سامان کریمیان</strong> هستم و این وب‌سایت رو با عشق و علاقه‌ای که به{' '}
                <strong className="bg-white text-[#1D1D1F] px-2 py-0.5 rounded-lg border border-[#1D1D1F]">مهدی جهان</strong> دارم ساختم. مهدی یکی از بهترین یوتیوبرهای ایرانیه و من یه فن بزرگش هستم — این سایت هدیه‌ایه از طرف من به اون و همه فن‌هاش! 💙
              </p>
            </div>

            <div className="rounded-3xl p-5 sm:p-6 text-right bg-white border-4 border-[#1D1D1F] shadow-[6px_6px_0px_0px_#1D1D1F]">
              <h4 className="text-[#1D1D1F] font-black text-lg mb-4 flex items-center gap-2">
                <i className="fas fa-hammer text-[#FF3E83]"></i> چطور این سایت رو ساختم؟
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-[#FF3E83] border-2 border-[#1D1D1F] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[2px_2px_0px_0px_#1D1D1F]">
                    <span className="text-white text-xs font-black">۱</span>
                  </div>
                  <p className="text-[#1D1D1F] font-bold text-xs sm:text-sm leading-relaxed">
                    <span className="text-[#7000FF] font-black">React + Vite</span> — معماری کامپوننت‌محور و مدرن وب
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-[#FFD600] border-2 border-[#1D1D1F] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[2px_2px_0px_0px_#1D1D1F]">
                    <span className="text-[#1D1D1F] text-xs font-black">۲</span>
                  </div>
                  <p className="text-[#1D1D1F] font-bold text-xs sm:text-sm leading-relaxed">
                    <span className="text-[#7000FF] font-black">Framer Motion</span> — انیمیشن‌های ورود نرم از چپ و راست هنگام باز شدن و اسکرول
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-[#00D1FF] border-2 border-[#1D1D1F] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[2px_2px_0px_0px_#1D1D1F]">
                    <span className="text-[#1D1D1F] text-xs font-black">۳</span>
                  </div>
                  <p className="text-[#1D1D1F] font-bold text-xs sm:text-sm leading-relaxed">
                    <span className="text-[#7000FF] font-black">Tailwind CSS v4</span> — استایل‌دهی نئوبروتالیست با پالت رنگ‌های زنده
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-[#7000FF] border-2 border-[#1D1D1F] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[2px_2px_0px_0px_#1D1D1F]">
                    <span className="text-white text-xs font-black">۴</span>
                  </div>
                  <p className="text-[#1D1D1F] font-bold text-xs sm:text-sm leading-relaxed">
                    <span className="text-[#7000FF] font-black">CSS Animations</span> — افکت‌های نئوبروتالیست و انیمیشن‌های تعاملی
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-[#FF3E83] border-2 border-[#1D1D1F] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[2px_2px_0px_0px_#1D1D1F]">
                    <span className="text-white text-xs font-black">۵</span>
                  </div>
                  <p className="text-[#1D1D1F] font-bold text-xs sm:text-sm leading-relaxed">
                    <span className="text-[#7000FF] font-black">Vazirmatn Font</span> + <span className="text-[#7000FF] font-black">Font Awesome</span> — تایپوگرافی فارسی و آیکون‌ها
                  </p>
                </div>
              </div>
            </div>

          </AnimatedItem>

        </div>

        {/* Love Footer Note */}
        <AnimatedItem direction="scale" delay={0.3} className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-2xl px-6 sm:px-8 py-3.5 flex-wrap justify-center bg-white border-3 border-[#1D1D1F] shadow-[4px_4px_0px_0px_#1D1D1F]">
            <i className="fas fa-heart text-[#FF3E83] text-lg animate-pulse"></i>
            <span className="text-[#1D1D1F] font-black text-sm sm:text-base">
              این سایت با عشق فن‌بازی ساخته شده
            </span>
            <i className="fas fa-heart text-[#FF3E83] text-lg animate-pulse"></i>
          </div>
          <p className="text-[#1D1D1F]/70 font-bold text-xs mt-4">
            مهدی عزیز — اگه این سایت رو دیدی، باهامون در تماس باش تا بهترش کنیم! 🙏
          </p>
        </AnimatedItem>

      </div>
    </section>
  );
};
