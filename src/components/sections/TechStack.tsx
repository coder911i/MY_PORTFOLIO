import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";

const nodes = [
    { name: "Java", group: "core", top: "15%", left: "50%" },
    { name: "Python", group: "core", top: "35%", left: "20%" },
    { name: "Node.js", group: "backend", top: "45%", left: "80%" },
    { name: "Express", group: "backend", top: "75%", left: "60%" },
    { name: "MySQL", group: "data", top: "50%", left: "40%" },
    { name: "MongoDB", group: "data", top: "80%", left: "25%" },
    { name: "AI APIs", group: "ai", top: "65%", left: "15%" },
    { name: "Automation tools", group: "auto", top: "20%", left: "75%" }
];

export function TechStack() {
    return (
        <section id="tech-stack" className="pt-24 relative z-10 overflow-hidden px-4 md:px-8">
            <SectionHeading
                title="Stack Topology"
                subtitle="An interactive view of the core technologies enabling the systems I build."
                className="text-center mx-auto mb-16"
            />

            <Card className="relative w-full max-w-5xl min-h-[500px] md:min-h-[700px] mx-auto border border-white/5 p-4 mt-8 flex items-center justify-center">
                {/* Subsurface deep glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#6b21a8]/20 rounded-full blur-[100px] pointer-events-none" />

                {/* Abstract SVG connecting lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0" preserveAspectRatio="none">
                    <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        d="M 50% 15% L 40% 50% L 25% 80% L 15% 65% L 20% 35% z"
                        stroke="#ff0055" strokeWidth="1" fill="none"
                    />
                    <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                        d="M 50% 15% L 75% 20% L 80% 45% L 60% 75% L 40% 50%"
                        stroke="#6b21a8" strokeWidth="1" fill="none" strokeDasharray="4 4"
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
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-black border border-white/10 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium text-gray-200 cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.8)] hover:border-[#ff0055] hover:text-[#ff0055] hover:shadow-[0_0_20px_rgba(255,0,85,0.4)] transition-all flex items-center gap-2 z-10"
                        style={{ top: node.top, left: node.left }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff0055] animate-pulse shadow-[0_0_8px_#ff0055]" />
                        {node.name}
                    </motion.div>
                ))}
            </Card>
        </section>
    );
}
