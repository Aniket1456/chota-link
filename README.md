# ChotaLink - URL Shortener

ChotaLink is a fast, secure, and customizable URL shortener built with React, TypeScript, and Tailwind CSS. It allows users to shorten long URLs, set custom aliases, and track link performance with real-time analytics.

## 🚀 Setup Instructions

Follow these steps to get the project running locally:

1.  **Clone the repository** (or download the source code).
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Start the development server**:
    ```bash
    npm run dev
    ```
4.  **Open in browser**: Navigate to the URL shown in your terminal (usually `http://localhost:5173`).

## 🧠 Assumptions Made

1.  **Mock Backend**: Since this is a frontend-focused task, `localStorage` is used to simulate a backend database. Data persists across browser refreshes but is local to the user's machine.
2.  **Short Code Uniqueness**: Custom aliases are assumed to be unique. In a production environment, this would be validated against a database.
3.  **Expiration Handling**: Expiration dates are checked using the browser's local system time. A link set to expire "Today" is considered valid until the end of the calendar day.


## 🛠️ Approach & Architecture

### **State Management**
- **React Context API**: Used to manage the global state of links, clicks, and management actions (add/delete). This ensures a single source of truth across the Dashboard and Creation pages.
- **Fast Refresh Compliance**: The context is split into `LinkContext.tsx` (Provider) and `LinkContextShared.ts` (Hook/Context definition) to prevent linting errors and ensure smooth development.

### **UI/UX Design**
- **Tailwind CSS 4.0**: Leveraged for a modern, responsive, and high-performance UI. The design follows a clean, "Bento-grid" style for the dashboard.
- **Lucide React**: Used for consistent and expressive iconography.
- **Interactive Feedback**: Implemented success notifications and a dedicated "Expired" landing page to handle edge cases gracefully.

### **Code Quality**
- **TypeScript**: Strictly typed components and data models (`ShortLink`) to prevent runtime errors and improve developer experience.
- **Optimized Handlers**: Centralized logic for link clicks and expiration checks to ensure consistent behavior across the app.
- **Modular Components**: Highly reusable UI components like `LinkTable`, `LinkForm`, and `Layout` to keep the codebase DRY (Don't Repeat Yourself).

## ✨ Key Features
- **Custom Aliases**: Choose your own short link path.
- **Expiry Dates**: Set links to automatically expire.
- **Real-time Analytics**: Track click counts directly from the dashboard.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
