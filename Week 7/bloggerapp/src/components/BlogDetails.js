import React, { useState, useEffect, useMemo } from 'react';

const BlogDetails = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFeatured, setShowFeatured] = useState(true);
  const [sortBy, setSortBy] = useState('date');
  const [filterByAuthor, setFilterByAuthor] = useState('');

  // Sample blog data
  const blogData = [
    {
      id: 1,
      title: 'React Learning',
      author: 'Stephen Biz',
      description: 'Welcome to learning React!',
      date: '2024-01-15',
      featured: true,
      readTime: 5
    },
    {
      id: 2,
      title: 'Installation',
      author: 'Schewzdenier',
      description: 'You can install React from npm.',
      date: '2024-01-10',
      featured: false,
      readTime: 3
    },
    {
      id: 3,
      title: 'Advanced React Patterns',
      author: 'Stephen Biz',
      description: 'Learn advanced patterns in React development.',
      date: '2024-01-20',
      featured: true,
      readTime: 8
    },
    {
      id: 4,
      title: 'State Management',
      author: 'John Doe',
      description: 'Understanding state management in React applications.',
      date: '2024-01-18',
      featured: false,
      readTime: 6
    }
  ];

  // Simulate API call with useEffect
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Simulate random error (10% chance)
        if (Math.random() < 0.1) {
          throw new Error('Failed to fetch blogs');
        }
        
        setBlogs(blogData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [blogData]);

  // Conditional rendering technique 3: useMemo for expensive computations
  // This must be called before any early returns to follow React hooks rules
  const processedBlogs = useMemo(() => {
    let filtered = blogs;

    // Filter by featured status
    if (showFeatured) {
      filtered = filtered.filter(blog => blog.featured);
    }

    // Filter by author
    if (filterByAuthor) {
      filtered = filtered.filter(blog => 
        blog.author.toLowerCase().includes(filterByAuthor.toLowerCase())
      );
    }

    // Sort blogs
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date) - new Date(a.date);
        case 'title':
          return a.title.localeCompare(b.title);
        case 'author':
          return a.author.localeCompare(b.author);
        case 'readTime':
          return b.readTime - a.readTime;
        default:
          return 0;
      }
    });

    return filtered;
  }, [blogs, showFeatured, filterByAuthor, sortBy]);

  // Conditional rendering technique 1: Loading state
  if (loading) {
    return (
      <div className="blog-details">
        <h1>Blog Details</h1>
        <div className="loading">
          <p>Loading blogs...</p>
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  // Conditional rendering technique 2: Error state
  if (error) {
    return (
      <div className="blog-details">
        <h1>Blog Details</h1>
        <div className="error">
          <p>Error: {error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      </div>
    );
  }

  // Conditional rendering technique 4: Conditional component rendering
  const BlogCard = ({ blog }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div key={blog.id} className={`blog-card ${blog.featured ? 'featured' : ''}`}>
        <h3>{blog.title}</h3>
        <h4>By: {blog.author}</h4>
        
        {/* Conditional rendering technique 5: Conditional text truncation */}
        <p>
          {isExpanded ? blog.description : `${blog.description.substring(0, 50)}...`}
        </p>
        
        {/* Conditional rendering technique 6: Conditional button text */}
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
        
        <div className="blog-meta">
          <span>Date: {blog.date}</span>
          <span>Read Time: {blog.readTime} min</span>
          
          {/* Conditional rendering technique 7: Conditional badges */}
          {blog.featured && (
            <span className="featured-badge">Featured</span>
          )}
          
          {/* Conditional rendering technique 8: Conditional styling based on read time */}
          <span className={`read-time ${blog.readTime > 5 ? 'long-read' : 'quick-read'}`}>
            {blog.readTime > 5 ? 'Long Read' : 'Quick Read'}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="blog-details">
      <h1>Blog Details</h1>
      
      {/* Conditional rendering technique 9: Conditional controls */}
      <div className="controls">
        <label>
          <input
            type="checkbox"
            checked={showFeatured}
            onChange={(e) => setShowFeatured(e.target.checked)}
          />
          Show Featured Only
        </label>
        
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="date">Sort by Date</option>
          <option value="title">Sort by Title</option>
          <option value="author">Sort by Author</option>
          <option value="readTime">Sort by Read Time</option>
        </select>
        
        <input
          type="text"
          placeholder="Filter by author..."
          value={filterByAuthor}
          onChange={(e) => setFilterByAuthor(e.target.value)}
        />
      </div>

      {/* Conditional rendering technique 10: Conditional summary */}
      {processedBlogs.length > 0 && (
        <div className="summary">
          <p>
            Showing {processedBlogs.length} blog{processedBlogs.length !== 1 ? 's' : ''}
            {showFeatured && ' (Featured only)'}
            {filterByAuthor && ` by "${filterByAuthor}"`}
          </p>
        </div>
      )}

      {/* Conditional rendering technique 11: Conditional content based on filtered results */}
      {processedBlogs.length === 0 ? (
        <div className="no-results">
          <p>No blogs found matching your criteria.</p>
          <button onClick={() => {
            setShowFeatured(false);
            setFilterByAuthor('');
            setSortBy('date');
          }}>
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="blog-list">
          {processedBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}

      {/* Conditional rendering technique 12: Conditional footer information */}
      {processedBlogs.length > 0 && (
        <div className="footer-info">
          <p>
            Total blogs: {blogs.length} | 
            Featured blogs: {blogs.filter(b => b.featured).length} |
            Average read time: {Math.round(blogs.reduce((sum, b) => sum + b.readTime, 0) / blogs.length)} min
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogDetails; 