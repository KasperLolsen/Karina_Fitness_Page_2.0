import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="relative overflow-hidden pt-24 pb-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight font-serif text-purple-900">
              Om <span className="text-pink-500">Meg</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg italic">
              Din royale guide til styrke, balanse og prinsesse-energi
            </p>
          </motion.div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left side content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-3/5"
          >
            <div className="relative">
              <div className="absolute top-0 left-0 w-10 h-10 -translate-x-6 -translate-y-6">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-pink-300 opacity-70">
                  <path d="M4.5 2v2.5H2v2h2.5V9h2V6.5H9v-2H6.5V2h-2zm15.5 0v2.5H17v2h2.5V9h2V6.5H24v-2h-2.5V2h-2zM4.5 15v2.5H2v2h2.5V22h2v-2.5H9v-2H6.5V15h-2zm15.5 0v2.5H17v2h2.5V22h2v-2.5H24v-2h-2.5V15h-2z" fill="currentColor" />
                </svg>
              </div>
              
              <h3 className="text-3xl font-bold font-serif text-purple-900 mb-1">Karina Padden</h3>
              <h4 className="text-xl text-pink-500 font-medium mb-6 italic">The Protein Princess</h4>
              
              <div className="space-y-5 text-gray-700 leading-relaxed mb-8 relative">
                <p>
                  Velkommen til mitt kongelige rike av styrke og selvutvikling. Som din Protein Princess er min lidenskap å hjelpe kvinner til å oppdage sin egen indre styrke – både fysisk og mentalt.
                </p>
                
                <p>
                  Min reise begynte i 2021 da jeg forelsket meg i styrketrening og oppdaget gleden ved å bygge både muskler og selvtillit. Det var en transformasjon som forandret ikke bare kroppen min, men hele min tilnærming til livet.
                </p>
                
                <p>
                  Med min bakgrunn som sertifisert personlig trener og kostholdsveileder forstår jeg at hver kvinne er unik. Jeg tror på å skape et treningsrike der du føler deg som den prinsessen du er – sterk, målbevisst og strålende.
                </p>
                
                <p className="italic border-l-4 border-pink-300 pl-5 py-1">
                  Sammen skal vi bygge din prinsesse-kraft gjennom skreddersydde treningsprogrammer, næringsfull mat og et støttende fellesskap. Er du klar for å ta på deg din treningskrone og bli den sterkeste versjonen av deg selv?
                </p>
                
                <div className="absolute -bottom-4 right-0 w-16 h-16 translate-x-6 translate-y-6">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-pink-300 opacity-70">
                    <path d="M4.5 2v2.5H2v2h2.5V9h2V6.5H9v-2H6.5V2h-2zm15.5 0v2.5H17v2h2.5V9h2V6.5H24v-2h-2.5V2h-2zM4.5 15v2.5H2v2h2.5V22h2v-2.5H9v-2H6.5V15h-2zm15.5 0v2.5H17v2h2.5V22h2v-2.5H24v-2h-2.5V15h-2z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              
              {/* Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-pink-50 border border-pink-100 rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-white inline-flex items-center justify-center text-pink-500 mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <span className="block font-medium text-purple-900">Utdannet ved Active education</span>
                </div>
                
                <div className="bg-pink-50 border border-pink-100 rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-white inline-flex items-center justify-center text-pink-500 mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" />
                    </svg>
                  </div>
                  <span className="block font-medium text-purple-900">Sertifisert Personlig trener</span>
                </div>
                
                <div className="bg-pink-50 border border-pink-100 rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-white inline-flex items-center justify-center text-pink-500 mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="block font-medium text-purple-900">Sertifisert Kostholdsveileder</span>
                </div>
              </div>
              
              <div className="inline-block">
                <a href="#contact" className="relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-white font-medium overflow-hidden shadow-md group hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300">
                  <span className="relative z-10">Ta Kontakt</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Right side image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-2/5"
          >
            <div className="relative">
              {/* Crown decoration */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 text-pink-400">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L9 9H2l5.5 4L5 20l7-5 7 5-2.5-7L22 9h-7z"/>
                </svg>
              </div>
              
              {/* Decorative frame */}
              <div className="relative group">
                {/* Decorative background */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-pink-200 via-pink-100 to-purple-200 rounded-xl blur opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-300"></div>
                
                {/* Main image */}
                <div className="relative overflow-hidden rounded-xl border-8 border-white shadow-xl">
                  <img 
                    src="/images/IMG_3526.jpeg" 
                    alt="Karina Padden" 
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
                    }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-70"></div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-8 h-8 text-pink-300">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 