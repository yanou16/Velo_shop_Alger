import React, { useState } from 'react';
import { X, Minus, Plus, ShoppingBag, Truck, CreditCard, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { colorOptions } from '../data/colors';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number, selectedColor: string) => void;
  onRemoveItem: (id: string, selectedColor: string) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) {
  const [step, setStep] = useState<'cart' | 'delivery' | 'payment'>('cart');
  
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = items.length > 0 ? 1000 : 0; // 1000 DA frais de livraison
  const total = subtotal + shipping;

  const formatPrice = (price: number) => {
    return (price).toLocaleString('fr-DZ', {
      style: 'currency',
      currency: 'DZD'
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* En-tête */}
          <div className="flex items-center justify-between p-4 border-b">
            <div>
              <h2 className="text-xl font-bold">Votre Panier</h2>
              <p className="text-sm text-gray-500">{items.length} article(s)</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Contenu principal */}
          <div className="flex-1 overflow-y-auto">
            {step === 'cart' && (
              <div className="p-4">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-gray-500 py-12">
                    <ShoppingBag className="h-16 w-16 mb-4" />
                    <p>Votre panier est vide</p>
                  </div>
                ) : (
                  <>
                    {/* Cart items list */}
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div 
                          key={`${item.id}-${item.selectedColor}`} 
                          className="flex space-x-4 bg-white border rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-24 w-24 object-cover rounded-md"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h3 className="font-semibold">{item.name}</h3>
                              <button 
                                onClick={() => onRemoveItem(item.id, item.selectedColor)}
                                className="text-gray-400 hover:text-red-500 transition-colors"
                              >
                                <X className="h-5 w-5" />
                              </button>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-sm text-gray-600">Couleur:</span>
                              <div 
                                className={`w-4 h-4 rounded-full ${colorOptions[item.selectedColor]} border`}
                                title={item.selectedColor}
                              />
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1), item.selectedColor)}
                                  className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <button
                                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1, item.selectedColor)}
                                  className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                              <span className="font-semibold">{formatPrice(item.price * item.quantity)}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => setStep('delivery')}
                      className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      Continuer vers la livraison <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </>
                )}
              </div>
            )}

            {step === 'delivery' && (
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-4">Information de livraison</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nom complet</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Adresse</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Wilaya</label>
                    <select
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    >
                      <option value="">Sélectionnez une wilaya</option>
                      <option value="alger">Alger</option>
                      <option value="oran">Oran</option>
                      <option value="constantine">Constantine</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Téléphone</label>
                    <input
                      type="tel"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep('cart')}
                      className="flex-1 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Retour
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep('payment')}
                      className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Continuer
                    </button>
                  </div>
                </form>
              </div>
            )}

            {step === 'payment' && (
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-4">Mode de paiement</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 cursor-pointer hover:border-blue-500">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="payment"
                        value="cash"
                        className="h-4 w-4 text-blue-600"
                        defaultChecked
                      />
                      <label className="ml-3 block text-sm font-medium text-gray-700">
                        Paiement à la livraison
                      </label>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4 cursor-pointer hover:border-blue-500">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="payment"
                        value="ccp"
                        className="h-4 w-4 text-blue-600"
                      />
                      <label className="ml-3 block text-sm font-medium text-gray-700">
                        CCP
                      </label>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold mb-2">Récapitulatif de la commande</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Sous-total</span>
                        <span>{formatPrice(subtotal)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Frais de livraison</span>
                        <span>{formatPrice(shipping)}</span>
                      </div>
                      <div className="flex justify-between font-semibold pt-2 border-t">
                        <span>Total</span>
                        <span>{formatPrice(total)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep('delivery')}
                      className="flex-1 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Retour
                    </button>
                    <button
                      onClick={() => {
                        // Handle order submission
                        alert('Commande confirmée! Nous vous contacterons bientôt.');
                        onClose();
                      }}
                      className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Confirmer la commande
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Résumé et boutons */}
          <div className="border-t p-4 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Sous-total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Frais de livraison</span>
                <span>{formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>

            {items.length > 0 && (
              <button
                onClick={() => {
                  if (step === 'cart') setStep('delivery');
                  else if (step === 'delivery') setStep('payment');
                  else {
                    // Traitement de la commande
                    alert('Commande confirmée !');
                    onClose();
                  }
                }}
                className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors"
              >
                <span>{step === 'cart' ? 'Passer à la livraison' : step === 'delivery' ? 'Passer au paiement' : 'Confirmer la commande'}</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}