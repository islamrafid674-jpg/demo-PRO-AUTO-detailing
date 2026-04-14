import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-4">
              Book <span className="text-accent">Appointment</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Ready to restore your vehicle? Fill out the form or DM us to get a quote.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center mr-4 border border-white/10">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Service Area</p>
                  <p className="text-white font-medium">Sacramento, CA & Surrounding Areas</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center mr-4 border border-white/10">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Call / Text</p>
                  <p className="text-white font-medium">(916) 555-0123</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center mr-4 border border-white/10">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Email</p>
                  <p className="text-white font-medium">booking@proautodetailing.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#050505] p-8 border border-white/10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-widest font-bold mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder-gray-700"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-widest font-bold mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder-gray-700"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-widest font-bold mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder-gray-700"
                    placeholder="(916) 555-0000"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-widest font-bold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder-gray-700"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-widest font-bold mb-2">Vehicle Make & Model</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder-gray-700"
                  placeholder="e.g. 2023 Porsche 911"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-widest font-bold mb-2">Service Requested</label>
                <select className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
                  <option value="" className="bg-black text-gray-500">Select a service...</option>
                  <option value="paint-correction" className="bg-black">Paint Correction</option>
                  <option value="full-detail" className="bg-black">Full Detail</option>
                  <option value="interior-detail" className="bg-black">Interior Detail</option>
                  <option value="exterior-detail" className="bg-black">Exterior Detail</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full bg-accent hover:bg-red-700 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all shadow-[0_0_20px_rgba(163,10,12,0.3)] mt-4"
              >
                DM or Book Appointment
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
