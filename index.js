import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import userRouter from './routes/userRoutes.js';
import { PORT } from './config/server.js';

// setup 
dotenv.config();
const app = express();
const prisma = new PrismaClient();

// middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/users', userRouter);

// default
app.get('/', (req, res) => res.send('🚀 OnFocus Backend is running'));

// start server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
})