import React, { useState } from 'react';
import { Plus, Trash2, CheckCircle, Clock, Trophy } from 'lucide-react';
import { PromoBadge } from './PromoBadge';

interface Coupon {
  id: number;
  title: string;
  matches: string[];
  odds: string;
  status: 'PENDING' | 'WON' | 'LOST';
  bookmaker: string;
}

export const LiveCoupons: React.FC = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [coupons, setCoupons] = useState<Coupon[]>([
    {
      id: 1,
      title: "Montante Palier 1",
      matches: ["Real Madrid Victoire", "Man City +1.5 Buts"],
      odds: "2.10",
      status: 'PENDING',
      bookmaker: '1xBet'
    },
    {
      id: 2,
      title: "Fun du Week-end",
      matches: ["PSG Victoire", "Barcelone Victoire", "Inter Victoire"],
      odds: "4.50",
      status: 'WON',
      bookmaker: 'WinWin'
    }
  ]);

  // Form State
  const [newTitle, setNewTitle] = useState('');
  const [newMatches, setNewMatches] = useState('');
  const [newOdds, setNewOdds] = useState('');
  const [newBookmaker, setNewBookmaker] = useState('1xBet');

  const handleAddCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const newCoupon: Coupon = {
      id: Date.now(),
      title: newTitle,
      matches: newMatches.split(',').map(m => m.trim()),
      odds: newOdds,
      status: 'PENDING',
      bookmaker: newBookmaker
    };
    setCoupons([newCoupon, ...coupons]);
    // Reset form
    setNewTitle('');
    setNewMatches('');
    setNewOdds('');
    setIsAdminMode(false);
  };

  const handleDelete = (id: number) => {
    setCoupons(coupons.filter(c => c.id !== id));
  };

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-gray-800 pb-4">
        <div>
           <div className="flex items-center gap-2 mb-2 text-betting-gold">
             <Trophy size={20} />
             <span className="font-bold uppercase tracking-wider text-sm">Pronostics Validés</span>
           </div>
           <h2 className="text-3xl font-bold">Coupons du Jour</h2>
        </div>
        
        {/* Fake Admin Toggle */}
        <button 
          onClick={() => setIsAdminMode(!isAdminMode)}
          className="text-xs text-gray-600 hover:text-gray-400 mt-4 md:mt-0"
        >
          {isAdminMode ? 'Fermer Admin' : 'Admin Login'}
        </button>
      </div>

      {/* Admin Add Form */}
      {isAdminMode && (
        <div className="bg-gray-800 p-6 rounded-xl mb-8 border border-gray-600 animate-fade-in">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Plus size={20} className="text-betting-accent" /> Ajouter un Coupon
          </h3>
          <form onSubmit={handleAddCoupon} className="grid md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Titre (ex: Montante #1)" 
              className="bg-gray-900 border border-gray-700 p-3 rounded text-white focus:border-betting-accent outline-none"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
            />
            <input 
              type="text" 
              placeholder="Cote Totale (ex: 2.50)" 
              className="bg-gray-900 border border-gray-700 p-3 rounded text-white focus:border-betting-accent outline-none"
              value={newOdds}
              onChange={(e) => setNewOdds(e.target.value)}
              required
            />
            <textarea 
              placeholder="Matchs (séparés par des virgules)" 
              className="bg-gray-900 border border-gray-700 p-3 rounded text-white focus:border-betting-accent outline-none md:col-span-2"
              value={newMatches}
              onChange={(e) => setNewMatches(e.target.value)}
              required
            />
            <select 
              className="bg-gray-900 border border-gray-700 p-3 rounded text-white focus:border-betting-accent outline-none"
              value={newBookmaker}
              onChange={(e) => setNewBookmaker(e.target.value)}
            >
              <option value="WinWin">WinWin</option>
              <option value="1xBet">1xBet</option>
              <option value="Melbet">Melbet</option>
              <option value="MegaPari">MegaPari</option>
            </select>
            <button type="submit" className="bg-betting-accent hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded transition-colors md:col-span-2">
              Publier le Coupon
            </button>
          </form>
        </div>
      )}

      {/* Coupons Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coupons.map((coupon) => (
          <div key={coupon.id} className="glass-panel p-6 rounded-xl border-l-4 border-betting-accent hover:bg-gray-800/50 transition-colors relative">
             {isAdminMode && (
               <button 
                onClick={() => handleDelete(coupon.id)}
                className="absolute top-4 right-4 text-red-500 hover:text-red-400"
               >
                 <Trash2 size={16} />
               </button>
             )}

             <div className="flex justify-between items-start mb-4">
               <div>
                 <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded uppercase mb-2 inline-block">
                   {coupon.bookmaker}
                 </span>
                 <h3 className="font-bold text-xl">{coupon.title}</h3>
               </div>
               <div className={`flex items-center gap-1 text-sm font-bold ${coupon.status === 'WON' ? 'text-betting-accent' : 'text-betting-gold'}`}>
                 {coupon.status === 'WON' ? <CheckCircle size={16} /> : <Clock size={16} />}
                 {coupon.status === 'WON' ? 'GAGNÉ' : 'EN COURS'}
               </div>
             </div>

             <div className="space-y-2 mb-6">
               {coupon.matches.map((match, i) => (
                 <div key={i} className="flex items-center gap-2 text-gray-300 text-sm border-b border-gray-700/50 pb-1 last:border-0">
                   <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                   {match}
                 </div>
               ))}
             </div>

             <div className="flex items-center justify-between mt-auto">
               <div className="text-center">
                 <span className="text-xs text-gray-500 block">Cote Totale</span>
                 <span className="text-2xl font-bold text-white">{coupon.odds}</span>
               </div>
               <div>
                  <PromoBadge code={['Melbet', 'MegaPari'].includes(coupon.bookmaker) ? 'EXPERT101' : 'LPBN'} size="sm" />
               </div>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};