import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CharacterTransition from './components/CharacterTransition';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent selection:bg-cozy-lavender select-none">
      {/* Sticky Top Navigation */}
      <Navbar />
      
      {/* Content Layout Sections */}
      <main className="flex-grow">
        <Hero />
        <CharacterTransition />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      
      {/* Footer Details */}
      <Footer />
    </div>
  );
}
