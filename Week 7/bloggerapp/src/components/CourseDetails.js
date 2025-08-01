import React, { useState, useEffect, createContext, useContext } from 'react';

// Context for course data
const CourseContext = createContext();

// Higher-Order Component for conditional rendering
const withConditionalRendering = (WrappedComponent, condition) => {
  return (props) => {
    return condition(props) ? <WrappedComponent {...props} /> : null;
  };
};

// Render prop component for conditional rendering
const ConditionalRender = ({ condition, render, fallback = null }) => {
  return condition ? render() : fallback;
};

// CourseDetails component with multiple conditional rendering techniques
const CourseDetails = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid'); // grid, list, calendar
  const [filterLevel, setFilterLevel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showCompleted, setShowCompleted] = useState(false);

  // Sample course data
  const courseData = [
    {
      id: 1,
      name: 'Angular',
      date: '4/5/2021',
      level: 'beginner',
      duration: '8 weeks',
      instructor: 'John Smith',
      completed: false,
      rating: 4.5,
      students: 1200
    },
    {
      id: 2,
      name: 'React',
      date: '6/3/2021',
      level: 'intermediate',
      duration: '10 weeks',
      instructor: 'Jane Doe',
      completed: true,
      rating: 4.8,
      students: 2500
    },
    {
      id: 3,
      name: 'Vue.js Fundamentals',
      date: '8/15/2021',
      level: 'beginner',
      duration: '6 weeks',
      instructor: 'Mike Johnson',
      completed: false,
      rating: 4.2,
      students: 800
    },
    {
      id: 4,
      name: 'Advanced JavaScript',
      date: '9/20/2021',
      level: 'advanced',
      duration: '12 weeks',
      instructor: 'Sarah Wilson',
      completed: false,
      rating: 4.7,
      students: 1500
    },
    {
      id: 5,
      name: 'Node.js Backend',
      date: '10/5/2021',
      level: 'intermediate',
      duration: '9 weeks',
      instructor: 'David Brown',
      completed: true,
      rating: 4.6,
      students: 1800
    }
  ];

  // Simulate API call
  useEffect(() => {
    const fetchCourses = async () => {
      await new Promise(resolve => setTimeout(resolve, 800));
      setCourses(courseData);
      setLoading(false);
    };
    fetchCourses();
  }, [courseData]);

  // Filter and sort courses
  const filteredCourses = courses.filter(course => {
    const matchesLevel = filterLevel === 'all' || course.level === filterLevel;
    const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCompletion = showCompleted ? true : !course.completed;
    return matchesLevel && matchesSearch && matchesCompletion;
  });

  // Conditional rendering technique 1: Loading state with skeleton
  if (loading) {
    return (
      <div className="course-details">
        <h1>Course Details</h1>
        <div className="loading-skeleton">
          {[1, 2, 3].map(i => (
            <div key={i} className="skeleton-card">
              <div className="skeleton-title"></div>
              <div className="skeleton-date"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Conditional rendering technique 2: Component with render props
  const CourseCard = ({ course, onSelect }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <ConditionalRender
        condition={course !== null}
        render={() => (
          <div 
            className={`course-card ${course.completed ? 'completed' : ''} ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onSelect(course)}
          >
            <h3>{course.name}</h3>
            <p>Date: {course.date}</p>
            
            {/* Conditional rendering technique 3: Conditional badges */}
            <div className="course-badges">
              <span className={`level-badge ${course.level}`}>
                {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
              </span>
              
              {course.completed && (
                <span className="completion-badge">✓ Completed</span>
              )}
              
              {course.rating >= 4.5 && (
                <span className="rating-badge">⭐ Top Rated</span>
              )}
            </div>

            {/* Conditional rendering technique 4: Conditional content based on hover state */}
            {isHovered && (
              <div className="hover-details">
                <p>Instructor: {course.instructor}</p>
                <p>Duration: {course.duration}</p>
                <p>Students: {course.students}</p>
                <p>Rating: {course.rating}/5</p>
              </div>
            )}

            {/* Conditional rendering technique 5: Conditional action buttons */}
            <div className="course-actions">
              {course.completed ? (
                <button className="review-btn">Review Course</button>
              ) : (
                <button className="enroll-btn">Enroll Now</button>
              )}
            </div>
          </div>
        )}
        fallback={<div className="course-card-placeholder">No course data</div>}
      />
    );
  };

  // Conditional rendering technique 6: Higher-Order Component usage
  // These HOCs are created but not used in this example to avoid complexity
  // const CompletedCourseCard = withConditionalRendering(CourseCard, (props) => props.course.completed);
  // const BeginnerCourseCard = withConditionalRendering(CourseCard, (props) => props.course.level === 'beginner');

  // Conditional rendering technique 7: Dynamic view components
  const GridView = ({ courses }) => (
    <div className="course-grid">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} onSelect={setSelectedCourse} />
      ))}
    </div>
  );

  const ListView = ({ courses }) => (
    <div className="course-list">
      {courses.map(course => (
        <div key={course.id} className="course-list-item">
          <h3>{course.name}</h3>
          <p>Date: {course.date} | Level: {course.level} | Instructor: {course.instructor}</p>
          {course.completed && <span className="completed-indicator">✓</span>}
        </div>
      ))}
    </div>
  );

  const CalendarView = ({ courses }) => (
    <div className="course-calendar">
      {courses.map(course => (
        <div key={course.id} className="calendar-item">
          <div className="date">{course.date}</div>
          <div className="course-name">{course.name}</div>
        </div>
      ))}
    </div>
  );

  // Conditional rendering technique 8: Dynamic view selection
  const renderView = () => {
    switch (viewMode) {
      case 'grid':
        return <GridView courses={filteredCourses} />;
      case 'list':
        return <ListView courses={filteredCourses} />;
      case 'calendar':
        return <CalendarView courses={filteredCourses} />;
      default:
        return <GridView courses={filteredCourses} />;
    }
  };

  return (
    <CourseContext.Provider value={{ courses, setCourses }}>
      <div className="course-details">
        <h1>Course Details</h1>

        {/* Conditional rendering technique 9: Conditional controls */}
        <div className="controls">
          <div className="view-controls">
            <button 
              className={viewMode === 'grid' ? 'active' : ''} 
              onClick={() => setViewMode('grid')}
            >
              Grid
            </button>
            <button 
              className={viewMode === 'list' ? 'active' : ''} 
              onClick={() => setViewMode('list')}
            >
              List
            </button>
            <button 
              className={viewMode === 'calendar' ? 'active' : ''} 
              onClick={() => setViewMode('calendar')}
            >
              Calendar
            </button>
          </div>

          <div className="filter-controls">
            <select value={filterLevel} onChange={(e) => setFilterLevel(e.target.value)}>
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>

            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <label>
              <input
                type="checkbox"
                checked={showCompleted}
                onChange={(e) => setShowCompleted(e.target.checked)}
              />
              Show Completed
            </label>
          </div>
        </div>

        {/* Conditional rendering technique 10: Conditional summary */}
        {filteredCourses.length > 0 && (
          <div className="summary">
            <p>
              Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
              {filterLevel !== 'all' && ` (${filterLevel} level)`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>
        )}

        {/* Conditional rendering technique 11: Conditional content based on results */}
        {filteredCourses.length === 0 ? (
          <div className="no-courses">
            <p>No courses found matching your criteria.</p>
            <button onClick={() => {
              setFilterLevel('all');
              setSearchQuery('');
              setShowCompleted(false);
            }}>
              Clear Filters
            </button>
          </div>
        ) : (
          renderView()
        )}

        {/* Conditional rendering technique 12: Conditional selected course details */}
        {selectedCourse && (
          <div className="selected-course">
            <h2>Selected Course: {selectedCourse.name}</h2>
            <div className="course-details-expanded">
              <p><strong>Instructor:</strong> {selectedCourse.instructor}</p>
              <p><strong>Duration:</strong> {selectedCourse.duration}</p>
              <p><strong>Level:</strong> {selectedCourse.level}</p>
              <p><strong>Students:</strong> {selectedCourse.students}</p>
              <p><strong>Rating:</strong> {selectedCourse.rating}/5</p>
              <p><strong>Status:</strong> {selectedCourse.completed ? 'Completed' : 'Available'}</p>
            </div>
            <button onClick={() => setSelectedCourse(null)}>Close</button>
          </div>
        )}

        {/* Conditional rendering technique 13: Conditional statistics */}
        {courses.length > 0 && (
          <div className="course-stats">
            <h3>Course Statistics</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">{courses.length}</span>
                <span className="stat-label">Total Courses</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{courses.filter(c => c.completed).length}</span>
                <span className="stat-label">Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {Math.round(courses.reduce((sum, c) => sum + c.rating, 0) / courses.length * 10) / 10}
                </span>
                <span className="stat-label">Avg Rating</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {courses.reduce((sum, c) => sum + c.students, 0)}
                </span>
                <span className="stat-label">Total Students</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </CourseContext.Provider>
  );
};

export default CourseDetails; 