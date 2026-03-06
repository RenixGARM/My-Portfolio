import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SelectedWork from './components/SelectedWork';
import TheProcess from './components/TheProcess';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';
import Experience from './components/Experience';
import ParticlesBackground from './components/ParticlesBackground';
import CookieBanner from './components/CookieBanner';

import { Routes, Route } from 'react-router-dom';
import AvisoLegal from './pages/AvisoLegal';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import PoliticaCookies from './pages/PoliticaCookies';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <ParticlesBackground />
      <CustomCursor />
      <Navbar />
      <Hero />
      <SelectedWork />
      <Experience />
      <Services />
      <TheProcess />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/politica-cookies" element={<PoliticaCookies />} />
      </Routes>
      <CookieBanner />
    </>
  );
}

export default App;
