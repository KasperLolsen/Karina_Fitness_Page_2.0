import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";
import AboutPage from "./pages/AboutPage";

function HomePage() {
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
