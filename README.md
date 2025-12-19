# 🎓 AI Powered LMS Platform

A modern Learning Management System (LMS) built to help learners discover, enroll, and learn using personalized AI-powered tools. This web app includes authentication, course browsing, category filtering, AI search, and secure payments flow.

---

## 🚀 Features

### 🧠 AI Integrated Search
- Students can search courses using AI suggestions.
- Smart filtering by category and keywords.

### 📚 Course Management
- Explore all available courses
- View course details (price, rating, instructor, etc.)
- Categorized browsing (Web Dev, AI/ML, Data Science, etc.)
- Popular and featured course sections

### 👤 User Authentication
- Login / Signup pages
- Email + password authentication
- Google Sign-In integration (UI visible)
- Profile avatar + logout button

### 💳 Pricing Display
- Price and rating visible on course cards
- Designed to support real payment gateway integration

### 🌐 Responsive UI
- Fully responsive layout
- Modern clean UI components
- Smooth navigation and routing

---

## 🛠️ Tech Stack

| Area | Technology |
|------|------------|
| Frontend UI | HTML, CSS, Tailwind/Custom CSS |
| JS Framework | React + Vite |
| State/Context | Context API / Hooks |
| AI Integration | Search functionality using model API endpoint |
| Auth | Custom Auth + Google Button UI |
| Deployment | Render/Netlify/GitHub Pages |

---

## 📷 Screenshots

> Some key UI pages included in this project:

| Page | Description |
|------|-------------|
| Landing Page | Hero section + course explore buttons |
| Courses Page | Filter sidebar + AI search + list of cards |
| Login Page | Auth form + Google login option |
| Dashboard/User Avatar | Logout + profile icon |
| Popular Courses | pricing + rating displayed |

*(See project folder for images or run locally.)*

---

## 🧩 Project Structure (typical)

ai-powered-lms/
│
├── src/
│ ├── components/
│ ├── pages/
│ ├── context/
│ ├── assets/
│ ├── routes/
│ └── App.jsx
│
├── public/
│
├── package.json
├── vite.config.js
└── README.md


---

## 🏁 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/ai-powered-lms.git
cd ai-powered-lms
2️⃣ Install dependencies
npm install

3️⃣ Start development server
npm run dev

4️⃣ Open in browser
http://localhost:5173

🔐 Environment Setup (optional for AI features)

Create .env and add:

VITE_AI_API_KEY=your_api_key_here

