import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background with elegant overlay */}
      <div className="absolute inset-0 z-0">
        {/* Desktop video */}
        <video
          src={`${process.env.PUBLIC_URL}/hero-video.mov`}
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block w-full h-full object-cover blur-[4px]"
        />
        {/* Mobile video */}
        <video
          src={`${process.env.PUBLIC_URL}/images/hero-mobile.mov`}
          autoPlay
          loop
          muted
          playsInline
          className="md:hidden w-full h-full object-cover blur-[2px]"
        />
      </div>

      {/* Content wrapper */}
      <div className="container relative z-10 mx-auto px-6 py-20 flex flex-col h-screen">
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          {/* Title */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isLoaded ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative -mb-2 bg-black/40 px-8 py-4 rounded-xl backdrop-blur-sm shadow-[0_0_40px_30px_rgba(0,0,0,0.4)]"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white tracking-wide leading-tight uppercase whitespace-nowrap" style={{ fontFamily: "'Sequel', sans-serif" }}>
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white">
                Get fit, pay $0
              </span>
            </h1>
          </motion.div>

          {/* Slogan */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-center mb-5 max-w-2xl relative z-10" style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <h2 className="text-base sm:text-xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide whitespace-nowrap" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.9), 0 8px 40px rgba(0,0,0,0.8)' }}>
              If you reach your goal, you pay nothing.
            </h2>
            <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold text-white/80 tracking-wide mt-1 whitespace-nowrap" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.9), 0 8px 40px rgba(0,0,0,0.8)' }}>
              Ready to take on the challenge?
            </p>
          </motion.div>

          {/* CTA Button Group */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isLoaded ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
          >
            <a
              href="#contact"
              className="btn px-8 py-3 text-base md:px-12 md:py-5 md:text-lg rounded-full font-bold tracking-wide uppercase transform hover:scale-105 transition-all duration-300 shadow-[0_0_30px_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_15px_rgba(0,0,0,0.7)] flex items-center justify-center"
              style={{ backgroundColor: '#ffe7fd', color: '#1a0a2e', fontFamily: "'Sequel', sans-serif" }}
            >
              Join Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 2 }}
            className="text-pink-300 text-xs sm:text-sm tracking-widest uppercase font-medium mt-4"
          >
            February offer &bull; 3 spots left
          </motion.p>
        </div>

      </div>
    </section>
  );
};

export default Hero; 