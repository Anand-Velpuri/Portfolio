import { useState, useEffect } from 'react';
import SmoothScroll from './components/ui/SmoothScroll';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import HuggingFace from './components/sections/HuggingFace';
import Wins from './components/sections/Wins';
import Content from './components/sections/Content';
import Footer from './components/layout/Footer';
import IntroVideo from './components/ui/IntroVideo';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setShowIntro(false);
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem('hasSeenIntro', 'true');
    setShowIntro(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <CustomCursor />
      {showIntro && <IntroVideo onComplete={handleIntroComplete} />}
      <SmoothScroll>
      <Navbar />
      <main className="relative selection:bg-accent selection:text-white">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <HuggingFace />
        <Wins />
        <Content />
      </main>
      <Footer />
      </SmoothScroll>
    </>
  );
}

export default App;