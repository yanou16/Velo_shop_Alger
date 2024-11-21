export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  category: string;
  subcategory: string;
  colors: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
}

export interface DeliveryInfo {
  fullName: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  notes?: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
