import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from './contexts/AuthContext'
import { CartProvider } from './context/CartContext'

// Ajout des classes Tailwind directement sur l'élément racine
document.documentElement.className = 'h-full bg-gradient-to-br from-indigo-50 to-blue-50'
document.body.className = 'h-full'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
)
