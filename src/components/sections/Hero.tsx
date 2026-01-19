import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden pb-24">
      {/* Background with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${process.env.PUBLIC_URL}/images/IMG_3281.jpeg`}
          alt="The Protein Princess" 
          className="w-full h-full object-cover"
        />
        {/* Elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-primary/30 to-black/50"></div>
        
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      {/* Content wrapper */}
      <div className="container relative z-10 mx-auto px-6 py-20 flex flex-col h-screen">
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          {/* Title */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={isLoaded ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-tight">
              <span className="block relative">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white">
                  Power, Protein
                </span>
              </span>
              <span className="block relative">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white">
                  and Princess Energy
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Slogan */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-2xl md:text-3xl font-light text-white/90 tracking-wide mb-8"
          >
            Ready to become the Princess you were meant to be?
          </motion.h2>

          {/* CTA Button Group */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={isLoaded ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
          >
            <a 
              href="#contact" 
              className="btn px-8 py-4 bg-primary text-white rounded-full font-medium tracking-wide hover:bg-primary-dark transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/30 flex items-center justify-center"
            >
              Start Your Journey
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
            <a 
              href="#services" 
              className="btn px-8 py-4 bg-transparent text-white border border-white/30 rounded-full font-medium tracking-wide hover:bg-white/10 transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Elegant scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 0.7 } : {}}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-white/70 text-sm mb-2 font-light tracking-widest">SCROLL</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 