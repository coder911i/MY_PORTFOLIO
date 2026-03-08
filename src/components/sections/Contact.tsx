import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

export function Contact() {
    return (
        <section id="contact" className="py-24 relative z-10 bg-black/40">
            <div className="container mx-auto px-6 max-w-5xl">
                <SectionHeading
                    title="Get In Touch"
                    subtitle="Open to Backend Engineering, Systems Engineering, and AI Infrastructure roles."
                    className="items-center text-center mx-auto"
                />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 max-w-3xl mx-auto align-middle"
                >
                    <div className="glass-card rounded-[2.5rem] p-8 md:p-14 border border-white/10 relative overflow-hidden group">
                        {/* Ambient Background Glow */}
                        <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-primary/30 transition-colors duration-700" />
                        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-indigo-500/30 transition-colors duration-700" />

                        <div className="grid md:grid-cols-2 gap-12 relative z-10">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">Tanishq Sharma</h3>
                                    <p className="text-primary text-lg">Backend & Systems Engineer</p>
                                </div>

                                <div className="space-y-6">
                                    <a href="mailto:tanishqsharma1580@gmail.com" className="flex items-center text-gray-300 hover:text-white group/link transition-colors">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4 group-hover/link:bg-primary/20 group-hover/link:text-primary transition-colors">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <span className="text-lg">tanishqsharma1580@gmail.com</span>
                                    </a>

                                    <div className="flex items-center text-gray-300">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4">
                                            <MapPin className="w-5 h-5 text-gray-400" />
                                        </div>
                                        <span className="text-lg">Meerut, Uttar Pradesh</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center space-y-6 md:border-l border-white/10 md:pl-12">
                                <a
                                    href="https://linkedin.com/in/tanishqsharma"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full flex items-center justify-center p-4 glass rounded-xl hover:bg-white/10 transition-all hover:scale-105 active:scale-95 group/btn border border-white/5 hover:border-white/20"
                                >
                                    <Linkedin className="w-6 h-6 mr-3 text-[#0A66C2] group-hover/btn:text-white transition-colors" />
                                    <span className="text-lg font-medium">LinkedIn Profile</span>
                                </a>

                                <a
                                    href="https://github.com/coder911i" // Assumption based on earlier link, can be removed if not needed 
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full flex items-center justify-center p-4 glass rounded-xl hover:bg-white/10 transition-all hover:scale-105 active:scale-95 group/btn border border-white/5 hover:border-white/20"
                                >
                                    <Github className="w-6 h-6 mr-3 text-white" />
                                    <span className="text-lg font-medium">GitHub Profile</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
