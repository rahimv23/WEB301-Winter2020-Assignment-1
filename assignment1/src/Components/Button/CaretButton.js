import React from 'react';
import './CaretButton.css';
import '../Number/Number';

const CaretButton = (props) => {
  const { children, handleClick } = props;
  
  return (
    <button className="caretButton" onClick={handleClick}>
      {children}
    </button>
  );

};

export default CaretButton;