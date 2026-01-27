import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { logoFont, accentFont } from '../lib/fonts';
import { Product } from '../lib/data';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemove: (id: string) => void; // <--- NEW: Function to remove items
  onCheckout: () => void;
  paymentMethod: string;
  setPaymentMethod: (m: string) => void;
}

export default function CartSidebar({ isOpen, onClose, items, onRemove, onCheckout, paymentMethod, setPaymentMethod }: CartProps) {
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
          />

          {/* Sidebar */}
          <motion.div 
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-white z-[70] shadow-2xl flex flex-col border-l border-amber-100"
          >
            {/* Header */}
            <div className="p-6 border-b border-amber-100 flex justify-between items-center bg-[#F0FDF9]">
              <div>
                <h2 className={`${logoFont.className} text-3xl text-[#0A2620]`}>Your Selection</h2>
                <p className={`text-[10px] uppercase tracking-widest text-amber-600 ${accentFont.className}`}>Bespoke Collection</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white rounded-full transition-colors"><X size={20} className="text-[#0A2620]"/></button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4 opacity-60">
                  <Gift size={48} strokeWidth={1} />
                  <p className="font-light italic">Your box is empty.</p>
                </div>
              ) : (
                items.map((item, idx) => (
                  <div key={`${item.id}-${idx}`} className="flex gap-4 items-center group">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-amber-100 flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`${logoFont.className} text-xl text-[#0A2620]`}>{item.name}</h4>
                      <p className={`text-xs font-bold text-amber-700 ${accentFont.className}`}>${item.price}</p>
                    </div>
                    {/* DELETE BUTTON */}
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors p-2"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-6 bg-[#F9FCFC] border-t border-amber-100">
               <div className="flex gap-2 mb-6">
                  {['credit', 'cod', 'transfer'].map(m => (
                      <button key={m} onClick={() => setPaymentMethod(m)} className={`flex-1 py-3 border rounded text-[9px] font-bold uppercase tracking-wider transition-all ${paymentMethod === m ? 'border-amber-600 bg-[#0A2620] text-amber-50' : 'border-gray-200 bg-white text-gray-400'}`}>
                          {m}
                      </button>
                  ))}
               </div>

               <div className="flex justify-between items-baseline mb-4">
                  <span className={`text-xs font-bold uppercase tracking-widest ${accentFont.className}`}>Total</span>
                  <span className={`${logoFont.className} text-5xl text-[#0A2620]`}>${total}</span>
               </div>
               
               <button 
                onClick={onCheckout} 
                disabled={items.length === 0}
                className={`w-full py-5 text-sm font-bold uppercase tracking-[0.25em] transition-all shadow-lg ${items.length > 0 ? 'bg-[#0A2620] text-amber-50 hover:bg-amber-900' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
               >
                  {items.length > 0 ? 'Request Order' : 'Empty Box'}
               </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}