import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";

export function Skills() {
    return (
        <section id="skills" className="pt-24 relative z-10 w-full px-4 md:px-8">
            <SectionHeading
                title="Engineering Capabilities"
                subtitle="Core competencies mapped across the modern stack."
                className="mb-16 text-center"
            />

            {/* Asymmetrical Bento Grid matching "EchoGrowth" and "Salesrocket" inspiration */}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 auto-rows-[minmax(0,1fr)]">

                {/* Large Primary AI Block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="col-span-1 md:col-span-4 lg:col-span-4 row-span-2 h-full"
                >
                    <Card className="h-full border border-white/5 flex flex-col justify-between group">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-[#ff0055]/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,0,85,0.1)] group-hover:shadow-[0_0_30px_rgba(255,0,85,0.2)] transition-shadow">
                                <span className="text-[#ff0055] font-bold text-xl">AI</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">AI Applications & Solutions</h3>
                            <p className="text-gray-400 font-light max-w-md mb-8">
                                End-to-end intelligent architecture spanning workflow automation to complex language model pipelines.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-auto">
                            {["Prompt Engineering", "Workflow Automation", "LLM Integration", "Intelligent Processing"].map((skill) => (
                                <span key={skill} className="px-4 py-2 text-sm rounded-lg bg-black/40 border border-white/10 text-gray-300 group-hover:border-[#ff0055]/30 transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </Card>
                </motion.div>

                {/* Vertical Stack Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.1 }}
                    className="col-span-1 md:col-span-4 lg:col-span-2 row-span-2 h-full"
                >
                    <Card className="h-full border border-white/5 flex flex-col group p-8 bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] bg-blend-soft-light" style={{ backgroundImage: "linear-gradient(rgba(10,10,10,0.8), rgba(10,10,10,0.8)), url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')", backgroundSize: "cover" }}>
                        <h3 className="text-xl font-bold text-white mb-6 tracking-wide">System Architecture</h3>
                        <div className="space-y-4 flex-1">
                            {[
                                { name: "Microservices", val: "95%" },
                                { name: "Distributed Systems", val: "88%" },
                                { name: "Async Processing", val: "92%" }
                            ].map((skill, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between text-sm text-gray-400"><span className="text-white">{skill.name}</span> {skill.val}</div>
                                    <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden border border-white/5">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: skill.val }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: 0.2 + (i * 0.1) }}
                                            className="h-full bg-gradient-to-r from-[#6b21a8] to-[#ff0055] shadow-[0_0_10px_#ff0055]"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </motion.div>

                {/* Small Block 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                    className="col-span-1 md:col-span-2 lg:col-span-2"
                >
                    <Card className="h-full border border-white/5 flex flex-col justify-center items-center text-center group min-h-[200px]">
                        <h3 className="text-lg text-gray-400 font-medium mb-4">Programming</h3>
                        <p className="text-2xl font-bold text-white group-hover:text-neon transition-all">Java · Python · C++</p>
                    </Card>
                </motion.div>

                {/* Small Block 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                    className="col-span-1 md:col-span-2 lg:col-span-2"
                >
                    <Card className="h-full border border-white/5 flex flex-col justify-center items-center text-center group min-h-[200px]">
                        <h3 className="text-lg text-gray-400 font-medium mb-4">Databases</h3>
                        <p className="text-2xl font-bold text-white group-hover:text-[#6b21a8] drop-shadow-[0_0_10px_rgba(107,33,168,0.5)] transition-all">MySQL · Postgres · Mongo</p>
                    </Card>
                </motion.div>

                {/* Wide Horizontal Block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                    className="col-span-1 md:col-span-4 lg:col-span-2"
                >
                    <Card className="h-full border border-white/5 flex flex-col justify-center group min-h-[200px]">
                        <h3 className="text-lg text-gray-400 font-medium mb-3">Backend Runtime</h3>
                        <div className="flex gap-4">
                            <div className="w-1/2 p-4 bg-black/40 rounded-xl border border-white/5 flex items-center justify-center text-white font-bold group-hover:border-[#ff0055]/30">Node.js</div>
                            <div className="w-1/2 p-4 bg-black/40 rounded-xl border border-white/5 flex items-center justify-center text-white font-bold group-hover:border-[#ff0055]/30">Spring Boot</div>
                        </div>
                    </Card>
                </motion.div>

            </div>
        </section>
    );
}
