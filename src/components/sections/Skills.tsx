import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";

const skillsData = [
    {
        category: "Programming",
        skills: ["Java", "Python", "C++"]
    },
    {
        category: "Backend Development",
        skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs"]
    },
    {
        category: "System Architecture",
        skills: ["Microservices", "Distributed Systems", "Async Processing"]
    },
    {
        category: "Databases",
        skills: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
        category: "AI Applications & Solutions",
        skills: [
            "AI-powered application development",
            "Prompt engineering",
            "AI workflow automation",
            "LLM integration",
            "Intelligent data processing"
        ]
    },
    {
        category: "Developer Tools",
        skills: ["Git", "Postman", "Apache JMeter", "CI/CD pipelines"]
    },
    {
        category: "Automation",
        skills: ["n8n", "Zapier"]
    },
    {
        category: "Realtime Systems",
        skills: ["WebSockets", "Socket.io", "WebRTC"]
    }
];

export function Skills() {
    return (
        <section id="skills" className="py-24 relative z-10 w-full overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <SectionHeading
                    title="Technical Competencies"
                    subtitle="Technologies and stacks utilized in production systems."
                    className="mb-16"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillsData.map((group, index) => {
                        const isFullWidth = group.category === "AI Applications & Solutions";

                        return (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                                className={isFullWidth ? "md:col-span-2 lg:col-span-3" : "col-span-1"}
                            >
                                <Card
                                    className={`h-full flex flex-col p-8 group hover:border-[#38bdf8]/40 transition-colors duration-500 bg-[#070b14] backdrop-blur-md ${isFullWidth ? "bg-gradient-to-r from-[#0a1128] to-[#070b14]" : ""}`}
                                >
                                    <h3 className="text-xl font-medium mb-6 text-gray-100 flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors duration-300 shadow-[0_0_5px_#38bdf8]" />
                                        {group.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2.5 mt-auto">
                                        {group.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-4 py-2 text-sm rounded-md bg-white/[0.03] border border-white/5 text-gray-300 
                                   hover:border-primary/40 hover:bg-primary/10 hover:text-white transition-all duration-300 cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
