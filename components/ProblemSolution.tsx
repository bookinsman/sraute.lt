
import React from 'react';

const ProblemSolution: React.FC = React.memo(() => {
  return (
    <section className="grid md:grid-cols-2 gap-12 md:gap-32 items-start px-4 md:px-0">
      <div className="space-y-12 md:space-y-16">
        <div className="relative">
          <h3 className="mono text-gray-400 text-[10px] mb-4 md:mb-6 uppercase tracking-[0.4em]">Filosofija</h3>
          <div className="flex flex-col mb-8 md:mb-12">
            <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tighter text-black uppercase italic">
              Triukšmas
            </h2>
            <div className="flex items-center gap-4 -mt-2 md:-mt-4">
              <span className="text-5xl md:text-8xl font-light text-lime-500">≠</span>
              <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tighter text-black uppercase italic">
                Balsui
              </h2>
            </div>
          </div>
          <div className="border-l-4 border-black pl-6 md:pl-8 space-y-4">
            <p className="text-xl md:text-3xl font-black text-gray-900 leading-tight">
              Aš nekuriu "postų". Aš projektuoju pokalbius, kurie keičia suvokimą.
            </p>
            <p className="text-sm md:text-base font-medium text-gray-500 max-w-sm">
              "Dauguma verslų Lietuvoje skęsta informacinėje migloje. Jie sako daug, bet nepasako nieko."
            </p>
          </div>
        </div>
        
        {/* EXACT DESIGN FROM SCREENSHOT */}
        <div className="p-10 md:p-14 bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#D14D41] font-bold text-xl">✕</span>
            <span className="mono text-[#D14D41] text-xs font-black uppercase tracking-[0.3em]">Problema</span>
          </div>
          <p className="text-2xl md:text-4xl font-black leading-[1.1] tracking-tight text-black">
            Inertiška komunikacija, kuri kainuoja milijonus galimybių.
          </p>
        </div>
      </div>

      <div className="md:mt-40 space-y-12 md:space-y-16">
        <div className="p-10 md:p-16 bg-lime-400 text-black border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-24 md:w-32 h-24 md:h-32 bg-black/5 rounded-full group-hover:scale-125 transition-transform duration-500" />
          <div className="flex items-center gap-3 mb-6">
            <span className="font-bold text-xl">✓</span>
            <span className="mono text-[10px] block font-black uppercase tracking-[0.3em]">Sprendimas</span>
          </div>
          <h4 className="text-2xl md:text-5xl font-black leading-none uppercase tracking-tighter italic">Preciziškas lingvistinis dizainas tiesiai į vartotoją.</h4>
        </div>
        
        <div className="grid grid-cols-2 gap-px bg-black border-[2px] border-black mono text-[8px] md:text-[9px] tracking-widest font-bold">
            <div className="bg-white p-4 md:p-6 hover:bg-black hover:text-white transition-colors">ARCHITEKTŪRA_STAG_01</div>
            <div className="bg-white p-4 md:p-6 hover:bg-black hover:text-white transition-colors">LOGIKA_STRAT_02</div>
            <div className="bg-white p-4 md:p-6 hover:bg-black hover:text-white transition-colors">SISTEMOS_MOD_03</div>
            <div className="bg-white p-4 md:p-6 hover:bg-black hover:text-white transition-colors">SRAUTAS_FLOW_04</div>
        </div>
      </div>
    </section>
  );
});

ProblemSolution.displayName = 'ProblemSolution';

export default ProblemSolution;
