import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { randomBytes } from 'crypto';
import { localhost } from '../config/server.js';
import { successResponse, errorResponse } from '../utils/responseHelper.js';
import { getRedis } from '../utils/redisClient.js';

export async function register(req, res) {
    try {
        const { name, email, password } = req.body;    // declare and take value from HTTP's request body

        // check if user already exists
        const existingUser = await prisma.users.findUnique({ where: { email } });
        if (existingUser) {
            return errorResponse(res, 400, 'Email already exists', 'EMAIL_EXISTS', 'Please use a different email address.');
        }

        if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
            return errorResponse(res, 400, 'Invalid email domain', 'INVALID_EMAIL_DOMAIN', 'Please use a Gmail address.');
        }

        if ( !password || password.length < 6 ) {
            return errorResponse(res, 400, 'Password must be at least 6 characters long', 'INVALID_PASSWORD', 'Please choose a stronger password.');
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

        return successResponse(res, 'User registered successfully! Please verify your email.', {
            UserId: user.id,
            UserName: user.name,
            UserEmail: user.email,
        });
    } catch (err) {
        return errorResponse(res, 500, 'Registered failed', err.message, err.details);
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;

        const user = await prisma.users.findUnique({ where: { email }});

        if ( !email || !password ) {
            return errorResponse(res, 400, 'Email and password are required!', 'MISSING_CREDENTIALS', 'Please provide both email and password.');
        }

        if ( !user ) {
            return errorResponse(res, 401, 'User not found', 'USER_NOT_FOUND', 'Please check your email or register.');
        }

        if ( !user.is_verified ) {
            return errorResponse(res, 403, 'Unverified email', 'UNVERIFIED_EMAIL', 'Please, verify your email before logging in.');
        }

        const match = await bcrypt.compare(password, user.password);
        if ( !match ) {
            return errorResponse(res, 401, 'Invalid credentials', 'INVALID_CREDENTIALS', 'The password is incorrect.');
        }

        const token = jwt.sign({ UserId: user.id }, process.env.JWT_SECRET, { expiresIn: '1d'});
        if ( !token ) {
            return errorResponse(res, 500, 'Failed to generate token', 'TOKEN_GENERATION_FAILED', 'Please try again later.');
        }   

        console.log(`Token for ${user.name}: ${token}`)
        return successResponse(res, 'Login successful', { 
            UserId: user.id,
            UserName: user.name,
            UserEmail: user.email,
        });
    } catch (err) {
        return errorResponse(res, 500, 'Login failed', err.message, err.details);
    }
}

export async function getProfile(req, res) {
    try {
        const user = await prisma.users.findUnique({
            where: { id: req.user.UserId },
            select: {
                id: true,           // in the context of Prisma's select object, true acts as a flag or indicator. It means:
                name: true,         // "Yes, include this field (is_verified) from the database record in the result object."
                email: true,
                is_verified: true,
                created_at: true
            }
        });

        if ( !user ) {
            return errorResponse(res, 404, 'User not found', 'USER_NOT_FOUND', 'Please check your user ID.');
        }

        return successResponse(res, 'Profile retrieved successfully', {
            UserId: user.id,
            UserName: user.name,
            UserEmail: user.email,
            ExternalAccounts: user.ExternalAccounts || [],
            Message: user.message || 'No additional message'
        })
    } catch (err) {
        return errorResponse(res, 500, 'Failed to retrieve profile', err.message, err.details);
    }
}

export async function verifyEmail(req, res) {
    try {
        const { token } = req.query;
        if ( !token ) {
            return errorResponse(res, 400, 'Verification token missing', 'MISSING_TOKEN', 'Please provide a verification token.');
        }

        const user = await prisma.users.findUnique({where: {verification_token: token}});
        if ( !user ) {
            return errorResponse(res, 400, 'Invalid or expired token', 'INVALID_TOKEN', 'Please check your verification link or request a new one.');
        }

        await prisma.users.update({
            where: {id: user.id},
            data: {
                is_verified: true,
                email_verified_at: new Date(),
                verification_token: null
            }
        });

        return successResponse(res, '✅ Email verified successfully!', null);
    } catch (err) {
        return errorResponse(res, 500, 'Email verification failed', err.message, err.details);
    }
};

export async function requestPasswordReset(req, res) {
    try {
        const { email } = req.body;

        const user = await prisma.users.findUnique({where: { email }});
        if ( !user ) {
            return errorResponse(res, 404, 'User not found', 'USER_NOT_FOUND', 'Please check your email or register.');
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

        return successResponse(res, 'Password reset link has been sent (check logs for now).');
    } catch (err) {
        return errorResponse(res, 500, 'Failed to request password reset', err.message, err.details);
    }
};

export async function resetPassword(req, res) {
    try {
        const { token } = req.query;   //declare and take value from key-value pair right in URL (after the '?' mark)
        const { newPassword } = req.body;

        const user = await prisma.users.findFirst({
            where: {
                verification_token: token,
                reset_token_expires: { gt: new Date() }
            },
        });

        const isSamePassword = await bcrypt.compare(newPassword, user.password);
        if (isSamePassword) {
            return errorResponse(res, 400, 'New password cannot be the same as the old password', 'SAME_PASSWORD', 'Please choose a different password.');
        }

        if ( !user ) {
            return errorResponse(res, 400, 'Invalid or expired token', 'INVALID_TOKEN', 'Please check your verification link or request a new one.');
        }

        if ( !newPassword || newPassword.length < 6 ) {
            return errorResponse(res, 400, 'New password must be at least 6 characters long', 'INVALID_PASSWORD', 'Password must be at least 6 characters long.');
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

        return successResponse(res, '✅ Password updated successfully');
    } catch (err) {
        return errorResponse(res, 500, 'Failed to reset password', err.message, err.details);
    }
};

export async function updateProfile(req, res) {
    try {
        const userId = req.user?.UserId;
        const { name, password } = req.body;

        const updates = {};

        if (!userId) {
            return errorResponse(res, 401, 'Unauthorized - UserID is missing!', 'UNAUTHORIZED', 'Please log in to update your profile.');
        }

        if (name) {
            updates.name = name;
        } 

        if (password) {
            const hashPassword = await bcrypt.hash(password, 10);
            updates.password = hashPassword;
        }

        const updateUser = await prisma.users.update({
            where: {
                id: userId
            },
            data: updates,
            select: {
                id: true,           
                name: true,         
                email: true,
                is_verified: true,
                created_at: true
            }
        });

        if ( !updateUser ) {
            return errorResponse(res, 404, 'User not found', 'USER_NOT_FOUND', 'Please check your user ID or register.');
        }

        return successResponse(res, 'Profile updated successfully', {
            UserId: updateUser.id,
            UserName: updateUser.name,
            UserEmail: updateUser.email,
            IsVerified: updateUser.is_verified
        })
    } catch (err) {
        return errorResponse(res, 500, 'Failed to update profile', err.message, err.details);
    }
}

export async function deleteAccount(req, res) {
    try {
        const userId = req.user.UserId;  // user from authMiddleware - stored userId 

        const user = await prisma.users.findUnique({
            where: {id: userId}
        });

        if ( !userId ) {
            return errorResponse(res, 401, 'Unauthorized. UserId is missing', 'UNAUTHORIZED', 'Please log in to delete your account.');
        }

        if ( !user ) {
            return errorResponse(res, 404, 'User not found', 'USER_NOT_FOUND', 'Please check your user ID or register.');
        }

        await prisma.users.delete({
            where: {id: userId}
        });

        return successResponse(res, '🗑️ Your account has been deleted successfully.');
    }  catch(err) {
        return errorResponse(res, 500, 'Failed to delete account', err.message, err.details);
    } 
}

export async function logout(req, res) {
    try {
        const token = req.token;
        const tokenExpiry = req.tokenExpiry ?? (Date.now() + 60_000); // Default to 1 minute if not set
        const time_to_live = Math.max(1, Math.floor((tokenExpiry - Date.now()) / 1000)); // Ensure at least 1 second

        if ( !token ) {
            return errorResponse(res, 400, 'No token provided', 'NO_TOKEN', 'Please log in to continue.');
        }

        const redis = await getRedis();
        await redis.setEx(`bl_${token}`, time_to_live, '1');

        return successResponse(res, 'You have been logged out successfully.');
    } catch (err) {
        return errorResponse(res, 500, 'Logout failed', err.message, err.details);
    }
}