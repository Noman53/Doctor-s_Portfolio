// src/components/Button.jsx
import React from 'react';

const Button = ({ children, className = '', onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl shadow transition-all hover:scale-105 hover:shadow-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
