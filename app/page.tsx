"use client";

import React, { useState, useEffect } from 'react';
import { Mail, Gift, Check, Eye, Star, ShoppingBag, X } from 'lucide-react'; 
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import { logoFont, accentFont, bodyFont, scriptFont } from './lib/fonts';
import { allProducts, MY_PHONE_NUMBER, reviews, Product } from './lib/data';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/Hero';
import ProductModal from './components/ProductModal';
import CartSidebar from './components/CartSidebar';
import { AboutPage, ContactPage } from './components/Pages';

export default function LoveInABoxSite() {
  const [currentView, setCurrentView] = useState('home');
  const [categoryFilter, setCategoryFilter] = useState('all'); 
  const [selectedItems, setSelectedItems] = useState<Product[]>([]);
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [viewingProduct, setViewingProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => { document.title = "Love in a Box | Luxury Gifting"; }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  // Open Modal (Detail View)
  const handleProductClick = (product: Product) => {
    setViewingProduct(product);
  };

  // Add from Modal
  const handleAddFromModal = (product: Product) => {
      if (!selectedItems.find((i) => i.id === product.id)) {
        setSelectedItems([...selectedItems, product]);
      }
      setIsCartOpen(true);
  };

  // NEW: Remove an item (Used by Cart and Grid)
  const handleRemoveItem = (id: string) => {
    setSelectedItems(selectedItems.filter((i) => i.id !== id));
  };

  // NEW: Quick Toggle (Add if new, Remove if exists)
  const handleQuickToggle = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const exists = selectedItems.find((i) => i.id === product.id);

    if (exists) {
      // If it exists, remove it (Deselect)
      handleRemoveItem(product.id);
    } else {
      // If new, add it and open cart
      setSelectedItems([...selectedItems, product]);
      setIsCartOpen(true);
    }
  };

  const total = selectedItems.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    if (total === 0) return;
    let paymentText = paymentMethod === 'cod' ? "Cash on Delivery" : paymentMethod === 'transfer' ? "Bank Transfer" : "Credit Card";
    let message = `Hi Dalila! I'd like to place an order:%0A%0A`;
    selectedItems.forEach(item => message += `+ ${item.name} ($${item.price})%0A`);
    message += `%0A💰 *TOTAL: $${total}*`;
    message += `%0A💳 *Payment:* ${paymentText}`;
    window.open(`https://wa.me/${MY_PHONE_NUMBER}?text=${message}`, '_blank');
  };

  const filteredProducts = categoryFilter === 'all' ? allProducts : allProducts.filter(p => p.type === categoryFilter);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#F0FDF9] to-[#E6F4F1] text-neutral-900 ${bodyFont.className} selection:bg-amber-100 relative pb-32`}>
      
      <AnimatePresence>
          {viewingProduct && <ProductModal product={viewingProduct} onClose={() => setViewingProduct(null)} onAdd={handleAddFromModal} />}
      </AnimatePresence>

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={selectedItems} 
        onRemove={handleRemoveItem} // Pass the remove function
        onCheckout={handleCheckout} 
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />

      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
          <button onClick={() => setIsCartOpen(true)} className="bg-white text-[#0A2620] p-4 rounded-full shadow-xl hover:scale-105 transition-transform relative border border-amber-100">
             <ShoppingBag size={24} />
             {selectedItems.length > 0 && <span className="absolute -top-1 -right-1 bg-amber-600 text-white w-5 h-5 text-[10px] font-bold flex items-center justify-center rounded-full">{selectedItems.length}</span>}
          </button>
          
          <button onClick={() => setCurrentView('contact')} className="bg-[#0A2620] text-amber-50 p-4 rounded-full shadow-2xl hover:scale-105 transition-transform border border-amber-400/30">
            <Mail size={24} className="text-amber-200" />
          </button>
      </div>

      <div className={`bg-[#0A2620] text-amber-50 text-[10px] uppercase tracking-[0.2em] py-3 text-center font-bold ${accentFont.className} border-b border-amber-900`}>Global Shipping • Multi-Currency Accepted • Earn Points on Every Order</div>

      <Navbar onNavigate={setCurrentView} />

      {currentView === 'home' && (
        <>
            <HeroSection />
            <div id="shop" className="max-w-[1200px] mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16 relative">
                
                <div className="flex-1">
                    <div className="mb-16 text-center lg:text-left"><h2 className={`${logoFont.className} text-5xl mb-4 text-[#0A2620]`}>The Collection</h2><div className="w-24 h-1 bg-amber-300 mb-4 mx-auto lg:mx-0"></div><p className="text-[#2C3E38] text-xl italic opacity-80">Select a vessel, or pick individual treasures directly.</p></div>
                    
                    <div className="flex flex-wrap gap-8 mb-16 pb-4 border-b border-emerald-900/10 justify-center lg:justify-start">
                        {['all', 'vessel', 'flower', 'sweet', 'plush', 'luxury'].map(cat => (
                            <button key={cat} onClick={() => setCategoryFilter(cat)} className={`text-xs font-bold uppercase tracking-widest pb-2 transition-all ${accentFont.className} ${categoryFilter === cat ? 'text-[#0A2620] border-b-2 border-amber-600' : 'text-gray-400 hover:text-amber-700'}`}>{cat === 'all' ? 'View All' : cat + 's'}</button>
                        ))}
                    </div>

                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                        <AnimatePresence>
                            {filteredProducts.map(product => {
                                const isSelected = selectedItems.some(i => i.id === product.id);
                                return (
                                    <motion.div layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }} key={product.id} className="cursor-pointer group relative">
                                        <div onClick={() => handleProductClick(product)} className={`relative aspect-[4/5] bg-white mb-6 overflow-hidden transition-all duration-500 shadow-sm group-hover:shadow-xl ${isSelected ? 'ring-2 ring-amber-500 ring-offset-4 ring-offset-[#F0FDF9]' : 'border border-amber-100'}`}>
                                            <Image 
                                                src={product.image} 
                                                alt={product.name}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            {/* CHECKMARK (Top Right) */}
                                            {isSelected && <div className="absolute top-4 right-4 bg-[#0A2620] text-amber-400 w-8 h-8 flex items-center justify-center rounded-full shadow-lg border border-amber-400"><Check size={14}/></div>}
                                            
                                            {/* VESSEL LABEL (Bottom Left) */}
                                            {product.type === 'vessel' && <div className={`absolute bottom-4 left-4 bg-white/95 backdrop-blur px-4 py-2 text-[10px] uppercase font-bold tracking-widest text-[#0A2620] border border-amber-100 ${accentFont.className}`}>Vessel</div>}
                                            
                                            {/* TOGGLE BUTTON (Bottom Right - Bag if Unselected, X if Selected) */}
                                            <button 
                                                onClick={(e) => handleQuickToggle(e, product)} 
                                                className={`absolute bottom-4 right-4 p-3 rounded-full transition-colors shadow-lg z-20 ${isSelected ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-white/90 text-[#0A2620] hover:bg-[#0A2620] hover:text-white'}`}
                                            >
                                                {isSelected ? <X size={16}/> : <ShoppingBag size={16}/>}
                                            </button>
                                        </div>
                                        <div className="text-center"><h4 className={`${logoFont.className} text-2xl mb-2 text-[#0A2620]`}>{product.name}</h4><div className="flex justify-center items-center gap-2 mb-3"><div className="h-[1px] w-4 bg-amber-300"></div><p className={`text-sm text-amber-700 font-bold ${accentFont.className}`}>${product.price}</p><div className="h-[1px] w-4 bg-amber-300"></div></div><p className="text-lg text-gray-500 font-light italic leading-relaxed opacity-80">"{product.description}"</p></div>
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
            
            <section className="bg-white border-t border-amber-100 py-32 px-6"><div className="max-w-5xl mx-auto text-center"><h2 className={`${logoFont.className} text-4xl mb-16 text-[#0A2620]`}>Love Notes</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-12">{reviews.map((r, i) => (<div key={i} className="bg-[#F9FCFC] p-10 border border-amber-100/50 relative shadow-sm"><div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 border border-amber-100 rounded-full text-amber-500"><Star size={16} fill="currentColor"/></div><p className="text-[#2C3E38] italic mb-8 leading-relaxed text-xl font-light">"{r.text}"</p><p className={`text-xs font-bold uppercase tracking-widest text-amber-800 ${accentFont.className}`}>{r.name}</p></div>))}</div></div></section>
            
            <section id="about" className="py-32 text-center px-6 bg-[#F0FDF9] border-t border-emerald-900/5"><h2 className={`${logoFont.className} text-5xl mb-8 text-[#0A2620]`}>Every box tells a story.</h2><div className="w-16 h-1 bg-amber-300 mx-auto mb-10"></div><p className="max-w-3xl mx-auto text-[#2C3E38] font-light text-2xl mb-12 leading-relaxed">"With a background in <strong>Fashion Design</strong>, I have always viewed the world through the lens of detail and elegance. Love in a Box was born from a desire to elevate gifting into an art form."</p><div className="inline-block"><p className={`text-xs font-bold uppercase tracking-widest text-amber-700 mb-4 ${accentFont.className}`}>Founder & Creative Director</p><p className={`${scriptFont.className} text-7xl text-[#0A2620]`}>Dalila</p></div></section>
        </>
      )}

      {currentView === 'about' && <AboutPage />}
      {currentView === 'contact' && <ContactPage />}

      <Footer onNavigate={setCurrentView} onFilter={setCategoryFilter} />
    </div>
  );
}