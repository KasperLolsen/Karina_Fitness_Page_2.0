import React from 'react';
import { motion } from 'framer-motion';

const resources = [
  {
    title: "Nutrition 101 Guide",
    description: "A collection of my favourite high protein recipes to fuel your training and keep you feeling satisfied.",
    image: "/images/nutrition.jpg",
    link: "https://the-protein-princess.kit.com/nutrition",
  },
  {
    title: "Volume Eating",
    description: "Learn how to eat more food for fewer calories while staying full and satisfied.",
    image: "/images/volume-eating.png",
    link: "https://the-protein-princess.kit.com/volume",
  },
  {
    title: "Coming Soon...",
    description: "Stay tuned for more free resources!",
    image: null,
    link: "#",
  },
];

const FreeResources: React.FC = () => {
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
              Free Resources
            </h2>
            <p className="max-w-2xl mx-auto text-lg italic" style={{ color: '#ffe7fd', fontFamily: 'Montserrat, sans-serif' }}>
              Tools and guides to kickstart your fitness journey with no cost.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {resources.map((resource, index) => (
            <motion.a
              key={index}
              href={resource.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`bg-white/5 border border-pink-500/20 rounded-xl text-center hover:bg-white/10 hover:border-pink-400/40 transition-all duration-300 group backdrop-blur-sm hover:translate-y-[-4px] w-full overflow-hidden ${resource.image ? 'pb-8' : 'p-8'}`}
            >
              {resource.image ? (
                <div className="w-full mb-5 rounded-lg overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="w-14 h-14 rounded-full bg-pink-500/15 inline-flex items-center justify-center text-pink-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 11.293a1 1 0 101.414 1.414l2-2A1 1 0 0011 10V7z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
              <div className="px-6">
                <h3 className="text-xl font-bold text-primary mb-3 uppercase" style={{ fontFamily: 'Sequel, sans-serif' }}>
                  {resource.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#ffe7fd', fontFamily: 'Montserrat, sans-serif' }}>
                  {resource.description}
                </p>
                {resource.link !== "#" && (
                  <span className="inline-flex items-center gap-2 text-pink-400 text-sm font-medium group-hover:gap-3 transition-all duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Download Free
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </div>

        {/* YouTube Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="relative w-full rounded-xl overflow-hidden border border-pink-500/20" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Gyi7XjyJK8M"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center mt-6 text-lg font-medium" style={{ color: '#ffe7fd', fontFamily: 'Montserrat, sans-serif' }}>
            Subscribe to my YouTube channel!
          </p>
        </motion.div>
        </div>
    </section>
  );
};

export default FreeResources;
