import React from 'react';
import { logoFont, scriptFont, accentFont } from '../lib/fonts';

export default function Navbar({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <nav className="sticky top-0 w-full z-40 bg-[#F0FDF9]/95 backdrop-blur-md border-b border-emerald-900/10 h-24 flex items-center justify-between px-6 lg:px-12 transition-all duration-300">
      <div className="flex items-center gap-3 cursor-pointer group" onClick={() => { onNavigate('home'); window.scrollTo({top:0, behavior:'smooth'}); }}>
         <span className={`${logoFont.className} text-4xl font-bold tracking-wider text-[#0A2620] group-hover:text-amber-800 transition-colors`}>LOVE</span>
         <span className={`${logoFont.className} text-2xl text-amber-600 relative top-1`}>in a</span>
         <span className={`${logoFont.className} text-4xl font-bold tracking-wider text-[#0A2620] group-hover:text-amber-800 transition-colors`}>BOX</span>
      </div>
      <div className="flex gap-6 items-center">
        <button onClick={() => { onNavigate('about'); window.scrollTo({top:0, behavior:'smooth'}); }} className={`hidden md:block text-xs font-bold uppercase tracking-widest hover:text-amber-700 transition-colors ${accentFont.className}`}>About</button>
        <button onClick={() => { onNavigate('contact'); window.scrollTo({top:0, behavior:'smooth'}); }} className={`hidden md:block text-xs font-bold uppercase tracking-widest hover:text-amber-700 transition-colors mr-4 ${accentFont.className}`}>Contact</button>
      </div>
    </nav>
  );
}