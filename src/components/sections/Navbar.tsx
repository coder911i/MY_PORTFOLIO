import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "AI Products", href: "#ai-products" },
    { name: "Architecture", href: "#architecture" },
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
            const sections = navItems.map((item) => item.href.substring(1));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= element.offsetTop - 300) {
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
                scrolled ? "py-4 hidden md:block" : "py-6 hidden md:block"
            )}
        >
            <div className="container mx-auto px-6 pointer-events-auto flex justify-center">
                <nav
                    className={cn(
                        "flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500",
                        scrolled
                            ? "glass shadow-xl shadow-black/40 border border-white/10"
                            : "bg-transparent"
                    )}
                >
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.substring(1);
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium transition-colors hover:text-white rounded-full",
                                    isActive ? "text-white" : "text-white/50"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{item.name}</span>
                            </a>
                        );
                    })}
                </nav>
            </div>

            {/* Mobile Navbar Alternative */}
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 pointer-events-auto z-50">
                <nav className="glass shadow-xl shadow-black/40 border border-white/10 rounded-full flex items-center px-4 py-3 gap-4 overflow-x-auto max-w-[90vw]">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.substring(1);
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "relative whitespace-nowrap text-xs font-medium transition-colors hover:text-white rounded-full",
                                    isActive ? "text-primary" : "text-white/50"
                                )}
                            >
                                {item.name}
                            </a>
                        );
                    })}
                </nav>
            </div>
        </motion.header>
    );
}
