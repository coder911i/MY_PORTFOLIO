import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

const experiences = [
    {
        role: "Quantitative Research Intern",
        company: "Zetheta Algorithms",
        period: "2024",
        type: "Internship",
        description: "Worked on quantitative research methods and data-driven algorithm development. Built data pipelines and analytical models to support financial systems.",
        highlights: ["Quantitative algorithm development", "Data pipeline engineering", "Statistical modeling"],
        color: "#ff0055",
    },
    {
        role: "Member of Technical Staff",
        company: "Fortune91 International",
        period: "2024",
        type: "Full Time",
        description: "Engineered backend systems and APIs for international commerce platforms. Integrated third-party services and maintained high-availability infrastructure.",
        highlights: ["Backend API architecture", "System integration", "High-availability infrastructure"],
        color: "#6b21a8",
    },
    {
        role: "Campus Ambassador",
        company: "Careers360",
        period: "2023",
        type: "Part Time",
        description: "Represented Careers360 at college campus events, growing user engagement and brand awareness through technical outreach programs.",
        highlights: ["Technical outreach", "Community building", "Event organization"],
        color: "#2563eb",
    },
];

function TimelineNode({ exp, index }: { exp: typeof experiences[0]; index: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div ref={ref} className="relative flex gap-6 md:gap-10">
            {/* Timeline line + dot */}
            <div className="flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-4 h-4 rounded-full border-2 z-10 mt-1"
                    style={{ borderColor: exp.color, background: `${exp.color}33`, boxShadow: `0 0 15px ${exp.color}66` }}
                />
                {index < experiences.length - 1 && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={inView ? { height: "100%" } : { height: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-px mt-2"
                        style={{ background: `linear-gradient(to bottom, ${exp.color}66, transparent)` }}
                    />
                )}
            </div>

            {/* Content card */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bento-card flex-1 mb-10 border border-white/5 p-6 md:p-8 overflow-hidden"
            >
                <div className="glow-effect" />
                <div className="relative z-10">
                    {/* Header row */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                        <div>
                            <h3 className="text-xl font-extrabold text-white">{exp.role}</h3>
                            <p className="font-semibold mt-1" style={{ color: exp.color }}>{exp.company}</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="px-3 py-1 text-xs font-bold rounded-full bg-white/5 border border-white/10 text-gray-400">{exp.period}</span>
                            <span className="px-3 py-1 text-xs font-bold rounded-full" style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}>{exp.type}</span>
                        </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-5">{exp.description}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((h) => (
                            <span key={h} className="px-3 py-1 text-xs font-medium text-gray-300 rounded-lg bg-white/5 border border-white/10">{h}</span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export function Experience() {
    return (
        <section id="experience" className="pt-32 relative z-10 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <SectionHeading
                title="Experience"
                subtitle="Professional journey across engineering, research, and technical advocacy."
                className="text-center mx-auto mb-16"
            />
            <div className="max-w-4xl mx-auto">
                {experiences.map((exp, i) => (
                    <TimelineNode key={i} exp={exp} index={i} />
                ))}
            </div>
        </section>
    );
}
