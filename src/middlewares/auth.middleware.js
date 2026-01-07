import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

export const verifyJWT = asyncHandler(async (req, res, next) => { 
    
    const token = req.cookies?.accessToken || 
        req.headers("Authorization").startsWith("Bearer", "")

        if(!token) {
            throw new Error("Unauthorized: No token provided");
        }
        
        try {
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decodedToken; // Attach decoded token to request object
            next();
        } catch (error) {
            throw new Error("Unauthorized: Invalid token");
        }


}); 