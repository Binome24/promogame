import React from 'react';
import { Hero } from './components/Hero';
import { AiPrediction } from './components/AiPrediction';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { PromoBadge } from './components/PromoBadge';
import { BlogSection } from './components/BlogSection';
import { Bookmakers } from './components/Bookmakers';
import { Community } from './components/Community';
import { LiveCoupons } from './components/LiveCoupons';

function App() {
  return (
    <div className="min-h-screen bg-betting-dark text-white selection:bg-betting-accent selection:text-white">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-betting-dark/90 backdrop-blur-md border-b border-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-black italic tracking-tighter">
            LPBN<span className="text-betting-accent">.BET</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
             <a href="#" className="hover:text-white transition-colors">Accueil</a>
             <a href="#bookmakers" className="hover:text-white transition-colors">Bookmakers</a>
             <a href="#predictions" className="hover:text-white transition-colors">Pronostics</a>
             <a href="#conseils" className="hover:text-white transition-colors">Conseils</a>
          </nav>
          <div className="flex items-center gap-4">
            <span className="hidden lg:inline text-sm text-gray-400">Code VIP :</span>
            <PromoBadge size="sm" />
          </div>
        </div>
      </header>

      <main>
        <Hero />
        
        {/* Banner Transition */}
        <div className="bg-betting-accent py-3 overflow-hidden transform -skew-y-2 border-y-4 border-black">
           <div className="flex justify-center items-center gap-8 text-betting-dark font-black text-xl uppercase tracking-widest whitespace-nowrap animate-marquee">
              <span>Code Promo LPBN</span> • <span>Bonus 130%</span> • <span>Coupons Foot</span> • <span>Code Promo EXPERT101</span> • <span>Pronostics Gratuits</span> • <span>Paris Sécurisés</span>
           </div>
        </div>

        <Bookmakers />
        
        <LiveCoupons />

        <Features />
        
        <AiPrediction />
        
        <Community />
        
        <BlogSection />
        
        {/* Call to Action Bottom */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-betting-surface to-gray-900 border border-gray-700 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-betting-accent/10 blur-[80px] rounded-full pointer-events-none"></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ne pariez plus jamais sans bonus</h2>
            <p className="text-xl text-gray-400 mb-8 relative z-10">
              Copiez le code <span className="text-white font-bold">LPBN</span> maintenant et commencez à gagner avant même le coup d'envoi.
            </p>
            <div className="flex justify-center relative z-10">
              <PromoBadge size="lg" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;