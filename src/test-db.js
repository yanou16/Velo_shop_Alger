import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DATABASE_NAME = process.env.DATABASE_NAME || 'veloshop';

async function testConnection() {
    const client = new MongoClient(MONGODB_URI);
    
    try {
        await client.connect();
        console.log('Connexion réussie à MongoDB!');
        
        const db = client.db(DATABASE_NAME);
        const collection = db.collection('test');
        
        // Test d'insertion
        await collection.insertOne({ 
            message: 'Test de connexion réussi!',
            date: new Date()
        });
        console.log('Document inséré avec succès!');
        
        // Test de lecture
        const result = await collection.findOne({ 
            message: 'Test de connexion réussi!'
        });
        console.log('Document lu:', result);
        
    } catch (error) {
        console.error('Erreur:', error);
    } finally {
        await client.close();
        console.log('Connexion fermée');
    }
}

testConnection();
