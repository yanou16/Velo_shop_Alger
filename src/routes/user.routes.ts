import express from 'express';
import { createUser, loginUser, getUserById, updateUser, deleteUser, searchUsers } from '../data/users.js';

const router = express.Router();

// Middleware pour vérifier si l'utilisateur est connecté
const requireAuth = (req: any, res: any, next: any) => {
    if (!req.session.userId) {
        return res.status(401).json({ error: 'Vous devez être connecté' });
    }
    next();
};

// Middleware pour vérifier si l'utilisateur est admin
const requireAdmin = async (req: any, res: any, next: any) => {
    if (!req.session.userId) {
        return res.status(401).json({ error: 'Vous devez être connecté' });
    }
    try {
        const user = await getUserById(req.session.userId);
        if (user.role !== 'admin') {
            return res.status(403).json({ error: 'Accès refusé' });
        }
        next();
    } catch (error) {
        console.error('Erreur dans requireAdmin:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};

// Inscription
router.post('/register', async (req, res) => {
    console.log('Tentative d\'inscription avec:', req.body);
    try {
        const { email, password, firstName, lastName, phone, address } = req.body;
        const user = await createUser({
            email,
            password,
            firstName,
            lastName,
            phone,
            address,
            role: 'user'
        });
        console.log('Utilisateur créé avec succès:', { ...user, password: '***' });
        res.status(201).json({ message: 'Compte créé avec succès', user });
    } catch (error: any) {
        console.error('Erreur lors de l\'inscription:', error);
        res.status(400).json({ error: error.message });
    }
});

// Connexion
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await loginUser(email, password);
        req.session.userId = user._id;
        res.json({ message: 'Connexion réussie', user });
    } catch (error: any) {
        res.status(401).json({ error: error.message });
    }
});

// Déconnexion
router.post('/logout', (req, res) => {
    req.session.destroy((err: any) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la déconnexion' });
        } else {
            res.json({ message: 'Déconnexion réussie' });
        }
    });
});

// Obtenir le profil de l'utilisateur connecté
router.get('/profile', requireAuth, async (req, res) => {
    try {
        const user = await getUserById(req.session.userId);
        res.json(user);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// Mettre à jour le profil
router.put('/profile', requireAuth, async (req, res) => {
    try {
        const { firstName, lastName, phone, address } = req.body;
        await updateUser(req.session.userId, {
            firstName,
            lastName,
            phone,
            address
        });
        res.json({ message: 'Profil mis à jour avec succès' });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

// Changer le mot de passe
router.put('/change-password', requireAuth, async (req, res) => {
    try {
        const { password } = req.body;
        await updateUser(req.session.userId, { password });
        res.json({ message: 'Mot de passe changé avec succès' });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

// Route de test
router.get('/test', (req, res) => {
    res.json({ message: 'Les routes utilisateur fonctionnent!' });
});

// Routes admin
// Liste des utilisateurs (admin seulement)
router.get('/admin/users', requireAdmin, async (req, res) => {
    try {
        const query = req.query.q as string || '';
        const users = await searchUsers(query);
        res.json(users);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// Supprimer un utilisateur (admin seulement)
router.delete('/admin/users/:id', requireAdmin, async (req, res) => {
    try {
        await deleteUser(req.params.id);
        res.json({ message: 'Utilisateur supprimé avec succès' });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

export default router;
