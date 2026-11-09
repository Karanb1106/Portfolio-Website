import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import CodingStats from './components/CodingStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App noise-bg">
      <CustomCursor />
      {loading ? (
        <Loader />
      ) : (
        <>
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Achievements />
            <CodingStats />
            <Contact />
          </main>
          <Footer />
        </>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ zIndex: 99999 }}
      />
    </div>
  );
}

export default App;
