import React from 'react';

const Logo: React.FC = () => {
  return (
    <a href="#home" className="flex items-center">
      <img 
        src="/images/IMG_3674.png"
        alt="Protein Princess Coaching" 
        className="h-12 md:h-16 w-auto"
        onError={(e) => {
          // Fallback in case of image load error
          const target = e.target as HTMLImageElement;
          console.warn("Original logo failed to load, trying lowercase version");
          target.src = "/images/img_3674.png";
        }}
      />
    </a>
  );
};

export default Logo; 