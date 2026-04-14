import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-6">
              Precision & <span className="text-accent">Quality</span>
            </h2>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
              PRO AUTO Detailing delivers premium mobile detailing and paint correction services across Sacramento with a focus on precision and quality.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                'Sacramento-based mobile service',
                'Paint correction specialists',
                'High-quality vehicle restoration',
                'Focus on results, not just washing'
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-accent mr-4 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="inline-block border border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all">
              Book Appointment
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent/20 transform translate-x-4 translate-y-4 -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80" 
              alt="Detailing process" 
              className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 bg-black p-6 border-t border-r border-white/10">
              <p className="font-display font-black text-3xl text-white mb-1">100%</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
