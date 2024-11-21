import { initializeDatabase } from '../data/products.js';

console.log('Initialisation de la base de données...');
initializeDatabase()
    .then(() => {
        console.log('Base de données initialisée avec succès!');
        process.exit(0);
    })
    .catch(error => {
        console.error('Erreur lors de l\'initialisation:', error);
        process.exit(1);
    });
