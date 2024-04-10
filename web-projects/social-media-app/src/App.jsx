import React, { useState } from 'react';
import CreatePostForm from './components/CreatePostForm';
import Feed from './components/Feed';
import '../src/App.css';
import '../src/index.css';

function App() {
  const [posts, setPosts] = useState([]);

  const handleCreatePost = (newPost) => {
    setPosts([...posts, { ...newPost, id: Date.now(), likes: 0, comments: [] }]);
  };

  return (
    <div >
      <h1 className="headingtitle">Simple Social Media App</h1>
      <CreatePostForm onCreatePost={handleCreatePost} />
      <Feed posts={posts} />
    </div>
  );
}

export default App;
