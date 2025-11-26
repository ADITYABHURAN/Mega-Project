import { Router } from "express";
import { registerUser } from "../controllers/auth.controllers";
import { validate } from "../middlewares/validator.middleware";
import {userRegistrationValidator} from "../validators/auth.validators.js";

const router = Router();

router.route("/register").post(userRegistrationValidator(), validate, registerUser); //userRegistrationValidator() gets executed directly because of the () and is passed on to validate
export default router;

//Factory Pattern 