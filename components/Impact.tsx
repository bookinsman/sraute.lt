
import React from 'react';

const Impact: React.FC = () => {
  return (
    <section className="relative py-24 border-t-2 border-black/5">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8 px-4 md:px-0">
        <div className="flex flex-col">
          <h2 className="text-7xl md:text-[12rem] font-black uppercase tracking-tighter leading-[0.75] italic text-black">
            Poveikis
          </h2>
          <h2 className="text-7xl md:text-[12rem] font-black uppercase tracking-tighter leading-[0.75] italic text-black md:ml-24">
            Verslui
          </h2>
        </div>
        
        <div className="mono text-[10px] md:text-xs text-black font-black uppercase tracking-[0.3em] space-y-3 bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-lime-400 border border-black"></span>
            TANKIO_ANALIZĖ
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-lime-400 border border-black"></span>
            DĖMESIO_LYGIS: 91%
          </div>
          <div className="pt-2 border-t border-black/10 text-gray-400">
            [ STATUS: ACTIVE ]
          </div>
        </div>
      </div>

      <div className="max-w-4xl px-4 md:px-0">
        <p className="text-2xl md:text-5xl font-light italic leading-tight text-gray-800 border-l-8 border-lime-400 pl-8">
          "Prisiimu dirbti tik su tais, kurie pasiruošę dominuoti savo nišoje."
        </p>
      </div>
    </section>
  );
};

export default Impact;
