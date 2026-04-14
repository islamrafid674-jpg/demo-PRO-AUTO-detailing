import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <a href="#" className="block">
            <img 
              src="https://i.imgur.com/pSMAUYD.png" 
              alt="PRO AUTO Detailing" 
              className="h-12 md:h-16 w-auto object-contain" 
              referrerPolicy="no-referrer" 
            />
          </a>
        </div>
        <div className="text-gray-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} PRO AUTO Detailing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
