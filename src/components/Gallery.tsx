import React from 'react';
import { motion } from 'motion/react';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-4">
            The <span className="text-accent">Results</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real transformations. We let our work speak for itself.
          </p>
        </div>

        {/* Featured Before/After */}
        <div className="mb-16">
          <div className="h-[400px] md:h-[600px] w-full overflow-hidden border border-white/10 shadow-2xl relative">
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80" 
              afterImage="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80" 
            />
          </div>
          <p className="text-center text-sm text-gray-500 mt-6 uppercase tracking-[0.2em] font-bold">
            Paint Correction & Gloss Restoration
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square overflow-hidden border border-white/10 group relative"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" 
              alt="Paint reflection" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <span className="bg-black/80 text-white text-[10px] uppercase tracking-widest px-2 py-1 font-bold backdrop-blur-sm">Paint Reflection</span>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="aspect-square overflow-hidden border border-white/10 group relative"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
            <img 
              src="https://images.unsplash.com/photo-1580274455015-8f5509787e91?auto=format&fit=crop&q=80" 
              alt="Interior restoration" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <span className="bg-black/80 text-white text-[10px] uppercase tracking-widest px-2 py-1 font-bold backdrop-blur-sm">Interior Detail</span>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="aspect-square overflow-hidden border border-white/10 group relative md:col-span-2 lg:col-span-1"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
            <img 
              src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80" 
              alt="Wheel detailing" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <span className="bg-black/80 text-white text-[10px] uppercase tracking-widest px-2 py-1 font-bold backdrop-blur-sm">Exterior Protection</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
