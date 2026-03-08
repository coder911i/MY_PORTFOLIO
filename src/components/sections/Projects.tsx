import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

const projects = [
    {
        title: "AeroLoad.ai — Aircraft Cargo Optimization Platform",
        description: "AI-driven aviation platform designed to optimize aircraft cargo loading and improve operational efficiency.",
        features: [
            "Backend data processing pipelines",
            "Cargo load optimization algorithms",
            "Real-time aviation data handling",
            "Scalable API architecture"
        ],
        links: {
            demo: "https://aeroload-website.vercel.app/",
            github: "https://github.com/coder911i/aeroload-website"
        },
        featured: true
    },
    {
        title: "Suvidha.ai — FinTech Automation Platform",
        description: "Backend platform automating financial workflows for loan processing and payment systems.",
        features: [
            "Rule-based approval engine",
            "REST API architecture",
            "Automated financial workflows",
            "Real-time communication using Socket.io"
        ],
        links: {
            details: "#"
        }
    },
    {
        title: "Face-Based Attendance System (SIH)",
        description: "Attendance automation platform integrating facial recognition pipelines with backend APIs.",
        features: [
            "Facial recognition integration",
            "Attendance APIs",
            "Analytics dashboards",
            "Real-time data handling"
        ],
        links: {
            details: "#"
        }
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-24 relative z-10">
            <div className="container mx-auto px-6 max-w-6xl">
                <SectionHeading
                    title="Featured Systems"
                    subtitle="Complex technical projects demonstrating architecture, AI integrations, and backend scalability."
                />

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={project.featured ? "md:col-span-2" : "col-span-1"}
                        >
                            <Card className="h-full flex flex-col p-8 group">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">
                                        {project.title.split(" — ")[0]}
                                        <span className="block text-lg font-normal text-muted mt-2">
                                            {project.title.split(" — ")[1] || ""}
                                        </span>
                                    </h3>
                                </div>

                                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mb-8">
                                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Core Features</h4>
                                    <ul className="space-y-3">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-start text-gray-300">
                                                <ChevronRight className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-auto pt-8 flex flex-wrap gap-4 border-t border-white/5">
                                    {project.links.demo && (
                                        <Button onClick={() => window.open(project.links.demo, "_blank")}>
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Live Demo
                                        </Button>
                                    )}
                                    {project.links.github && (
                                        <Button variant="glass" onClick={() => window.open(project.links.github, "_blank")}>
                                            <Github className="w-4 h-4 mr-2" />
                                            GitHub Repo
                                        </Button>
                                    )}
                                    {project.links.details && (
                                        <Button variant="outline">
                                            View Details
                                        </Button>
                                    )}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
