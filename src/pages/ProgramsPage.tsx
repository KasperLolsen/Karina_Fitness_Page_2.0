import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Programs from '../components/sections/Programs';

const ProgramsPage: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main className="pt-20">
        <Programs />
      </main>
      <Footer />
    </div>
  );
};

export default ProgramsPage;
