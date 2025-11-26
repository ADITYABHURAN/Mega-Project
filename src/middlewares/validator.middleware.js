import { validationResult } from "express-validator"; // to get the validation result from request
import {ApiError} from "../utils/api-error.js"; // custom API error class

export const validate = (req, res, next) => { // middleware function
       const errors = validationResult(req);  // extract validation errors from request
      
       if(errors.isEmpty()) {  // if no errors, proceed to next middleware/controller
        return next();
       } 

       const extractedError = []; 
       errors.array().map((err) => extractedError.push({
        [err.path]: err.msg
       })) // extract error messages


       throw new ApiError(422, "Received data is not valid", extractedError); // throw custom API error with details
}