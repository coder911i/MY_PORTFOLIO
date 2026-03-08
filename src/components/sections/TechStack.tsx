import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

const nodes = [
    { name: "Java", group: "core", top: "10%", left: "50%" },
    { name: "Python", group: "core", top: "30%", left: "20%" },
    { name: "Node.js", group: "backend", top: "45%", left: "80%" },
    { name: "Express", group: "backend", top: "70%", left: "60%" },
    { name: "MySQL", group: "data", top: "50%", left: "40%" },
    { name: "MongoDB", group: "data", top: "80%", left: "25%" },
    { name: "AI APIs", group: "ai", top: "65%", left: "15%" },
    { name: "Automation tools", group: "auto", top: "20%", left: "75%" }
];

export function TechStack() {
    return (
        <section id="tech-stack" className="py-24 relative z-10 overflow-hidden bg-[#0a0f1c]/30">
            <div className="container mx-auto px-6 max-w-6xl">
                <SectionHeading
                    title="Stack Topology"
                    subtitle="An interactive view of the core technologies enabling the systems I build."
                    className="text-center mx-auto mb-16"
                />

                <div className="relative w-full max-w-4xl min-h-[500px] md:min-h-[600px] mx-auto rounded-3xl border border-white/10 bg-[#02040a]/50 backdrop-blur-sm p-4 mt-8 glass-card">
                    {/* Abstract SVG connecting lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" preserveAspectRatio="none">
                        <motion.path
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            d="M 50% 10% L 40% 50% L 25% 80% L 15% 65% L 20% 30% z"
                            stroke="#38bdf8" strokeWidth="1" fill="none"
                        />
                        <motion.path
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                            d="M 50% 10% L 75% 20% L 80% 45% L 60% 70% L 40% 50%"
                            stroke="#818cf8" strokeWidth="1" fill="none" strokeDasharray="4 4"
                        />
                    </svg>

                    {nodes.map((node, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.1,
                                type: "spring",
                                stiffness: 200,
                                damping: 10
                            }}
                            whileHover={{ scale: 1.1, zIndex: 50 }}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-[#0d1222] border border-white/10 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium text-gray-200 cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
                            style={{ top: node.top, left: node.left }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#38bdf8]" />
                            {node.name}
                        </motion.div>
                    ))}

                    {/* Central Core Pulse */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
