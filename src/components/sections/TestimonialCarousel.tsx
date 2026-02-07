import React, { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { image: "/images/testimonial-1.png", alt: "Personal win - active lifestyle transformation" },
  { image: "/images/testimonial-2.png", alt: "Personal win - bikini fitness championship" },
  { image: "/images/testimonial-3.png", alt: "Client win - 3 months coaching results front" },
  { image: "/images/testimonial-4.png", alt: "Client win - 3 months coaching results side" },
  { image: "/images/testimonial-5.jpg", alt: "Client win - 3 months coaching before and after" },
];

const n = testimonials.length;

const positionConfig: Record<number, { x: string; scale: number; opacity: number; z: number }> = {
  [-3]: { x: '-195%', scale: 0.45, opacity: 0,    z: 1 },
  [-2]: { x: '-130%', scale: 0.55, opacity: 0.2,  z: 2 },
  [-1]: { x: '-62%',  scale: 0.75, opacity: 0.5,  z: 3 },
  [0]:  { x: '0%',    scale: 1,    opacity: 1,    z: 4 },
  [1]:  { x: '62%',   scale: 0.75, opacity: 0.5,  z: 3 },
  [2]:  { x: '130%',  scale: 0.55, opacity: 0.2,  z: 2 },
  [3]:  { x: '195%',  scale: 0.45, opacity: 0,    z: 1 },
};

const getOffset = (index: number, active: number) => {
  let diff = index - active;
  // Wrap to range [-n/2, n/2] for shortest path
  while (diff > n / 2) diff -= n;
  while (diff < -n / 2) diff += n;
  return diff;
};

const TestimonialCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);

  const paginate = (direction: number) => {
    setActiveIndex(prev => ((prev + direction) % n + n) % n);
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-wide uppercase text-primary" style={{ fontFamily: "'Sequel', sans-serif" }}>
            Transformations
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Real results from real people
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto h-[420px] sm:h-[480px] md:h-[550px]">
          <div
            className="relative w-full h-full"
            onTouchStart={(e) => setDragStartX(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              const diff = dragStartX - e.changedTouches[0].clientX;
              if (Math.abs(diff) > 50) paginate(diff > 0 ? 1 : -1);
            }}
          >
            {testimonials.map((item, index) => {
              const offset = getOffset(index, activeIndex);
              if (offset < -3 || offset > 3) return null;
              const config = positionConfig[offset];
              return (
                <motion.div
                  key={index}
                  className="absolute top-0 left-1/2 w-[55%] sm:w-[50%] md:w-[40%]"
                  style={{ cursor: offset === 0 ? 'default' : 'pointer' }}
                  animate={{
                    x: `calc(${config.x} - 50%)`,
                    scale: config.scale,
                    opacity: config.opacity,
                    zIndex: config.z,
                  }}
                  transition={{ type: 'tween', duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  onClick={() => {
                    if (offset !== 0) paginate(offset > 0 ? 1 : -1);
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-auto rounded-2xl select-none"
                    draggable={false}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Arrow buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-all z-10"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-all z-10"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
