import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

const experiences = [
    {
        company: "Zetheta Algorithms",
        role: "Quantitative Research Intern",
        period: "Jan 2026 – Present",
        bullets: [
            "Developed backend simulations for high-frequency trading systems.",
            "Built distributed pipelines for financial market data analysis."
        ]
    },
    {
        company: "Fortune91 International",
        role: "Member of Technical Staff — Founder’s Office",
        period: "Jun 2025 – Nov 2025",
        bullets: [
            "Built backend APIs for e-commerce systems.",
            "Designed ERP modules for inventory and order management.",
            "Built automation pipelines reducing manual work by 70%."
        ]
    },
    {
        company: "Careers360",
        role: "Campus Ambassador",
        period: "Jun 2023 – Jul 2023",
        bullets: [
            "Led campus engagement campaigns and reporting workflows."
        ]
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-24 relative z-10 w-full overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl">
                <SectionHeading
                    title="Professional Experience"
                    subtitle="Engineering timeline across quantitative finance and e-commerce architectures."
                />

                <div className="relative pl-8 md:pl-0 mt-16">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-indigo-500/30 to-transparent md:-translate-x-1/2" />

                    {experiences.map((exp, index) => (
                        <div key={index} className="relative mb-16 md:mb-24 last:mb-0">
                            {/* Timeline Dot */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="absolute left-[-41px] md:left-1/2 top-1.5 w-4 h-4 rounded-full bg-[#02040a] border-4 border-primary shadow-[0_0_15px_rgba(56,189,248,0.6)] md:-translate-x-1/2 z-10"
                            />

                            <div className={`md:flex items-start justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="hidden md:block w-[45%]" />

                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, type: "spring" }}
                                    className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10'}`}
                                >
                                    <div className="glass-card p-8 rounded-2xl relative group border border-white/5 hover:border-primary/40 transition-colors duration-500 bg-[#070b14]/80 backdrop-blur-xl">
                                        <span className="text-primary font-mono text-xs md:text-sm tracking-widest mb-3 block">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-md">
                                            {exp.role}
                                        </h3>
                                        <h4 className="text-lg text-indigo-300 mb-6 font-medium">
                                            {exp.company}
                                        </h4>
                                        <ul className="space-y-3">
                                            {exp.bullets.map((bullet, i) => (
                                                <li key={i} className="text-gray-400 text-sm md:text-base leading-relaxed pl-5 relative font-light">
                                                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
