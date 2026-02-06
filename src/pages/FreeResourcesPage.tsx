import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FreeResources from '../components/sections/FreeResources';

const FreeResourcesPage: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main className="pt-20">
        <FreeResources />
      </main>
      <Footer />
    </div>
  );
};

export default FreeResourcesPage;
