import { Router } from 'express';
const router = Router();
import { register, login } from '../controllers/userController.js';

// register
router.post('/register', register);

// login
router.post('/login', login);

export default router;