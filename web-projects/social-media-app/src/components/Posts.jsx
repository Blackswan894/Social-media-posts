import React, { useState } from 'react';

function Posts({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(post.comments);

  const handleLike = () => {
    setLikes(likes + 1);

  };

  const handleDisLike = () => {
    setLikes(likes - 1);

  };

  const handleComment = () => {
    setComments([...comments, comment]);
    setComment('');
    
  };

  return (
    <div className='post'>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      
      <div className='comment--'>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment"
        />
        <button onClick={handleComment}>Comment</button>
      </div>
      <button onClick={handleLike}>Like ({likes})</button>
      <button onClick={handleDisLike}>DisLike({likes})</button>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
