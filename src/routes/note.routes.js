import { Router } from "express";
import { validateProjectPermission } from "../middlewares/AUTH.MIDDLEWARE.JS";

const router = Router();


router.route("/:projectId")
    .get(
        validateProjectPermission([UserRolesEnum.ADMIN, UserRolesEnum.MEMBER, UserRolesEnum.VIEWER]), // Middleware to validate permissions
        getNotes)
    .post(
        validateProjectPermission([UserRolesEnum.ADMIN, UserRolesEnum.MEMBER]), // Middleware to validate permissions
        createNote)
    .put(updateNote)
    .delete(deleteNote);


export default router;