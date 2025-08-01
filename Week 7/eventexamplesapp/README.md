# Event Examples App

A React application demonstrating various event handling functionalities and form interactions.

## 🚀 Features

### Counter Functionality
- **Increment Button**: Increases counter value and displays "Hello! Member!" alert
- **Decrement Button**: Decreases counter value
- **Real-time Display**: Shows current counter value prominently

### Event Handling Examples
- **Say Welcome Button**: Displays "welcome" alert message
- **Click on Me Button**: Shows "I was clicked" alert message
- **Multiple Method Invocation**: Increment button demonstrates calling multiple functions

### Currency Converter Component
- **Indian Rupees to Euro Conversion**: Converts INR to EUR using real-time rates
- **Form Validation**: Ensures both amount and currency fields are filled
- **User-friendly Interface**: Clean form with proper input validation
- **Alert Notifications**: Shows conversion results in popup alerts

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **CSS3**: Custom styling with gradients and animations
- **JavaScript ES6+**: Modern JavaScript features
- **HTML5**: Semantic HTML structure

## 📁 Project Structure

```
eventexamplesapp/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── CurrencyConvertor.js    # Currency conversion component
│   ├── App.js                      # Main application component
│   ├── App.css                     # Application styles
│   ├── index.js                    # Application entry point
│   └── index.css                   # Global styles
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
   cd eventexamplesapp
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
   Navigate to `http://localhost:3000`

## 🎯 Component Details

### App.js (Main Component)
- **State Management**: Uses React hooks for counter state
- **Event Handlers**: Multiple methods demonstrating different event handling patterns
- **Layout**: Responsive design with side-by-side sections

### CurrencyConvertor.js
- **Purpose**: Handles currency conversion from Indian Rupees to Euro
- **Features**:
  - Form validation
  - Real-time conversion (1 EUR ≈ 80 INR)
  - Alert-based result display
  - Clean, reusable component structure

## 🎨 Styling Features

- **Modern Design**: Glassmorphism effects with backdrop blur
- **Gradient Backgrounds**: Beautiful color transitions
- **Hover Animations**: Interactive button effects
- **Responsive Layout**: Works on desktop and mobile devices
- **Color-coded Buttons**: Different colors for different functionalities

## 🔧 Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (one-way operation)

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Different screen sizes and orientations

## 🎯 Usage Examples

### Counter Operations
1. Click "Increment" to increase counter and see "Hello! Member!" message
2. Click "Decrement" to decrease counter value
3. Watch the counter update in real-time

### Event Handling
1. Click "Say welcome" to see welcome message
2. Click "Click on me" to see click event message

### Currency Conversion
1. Enter amount in Indian Rupees (e.g., 80)
2. Enter target currency (e.g., Euro)
3. Click "Convert" to see conversion result
4. Example: 80 INR = 1.00 EUR

## 🔍 Key Features Demonstrated

- **React Hooks**: useState for state management
- **Event Handling**: onClick, onSubmit events
- **Form Processing**: Controlled components and validation
- **Component Architecture**: Modular, reusable components
- **CSS Styling**: Modern design patterns and animations
- **Alert System**: User feedback through browser alerts

## 🚀 Future Enhancements

Potential improvements for the application:
- Add more currency options
- Implement real-time exchange rates
- Add more event handling examples
- Include unit tests
- Add accessibility features

## 📄 License

This project is created for educational purposes as part of the DeepSkilling Java FSE program.

## 👨‍💻 Author

Created as part of Week 7 React Event Handling exercises.

---

**Note**: This application demonstrates fundamental React concepts including event handling, state management, component composition, and modern CSS styling techniques.
