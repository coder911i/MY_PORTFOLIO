import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

const experiences = [
    {
        company: "Zetheta Algorithms",
        role: "Quantitative Research Intern",
        period: "Jan 2026 – Present",
        bullets: [
            "Developed backend simulations for high-frequency trading systems.",
            "Built distributed pipelines for multi-exchange market data processing.",
            "Implemented asynchronous price-feed analysis systems."
        ]
    },
    {
        company: "Fortune91 International",
        role: "Member of Technical Staff — Founder’s Office",
        period: "Jun 2025 – Nov 2025",
        bullets: [
            "Developed backend APIs for e-commerce systems.",
            "Designed ERP modules handling orders and inventory.",
            "Built automation pipelines reducing manual work by 70%.",
            "Optimized databases for high transaction workloads."
        ]
    },
    {
        company: "Careers360",
        role: "Campus Ambassador",
        period: "Jun 2023 – Jul 2023",
        bullets: [
            "Led structured campus outreach campaigns.",
            "Built reporting workflows for campaign analytics."
        ]
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-24 relative z-10 bg-black/20">
            <div className="container mx-auto px-6 max-w-4xl">
                <SectionHeading
                    title="Professional Journey"
                    subtitle="A timeline of my work in engineering backend systems and quantitative platforms."
                />

                <div className="relative pl-8 md:pl-0">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

                    {experiences.map((exp, index) => (
                        <div key={index} className="relative mb-16 md:mb-24 last:mb-0">
                            {/* Timeline Dot */}
                            <div
                                className="absolute left-[-41px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(0,242,254,0.6)] md:-translate-x-1/2 outline outline-4 outline-black/50 z-10"
                            />

                            <div className={`md:flex items-start justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="hidden md:block w-[45%]" />

                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, type: "spring" }}
                                    className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10'}`}
                                >
                                    <div className="glass-card p-8 rounded-2xl relative group border border-white/5 hover:border-primary/50 transition-colors">
                                        <span className="text-primary font-mono text-sm tracking-widest mb-2 block">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                            {exp.role}
                                        </h3>
                                        <h4 className="text-xl text-gray-400 mb-6 font-medium">
                                            {exp.company}
                                        </h4>
                                        <ul className="space-y-3">
                                            {exp.bullets.map((bullet, i) => (
                                                <li key={i} className="text-gray-300 text-base leading-relaxed pl-4 relative">
                                                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-primary/50" />
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
