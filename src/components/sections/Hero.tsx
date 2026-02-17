import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Background video - fixed to cover entire section */}
      <div className="absolute inset-0 z-0 h-full w-full">
        {/* Desktop video */}
        <video
          ref={(el) => { if (el) el.playbackRate = 0.9; }}
          src={`${process.env.PUBLIC_URL}/hero-video.mp4`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="hidden md:block absolute inset-0 w-full h-full object-cover blur-[4px]"
        />
        {/* Mobile video */}
        <video
          ref={(el) => { if (el) el.playbackRate = 0.9; }}
          src={`${process.env.PUBLIC_URL}/images/hero-mobile.mp4`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="md:hidden absolute inset-0 w-full h-full object-cover blur-[2px]"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-20 flex-1 flex flex-col justify-center items-center text-center">
        {/* Dream outcome headline */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wide leading-tight uppercase"
          style={{ fontFamily: "'Sequel', sans-serif", color: '#ffe7fd' }}
        >
          Lose fat without extreme dieting in<br />
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400" style={{ textShadow: 'none' }}>90 days</span>
            <span className="absolute inset-0 blur-lg bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-50 z-0" />
          </span>
        </motion.h1>

        {/* Pain point copy */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-lg md:text-xl text-white/80 leading-relaxed px-2 sm:px-0"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Tired of starting over every Monday?<br />
          I help women lose fat and keep it off <span className="italic underline decoration-2 underline-offset-4 whitespace-nowrap" style={{ fontFamily: "'Georgia', serif" }}>without gaining it back</span>.
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-10"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-6 py-2.5 text-xs sm:text-base md:text-lg sm:px-12 sm:py-4 rounded-full font-bold tracking-wide uppercase transition-all duration-300 shadow-[0_0_25px_rgba(196,113,237,0.4)] hover:shadow-[0_0_40px_rgba(196,113,237,0.6)] hover:scale-105 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #c471ed 0%, #f64f59 100%)',
              color: '#fff',
              fontFamily: "'Sequel', sans-serif",
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative">Free Consultation</span>
          </a>
        </motion.div>

        {/* Reduce friction */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-4 text-white/50 text-[10px] sm:text-sm tracking-wide whitespace-nowrap"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Takes 30 seconds &bull; No commitment required
        </motion.p>

      </div>

      {/* Transformations - pinned to bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="relative z-10 w-full pb-6 text-center"
      >
        <p className="text-white/50 text-[10px] sm:text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Real 90 day transformations
        </p>
        <div
          className="w-full overflow-hidden relative"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
        >
          <motion.div
            className="flex gap-4 sm:gap-8"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((id, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-20 sm:w-32 md:w-36 rounded-lg overflow-hidden border border-white/5 opacity-60"
                style={{ aspectRatio: '1/1' }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/transformation-${id}.png`}
                  alt={`Client transformation ${id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
