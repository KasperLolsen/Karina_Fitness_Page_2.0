import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-black p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group border-b-4 border-primary/70 hover:border-primary"
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

interface ImageServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  delay?: number;
  icon?: React.ReactNode;
  imageObjectPosition?: string;
}

const ImageServiceCard: React.FC<ImageServiceCardProps> = ({ title, description, imageSrc, icon, delay = 0, imageObjectPosition = 'center 20%' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-black overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group relative h-96"
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
      <img 
        src={`${process.env.PUBLIC_URL}/${imageSrc}`} 
        alt={title}
        className="w-full h-full object-cover object-center absolute inset-0 brightness-110"
        style={{ objectPosition: imageObjectPosition }}
      />
      <div className="relative z-20 p-8 h-full flex flex-col justify-end">
        {icon && (
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 text-white group-hover:bg-primary group-hover:text-white transition-all duration-300">
            {icon}
          </div>
        )}
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300 uppercase" style={{ fontFamily: "'Sequel', sans-serif" }}>{title}</h3>
        <p className="text-white/95 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="relative overflow-hidden pt-8 pb-24 md:pt-24">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-wide uppercase" style={{ fontFamily: "'Sequel', sans-serif", color: '#ffe7fd' }}>Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg font-light uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Customized services I offer to future princesses
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          <ImageServiceCard
            title="1:1 COACHING"
            description="For princesses who want support, guidance and help creating sustainable training plans tailored to specific goals."
            imageSrc="images/online-coaching.jpg"
            imageObjectPosition="center 40%"
            delay={0.1}
          />
          
          <ImageServiceCard
            title="Nutrition Planning"
            description="For princesses who want support, guidance and help creating sustainable meal plans tailored to specific goals."
            imageSrc="images/nutrition.jpg"
            delay={0.2}
          />
          
          <ImageServiceCard
            title="Buy Program"
            description="Pre-made training program as a more affordable alternative to coaching. One-time payment, no commitment or subscription."
            imageSrc="images/buy-program.jpg"
            delay={0.3}
          />
        </div>
        
      </div>
    </section>
  );
};

export default Services; 