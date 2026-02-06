import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { href: "#home", label: "Home", isRoute: false },
    { href: "/about", label: "About", isRoute: true },
    { href: "#services", label: "Services", isRoute: false },
    { href: "#contact", label: "Contact", isRoute: false }
  ];

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const handleMobileNavClick = (item: typeof navItems[0]) => {
    setIsMenuOpen(false);

    if (item.isRoute) {
      navigate(item.href);
      return;
    }

    const targetId = item.href.replace('#', '');

    if (!isHomePage) {
      // Navigate home first, then scroll after page loads
      navigate('/');
      setTimeout(() => {
        if (targetId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
      return;
    }

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled
        ? 'bg-black/95 backdrop-blur-sm py-3 shadow-lg shadow-black/5'
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-[120]"
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
            item.isRoute ? (
              <Link
                key={index}
                to={item.href}
                className={`
                  font-light text-sm tracking-wider uppercase hover:text-primary transition-all duration-300
                  relative group ${isScrolled ? 'text-white/90 hover:text-white' : 'text-white/90 hover:text-white'}
                `}
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full opacity-70"></span>
              </Link>
            ) : (
              <a
                key={index}
                href={isHomePage ? item.href : `/${item.href}`}
                className={`
                  font-light text-sm tracking-wider uppercase hover:text-primary transition-all duration-300
                  relative group ${isScrolled ? 'text-white/90 hover:text-white' : 'text-white/90 hover:text-white'}
                `}
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full opacity-70"></span>
              </a>
            )
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
            className="md:hidden p-2 rounded-full transition-colors focus:outline-none relative z-[120] text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-black/95 z-[110] flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col space-y-8 items-center text-center">
              {navItems.map((item, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="font-light text-white text-2xl tracking-wider hover:text-primary transition-all duration-300 touch-manipulation py-3 px-8"
                  onClick={() => handleMobileNavClick(item)}
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                className="mt-4 inline-flex items-center justify-center px-8 py-3 font-light text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 touch-manipulation"
                onClick={() => handleMobileNavClick({ href: "#contact", label: "Contact", isRoute: false })}
              >
                <span>Book Consultation</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
