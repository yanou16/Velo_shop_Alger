import express from 'express';
import cors from 'cors';
import session from 'express-session';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json());
app.use(session({
    secret: 'veloshop-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    }
}));

// Routes
app.get('/api/test', (req, res) => {
    res.json({ message: 'Server is running!' });
});

app.post('/api/users/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Login attempt:', { email, password });

    if (email === 'test@gmail.com' && password === 'test') {
        req.session.userId = 1;
        res.json({
            success: true,
            user: {
                id: 1,
                email: 'test@gmail.com',
                firstName: 'Test',
                lastName: 'User',
                role: 'admin'
            }
        });
    } else {
        res.status(401).json({ error: 'Email ou mot de passe incorrect' });
    }
});

app.get('/api/users/profile', (req, res) => {
    if (req.session.userId) {
        res.json({
            id: 1,
            email: 'test@gmail.com',
            firstName: 'Test',
            lastName: 'User',
            role: 'admin'
        });
    } else {
        res.status(401).json({ message: 'Non authentifié' });
    }
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
