import app from './app.js';
import dotenv from 'dotenv';

dotenv.config({
    path: "./.env"
})


const PORT = process.env.PORT || 8000;

connectDB()  // connect to database 
    .then(() => {
        app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
    })
    .catch((err) => {
        console.error("Failed to connect to the database:", err);
        process.exit(1);
    });


