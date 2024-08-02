import React, { useState } from 'react';

const TextColor = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const renderHighlightedText = (text) => {
    const regex = /[@#](.)/g;
    let lastIndex = 0;
    const elements = [];

    text.replace(regex, (match, p1, offset) => {
      elements.push(text.slice(lastIndex, offset));
      elements.push(<span style={{ color: 'red' }} key={offset}>{match}</span>);
      lastIndex = offset + match.length;
    });

    elements.push(text.slice(lastIndex));

    return elements;
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <div style={{ whiteSpace: 'pre-wrap' }}>
        {renderHighlightedText(inputValue)}
      </div>
    </div>
  );
};

export default TextColor;
