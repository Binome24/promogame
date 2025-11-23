import React from 'react';
import { PromoBadge } from './PromoBadge';
import { TrendingUp, PieChart, Goal, BookOpen } from 'lucide-react';

export const BlogSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-betting-dark" id="conseils">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-betting-accent font-bold tracking-widest uppercase text-sm">Guide Expert 2024</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">Maîtrisez votre Stratégie Paris Sportif</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Bienvenue dans le guide ultime pour transformer vos paris en investissements. Découvrez comment construire un <strong>coupon paris foot</strong> rentable sur le long terme.
          </p>
        </div>

        {/* Article Container with SEO Semantic Tags */}
        <article className="glass-panel p-8 md:p-12 rounded-2xl border-t-4 border-betting-accent">
          
          <header className="mb-10 border-b border-gray-700 pb-8">
            <h1 className="text-3xl font-bold text-white mb-4">3 Piliers Fondamentaux pour Gagner aux Paris Sportifs</h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1"><BookOpen size={16}/> Temps de lecture: 5 min</span>
              <span>•</span>
              <span className="text-betting-accent">Mis à jour récemment</span>
            </div>
          </header>

          <div className="space-y-12">
            
            {/* Section 1: Bankroll Management */}
            <section>
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400 mt-1">
                  <PieChart size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">1. La Gestion de Bankroll : Votre Assurance Vie</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    La première erreur des débutants est de miser selon leur "feeling" sans structure. Une <strong>stratégie paris sportif</strong> viable commence par une gestion rigoureuse du capital.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300 mb-4 marker:text-betting-accent">
                    <li><strong>Mise Fixe (Flat Betting) :</strong> Misez toujours le même pourcentage (ex: 1%) de votre capital, quelle que soit votre confiance.</li>
                    <li><strong>Mise Variable :</strong> Ajustez entre 0.5% et 2% selon la fiabilité du <em>coupon paris foot</em>. Ne dépassez jamais 5% sur un seul pari.</li>
                  </ul>
                  <div className="bg-betting-surface p-4 rounded-lg border-l-4 border-betting-gold">
                    <p className="text-sm text-gray-300 italic">
                      "Un bon parieur n'est pas celui qui gagne gros une fois, mais celui qui ne fait pas banqueroute après une mauvaise série."
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Odds Analysis */}
            <section>
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-betting-gold/20 p-3 rounded-lg text-betting-gold mt-1">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Analyse des Cotes et Chasse à la "Value"</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Pour réussir vos <strong>conseils paris</strong>, vous devez comprendre que la cote représente une probabilité implicite. Si vous estimez que le PSG a 60% de chance de gagner (cote équivalente 1.66) mais que le bookmaker offre une cote de 1.90, vous êtes face à une <strong>Value Bet</strong>.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    N'oubliez pas d'utiliser le code promo <span className="text-white font-bold bg-betting-accent/20 px-2 rounded">LPBN</span> à l'inscription. Il vous permet souvent d'accéder à des cotes boostées qui transforment un pari standard en Value Bet mathématique.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Football Tips */}
            <section>
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-emerald-500/20 p-3 rounded-lg text-emerald-400 mt-1">
                  <Goal size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Réussir son Coupon Paris Foot</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Le football est le sport roi, mais aussi le plus piégeux. Voici nos conseils experts pour vos tickets :
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h3 className="font-bold text-white mb-2">Évitez les grands combinés</h3>
                      <p className="text-sm text-gray-400">Multiplier 10 matchs dans un coupon paris foot est une loterie. Limitez-vous à 2 ou 3 sélections (Double ou Treble) pour sécuriser vos gains.</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h3 className="font-bold text-white mb-2">Spécialisez-vous</h3>
                      <p className="text-sm text-gray-400">Ne pariez pas sur la 2ème division polonaise si vous ne la suivez pas. Devenez expert d'une ligue (ex: Ligue 1 ou Premier League).</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>

          <footer className="mt-12 pt-8 border-t border-gray-700 text-center">
            <p className="text-lg text-white mb-4">Prêt à appliquer ces stratégies ?</p>
            <div className="inline-flex flex-col items-center p-6 bg-betting-accent/10 rounded-xl border border-betting-accent/30">
              <span className="text-sm text-betting-accent font-bold uppercase mb-2">Code Bonus Exclusif</span>
              <div className="flex items-center gap-4">
                 <PromoBadge size="md" />
              </div>
              <p className="text-xs text-gray-400 mt-3">Copiez le code LPBN pour activer vos avantages bookmaker.</p>
            </div>
          </footer>

        </article>

        {/* SEO Tag Cloud for Footer of Article */}
        <div className="mt-12">
          <h4 className="sr-only">Sujets associés</h4>
          <div className="flex flex-wrap justify-center gap-2 opacity-70">
            {['Conseils Paris Sportifs', 'Bankroll Management', 'Stratégie Value Bet', 'Coupon Foot du Jour', 'Pronostic Fiable', 'Bonus Bookmaker', 'Paris Long Terme'].map((tag, i) => (
              <span key={i} className="text-xs bg-black text-gray-500 px-3 py-1 rounded-full border border-gray-800">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};