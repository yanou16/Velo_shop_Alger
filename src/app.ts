import express from 'express';
import session from 'express-session';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import userRoutes from './routes/user.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware
app.use(cors({
    origin: '*', // Permettre toutes les origines pour le test
    credentials: true
}));

// Logs pour le debugging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

app.use(express.json());
app.use(express.static('public')); 
app.use(session({
    secret: process.env.SESSION_SECRET || 'votre_secret_ici',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000 // 24 heures
    }
}));

// Route de test
app.get('/test', (req, res) => {
    res.json({ message: 'Le serveur fonctionne correctement!' });
});

// Routes
app.use('/api/users', userRoutes);

// Port
const PORT = process.env.PORT || 3000; // Changement du port à 3000
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
    console.log(`Test l'API à: http://localhost:${PORT}/test`);
    console.log(`Page de test à: http://localhost:${PORT}/test-api.html`);
});
