
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-10 flex justify-between items-center relative z-20">
      <div className="flex items-center space-x-3 group cursor-pointer">
        <div className="w-10 h-10 bg-black flex items-center justify-center font-black text-white text-2xl transition-all group-hover:bg-lime-400 group-hover:text-black">S</div>
        <div className="flex flex-col -space-y-1">
          <span className="font-black tracking-tighter text-xl">SRAUTE</span>
          <span className="mono text-[8px] tracking-[0.3em] text-gray-400 uppercase">Balso Inžinerija</span>
        </div>
      </div>
      
      <nav className="hidden md:flex space-x-12 text-[10px] mono text-black font-bold uppercase tracking-[0.2em]">
        <a href="#" className="group relative overflow-hidden pb-1">
          <span className="relative z-10">Sistema</span>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-lime-400 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"></div>
        </a>
        <a href="#" className="group relative overflow-hidden pb-1">
          <span className="relative z-10">Architektūra</span>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-lime-400 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"></div>
        </a>
        <a href="#" className="group relative overflow-hidden pb-1">
          <span className="relative z-10">Rezultatai</span>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-lime-400 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"></div>
        </a>
      </nav>

      <button className="hidden sm:block bg-black text-white px-10 py-4 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-lime-400 hover:text-black transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[0px_0px_30px_rgba(190,242,100,0.5)]">
        Pradėkime
      </button>
    </header>
  );
};

export default Header;
