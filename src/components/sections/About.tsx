import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section id="about" className="relative overflow-hidden pt-24 pb-24">
      {/* Decorative pink wave lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <path d="M-50,80 C200,-20 400,180 700,80 S1100,-20 1500,130" fill="none" stroke="#ec4899" strokeWidth="2.5" opacity="0.18" />
        <path d="M-50,150 C200,50 400,250 700,150 S1100,50 1500,200" fill="none" stroke="#f472b6" strokeWidth="2" opacity="0.15" />
        <path d="M-50,300 C150,200 350,400 650,280 S1050,180 1500,350" fill="none" stroke="#ec4899" strokeWidth="2" opacity="0.14" />
        <path d="M-50,420 C200,340 420,520 720,400 S1080,300 1500,450" fill="none" stroke="#f9a8d4" strokeWidth="1.5" opacity="0.12" />
        <path d="M-50,500 C250,400 450,600 750,480 S1150,380 1500,520" fill="none" stroke="#f472b6" strokeWidth="2" opacity="0.13" />
        <path d="M-50,620 C180,540 400,720 700,600 S1100,500 1500,650" fill="none" stroke="#ec4899" strokeWidth="1.5" opacity="0.11" />
        <path d="M-50,700 C300,600 500,800 800,680 S1200,560 1500,720" fill="none" stroke="#f9a8d4" strokeWidth="2.5" opacity="0.16" />
        <path d="M-50,800 C250,720 470,880 770,770 S1150,670 1500,830" fill="none" stroke="#ec4899" strokeWidth="2" opacity="0.12" />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight font-serif text-primary">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg italic" style={{ color: '#ffe7fd' }}>
              I will guide you to become the Princess you are meant to be
            </p>
          </motion.div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start">
          {/* Left side image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-3/5 mx-auto lg:mx-0 lg:w-2/5 lg:-ml-60 relative shrink-0 lg:mt-16"
          >
            {/* Pink aura glow behind figure */}
            <div
              className="absolute inset-0 z-0 hidden lg:block"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(236,72,153,0.3) 0%, rgba(244,114,182,0.15) 30%, rgba(249,168,212,0.05) 55%, transparent 70%)',
                filter: 'blur(40px)',
                transform: 'scale(1.1)',
              }}
            />
            <div className="relative">
              <img
                src="/images/karina-about.png"
                alt="Karina Padden"
                className="w-full h-auto object-cover lg:scale-100 origin-bottom relative z-10"
              />
              {/* Fade bottom of figure */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 z-20 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #0a0a0a)' }} />
            </div>
          </motion.div>

          {/* Right side content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 px-2"
          >
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-primary mb-1 text-center lg:text-left">Karina Padden</h3>
              <h4 className="text-lg md:text-xl text-primary font-medium mb-6 italic text-center lg:text-left">The Protein Princess</h4>

              <div className="space-y-4 md:space-y-5 leading-relaxed mb-8 relative text-sm md:text-base" style={{ color: '#ffe7fd' }}>
                <p>
                  Growing up, I was active with swimming, but I always hated working out at the gym or in PE classes at school. If I was asked to run or just move around, I did everything I could to avoid it. When I was struggling mentally, my psychologist advised me to get active. I remember thinking: "What a load of nonsense, how is a walk going to help with depression?" I hate to break it to you, but it actually ended up saving me.
                </p>

                <p>
                  My fitness journey on my own initiative began around 2014, when I was just a student still in elementary school. I felt bigger than the other kids and was picked on for being bigger. This led to me developing an extremely unhealthy relationship with food and body image. I struggled with this for many years in secret. Later on I decided to take control back in my own hands. That's when I fell in love with strength training and discovered the joy of building both muscles and confidence. It was a transformation that not only changed my body, but my entire approach to life.
                </p>

                <p>
                  I'm very passionate about the fact that exercise doesn't just change the body, but also the mind. Training has been what made me who I am today, and it has helped me develop in all areas of life. That's why I want to help others achieve the same.
                </p>

                <p>
                  With my background as a certified personal trainer and nutrition coach, I understand that every woman is unique. My personal experiences make it easier to relate to clients, as I have been there myself. Binge-eating, under-eating, fasting, keto, YOU NAME IT. I want you to stop feeling confused and lost, and to start feeling like the princess you are! Together we will build you up so that you too can feel like a true Princess.
                </p>

                <p>
                  Are you ready to put on your fitness crown and become the strongest version of yourself? Fill out the form below and we'll have a chat about your goals.
                </p>

                <p>
                  I look forward to getting to know you, talk soon!
                </p>

              </div>
              
              <div className="mt-10">
                {/* Credentials */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
                  <a href="https://activeeducation.global/" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-pink-500/20 rounded-xl p-2 sm:p-5 text-center hover:bg-white/10 hover:border-pink-400/40 transition-all duration-300 group backdrop-blur-sm block">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-pink-500/15 inline-flex items-center justify-center text-pink-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <span className="block text-xs sm:text-base font-medium" style={{ color: '#ffe7fd' }}>Educated at Active Education</span>
                  </a>

                  <div className="bg-white/5 border border-pink-500/20 rounded-xl p-2 sm:p-5 text-center hover:bg-white/10 hover:border-pink-400/40 transition-all duration-300 group backdrop-blur-sm">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-pink-500/15 inline-flex items-center justify-center text-pink-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" />
                      </svg>
                    </div>
                    <span className="block text-xs sm:text-base font-medium" style={{ color: '#ffe7fd' }}>Certified Personal Trainer</span>
                  </div>

                  <div className="bg-white/5 border border-pink-500/20 rounded-xl p-2 sm:p-5 text-center hover:bg-white/10 hover:border-pink-400/40 transition-all duration-300 group backdrop-blur-sm">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-pink-500/15 inline-flex items-center justify-center text-pink-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="block text-xs sm:text-base font-medium" style={{ color: '#ffe7fd' }}>Certified Nutrition Coach</span>
                  </div>
                </div>

                <div className="inline-block text-center lg:text-left w-full lg:w-auto">
                  <button onClick={() => { navigate('/'); setTimeout(() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 500); }} className="relative inline-flex items-center gap-2 px-10 py-4 sm:px-12 sm:py-5 text-lg sm:text-xl rounded-full border border-pink-500/40 text-pink-300 font-medium overflow-hidden group hover:border-pink-400/60 hover:translate-y-[-2px] transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10 cursor-pointer">
                    <span className="relative z-10">Get In Touch</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 duration-300 relative z-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 