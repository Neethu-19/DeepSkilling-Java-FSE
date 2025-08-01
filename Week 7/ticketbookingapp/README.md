# Ticket Booking App

A modern React-based flight ticket booking application that demonstrates conditional rendering based on user authentication status. The app provides different experiences for guest users (browse-only) and logged-in users (full booking functionality).

## 🚀 Features

### Guest User Experience
- **Browse Flights**: View available flights with detailed information
- **Flight Details**: See flight numbers, routes, departure/arrival times, and pricing
- **Read-Only Access**: Cannot book tickets (shows "Login required" notice)
- **Responsive Design**: Modern, clean interface with hover effects

### Logged-in User Experience
- **Full Booking Access**: Book tickets for any available flight
- **Booking Form**: Complete passenger details form (name, email, phone, seats)
- **Booking Management**: View all previous bookings with details
- **Price Calculation**: Automatic total price calculation based on number of seats
- **Booking History**: Track all bookings with confirmation details

### Authentication System
- **Simple Login/Logout**: Toggle between guest and user states
- **Conditional Rendering**: Different pages based on authentication status
- **State Management**: React hooks for managing login state

## 🛠️ Technologies Used

- **React 18**: Modern React with functional components and hooks
- **CSS3**: Custom styling with gradients, animations, and responsive design
- **JavaScript ES6+**: Modern JavaScript features
- **Create React App**: Development environment and build tools

## 📁 Project Structure

```
ticketbookingapp/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── LoginButton.js          # Login button component
│   │   ├── LogoutButton.js         # Logout button component
│   │   ├── GuestPage.js            # Guest user interface
│   │   ├── GuestPage.css           # Guest page styles
│   │   ├── UserPage.js             # Logged-in user interface
│   │   └── UserPage.css            # User page styles
│   ├── App.js                      # Main application component
│   ├── App.css                     # Main application styles
│   └── index.js                    # Application entry point
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd ticketbookingapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🎯 How to Use

### For Guest Users
1. **Browse Flights**: View the list of available flights
2. **View Details**: Each flight card shows route, timing, and pricing
3. **Login Required**: Notice that booking requires login

### For Logged-in Users
1. **Click Login**: Use the "Login" button in the top-right corner
2. **Browse Flights**: View the same flight list with booking options
3. **Book a Flight**: Click "Book Now" on any flight
4. **Fill Form**: Enter passenger details and number of seats
5. **Confirm Booking**: Submit the form to complete booking
6. **View Bookings**: See all your bookings in the "Your Bookings" section
7. **Logout**: Use the "Logout" button to return to guest view

## 📊 Sample Flight Data

The application includes sample flights with realistic data:
- **AI101**: Mumbai → Delhi (₹8,500)
- **AI102**: Delhi → Bangalore (₹12,000)
- **AI103**: Chennai → Kolkata (₹7,200)
- **AI104**: Hyderabad → Mumbai (₹9,800)

## 🎨 Design Features

- **Modern UI**: Clean, professional design with glassmorphism effects
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, smooth transitions, and animations
- **Color Scheme**: Professional blue and green color palette
- **Typography**: Clear, readable fonts with proper hierarchy

## 🔧 Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (one-way operation)

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

This is a demonstration project. Feel free to:
- Fork the repository
- Create feature branches
- Submit pull requests
- Report issues

## 📄 License

This project is created for educational purposes and demonstration of React concepts.

## 🎓 Learning Objectives

This project demonstrates:
- **React Hooks**: useState for state management
- **Conditional Rendering**: Different components based on state
- **Component Composition**: Breaking UI into reusable components
- **Event Handling**: User interactions and form submissions
- **CSS Styling**: Modern web design techniques
- **Responsive Design**: Mobile-first approach

## 🔮 Future Enhancements

Potential improvements could include:
- Real authentication system
- Database integration
- Payment processing
- Email confirmations
- Flight search and filtering
- Seat selection
- Admin panel for flight management

---

**Happy Coding! ✈️**
