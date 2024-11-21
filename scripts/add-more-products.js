import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DATABASE_NAME = process.env.DATABASE_NAME || 'veloshop';

const newProducts = [
    {
        name: "City Rider Alger",
        price: 4590000,
        image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80&w=1600",
        description: "Vélo urbain confortable avec porte-bagages et éclairage LED intégré.",
        category: "BIKES",
        subcategory: "Ville",
        colors: ["blue", "black", "white"]
    },
    {
        name: "VTT Électrique Pro",
        price: 12990000,
        image: "https://images.unsplash.com/photo-1559348349-86f1f65817fe?auto=format&fit=crop&q=80&w=1600",
        description: "VTT électrique puissant avec moteur Bosch et batterie longue durée.",
        category: "ELECTRIC_BIKES",
        subcategory: "VTT Électrique",
        colors: ["green", "black"]
    },
    {
        name: "Casque Route Pro",
        price: 1290000,
        image: "https://images.unsplash.com/photo-1557803175-2d5c5c9c3fd9?auto=format&fit=crop&q=80&w=1600",
        description: "Casque aérodynamique léger pour cyclisme sur route.",
        category: "HELMETS",
        subcategory: "Route",
        colors: ["black", "white", "red"]
    },
    {
        name: "Éclairage LED Pro",
        price: 299000,
        image: "https://images.unsplash.com/photo-1592184277967-c35b5d01c05c?auto=format&fit=crop&q=80&w=1600",
        description: "Kit d'éclairage LED rechargeable USB avant et arrière.",
        category: "ACCESSORIES",
        subcategory: "Éclairage",
        colors: ["black"]
    },
    {
        name: "BMX Freestyle Pro",
        price: 5990000,
        image: "https://images.unsplash.com/photo-1583108607572-56a954424d2f?auto=format&fit=crop&q=80&w=1600",
        description: "BMX professionnel pour freestyle et figures acrobatiques.",
        category: "BIKES",
        subcategory: "BMX",
        colors: ["black", "blue", "red"]
    }
];

async function addMoreProducts() {
    const client = new MongoClient(MONGODB_URI);
    
    try {
        await client.connect();
        console.log('Connecté à MongoDB');
        
        const db = client.db(DATABASE_NAME);
        const collection = db.collection('products');
        
        // Insérer les nouveaux produits
        const result = await collection.insertMany(newProducts);
        console.log(`${result.insertedCount} nouveaux produits ont été ajoutés à la base de données`);
        
        // Afficher le nombre total de produits
        const totalCount = await collection.countDocuments();
        console.log(`Nombre total de produits dans la base de données : ${totalCount}`);
        
    } catch (error) {
        console.error('Erreur:', error);
    } finally {
        await client.close();
        console.log('Connexion fermée');
    }
}

// Exécuter l'ajout de produits
addMoreProducts();
