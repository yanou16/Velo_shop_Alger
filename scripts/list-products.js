import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DATABASE_NAME = process.env.DATABASE_NAME || 'veloshop';

async function listProducts() {
    const client = new MongoClient(MONGODB_URI);
    
    try {
        await client.connect();
        console.log('Connecté à MongoDB');
        
        const db = client.db(DATABASE_NAME);
        const collection = db.collection('products');
        
        const products = await collection.find({}).toArray();
        console.log('Liste des produits :');
        products.forEach(product => {
            console.log(`- ${product.name} (${product.price} DA)`);
        });
        
    } catch (error) {
        console.error('Erreur:', error);
    } finally {
        await client.close();
        console.log('Connexion fermée');
    }
}

// Lister les produits
listProducts();
