import { motion } from "framer-motion";
import { Award, Code2, Download } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

const achievements = [
    {
        title: "EY Techathon 6.0",
        role: "Shortlisted Finalist",
        icon: <Award className="w-6 h-6 text-primary" />
    },
    {
        title: "Smart India Hackathon",
        role: "Participant",
        icon: <Code2 className="w-6 h-6 text-primary" />
    },
    {
        title: "Contributor to backend engineering and distributed system design",
        role: "Open Source / Independent",
        icon: <Code2 className="w-6 h-6 text-primary" />
    }
];

const highlights = [
    "Backend engineering",
    "Distributed systems",
    "API architecture",
    "Automation pipelines",
    "Performance optimization"
];

export function AchievementsAndResume() {
    return (
        <section id="achievements" className="py-24 relative z-10">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Achievements Column */}
                    <div>
                        <SectionHeading
                            title="Achievements"
                            subtitle="Hackathons and technical milestones."
                            className="mb-12 md:max-w-md"
                        />
                        <div className="space-y-6">
                            {achievements.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-start gap-4 p-6 glass-card rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group"
                                >
                                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400">
                                            {item.role}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Resume Column */}
                    <div className="mt-12 md:mt-0">
                        <SectionHeading
                            title="Resume"
                            className="mb-12 md:max-w-md opacity-0 invisible hidden md:block" // Hidden but takes space for alignment
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="h-full"
                        >
                            <Card className="p-10 h-full flex flex-col justify-between" tilt={false}>
                                <div>
                                    <h3 className="text-3xl font-bold tracking-tight mb-4 text-white">Full Resume</h3>
                                    <p className="text-gray-400 mb-8 leading-relaxed">
                                        A comprehensive overview of my experience, skills, and technical background.
                                    </p>

                                    <div className="mb-8">
                                        <h4 className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Core Competencies</h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-grow">
                                            {highlights.map((highlight, index) => (
                                                <li key={index} className="flex items-center text-sm text-gray-300">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <Button size="lg" className="w-full mt-4 h-14 text-lg" onClick={() => window.open("/resume.pdf", "_blank")}>
                                    <Download className="w-5 h-5 mr-3" />
                                    Download Documentation
                                </Button>
                            </Card>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
