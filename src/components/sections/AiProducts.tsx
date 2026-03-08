import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Workflow } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";

const products = [
    {
        title: "Data Intelligence",
        description: "Analyzes business data and generates automated insights.",
        icon: <BrainCircuit className="w-8 h-8 text-[#ff0055]" />
    },
    {
        title: "Automation Workflows",
        description: "Systems connecting business operations and backend APIs.",
        icon: <Workflow className="w-8 h-8 text-[#6b21a8]" />
    },
    {
        title: "Decision Engines",
        description: "Rule-based AI engines used in fintech platforms.",
        icon: <Cpu className="w-8 h-8 text-[#ff0055]" />
    }
];

export function AiProducts() {
    return (
        <section id="ai-products" className="pt-24 relative z-10 px-4 md:px-8">
            <SectionHeading
                title="AI Products Built"
                subtitle="Intelligent systems and autonomous agents."
                className="mb-16 text-center"
            />

            <div className="grid md:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
                    >
                        <Card className="h-full flex flex-col p-8 text-center items-center group">
                            <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,0,85,0.1)] group-hover:shadow-[0_0_30px_rgba(255,0,85,0.3)] group-hover:scale-110 transition-all duration-500">
                                {product.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ff0055] transition-colors duration-300">
                                {product.title}
                            </h3>
                            <p className="text-gray-400 font-light text-sm">
                                {product.description}
                            </p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
