import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Simple Pink Divider */}
        <div className="py-16 bg-gradient-to-r from-white via-primary/40 to-white">
          <div className="container mx-auto flex justify-center">
            <div className="w-32 h-3 bg-primary rounded-full shadow-md"></div>
          </div>
        </div>
        
        {/* About Section */}
        <section id="about" className="section">
          <About />
        </section>
        
        {/* Simple Pink Divider */}
        <div className="py-16 bg-gradient-to-r from-white via-primary/40 to-white">
          <div className="container mx-auto flex justify-center">
            <div className="w-32 h-3 bg-primary rounded-full shadow-md"></div>
          </div>
        </div>
        
        {/* Services Section */}
        <section id="services" className="section">
          <Services />
        </section>
        
        {/* Simple Pink Divider */}
        <div className="py-16 bg-gradient-to-r from-white via-primary/40 to-white">
          <div className="container mx-auto flex justify-center">
            <div className="w-32 h-3 bg-primary rounded-full shadow-md"></div>
          </div>
        </div>
        
        {/* Contact Section */}
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
