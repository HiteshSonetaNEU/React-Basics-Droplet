// components/Navigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles.css"
const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Posts</Link></li>  {/* New link to Posts page */}
      </ul>
    </nav>
  );
};

export default Navigation;
