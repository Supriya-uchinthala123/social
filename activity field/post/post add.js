// PostForm.js
import React, { useState } from 'react';

const PostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title || '');
  const [content, setContent] = useState(initialValues.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Content:</label>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
