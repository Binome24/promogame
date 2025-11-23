import React from 'react';
import { PromoBadge } from './PromoBadge';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-white">LPBN Pronos</h2>
          <p className="text-gray-500 mb-6 max-w-sm">
            La référence pour les parieurs exigeants. Analyses pointues, intelligence artificielle et les meilleurs codes promo du marché.
          </p>
          <PromoBadge size="sm" />
        </div>
        
        <div>
          <h3 className="font-bold text-white mb-4">Liens Rapides</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-betting-accent">Accueil</a></li>
            <li><a href="#predictions" className="hover:text-betting-accent">Pronostics du Jour</a></li>
            <li><a href="#" className="hover:text-betting-accent">Comment utiliser le Code</a></li>
            <li><a href="#" className="hover:text-betting-accent">Termes & Conditions</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white mb-4">Mots-clés Populaires</h3>
          <div className="flex flex-wrap gap-2">
            {['Pari Foot', 'Code Promo 1xBet', 'BetWinner Bonus', 'Pronostic Gratuit', 'League des Champions', 'Coupon du jour', 'Paris Sportif Afrique'].map((tag, i) => (
              <span key={i} className="text-xs bg-gray-900 text-gray-400 px-2 py-1 rounded border border-gray-800">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-900 text-center text-gray-600 text-sm">
        <p className="mb-2">
          Les jeux d'argent sont interdits aux mineurs. Jouez de manière responsable.
        </p>
        <p>&copy; {new Date().getFullYear()} LPBN Paris Sportifs. Tous droits réservés.</p>
      </div>
    </footer>
  );
};