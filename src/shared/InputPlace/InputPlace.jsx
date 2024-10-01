import React from 'react';
import './InputPlace.css'

const InputPlace = ({ email, handleChange, isValid, placeholderText }) => {
  return (
    <div className="input-item">
      <input 
        type="email"
        placeholder={placeholderText}
        value={email}
        onChange={handleChange}
        style={{ borderRadius:'2px', borderColor: isValid === null ? '' : isValid ? 'green' : 'red' }}
      />
     
    </div>
  );
};

export default InputPlace;