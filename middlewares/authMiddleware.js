import jwt from "jsonwebtoken";
import { errorResponse } from "../utils/responseHelper.js";
import { getRedis } from "../utils/redisClient.js";

export const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];  //bearer <token>

    if ( !token || !authHeader || !authHeader.split(' ')[1]) {
        return errorResponse(res, 'Access denied', 401, 'UNAUTHORIZED', 'No token provided');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);  //JWT Signature = HMAC( Header + Payload, Secret )
        req.user = decoded;  // This will be { UserId, iat, exp }
        req.token = token;
        req.tokenExpiry = decoded.exp * 1000; // Convert to milliseconds
        const redis = await getRedis();
        const isBlackListed = await redis.get(`bl_${token}`)

        if (isBlackListed) {
            return errorResponse(res, 403, 'You are not authorized to access this resource', 'TOKEN_REVOKED', 'This token has been revoked');
        }

        next();
    } catch (err) {
        return errorResponse(res, res.statusCode || 500, ' ', err.code, err.message);
    }
};