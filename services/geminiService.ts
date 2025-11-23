import { GoogleGenAI, Type } from "@google/genai";
import { Prediction } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateDailyPrediction = async (): Promise<Prediction> => {
  try {
    const model = "gemini-2.5-flash";
    const prompt = `
      Agis comme un expert mondial en paris sportifs (football).
      Génère une analyse courte mais percutante pour un grand match de football fictif ou réel à venir (Champions League, Premier League, La Liga, etc.).
      
      L'analyse doit être professionnelle, utiliser le vocabulaire des parieurs (value bet, over/under, clean sheet).
      Mentionne le Code Promo "LPBN" subtilement dans l'analyse comme étant la clé pour profiter des meilleures cotes.
      
      Retourne UNIQUEMENT un objet JSON valide suivant ce schéma.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            match: { type: Type.STRING, description: "Équipes, ex: Real Madrid vs Man City" },
            league: { type: Type.STRING, description: "Compétition" },
            analysis: { type: Type.STRING, description: "Analyse technique de 2-3 phrases." },
            prediction: { type: Type.STRING, description: "Le pari conseillé, ex: Victoire Real & +2.5 buts" },
            odds: { type: Type.STRING, description: "Cote estimée, ex: 2.45" },
            confidence: { type: Type.NUMBER, description: "Pourcentage de confiance entre 70 et 99" }
          },
          required: ["match", "league", "analysis", "prediction", "odds", "confidence"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as Prediction;
    }
    
    throw new Error("Pas de réponse texte de l'IA");

  } catch (error) {
    console.error("Erreur Gemini:", error);
    // Fallback data in case of API error or quota limits
    return {
      match: "PSG vs Barcelone",
      league: "Champions League",
      analysis: "Le PSG est en forme olympique à domicile. Avec l'attaque de feu actuelle et le code promo LPBN pour booster vos dépôts, c'est le moment de viser haut.",
      prediction: "PSG gagne & Mbappé buteur",
      odds: "2.80",
      confidence: 85
    };
  }
};