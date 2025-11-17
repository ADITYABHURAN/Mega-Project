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
**Purpose:** Configure MongoDB connection using Mongoose.
