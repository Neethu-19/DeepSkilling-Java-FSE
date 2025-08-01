import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [activeTab, setActiveTab] = useState('books');

  // Conditional rendering technique: Tab-based navigation
  const renderContent = () => {
    switch (activeTab) {
      case 'books':
        return <BookDetails />;
      case 'blogs':
        return <BlogDetails />;
      case 'courses':
        return <CourseDetails />;
      default:
        return <BookDetails />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Blogger App</h1>
        <p>Demonstrating Multiple Conditional Rendering Techniques</p>
      </header>

      <nav className="App-nav">
        <button 
          className={activeTab === 'books' ? 'active' : ''} 
          onClick={() => setActiveTab('books')}
        >
          📚 Book Details
        </button>
        <button 
          className={activeTab === 'blogs' ? 'active' : ''} 
          onClick={() => setActiveTab('blogs')}
        >
          📝 Blog Details
        </button>
        <button 
          className={activeTab === 'courses' ? 'active' : ''} 
          onClick={() => setActiveTab('courses')}
        >
          🎓 Course Details
        </button>
      </nav>

      <main className="App-main">
        {renderContent()}
      </main>

      <footer className="App-footer">
        <p>React Conditional Rendering Examples - Created for Learning</p>
        <div className="techniques-list">
          <h4>Conditional Rendering Techniques Demonstrated:</h4>
          <ul>
            <li>If-else statements with early return</li>
            <li>Ternary operators</li>
            <li>Logical AND (&&) operator</li>
            <li>Array mapping with conditional rendering</li>
            <li>useMemo for expensive computations</li>
            <li>Loading and error states</li>
            <li>Render props pattern</li>
            <li>Higher-Order Components</li>
            <li>Context-based conditional rendering</li>
            <li>Dynamic component selection</li>
            <li>Conditional styling and badges</li>
            <li>Switch statements for view modes</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
