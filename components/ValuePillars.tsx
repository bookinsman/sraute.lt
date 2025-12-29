
import React from 'react';

const ValuePillars: React.FC = React.memo(() => {
  const pillars = [
    {
      id: "01",
      title: "Dėmesio Valdymas",
      desc: "Valdome vartotojo dėmesį per vizualinį ir tekstinį ritmą."
    },
    {
      id: "02",
      title: "Konversijos Kodas",
      desc: "Kiekvienas simbolis turi savo ROI. Optimizuojame tekstus pelnui."
    },
    {
      id: "03",
      title: "Identiteto Svoris",
      desc: "Suteikiame prekės ženklui identitetą, kuris tampa rinkos standartu."
    },
    {
      id: "04",
      title: "Srautinis Gylis",
      desc: "Organiškas kliento vedimas per piltuvėlį be jokio pasipriešinimo."
    }
  ];

  return (
    <section>
      <div className="mb-16 md:mb-24 px-4 md:px-0 space-y-12">
        <div className="max-w-4xl border-l-2 border-black/10 pl-6 md:pl-10">
           <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-medium mb-8 italic">
            Jūs nemokate už žodžius. Jūs investuojate į rinkos dominavimą. Tai skirta ne visiems. Tik tiems, kurie supranta:
          </p>
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 border border-black/20 flex items-center justify-center">
                <div className="w-4 h-4 bg-black"></div>
             </div>
             <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter text-black">
               Tinkamas balsas vertas visko.
             </h3>
          </div>
        </div>

        <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-[0.95] md:leading-[0.9] max-w-5xl text-black italic">
          Žodžių architektūra, kuri neša <span className="underline decoration-lime-400 decoration-[6px] md:decoration-8 underline-offset-4 md:underline-offset-8">realų pelną</span>.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-2 border-black">
        {pillars.map((p) => (
          <div key={p.id} className="bg-white p-8 md:p-12 border-b-2 md:border-b-0 md:border-r-2 last:border-b-0 md:last:border-r-0 border-black hover:bg-lime-400 transition-all group cursor-default">
            <span className="mono text-black text-xs md:text-sm block mb-8 md:mb-12 font-black group-hover:scale-125 transition-transform origin-left">{p.id}</span>
            <h4 className="text-xl md:text-2xl font-black mb-4 md:mb-6 uppercase tracking-tight">{p.title}</h4>
            <p className="text-gray-600 leading-relaxed text-sm font-medium group-hover:text-black">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

ValuePillars.displayName = 'ValuePillars';

export default ValuePillars;
