import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571333250630-f0230c320b6d?auto=format&fit=crop&q=80&w=1600"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 text-white">
        <h1 className="text-5xl font-bold mb-4">Découvrez Votre Vélo Idéal</h1>
        <p className="text-xl mb-8 max-w-2xl">
          Explorez notre sélection premium de vélos. De la ville aux sentiers de montagne,
          trouvez votre prochaine aventure ici.
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg flex items-center space-x-2 hover:bg-indigo-700 transition-colors">
          <span>Acheter Maintenant</span>
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}