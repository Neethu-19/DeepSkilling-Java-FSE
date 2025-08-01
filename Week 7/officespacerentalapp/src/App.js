import './App.css';

function App() {
  // Element to display the heading of the page
  const element = "Office Space";
  
  // Attribute to display the image of the office space
  const officeImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
  const jsxatt = <img src={officeImage} width="25%" height="25%" alt="Office Space" />;
  
  // Create a list of office objects
  const officeSpaces = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "Tech Park",
      Rent: 75000,
      Address: "Bangalore"
    },
    {
      Name: "Business Center",
      Rent: 45000,
      Address: "Mumbai"
    },
    {
      Name: "Innovation Hub",
      Rent: 85000,
      Address: "Hyderabad"
    },
    {
      Name: "Corporate Plaza",
      Rent: 55000,
      Address: "Delhi"
    }
  ];

  return (
    <div className="App">
      <h1>{element}, at Affordable Range</h1>
      {jsxatt}
      
      <div className="office-list">
        {officeSpaces.map((office, index) => {
          // Apply CSS styling: Red if rent below 60000, Green if above 60000
          const rentColor = office.Rent <= 60000 ? 'textRed' : 'textGreen';
          
          return (
            <div key={index} className="office-item">
              <h2>Name: {office.Name}</h2>
              <h3 className={rentColor}>Rent: Rs. {office.Rent}</h3>
              <h3>Address: {office.Address}</h3>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
