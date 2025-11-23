import React, { useState } from 'react';
import { generateDailyPrediction } from '../services/geminiService';
import { Prediction, LoadingState } from '../types';
import { Bot, RefreshCw, ChevronRight } from 'lucide-react';

export const AiPrediction: React.FC = () => {
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  const handleGenerate = async () => {
    setStatus(LoadingState.LOADING);
    try {
      const result = await generateDailyPrediction();
      setPrediction(result);
      setStatus(LoadingState.SUCCESS);
    } catch (e) {
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <section id="predictions" className="py-20 px-4 bg-betting-surface/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2 text-betting-accent">
            <Bot size={24} />
            <span className="font-bold tracking-wide uppercase">IA Expert Analysis</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Générateur de Pronostic Intelligent</h2>
          <p className="text-gray-400">
            Utilisez notre IA avancée pour analyser les matchs du jour. N'oubliez pas d'utiliser le code <strong className="text-white">LPBN</strong> pour placer ce pari.
          </p>
        </div>

        <div className="glass-panel rounded-2xl p-8 border border-white/5 relative overflow-hidden min-h-[300px] flex flex-col items-center justify-center">
          
          {status === LoadingState.IDLE && (
             <div className="text-center">
               <p className="mb-6 text-xl">Prêt à battre les bookmakers ?</p>
               <button 
                onClick={handleGenerate}
                className="bg-betting-accent hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
               >
                 <Bot size={20} />
                 Générer le Pronostic du Jour
               </button>
             </div>
          )}

          {status === LoadingState.LOADING && (
            <div className="flex flex-col items-center">
              <RefreshCw className="animate-spin text-betting-accent mb-4" size={48} />
              <p className="animate-pulse text-lg">Analyse des statistiques en cours...</p>
              <p className="text-sm text-gray-500 mt-2">Consultation de l'historique des matchs...</p>
            </div>
          )}

          {status === LoadingState.SUCCESS && prediction && (
            <div className="w-full text-left animate-fade-in">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-gray-700 pb-4">
                <div>
                  <span className="text-xs font-bold text-betting-gold uppercase tracking-wider">{prediction.league}</span>
                  <h3 className="text-2xl md:text-3xl font-bold mt-1">{prediction.match}</h3>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
                  <span className="text-gray-400 text-sm">Confiance IA:</span>
                  <span className="text-betting-accent font-bold text-lg">{prediction.confidence}%</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h4 className="text-lg font-bold mb-2 text-gray-200">L'Analyse de l'Expert</h4>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {prediction.analysis}
                  </p>
                  <div className="bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm text-blue-200">
                      <strong>Astuce Pro :</strong> Utilisez le code promo <span className="text-white font-bold">LPBN</span> lors de votre inscription pour sécuriser ce pari avec votre bonus de bienvenue.
                    </p>
                  </div>
                </div>

                <div className="bg-betting-dark p-6 rounded-xl border border-gray-700 flex flex-col justify-center items-center text-center">
                  <span className="text-gray-400 text-sm mb-2">Pari Conseillé</span>
                  <div className="text-xl font-bold text-white mb-2">{prediction.prediction}</div>
                  <div className="text-4xl font-extrabold text-betting-gold mb-4">{prediction.odds}</div>
                  <button 
                    onClick={handleGenerate}
                    className="text-sm text-gray-500 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <RefreshCw size={14} /> Générer un autre
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};