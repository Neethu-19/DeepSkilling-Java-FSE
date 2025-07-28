 # React Applications Collection

This repository contains a collection of React applications developed as part of a learning journey. Each application demonstrates different React concepts and features.

## 📁 Project Structure

```
Week 6/
├── blogapp/           # Blog application with posts
├── cohorttracker/     # Cohort management system
├── myfirstreactapp/   # Basic React starter app
├── scorecalculator/   # Score calculation application
└── studentapp/        # Student information application
```

## 🚀 Applications

### 1. Blog App (`blogapp/`)
A simple blog application that displays posts with titles and content.

**Features:**
- Post listing
- Individual post components
- Responsive design

**To run:**
```bash
cd blogapp
npm install
npm start
```

### 2. Cohort Tracker (`cohorttracker/`)
A comprehensive cohort management system for tracking training programs.

**Features:**
- Cohort listing and details
- Status-based color coding (Green for ongoing, Blue for scheduled)
- CSS Modules for styling
- Responsive design with box layouts

**Key Components:**
- `CohortDetails.js` - Individual cohort display with conditional styling
- `CohortDetails.module.css` - CSS Module with box styling and typography

**To run:**
```bash
cd cohorttracker
npm install
npm start
```

### 3. My First React App (`myfirstreactapp/`)
A basic React starter application demonstrating fundamental React concepts.

**Features:**
- Basic component structure
- React fundamentals

**To run:**
```bash
cd myfirstreactapp
npm install
npm start
```

### 4. Score Calculator (`scorecalculator/`)
An application for calculating and managing scores.

**Features:**
- Score calculation functionality
- Component-based architecture
- Custom styling

**Components:**
- `CalculateScore.js` - Main calculation component
- Custom CSS styling in `Components/Stylesheets/`

**To run:**
```bash
cd scorecalculator
npm install
npm start
```

### 5. Student App (`studentapp/`)
A student information management application with multiple pages.

**Features:**
- Multi-page navigation
- About, Contact, and Home pages
- Component-based routing

**Components:**
- `Home.js` - Home page component
- `About.js` - About page component
- `Contact.js` - Contact page component

**To run:**
```bash
cd studentapp
npm install
npm start
```

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **CSS Modules** - Component-scoped styling
- **JavaScript (ES6+)** - Programming language
- **HTML5** - Markup language

## 📋 Prerequisites

Before running any of these applications, make sure you have:

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

## 🔧 Installation & Setup

1. **Clone or download this repository**
2. **Navigate to any specific application directory**
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm start
   ```
5. **Open your browser and visit:** `http://localhost:3000`

## 🎨 CSS Modules Implementation

The `cohorttracker` application demonstrates the use of CSS Modules:

- **File:** `CohortDetails.module.css`
- **Features:**
  - `.box` class with 300px width, inline-block display
  - 10px overall margin, 10px top/bottom padding, 20px left/right padding
  - 1px black border with 10px border-radius
  - `dt` element styling with font-weight: 500
  - Conditional h3 color styling (green for ongoing, blue for others)

## 📱 Responsive Design

All applications are designed to be responsive and work across different screen sizes.

## 🤝 Contributing

Feel free to explore, modify, and enhance these applications as part of your React learning journey.

## 📄 License

This project is for educational purposes.

---

**Happy Coding! 🚀**