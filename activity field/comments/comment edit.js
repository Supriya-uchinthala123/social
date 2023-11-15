// Comment.js
import React, { useState } from 'react';

const Comment = ({ comment, onDeleteComment, onUpdateComment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleEditSave = () => {
    // Call the parent component's function to update the comment
    onUpdateComment(comment._id, editedContent);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <textarea
            rows="3"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          ></textarea>
          <button onClick={handleEditSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>{comment.content}</p>
          <button onClick={handleEditToggle}>Edit</button>
          <button onClick={() => onDeleteComment(comment._id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Comment;
