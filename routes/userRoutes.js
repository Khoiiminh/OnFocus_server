import { Router } from 'express';
import { register, login, getProfile } from '../controllers/userController.js';import { authenticateToken } from '../middlewares/authMiddleware.js';


const router = Router();
// register
router.post('/register', register);

// login
router.post('/login', login);

// protected routes
router.get('/profile', authenticateToken, (req, res) => {
    res.json({message: 'Protected Router', getProfile})
});

export default router;