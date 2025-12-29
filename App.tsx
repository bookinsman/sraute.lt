
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import ValuePillars from './components/ValuePillars';
import Process from './components/Process';
import Impact from './components/Impact';
import MarketDefects from './components/MarketDefects';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -5% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.reveal');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen mosaic-bg selection:bg-lime-400 selection:text-black">
      <div className="grain" />
      
      <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-0">
        <Header />
        <main className="space-y-16 md:space-y-48 pb-24">
          <section className="reveal"><Hero /></section>
          <section className="reveal"><ProblemSolution /></section>
          
          <div className="stagger-parent space-y-16 md:space-y-48">
            <section className="reveal"><ValuePillars /></section>
            <section className="reveal"><Process /></section>
            <section className="reveal"><MarketDefects /></section>
          </div>

          <section className="reveal"><Impact /></section>
          <section className="reveal"><FinalCTA /></section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
