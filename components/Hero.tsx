import React from 'react';
import { PromoBadge } from './PromoBadge';
import { Trophy, TrendingUp, Globe2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-betting-accent/20 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block mb-4">
          <span className="bg-betting-gold text-black font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider flex items-center gap-2">
            <Globe2 size={12} /> Valid Worldwide • Europe • Asia • Africa
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Paris Sportifs VIP <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-betting-accent to-emerald-300">International</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Rejoignez l'élite mondiale. Profitez des bonus "High Roller" jusqu'à <strong>130€/$</strong> sur votre premier dépôt avec le code universel.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
           <PromoBadge size="lg" className="shadow-[0_0_30px_rgba(16,185,129,0.3)] animate-pulse-slow" />
           <a href="#predictions" className="bg-white text-betting-dark font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors">
             Pronostics / Tips
           </a>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-left md:text-center">
          <div className="glass-panel p-6 rounded-xl flex flex-col items-center gap-3">
            <div className="bg-betting-accent/20 p-3 rounded-full text-betting-accent">
              <Trophy size={28} />
            </div>
            <h3 className="font-bold text-lg">93% Win Rate</h3>
            <p className="text-sm text-gray-400">Coupons validés par nos experts internationaux.</p>
          </div>
          <div className="glass-panel p-6 rounded-xl flex flex-col items-center gap-3">
            <div className="bg-betting-gold/20 p-3 rounded-full text-betting-gold">
              <TrendingUp size={28} />
            </div>
            <h3 className="font-bold text-lg">Cotes Asiatiques</h3>
            <p className="text-sm text-gray-400">Accès aux meilleurs handicaps et cotes boostées.</p>
          </div>
          <div className="glass-panel p-6 rounded-xl flex flex-col items-center gap-3">
            <div className="bg-blue-500/20 p-3 rounded-full text-blue-500">
              <Globe2 size={28} />
            </div>
            <h3 className="font-bold text-lg">Multi-Devises</h3>
            <p className="text-sm text-gray-400">Jouez en Euro, Dollar, ou Crypto sans restriction.</p>
          </div>
        </div>
      </div>
    </section>
  );
};