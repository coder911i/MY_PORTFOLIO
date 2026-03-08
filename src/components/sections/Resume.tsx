import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

export function Resume() {
    return (
        <section id="resume" className="pt-32 relative z-10 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <SectionHeading
                title="Resume"
                subtitle="A full overview of my experience, education, and technical abilities."
                className="text-center mx-auto mb-16"
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bento-card border border-white/5 overflow-hidden"
            >
                <div className="glow-effect" />
                <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Left */}
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-20 rounded-xl bg-[#ff0055]/10 border border-[#ff0055]/20 flex items-center justify-center">
                            <FileText className="w-8 h-8 text-[#ff0055]" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-extrabold text-white mb-2">Tanishq Sharma – Resume</h3>
                            <p className="text-gray-400 text-sm max-w-sm">Backend Engineer · AI Systems Builder · Distributed Systems Developer</p>
                            <div className="flex gap-4 mt-3">
                                {["Node.js", "Java", "Python", "AI Apps"].map(t => (
                                    <span key={t} className="text-xs font-medium text-gray-500 px-2 py-1 rounded-lg bg-white/5 border border-white/5">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right with CTA */}
                    <div className="flex flex-col gap-4 items-center md:items-end">
                        <a
                            href="/resume.pdf"
                            download="Tanishq_Sharma_Resume.pdf"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-[#ff0055] hover:bg-[#cc0044] text-white rounded-full font-bold text-base tracking-wide transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,0,85,0.4)] hover:shadow-[0_0_60px_rgba(255,0,85,0.6)]"
                        >
                            <Download className="w-5 h-5" />
                            Download Resume
                        </a>
                        <p className="text-xs text-gray-600">PDF format · Last updated 2026</p>
                    </div>
                </div>

                {/* Resume highlights strip */}
                <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 border-t border-white/5">
                    {[
                        { label: "Backend Expertise", val: "Node.js, Java, Python" },
                        { label: "Experience", val: "2+ Years" },
                        { label: "Companies", val: "3 Orgs" },
                        { label: "Projects", val: "5+ Shipped" },
                    ].map((item) => (
                        <div key={item.label} className="px-6 py-5 border-r border-white/5 last:border-r-0">
                            <div className="text-white font-bold text-lg">{item.val}</div>
                            <div className="text-gray-500 text-xs mt-1">{item.label}</div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
