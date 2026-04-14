import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Droplets, Car, Shield } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Paint Correction',
    description: 'Our top priority service. We restore your vehicle\'s clear coat to a mirror-like finish.',
    features: ['Swirl & scratch removal', 'Gloss restoration', 'Multi-stage correction', 'Hologram removal'],
    icon: Sparkles,
    isPriority: true,
  },
  {
    id: '02',
    title: 'Full Detail',
    description: 'A comprehensive reset for your vehicle, inside and out.',
    features: ['Interior deep clean', 'Exterior decontamination', 'Engine bay detail', 'Trim restoration'],
    icon: Car,
    isPriority: false,
  },
  {
    id: '03',
    title: 'Interior Detail',
    description: 'Complete interior restoration and sanitization.',
    features: ['Deep vacuum & extraction', 'Stain removal', 'Leather conditioning', 'Odor elimination'],
    icon: Droplets,
    isPriority: false,
  },
  {
    id: '04',
    title: 'Exterior Detail',
    description: 'More than a wash. A meticulous exterior treatment.',
    features: ['Hand wash & dry', 'Clay bar treatment', 'Wheel & tire deep clean', 'Protection finish'],
    icon: Shield,
    isPriority: false,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-4">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">
              We specialize in high-quality vehicle restoration. Never just a basic wash.
            </p>
          </div>
          <div className="hidden md:block">
            <a href="#contact" className="border border-white/20 hover:border-accent hover:text-accent text-white px-6 py-3 font-bold uppercase tracking-widest text-xs transition-all">
              View Full Pricing
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group border ${service.isPriority ? 'border-accent bg-accent/5' : 'border-white/10 bg-white/5'} p-8 hover:bg-white/10 transition-colors`}
            >
              {service.isPriority && (
                <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 transform translate-x-2 -translate-y-2 shadow-lg">
                  Specialist Focus
                </div>
              )}
              
              <div className="flex justify-between items-start mb-8">
                <service.icon className={`w-10 h-10 ${service.isPriority ? 'text-accent' : 'text-gray-400'}`} />
                <span className="font-display font-black text-5xl text-white/5 group-hover:text-white/10 transition-colors">
                  {service.id}
                </span>
              </div>
              
              <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-8 min-h-[48px]">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm font-medium text-gray-300">
                    <div className={`w-1.5 h-1.5 rounded-full mr-3 ${service.isPriority ? 'bg-accent' : 'bg-gray-500'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-10">
                <a href="#contact" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-white hover:text-accent transition-colors group/link">
                  Request Quote
                  <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
