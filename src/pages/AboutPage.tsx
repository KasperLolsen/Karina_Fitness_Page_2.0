import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import About from '../components/sections/About';

const AboutPage: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
