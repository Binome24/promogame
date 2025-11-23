import React from 'react';
import { Target, Wallet, Smartphone, Globe } from 'lucide-react';

const features = [
  {
    title: "Cotes VIP Europe & Asie",
    description: "Accédez aux marchés asiatiques (Asian Handicap) et européens avec les meilleures cotes du marché mondial grâce au code LPBN.",
    icon: <Target className="text-betting-accent" size={32} />
  },
  {
    title: "Bonus High Roller",
    description: "Code optimisé pour les gros parieurs. Bonus débloqué en Euros (€), Dollars ($) ou devises locales (INR, JPY, XAF) jusqu'à 130%.",
    icon: <Wallet className="text-betting-gold" size={32} />
  },
  {
    title: "Applications Mobiles",
    description: "Compatible avec les apps internationales (iOS/Android). Pariez depuis Londres, Tokyo, ou Douala avec la même efficacité.",
    icon: <Smartphone className="text-blue-400" size={32} />
  },
  {
    title: "Couverture Mondiale",
    description: "Valide dans +50 pays. Idéal pour les parieurs résidant en Europe (hors régulation stricte) et en Asie du Sud-Est.",
    icon: <Globe className="text-purple-400" size={32} />
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Un Code Unique pour <span className="text-betting-accent">le Monde Entier</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Que vous soyez à Paris, Bangkok ou Yaoundé, le code <span className="text-white font-bold">LPBN</span> est votre passeport pour l'élite du pari sportif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <article key={idx} className="bg-betting-surface p-6 rounded-2xl border border-gray-800 hover:border-betting-accent/50 transition-colors group">
              <div className="mb-4 bg-gray-900 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};