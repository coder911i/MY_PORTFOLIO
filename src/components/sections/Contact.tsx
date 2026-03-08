import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

export function Contact() {
    return (
        <section id="contact" className="py-24 relative z-10 w-full bg-gradient-to-t from-[#02040a] to-transparent">
            <div className="container mx-auto px-6 max-w-4xl">
                <SectionHeading
                    title="Contact Parameters"
                    subtitle="Open to Backend Engineering, Systems Engineering, and AI Infrastructure roles."
                    className="text-center mx-auto mb-16"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="mx-auto"
                >
                    <div className="glass-card rounded-[2rem] p-8 md:p-12 border border-white/10 relative overflow-hidden group">
                        {/* Ambient Background Glow */}
                        <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors duration-1000" />
                        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-1000" />

                        <div className="grid md:grid-cols-2 gap-12 relative z-10 items-center">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-4xl font-extrabold text-white mb-2 tracking-tight">Tanishq Sharma</h3>
                                    <div className="w-12 h-1 bg-primary rounded-full mt-4 mb-4" />
                                </div>

                                <div className="space-y-6">
                                    <a href="mailto:tanishqsharma1580@gmail.com" className="flex items-center text-gray-400 hover:text-white transition-colors group/link w-fit">
                                        <Mail className="w-5 h-5 mr-4 text-primary group-hover/link:text-white transition-colors" />
                                        <span className="text-lg font-light">tanishqsharma1580@gmail.com</span>
                                    </a>

                                    <div className="flex items-center text-gray-400">
                                        <MapPin className="w-5 h-5 mr-4 text-indigo-400" />
                                        <span className="text-lg font-light">Meerut, Uttar Pradesh</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center space-y-6 md:pl-12 md:border-l border-white/10">
                                <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-2">Social / Professional</p>
                                <a
                                    href="https://www.linkedin.com/in/tanishq-sharma-9886bb21a/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full flex items-center justify-between p-5 bg-white/5 rounded-xl hover:bg-white/10 transition-all group/btn border border-white/5 hover:border-primary/50"
                                >
                                    <div className="flex items-center">
                                        <Linkedin className="w-6 h-6 mr-4 text-[#0A66C2] group-hover/btn:scale-110 transition-transform" />
                                        <span className="text-lg font-medium text-white">LinkedIn Profile</span>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover/btn:text-white transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
