# IDMS – Employee Management Module (MERN Stack)

## 🚀 Project Overview

This project is a full-stack Employee Management Module built using the MERN Stack:

- MongoDB
- Express.js
- React.js
- Node.js

It includes secure JWT-based authentication, protected routes, employee creation with image upload, search & filter functionality, and a structured dashboard UI as per the assessment requirements.

---

## 🏗️ Tech Stack

### Frontend
- React.js (Vite)
- Axios
- React Router DOM
- CSS (Custom Styling)
- JWT (Stored in localStorage)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Multer (Image Upload)
- dotenv

---

## 🔐 Features Implemented

### 1️⃣ Authentication Module
- Login Page (Responsive UI)
- Database-based authentication
- JWT token generation on successful login
- Token stored in localStorage
- Protected employee routes
- Logout clears token
- Token expiration support

---

### 2️⃣ Dashboard Layout
- Header
- Sidebar
- Sub-header
- Main content area
- Create Employee button
- Structured professional UI

---

### 3️⃣ Employee Creation (Modal-Based)
Clicking **Create** opens a modal with:

- Full Name
- Date of Birth
- Email
- Department (Dropdown)
- Phone Number
- Gender
- Designation (Dropdown)
- Employee Photo Upload

#### ✅ Validation Implemented
- Valid email format
- Phone number must be exactly 10 digits
- Required field validation
- Dropdown selection validation
- Backend validation included

---

### 4️⃣ Backend & Database
- RESTful APIs
- Structured MongoDB Schema
- Image upload using Multer
- Employee image stored and served correctly
- Proper error handling

---

### 5️⃣ Data Display
- Employee records fetched from database
- Displayed in structured table format
- Employee photo accessible via clip icon
- Pagination UI
- Total records count

---

### 6️⃣ JWT Authentication
- Token generated at login
- Middleware-based route protection
- Secret stored in `.env`
- Expiry configured
- Unauthorized access blocked

---

### 7️⃣ Search & Filter (Backend-Based)
Search employees by:
- Name
- Email
- Department

Filter by:
- Department
- Designation
- Gender

---

## 📁 Folder Structure
 - Employee-Management-System
 - │
 - ├── Backend
 - │ ├── controllers
 - │ ├── models
 - │ ├── routes
 - │ ├── middleware
 - │ ├── uploads
 - │ ├── server.js
 - │ └── .env
 - │
 - ├── Frontend
 - │ ├── src
 - │ │ ├── components
 - │ │ ├── pages
 - │ │ ├── services
 - │ │ ├── css
 - │ │ └── main.jsx
 - │ └── vite.config.js
 - │
 - └── README.md

 - ## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
 - git clone <your-github-repo-link>
 - cd Employee-Management-System

### 2️⃣ Backend Setup

 - cd Backend
 - npm install
 - Create `.env` file inside Backend folder:
 - PORT=5000
 - MONGO_URI=your_mongodb_connection_string
 - JWT_SECRET=your_super_secret_key
 - Start backend:
 - npm run dev

### 3️⃣ Frontend Setup

 - Open new terminal:
 - cd Frontend
 - npm install
 - npm run dev
 - Frontend runs at:
 - http://localhost:5173

## 🔑 Default Login Credentials
Email: admin@idms.com
Password: 123456

## 🛡️ Security Measures

- JWT-based route protection
- Middleware verification
- Secure environment variable handling
- Backend validation
- Protected employee APIs

---

## 🎥 Submission Details

 - GitHub Repository: (https://github.com/abhishekjha193/Employee-management-system)
 - Screen Recording: (https://drive.google.com/file/d/1Fvil_AOoXUDcBVIqKClWsbI2FFs5htsM/view?usp=sharing)

---

## 📌 Assessment Compliance
 - ✔ Authentication Module  
 - ✔ Protected Routes  
 - ✔ Employee CRUD  
 - ✔ Image Upload  
 - ✔ Backend Validation  
 - ✔ JWT Authentication  
 - ✔ Search & Filter via Query Params  
 - ✔ Professional Folder Structure  
 - ✔ Error Handling  

---

## 👨‍💻 Developed By
Abhishek Jha  
MERN Stack Developer  
