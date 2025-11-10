// src/components/IconText.jsx
import React from 'react';

const IconText = ({ icon, children }) => (
  <div className="flex items-center gap-2 text-sm text-sky-300">
    <span>{icon}</span>
    <span>{children}</span>
  </div>
);

export default IconText;
