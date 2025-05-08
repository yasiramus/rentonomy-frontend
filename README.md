# 🏡 Mini Property Listings

## 🚀 Overview

This is the frontend of **Rentonomy**, a minimal property listings platform that allows users to:

1. View a list of available properties  
2. Inspect detailed property information  
3. Add new property listings through a user-friendly form

---

## 🛠 Tech Stack

- [React](https://reactjs.org/) (Next)
- [Tailwind CSS](https://tailwindcss.com/)
- [Material UI (MUI)](https://mui.com/)
- JavaScript
- API integration with Express backend

---

## 📁 Project Structure

```
rentonomy/
├── src/
│   ├── app/
│   │   ├── components/         # Reusable React components
│   │   ├── pages/              # Next.js pages (routes)
│   │   ├── styles/             # Global and component styles
│   │   └── page.js             # Main entry page
├── public/                     # Static assets (images, icons, etc.)
├── .env.local                  # Environment variables
├── next.config.js              # Next.js configuration
├── package.json                # Project metadata and scripts
├── tailwind.config.js          # Tailwind CSS configuration
└── README.md                   # Project documentation
```

- **src/components/**: Contains UI components like PropertyCard, PropertyForm, etc.
- **src/app/pages/**: Defines the main routes (e.g., home, property details, add listing).
- **src/app/global.css/**: Custom CSS or Tailwind configuration files.
- **public/**: Static files served directly.
- **.env.local**: API keys and environment-specific variables.
- **next.config.js**: Next.js custom configuration.
- **tailwind.config.js**: Tailwind CSS setup.

> This structure follows Next.js best practices and supports scalability for future features.


---

## ✅ Features

- Fetch and display property listings
- View details of a selected property
- Submit new property listings via a form with validation

---

## 🧪 Quality Assurance

- Manual testing
- Client-side validation
- Responsive UI tested across screen sizes
- Integration with backend via REST API

---

## 🌐 Deployment

- **Local Development:**  
  ```bash
  npm install  
  npm run dev  # or npm start 
  ```

  Live Deployment: Vercel, railway for mysqldb, or Render

  ---

## 🔐 Environment Variables

To connect the frontend to the backend API, create a `.env` file in the root of the `frontend/` directory and add the following:

This environment variable ensures all API requests point to the correct backend endpoint.

## 🧭 Usage Note – Set localStorage for Adding Properties
Before adding a new property, ensure you’ve set the required localStorage item to simulate user identity during development or testing.

🔧 In your browser's developer console, run:

specify role type eg:manager

localStorage.setItem("role", "");
