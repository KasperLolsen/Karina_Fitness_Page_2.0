import React from 'react';

const Logo: React.FC = () => {
  return (
    <a href="#home" className="flex items-center">
      <img 
        src="/images/IMG_3674.png" 
        alt="Protein Princess Coaching" 
        className="h-12 md:h-16 w-auto"
      />
    </a>
  );
};

export default Logo; 