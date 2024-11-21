const API_URL = 'http://localhost:3000/api';

export async function getProducts() {
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
}

export async function getProduct(id: number) {
  const response = await fetch(`${API_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  return response.json();
}

export async function createOrder(orderData: {
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  items: Array<{
    id: number;
    quantity: number;
    selectedColor: string;
    price: number;
  }>;
}) {
  const response = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  });

  if (!response.ok) {
    throw new Error('Failed to create order');
  }
  return response.json();
}

export async function getOrder(id: number) {
  const response = await fetch(`${API_URL}/orders/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch order');
  }
  return response.json();
}