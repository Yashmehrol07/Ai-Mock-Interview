# AI Mock Interview Platform

A full-stack web application designed to help users prepare for interviews using AI-generated questions and feedback. Built with the MERN stack (MongoDB, Express, React, Node.js) and powered by the Google Gemini API.

## 🚀 Tech Stack
-   **Frontend:** React, Vite, Tailwind CSS, React Router DOM, Framer Motion
-   **Backend:** Node.js, Express.js
-   **Database:** MongoDB Atlas (Mongoose)
-   **Authentication:** JSON Web Tokens (JWT) & bcryptjs
-   **AI Integration:** `@google/genai` (Google Gemini)
-   **Deployment:** Vercel (both frontend and serverless backend)

## 📁 Project Structure
The project is built as a split repository consisting of two main directories:
- `/frontend`: Contains the Vite + React client-side application.
- `/backend`: Contains the Node.js + Express API server.

## ⚙️ Local Development Setup

### 1. Backend Setup
1. Open a terminal and navigate to the backend folder: `cd backend`
2. Install dependencies: `npm install`
3. Create a `.env` file in the `backend` folder containing:
   ```env
   PORT=7002
   # Local DB for dev, or MongoDB Atlas URL for production
   mongodb=mongodb://localhost:27017/interviewprep 
   JWT_SECRET=supersecret123
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
4. Start the backend development server: `npm run dev`

### 2. Frontend Setup
1. Open a new terminal and navigate to the frontend folder: `cd frontend`
2. Install dependencies: `npm install`
3. The frontend is preconfigured to talk to the local backend on `http://localhost:7002/api` automatically during local development.
4. Start the Vite development server: `npm run dev`
5. Visit the link shown in the terminal (usually `http://localhost:5173`).

---

## 🌍 Deployment Guide (Vercel)

If you ever wish to re-deploy this project or deploy to a new account, here is the exact playbook to do it flawlessly via the terminal:

### Backend Deployment
1. Ensure your MongoDB Atlas cluster allows access from anywhere (`0.0.0.0/0` in the Network Access security tab).
2. Inside the `backend` folder, run: 
   ```bash
   npx vercel --prod
   ```
3. Set your production Environment Variables (`mongodb`, `JWT_SECRET`, `GEMINI_API_KEY`) inside your Vercel Dashboard -> Settings -> Environment Variables. Then manually Redeploy the backend to inject them.
4. **CRITICAL:** Turn **OFF** "Vercel Authentication" inside your Vercel Backend Project Settings -> Deployment Protection to allow public frontends to reach your API. Copy the backend production URL.

### Frontend Deployment
1. Inside the `frontend` folder, create (or edit) a `.env.production` file to hardcode the Vite build variables so they aren't lost during upload:
   ```env
   VITE_API_URL=https://your-backend-vercel-url.vercel.app/api
   VITE_API_BASE_URL=https://your-backend-vercel-url.vercel.app
   ```
2. Run the deployment command: 
   ```bash
   npx vercel --prod
   ```
3. Just like the backend, turn **OFF** "Vercel Authentication" in your Vercel Frontend Project Settings -> Deployment Protection.

## ✨ Features
- **User Authentication:** Secure signup and login flow protected using JWT verification.
- **AI-Powered Interviews:** Connects with Google Gemini APIs to dynamically generate mock-interview questions tailored to the user.
- **Modern UI:** Built highly responsive and polished using TailwindCSS and Framer Motion micro-interactions.
