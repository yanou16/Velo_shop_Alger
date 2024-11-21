import { createUser, loginUser, searchUsers } from '../src/data/users.js';
import dotenv from 'dotenv';

dotenv.config();

async function testUsers() {
    try {
        // Créer un nouvel utilisateur
        console.log('Création d\'un nouvel utilisateur...');
        const newUser = await createUser({
            email: 'test@example.com',
            password: 'password123',
            firstName: 'John',
            lastName: 'Doe',
            role: 'user',
            phone: '0123456789'
        });
        console.log('Utilisateur créé:', newUser);

        // Tester la connexion
        console.log('\nTest de connexion...');
        const loggedInUser = await loginUser('test@example.com', 'password123');
        console.log('Connexion réussie:', loggedInUser);

        // Rechercher des utilisateurs
        console.log('\nRecherche d\'utilisateurs...');
        const searchResults = await searchUsers('John');
        console.log('Résultats de la recherche:', searchResults);

    } catch (error) {
        console.error('Erreur:', error.message);
    }
}

testUsers();
