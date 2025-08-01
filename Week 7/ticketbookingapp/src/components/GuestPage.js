import React from 'react';
import './GuestPage.css';

function GuestPage() {
  const flights = [
    {
      id: 1,
      flightNumber: 'AI101',
      from: 'Mumbai',
      to: 'Delhi',
      departure: '10:00 AM',
      arrival: '12:00 PM',
      price: '₹8,500',
      seats: 'Available'
    },
    {
      id: 2,
      flightNumber: 'AI102',
      from: 'Delhi',
      to: 'Bangalore',
      departure: '02:00 PM',
      arrival: '04:30 PM',
      price: '₹12,000',
      seats: 'Available'
    },
    {
      id: 3,
      flightNumber: 'AI103',
      from: 'Chennai',
      to: 'Kolkata',
      departure: '06:00 AM',
      arrival: '08:00 AM',
      price: '₹7,200',
      seats: 'Available'
    },
    {
      id: 4,
      flightNumber: 'AI104',
      from: 'Hyderabad',
      to: 'Mumbai',
      departure: '11:30 AM',
      arrival: '01:00 PM',
      price: '₹9,800',
      seats: 'Available'
    }
  ];

  return (
    <div className="guest-page">
      <div className="header">
        <h1>Flight Booking System</h1>
        <p className="guest-message">Welcome Guest! Please login to book tickets.</p>
      </div>
      
      <div className="flights-container">
        <h2>Available Flights</h2>
        <div className="flights-grid">
          {flights.map(flight => (
            <div key={flight.id} className="flight-card">
              <div className="flight-header">
                <h3>Flight {flight.flightNumber}</h3>
                <span className="price">{flight.price}</span>
              </div>
              <div className="flight-details">
                <div className="route">
                  <div className="departure">
                    <strong>{flight.from}</strong>
                    <span>{flight.departure}</span>
                  </div>
                  <div className="arrow">→</div>
                  <div className="arrival">
                    <strong>{flight.to}</strong>
                    <span>{flight.arrival}</span>
                  </div>
                </div>
                <div className="seats">
                  <span className="seats-available">{flight.seats}</span>
                </div>
              </div>
              <div className="booking-notice">
                <p>Login required to book this flight</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GuestPage; 