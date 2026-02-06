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

        {/* Contact Section */}
        <section id="contact" className="section">
          <Contact />
        </section>

        {/* Services Section */}
        <section id="services" className="section">
          <Services />
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
