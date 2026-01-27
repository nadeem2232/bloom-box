import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';
import { logoFont, accentFont } from '../lib/fonts';

// Define what tools the Footer needs from the main page
interface FooterProps {
  onNavigate: (view: string) => void;
  onFilter: (category: string) => void;
}

export default function Footer({ onNavigate, onFilter }: FooterProps) {
  
  // 1. Helper for Shop Links (Scrolls to the Shop Grid)
  const handleShopLink = (category: string) => {
    onNavigate('home');      // Go to Home Page
    onFilter(category);      // Switch the filter (e.g., 'flower')
    
    // Wait 100ms for the page to load, then scroll to the Shop section
    setTimeout(() => {
      const shopSection = document.getElementById('shop');
      if (shopSection) shopSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // 2. Helper for Pages (Scrolls to Top)
  const handlePageLink = (view: string) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0A2620] text-amber-50 py-24 px-6 border-t-4 border-amber-600">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          
          {/* BRAND COLUMN */}
          <div>
              <div className="flex items-center gap-3 mb-8">
                  <span className={`${logoFont.className} text-3xl font-bold tracking-widest text-amber-50`}>LOVE</span>
                  <span className={`${logoFont.className} text-2xl text-amber-400 relative top-1`}>in a</span>
                  <span className={`${logoFont.className} text-3xl font-bold tracking-widest text-amber-50`}>BOX</span>
              </div>
              <p className="text-emerald-100/60 text-sm font-light leading-relaxed">Elevating the art of gifting through curated floral arrangements and bespoke luxury boxes.</p>
          </div>

          {/* SHOP COLUMN (Now functional!) */}
          <div>
              <h4 className={`text-xs font-bold uppercase tracking-widest mb-8 text-amber-400 ${accentFont.className}`}>Shop</h4>
              <ul className="space-y-4 text-sm text-emerald-100/70 font-light">
                <li onClick={() => handleShopLink('all')} className="hover:text-amber-200 cursor-pointer transition-colors">Collection</li>
                <li onClick={() => handleShopLink('flower')} className="hover:text-amber-200 cursor-pointer transition-colors">Flowers</li>
                <li onClick={() => handleShopLink('sweet')} className="hover:text-amber-200 cursor-pointer transition-colors">Sweets</li>
              </ul>
          </div>

          {/* CONCIERGE COLUMN */}
          <div>
              <h4 className={`text-xs font-bold uppercase tracking-widest mb-8 text-amber-400 ${accentFont.className}`}>Concierge</h4>
              <ul className="space-y-4 text-sm text-emerald-100/70 font-light">
                <li onClick={() => handlePageLink('contact')} className="hover:text-amber-200 cursor-pointer transition-colors">Shipping & Returns</li>
                <li onClick={() => handlePageLink('contact')} className="hover:text-amber-200 cursor-pointer transition-colors">FAQ</li>
                <li onClick={() => handlePageLink('contact')} className="hover:text-amber-200 cursor-pointer transition-colors">Contact Us</li>
              </ul>
          </div>

          {/* SOCIAL COLUMN */}
          <div>
              <h4 className={`text-xs font-bold uppercase tracking-widest mb-8 text-amber-400 ${accentFont.className}`}>Stay Connected</h4>
              <div className="flex gap-6 mb-8">
                <Instagram size={20} className="hover:text-amber-200 cursor-pointer"/>
                <Facebook size={20} className="hover:text-amber-200 cursor-pointer"/>
                <Mail size={20} className="hover:text-amber-200 cursor-pointer"/>
              </div>
              <p className="text-xs text-emerald-100/30">© 2026 Love in a Box.</p>
          </div>
      </div>
    </footer>
  );
}