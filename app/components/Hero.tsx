import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
// 1. Import the Next.js Image optimizer
import Image from 'next/image';
import { logoFont, accentFont } from '../lib/fonts';
import { heroSlides } from '../lib/data';

export default function HeroSection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % heroSlides.length);
        }, 5000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-black overflow-hidden">
                <AnimatePresence initial={false} mode="popLayout">
                    {/* 2. Optimized Image Wrapper */}
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }} 
                        className="absolute inset-0 w-full h-full"
                    >
                        {/* 3. The Professional Image Component */}
                        <Image 
                            src={heroSlides[index].image} 
                            alt={heroSlides[index].title}
                            fill // Automatically fills the container
                            className="object-cover"
                            priority // Tells browser to load this FIRST (because it's the hero)
                            quality={90} // High quality for luxury feel
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-black/40 z-10"></div>
            </div>

            <div className="relative z-20 text-center text-white px-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className={`${logoFont.className} text-6xl md:text-8xl mb-6 leading-tight drop-shadow-2xl`}>
                            {heroSlides[index].title}
                        </h1>
                        <p className="text-xl md:text-2xl font-light mb-12 max-w-xl mx-auto opacity-95 text-white drop-shadow-md">
                            {heroSlides[index].subtitle}
                        </p>
                    </motion.div>
                </AnimatePresence>

                <motion.button 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                    onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })} 
                    className={`bg-white text-[#0A2620] px-14 py-5 text-sm font-bold tracking-[0.25em] uppercase hover:bg-[#0A2620] hover:text-white transition-all duration-500 border border-white/30 ${accentFont.className} shadow-2xl`}
                >
                    Start Creating
                </motion.button>
            </div>
            
            <div className="absolute bottom-8 z-20">
                 <ArrowDown className="mx-auto text-white/70 animate-bounce" size={32} />
            </div>
        </section>
    );
}