import { motion } from "framer-motion";
import { Mail, Linkedin, Send, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const contacts = [
    {
        icon: <Mail className="w-6 h-6 text-[#ff0055]" />,
        label: "Email",
        value: "tanishqsharma1580@gmail.com",
        href: "mailto:tanishqsharma1580@gmail.com",
        color: "#ff0055",
    },
    {
        icon: <Linkedin className="w-6 h-6 text-[#2563eb]" />,
        label: "LinkedIn",
        value: "tanishq-sharma",
        href: "https://www.linkedin.com/in/tanishq-sharma-9886bb21a/",
        color: "#2563eb",
    },
];

export function Contact() {
    return (
        <section id="contact" className="pt-32 pb-16 relative z-10 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <SectionHeading
                title="Get In Touch"
                subtitle="Have a project in mind, or just want to connect? I'm only a message away."
                className="text-center mx-auto mb-16"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Left – CTA block */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bento-card border border-white/5 p-8 md:p-12 overflow-hidden flex flex-col justify-between"
                >
                    <div className="glow-effect" />
                    <div className="relative z-10">
                        {/* Pulsing dot */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-3 h-3 rounded-full bg-[#ff0055] animate-pulse shadow-[0_0_12px_#ff0055]" />
                            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Currently Available</span>
                        </div>

                        <h3 className="text-4xl font-black text-white leading-tight mb-4">
                            Let's build something<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0055] to-[#6b21a8]">remarkable.</span>
                        </h3>
                        <p className="text-gray-400 font-light mb-10 leading-relaxed">
                            Whether you have a full-time role, a freelance project, or just want to talk engineering — I am open.
                        </p>

                        <a
                            href="mailto:tanishqsharma1580@gmail.com"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#ff0055] hover:bg-[#cc0044] text-white rounded-full font-bold text-sm tracking-wide transition-all hover:scale-105 active:scale-95 w-fit shadow-[0_0_30px_rgba(255,0,85,0.3)]"
                        >
                            <Send className="w-4 h-4" />
                            Send Email
                        </a>
                    </div>
                </motion.div>

                {/* Right – Contact cards */}
                <div className="flex flex-col gap-6">
                    {contacts.map((c, i) => (
                        <motion.a
                            key={i}
                            href={c.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            whileHover={{ scale: 1.02, x: 4 }}
                            className="bento-card flex items-center gap-6 p-6 border border-white/5 group cursor-pointer overflow-hidden"
                        >
                            <div className="glow-effect" />
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10 transition-all group-hover:scale-110"
                                style={{ background: `${c.color}15`, border: `1px solid ${c.color}30` }}
                            >
                                {c.icon}
                            </div>
                            <div className="relative z-10 flex-1">
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">{c.label}</p>
                                <p className="text-white font-semibold">{c.value}</p>
                            </div>
                            <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors relative z-10" />
                        </motion.a>
                    ))}

                    {/* Quick info card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bento-card border border-white/5 p-6 overflow-hidden"
                    >
                        <div className="glow-effect" />
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            {[
                                { label: "Location", val: "India 🇮🇳" },
                                { label: "Availability", val: "Open to Work" },
                                { label: "Response Time", val: "< 24 Hours" },
                                { label: "Work Type", val: "Full Time / Remote" },
                            ].map((item) => (
                                <div key={item.label}>
                                    <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">{item.label}</p>
                                    <p className="text-white font-semibold text-sm">{item.val}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
