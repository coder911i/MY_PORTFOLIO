import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

const projects = [
    {
        title: "AeroLoad.ai",
        subtitle: "Aircraft Cargo Optimization Platform",
        description: "AI platform designed for aircraft cargo optimization and intelligent load planning.",
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
        title: "Suvidha.ai",
        subtitle: "FinTech Automation Platform",
        description: "FinTech backend platform automating NBFC loan and payment workflows.",
        features: [
            "Rule-based approval engine",
            "REST API architecture",
            "Automated financial workflows",
            "Real-time communication using Socket.io"
        ],
        links: {
            // Intentionally omitting for this specific entry per request context
        }
    },
    {
        title: "Face-Based Attendance System",
        subtitle: "Smart India Hackathon",
        description: "Smart attendance system integrating facial recognition pipelines and backend APIs.",
        features: [
            "Facial recognition integration",
            "Attendance APIs",
            "Analytics dashboards",
            "Real-time data handling"
        ],
        links: {
            // No external links instructed
        }
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-24 relative z-10 w-full">
            <div className="container mx-auto px-6 max-w-6xl">
                <SectionHeading
                    title="Featured Systems"
                    subtitle="Complex technical projects demonstrating architecture, AI integrations, and backend scalability."
                />

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={project.featured ? "md:col-span-2" : "col-span-1"}
                        >
                            <Card className="h-full flex flex-col p-8 group border border-white/5 hover:border-[#38bdf8]/50 transition-colors duration-500 overflow-hidden relative">

                                {/* Accent glow on hover */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <div className="flex justify-between items-start mb-6 relative z-10">
                                    <h3 className="text-3xl font-extrabold text-white tracking-tight">
                                        {project.title}
                                        <span className="block text-xl font-medium text-[#38bdf8] mt-2">
                                            {project.subtitle}
                                        </span>
                                    </h3>
                                </div>

                                <p className="text-gray-400 mb-8 text-lg leading-relaxed relative z-10 font-light">
                                    {project.description}
                                </p>

                                <div className="mb-8 relative z-10">
                                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-4">Core Features</h4>
                                    <ul className="space-y-3">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-start text-gray-400">
                                                <ChevronRight className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {project.links && Object.keys(project.links).length > 0 && (
                                    <div className="mt-auto pt-8 flex flex-wrap gap-4 border-t border-white/10 relative z-10">
                                        {project.links.demo && (
                                            <Button onClick={() => window.open(project.links.demo, "_blank")} className="bg-white text-black hover:bg-gray-200 shadow-none font-medium">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Live Demo
                                            </Button>
                                        )}
                                        {project.links.github && (
                                            <Button variant="outline" onClick={() => window.open(project.links.github, "_blank")} className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 font-medium">
                                                <Github className="w-4 h-4 mr-2" />
                                                GitHub
                                            </Button>
                                        )}
                                    </div>
                                )}
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
