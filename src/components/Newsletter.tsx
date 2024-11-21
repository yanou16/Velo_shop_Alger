import React, { useState } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simuler un appel API
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    }, 1000);
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 rounded-xl shadow-md">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Recevez nos dernières offres !
        </h2>
        <p className="text-gray-700 mb-8">
          Inscrivez-vous à notre newsletter pour recevoir nos meilleures offres et nouveautés en avant-première.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <EnvelopeIcon className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg 
                          text-gray-900 placeholder-gray-500
                          focus:ring-2 focus:ring-indigo-600 focus:border-transparent
                          bg-white shadow-sm"
                placeholder="Entrez votre email"
                disabled={status === 'loading'}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`bg-gradient-to-r from-indigo-600 to-indigo-700 
                       hover:from-indigo-700 hover:to-indigo-800
                       text-white font-medium py-3 px-6 rounded-lg
                       transition-all duration-300 shadow-md hover:shadow-lg
                       ${status === 'loading' ? 'bg-white/20 text-white cursor-wait' : ''}`}
            >
              {status === 'loading' ? (
                <span className="flex items-center gap-3">
                  <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Inscription...
                </span>
              ) : status === 'success' ? 'Inscrit !' : "S'inscrire"}
            </button>
          </div>
          {status === 'success' && (
            <p className="mt-3 text-sm text-green-600">
              🎉 Merci de votre inscription ! Vous recevrez bientôt nos offres.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-3 text-sm text-red-600">
              ⚠️ Veuillez entrer une adresse email valide.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
