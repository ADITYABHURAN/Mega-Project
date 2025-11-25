
import { request } from "express"

// Workflow Explanation:
// 1. asyncHandler is a higher-order function that takes a requestHandler (async controller function) as input
// 2. It returns a new function that Express will call with (req, res, next)
// 3. When the returned function executes:
//    - It wraps the requestHandler call in Promise.resolve()
//    - This ensures even non-promise values are treated as promises
//    - If requestHandler succeeds, nothing happens (success response is sent by controller)
//    - If requestHandler throws an error or promise rejects:
//      * .catch() catches the error
//      * next(err) passes error to Express error-handling middleware
// 4. This eliminates the need for try-catch blocks in every async controller

function asyncHandler(requestHandler) {
    return function(req, res, next){
        Promise.resolve(requestHandler(req, res, next))
        .catch(function(err){
            next(err);
        });
    }
}



export {asyncHandler};