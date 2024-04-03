import React, { useState } from 'react';
import CreatePostForm from './components/CreatePostForm';
import Feed from './components/Feed';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  const handleCreatePost = (newPost) => {
    setPosts([...posts, { ...newPost, id: Date.now(), likes: 0, comments: [] }]);
  };

  return (
    <div className="headingtitle">
      <h1>Simple Social Media App</h1>
      <CreatePostForm onCreatePost={handleCreatePost} />
      <Feed posts={posts} />
    </div>
  );
}

export default App;
