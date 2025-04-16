import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group border-b-4 border-primary/70 hover:border-primary"
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
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-white/95 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="relative overflow-hidden pt-24 pb-24">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight text-primary">Tjenester</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg font-light">
              Tilpassede tjenester jeg tilbyr til fremtidige prinsesser
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          <ImageServiceCard
            title="Online coaching"
            description="For prinsesser som ønsker støtte, veiledning og hjelp til å lage bærekraftige treningsplaner tilrettelagt for spesifikke mål."
            imageSrc="images/IMG_3279.jpeg"
            imageObjectPosition="center 40%"
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
              </svg>
            }
            delay={0.1}
          />
          
          <ImageServiceCard
            title="Kostholdsplanlegging"
            description="For prinsesser som ønsker støtte, veiledning og hjelp til å lage bærekraftige matplaner tilrettelagt for spesifikke mål."
            imageSrc="images/IMG_6252.jpeg"
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 6c0-1.1.9-2 2-2h10a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm0 6c0-1.1.9-2 2-2h10a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm4 4a1 1 0 011-1h6a1 1 0 110 2H8a1 1 0 01-1-1z" />
              </svg>
            }
            delay={0.2}
          />
          
          <ImageServiceCard
            title="Kjøp Program"
            description="Ferdig laget treningsprogram som et billigere alternativ til coaching. Engangsbetaling, ingen binding eller abonnement."
            imageSrc="images/C0349T01.jpeg"
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1z" clipRule="evenodd" />
                <path d="M12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" />
              </svg>
            }
            delay={0.3}
          />
        </div>
        
        <div className="text-center mt-16 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a href="#contact" className="btn btn-primary text-lg px-8 py-4 hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300">Bli en Protein Prinsesse!</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services; 