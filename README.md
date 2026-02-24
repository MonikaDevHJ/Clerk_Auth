# 🚀 Next.js 14 + Clerk Authentication System

A modern authentication-based web application built using Next.js 14 (App Router) and Clerk.

This project demonstrates secure server-side authentication, protected route groups, reusable layouts, and a clean responsive UI using Tailwind CSS.

---

## ✨ Features

- 🔐 Secure authentication with Clerk
- 🛡️ Protected routes using Route Groups `(protected)`
- 🧠 Server-side authentication using `auth()` and `currentUser()`
- 👤 Dynamic user profile page
- 🎨 Clean and responsive UI with Tailwind CSS
- 🏗️ Centralized layout-based route protection
- 🚀 Production-ready folder structure

---

## 🏗️ Tech Stack

- Next.js 14 (App Router)
- Clerk Authentication
- TypeScript
- Tailwind CSS

---

## 📂 Project Structure

app/
├── layout.tsx
├── page.tsx
├── sign-in/
│   └── [[...sign-in]]/page.tsx
├── sign-up/
│   └── [[...sign-up]]/page.tsx
└── (protected)/
    ├── layout.tsx
    ├── dashboard/
    │   └── page.tsx
    └── profile/
        └── page.tsx

---

## 🔐 Authentication Flow

- Public Home Page (`/`)
- Protected Dashboard (`/dashboard`)
- Protected Profile (`/profile`)
- Clerk Sign In (`/sign-in`)
- Clerk Sign Up (`/sign-up`)

All protected routes are secured using a centralized layout with server-side authentication checks.

---

## 🧠 What I Learned

- Implementing authentication in Next.js App Router
- Using Route Groups for scalable protection
- Server-side session handling
- Clean architecture for production-ready apps
- Building modular layout systems

---

## 🚀 Getting Started

1. Clone the repository  
   git clone https://github.com/MonikaDevHJ/Clerk_Auth 

2. Install dependencies  
   npm install  

3. Create a `.env.local` file and add:

   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key_here  
   CLERK_SECRET_KEY=your_secret_here  

4. Run the development server  
   npm run dev  

---

## 📌 Future Improvements

- Middleware-based route protection
- Role-based access control
- Dashboard analytics cards
- Dark mode toggle
- Deployment on Vercel

---

## 👨‍💻 Author

Built while learning modern authentication systems using Next.js and Clerk.
