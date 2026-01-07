import mongoose from "mongoose";
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


//actual permission middleware
export const validateProjectPermission = (roles = []) => 
    asyncHandler(async function (req, res, next) {
        const { projectId } = req.params;
        const userId = req.user.id;

        if (!projectId) {
            throw new Error("Project ID is required");
        }

        ProjectMember.findOne({
            project : mongoose.Types.ObjectId(projectId),
            user: mongoose.Types.ObjectId(req.user._id)
        }).then((projectMember) => {
            if (!projectMember) {
                throw new Error("Forbidden: You are not a member of this project");
            }
        })

         if (!projectId) {
            throw new Error("Project not found");
        }
        
        const givenRole = project?.role

        req.user.role = givenRole
        if (!roles.includes(givenRole)) {
            throw new Error("Forbidden: You do not have the required permissions");
        }


    })                          