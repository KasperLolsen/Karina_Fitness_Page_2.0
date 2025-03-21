import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import LiftApp from "./components/sections/LiftApp";
import GluteGuide from "./components/sections/GluteGuide";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <section id="about" className="section section-light">
          <About />
        </section>
        
        {/* Services Section */}
        <section id="services" className="section section-dark">
          <Services />
        </section>
        
        {/* Programs Section */}
        <section id="lift-app" className="section section-light">
          <LiftApp />
        </section>
        
        {/* Guide Section */}
        <section id="glute-guide" className="section section-dark">
          <GluteGuide />
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="section section-light">
          <Testimonials />
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="section section-dark">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
