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
        skills: ["Spring Boot", "Node.js", "Express.js", "REST APIs"]
    },
    {
        category: "System Architecture",
        skills: ["Microservices", "Distributed Systems", "Asynchronous Processing"]
    },
    {
        category: "Databases",
        skills: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
        category: "Cloud",
        skills: ["AWS EC2", "AWS S3", "IAM"]
    },
    {
        category: "Dev Tools",
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
        <section id="skills" className="py-24 relative z-10 bg-black/20">
            <div className="container mx-auto px-6 max-w-6xl">
                <SectionHeading
                    title="Technical Arsenal"
                    subtitle="Technologies, architectures, and tools I use to build robust systems."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillsData.map((group, index) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col p-8 group">
                                <h3 className="text-xl font-semibold mb-6 text-white group-hover:text-primary transition-colors duration-300">
                                    {group.category}
                                </h3>
                                <div className="flex flex-wrap gap-3 mt-auto">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300 
                                 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
