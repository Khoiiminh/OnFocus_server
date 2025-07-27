import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];  //bearer <token>

    if ( !token || !authHeader || !authHeader.split(' ')[1]) {
        return res.status(401).json({error: "Access denied"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);  //JWT Signature = HMAC( Header + Payload, Secret )
        req.user = decoded;  // This will be { UserId, iat, exp }
        req.token = token;
        next();
    } catch (err) {
        return res.status(403).json({error: "Invalid or expired token"});
    }
};