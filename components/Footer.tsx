
import React from 'react';

const Footer: React.FC = React.memo(() => {
  return (
    <footer className="pt-24 md:pt-32 pb-12 md:pb-16 border-t-2 border-black/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-24 px-4 md:px-0">
        <div className="col-span-1 md:col-span-2 space-y-6 md:space-y-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-black flex items-center justify-center font-black text-white text-2xl md:text-3xl">S</div>
            <span className="font-black tracking-widest text-xl md:text-2xl uppercase italic">Sraute .lt</span>
          </div>
          <p className="text-gray-400 uppercase mono text-[10px] md:text-xs font-bold leading-loose max-w-sm tracking-widest">
            Architektūrinis priėjimas prie prekės ženklo komunikacijos. Konstruoju autoritetą rinkos lyderiams.
          </p>
          <div className="flex space-x-6 md:space-x-8 pt-4">
            <a href="#" className="text-[10px] md:text-[11px] mono font-black uppercase border-b-2 md:border-b-4 border-black pb-1 hover:text-lime-600 transition-all">Instagram</a>
            <a href="#" className="text-[10px] md:text-[11px] mono font-black uppercase border-b-2 md:border-b-4 border-black pb-1 hover:text-lime-600 transition-all">LinkedIn</a>
          </div>
        </div>

        <div>
            <h5 className="mono text-[9px] md:text-[10px] text-gray-400 uppercase tracking-[0.4em] font-black mb-6 md:mb-10">Navigacija</h5>
            <ul className="space-y-4 md:space-y-6 text-xs md:text-sm font-black uppercase tracking-tight">
                <li><a href="#" className="hover:text-lime-600 transition-colors">Sistema</a></li>
                <li><a href="#" className="hover:text-lime-600 transition-colors">Architektūra</a></li>
                <li><a href="#" className="hover:text-lime-600 transition-colors">Rezultatai</a></li>
            </ul>
        </div>

        <div>
            <h5 className="mono text-[9px] md:text-[10px] text-gray-400 uppercase tracking-[0.4em] font-black mb-6 md:mb-10">Kontaktas</h5>
            <ul className="space-y-4 md:space-y-6 text-xs md:text-sm font-black uppercase tracking-tight">
                <li className="text-black font-black text-lg md:text-xl break-all">
                  <a href="mailto:hi@sraute.lt" className="underline decoration-lime-400 decoration-2 md:decoration-4 underline-offset-4 md:underline-offset-8 hover:text-lime-600 transition-colors">
                    hi@sraute.lt
                  </a>
                </li>
                <li className="text-gray-400 mt-6 md:mt-12 block pt-2">Globalūs Projektai</li>
            </ul>
        </div>
      </div>

      <div className="border-t-2 border-black/5 pt-10 md:pt-16 px-4 md:px-0">
        <div className="flex flex-col gap-4 md:gap-2 text-[8px] md:text-[11px] mono text-black uppercase tracking-[0.2em] md:tracking-[0.5em] font-bold text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <span>© 2024 Sraute . Visi sprendimai optimizuoti .</span>
          </div>
          <div className="flex justify-between md:justify-start md:gap-16 w-full pt-4 md:pt-2 border-t md:border-none border-black/5 mt-2 md:mt-0">
            <span>Struktūra</span>
            <span>Logika</span>
            <span>Konversija</span>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
