# SheCan Foundation - Full Stack Web Application

## Overview

A modern full-stack web application developed for the SheCan Foundation Internship Task.

This project goes beyond the basic requirements and includes authentication, database integration, protected admin functionality, responsive design, animations, and backend features.

---

## Features

### User Features

- User Signup
- User Login
- Firebase Authentication
- Contact Form Submission
- Responsive Design
- Dynamic Navbar
- Animated Background
- Glassmorphism UI
- Form Validation
- Smooth Page Animations

### Admin Features

- Protected Admin Dashboard
- View Submitted Data
- Delete Submissions
- Firebase Authentication Security
- Firestore Database Integration
- Dashboard Statistics
- Responsive Admin Layout

---

## Tech Stack

### Frontend

- React.js
- Tailwind CSS
- Framer Motion

### Backend / Database

- Firebase Authentication
- Firebase Firestore

### Libraries Used

- React Router DOM
- React Icons
- React Toastify

---

## Folder Structure

```text
src/

├── components/
│   ├── Navbar
│   ├── Hero
│   ├── ContactForm
│   ├── Footer
│   └── BackgroundAnimation

├── pages/
│   ├── Home
│   ├── Login
│   ├── Signup
│   └── Admin

├── routes/
│   └── ProtectedRoute

├── services/
│   └── firebase.js

├── App.jsx

└── main.jsx
```

---

## Installation and Setup

### Step 1: Clone Repository

```bash
git clone <repository-url>
```

### Step 2: Move into project folder

```bash
cd shecan-foundation
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Create Environment Variables

Create:

```bash
.env
```

Add Firebase configuration:

```env
VITE_FIREBASE_API_KEY=YOUR_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
```

### Step 5: Run Development Server

```bash
npm run dev
```

Application starts at:

```bash
http://localhost:5173
```

---

## How to Use Application

### User Flow

#### Create Account

1. Open Signup page
2. Create account using email and password
3. Login using created credentials

---

#### Submit Contact Form

1. Navigate to Contact Form section
2. Enter:

- Name
- Email
- Message

3. Click Submit

Submitted data gets stored in Firebase Firestore.

---

### Admin Flow

Login with admin credentials.

Navigate to:

```bash
/admin
```

Admin can:

- View all form submissions
- Delete submissions
- Access protected dashboard
- Monitor user activity

---

## Database Structure

### Firebase Firestore Collection

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

## Screens / Modules Included

- Home Page
- Login Page
- Signup Page
- Contact Form
- Admin Dashboard
- Protected Routes
- Responsive Navbar
- Animated Background System

---

## Future Improvements

- Password Recovery Enhancements
- Search and Filtering
- Dashboard Analytics
- User Roles
- Email Notifications
- Profile Management

---

## Developed By

Vidhan Mishra

Developed for SheCan Foundation Internship Task
