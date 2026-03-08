import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";
import { AiProducts } from "./components/sections/AiProducts";
import { Architecture } from "./components/sections/Architecture";
import { TechStack } from "./components/sections/TechStack";
import { GlowArea } from "./components/ui/GlowArea";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ReactLenis } from 'lenis/react';

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
    <ReactLenis root options={{
      lerp: 0.05,
      duration: 1.5,
      smoothWheel: true
    }}>
      <div className="min-h-screen font-sans selection:bg-primary/30 selection:text-white">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-indigo-400 origin-left z-[100]"
          style={{ scaleX }}
        />

        {/* Global Cursor Glow Background */}
        <div
          className="fixed inset-0 pointer-events-none z-0 hidden md:block transition-opacity duration-300"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.03), transparent 40%)`
          }}
        />

        {/* Noise Overlay Texture */}
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.02] z-[100] mix-blend-overlay"
          style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')" }}
        />

        <Navbar />

        <GlowArea className="relative z-10 flex flex-col w-full">
          <Hero />
          <div className="w-full max-w-[1400px] mx-auto space-y-32 pb-32">
            <About />
            <Skills />
            <Projects />
            <AiProducts />
            <Architecture />
            <TechStack />
            <Experience />
            <Contact />
          </div>
        </GlowArea>

        <footer className="py-8 text-center text-sm text-muted border-t border-white/5 relative z-10 bg-black/20 backdrop-blur-md">
          <p>© {new Date().getFullYear()} Tanishq Sharma. Designed & Engineered with Precision.</p>
        </footer>
      </div>
    </ReactLenis>
  );
}

export default App;
