import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10" />
        <img 
          src="https://i.imgur.com/TcQUjjI.jpg" 
          alt="High gloss luxury car" 
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <div className="inline-block border border-accent/50 bg-accent/10 px-4 py-1.5 mb-6 backdrop-blur-sm">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">Sacramento's Premier Service</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] tracking-tighter mb-6 uppercase">
              Premium <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Mobile Auto</span><br/>
              Detailing
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mb-10 leading-relaxed">
              <strong className="text-white font-semibold">Paint correction, deep detailing, and restoration</strong> — delivered directly to you. We focus on results, not just washing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-accent hover:bg-red-700 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm text-center transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(163,10,12,0.5)]">
                Book Now
              </a>
              <a href="#services" className="border border-white/30 hover:border-white hover:bg-white/5 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm text-center transition-all backdrop-blur-sm">
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
