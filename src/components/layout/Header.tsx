import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#lift-app", label: "Programs" },
    { href: "#testimonials", label: "Results" },
    { href: "#contact", label: "Contact" }
  ];

  // Handle scroll event to change header style
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm py-3 shadow-lg shadow-black/5' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="z-50"
        >
          <Logo />
        </motion.div>
        
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex space-x-8 items-center"
        >
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className={`
                font-light text-sm tracking-wider uppercase hover:text-primary transition-all duration-300 
                relative group ${isScrolled ? 'text-gray-800' : 'text-white/90 hover:text-white'}
              `}
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full opacity-70"></span>
            </a>
          ))}
        </motion.nav>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a 
            href="#contact" 
            className={`
              hidden md:flex items-center px-6 py-2.5 font-light text-sm tracking-wider uppercase 
              ${isScrolled 
                ? 'text-primary border border-primary hover:bg-primary hover:text-white' 
                : 'text-white border border-white/30 hover:border-white hover:bg-white/10'
              }
              rounded-full transition-all duration-300 hover:shadow-lg
            `}
          >
            <span>Book Consultation</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        
          {/* Mobile menu button */}
          <button 
            className={`
              md:hidden p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40
              ${isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}
            `}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </motion.div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-black/95 z-40 flex flex-col justify-center items-center"
          >
            <div className="w-full max-w-sm mx-auto px-4 py-8">
              <div className="flex flex-col space-y-6 items-center text-center">
                {navItems.map((item, index) => (
                  <motion.a 
                    key={index}
                    href={item.href} 
                    className="font-light text-white text-2xl tracking-wider hover:text-primary transition-all duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={(e) => {
                      // Close the menu
                      setIsMenuOpen(false);
                      
                      // Get the target element
                      const targetId = item.href.replace('#', '');
                      const targetElement = document.getElementById(targetId);
                      
                      // If the target exists, smoothly scroll to it
                      if (targetElement) {
                        e.preventDefault();
                        setTimeout(() => {
                          targetElement.scrollIntoView({ behavior: 'smooth' });
                        }, 300); // Small delay to allow menu to close
                      }
                    }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                
                <motion.a 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                  href="#contact"
                  className="mt-8 inline-flex items-center justify-center px-8 py-3 font-light text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                  onClick={(e) => {
                    // Close the menu
                    setIsMenuOpen(false);
                    
                    // Get the contact section element
                    const contactSection = document.getElementById('contact');
                    
                    // If it exists, smoothly scroll to it
                    if (contactSection) {
                      e.preventDefault();
                      setTimeout(() => {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }, 300); // Small delay to allow menu to close
                    }
                  }}
                >
                  <span>Book Consultation</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 