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
          <h2 className="text-xl md:text-2xl font-bold text-center mb-4 tracking-wide uppercase" style={{ fontFamily: "'Sequel', sans-serif", color: '#ffe7fd' }}>
            Become a better version of yourself
          </h2>
          <p className="text-sm text-gray-600 text-center mb-12 max-w-2xl mx-auto uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            I want to know how I can help YOU best. Tell me a little about yourself and your goals!
          </p>

          <div className="relative">
            {/* Subtle shadow and border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-2xl blur-md"></div>

            <div className="relative p-8 md:p-10 rounded-xl shadow-xl" style={{ backgroundColor: '#ffe7fd' }}>
              <CardQuestionnaire />
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 