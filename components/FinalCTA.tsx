
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-24 bg-black text-white text-center overflow-hidden dysmorphy-card">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none mono text-[30vw] font-black leading-none -translate-x-1/4 -translate-y-1/4 whitespace-nowrap italic">
        SRAUTE
      </div>
      
      <div className="relative z-10 flex flex-col items-center space-y-12">
        <div className="space-y-6 md:space-y-10">
          <h2 className="text-5xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] text-white">
            Sutvarkau <br/> Jūsų Balsą.
          </h2>
          
          <p className="max-w-xl mx-auto text-lg md:text-xl font-light leading-relaxed text-gray-500 px-4">
            Vienas pokalbis. To užtenka suprasti, ar mes kartu perrašysime jūsų verslo istoriją.
          </p>
        </div>

        <div className="pt-6 md:pt-10 w-full md:w-auto">
          <button className="relative group bg-lime-400 text-black text-2xl md:text-5xl px-10 md:px-24 py-6 md:py-12 font-black uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 w-full md:w-auto">
            <span className="relative z-10">Rezervuoti Auditą</span>
            <div className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform origin-bottom duration-300"></div>
            <span className="absolute inset-0 border-[4px] md:border-[6px] border-lime-400 translate-x-2 md:translate-x-3 translate-y-2 md:translate-y-3 -z-10 group-hover:translate-x-4 md:group-hover:translate-x-6 group-hover:translate-y-4 md:group-hover:translate-y-6 transition-all"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
