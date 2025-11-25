//validation chain for user registration and login
import {body} from "express-validator"

const userRegisterationValidator = () => {
    return [
        body('email')
           .trim()
           .notEmpty().withMessage("Email is required")
           .isEmail().withMessage("Invalid email format"), 
        body("username")
           .trim()
           .notEmpty().withMessage("Username is required")
           .isLength({ min: 3 }).withMessage("Username must be at least 3 characters long")
           .isLength({ max: 13 }).withMessage("Username can be maximum 13 characters long"),
    ]
}

const userLoginValidator = () => {
    return [
        body('email')
           .trim()
           .notEmpty().withMessage("Email is required")
           .isEmail().withMessage("Invalid email format"), 
        body("password")
           .notEmpty().withMessage("Password is required")
    ]
}


export {userRegisterationValidator, userLoginValidator};