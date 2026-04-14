import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md py-4 border-b border-white/10' : 'bg-gradient-to-b from-black/80 to-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="block py-2">
              <img 
                src="https://i.imgur.com/pSMAUYD.png" 
                alt="PRO AUTO Detailing" 
                className="h-16 md:h-24 w-auto object-contain" 
                referrerPolicy="no-referrer" 
              />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-accent hover:bg-red-700 text-white px-8 py-3 font-bold uppercase tracking-widest text-xs transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(163,10,12,0.4)]">
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-accent transition-colors">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-4 w-full text-center bg-accent text-white px-6 py-4 font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(163,10,12,0.4)]"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
