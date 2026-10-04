import React, { useState } from 'react';
import { AnimatedItem } from './AnimatedItem';
import { motion, AnimatePresence } from 'motion/react';

interface VideoItem {
  id: string;
  title: string;
  views: string;
  time: string;
  duration: string;
  badge?: string;
  badgeBg?: string;
  img: string;
  embedUrl: string;
}

export const VideosSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos: VideoItem[] = [
    {
      id: 'v1',
      title: 'بخندی یک میلیون میدی ☠️🤣 (هیچکدوم پول نداریم ❌)',
      views: '129K بازدید',
      time: '۲ روز پیش',
      duration: '12:56',
      badge: 'جدید',
      badgeBg: 'bg-red-600 text-white',
      img: 'https://mehdijahaan.com/Image/your%20image.png',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 'v2',
      title: 'این میم زندگیمو ازم گرفت 💸☠️ (ولی شما پولدار شدید)',
      views: '151K بازدید',
      time: '۷ روز پیش',
      duration: '17:53',
      img: '/cro.png',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 'v3',
      title: 'هرچی ویدیو آپارات گردی دیدی فراموش کن 💀🤣 (اینا دیگه دوبله نیست، جنایته)',
      views: '158K بازدید',
      time: '۲ هفته پیش',
      duration: '14:26',
      badge: 'محبوب',
      badgeBg: 'bg-yellow-500 text-black',
      img: 'https://mehdijahaan.com/Image/your%20image.png',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 'v4',
      title: 'بالاخره اینستاتونو هک کردم ❌🤣 (چه گُهی خوردم )',
      views: '195K بازدید',
      time: '۲ هفته پیش',
      duration: '17:37',
      img: '/cro.png',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 'v5',
      title: 'این میم باعث شد 20 میلیون از دست بدم !🤣💀',
      views: '176K بازدید',
      time: '۳ هفته پیش',
      duration: '22:07',
      img: 'https://mehdijahaan.com/Image/your%20image.png',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 'v6',
      title: 'این همون اپاراتیه که من توش بن شدم؟💀🤣 (تهدید شدم)',
      views: '253K بازدید',
      time: '۴ هفته پیش',
      duration: '18:08',
      img: '/cro.png',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ];

  return (
    <section id="videos" className="py-20 sm:py-28 bg-[#F0F2F5] overflow-hidden border-b-4 border-[#1D1D1F]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <AnimatedItem direction="right">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-[#00D1FF] text-[#1D1D1F] font-black px-3 py-1 rounded-xl border-2 border-[#1D1D1F] text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_#1D1D1F] rotate-1">
                ویدیوهای جدید
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1D1D1F]">
              آخرین <span className="bg-[#FF3E83] text-white px-3 py-1 rounded-2xl border-3 border-[#1D1D1F] inline-block shadow-[4px_4px_0px_0px_#1D1D1F] -rotate-1">ویدیوها</span>
            </h2>
          </AnimatedItem>

          <AnimatedItem direction="left">
            <a
              href="https://youtube.com/@mehdijahaan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-vibrant text-white font-black px-6 py-3 rounded-2xl text-sm flex items-center gap-2 border-2 border-[#1D1D1F] shadow-[4px_4px_0px_0px_#1D1D1F] whitespace-nowrap"
            >
              <i className="fab fa-youtube"></i> همه ویدیوها
            </a>
          </AnimatedItem>
        </div>

        {/* Video Cards Grid - Alternating Left & Right Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {videos.map((vid, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <AnimatedItem
                key={vid.id}
                direction={isEven ? 'left' : 'right'}
                delay={0.1 * (idx % 3)}
              >
                <div
                  onClick={() => setActiveVideo(vid.embedUrl)}
                  className="video-card group h-full flex flex-col justify-between bg-white border-3 border-[#1D1D1F] rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_#1D1D1F] hover:shadow-[10px_10px_0px_0px_#FF3E83] hover:-translate-x-1 hover:-translate-y-1 transition-all cursor-pointer"
                >
                  <div className="relative overflow-hidden border-b-3 border-[#1D1D1F]" style={{ height: '190px' }}>
                    <img
                      src={vid.img}
                      alt={vid.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="play-btn w-14 h-14 rounded-2xl bg-[#FF3E83] text-white border-2 border-[#1D1D1F] flex items-center justify-center shadow-[3px_3px_0px_0px_#1D1D1F] group-hover:rotate-6 transition-all">
                        <i className="fas fa-play text-white text-lg ml-1"></i>
                      </div>
                    </div>
                    {vid.badge && (
                      <span
                        className="absolute top-3 right-3 text-xs font-black px-3 py-1 rounded-xl border-2 border-[#1D1D1F] shadow-[2px_2px_0px_0px_#1D1D1F] bg-[#FFD600] text-[#1D1D1F]"
                      >
                        {vid.badge}
                      </span>
                    )}
                    <span className="absolute bottom-3 left-3 bg-[#1D1D1F] text-white font-black text-xs px-2.5 py-1 rounded-xl border-2 border-[#1D1D1F]">
                      {vid.duration}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                    <h3 className="text-[#1D1D1F] font-black text-sm sm:text-base mb-3 leading-snug group-hover:text-[#FF3E83] transition-colors">
                      {vid.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs font-black text-[#1D1D1F]/70 border-t-2 border-[#1D1D1F]/10 pt-3">
                      <span className="flex items-center gap-1">
                        <i className="fas fa-eye text-[#FF3E83]"></i> {vid.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="fas fa-clock text-[#7000FF]"></i> {vid.time}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            );
          })}
        </div>

      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#1D1D1F]/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white border-4 border-[#1D1D1F] rounded-3xl overflow-hidden shadow-[12px_12px_0px_0px_#FF3E83]"
            >
              <div className="flex justify-between items-center p-4 border-b-3 border-[#1D1D1F] bg-[#FFD600]">
                <span className="text-[#1D1D1F] font-black text-base flex items-center gap-2">
                  <i className="fab fa-youtube text-[#FF3E83] text-xl"></i> پخش ویدیو
                </span>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="text-[#1D1D1F] bg-white hover:bg-[#FF3E83] hover:text-white font-black text-sm transition-colors flex items-center gap-1.5 border-2 border-[#1D1D1F] px-3.5 py-1.5 rounded-xl shadow-[2px_2px_0px_0px_#1D1D1F]"
                >
                  <i className="fas fa-times"></i> بستن
                </button>
              </div>
              <div className="relative w-full aspect-video">
                <iframe
                  src={`${activeVideo}?autoplay=1`}
                  title="YouTube video player"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
