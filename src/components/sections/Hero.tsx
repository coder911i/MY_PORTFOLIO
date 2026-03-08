import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float, Environment } from "@react-three/drei";
import * as THREE from "three";

const roles = ["Backend Engineer", "AI Applications Developer", "Systems Builder", "Automation Engineer"];

function LiquidShape() {
    const meshRef = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.25;
        }
    });
    return (
        <>
            <Environment preset="city" />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#ff0055" />
            <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#6b21a8" />
            <ambientLight intensity={0.5} color="#ffffff" />
            <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
                <mesh ref={meshRef} scale={1.8}>
                    <icosahedronGeometry args={[1, 2]} />
                    <MeshTransmissionMaterial
                        backside samples={16} thickness={2}
                        chromaticAberration={0.5} anisotropy={0.3}
                        distortion={0.4} distortionScale={0.5}
                        temporalDistortion={0.15} color="#ffffff"
                        transmission={1} roughness={0.05} ior={1.5}
                    />
                </mesh>
            </Float>
        </>
    );
}

export function Hero() {
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((r) => (r + 1) % roles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
            {/* Multi-layer neon orbs */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#ff0055]/20 blur-[160px] rounded-full pointer-events-none z-0 animate-pulse" />
            <div className="absolute top-1/3 left-2/3 w-[500px] h-[500px] bg-[#6b21a8]/25 blur-[130px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-0 left-1/2 w-[600px] h-[300px] bg-[#ff0055]/10 blur-[120px] rounded-full pointer-events-none z-0" />

            {/* 3D Canvas */}
            <div className="absolute right-0 md:right-[5%] top-0 w-full md:w-[55%] h-full pointer-events-none z-0 mix-blend-screen opacity-90">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <LiquidShape />
                </Canvas>
            </div>

            {/* Dot grid */}
            <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col max-w-7xl">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#ff0055]/30 bg-[#ff0055]/5 mb-10 backdrop-blur-md w-fit"
                >
                    <span className="w-2 h-2 rounded-full bg-[#ff0055] animate-pulse shadow-[0_0_8px_#ff0055]" />
                    <span className="text-[#ff0055] text-xs font-semibold tracking-widest uppercase">Open to Engineering Roles · India</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-7xl md:text-[9rem] font-black tracking-tighter text-white leading-[0.9] mb-6"
                >
                    Tanishq<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0055] to-[#6b21a8]">Sharma</span>
                </motion.h1>

                {/* Animated Role */}
                <div className="h-14 relative overflow-hidden mb-6">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={currentRole}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl md:text-3xl font-semibold text-gray-300 absolute"
                        >
                            {roles[currentRole]}
                        </motion.p>
                    </AnimatePresence>
                </div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-lg md:text-xl text-gray-400 font-light max-w-xl leading-relaxed mb-12"
                >
                    Building intelligent AI applications, automation systems, and scalable backend platforms.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="flex flex-wrap gap-4"
                >
                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-[#ff0055] hover:bg-[#cc0044] text-white rounded-full font-bold text-sm tracking-wide transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,0,85,0.4)]"
                    >
                        View My Work
                    </button>
                    <a
                        href="/resume.pdf"
                        download
                        className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/50 text-white rounded-full font-semibold text-sm tracking-wide transition-all"
                    >
                        Download Resume
                    </a>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 border border-[#6b21a8]/50 hover:border-[#6b21a8] text-gray-300 hover:text-white rounded-full font-semibold text-sm tracking-wide transition-all"
                    >
                        Contact Me
                    </button>
                </motion.div>

                {/* Stat row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    className="flex gap-12 mt-20 pt-8 border-t border-white/5"
                >
                    {[
                        { val: "2+", label: "Years Experience" },
                        { val: "5+", label: "Projects Shipped" },
                        { val: "3+", label: "Companies" }
                    ].map((s) => (
                        <div key={s.label}>
                            <div className="text-3xl font-extrabold text-white">{s.val}</div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{s.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
        </section>
    );
}
