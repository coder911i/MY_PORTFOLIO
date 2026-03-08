import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";
import { AiProducts } from "./components/sections/AiProducts";
import { Architecture } from "./components/sections/Architecture";
import { TechGraph } from "./components/sections/TechGraph";
import { Resume } from "./components/sections/Resume";
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
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) }}>
      <div className="min-h-screen font-sans selection:bg-[#ff0055]/30 selection:text-white bg-black">

        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff0055] via-[#6b21a8] to-[#ff0055] origin-left z-[100]"
          style={{ scaleX }}
        />

        {/* Global cursor glow */}
        <div
          className="fixed inset-0 pointer-events-none z-0 hidden md:block"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,0,85,0.04), transparent 40%)`
          }}
        />

        <Navbar />

        <GlowArea className="relative z-10 flex flex-col w-full">
          <Hero />

          <div className="w-full max-w-[1400px] mx-auto pb-32 px-0">
            <About />
            <TechGraph />
            <Skills />
            <Projects />
            <AiProducts />
            <Architecture />
            <Resume />
            <Experience />
            <Contact />
          </div>
        </GlowArea>

        <footer className="py-10 text-center relative z-10 border-t border-white/5">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Tanishq Sharma · Backend Engineer · AI Systems Builder</p>
          <p className="text-xs text-gray-800 mt-2">Handcrafted with React, Three.js & Framer Motion</p>
        </footer>
      </div>
    </ReactLenis>
  );
}

export default App;
