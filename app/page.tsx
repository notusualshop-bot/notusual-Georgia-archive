"use client";
import React, { useState } from "react";
import Image from "next/image";
import { UGA_ARCHIVE_DATA, ArchiveItem } from "@/data/ugaArchive";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'ERA' | 'LEG' | 'TRA' | 'RIV' | 'MOM'>('ALL');
  const [searchTerm, setSearchTerm] = useState("");

  const stadiumImages = [
    "/stadium-1.jpg", "/stadium-2.jpg", "/stadium-3.jpg",
    "/stadium-4.jpg", "/stadium-5.jpg", "/stadium-6.jpg",
  ];
  const randomBg = stadiumImages[Math.floor(Math.random() * stadiumImages.length)];

  // 过滤当前展示的数据（支持分类与实时搜索）
  const filteredData = UGA_ARCHIVE_DATA.filter(item => {
    const matchesCategory = activeCategory === 'ALL' || item.category === activeCategory;
    const matchesSearch = item.espnTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.narrative.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.dateTag.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
      <header className="w-full pt-6 pb-4 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-1">
          <p className="tracking-[0.3em] uppercase text-[10px] text-white/70 font-light">
            EST. 1892 • ARCHIVE DATABASE V1.0
          </p>
          <h1 className="tracking-[0.25em] uppercase text-lg sm:text-2xl font-bold font-serif">
            UGA BULLDOGS FOOTBALL MUSEUM
          </h1>
          <p className="text-xs text-white/80 font-serif italic">
            102 Definitive Stories of Glory, Blood, and Tradition
          </p>
        </div>
      </header>

      {/* 实时搜索框区块 */}
      <div className="max-w-md mx-auto px-4 pb-4 w-full">
        <input
          type="text"
          placeholder="Search 102 archive stories (e.g., Herschel, 1980, Auburn)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white/10 border border-white/30 text-white placeholder-white/60 px-4 py-2.5 text-xs rounded-none focus:outline-none focus:border-white transition-all text-center font-serif"
        />
      </div>

      {/* 分类筛选导航栏 */}
      <nav className="sticky top-0 z-50 bg-[#ba0c2f]/95 backdrop-blur border-y border-white/20 py-3 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-2">
          {(['ALL', 'ERA', 'LEG', 'TRA', 'RIV', 'MOM'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-xs font-bold uppercase tracking-widest border transition-all ${
                activeCategory === cat 
                  ? 'bg-white text-[#ba0c2f] border-white shadow-md' 
                  : 'bg-transparent text-white border-white/40 hover:border-white'
              }`}
            >
              {cat === 'ALL' ? '全景档案 (102)' : `${cat} 模块`}
            </button>
          ))}
        </div>
      </nav>

      {/* 内容列表展示区 */}
      <div className="max-w-3xl mx-auto px-4 py-8 w-full space-y-6 flex-grow">
        {filteredData.length === 0 ? (
          <div className="text-center py-12 text-white/80 font-serif italic">
            No archive entries found matching your search.
          </div>
        ) : (
          filteredData.map((item) => (
            <article key={item.id} className="bg-white text-stone-950 border-2 border-stone-900 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-[#ba0c2f] text-white text-[10px] tracking-widest px-2 py-0.5 font-bold uppercase">
                  {item.category} MODULE
                </span>
                <span className="text-xs text-stone-500 font-mono font-medium">
                  {item.dateTag}
                </span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-stone-900 mb-2 leading-tight">
                {item.espnTitle}
              </h3>
              
              <p className="text-stone-700 text-sm sm:text-base font-serif leading-relaxed mb-4">
                {item.narrative}
              </p>

              <div className="border-t border-stone-200 pt-3 flex justify-between items-center text-xs text-stone-500">
                <span className="italic font-serif">UGA Archive Database V1.0</span>
                <a
                  href="https://www.etsy.com/shop/notusualcreative"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ba0c2f] font-bold uppercase tracking-wider hover:underline"
                >
                  Get Print Design →
                </a>
              </div>
            </article>
          ))
        )}
      </div>

      {/* 底部 */}
      <footer className="w-full bg-[#ba0c2f] pt-6 pb-8 px-4 text-center border-t border-white/20 mt-12">
        <div className="max-w-md mx-auto space-y-3">
          <p className="font-serif italic text-xs text-white/90">
            Love the vintage Georgia look? Grab our prints & goods on Etsy.
          </p>
          <div>
            <a
              href="https://www.etsy.com/shop/notusualcreative"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#ba0c2f] font-bold tracking-widest text-xs uppercase px-6 py-2.5 shadow hover:bg-stone-100 transition-colors"
            >
              VISIT OUR ETSY SHOP
            </a>
          </div>
          <div className="pt-2 border-t border-white/10">
            <p className="text-[9px] tracking-widest uppercase text-white/60 font-semibold">
              © UGA ARCHIVE DATABASE • NOTUSUAL CREATIVE
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
