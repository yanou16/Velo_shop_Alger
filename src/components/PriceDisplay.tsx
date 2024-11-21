import React from 'react';

interface PriceDisplayProps {
  price: number;
  size?: 'sm' | 'md' | 'lg';
  showCurrency?: boolean;
  oldPrice?: number;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ 
  price, 
  size = 'md', 
  showCurrency = true,
  oldPrice 
}) => {
  const formatPrice = (amount: number) => {
    return amount.toLocaleString('fr-DZ', {
      style: showCurrency ? 'currency' : 'decimal',
      currency: 'DZD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  };

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl'
  };

  return (
    <div className="flex items-baseline gap-2">
      <span className={`font-semibold ${sizeClasses[size]} text-gray-900`}>
        {formatPrice(price)}
      </span>
      {oldPrice && (
        <span className={`${sizeClasses[size]} text-gray-500 line-through`}>
          {formatPrice(oldPrice)}
        </span>
      )}
    </div>
  );
};

export default PriceDisplay;
