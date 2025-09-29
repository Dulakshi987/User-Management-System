# User Management System

A full-stack web application for managing user data with CRUD (Create, Read, Update, Delete) operations built using the MERN stack.

##  Project Overview

This User Management System is a comprehensive web application that allows administrators to manage user information efficiently. The system provides a clean interface for adding, viewing, updating, and deleting user records. It demonstrates the implementation of RESTful APIs and database operations using modern web technologies.

##  Features

- **Create User**: Add new users with detailed information
- **Read/View Users**: Display all users in an organized table format
- **Update User**: Edit existing user information
- **Delete User**: Remove users from the system
- **Responsive Design**: Mobile-friendly user interface
- **Real-time Updates**: Instant reflection of changes in the UI
- **Input Validation**: Form validation for data integrity
- **API Integration**: RESTful API endpoints for all operations

##  Technologies Used

### Frontend
- **React.js**: JavaScript library for building user interfaces
- **React Router DOM**: Routing library for navigation
- **HTML5**: Markup language for structuring web content
- **CSS3**: Styling and responsive design
- **Bootstrap**: CSS framework for responsive design
- **Axios**: HTTP client for making API requests
- **React Hot Toast**: Toast notifications for user feedback
- **Font Awesome**: Icon library for UI elements

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework for Node.js
- **MongoDB**: NoSQL database for storing user data
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB
- **CORS**: Cross-Origin Resource Sharing middleware
- **Body-Parser**: Middleware for parsing request bodies
- **Dotenv**: Environment variable management
- **Nodemon**: Auto-restart development server

### Development Tools
- **VS Code**: Code editor
- **Postman**: API testing tool
- **Git**: Version control system
- **npm**: Package manager

##  Installation

### Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- VS Code (recommended)
- Git

### Step 1: Clone the Repository
```bash
git clone https://github.com/Dulakshi987/User-Management-System.git
cd User-Management-System
```

### Step 2: Install Backend Dependencies
```bash
cd server
npm install
```

**Backend Dependencies:**
```json
"dependencies": {
  "body-parser": "^2.2.0",
  "cors": "^2.8.5",
  "dotenv": "^17.2.2",
  "express": "^5.1.0",
  "mongoose": "^8.18.2"
},
"devDependencies": {
  "nodemon": "^3.1.10"
}
```

Or install individually:
```bash
npm install body-parser cors dotenv express mongoose
npm install --save-dev nodemon
```

### Step 3: Install Frontend Dependencies
```bash
cd ../client
npm install
```

**Frontend Dependencies:**
```json
"dependencies": {
  "@testing-library/dom": "^10.4.1",
  "@testing-library/jest-dom": "^6.8.0",
  "@testing-library/react": "^16.3.0",
  "@testing-library/user-event": "^13.5.0",
  "axios": "^1.12.2",
  "bootstrap": "^5.3.8",
  "cors": "^2.8.5",
  "font-awesome": "^4.7.0",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-hot-toast": "^2.6.0",
  "react-router-dom": "^7.9.3",
  "react-scripts": "5.0.1",
  "web-vitals": "^2.1.4"
}
```

Or install individually:
```bash
npm install @testing-library/dom @testing-library/jest-dom @testing-library/react @testing-library/user-event axios bootstrap cors font-awesome react react-dom react-hot-toast react-router-dom react-scripts web-vitals
```

### Step 4: Configure Environment Variables
Create a `.env` file in the backend directory:
```env
PORT=8000
MONGODB_URI=mongodb://localhost:27017/mern
```

### Step 5: Start MongoDB Server
Open a new terminal and start MongoDB:
```bash
mongod
```

Or if you're using MongoDB as a service:
```bash
sudo service mongod start
```

### Step 6: Start the Backend Server
In the backend directory:
```bash
npm start
```
Or for development with auto-restart:
```bash
npm run dev
```

The backend server will run on `http://localhost:8000`

### Step 7: Start the Frontend Development Server
In a new terminal, navigate to the frontend directory:
```bash
cd client
npm start
```

The React app will open in your browser at `http://localhost:3000`

##  Setting Up in VS Code

1. **Open the Project**
   - Launch VS Code
   - File → Open Folder → Select the User-Management-System directory

2. **Install Recommended Extensions**
   - ES7+ React/Redux/React-Native snippets
   - ESLint
   - Prettier - Code formatter
   - MongoDB for VS Code

3. **Open Integrated Terminal**
   - View → Terminal (or Ctrl + `)
   - Split terminal for running both backend and frontend

4. **Configure VS Code Settings**
   - Create `.vscode/settings.json`:
   ```json
   {
     "editor.formatOnSave": true,
     "editor.defaultFormatter": "esbenp.prettier-vscode"
   }
   ```

##  API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| POST | `/api/users` | Create new user |
| PUT | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |

##  Usage

1. **Adding a User**
   - Navigate to the "Add User" page
   - Fill in the user details form
   - Click "Submit" to create the user

2. **Viewing Users**
   - The home page displays all users in a table
   - View user details including name, email, and other information

3. **Updating a User**
   - Click the "Edit" button next to a user
   - Modify the user information
   - Click "Update" to save changes

4. **Deleting a User**
   - Click the "Delete" button next to a user
   - Confirm the deletion
   - User will be removed from the database

## Testing

You can test the API endpoints using Postman or any API testing tool:

1. Import the API endpoints into Postman
2. Test each CRUD operation
3. Verify responses and database updates
---

