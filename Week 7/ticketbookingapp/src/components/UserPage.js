import React, { useState } from 'react';
import './UserPage.css';

function UserPage() {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    passengerName: '',
    email: '',
    phone: '',
    seats: 1
  });
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookings, setBookings] = useState([]);

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

  const handleBookFlight = (flight) => {
    setSelectedFlight(flight);
    setShowBookingForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    const newBooking = {
      id: Date.now(),
      flight: selectedFlight,
      ...bookingForm,
      bookingDate: new Date().toLocaleDateString(),
      totalPrice: selectedFlight.price.replace('₹', '').replace(',', '') * bookingForm.seats
    };
    
    setBookings(prev => [...prev, newBooking]);
    setShowBookingForm(false);
    setBookingForm({
      passengerName: '',
      email: '',
      phone: '',
      seats: 1
    });
    setSelectedFlight(null);
    alert('Booking successful! Your ticket has been booked.');
  };

  const cancelBooking = () => {
    setShowBookingForm(false);
    setSelectedFlight(null);
    setBookingForm({
      passengerName: '',
      email: '',
      phone: '',
      seats: 1
    });
  };

  return (
    <div className="user-page">
      <div className="header">
        <h1>Flight Booking System</h1>
        <p className="user-message">Welcome back! You can now book tickets.</p>
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
              <button 
                className="book-button"
                onClick={() => handleBookFlight(flight)}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {showBookingForm && (
        <div className="booking-modal">
          <div className="booking-form">
            <h3>Book Flight {selectedFlight.flightNumber}</h3>
            <form onSubmit={handleSubmitBooking}>
              <div className="form-group">
                <label>Passenger Name:</label>
                <input
                  type="text"
                  name="passengerName"
                  value={bookingForm.passengerName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={bookingForm.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  value={bookingForm.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Number of Seats:</label>
                <input
                  type="number"
                  name="seats"
                  min="1"
                  max="5"
                  value={bookingForm.seats}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="confirm-button">
                  Confirm Booking
                </button>
                <button type="button" onClick={cancelBooking} className="cancel-button">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {bookings.length > 0 && (
        <div className="bookings-section">
          <h2>Your Bookings</h2>
          <div className="bookings-list">
            {bookings.map(booking => (
              <div key={booking.id} className="booking-card">
                <h4>Flight {booking.flight.flightNumber}</h4>
                <p><strong>Passenger:</strong> {booking.passengerName}</p>
                <p><strong>Route:</strong> {booking.flight.from} → {booking.flight.to}</p>
                <p><strong>Date:</strong> {booking.bookingDate}</p>
                <p><strong>Seats:</strong> {booking.seats}</p>
                <p><strong>Total Price:</strong> ₹{booking.totalPrice}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserPage; 