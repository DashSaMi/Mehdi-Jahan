import React from 'react';
import { AnimatedItem } from './AnimatedItem';

export const AboutSection: React.FC = () => {
  const skills = [
    { name: 'محتوای سرگرمی', percent: 95 },
    { name: 'استریمینگ', percent: 88 },
    { name: 'ادیت و تدوین', percent: 80 },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F0F2F5] overflow-hidden border-b-4 border-[#1D1D1F]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image - ANIMATES FROM LEFT */}
          <AnimatedItem direction="left" delay={0.1} className="flex-shrink-0">
            <div className="relative">
              <div
                className="w-64 sm:w-72 rounded-3xl overflow-hidden border-4 border-[#1D1D1F] bg-white shadow-[10px_10px_0px_0px_#00D1FF]"
                style={{ height: '340px' }}
              >
                <img
                  src="https://mehdijahaan.com/Image/your%20image.png"
                  alt="مهدی جهان"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute top-4 -left-6 bg-[#FFD600] border-3 border-[#1D1D1F] rounded-2xl px-4 py-2 shadow-[4px_4px_0px_0px_#1D1D1F] -rotate-6">
                <p className="text-[#1D1D1F] font-black text-2xl">+۶</p>
                <p className="text-[#1D1D1F] font-black text-xs">سال فعالیت</p>
              </div>
            </div>
          </AnimatedItem>

          {/* Text Content - ANIMATES FROM RIGHT */}
          <AnimatedItem direction="right" delay={0.2} className="flex-1 text-center lg:text-right">
            <div className="flex items-center gap-3 mb-3 justify-center lg:justify-start">
              <span className="bg-[#FF3E83] text-white font-black px-3 py-1 rounded-xl border-2 border-[#1D1D1F] text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_#1D1D1F] rotate-1">
                درباره من
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1D1D1F] mb-5 leading-tight tracking-tight">
              درباره <span className="bg-[#FFD600] px-3 py-1 rounded-2xl border-3 border-[#1D1D1F] inline-block shadow-[4px_4px_0px_0px_#1D1D1F] -rotate-1 text-[#1D1D1F]">من</span>
            </h2>

            <p className="text-[#1D1D1F] font-bold text-base sm:text-lg leading-relaxed mb-4">
              سلام! من <strong className="text-[#FF3E83] underline decoration-4 underline-offset-4 font-black">مهدی جهان</strong> هستم؛ یه تولیدکننده محتوای سرگرمی که عاشق پیدا کردن سوژه‌های عجیب، ساختن لحظه‌های خنده‌دار و ارتباط با آدم‌های مختلفه.
            </p>

            <p className="text-[#1D1D1F]/80 font-medium text-base sm:text-lg leading-relaxed mb-8">
              اینجا قراره بیشتر با من آشنا بشید؛ و در آینده علاوه بر محتوا، مرچ و محصولات اختصاصی خودمون رو هم خواهیم داشت. هدفم اینه که هر بار که ویدیوی منو می‌بینید، یه لبخند روی لبتون باشه! 😊
            </p>

            {/* Animated Skill Progress Bars */}
            <div className="space-y-4 mb-8 text-right bg-white p-6 rounded-3xl border-3 border-[#1D1D1F] shadow-[6px_6px_0px_0px_#1D1D1F]">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1.5 font-black text-[#1D1D1F]">
                    <span>{skill.name}</span>
                    <span className="text-[#FF3E83]">{skill.percent}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 justify-center lg:justify-start flex-wrap">
              <a
                href="https://youtube.com/@mehdijahaan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-vibrant inline-flex items-center gap-2 text-white font-black px-7 py-3.5 rounded-2xl text-sm border-2 border-[#1D1D1F] shadow-[4px_4px_0px_0px_#1D1D1F]"
              >
                <i className="fab fa-youtube"></i> مشاهده کانال
              </a>
              <a
                href="https://instagram.com/mehdijahaan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-yellow inline-flex items-center gap-2 text-[#1D1D1F] font-black px-7 py-3.5 rounded-2xl text-sm border-2 border-[#1D1D1F] shadow-[4px_4px_0px_0px_#1D1D1F]"
              >
                <i className="fab fa-instagram"></i> اینستاگرام
              </a>
            </div>
          </AnimatedItem>

        </div>
      </div>
    </section>
  );
};
