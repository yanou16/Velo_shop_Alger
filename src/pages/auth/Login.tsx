import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      // Simulation de connexion pour démonstration
      if (email === 'admin@veloshop.com' && password === 'admin123') {
        await login({
          id: '1', // ID administrateur
          email,
          firstName: 'Admin',
          lastName: 'VéloShop',
          phoneNumber: '0555123456',
          address: {
            street: '123 Rue Didouche Mourad',
            city: 'Alger',
            wilaya: 'Alger',
            postalCode: '16000'
          },
          orderHistory: [],
          wishlist: [],
          createdAt: new Date()
        });
        navigate('/admin');
      } else if (email === 'user@veloshop.com' && password === 'user123') {
        await login({
          id: '2',
          email,
          firstName: 'User',
          lastName: 'Test',
          phoneNumber: '0555789012',
          address: {
            street: '456 Boulevard Mohamed V',
            city: 'Oran',
            wilaya: 'Oran',
            postalCode: '31000'
          },
          orderHistory: [],
          wishlist: [],
          createdAt: new Date()
        });
        navigate('/profile');
      } else {
        throw new Error('Email ou mot de passe incorrect');
      }
    } catch (err) {
      setError('Email ou mot de passe incorrect');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Connexion à votre compte
        </h2>
        
        {/* Information de démonstration */}
        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-md p-4">
          <h3 className="text-sm font-medium text-blue-800 mb-2">Comptes de démonstration :</h3>
          <div className="text-sm text-blue-700">
            <p className="mb-2">
              <strong>Admin :</strong><br />
              Email: admin@veloshop.com<br />
              Mot de passe: admin123
            </p>
            <p>
              <strong>Utilisateur :</strong><br />
              Email: user@veloshop.com<br />
              Mot de passe: user123
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 rounded-md p-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Adresse email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="login-input"
                  placeholder="Entrez votre email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-input"
                  placeholder="Entrez votre mot de passe"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
