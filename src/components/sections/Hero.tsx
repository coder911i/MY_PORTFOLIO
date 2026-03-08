import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";

const roles = [
    "Backend Engineer",
    "Systems Developer",
    "AI Systems Builder",
    "Distributed Systems Enthusiast"
];

const introText = "Hi, I'm Tanishq Sharma — a backend engineer building scalable systems and intelligent software.";

export function Hero() {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    useEffect(() => {
        const roleInterval = setInterval(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(roleInterval);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
            {/* Background Particles/Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full opacity-50 mix-blend-screen" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 blur-[100px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[100px] rounded-full mix-blend-screen" />

                {/* Subtle grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* Glow Tag */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-flex glass-card px-4 py-2 rounded-full mb-8 border border-primary/30 shadow-[0_0_15px_rgba(0,242,254,0.15)]"
                >
                    <span className="text-sm tracking-widest text-primary uppercase font-semibold">Ready to build</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-6xl md:text-8xl font-bold tracking-tight mb-6"
                >
                    Tanishq Sharma
                </motion.h1>

                {/* Rotating Roles */}
                <div className="h-12 md:h-16 mb-8 overflow-hidden relative w-full flex justify-center items-center">
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={currentRoleIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl md:text-4xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 absolute"
                        >
                            {roles[currentRoleIndex]}
                        </motion.h2>
                    </AnimatePresence>
                </div>

                {/* Typing Intro */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-lg md:text-2xl text-muted max-w-2xl mb-6 leading-relaxed"
                >
                    {introText.split('').map((char, index) => (
                        <motion.span
                            key={`${char}-${index}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.05, delay: 1 + index * 0.03 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.p>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3.5 }}
                    className="text-base text-gray-500 max-w-xl mb-12"
                >
                    Building scalable backend infrastructure, intelligent platforms, and real-world software systems.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3.8 }}
                    className="flex flex-wrap justify-center gap-6"
                >
                    <Button size="lg" className="rounded-full px-8 text-lg font-semibold h-14" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                        View Projects
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full px-8 text-lg glass h-14" onClick={() => window.open('/resume.pdf', '_blank')}>
                        Download Resume
                    </Button>
                    <Button size="lg" variant="glass" className="rounded-full px-8 text-lg h-14" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Contact Me
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
