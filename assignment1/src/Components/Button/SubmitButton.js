import React from 'react';


const submitButton = (props) => {
  const { children, handleClick } = props;
  
  return (
    <button className="submitButton" onClick={handleClick}>
      {children}
    </button>
  );

};

export default SubmitButton;