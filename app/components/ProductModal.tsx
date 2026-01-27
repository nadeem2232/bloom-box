import { Product } from '../lib/data';
import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { logoFont, accentFont } from '../lib/fonts';

export default function ProductModal({ product, onClose, onAdd }: { product: Product, onClose: () => void, onAdd: (p: Product) => void }) {
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row max-h-[80vh]">
                <button onClick={onClose} className="absolute top-4 right-4 z-20 bg-white/50 p-2 rounded-full hover:bg-white"><X size={20}/></button>
                <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100"><img src={product.image} className="w-full h-full object-cover" /></div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <span className={`text-amber-600 text-xs font-bold uppercase tracking-widest mb-2 ${accentFont.className}`}>{product.type}</span>
                    <h2 className={`${logoFont.className} text-4xl mb-4 text-[#0A2620]`}>{product.name}</h2>
                    <p className="text-gray-500 font-light italic mb-6 leading-relaxed">"{product.description}"</p>
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                        <span className={`${logoFont.className} text-3xl text-[#0A2620]`}>${product.price}</span>
                        <button onClick={() => { onAdd(product); onClose(); }} className={`bg-[#0A2620] text-amber-50 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-amber-900 transition-colors ${accentFont.className}`}>Add to Order</button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}