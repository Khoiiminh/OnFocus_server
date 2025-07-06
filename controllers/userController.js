import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { randomBytes } from 'crypto';
import { error } from 'console';
import { localhost } from '../config/server.js';

export async function register(req, res) {
    try {
        const { name, email, password } = req.body;    // declare and take value from HTTP's request body

        // check if user already exists
        const existingUser = await prisma.users.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);     // 10 This value dictates 
                                                                    // the computational cost of hashing and, consequently, 
                                                                    // the level of security
        // generate verification token
        const verificationToken = randomBytes(32).toString('hex');  // This line of code generates a 64-character long, 
                                                                    // highly random and secure hexadecimal string

        // create user
        const user = await prisma.users.create({
            data: {
                name, 
                email, 
                password: hashedPassword, 
                verification_token: verificationToken,
                is_verified: false
            }
        });

        // simulate sending email
        const verifyURL = `${localhost}/api/users/verify?token=${verificationToken}`;
        console.log(`📩 Verify your email at: ${verifyURL}`);

        res.status(201).json({
            user, 
            message: 'User rgistered! Please verify your email.',
            verifyURL
        });
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

        if ( !user.is_verified ) {
            return res.status(403).json({error: 'Please, verify your email before logging in.'});
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
            return res.status(404).json({error: 'User not found' });
        }

        res.json({
            user,   // payload
            token: req.token
        });
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

export async function verifyEmail(req, res) {
    try {
        const { token } = req.body;
        if ( !token ) {
            return res.status(400).json({error: 'Verification token missing'});
        }

        const user = await prisma.users.findUnique({where: {verification_token: token}});
        if ( !user ) {
            return res.status(400).json({error: 'Invalid or expired token'});
        }

        await prisma.users.update({
            where: {id: user.id},
            data: {
                is_verified: true,
                email_verified_at: new Date(),
                verification_token: null
            }
        });

        res.json({message: '✅ Email verified successfully!'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export async function requestPasswordReset(req, res) {
    try {
        const { email } = req.body;

        const user = await prisma.users.findUnique({where: { email }});
        if ( !user ) {
            return res.status(404).json({ error: 'User not found'});
        }

        const resetToken = randomBytes(32).toString('hex');
        const expires = new Date(Date.now() + 15 * 60 * 1000); // 15 mins 

        await prisma.users.update({
            where: {id: user.id},
            data: {
                verification_token: resetToken,
                reset_token_expires: expires
            },
        });

        const resetUrl = `${localhost}/api/users/reset-password?token=${resetToken}`;
        console.log("🔐 Reset your password:", resetUrl);

        res.json({message: 'Password reset link hs been sent (check logs for now).'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export async function resetPassword(req, res) {
    try {
        const { token } = req.query;   //declare and take value from key-value pair right in URL (after the '?' mark)
        const { newPassword } = req.body;

        const user = await prisma.users.findFirst({
            where: {
                verification_token: token,
                reset_token_expires: { gt: new Date() },
            },
        });

        if ( !user ) {
            return res.status(400).json({error: 'Invalid or expired token'});
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await prisma.users.update({
            where: {id: user.id},
            data: {
                password: hashedPassword,
            verification_token: null,
            reset_token_expires: null
            },
        });

        res.json({message: '✅ Password updated successfully'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};