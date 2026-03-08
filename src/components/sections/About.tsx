import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
    return (
        <section id="about" className="py-24 relative z-10 lg:py-32">
            <div className="container mx-auto px-6 max-w-5xl">
                <SectionHeading
                    title="About Me"
                    subtitle="A brief overview of my professional focus and engineering philosophy."
                />

                <div className="grid md:grid-cols-12 gap-12 items-center relative mt-16">

                    <div className="md:col-span-4 relative order-2 md:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card border border-white/5 shadow-2xl"
                        >
                            {/* Abstract structural graphic replacing generic orb */}
                            <div className="absolute inset-0 bg-[#02040a]">
                                <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-primary/20 rounded-full flex flex-col items-center justify-center p-4">
                                    <div className="w-32 h-32 border border-primary/40 rounded-full animate-[spin_12s_linear_infinite]" />
                                    <div className="w-16 h-16 border border-indigo-400/60 rounded-full animate-[spin_8s_linear_infinite_reverse] absolute" />
                                </div>

                                {/* Accent blurs */}
                                <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full" />
                            </div>
                        </motion.div>
                    </div>

                    <div className="md:col-span-8 space-y-8 order-1 md:order-2 md:pl-8">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-xl md:text-3xl text-gray-300 leading-snug font-light tracking-wide"
                        >
                            Tanishq Sharma is a backend-focused software engineer specializing in <span className="text-white font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">intelligent applications, automation platforms,</span> and <span className="text-white font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">scalable backend architectures</span>.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="w-16 h-px bg-gradient-to-r from-primary to-transparent"
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-lg text-gray-400 leading-relaxed font-light"
                        >
                            He builds real-world software systems including fintech automation tools, aviation optimization platforms, and distributed backend services.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg text-gray-400 leading-relaxed font-light"
                        >
                            His work focuses on API design, system architecture, AI application development, and performance-driven engineering.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}
