import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
    return (
        <section id="about" className="py-24 relative z-10">
            <div className="container mx-auto px-6 max-w-5xl">
                <SectionHeading
                    title="Executive Summary"
                    subtitle="A brief overview of my professional focus and engineering philosophy."
                />

                <div className="grid md:grid-cols-12 gap-12 items-start relative">

                    <div className="md:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square rounded-3xl overflow-hidden glass-card border border-white/10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-indigo-500/20 mix-blend-overlay" />
                            {/* Optional: Add an actual photo here if provided, otherwise a placeholder glowing orb/geometric shape */}
                            <div className="absolute inset-0 flex items-center justify-center bg-[#050505]">
                                <div className="w-32 h-32 rounded-full bg-primary/20 blur-3xl absolute" />
                                <div className="w-48 h-48 rounded-full border border-primary/30 animate-[spin_10s_linear_infinite]" />
                                <div className="w-32 h-32 rounded-full border border-indigo-400/30 animate-[spin_7s_linear_infinite_reverse]" />
                                <svg className="w-16 h-16 text-primary absolute opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                        </motion.div>
                    </div>

                    <div className="md:col-span-7 space-y-6">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light"
                        >
                            Tanishq Sharma is a backend-focused software engineer specializing in <span className="text-white font-medium">scalable systems, distributed architectures,</span> and <span className="text-white font-medium">intelligent platforms</span>.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-lg text-gray-400 leading-relaxed"
                        >
                            He has experience building backend services, automation pipelines, and high-performance systems across domains including algorithmic trading simulations, fintech automation platforms, and enterprise commerce systems.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg text-gray-400 leading-relaxed"
                        >
                            His work focuses on API architecture, distributed computation, real-time systems, and backend performance optimization.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="p-6 glass border-l-4 border-l-primary rounded-r-xl mt-8"
                        >
                            <p className="text-lg italic text-gray-300">
                                "He combines system design thinking with strong engineering execution to build technology that is both scalable and practical."
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
