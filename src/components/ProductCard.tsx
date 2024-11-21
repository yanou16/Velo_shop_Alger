import React, { useState } from 'react';
import { Product } from '../types';
import { ShoppingCart, Check, ImageOff } from 'lucide-react';
import ColorPicker from './ColorPicker';
import { useCart } from '../context/CartContext';
import PriceDisplay from './PriceDisplay';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isAdding, setIsAdding] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, selectedColor);
    setTimeout(() => setIsAdding(false), 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          </div>
        )}
        {imageError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
            <ImageOff className="h-12 w-12 mb-2" />
            <span className="text-sm">Image non disponible</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setImageLoading(false)}
            onError={() => {
              setImageError(true);
              setImageLoading(false);
            }}
          />
        )}
        {product.oldPrice && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
            -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {product.subcategory}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="mb-4">
          <PriceDisplay 
            price={product.price} 
            size="lg"
            oldPrice={product.oldPrice}
          />
        </div>

        <ColorPicker
          colors={product.colors}
          selectedColor={selectedColor}
          onColorSelect={setSelectedColor}
        />

        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`
              px-4 py-2 rounded-lg flex items-center gap-2
              ${isAdding ? 'bg-green-500' : 'bg-indigo-600'}
              text-white transition-colors
              hover:${isAdding ? 'bg-green-600' : 'bg-indigo-700'}
              disabled:opacity-50
            `}
          >
            {isAdding ? (
              <>
                <Check className="h-5 w-5" />
                <span>Ajouté!</span>
              </>
            ) : (
              <>
                <ShoppingCart className="h-5 w-5" />
                <span>Ajouter</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}