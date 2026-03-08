import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";

const projects = [
    {
        title: "AeroLoad.ai",
        subtitle: "Aircraft Cargo Optimization Platform",
        description: "AI platform designed for aircraft cargo optimization and intelligent load planning.",
        features: ["Backend data processing pipelines", "Cargo load optimization algorithms", "Real-time aviation data handling", "Scalable API architecture"],
        links: { demo: "https://aeroload-website.vercel.app/", github: "https://github.com/coder911i/aeroload-website" },
        featured: true
    },
    {
        title: "Suvidha.ai",
        subtitle: "FinTech Automation Platform",
        description: "FinTech backend platform automating NBFC loan and payment workflows.",
        features: ["Rule-based approval engine", "REST API architecture", "Automated financial workflows", "Real-time communication using Socket.io"],
        links: {}
    },
    {
        title: "Face-Based API",
        subtitle: "Smart India Hackathon",
        description: "Smart attendance system integrating facial recognition pipelines and backend APIs.",
        features: ["Facial recognition integration", "Attendance APIs", "Analytics dashboards", "Real-time data handling"],
        links: {}
    }
];

export function Projects() {
    return (
        <section id="projects" className="pt-24 relative z-10 w-full px-4 md:px-8">
            <SectionHeading
                title="Featured Systems"
                subtitle="Complex technical projects demonstrating architecture, AI integrations, and backend scalability."
                className="mb-16 text-center"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className={project.featured ? "md:col-span-2 lg:col-span-2" : "col-span-1 lg:col-span-1"}
                    >
                        <Card className="h-full flex flex-col p-8 group border border-white/5 overflow-hidden">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-3xl font-extrabold text-white tracking-tight">
                                    {project.title}
                                    <span className="block text-xl font-medium text-[#6b21a8] mt-2 group-hover:text-[#ff0055] transition-colors">
                                        {project.subtitle}
                                    </span>
                                </h3>
                            </div>

                            <p className="text-gray-400 mb-8 text-lg leading-relaxed font-light">
                                {project.description}
                            </p>

                            <div className="mb-8 flex-1">
                                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-4">Core Features</h4>
                                <ul className="space-y-3">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-sm text-gray-400">
                                            <ChevronRight className="w-4 h-4 text-[#ff0055] mr-2 gap-0 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {project.links && Object.keys(project.links).length > 0 && (
                                <div className="mt-auto pt-8 flex gap-4 border-t border-white/10">
                                    {project.links.demo && (
                                        <button onClick={() => window.open(project.links.demo, "_blank")} className="flex items-center text-sm font-semibold text-white hover:text-[#ff0055] transition-colors">
                                            <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                                        </button>
                                    )}
                                    {project.links.github && (
                                        <button onClick={() => window.open(project.links.github, "_blank")} className="flex items-center text-sm font-semibold text-gray-400 hover:text-white transition-colors">
                                            <Github className="w-4 h-4 mr-2" /> GitHub
                                        </button>
                                    )}
                                </div>
                            )}
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
