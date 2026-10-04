import React, { useState } from 'react';
import { AnimatedItem } from './AnimatedItem';

export const MerchSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const merchItems = [
    {
      id: 'm1',
      title: 'هودی مهدی جهان',
      desc: 'هودی اختصاصی با کیفیت بالا و لوگو',
      icon: 'fas fa-tshirt',
      direction: 'left' as const,
      delay: 0.1,
    },
    {
      id: 'm2',
      title: 'کپ مهدی جهان',
      desc: 'کپ اسنپ‌بک اختصاصی و شیک',
      icon: 'fas fa-hat-cowboy',
      direction: 'up' as const,
      delay: 0.2,
    },
    {
      id: 'm3',
      title: 'ماگ اختصاصی',
      desc: 'ماگ سرامیکی ویژه با طرح لوگو',
      icon: 'fas fa-mug-hot',
      direction: 'right' as const,
      delay: 0.3,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <section id="merch" className="py-20 sm:py-28 bg-[#F0F2F5] overflow-hidden border-b-4 border-[#1D1D1F]">
      <div className="max-w-7xl mx-auto px-4">
        
        <AnimatedItem direction="up" className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="bg-[#FF3E83] text-white font-black px-3 py-1 rounded-xl border-2 border-[#1D1D1F] text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_#1D1D1F] -rotate-1">
              محصولات
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1D1D1F]">
            مرچ <span className="bg-[#FFD600] text-[#1D1D1F] px-3 py-1 rounded-2xl border-3 border-[#1D1D1F] inline-block shadow-[4px_4px_0px_0px_#1D1D1F] rotate-1">اختصاصی</span>
          </h2>
          <p className="text-[#1D1D1F] font-bold mt-3 text-sm max-w-md mx-auto">
            محصولات اختصاصی مهدی جهان به زودی در دسترس قرار می‌گیرند!
          </p>
        </AnimatedItem>

        {/* Merch Grid - Animates Left, Up, Right */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {merchItems.map((item) => (
            <AnimatedItem key={item.id} direction={item.direction} delay={item.delay}>
              <div className="merch-card bg-white border-3 border-[#1D1D1F] rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_#1D1D1F] hover:shadow-[10px_10px_0px_0px_#7000FF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full flex flex-col justify-between">
                <div
                  className="relative h-52 flex items-center justify-center bg-[#FFD600]/30 border-b-3 border-[#1D1D1F]"
                >
                  <i
                    className={`${item.icon} text-8xl text-[#FF3E83] group-hover:scale-110 transition-transform duration-300`}
                  ></i>
                  <span className="absolute top-4 right-4 bg-[#FF3E83] text-white text-xs font-black px-3 py-1.5 rounded-xl border-2 border-[#1D1D1F] shadow-[2px_2px_0px_0px_#1D1D1F]">
                    به زودی
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-[#1D1D1F] font-black text-xl mb-1">{item.title}</h3>
                  <p className="text-[#1D1D1F]/70 font-bold text-sm mb-5">{item.desc}</p>
                  <button
                    onClick={() => {
                      const notifyEl = document.getElementById('merch-notify-box');
                      if (notifyEl) notifyEl.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn-cyan w-full text-[#1D1D1F] font-black text-sm py-3 rounded-2xl border-2 border-[#1D1D1F] shadow-[3px_3px_0px_0px_#1D1D1F]"
                  >
                    اطلاع بده
                  </button>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>

        {/* Newsletter Box */}
        <AnimatedItem direction="scale" delay={0.4} className="max-w-md mx-auto">
          <div
            id="merch-notify-box"
            className="rounded-3xl p-6 sm:p-8 text-center bg-[#FFD600] border-4 border-[#1D1D1F] shadow-[8px_8px_0px_0px_#1D1D1F] relative overflow-hidden"
          >
            <i className="fas fa-bell text-[#FF3E83] text-4xl mb-3 animate-bounce"></i>
            <h3 className="text-[#1D1D1F] font-black text-2xl mb-2">اول خبر دار شو!</h3>
            <p className="text-[#1D1D1F] font-bold text-sm mb-5">
              ایمیلت رو وارد کن تا وقتی مرچ آماده شد بهت خبر بدیم
            </p>

            {submitted ? (
              <div className="bg-white border-3 border-[#1D1D1F] text-[#1D1D1F] p-4 rounded-2xl text-sm font-black shadow-[4px_4px_0px_0px_#1D1D1F]">
                ✅ ایمیل شما با موفقیت ثبت شد! به محض آماده شدن خبرت می‌کنیم.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ایمیل شما..."
                  required
                  className="flex-1 rounded-2xl px-4 py-3 text-[#1D1D1F] font-black text-sm focus:outline-none border-3 border-[#1D1D1F] bg-white shadow-[3px_3px_0px_0px_#1D1D1F]"
                  dir="ltr"
                />
                <button
                  type="submit"
                  className="btn-vibrant text-white font-black px-6 py-3 rounded-2xl text-sm whitespace-nowrap border-3 border-[#1D1D1F] shadow-[3px_3px_0px_0px_#1D1D1F]"
                >
                  ثبت کن
                </button>
              </form>
            )}
          </div>
        </AnimatedItem>

      </div>
    </section>
  );
};
