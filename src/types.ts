export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'bikes' | 'electric-bikes' | 'accessories' | 'helmets';
  subcategory: string;
  image: string;
  features: string[];
  inStock: boolean;
  brand: string;
  rating: number;
  reviews: number;
  colors: string[];
  oldPrice?: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
}

export type ColorOption = {
  name: string;
  class: string;
  value: string;
};