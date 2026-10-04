import React, { useState } from 'react';
import { AnimatedItem } from './AnimatedItem';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'همکاری تجاری',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'همکاری تجاری', message: '' });
    }, 4000);
  };

  const socialLinks = [
    {
      name: 'اینستاگرام',
      url: 'instagram.com/mehdijahaan',
      link: 'https://instagram.com/mehdijahaan',
      icon: 'fab fa-instagram',
    },
    {
      name: 'تلگرام',
      url: 't.me/Mehdijahaaan',
      link: 'https://t.me/Mehdijahaaan',
      icon: 'fab fa-telegram',
    },
    {
      name: 'کیک',
      url: 'kick.com/mehdijahaan',
      link: 'https://kick.com/mehdijahaan',
      icon: 'kick',
    },
    {
      name: 'توییچ',
      url: 'twitch.tv/mehdijahaan',
      link: 'https://twitch.tv/mehdijahaan',
      icon: 'fab fa-twitch',
    },
    {
      name: 'توییتر',
      url: 'twitter.com/mehdijahaan',
      link: 'https://twitter.com/mehdijahaan',
      icon: 'fab fa-twitter',
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F0F2F5] overflow-hidden border-b-4 border-[#1D1D1F]">
      <div className="max-w-7xl mx-auto px-4">
        
        <AnimatedItem direction="up" className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="bg-[#FF3E83] text-white font-black px-3 py-1 rounded-xl border-2 border-[#1D1D1F] text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_#1D1D1F] rotate-1">
              ارتباط
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1D1D1F]">
            تماس و <span className="bg-[#FFD600] text-[#1D1D1F] px-3 py-1 rounded-2xl border-3 border-[#1D1D1F] inline-block shadow-[4px_4px_0px_0px_#1D1D1F] -rotate-1">همکاری</span>
          </h2>
        </AnimatedItem>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* Social Contact Links - ANIMATE FROM RIGHT */}
          <AnimatedItem direction="right" className="flex-1 space-y-4 w-full">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-3xl p-4 bg-white border-3 border-[#1D1D1F] shadow-[4px_4px_0px_0px_#1D1D1F] hover:shadow-[8px_8px_0px_0px_#FF3E83] hover:-translate-x-1 hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-[#FFD600] border-2 border-[#1D1D1F] shadow-[2px_2px_0px_0px_#1D1D1F]">
                  {item.icon === 'kick' ? (
                    <span className="text-[#1D1D1F] font-black text-sm">
                      Kick
                    </span>
                  ) : (
                    <i className={`${item.icon} text-[#1D1D1F] text-lg`}></i>
                  )}
                </div>
                <div>
                  <p className="text-[#1D1D1F]/70 font-bold text-xs">{item.name}</p>
                  <p className="text-[#1D1D1F] font-black text-sm group-hover:text-[#FF3E83] transition-colors">
                    {item.url}
                  </p>
                </div>
              </a>
            ))}
          </AnimatedItem>

          {/* Form - ANIMATE FROM LEFT */}
          <AnimatedItem direction="left" className="flex-1 w-full">
            <div className="rounded-3xl p-6 sm:p-8 bg-white border-4 border-[#1D1D1F] shadow-[8px_8px_0px_0px_#1D1D1F]">
              <h3 className="text-[#1D1D1F] font-black text-2xl mb-6 flex items-center gap-2">
                <i className="fas fa-paper-plane text-[#FF3E83]"></i> ارسال پیام
              </h3>

              {submitted ? (
                <div className="bg-[#FFD600] border-3 border-[#1D1D1F] text-[#1D1D1F] p-4 rounded-2xl text-center font-black shadow-[4px_4px_0px_0px_#1D1D1F]">
                  🎉 پیام شما با موفقیت ارسال شد! به زودی بررسی و پاسخ داده می‌شود.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-[#1D1D1F] font-black text-sm mb-1.5 block">نام شما</label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: علی احمدی"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-2xl px-4 py-3 text-[#1D1D1F] font-bold text-sm focus:outline-none border-3 border-[#1D1D1F] bg-white shadow-[3px_3px_0px_0px_#1D1D1F]"
                    />
                  </div>
                  <div>
                    <label className="text-[#1D1D1F] font-black text-sm mb-1.5 block">ایمیل</label>
                    <input
                      type="email"
                      required
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-2xl px-4 py-3 text-[#1D1D1F] font-bold text-sm focus:outline-none border-3 border-[#1D1D1F] bg-white shadow-[3px_3px_0px_0px_#1D1D1F]"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="text-[#1D1D1F] font-black text-sm mb-1.5 block">موضوع</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-2xl px-4 py-3 text-[#1D1D1F] font-bold text-sm focus:outline-none border-3 border-[#1D1D1F] bg-white shadow-[3px_3px_0px_0px_#1D1D1F]"
                    >
                      <option value="همکاری تجاری">همکاری تجاری</option>
                      <option value="تبلیغات">تبلیغات</option>
                      <option value="سوال">سوال</option>
                      <option value="سایر">سایر</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[#1D1D1F] font-black text-sm mb-1.5 block">پیام</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="پیامت رو اینجا بنویس..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-2xl px-4 py-3 text-[#1D1D1F] font-bold text-sm focus:outline-none border-3 border-[#1D1D1F] bg-white shadow-[3px_3px_0px_0px_#1D1D1F] resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn-vibrant w-full text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 border-3 border-[#1D1D1F] shadow-[4px_4px_0px_0px_#1D1D1F]"
                  >
                    <i className="fas fa-paper-plane"></i> ارسال پیام
                  </button>
                </form>
              )}
            </div>
          </AnimatedItem>

        </div>
      </div>
    </section>
  );
};
