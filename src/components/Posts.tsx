import { useState, useEffect } from 'react';
import "../styles.css";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((data: Post[]) => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
    document.title = 'Recent Blog Posts';    
  }, []);  

  return (
    <div className="container">
      <h2>Recent Blog Posts</h2>
      <div className="styled-box">
        <h3>Recent Posts</h3>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
