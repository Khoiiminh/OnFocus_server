import { Router } from 'express';
import { 
    register, 
    login, 
    getProfile, 
    verifyEmail, 
    requestPasswordReset, 
    resetPassword, 
    updateProfile, 
    deleteAccount
} from '../controllers/userController.js';
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

// delete user
router.delete('/delete', authenticateToken, deleteAccount)

// protected routes
router.get('/profile', authenticateToken, getProfile);
router.put('/update-profile',authenticateToken, updateProfile);

export default router;