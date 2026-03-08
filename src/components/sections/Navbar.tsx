import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Highlight active section based on scroll position
            const sections = navItems.map((item) => item.name.toLowerCase());
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= element.offsetTop - 200) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <div className="container mx-auto px-6 pointer-events-auto flex justify-center">
                <nav
                    className={cn(
                        "flex items-center gap-1 md:gap-2 px-4 py-2 rounded-full transition-all duration-500",
                        scrolled
                            ? "glass-card shadow-lg shadow-black/20 border border-white/10"
                            : "bg-transparent"
                    )}
                >
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "relative px-4 py-2 text-sm font-medium transition-colors hover:text-white rounded-full",
                                activeSection === item.name.toLowerCase()
                                    ? "text-white"
                                    : "text-white/60"
                            )}
                        >
                            {activeSection === item.name.toLowerCase() && (
                                <motion.div
                                    layoutId="activeSection"
                                    className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{item.name}</span>
                        </a>
                    ))}
                </nav>
            </div>
        </motion.header>
    );
}
