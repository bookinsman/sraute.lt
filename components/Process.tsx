
import React from 'react';

const Process: React.FC = React.memo(() => {
  const steps = [
    {
      num: "01",
      label: "Strategija",
      title: "Auditas",
      desc: "Nustatome, kur jūsų balsas pradingsta konkurentų fone ir kur slypi neišnaudotas potencialas."
    },
    {
      num: "02",
      label: "Architektūra",
      title: "Srauto Dizainas",
      desc: "Konstruojame unikalų komunikacijos karkasą, kuris tarnaus jūsų verslui metus, ne dienas."
    },
    {
      num: "03",
      label: "Realizacija",
      title: "Išpildymas",
      desc: "Nuo manifesto iki kasdienių interakcijų – kiekviena detalė suderinama su pagrindine strategija."
    }
  ];

  return (
    <section className="relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
        <div className="relative pt-12">
          <h2 className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter italic text-black/5 absolute top-0 left-0 pointer-events-none z-0">WORKFLOW</h2>
          <div className="relative z-10 flex flex-col items-start">
            <div className="bg-lime-400 px-4 py-1.5 mb-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <span className="mono text-black text-[10px] md:text-xs font-black tracking-[0.4em] uppercase">Sraute Metodika</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black">Procesas</h2>
          </div>
        </div>
        <div className="text-left md:text-right text-gray-400 mono text-[10px] uppercase leading-loose font-bold bg-white/80 p-2 md:p-0">
          [ SISTEMINIS PRIĖJIMAS ] <br className="hidden md:block"/>
          [ BE ATSITIKTINUMŲ ]
        </div>
      </div>

      <div className="space-y-0 border-t border-black">
        {steps.map((step, idx) => (
          <div key={idx} className="group relative border-b border-black py-10 md:py-16 transition-all hover:bg-black hover:text-white">
             <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center relative z-10 px-4 md:px-8">
                <div className="md:col-span-1">
                   <span className="mono font-black text-xl md:text-2xl">{step.num}</span>
                </div>
                <div className="md:col-span-3">
                   <span className="block uppercase mono text-[9px] text-gray-400 mb-1 md:mb-2 font-bold group-hover:text-lime-400">{step.label}</span>
                   <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tight">{step.title}</h4>
                </div>
                <div className="md:col-span-8 lg:col-span-7">
                   <p className="text-lg md:text-xl font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                     {step.desc}
                   </p>
                </div>
                <div className="hidden md:block md:col-span-1 text-right">
                  <span className="text-3xl opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
});

Process.displayName = 'Process';

export default Process;
