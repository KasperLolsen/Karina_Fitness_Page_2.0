import React from 'react';
import { motion } from 'framer-motion';

const programs = [
  {
    title: "March 1st",
    description: "Launching March 1st! Stay tuned.",
    image: null,
    link: "#",
    featured: true,
  },
  {
    title: "Coming Soon...",
    description: "Stay tuned for more programs!",
    image: null,
    link: "#",
    featured: false,
  },
  {
    title: "Coming Soon...",
    description: "Stay tuned for more programs!",
    image: null,
    link: "#",
    featured: false,
  },
];

const Programs: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-24">
      {/* Decorative pink wave lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <path d="M-50,80 C200,-20 400,180 700,80 S1100,-20 1500,130" fill="none" stroke="#ec4899" strokeWidth="2.5" opacity="0.18" />
        <path d="M-50,150 C200,50 400,250 700,150 S1100,50 1500,200" fill="none" stroke="#f472b6" strokeWidth="2" opacity="0.15" />
        <path d="M-50,300 C150,200 350,400 650,280 S1050,180 1500,350" fill="none" stroke="#ec4899" strokeWidth="2" opacity="0.14" />
        <path d="M-50,500 C250,400 450,600 750,480 S1150,380 1500,520" fill="none" stroke="#f472b6" strokeWidth="2" opacity="0.13" />
        <path d="M-50,700 C300,600 500,800 800,680 S1200,560 1500,720" fill="none" stroke="#f9a8d4" strokeWidth="2.5" opacity="0.16" />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight text-primary uppercase" style={{ fontFamily: 'Sequel, sans-serif' }}>
              Programs
            </h2>
            <p className="max-w-2xl mx-auto text-lg italic" style={{ color: '#ffe7fd', fontFamily: 'Montserrat, sans-serif' }}>
              Training programs designed to help you reach your goals.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`rounded-xl text-center transition-all duration-300 group backdrop-blur-sm hover:translate-y-[-4px] w-full overflow-hidden p-8 ${
                program.featured
                  ? 'bg-gradient-to-br from-pink-500/20 to-pink-600/10 border-2 border-pink-400/60 shadow-lg shadow-pink-500/20 scale-105'
                  : 'bg-white/5 border border-pink-500/20 hover:bg-white/10 hover:border-pink-400/40'
              }`}
            >
              <div className={`w-14 h-14 rounded-full inline-flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ${
                program.featured
                  ? 'bg-pink-500/30 text-pink-300'
                  : 'bg-pink-500/15 text-pink-400'
              }`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 11.293a1 1 0 101.414 1.414l2-2A1 1 0 0011 10V7z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="px-6">
                <h3 className={`font-bold mb-3 uppercase ${
                  program.featured ? 'text-2xl text-pink-300' : 'text-xl text-primary'
                }`} style={{ fontFamily: 'Sequel, sans-serif' }}>
                  {program.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#ffe7fd', fontFamily: 'Montserrat, sans-serif' }}>
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
