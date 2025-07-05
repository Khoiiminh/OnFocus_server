import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function register(req, res) {
    try {
        const { name, email, password } = req.body;

        // check if user already exists
        const existingUser = await prisma.users.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);     // 10 This value dictates 
                                                                    // the computational cost of hashing and, consequently, 
                                                                    // the level of security

        // create user
        const user = await prisma.users.create({
            data: {
                name, 
                email, 
                password: hashedPassword, 
            }
        });

        res.status(201).json({user});
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
}

export async function login(req, res) {
    try {
        const {name, email, password } = req.body;

        const user = await prisma.users.findUnique({ where: { email }});
        if ( !user ) {
            return res.status(401).json({ error: 'User not found' });
        }

        const match = await bcrypt.compare(password, user.password);
        if ( !match ) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ UserId: user.id }, process.env.JWT_SECRET, { expiresIn: '1d'});

        res.json({ token, user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function getProfile(req, res) {
    try {
        const user = await prisma.users.findUnique({
            where: { id: req.user.UserId },
            select: {
                id: true,
                name: true,
                email: true,
                is_verified: true,
                created_at: true
            }
        });

        if ( !user ) {
            res.status(404).json({error: 'User not found' });
        }

        res.json(user);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}