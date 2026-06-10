import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import InfoGrid from './components/InfoGrid';
import Gallery from './components/Gallery';
import NoticeAndTestimonials from './components/NoticeAndTestimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <InfoGrid />
        <Gallery />
        <NoticeAndTestimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;
