import { Router } from "express";

const router = Router();


router.route("/:projectId")
    .get(getNotes)
    .post(
        validateProjectPermission([UserRolesEnum.ADMIN, UserRolesEnum.MEMBER]), // Middleware to validate permissions
        createNote)
    .put(updateNote)
    .delete(deleteNote);


export default router;