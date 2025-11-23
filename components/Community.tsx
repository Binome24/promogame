import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export const Community: React.FC = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-600/10 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-900/40 to-betting-dark border border-green-500/30 rounded-3xl p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Rejoignez la Communauté VIP</h2>
        <p className="text-gray-300 mb-10 max-w-xl mx-auto text-lg">
          Recevez nos coupons en direct, discutez avec d'autres parieurs et contactez l'admin pour un accès premium.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a 
            href="https://chat.whatsapp.com/FmkoxSkjm8iKFwHK5Pow1b?mode=wwt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold py-4 px-8 rounded-full hover:bg-[#20bd5a] transition-transform hover:scale-105 shadow-lg shadow-green-900/50"
          >
            <MessageCircle size={24} />
            Rejoindre le Groupe WhatsApp
          </a>

          <a 
            href="https://wa.me/237693027898" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition-transform hover:scale-105 border border-gray-600"
          >
            <Phone size={24} />
            Contacter l'Admin (+237 693 027 898)
          </a>
        </div>
      </div>
    </section>
  );
};