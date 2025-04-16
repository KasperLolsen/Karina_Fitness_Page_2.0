import React from 'react';
import { motion } from 'framer-motion';
import CardQuestionnaire from './CardQuestionnaire';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative overflow-hidden pt-24 pb-24">
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            👑 Bli en bedre versjon av deg selv👑
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Jeg vil vite hvordan JEG kan hjelpe DEG best mulig. Fortell meg litt om deg selv og dine mål!
          </p>
          
          <div className="relative">
            {/* Subtle shadow and border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-2xl blur-md"></div>
            
            <div className="relative bg-white p-8 md:p-10 rounded-xl shadow-xl">
              <CardQuestionnaire />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 