import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronDown, ChevronUp, Layers, Zap, Shield } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const projects = [
    {
        title: "AeroLoad.ai",
        subtitle: "AI Cargo Optimization System",
        description: "An AI platform designed for aircraft cargo optimization and intelligent load balancing. Built to handle real-world aviation constraints with precision and performance.",
        problem: "Airlines face complex cargo loading challenges that directly impact fuel efficiency and flight safety. Manual planning is error-prone and slow.",
        solution: "Built an AI-driven system that solves multi-constraint optimization problems using intelligent algorithms, reducing planning time drastically.",
        architecture: "Microservices-based backend with dedicated optimization and simulation services. REST APIs exposed via Express.js with JWT authentication. Real-time progress via WebSockets.",
        techStack: ["Node.js", "Express.js", "REST APIs", "AI Optimization", "WebSockets", "MongoDB"],
        links: {
            demo: "https://aeroload-website.vercel.app/",
            github: "https://github.com/coder911i/aeroload-website",
        },
        icon: <Layers className="w-6 h-6 text-[#ff0055]" />,
        color: "#ff0055",
        featured: true,
    },
    {
        title: "Suvidha.ai",
        subtitle: "FinTech Automation Platform",
        description: "A FinTech automation platform designed for NBFC loan and payment workflows, streamlining approval logic and communication pipelines.",
        problem: "NBFCs spend enormous manual effort on loan approval workflows with no automation layer, creating bottlenecks and delays.",
        solution: "Developed an intelligent rule-based approval engine with automated communication flows and real-time financial data handling.",
        architecture: "Event-driven architecture using Node.js. Rule evaluation engine at the core. Real-time customer notifications via Socket.io. MySQL as the primary transactional store.",
        techStack: ["Node.js", "Express.js", "Socket.io", "MySQL", "REST APIs", "Automation"],
        links: {},
        icon: <Zap className="w-6 h-6 text-[#6b21a8]" />,
        color: "#6b21a8",
        featured: false,
    },
    {
        title: "Face-Based Attendance",
        subtitle: "SIH Hackathon – Smart Attendance",
        description: "Smart attendance management system built for institutions using facial recognition pipelines and backend APIs.",
        problem: "Traditional attendance systems are prone to proxy attendance and administrative overhead.",
        solution: "Integrated a facial recognition pipeline with a robust backend. Built attendance analytics dashboards and real-time reporting APIs.",
        architecture: "Python-based ML pipeline for face recognition. Node.js REST API backend with MySQL. WebSocket-based real-time attendance status push to dashboards.",
        techStack: ["Python", "Node.js", "MySQL", "REST APIs", "WebSockets", "OpenCV"],
        links: {},
        icon: <Shield className="w-6 h-6 text-[#059669]" />,
        color: "#059669",
        featured: false,
    },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className={`bento-card border border-white/5 overflow-hidden ${project.featured ? "md:col-span-2" : "col-span-1"}`}
        >
            <div className="glow-effect" />
            <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
                        >
                            {project.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-extrabold text-white tracking-tight">{project.title}</h3>
                            <p className="text-sm font-medium mt-0.5" style={{ color: project.color }}>{project.subtitle}</p>
                        </div>
                    </div>
                    {project.featured && (
                        <span className="px-3 py-1 text-xs font-bold rounded-full" style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}>
                            Featured
                        </span>
                    )}
                </div>

                {/* Description */}
                <p className="text-gray-400 font-light leading-relaxed mb-6">{project.description}</p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((t) => (
                        <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300">{t}</span>
                    ))}
                </div>

                {/* Case Study Toggle */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="flex items-center gap-2 text-sm font-semibold mb-4 transition-all"
                    style={{ color: project.color }}
                >
                    {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    {expanded ? "Hide Case Study" : "View Case Study"}
                </button>

                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="overflow-hidden"
                        >
                            <div className="p-5 rounded-2xl space-y-5 mb-6" style={{ background: `${project.color}08`, border: `1px solid ${project.color}20` }}>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Problem</h4>
                                    <p className="text-sm text-gray-300 leading-relaxed">{project.problem}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Solution</h4>
                                    <p className="text-sm text-gray-300 leading-relaxed">{project.solution}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Architecture</h4>
                                    <p className="text-sm text-gray-300 leading-relaxed">{project.architecture}</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Links */}
                {Object.keys(project.links).length > 0 && (
                    <div className="mt-auto pt-6 flex gap-6 border-t border-white/5">
                        {project.links.demo && (
                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm font-bold text-white hover:text-[#ff0055] transition-colors">
                                <ExternalLink className="w-4 h-4" /> Live Demo
                            </a>
                        )}
                        {project.links.github && (
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors">
                                <Github className="w-4 h-4" /> GitHub
                            </a>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export function Projects() {
    return (
        <section id="projects" className="pt-32 relative z-10 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <SectionHeading
                title="Featured Projects"
                subtitle="Real-world systems I have designed, architected, and shipped."
                className="text-center mx-auto mb-16"
            />
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((p, i) => (
                    <ProjectCard key={i} project={p} index={i} />
                ))}
            </div>
        </section>
    );
}
