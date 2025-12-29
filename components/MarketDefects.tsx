
import React from 'react';

const MarketDefects: React.FC = () => {
  const defects = [
    { code: "ERR_01", title: "Generinė Kalba", desc: "90% verslų Lietuvoje skamba identiškai. Tai identiteto mirtis." },
    { code: "ERR_02", title: "Žema Konversija", desc: "Srautas yra, bet pardavimų nėra. Prarandate tūkstančius kasdien." },
    { code: "ERR_03", title: "Kainų Karas", desc: "Konkuruojate kaina, nes nesugebate tinkamai paaiškinti vertės." },
    { code: "ERR_04", title: "Branding Chaos", desc: "Kiekvienas kanalas kalba skirtingai. Klientai jumis nebepasitiki." }
  ];

  return (
    <section>
      <div className="text-left mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-baseline gap-4 md:gap-12">
        <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-none text-black">Rinkos <br/> Defektai</h2>
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-ping"></div>
          <p className="mono text-[10px] md:text-sm text-red-600 font-black uppercase tracking-widest">Rastos kritinės klaidos</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-black">
        {defects.map((def, idx) => (
          <div key={idx} className="group relative p-6 md:p-10 bg-white border-b-2 md:border-b-0 md:border-r-2 last:border-b-0 md:last:border-r-0 border-black transition-all hover:bg-red-600 hover:text-white overflow-hidden">
            <div className="absolute top-0 right-0 p-3 md:p-4 opacity-10 group-hover:opacity-30 transition-opacity">
               <span className="text-4xl md:text-6xl font-black italic">!</span>
            </div>
            <div className="relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-black flex items-center justify-center font-black text-xl md:text-2xl mb-6 md:mb-8 group-hover:bg-white group-hover:text-red-600 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                !
              </div>
              <span className="mono font-black text-[9px] md:text-[10px] block mb-3 md:mb-4 border-b border-current pb-1 w-fit">{def.code}</span>
              <h4 className="text-xl md:text-3xl font-black mb-4 md:mb-6 uppercase tracking-tighter leading-tight italic">{def.title}</h4>
              <p className="text-xs md:text-sm leading-relaxed font-bold opacity-70 group-hover:opacity-100">{def.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketDefects;
