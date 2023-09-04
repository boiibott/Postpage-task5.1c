
import React, { useState } from 'react';
import './App.css';
import Question from './Question';
import Article from './Article';
import Postype from './Postype';

function App() {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <Postype onTypeChange={handleTypeChange} />
      {selectedType === 'question' && <Question />}
      {selectedType === 'article' && <Article />}
    </div>
  );
}

export default App;
