import { MongoClient, ObjectId } from 'mongodb';
import bcrypt from 'bcrypt';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DATABASE_NAME = process.env.DATABASE_NAME || 'veloshop';

// Type pour l'utilisateur
export interface User {
    _id?: ObjectId;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: 'user' | 'admin';
    createdAt: Date;
    address?: string;
    phone?: string;
}

let client: MongoClient | null = null;

async function getCollection() {
    if (!client) {
        client = new MongoClient(MONGODB_URI);
        await client.connect();
    }
    return client.db(DATABASE_NAME).collection('users');
}

// Créer un nouvel utilisateur
export async function createUser(userData: Omit<User, '_id' | 'createdAt'>) {
    const collection = await getCollection();
    
    // Vérifier si l'email existe déjà
    const existingUser = await collection.findOne({ email: userData.email });
    if (existingUser) {
        throw new Error('Un utilisateur avec cet email existe déjà');
    }
    
    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    
    // Créer le nouvel utilisateur
    const newUser = {
        ...userData,
        password: hashedPassword,
        createdAt: new Date(),
        role: userData.role || 'user'
    };
    
    const result = await collection.insertOne(newUser);
    return { ...newUser, _id: result.insertedId };
}

// Connecter un utilisateur
export async function loginUser(email: string, password: string) {
    const collection = await getCollection();
    
    const user = await collection.findOne({ email });
    if (!user) {
        throw new Error('Email ou mot de passe incorrect');
    }
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Email ou mot de passe incorrect');
    }
    
    // Ne pas renvoyer le mot de passe
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
}

// Récupérer un utilisateur par ID
export async function getUserById(id: string) {
    const collection = await getCollection();
    const user = await collection.findOne({ _id: new ObjectId(id) });
    
    if (!user) {
        throw new Error('Utilisateur non trouvé');
    }
    
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
}

// Mettre à jour un utilisateur
export async function updateUser(id: string, updateData: Partial<User>) {
    const collection = await getCollection();
    
    // Si le mot de passe est mis à jour, le hasher
    if (updateData.password) {
        updateData.password = await bcrypt.hash(updateData.password, 10);
    }
    
    const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updateData }
    );
    
    if (result.matchedCount === 0) {
        throw new Error('Utilisateur non trouvé');
    }
    
    return result.modifiedCount > 0;
}

// Supprimer un utilisateur
export async function deleteUser(id: string) {
    const collection = await getCollection();
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    
    if (result.deletedCount === 0) {
        throw new Error('Utilisateur non trouvé');
    }
    
    return true;
}

// Rechercher des utilisateurs
export async function searchUsers(query: string) {
    const collection = await getCollection();
    const users = await collection.find({
        $or: [
            { email: { $regex: query, $options: 'i' } },
            { firstName: { $regex: query, $options: 'i' } },
            { lastName: { $regex: query, $options: 'i' } }
        ]
    }).toArray();
    
    return users.map(user => {
        const { password: _, ...userWithoutPassword } = user;
        return userWithoutPassword;
    });
}

// Fermer la connexion
export async function closeConnection() {
    if (client) {
        await client.close();
        client = null;
    }
}
