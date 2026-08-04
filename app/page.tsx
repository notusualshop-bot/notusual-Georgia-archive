"use client";
import React, { useState } from "react";
import Image from "next/image";
import { UGA_ARCHIVE_DATA } from "@/data";

export default function Home() {
  // 当前展示的文章索引
  const [currentIndex, setCurrentIndex] = useState(0);

  // 随机赛场图背景
  const stadiumImages = [
    "/stadium-1.jpg", "/stadium-2.jpg", "/stadium-3.jpg",
    "/stadium-4.jpg", "/stadium-5.jpg", "/stadium-6.jpg",
  ];
  const randomBg = stadiumImages[Math.floor(Math.random() * stadiumImages.length)];

  const currentItem = UGA_ARCHIVE_DATA[currentIndex];

  // 下一篇切换逻辑（循环）
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % UGA_ARCHIVE_DATA.length);
  };

  return (
    <main className="min-h-screen bg-[#ba0c2f] text-white flex flex-col justify-between selection:bg-white selection:text-[#ba0c2f]">
      {/* 挂载自定义复古字体 AlfaSlabOne */}
      <style dangerouslySetInnerHTML={{ __html: `
        @font-face {
          font-family: 'AlfaSlabOne';
          src: url('/AlfaSlabOne-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        .vintage-number {
          font-family: 'AlfaSlabOne', Impact, sans-serif;
        }
      `}} />

      {/* 顶部：品牌与档案声明区块 */}
      <header className="w-full pt-4 pb-2 px-4 text-center">
        <div className="max-w-md mx-auto space-y-0.5">
          <p className="tracking-[0.3em] uppercase text-[10px] text-white/70 font-light">
            EST. 1892 • ARCHIVE DATABASE V1.0
          </p>
          <p className="tracking-[0.25em] uppercase text-xs text-white/90 font-medium">
            NOTUSUAL CREATIVE STUDIO
          </p>
          <p className="tracking-[0.2em] uppercase text-xs text-white/70 font-sans font-light">
            UGA BULLDOGS FOOTBALL STORY
          </p>
        </div>
      </header>

      {/* 中间核心信息区域：沉浸式卡片翻页模式 */}
      <div className="max-w-md sm:max-w-lg mx-auto px-4 pt-2 pb-4 w-full relative my-auto">
        
        {/* 背景堆叠层 2（底层卡片阴影位） */}
        <div className="absolute inset-x-4 top-4 bottom-2 bg-stone-300 border-2 border-stone-900 translate-y-3 translate-x-2 pointer-events-none"></div>
        {/* 背景堆叠层 1（中间层卡片） */}
        <div className="absolute inset-x-4 top-2 bottom-1 bg-stone-100 border-2 border-stone-900 translate-y-1.5 translate-x-1 pointer-events-none"></div>

        {/* 主卡片（最顶层） */}
        <div className="relative bg-white text-stone-950 overflow-hidden border-2 border-stone-900 rounded-none">
          
          {/* 卡片上半部分：黑白图片背景 + 叠印层 */}
          <div className="relative w-full h-[220px] sm:h-[250px] flex flex-col items-center justify-center overflow-hidden border-b-2 border-stone-900">
            {/* 纯黑白图片背景 */}
            <div className="absolute inset-0 z-0 grayscale contrast-150 brightness-90">
              <Image
                src={randomBg}
                alt="UGA Football Stadium Archive"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            
            {/* 压暗遮罩确保文字清晰 */}
            <div className="absolute inset-0 z-1 bg-black/15"></div>

            {/* 内容区 */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 space-y-1">
              <p className="tracking-[0.15em] uppercase text-[10px] sm:text-xs font-bold text-stone-900 bg-white/85 px-2 py-0.5 border border-stone-900">
                {currentItem.dateTag}
              </p>
              <p className="tracking-[0.1em] uppercase text-[10px] sm:text-[11px] font-bold text-stone-900 bg-white/85 px-2 py-0.5 border border-stone-900">
                {currentItem.category} MODULE ({currentIndex + 1} / {UGA_ARCHIVE_DATA.length})
              </p>
              <div className="transform -rotate-1 mt-1">
                <span className="block tracking-tight text-[60px] sm:text-[80px] leading-none text-[#ba0c2f] vintage-number drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]">
                  {currentItem.category}
                </span>
              </div>
            </div>
          </div>

          {/* 卡片下半部分：标题、正文与翻页按钮 */}
          <div className="p-6 sm:p-7 bg-white text-center">
            <h3 className="text-xl sm:text-2xl font-serif font-extrabold mb-3 leading-snug text-stone-950 tracking-tight">
              &ldquo;{currentItem.espnTitle}&rdquo;
            </h3>

            <p className="text-stone-800 text-xs sm:text-sm leading-relaxed font-serif mb-6 font-medium tracking-wide">
              &ldquo;{currentItem.narrative}&rdquo;
            </p>

            {/* 翻页按钮：完全对齐迈阿密沉浸式模式 */}
            <div className="space-y-3">
              <button
                onClick={handleNext}
                className="w-full bg-[#0e3b2e] hover:bg-[#09271e] text-white font-serif font-bold tracking-widest text-xs uppercase py-3.5 transition-all duration-300 text-center rounded-none border border-black shadow-sm"
              >
                NEXT CHAPTER IN UGA ({currentIndex + 1} / {UGA_ARCHIVE_DATA.length})
              </button>

              <a
                href="https://www.etsy.com/shop/notusualcreative"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white hover:bg-stone-100 text-stone-950 font-serif font-bold tracking-widest text-xs uppercase py-3.5 transition-all duration-300 text-center block rounded-none border border-black shadow-sm"
              >
                SHARE WITH THE UGA FAITHFUL
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 底部：无缝衔接 */}
      <footer className="w-full bg-[#ba0c2f] pt-4 pb-6 px-4 text-center">
        <div className="max-w-md mx-auto space-y-1">
          <p className="font-serif italic text-[10px] tracking-widest text-white/80 uppercase font-bold">
            NOTUSUAL EDITION • UGA
          </p>
          <p className="font-serif italic text-xs text-white/90 leading-relaxed font-medium">
            Love the vintage Georgia look? Grab our prints & goods.
          </p>
          <div>
            <a
              href="https://www.etsy.com/shop/notusualcreative"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white font-serif tracking-widest text-xs uppercase underline underline-offset-4 hover:text-white/70 transition-colors font-bold"
            >
              VISIT OUR ETSY SHOP
            </a>
          </div>
          <div className="pt-2 border-t border-white/10">
            <p className="text-[9px] tracking-widest uppercase text-white/50 font-semibold">
              © UGA ARCHIVE DATABASE • NOTUSUAL CREATIVE
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
