import app from './app.js';
import dotenv from 'dotenv';


dotenv.config({
    path: "./.env"
})

//IMPORT PORT 
const PORT = process.env.PORT || 8000;
