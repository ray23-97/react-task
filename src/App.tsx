import React from 'react';
import PostsGrid from './pages/postGrid';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Posts</h1>
      <PostsGrid />
    </div>
  );
};

export default App;
