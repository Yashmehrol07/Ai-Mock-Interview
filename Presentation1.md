# ⭐ AI Mock Interview Platform - Project Presentation ⭐

Welcome to the comprehensive breakdown of the AI Mock Interview Platform. This presentation highlights the hierarchical architecture, the technologies powering the platform, and key insights regarding each section.

---

## 1. Backend

The backend is structurally organized to ensure extreme modularity, isolating routing from business logic and database models.

### Hierarchical Structure
```
backend/
├── config/
├── controller/
│   ├── ai-controller.js       # Handles communication with Google Gemini API
│   ├── auth-controller.js     # Manages user signup, login, and token generation
│   └── session-controller.js  # Manages user interview sessions and histories
├── middlewares/
│   └── auth-middleware.js     # Protects private API endpoints using JWT validation
├── models/
│   ├── question-model.js      # MongoDB schema for individual questions
│   ├── session-model.js       # MongoDB schema for entire interview sessions
│   └── user-model.js          # MongoDB schema for user credentials (hashed)
├── routes/
│   ├── ai-route.js            # Defines API endpoints for AI interactions
│   ├── auth-route.js          # Defines endpoints for user authentication
│   └── session-route.js       # Defines endpoints for handling session data
├── utils/                     # Reusable helper functions and constants
├── index.js                   # ⭐ Core entry point of the Express API server
├── .env / .env.local          # Environment variables for dev/local testing
├── package.json               # Backend dependencies and scripts
└── vercel.json                # ⭐ Production specifications for Vercel serverless deployment
```

### Technologies Used
- **Node.js & Express.js**: ⭐ The fundamental server-side framework to handle high-performance API routing and fast logic execution.
- **MongoDB & Mongoose**: ⭐ A robust NoSQL database paired with an Object Data Modeling (ODM) library for storing complex relations like sessions, generated questions, and user profiles effortlessly.
- **JSON Web Tokens (JWT) & bcryptjs**: ⭐ Critical security implementations managing token-based authentication and secure password salting/hashing.
- **Google Gemini API**: ⭐ The powerful AI engine (`@google/genai`) tasked with dynamically generating customized interview questions.
- **dotenv & cors**: Ensuring environment variable security and managing Cross-Origin Resource Sharing from our Vite application.

---

## 2. Frontend

The frontend is highly responsive and interactive, breaking down dynamic views into reusable modular components.

### Hierarchical Structure
```
frontend/
├── public/                    # Static assets
├── src/
│   ├── components/            # Reusable UI parts independent of routes
│   │   ├── EmptyState.jsx
│   │   ├── ErrorBanner.jsx
│   │   ├── GenerateButton.jsx
│   │   ├── Navbar.jsx
│   │   ├── QAItems.jsx
│   │   └── SkeletonCard.jsx   # Loading state animations
│   ├── pages/                 # Full screen route views
│   │   ├── Dashboard.jsx      # High-level overview of user performance
│   │   ├── InterviewPrep.jsx  # Main arena for answering mock questions
│   │   ├── LandingPage.jsx    # Public marketing / introduction page
│   │   ├── Login.jsx
│   │   └── SignUp.jsx
│   ├── utils/
│   │   ├── apiPaths.js        # Centralized library of backend API endpoints
│   │   └── axiosInstance.js   # ⭐ Secured Axios client managing tokens/headers
│   ├── App.jsx                # App wrapper handling React Router DOM states
│   ├── main.jsx               # ⭐ React entry point mapping DOM to elements
│   └── index.css              # Global Tailwind styling injections
├── index.html                 # Main HTML shell structure
├── vite.config.js             # ⭐ Bundler configuration for the React app
├── .env.local & .env.production
└── package.json
```

### Technologies Used
- **React 19 & Vite**: ⭐ Next-generation component-based UI rendering, bundled with Vite for incredibly fast Hot Module Replacement (HMR) during development.
- **Tailwind CSS v4 & Framer Motion**: ⭐ Utility-first layout styling combined with highly polished micro-interactions, animations, and transitions to ensure a modern feel.
- **React Router DOM**: ⭐ Fast and efficient client-side declarative routing between pages (Login, Dashboard, Prep) without requesting new HTML documents remotely.
- **Axios**: ⭐ A robust promise-based HTTP client customized to inject authentication headers locally and communicate securely with the Express API.
- **React Markdown & Remark GFM**: ⭐ Critical for rendering rich code syntax and standard markdown formatting dynamically imported from Google Gemini responses.

---

## 3. README.md

The README.md serves as the **North Star** document bridging the backend and frontend modules together.

### Key Details & Focus Areas
- ⭐ **Foundational Blueprint**: Outlines the grand vision of the MERN + Gemini stack architecture clearly.
- ⭐ **Local Sync Guidelines**: Step-by-step commands to independently spin up the Node.js backend port (7002) alongside the Vite frontend module, specifying `.env` setups to ensure they are talking seamlessly locally.
- ⭐ **Deployment Playbook**: Delivers explicit, crucial instructions on how to perfectly deploy both layers onto Vercel servers. 
- ⭐ **Vercel Architecture Fixes**: Notably, details how users *must* manually deactivate the `Vercel Deployment Protection` settings so their separate serverless API remains publicly callable from the frontend domain.
