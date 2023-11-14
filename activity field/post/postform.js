// PostForm.js
import React, { useState } from 'react';

const PostForm = ({ onAddPost }) => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      caption,
      image,
      time: new Date().toISOString(),
      // Add any other fields as needed
    };

    // Call the parent component's function to add the post
    onAddPost(newPost);

    // Clear the input fields
    setCaption('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      {/* Add more input fields as needed */}
      <button type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;
