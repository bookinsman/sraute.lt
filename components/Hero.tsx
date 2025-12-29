
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-4 md:pt-12 flex flex-col items-center min-h-0">
      {/* Dynamic Morphy Globs */}
      <div className="glow-blob top-[5%] left-[-15%] opacity-40 mix-blend-multiply" />
      <div className="glow-blob bottom-[10%] right-[-10%] opacity-30 mix-blend-multiply" style={{ animationDelay: '-4s', background: 'radial-gradient(circle, rgba(165, 243, 252, 0.3) 0%, transparent 70%)' }} />
      
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* The Big Title - Ultra Tight for Mobile */}
        <div className="relative px-4 text-center mb-6 md:mb-0">
          <h1 className="text-[14vw] md:text-[11rem] font-black tracking-tighter leading-[0.75] text-black uppercase italic selection:bg-black selection:text-lime-400">
            Balso <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-br from-black via-black to-gray-500 group cursor-default">
              In<span className="text-lime-400 [text-fill-color:initial] [-webkit-text-fill-color:initial]">ž</span>inerija
              <div className="absolute -bottom-1 md:-bottom-3 left-0 w-full h-1.5 md:h-3 bg-lime-400 -z-10 group-hover:scale-x-105 transition-transform duration-500 origin-left" />
            </span>
          </h1>
          
          {/* Metadata Floating Labels - Desktop Only */}
          <div className="absolute top-0 right-0 md:-right-24 translate-x-full hidden lg:block">
            <div className="mono text-[8px] font-bold text-gray-400 border-l-2 border-lime-400 pl-3 py-1 space-y-0.5 text-left">
              <div>LOC: 54.6872° N</div>
              <div>ENV: HIGH_CONV</div>
              <div className="text-lime-500">VAL: OPTIMIZED</div>
            </div>
          </div>
        </div>

        {/* Engineered Modules - Proportional Compact Layout */}
        <div className="w-full max-w-7xl mt-4 md:mt-16 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-black">
            {[
              { label: "AIŠKUMAS", meta: "DATA_STRUC_01", color: "bg-white", text: "Struktūrinis komunikacijos pamatas." },
              { label: "GALIA", meta: "FORCE_MOD_02", color: "bg-lime-400", text: "Tikslinė, nepajudinama autoriteto jėga." },
              { label: "SRAUTAS", meta: "CONV_OPTIM_03", color: "bg-black", text: "Belaidis konversijų variklis verslui." }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className={`p-4 sm:p-5 md:p-6 h-full border-l border-r border-black/10 md:border-r md:border-l-0 first:md:border-l border-black transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[130px] md:min-h-[190px]
                  ${item.color === 'bg-black' ? 'text-white' : 'text-black'} 
                  ${item.color}
                `}>
                  <div className="scanline opacity-0 group-hover:opacity-10"></div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between items-start">
                      <span className="mono text-[7px] font-black tracking-widest opacity-40 uppercase">
                        // {item.meta}
                      </span>
                      <span className="mono text-[8px] font-black opacity-10 group-hover:opacity-30">
                        [{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}]
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-black italic uppercase tracking-tighter leading-none">
                      {item.label}
                    </h3>
                  </div>

                  <div className="mt-3 md:mt-4 space-y-2">
                    <p className={`text-[11px] md:text-[12px] font-bold leading-tight opacity-80 group-hover:opacity-100 max-w-[95%]`}>
                      {item.text}
                    </p>
                    <div className="w-full h-[1px] bg-current opacity-20"></div>
                  </div>
                </div>

                {/* Compact Arrows */}
                {idx < 2 && (
                  <div className="absolute top-1/2 -right-2.5 -translate-y-1/2 z-20 hidden md:block">
                    <div className="w-5 h-5 bg-white border border-black flex items-center justify-center font-black rotate-45 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:bg-lime-400">
                      <span className="-rotate-45 text-[8px]">→</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-8 md:mt-16 text-center max-w-4xl px-4 pb-10">
          <p className="text-lg md:text-3xl font-black uppercase tracking-tighter italic leading-none mb-6">
            Architektūrinis priėjimas prie <br className="hidden md:block" /> 
            prekės ženklo komunikacijos.
          </p>
          <div className="group relative inline-block">
            <button className="bg-black text-lime-400 px-7 py-3.5 md:px-14 md:py-6 text-lg md:text-2xl font-black uppercase tracking-tighter shadow-[6px_6px_0px_0px_#bef264] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all border-2 border-black active:scale-95">
              Konstruoju Autoritetą
            </button>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 mono text-[8px] font-bold text-gray-400 tracking-[0.3em] uppercase w-full">
              SRAUTE_ENGINEERING // V2.5
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
