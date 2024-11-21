export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  address?: {
    street: string;
    city: string;
    wilaya: string;
    postalCode: string;
  };
  orderHistory: Order[];
  wishlist: string[]; // IDs des produits
  createdAt: Date;
}

export interface Order {
  id: string;
  userId: string;
  products: OrderProduct[];
  totalAmount: number;
  status: OrderStatus;
  shippingAddress: {
    street: string;
    city: string;
    wilaya: string;
    postalCode: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderProduct {
  productId: string;
  quantity: number;
  price: number;
  color: string;
}

export type OrderStatus = 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
  addToWishlist: (productId: string) => Promise<void>;
  removeFromWishlist: (productId: string) => Promise<void>;
}

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
}
