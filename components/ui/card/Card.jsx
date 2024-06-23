import React from 'react';

const Card = ({ children }) => (
  <div className="bg-background shadow-sm relative overflow-hidden">
    {children}
  </div>
);

export default Card;
