# SheCan Foundation - Full Stack Web Application

## Live Website

Add your deployed Vercel link below:

https://shecan-foundation-fullstack.vercel.app/

---

## GitHub Repository

https://github.com/Vidhan360/shecan-foundation-fullstack

---

# Overview

A modern Full Stack Web Application developed for the SheCan Foundation Internship Task.

This project extends beyond the basic requirements and includes:

- Authentication System
- Database Integration
- Protected Admin Dashboard
- Responsive Design
- Animated User Interface
- Backend Features
- Firebase Integration

The goal of the project is to provide an interactive and professional experience while managing user submissions securely.

---

# Features

## User Features

- User Signup
- User Login
- Firebase Authentication
- Contact Form Submission
- Responsive Design
- Dynamic Navbar
- Smooth Animations
- Animated Background
- Glassmorphism UI
- Page Transitions
- Form Validation

---

## Admin Features

- Protected Admin Dashboard
- View Form Submissions
- Delete Submissions
- Dashboard Statistics
- Firebase Security
- Database Integration
- Responsive Dashboard Layout

---

# Tech Stack

## Frontend

- React.js
- Tailwind CSS
- Framer Motion

## Backend

- Firebase Authentication
- Firebase Firestore Database

## Libraries Used

- React Router DOM
- React Toastify
- React Icons

---

# Project Structure

```text
shecan-foundation/

├── public/
│   ├── favicon.svg
│   └── icons.svg

├── src/

│   ├── components/
│   │
│   ├── BackgroundAnimation.jsx
│   ├── ContactForm.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   └── Navbar.jsx
│
│   ├── pages/
│   │
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   └── Admin.jsx
│
│   ├── routes/
│   │
│   └── ProtectedRoute.jsx
│
│   ├── services/
│   │
│   └── firebase.js
│
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx

├── .gitignore

├── README.md

├── package.json

├── vite.config.js

└── package-lock.json
```

---

# Installation and Setup Guide

## Step 1: Clone Repository

```bash
git clone https://github.com/Vidhan360/shecan-foundation-fullstack.git
```

---

## Step 2: Move into project folder

```bash
cd shecan-foundation-fullstack
```

---

## Step 3: Install dependencies

```bash
npm install
```

---

## Step 4: Configure Firebase

Open:

```bash
src/services/firebase.js
```

Create your Firebase project and replace the Firebase configuration with your own:

```javascript
const firebaseConfig = {

apiKey:"YOUR_API_KEY",

authDomain:"YOUR_AUTH_DOMAIN",

projectId:"YOUR_PROJECT_ID",

storageBucket:"YOUR_STORAGE_BUCKET",

messagingSenderId:"YOUR_MESSAGING_SENDER_ID",

appId:"YOUR_APP_ID"

}
```

---

## Step 5: Start Development Server

```bash
npm run dev
```

Project runs at:

```bash
http://localhost:5173
```

---

# How To Use Application

## User Flow

### Create Account

1. Open Signup Page

2. Create an account using:

- Email
- Password

3. Login using created credentials

---

### Submit Contact Form

Navigate to Contact Form and enter:

- Name
- Email
- Message

Click:

```text
Submit
```

Submitted data gets stored in Firebase Firestore Database.

---

## Admin Flow

Login using admin credentials.

Navigate to:

```text
/admin
```

Admin can:

- View all form submissions
- Delete submissions
- Monitor submitted data
- Access protected dashboard

---

# Database Structure

Firebase Firestore Collection:

```text
submissions
```

Stores:

```text
Name

Email

Message

Timestamp
```

---

# Screens Included

- Home Page
- Login Page
- Signup Page
- Contact Form
- Protected Admin Dashboard
- Animated Background System
- Responsive Navbar
- Footer Section

---

# Future Improvements

- Advanced Password Recovery
- Dashboard Analytics
- Search and Filtering
- Email Notifications
- User Roles
- Profile Management

---

# Developed By

Vidhan Mishra

Developed for SheCan Foundation Internship Task
