// Post.js
import React from 'react';

// Post class
class Post {
  constructor(id, title, body) {
    this.id = id;
    this.title = title;
    this.body = body;
  }
}

// Posts component
class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  // Fetch posts from API and update state
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        // Map API data to Post objects
        const posts = data.map(post => new Post(post.id, post.title, post.body));
        this.setState({ posts });
      })
      .catch(error => {
        // Handle fetch errors
        alert('Failed to load posts: ' + error);
      });
  }

  // Call loadPosts after component mounts
  componentDidMount() {
    this.loadPosts();
  }

  // Error boundary
  componentDidCatch(error, info) {
    alert('An error occurred: ' + error);
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.state.posts.map(post => (
          <div key={post.id} style={{marginBottom: '1.5em'}}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
export { Post }; 