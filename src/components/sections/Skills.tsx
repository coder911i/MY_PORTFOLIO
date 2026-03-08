import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

const categories = [
    {
        title: "Programming Languages",
        color: "#6b21a8",
        skills: [
            { name: "Java", level: 88 },
            { name: "Python", level: 82 },
            { name: "C++", level: 70 },
        ],
    },
    {
        title: "Backend Development",
        color: "#2563eb",
        skills: [
            { name: "Node.js", level: 90 },
            { name: "Express.js", level: 88 },
            { name: "Spring Boot", level: 78 },
            { name: "REST APIs", level: 92 },
        ],
    },
    {
        title: "Databases",
        color: "#059669",
        skills: [
            { name: "MySQL", level: 85 },
            { name: "PostgreSQL", level: 80 },
            { name: "MongoDB", level: 82 },
        ],
    },
    {
        title: "AI Applications",
        color: "#ec4899",
        skills: [
            { name: "AI-powered Apps", level: 85 },
            { name: "Prompt Engineering", level: 80 },
            { name: "LLM Integration", level: 78 },
            { name: "AI Automation", level: 75 },
        ],
    },
    {
        title: "Automation",
        color: "#7c3aed",
        skills: [
            { name: "n8n", level: 82 },
            { name: "Zapier", level: 78 },
        ],
    },
    {
        title: "Realtime Systems",
        color: "#d97706",
        skills: [
            { name: "WebSockets", level: 85 },
            { name: "Socket.io", level: 83 },
            { name: "WebRTC", level: 70 },
        ],
    },
    {
        title: "Developer Tools",
        color: "#64748b",
        skills: [
            { name: "Git", level: 90 },
            { name: "Postman", level: 88 },
            { name: "Apache JMeter", level: 75 },
        ],
    },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1.5">
                <span className="text-sm text-gray-300 font-medium">{name}</span>
                <span className="text-xs text-gray-500">{level}%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${color}88, ${color})`, boxShadow: `0 0 8px ${color}66` }}
                />
            </div>
        </div>
    );
}

export function Skills() {
    return (
        <section id="skills" className="pt-32 relative z-10 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <SectionHeading
                title="Skills & Technologies"
                subtitle="Every tool in my arsenal — categorized and battle-tested in real projects."
                className="text-center mx-auto mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {categories.map((cat, ci) => (
                    <motion.div
                        key={ci}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, delay: ci * 0.1 }}
                        whileHover={{ y: -4 }}
                        className="bento-card p-6 border border-white/5 group"
                    >
                        <div className="glow-effect" />
                        <div className="relative z-10">
                            {/* Category header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ background: cat.color, boxShadow: `0 0 12px ${cat.color}` }}
                                />
                                <h3 className="text-sm font-bold uppercase tracking-widest"
                                    style={{ color: cat.color }}>
                                    {cat.title}
                                </h3>
                            </div>

                            {/* Skill bars */}
                            {cat.skills.map((skill, si) => (
                                <SkillBar
                                    key={si}
                                    name={skill.name}
                                    level={skill.level}
                                    color={cat.color}
                                    delay={ci * 0.08 + si * 0.1}
                                />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
