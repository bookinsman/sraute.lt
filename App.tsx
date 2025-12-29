
import React, { useEffect, useRef, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';

const ValuePillars = lazy(() => import('./components/ValuePillars'));
const Process = lazy(() => import('./components/Process'));
const Impact = lazy(() => import('./components/Impact'));
const MarketDefects = lazy(() => import('./components/MarketDefects'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const Footer = lazy(() => import('./components/Footer'));

const App: React.FC = React.memo(() => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.05,
      rootMargin: '0px 0px -10% 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.reveal');
    sections.forEach((section) => observerRef.current?.observe(section));

    return () => {
      observerRef.current?.disconnect();
    };
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
            <section className="reveal">
              <Suspense fallback={<div className="min-h-[400px]" />}>
                <ValuePillars />
              </Suspense>
            </section>
            <section className="reveal">
              <Suspense fallback={<div className="min-h-[400px]" />}>
                <Process />
              </Suspense>
            </section>
            <section className="reveal">
              <Suspense fallback={<div className="min-h-[400px]" />}>
                <MarketDefects />
              </Suspense>
            </section>
          </div>

          <section className="reveal">
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <Impact />
            </Suspense>
          </section>
          <section className="reveal">
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <FinalCTA />
            </Suspense>
          </section>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
});

App.displayName = 'App';

export default App;
