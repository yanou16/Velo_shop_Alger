import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const db = new Database('veloshop.db');

app.use(cors());
app.use(express.json());

// Initialize database tables
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price INTEGER NOT NULL,
    image TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    colors TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    address TEXT NOT NULL,
    total_amount INTEGER NOT NULL,
    status TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS order_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    color TEXT NOT NULL,
    price INTEGER NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders (id),
    FOREIGN KEY (product_id) REFERENCES products (id)
  );
`);

// Products endpoints
app.get('/api/products', (req, res) => {
  const products = db.prepare('SELECT * FROM products').all();
  res.json(products.map(product => ({
    ...product,
    colors: JSON.parse(product.colors)
  })));
});

app.get('/api/products/:id', (req, res) => {
  const product = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json({
    ...product,
    colors: JSON.parse(product.colors)
  });
});

// Orders endpoints
app.post('/api/orders', (req, res) => {
  const { customerInfo, items } = req.body;
  
  try {
    db.transaction(() => {
      // Create order
      const { lastInsertRowid } = db.prepare(`
        INSERT INTO orders (customer_name, email, phone, address, total_amount, status)
        VALUES (?, ?, ?, ?, ?, ?)
      `).run(
        customerInfo.name,
        customerInfo.email,
        customerInfo.phone,
        customerInfo.address,
        items.reduce((total, item) => total + (item.price * item.quantity), 0),
        'pending'
      );

      // Create order items
      const insertItem = db.prepare(`
        INSERT INTO order_items (order_id, product_id, quantity, color, price)
        VALUES (?, ?, ?, ?, ?)
      `);

      items.forEach(item => {
        insertItem.run(lastInsertRowid, item.id, item.quantity, item.selectedColor, item.price);
      });

      res.json({ orderId: lastInsertRowid });
    })();
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

app.get('/api/orders/:id', (req, res) => {
  const order = db.prepare(`
    SELECT o.*, 
           oi.product_id, oi.quantity, oi.color, oi.price,
           p.name as product_name, p.image as product_image
    FROM orders o
    JOIN order_items oi ON o.id = oi.order_id
    JOIN products p ON oi.product_id = p.id
    WHERE o.id = ?
  `).all(req.params.id);

  if (!order.length) {
    return res.status(404).json({ error: 'Order not found' });
  }

  const orderDetails = {
    id: order[0].id,
    customerName: order[0].customer_name,
    email: order[0].email,
    phone: order[0].phone,
    address: order[0].address,
    totalAmount: order[0].total_amount,
    status: order[0].status,
    createdAt: order[0].created_at,
    items: order.map(item => ({
      productId: item.product_id,
      productName: item.product_name,
      productImage: item.product_image,
      quantity: item.quantity,
      color: item.color,
      price: item.price
    }))
  };

  res.json(orderDetails);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});