import React, { useState } from 'react';

function PostType(props) {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    props.onTypeChange(event.target.value); 
  };

  return (
    <div>
      <div className="head">
        <h2>New Post</h2>
      </div>
      <div className="type-container">
        <label htmlFor="postType">Select post type:</label>
        <input
          type="radio"
          defaultValue="question"
          id="question"
          name="postType"
          checked={selectedType === 'question'}
          onChange={handleTypeChange}
        />
        <label htmlFor="question">Question</label>
        <input
          type="radio"
          defaultValue="article"
          id="article"
          name="postType"
          checked={selectedType === 'article'}
          onChange={handleTypeChange}
        />
        <label htmlFor="article">Article</label>
      </div>
    </div>
  );
}

export default PostType;
