import { motion } from "framer-motion";
import { Server, Database, Globe, Layers, ArrowRightLeft } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";

export function Architecture() {
    return (
        <section id="architecture" className="pt-24 relative z-10 px-4 md:px-8">
            <SectionHeading
                title="System Architecture"
                subtitle="Core engineering thinking and distributed systems paradigms applied."
                className="text-center mx-auto mb-16"
            />

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

                {/* Visual Diagram Column inside a Bento Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="h-full"
                >
                    <Card className="h-full aspect-square md:aspect-[4/3] p-6 md:p-10 relative overflow-hidden flex flex-col justify-between border border-white/5">
                        {/* Background grid */}
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

                        {/* Ambient intense glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#6b21a8]/20 blur-[80px] rounded-full pointer-events-none z-0" />

                        {/* Diagram header */}
                        <div className="flex justify-between items-center mb-8 relative z-10 w-full bg-black/60 p-4 rounded-xl border border-white/5 backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <Globe className="w-5 h-5 text-[#ff0055]" />
                                <span className="text-sm font-mono text-gray-300">Client / Gateway</span>
                            </div>
                            <ArrowRightLeft className="w-5 h-5 text-[#ff0055] animate-pulse" />
                        </div>

                        {/* Microservices layer */}
                        <div className="flex gap-4 mb-8 relative z-10 bg-white/5 p-6 rounded-2xl border border-white/10 w-full items-center justify-around shadow-[0_0_30px_rgba(255,0,85,0.05)] backdrop-blur-md">
                            <div className="flex flex-col items-center gap-3 group/icon">
                                <Server className="w-8 h-8 text-[#6b21a8] group-hover/icon:text-[#ff0055] transition-colors" />
                                <span className="text-xs font-mono text-gray-300">Auth</span>
                            </div>
                            <div className="flex flex-col items-center gap-3 group/icon">
                                <Layers className="w-8 h-8 text-[#ff0055]" />
                                <span className="text-xs font-mono text-gray-300 drop-shadow-[0_0_8px_rgba(255,0,85,0.8)]">Logic</span>
                            </div>
                            <div className="flex flex-col items-center gap-3 group/icon">
                                <Server className="w-8 h-8 text-[#6b21a8] group-hover/icon:text-[#ff0055] transition-colors" />
                                <span className="text-xs font-mono text-gray-300">Pipeline</span>
                            </div>
                        </div>

                        {/* Database layer */}
                        <div className="flex justify-center items-center relative z-10 w-full bg-black/60 p-4 rounded-xl border border-white/5 border-t-[#6b21a8]/50 backdrop-blur-md">
                            <Database className="w-6 h-6 text-[#6b21a8] mr-3" />
                            <span className="text-sm font-mono text-gray-300">Distributed DB Cluster</span>
                        </div>

                        {/* Connecting lines via CSS pseudo elements */}
                        <div className="absolute top-[80px] bottom-[80px] left-1/2 w-px bg-gradient-to-b from-[#ff0055]/30 to-[#6b21a8]/30 -translate-x-1/2 z-0 hidden md:block" />
                    </Card>
                </motion.div>

                {/* Text/Explanation Stack */}
                <div className="flex flex-col gap-6 h-full">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <Card className="h-full border border-white/5 border-l-2 border-l-[#ff0055]">
                            <h3 className="text-xl font-bold text-white mb-3 tracking-wide">Microservices Architecture</h3>
                            <p className="text-gray-400 font-light leading-relaxed text-sm xl:text-base">
                                Decoupled API Gateways mapping to independent domain services and highly-available database schemas for maximum throughput and fault tolerance.
                            </p>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1"
                    >
                        <Card className="h-full border border-white/5 border-l-2 border-l-[#6b21a8]">
                            <h3 className="text-xl font-bold text-white mb-3 tracking-wide">Real-time Communication</h3>
                            <p className="text-gray-400 font-light leading-relaxed text-sm xl:text-base">
                                WebSocket based architecture facilitating live asynchronous processing states and duplex data streaming for critical client workflows.
                            </p>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex-1"
                    >
                        <Card className="h-full border border-white/5 border-l-2 border-l-white/20">
                            <h3 className="text-xl font-bold text-white mb-3 tracking-wide">Automation Pipelines</h3>
                            <p className="text-gray-400 font-light leading-relaxed text-sm xl:text-base">
                                Complex workflow automation unifying fragmented micro-services into cohesive business logic units. Data transformation and event-driven triggers.
                            </p>
                        </Card>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
