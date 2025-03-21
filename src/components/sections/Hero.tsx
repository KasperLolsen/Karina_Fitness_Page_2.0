import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/IMG_3281.jpeg" 
          alt="The Protein Princess" 
          className="w-full h-full object-cover"
        />
        {/* Elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-primary/30 to-black/50"></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[url('/images/IMG_3674.png')] bg-no-repeat bg-[length:500px] bg-[center_top_5rem] opacity-5"></div>
        
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      {/* Content wrapper */}
      <div className="container relative z-10 mx-auto px-6 py-20 flex flex-col h-screen">
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          {/* Animated badge */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-6"
          >
            <img 
              src="/images/IMG_3674.png" 
              alt="The Protein Princess Logo" 
              className="h-32 w-auto mx-auto mb-2"
            />
          </motion.div>

          {/* Main heading with luxury styling */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isLoaded ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-4 relative"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter leading-none">
              <span className="inline-block relative">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white">
                  TRANSFORM
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"></span>
              </span>
            </h1>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-wider mt-2">
              <span className="text-primary">YOUR</span> BODY <span className="text-primary">&</span> MIND
            </h2>
          </motion.div>

          {/* Elegant description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
            className="max-w-xl mx-auto text-lg text-white/90 font-light leading-relaxed mb-8"
          >
            Exclusive fitness coaching designed to elevate your strength, 
            balance and transform your life through personalized training and nutrition.
          </motion.p>

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
              Begin Your Journey
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
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-0.5 h-8 bg-gradient-to-b from-primary to-transparent"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 