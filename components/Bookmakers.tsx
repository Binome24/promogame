import React from 'react';
import { PromoBadge } from './PromoBadge';
import { ExternalLink, Zap } from 'lucide-react';

interface Bookmaker {
  name: string;
  url: string;
  code: string;
  color: string;
  bonus: string;
  logo: string;
}

const bookmakers: Bookmaker[] = [
  {
    name: 'WinWin',
    url: 'https://refpa712080.pro/L?tag=d_4069424m_64485c_&site=4069424&ad=64485',
    code: 'LPBN',
    color: 'from-red-600 to-red-800',
    bonus: 'Bonus 100% + Freebets',
    logo: 'WW'
  },
  {
    name: '1xBet',
    url: 'https://refpa58144.com/L?tag=d_3742516m_1599c_&site=3742516&ad=1599',
    code: 'LPBN',
    color: 'from-blue-600 to-blue-800',
    bonus: 'Bonus 200% Premier Dépôt',
    logo: '1X'
  },
  {
    name: 'BetWinner',
    url: 'https://bw-prm.com/bonus-100-01/?p=%2Fregistration%2F&id=25c6',
    code: 'LPBN',
    color: 'from-yellow-500 to-yellow-700',
    bonus: '130€ de Bonus',
    logo: 'BW'
  },
  {
    name: 'Melbet',
    url: '#', // Placeholder as user didn't provide specific link yet, generic fallback
    code: 'EXPERT101',
    color: 'from-orange-500 to-orange-700',
    bonus: 'Bonus de Bienvenue Boosté',
    logo: 'MB'
  },
  {
    name: 'MegaPari',
    url: '#', // Placeholder
    code: 'EXPERT101',
    color: 'from-indigo-600 to-indigo-800',
    bonus: 'Bonus Casino + Sport',
    logo: 'MP'
  }
];

export const Bookmakers: React.FC = () => {
  return (
    <section id="bookmakers" className="py-20 px-4 bg-betting-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nos Bookmakers Partenaires</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Inscrivez-vous via nos liens exclusifs pour activer les codes promo et recevoir les bonus maximums.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {bookmakers.map((bookie, idx) => (
            <div key={idx} className="relative group">
              {/* Card */}
              <div className="h-full bg-betting-dark border border-gray-700 rounded-2xl overflow-hidden hover:border-betting-accent transition-all duration-300 flex flex-col shadow-lg hover:shadow-betting-accent/20">
                
                {/* Header Background */}
                <div className={`h-24 bg-gradient-to-br ${bookie.color} flex items-center justify-center relative`}>
                  <div className="text-4xl font-black text-white/20 absolute select-none">
                    {bookie.logo}
                  </div>
                  <h3 className="text-2xl font-bold text-white relative z-10 drop-shadow-md">{bookie.name}</h3>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow items-center text-center">
                  <div className="inline-block bg-gray-800 rounded px-2 py-1 text-xs text-betting-gold mb-4 border border-gray-700">
                    <Zap size={12} className="inline mr-1" />
                    {bookie.bonus}
                  </div>
                  
                  <div className="mb-6 w-full">
                    <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Code Promo Obligatoire</p>
                    <PromoBadge code={bookie.code} size="sm" className="w-full justify-center" />
                  </div>

                  <a 
                    href={bookie.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto w-full py-3 px-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group-hover:scale-105 duration-300"
                  >
                    S'inscrire maintenant
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};