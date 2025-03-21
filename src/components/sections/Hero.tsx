import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/IMG_3281.jpeg" 
          alt="The Protein Princess" 
          className="w-full h-full object-cover md:object-cover object-[60%_center] filter brightness-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
          }}
        />
        {/* Subtle pink gradient overlay from bottom to top with reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-secondary/20 to-transparent"></div>
      </div>
      
      {/* Redesigned hero content */}
      <div className="container relative z-10 flex items-center h-screen">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full px-6 md:px-12 text-center md:text-left"
        >
          {/* Main title with modern stacked effect */}
          <div className="relative mb-8 md:mb-12 inline-block">
            <motion.h1 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter"
            >
              <div className="flex flex-col md:flex-row items-center md:items-end gap-2 md:gap-4">
                <span className="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">THE</span>
                <motion.span 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-primary drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
                >
                  PROTEIN PRINCESS
                </motion.span>
              </div>
            </motion.h1>
            
            {/* Decorative underline */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 1 }}
              className="h-1 bg-primary rounded-full absolute bottom-0 left-0"
            ></motion.div>
          </div>
          
          {/* New tagline with fade-in effect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-12 max-w-2xl mx-auto md:mx-0"
          >
            <h2 className="text-xl md:text-3xl text-white font-light md:leading-relaxed">
              <span className="block mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                STYRKE &bull; BALANSE &bull; TRANSFORMASJON
              </span>
              <span className="font-normal text-base md:text-xl opacity-90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                Din personlige reise mot en sterkere kropp og sjel
              </span>
            </h2>
          </motion.div>
          
          {/* Call to action button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="mt-12"
          >
            <a href="#contact" className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-lg">
              Start din reise
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 