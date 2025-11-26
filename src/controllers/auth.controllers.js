import { asyncHandler } from "../utils/async-handler";
//helps in error handling and is a highorder function


const registerUser = asyncHandler(async (req, res) => {
    //logic for registering user
    const {email, password, username} = req.body;

    
});


export {registerUser};


//write controllers for:
//registeruser 
//loginuser
//logout user 
//verifyuser
//resendverification email
//refresh acceess token
//forgotpassword request 
//change currentpassword
//getcurrentprofile
