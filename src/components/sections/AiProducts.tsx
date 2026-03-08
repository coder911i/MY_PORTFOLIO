import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Workflow } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";

const products = [
    {
        title: "AI Data Intelligence Tool",
        description: "Analyzes business data and generates automated insights.",
        icon: <BrainCircuit className="w-8 h-8 text-[#38bdf8]" />
    },
    {
        title: "AI Automation Workflows",
        description: "Automation systems connecting business operations and backend APIs.",
        icon: <Workflow className="w-8 h-8 text-[#38bdf8]" />
    },
    {
        title: "AI Decision Engines",
        description: "Rule-based AI engines used in fintech and automation platforms.",
        icon: <Cpu className="w-8 h-8 text-[#38bdf8]" />
    }
];

export function AiProducts() {
    return (
        <section id="ai-products" className="py-24 relative z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
            <div className="container mx-auto px-6 max-w-6xl">
                <SectionHeading
                    title="AI Products Built"
                    subtitle="Visually rich AI-powered systems."
                    className="mb-16 text-center"
                />

                <div className="grid md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
                        >
                            <Card className="h-full flex flex-col p-8 text-center items-center group bg-[#02040a]/80 hover:bg-[#070b14] transition-colors duration-500 border border-white/5 hover:border-primary/40 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(56,189,248,0.1)] group-hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] group-hover:scale-110 transition-all duration-500">
                                    {product.icon}
                                </div>

                                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                                    {product.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed font-light">
                                    {product.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
