import React, { useRef, useState } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    tilt?: boolean;
}

export function Card({ children, className, tilt = true, ...props }: CardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!tilt || !cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateXValue = ((y - centerY) / centerY) * -10; // Max 10 deg
        const rotateYValue = ((x - centerX) / centerX) * 10;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
                rotateX: tilt ? rotateX : 0,
                rotateY: tilt ? rotateY : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn(
                "glass-card rounded-2xl p-6 relative overflow-hidden group border border-white/5",
                "hover:border-primary/50 transition-colors duration-500",
                className
            )}
            style={{ transformStyle: "preserve-3d" }}
            {...props}
        >
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            {/* Content wrapper to preserve 3D context */}
            <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}
