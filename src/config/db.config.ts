import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DATABASE_NAME = process.env.DATABASE_NAME || 'myDatabase';

let client: MongoClient | null = null;

export async function connectToDatabase() {
    try {
        if (!client) {
            client = new MongoClient(MONGODB_URI);
            await client.connect();
            console.log('Successfully connected to MongoDB.');
        }
        return client.db(DATABASE_NAME);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

export async function closeDatabaseConnection() {
    try {
        if (client) {
            await client.close();
            client = null;
            console.log('Database connection closed.');
        }
    } catch (error) {
        console.error('Error closing database connection:', error);
        throw error;
    }
}
