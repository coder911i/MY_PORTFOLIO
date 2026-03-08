import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore - missing declaration
import * as random from "maath/random/dist/maath-random.esm";

const roles = [
    "Backend Engineer",
    "AI Applications Developer",
    "Systems Builder",
    "Automation Engineer"
];

const introText = "Hi, I'm Tanishq Sharma — building intelligent AI systems and scalable backend software.";

// Three.js Particle Background Component
function ParticleBackground() {
    const ref = useRef<any>(null);
    // generate 5000 random points in a sphere radius of 1.5
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 2 }));

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#38bdf8"
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
}


export function Hero() {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    useEffect(() => {
        const roleInterval = setInterval(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 4000); // 4 seconds
        return () => clearInterval(roleInterval);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background"
        >
            {/* Three.js Environment Background */}
            <div className="absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-60">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <ParticleBackground />
                </Canvas>
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* Glow Tag */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="inline-flex glass-card px-5 py-2 rounded-full mb-8 border border-white/5 shadow-2xl backdrop-blur-3xl"
                >
                    <span className="text-xs md:text-sm tracking-[0.2em] text-gray-300 uppercase font-medium">
                        <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2 animate-pulse shadow-[0_0_10px_#38bdf8]" />
                        Available for Engineering Roles
                    </span>
                </motion.div>

                {/* Large Typography Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} // smooth ease out curve
                    className="text-7xl md:text-9xl font-extrabold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40"
                >
                    Tanishq Sharma
                </motion.h1>

                {/* Animated Rotating Titles */}
                <div className="h-10 md:h-14 mb-10 overflow-hidden relative w-full flex justify-center items-center">
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={currentRoleIndex}
                            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="text-2xl md:text-4xl font-light text-primary absolute tracking-wide"
                        >
                            {roles[currentRoleIndex]}
                        </motion.h2>
                    </AnimatePresence>
                </div>

                {/* Typing Intro */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-lg md:text-2xl text-gray-400 max-w-3xl mb-6 font-light leading-relaxed"
                >
                    {introText.split('').map((char, index) => (
                        <motion.span
                            key={`${char}-${index}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.02, delay: 0.8 + index * 0.02 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.p>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3.5, ease: "easeOut" }}
                    className="text-base text-gray-500 max-w-lg mb-12"
                >
                    Building AI-powered applications, automation systems, and scalable backend platforms.
                </motion.p>

                {/* Interactive Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3.8 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button size="lg" className="rounded-full px-8 h-14 bg-white text-black hover:bg-gray-200 shadow-none font-semibold text-base transition-transform hover:scale-105" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                        View Projects
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-white border-white/20 hover:bg-white/10 hover:border-white/40 font-medium text-base transition-transform hover:scale-105" onClick={() => window.open('/resume.pdf', '_blank')}>
                        Download Resume
                    </Button>
                    <Button size="lg" variant="ghost" className="rounded-full px-8 h-14 text-gray-300 font-medium text-base ml-2 hover:text-white transition-opacity" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Contact
                    </Button>
                </motion.div>
            </div>

            {/* Subtle bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
        </section>
    );
}
