import React from 'react';

const Button = ({ children, type = 'button', disabled, onClick, className = '' }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="btn btn-primary"
      style={{ width: '100%' }}
    >
      {children}
    </button>
  );
};

export default Button;