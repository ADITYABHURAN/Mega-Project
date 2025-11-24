import mongoose, {Schema} from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonqwebtoken";
import crypto from "crypto";

const userSchema = new Schema({
    avatar: {
        type: {
            url: String,
            localpath: String
        },
        default: {
            url: 'https://placehold.co/600x400',
            localpath: ""
        },
    },
    username: {
        type : String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        index: true,
    },
    email: {
        type : String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        index: true,
    },  
    fullname: {
        type : String,
        required: true,
    },
     password: {
        type : String,
        required: true,
    },
    isEmailVerified: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: {
        type: String,
    },
    forgotPasswordTokenExpiry: {
        type: Date,
    },
    refreshToken: {
        type: String,
    },
    emailVerificationToken: {
        type: String,
    },
    emailVerificationTokenExpiry: {
        type: Date,
    }
}, {timestamps: true});
//hash password before saving using bcrypt
userSchema.pre("save", async function(next) { 
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password);
}

//to generate access token first import jstonwebtoken package
userSchema.methods.generateAccessToken = function() { 
    jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY },
        //update in .env file as well
    );
};
//SAME AS ABOVE FOR REFRESH TOKEN 
userSchema.methods.generaterRefreshToken = function() { 
    jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY },
        //update in .env file as well
    );
};

//for Temporarytoken using crypto
 userSchema.methods.generateTemporaryToken = function() {
    const unHashedToken = crypto.randomBytes(20).toString("hex");
    const hashedToken = crypto.createHash("sha256").update(unHashedToken).digest("hex");
    const tokenExpiry = Date.now() + 3600000; // 1 hour from now

    return {unHashedToken, hashedToken, tokenExpiry };
}


export const User = mongoose.model("User", userSchema);


