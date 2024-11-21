import React from 'react';
import { useCart } from '../context/CartContext';
import { TrashIcon } from '@heroicons/react/24/outline';
import PriceDisplay from '../components/PriceDisplay';
import { motion } from 'framer-motion';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Mon Panier</h1>
        <div className="text-center py-12">
          <p className="text-gray-500">Votre panier est vide</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Mon Panier</h1>
      
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {items.map((item) => (
            <motion.li
              key={`${item.product.id}-${item.selectedColor}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-6 flex items-center justify-between"
            >
              <div className="flex items-center space-x-6">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    {item.product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Couleur: {item.selectedColor}
                  </p>
                  <PriceDisplay price={item.product.price} size="md" />
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center border border-gray-200 rounded-lg">
                  <button
                    onClick={() => updateQuantity(item.product.id, Math.max(0, item.quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-l-lg transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-gray-900 font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-r-lg transition-colors"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </motion.li>
          ))}
        </ul>

        <div className="bg-gray-50 p-6 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-gray-900">Total</span>
            <PriceDisplay price={totalPrice} size="lg" />
          </div>
          
          <button className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-3 px-4 rounded-lg font-medium hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 shadow-md hover:shadow-lg">
            Procéder au paiement
          </button>
        </div>
      </div>
    </div>
  );
}
