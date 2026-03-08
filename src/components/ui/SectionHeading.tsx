import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
    return (
        <div className={cn("mb-16 md:mb-24 text-center md:text-left", className)}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        {title}
                    </span>
                    <span className="text-primary ml-2">.</span>
                </h2>
                {subtitle && (
                    <p className="text-muted text-lg md:text-xl max-w-2xl bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-500">
                        {subtitle}
                    </p>
                )}
            </motion.div>
        </div>
    );
}
