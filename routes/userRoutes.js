import { Router } from 'express';
import { register, login, getProfile, verifyEmail, requestPasswordReset, resetPassword } from '../controllers/userController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';


const router = Router();
// register
router.post('/register', register);

// verify email
router.get('/verify', verifyEmail);

//reset passsword
router.post('/request-password-reset', requestPasswordReset);
router.post('/reset-password', resetPassword);

// login
router.post('/login', login);

// protected routes
router.get('/profile', authenticateToken, getProfile);

export default router;