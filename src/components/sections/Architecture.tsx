import { motion } from "framer-motion";
import { Server, Database, Globe, Layers, ArrowRightLeft } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

export function Architecture() {
    return (
        <section id="architecture" className="py-24 relative z-10">
            <div className="container mx-auto px-6 max-w-6xl">
                <SectionHeading
                    title="System Architecture"
                    subtitle="Core engineering thinking and distributed systems paradigms applied."
                />

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-16 items-center">

                    {/* Visual Diagram Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="w-full aspect-[4/3] glass-card rounded-3xl p-6 md:p-10 relative overflow-hidden flex flex-col justify-between border border-[#38bdf8]/10"
                    >
                        {/* Background grid */}
                        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

                        {/* Diagram header */}
                        <div className="flex justify-between items-center mb-8 relative z-10 w-full bg-[#02040a]/80 p-4 rounded-xl border border-white/5">
                            <div className="flex items-center gap-3">
                                <Globe className="w-5 h-5 text-gray-400" />
                                <span className="text-sm font-mono text-gray-400">Client / Gateway</span>
                            </div>
                            <ArrowRightLeft className="w-5 h-5 text-primary animate-pulse" />
                        </div>

                        {/* Microservices layer */}
                        <div className="flex gap-4 mb-8 relative z-10 bg-white/5 p-6 rounded-2xl border border-white/10 w-full items-center justify-around shadow-[0_0_30px_rgba(56,189,248,0.05)]">
                            <div className="flex flex-col items-center gap-2">
                                <Server className="w-8 h-8 text-[#38bdf8]" />
                                <span className="text-xs font-mono text-gray-300">Auth Service</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Layers className="w-8 h-8 text-[#38bdf8]" />
                                <span className="text-xs font-mono text-gray-300">Logic Engine</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Server className="w-8 h-8 text-[#38bdf8]" />
                                <span className="text-xs font-mono text-gray-300">Data Pipeline</span>
                            </div>
                        </div>

                        {/* Database layer */}
                        <div className="flex justify-center items-center relative z-10 w-full bg-[#02040a]/80 p-4 rounded-xl border border-white/5 border-t-indigo-500/50">
                            <Database className="w-6 h-6 text-indigo-400 mr-3" />
                            <span className="text-sm font-mono text-gray-400">Distributed Database Cluster</span>
                        </div>

                        {/* Connecting lines via CSS pseudo elements */}
                        <div className="absolute top-[80px] bottom-[80px] left-1/2 w-0.5 bg-gradient-to-b from-[#38bdf8]/20 to-indigo-500/20 -translate-x-1/2 z-0 hidden md:block" />
                    </motion.div>

                    {/* Text/Explanation Column */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="p-6 rounded-2xl bg-gradient-to-r from-white/[0.03] to-transparent border-l-2 border-[#38bdf8]"
                        >
                            <h3 className="text-xl font-semibold text-white mb-2 tracking-wide">Microservices Architecture</h3>
                            <p className="text-gray-400 font-light leading-relaxed text-sm lg:text-base">
                                Decoupled API Gateways mapping to independent domain services and highly-available database schemas for maximum throughput and fault tolerance.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="p-6 rounded-2xl bg-gradient-to-r from-white/[0.03] to-transparent border-l-2 border-indigo-400"
                        >
                            <h3 className="text-xl font-semibold text-white mb-2 tracking-wide">Real-time Communication Systems</h3>
                            <p className="text-gray-400 font-light leading-relaxed text-sm lg:text-base">
                                WebSocket based architecture facilitating live asynchronous processing states and duplex data streaming for critical client workflows.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="p-6 rounded-2xl bg-gradient-to-r from-white/[0.03] to-transparent border-l-2 border-white/20"
                        >
                            <h3 className="text-xl font-semibold text-white mb-2 tracking-wide">Automation Pipelines</h3>
                            <p className="text-gray-400 font-light leading-relaxed text-sm lg:text-base">
                                Complex workflow automation unifying fragmented micro-services into cohesive business logic units. Data transformation and event-driven triggers.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
