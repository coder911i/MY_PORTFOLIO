import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = ["Backend Engineer", "AI Applications Developer", "Systems Builder", "Automation Engineer"];

// Pure CSS animated blob — zero GPU cost, looks premium
function HeroBlob() {
    return (
        <div className="absolute right-[-10%] md:right-[0%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none select-none">
            {/* Outer glow rings */}
            <div className="absolute inset-0 rounded-full bg-[#ff0055]/5 blur-[80px] animate-pulse" style={{ animationDuration: "4s" }} />
            <div className="absolute inset-[10%] rounded-full bg-[#6b21a8]/10 blur-[60px] animate-pulse" style={{ animationDuration: "6s", animationDelay: "1s" }} />

            {/* The abstract 3D-looking blob using CSS */}
            <div className="absolute inset-[15%]" style={{
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                background: "linear-gradient(135deg, rgba(255,0,85,0.06) 0%, rgba(107,33,168,0.08) 50%, rgba(255,0,85,0.04) 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
                animation: "morphBlob 12s ease-in-out infinite",
                boxShadow: "inset 0 0 80px rgba(255,0,85,0.04), 0 0 120px rgba(107,33,168,0.1)"
            }} />

            {/* Inner metallic highlight */}
            <div className="absolute inset-[22%]" style={{
                borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                background: "linear-gradient(225deg, rgba(255,255,255,0.05) 0%, transparent 60%)",
                animation: "morphBlob 8s ease-in-out infinite reverse",
            }} />

            {/* Floating orbs */}
            <div className="absolute top-[15%] right-[20%] w-4 h-4 rounded-full bg-[#ff0055]/40 blur-sm" style={{ animation: "floatOrb 6s ease-in-out infinite" }} />
            <div className="absolute bottom-[25%] left-[15%] w-3 h-3 rounded-full bg-[#6b21a8]/50 blur-sm" style={{ animation: "floatOrb 8s ease-in-out infinite", animationDelay: "2s" }} />
            <div className="absolute top-[45%] right-[10%] w-2 h-2 rounded-full bg-white/20 blur-sm" style={{ animation: "floatOrb 5s ease-in-out infinite", animationDelay: "1s" }} />
        </div>
    );
}

export function Hero() {
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setCurrentRole(r => (r + 1) % roles.length), 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black pt-20">
            {/* Background neon orbs (static CSS, no JS cost) */}
            <div className="absolute top-[30%] left-[15%] w-[500px] h-[500px] bg-[#6b21a8]/15 blur-[180px] rounded-full pointer-events-none" />
            <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[#ff0055]/10 blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#ff0055]/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Dot grid */}
            <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

            {/* Hero abstract blob */}
            <HeroBlob />

            <div className="container mx-auto px-6 lg:px-16 relative z-10 max-w-7xl">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#ff0055]/30 bg-[#ff0055]/5 mb-10 w-fit"
                >
                    <span className="w-2 h-2 rounded-full bg-[#ff0055] animate-pulse" />
                    <span className="text-[#ff0055] text-xs font-semibold tracking-widest uppercase">Open to Engineering Roles · India</span>
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-7xl md:text-[8rem] lg:text-[9rem] font-black tracking-tighter text-white leading-[0.9] mb-6"
                >
                    Tanishq<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0055] to-[#6b21a8]">Sharma</span>
                </motion.h1>

                {/* Animated role */}
                <div className="h-12 overflow-hidden mb-6">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={currentRole}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="text-2xl md:text-3xl font-semibold text-gray-300"
                        >
                            {roles[currentRole]}
                        </motion.p>
                    </AnimatePresence>
                </div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg text-gray-400 font-light max-w-lg leading-relaxed mb-12"
                >
                    Building intelligent AI applications, automation systems, and scalable backend platforms.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap gap-4 mb-20"
                >
                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-[#ff0055] hover:bg-[#cc0044] text-white rounded-full font-bold text-sm tracking-wide transition-all hover:scale-105 active:scale-95"
                        style={{ boxShadow: "0 0 30px rgba(255,0,85,0.35)" }}
                    >
                        View My Work
                    </button>
                    <a
                        href="/resume.pdf"
                        download
                        className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/50 text-white rounded-full font-semibold text-sm transition-all"
                    >
                        Download Resume
                    </a>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-wrap gap-12 pt-8 border-t border-white/5"
                >
                    {[
                        { val: "2+", label: "Years Experience" },
                        { val: "5+", label: "Projects Shipped" },
                        { val: "3+", label: "Companies" },
                    ].map((s) => (
                        <div key={s.label}>
                            <div className="text-3xl font-extrabold text-white">{s.val}</div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{s.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
        </section>
    );
}
