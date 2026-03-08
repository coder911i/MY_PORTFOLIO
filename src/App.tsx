import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { AchievementsAndResume } from "./components/sections/Achievements";
import { Contact } from "./components/sections/Contact";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white font-sans">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-indigo-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Cursor Glow Interaction (Desktop only) */}
      <div
        className="fixed inset-0 pointer-events-none z-0 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,242,254,0.06), transparent 40%)`
        }}
      />

      {/* Grain Overlay for premium texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] z-[100] mix-blend-overlay" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')" }}></div>

      <Navbar />

      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <AchievementsAndResume />
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm text-gray-500 border-t border-white/5 relative z-10 bg-black/60">
        <p>© {new Date().getFullYear()} Tanishq Sharma. Designed & Engineered with Precision.</p>
      </footer>
    </div>
  );
}

export default App;
