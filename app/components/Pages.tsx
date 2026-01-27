import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import { logoFont, scriptFont, accentFont, bodyFont } from '../lib/fonts';
import { MY_ADDRESS, MY_EMAIL, MY_PHONE_NUMBER } from '../lib/data';

export function AboutPage() {
    return (
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="min-h-screen pt-24"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
                {/* LEFT: IMAGE SIDE */}
                <div className="relative h-[50vh] lg:h-auto w-full bg-neutral-100">
                    <Image 
                        src="/founder.jpg" 
                        alt="Dalila, Founder of Love in a Box" 
                        fill 
                        className="object-cover"
                        priority
                    />
                    {/* Overlay Text */}
                    <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 max-w-xs shadow-xl border-l-4 border-amber-500">
                        <p className={`text-xs font-bold uppercase tracking-widest text-amber-800 mb-2 ${accentFont.className}`}>The Founder</p>
                        <p className={`${logoFont.className} text-3xl text-[#0A2620]`}>Dalila</p>
                    </div>
                </div>

                {/* RIGHT: TEXT SIDE */}
                <div className="flex items-center justify-center p-12 lg:p-24 bg-[#F0FDF9]">
                    <div className="max-w-xl">
                        <h1 className={`${logoFont.className} text-5xl lg:text-7xl text-[#0A2620] mb-8`}>Our Story</h1>
                        <div className="w-24 h-1 bg-amber-300 mb-10"></div>
                        
                        <div className="space-y-8 text-lg text-gray-600 font-light leading-relaxed">
                            <p>
                                "Love in a Box began with a simple yet profound realization: in an increasingly digital world, the tangible act of giving is the most powerful way to connect. We didn't just want to sell gifts; we wanted to bridge the gap between hearts."
                            </p>
                            <p>
                                "We founded this atelier with a mission to serve people by turning their emotions into something they can hold. Whether it is a long-distance romance, a heartfelt apology, or a celebration of enduring love, our purpose is to help you say what words sometimes cannot."
                            </p>
                        </div>

                        <div className="mt-16">
                            <p className={`${scriptFont.className} text-6xl text-amber-600/80`}>Dalila</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function ContactPage() {
    return (
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="min-h-screen pt-24"
        >
             <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
                {/* LEFT: INFO & FORM */}
                <div className="flex items-center justify-center p-12 lg:p-24 bg-white order-2 lg:order-1">
                    <div className="w-full max-w-lg">
                        <h1 className={`${logoFont.className} text-5xl lg:text-6xl text-[#0A2620] mb-6`}>Connect With Us</h1>
                        <p className="text-xl text-gray-500 italic mb-12">We are here to help you curate the perfect gift.</p>

                        <div className="space-y-8 mb-16 border-b border-gray-100 pb-12">
                            <div>
                                <h3 className={`${accentFont.className} text-sm font-bold text-amber-600 uppercase tracking-widest mb-2 flex items-center gap-3`}><MapPin size={16}/> Visit Our Atelier</h3>
                                <p className="text-lg text-gray-700 font-light">{MY_ADDRESS}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h3 className={`${accentFont.className} text-sm font-bold text-amber-600 uppercase tracking-widest mb-2 flex items-center gap-3`}><Mail size={16}/> Email</h3>
                                    <p className="text-lg text-gray-700 font-light">hello@loveinabox.com</p>
                                </div>
                                <div>
                                    <h3 className={`${accentFont.className} text-sm font-bold text-amber-600 uppercase tracking-widest mb-2 flex items-center gap-3`}><Phone size={16}/> Call</h3>
                                    <p className="text-lg text-gray-700 font-light">+{MY_PHONE_NUMBER}</p>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-6">
                            <input type="text" className="w-full bg-gray-50 border border-gray-200 p-4 rounded-none focus:outline-none focus:border-amber-400 focus:bg-white transition-all" placeholder="Your Name" />
                            <input type="email" className="w-full bg-gray-50 border border-gray-200 p-4 rounded-none focus:outline-none focus:border-amber-400 focus:bg-white transition-all" placeholder="Email Address" />
                            <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 p-4 rounded-none focus:outline-none focus:border-amber-400 focus:bg-white transition-all" placeholder="How can we help you?"></textarea>
                            <button type="button" className={`w-full bg-[#0A2620] text-amber-50 py-5 font-bold uppercase tracking-[0.2em] hover:bg-amber-900 transition-colors shadow-lg ${accentFont.className}`}>Send Inquiry</button>
                        </form>
                    </div>
                </div>

                {/* RIGHT: IMAGE SIDE */}
                <div className="relative h-[40vh] lg:h-auto w-full bg-neutral-100 order-1 lg:order-2">
                    <Image 
                        src="/atelier.jpg" 
                        alt="Love in a Box Atelier" 
                        fill 
                        className="object-cover"
                    />
                     <div className="absolute inset-0 bg-[#0A2620]/20"></div>
                </div>
            </div>
        </motion.div>
    );
}