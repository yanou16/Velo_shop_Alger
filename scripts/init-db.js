import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DATABASE_NAME = process.env.DATABASE_NAME || 'veloshop';

const products = [
    {
        name: "VTT Atlas Pro",
        price: 8990000,
        oldPrice: 9990000,
        image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80&w=1600",
        description: "Vélo tout terrain parfait pour les pistes de l'Atlas, équipé de suspensions haute performance et freins à disque hydrauliques.",
        category: "BIKES",
        subcategory: "VTT",
        colors: ["black", "red", "blue"]
    },
    {
        name: "Vélo Route Sahara Sport",
        price: 6590000,
        oldPrice: 7590000,
        image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=1600",
        description: "Vélo de route performant avec cadre en aluminium léger et transmission Shimano 21 vitesses.",
        category: "BIKES",
        subcategory: "Route",
        colors: ["red", "white", "black"]
    }
    // Ajoutez d'autres produits ici si nécessaire
];

async function initializeDatabase() {
    const client = new MongoClient(MONGODB_URI);
    
    try {
        await client.connect();
        console.log('Connecté à MongoDB');
        
        const db = client.db(DATABASE_NAME);
        const collection = db.collection('products');
        
        // Vérifier si la collection est vide
        const count = await collection.countDocuments();
        if (count === 0) {
            // Insérer les produits
            const result = await collection.insertMany(products);
            console.log(`${result.insertedCount} produits ont été insérés dans la base de données`);
        } else {
            console.log('La base de données contient déjà des produits');
        }
        
    } catch (error) {
        console.error('Erreur:', error);
    } finally {
        await client.close();
        console.log('Connexion fermée');
    }
}

// Exécuter l'initialisation
initializeDatabase();
