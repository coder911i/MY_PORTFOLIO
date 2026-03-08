import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { LiquidShape } from "./LiquidShape";

export function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-black"
        >
            {/* Intense Glowing Orbs behind the 3D shape matching inspirations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff0055]/30 blur-[150px] rounded-full pointer-events-none z-0 animate-pulse" />
            <div className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6b21a8]/30 blur-[130px] rounded-full pointer-events-none z-0" />

            {/* 3D Liquid Geometry Canvas */}
            <div className="absolute right-0 md:right-[15%] top-[20%] md:top-[10%] w-[120vw] md:w-[600px] h-[600px] pointer-events-none z-0 mix-blend-screen overflow-visible">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <LiquidShape />
                </Canvas>
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center mt-12 md:mt-0">

                {/* Typographic Block */}
                <div className="w-full md:w-3/5 text-left z-10">

                    {/* Minimal glowing badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff0055]/30 bg-[#ff0055]/5 mb-8 backdrop-blur-md"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#ff0055] animate-pulse shadow-[0_0_8px_#ff0055]" />
                        <span className="text-[#ff0055] text-xs font-semibold tracking-widest uppercase">Available for Hire</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-white leading-[1.1]"
                    >
                        Tanishq <br /> Sharma
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-2xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 mb-8 max-w-xl leading-snug"
                    >
                        Building intelligent AI systems and scalable backend architectures.
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-lg text-gray-400 font-light max-w-md mb-10"
                    >
                        Engineering premium software platforms. Systems Developer & AI Applications Architect.
                    </motion.p>

                    {/* Solid Neon Buttons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-[#ff0055] hover:bg-[#ff0055]/80 text-white rounded-full font-bold transition-all text-sm tracking-wide border-neon hover:scale-105 active:scale-95"
                        >
                            Start Exploring
                        </button>
                        <button
                            onClick={() => window.open('/resume.pdf', '_blank')}
                            className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/60 hover:bg-white/5 text-white rounded-full font-semibold transition-all text-sm tracking-wide"
                        >
                            View Resume
                        </button>
                    </motion.div>
                </div>

            </div>

            {/* Extreme fade to completely pure black */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
        </section>
    );
}
