import React, { useState } from 'react';

const BookDetails = () => {
  const [showBooks, setShowBooks] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample book data
  const books = [
    { id: 101, bname: 'Master React', price: 670, category: 'react' },
    { id: 102, bname: 'Deep Dive into Angular 11', price: 800, category: 'angular' },
    { id: 103, bname: 'Mongo Essentials', price: 450, category: 'database' },
    { id: 104, bname: 'JavaScript Fundamentals', price: 550, category: 'javascript' },
    { id: 105, bname: 'Node.js Complete Guide', price: 720, category: 'nodejs' }
  ];

  // Conditional rendering technique 1: if-else with early return
  if (!showBooks) {
    return (
      <div className="book-details">
        <h1>Book Details</h1>
        <button onClick={() => setShowBooks(true)}>Show Books</button>
        <p>Books are currently hidden</p>
      </div>
    );
  }

  // Filter books based on category and search term
  const filteredBooks = books.filter(book => {
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    const matchesSearch = book.bname.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="book-details">
      <h1>Book Details</h1>
      
      {/* Conditional rendering technique 2: Ternary operator */}
      <div className="controls">
        <button onClick={() => setShowBooks(!showBooks)}>
          {showBooks ? 'Hide Books' : 'Show Books'}
        </button>
        
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="database">Database</option>
          <option value="javascript">JavaScript</option>
          <option value="nodejs">Node.js</option>
        </select>
        
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Conditional rendering technique 3: Logical AND operator */}
      {searchTerm && (
        <p>Searching for: "{searchTerm}"</p>
      )}

      {/* Conditional rendering technique 4: Array mapping with conditional rendering inside */}
      <ul>
        {filteredBooks.map((book) => (
          <div key={book.id}>
            <h3>{book.bname}</h3>
            <h4>${book.price}</h4>
            
            {/* Conditional rendering technique 5: Multiple conditions with ternary */}
            <p>
              Category: {book.category}
              {book.price > 700 ? ' (Premium)' : book.price > 500 ? ' (Standard)' : ' (Basic)'}
            </p>
            
            {/* Conditional rendering technique 6: Logical AND for showing special offers */}
            {book.price > 600 && (
              <span style={{ color: 'red', fontWeight: 'bold' }}>
                Special Offer: 10% off!
              </span>
            )}
            
            {/* Conditional rendering technique 7: Complex conditional with multiple checks */}
            {book.category === 'react' && book.price < 700 && (
              <span style={{ color: 'green', fontWeight: 'bold' }}>
                Best Value React Book!
              </span>
            )}
          </div>
        ))}
      </ul>

      {/* Conditional rendering technique 8: Conditional rendering based on array length */}
      {filteredBooks.length === 0 && (
        <p>No books found matching your criteria.</p>
      )}

      {/* Conditional rendering technique 9: Conditional rendering with different content based on count */}
      {filteredBooks.length > 0 && (
        <p>Showing {filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''}</p>
      )}

      {/* Conditional rendering technique 10: Switch-like conditional rendering */}
      {(() => {
        switch (selectedCategory) {
          case 'react':
            return <p>React books are great for frontend development!</p>;
          case 'angular':
            return <p>Angular provides a complete framework solution!</p>;
          case 'database':
            return <p>Database knowledge is essential for full-stack development!</p>;
          default:
            return selectedCategory !== 'all' ? <p>Explore our {selectedCategory} collection!</p> : null;
        }
      })()}
    </div>
  );
};

export default BookDetails; 