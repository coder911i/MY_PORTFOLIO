import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
    return (
        <motion.div
            {...props}
            className={cn(
                "bento-card group p-6 lg:p-8",
                className
            )}
        >
            {/* Contextual Radial Glow that follows mouse is handled globally in index.css (.glow-effect) */}
            <div className="glow-effect" />
            <div className="relative z-10 h-full flex flex-col">
                {children}
            </div>
        </motion.div>
    );
}
