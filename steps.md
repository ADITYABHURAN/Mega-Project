# Mega-Project Development Steps

## Project Initialization

### Step 1: Initialize Node.js Project
**Command:**
```bash
npm init -y
```
**Purpose:** Created a `package.json` file with default settings to manage the project dependencies and scripts. The `-y` flag automatically accepts all default values.

**Result:** Generated a basic `package.json` with:
- Project name: "mega-project"
- Version: "1.0.0"
- Entry point: "index.js"
- Default test script

---

### Step 2: Install Core Dependencies
**Command:**
```bash
npm i express mongoose dotenv cors express-validator
```
**Purpose:** Installed essential packages for building a Node.js backend application:
- **express**: Web framework for building the server and handling HTTP requests
- **mongoose**: MongoDB object modeling tool for database operations
- **dotenv**: Loads environment variables from `.env` file
- **cors**: Enables Cross-Origin Resource Sharing for API access from different domains
- **express-validator**: Middleware for validating and sanitizing user input

**Result:** Added 91 packages to the project (including dependencies)

---

### Step 3: Install Development Tools
**Command:**
```bash
npm install --save-dev prettier
```
**Purpose:** Installed Prettier as a dev dependency for automatic code formatting to maintain consistent code style across the project.

**Result:** Added Prettier to devDependencies in `package.json`

---

### Step 4: Configure Prettier
**Files Created:**
- `.prettierrc` - Prettier configuration file
- `.prettierignore` - Files/folders to exclude from formatting

**Purpose:** Set up code formatting rules and specify which files should not be automatically formatted.

---

### Step 5: Initialize Git Repository
**Command:**
```bash
git init
```
**Purpose:** Initialize version control to track changes throughout the project.

---

### Step 6: Create Project Structure
**Files/Folders Created:**
- `.env` - Environment variables (database connection, API keys, etc.)
- `.env.example` - Template for environment variables
- `Readme.md` - Project documentation
- `public/images/` - Static image assets folder
- `public/images/.gitkeep` - Keep empty folder in Git

**Purpose:** Set up the basic project folder structure for organizing code and assets.

---

### Step 7: Create Source Code Folders
**Command:**
```powershell
mkdir controllers, db, middlewares, models, routes, utils, validators
```
**Purpose:** Created organized folder structure inside `src/` for backend code:
- `controllers/` - Handle request/response logic
- `db/` - Database configuration and connection
- `middlewares/` - Custom middleware functions
- `models/` - Database schemas and models
- `routes/` - API endpoint definitions
- `utils/` - Utility/helper functions
- `validators/` - Input validation logic

---

### Step 8: Set Up Database Connection
**File Created:** `src/db/index.js`
**Purpose:** Configure MongoDB connection using Mongoose with error handling and auto-exit on failure.

---

### Step 9: Create API Error Handler
**File Created:** `src/utils/api-error.js`
**Purpose:** Custom error class for consistent API error responses with status codes and error messages.

---

### Step 10: Create Async Handler Utility
**File Created:** `src/utils/async-handler.js`
**Purpose:** Placeholder for async route handler wrapper to catch errors (to be implemented later).

---

### Step 11: Create Database Models
**Files Created:**
- `src/models/user.models.js` - User schema and model
- `src/models/project.models.js` - Project schema and model
- `src/models/task.models.js` - Task schema and model
- `src/models/subtask.models.js` - Subtask schema and model
- `src/models/projectmember.models.js` - Project member schema and model
- `src/models/note.models.js` - Project notes schema with references to User and Project

**Purpose:** Define MongoDB schemas using Mongoose for the application's data structure with relationships and automatic timestamps.

---

### Step 12: Set Up Docker MongoDB
**Command:**
```powershell
docker run --name mongodb -d -p 27017:27017 mongo
```
**Purpose:** Started MongoDB container using Docker for local development database.

---

### Step 13: Configure Environment Variables
**Update:** Modified `.env` file - Updated `MONGO_URI` to `mongodb://localhost:27017/mega-project`

---

### Step 14: Create Application Entry Point
**Files Created:**
- `src/index.js` - Main server entry point with DB connection and server startup
- `src/app.js` - Express app configuration and route setup

---

### Step 15: Implement Async Handler Utility
**File Updated:** `src/utils/async-handler.js`
**Purpose:** Wrapper function for async controllers to auto-handle errors.

---

### Step 16: Create Controllers
**Files Created:**
- `src/controllers/healthcheck.controllers.js` - Health check endpoint
- `src/controllers/auth.controllers.js` - Authentication logic
- `src/controllers/project.controllers.js` - Project management
- `src/controllers/task.controllers.js` - Task management

---

### Step 17: Create Routes
**Files Created:**
- `src/routes/healthcheckroutes.js` - Health check route
- `src/routes/auth.route.js` - Authentication routes
- `src/routes/project.routes.js` - Project routes
- `src/routes/task.routes.js` - Task routes
- `src/routes/note.routes.js` - Note routes

---

### Step 18: Create Validators
**Files Created:**
- `src/validators/index.js` - Validation rules
- `src/middlewares/validator.middleware.js` - Validation error handler

---

### Step 19: Start the Server
**Command:**
```powershell
npm run start
```
**Result:** Server running successfully at `http://localhost:8000`

---

### Step 20: Install Email Packages
**Command:**
```powershell
npm i mailgen nodemailer
```
**Purpose:** Installed email-related packages:
- **nodemailer**: Library for sending emails from Node.js
- **mailgen**: Generate beautiful HTML emails with pre-built templates

**Use Case:** nodemailer bhejne ke liye (sending emails), mailgen craft krne ke liye (creating styled email templates)
