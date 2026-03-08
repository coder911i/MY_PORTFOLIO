import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

interface Node {
    id: string;
    x: number;
    y: number;
    label: string;
    category: string;
    connections: string[];
}

const nodes: Node[] = [
    { id: "center", x: 50, y: 50, label: "Tanishq Sharma", category: "center", connections: ["java", "python", "cpp", "nodejs", "mysql", "ai", "git", "n8n", "websockets"] },
    { id: "java", x: 50, y: 18, label: "Java", category: "lang", connections: ["spring", "center"] },
    { id: "python", x: 25, y: 25, label: "Python", category: "lang", connections: ["ai", "center"] },
    { id: "cpp", x: 15, y: 48, label: "C++", category: "lang", connections: ["center"] },
    { id: "nodejs", x: 75, y: 22, label: "Node.js", category: "backend", connections: ["express", "center"] },
    { id: "express", x: 88, y: 38, label: "Express.js", category: "backend", connections: ["nodejs", "restapi"] },
    { id: "spring", x: 65, y: 10, label: "Spring Boot", category: "backend", connections: ["java", "restapi"] },
    { id: "restapi", x: 85, y: 58, label: "REST APIs", category: "backend", connections: ["express"] },
    { id: "mysql", x: 20, y: 72, label: "MySQL", category: "db", connections: ["center", "postgres"] },
    { id: "postgres", x: 38, y: 80, label: "PostgreSQL", category: "db", connections: ["mysql"] },
    { id: "mongo", x: 62, y: 82, label: "MongoDB", category: "db", connections: ["nodejs"] },
    { id: "websockets", x: 78, y: 72, label: "WebSockets", category: "realtime", connections: ["center", "socketio"] },
    { id: "socketio", x: 92, y: 62, label: "Socket.io", category: "realtime", connections: ["websockets"] },
    { id: "webrtc", x: 90, y: 80, label: "WebRTC", category: "realtime", connections: ["socketio"] },
    { id: "ai", x: 12, y: 35, label: "AI Apps", category: "ai", connections: ["center", "prompt"] },
    { id: "prompt", x: 8, y: 60, label: "Prompt Eng.", category: "ai", connections: ["ai"] },
    { id: "n8n", x: 28, y: 90, label: "n8n", category: "auto", connections: ["center", "zapier"] },
    { id: "zapier", x: 48, y: 95, label: "Zapier", category: "auto", connections: ["n8n"] },
    { id: "git", x: 68, y: 96, label: "Git", category: "tools", connections: ["center"] },
    { id: "postman", x: 10, y: 82, label: "Postman", category: "tools", connections: ["restapi"] },
    { id: "jmeter", x: 18, y: 92, label: "JMeter", category: "tools", connections: ["postman"] },
];

const categoryColors: Record<string, string> = {
    center: "#ff0055",
    lang: "#6b21a8",
    backend: "#2563eb",
    db: "#059669",
    realtime: "#d97706",
    ai: "#ec4899",
    auto: "#7c3aed",
    tools: "#64748b",
};

export function TechGraph() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);
    const [tooltip, setTooltip] = useState<{ x: number; y: number; label: string } | null>(null);
    const animRef = useRef<number>(0);
    const timeRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeObserver = new ResizeObserver(() => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        });
        resizeObserver.observe(canvas);

        const getPos = (node: Node) => ({
            x: (node.x / 100) * canvas.offsetWidth,
            y: (node.y / 100) * canvas.offsetHeight,
        });

        function drawFrame(time: number) {
            if (!canvas || !ctx) return;
            timeRef.current = time;
            ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

            // Draw connections
            nodes.forEach((node) => {
                node.connections.forEach((connId) => {
                    const target = nodes.find((n) => n.id === connId);
                    if (!target) return;
                    const from = getPos(node);
                    const to = getPos(target);

                    const isActive = hoveredNode === node.id || hoveredNode === connId;
                    const alpha = isActive ? 0.6 : 0.15 + 0.05 * Math.sin(time / 2000 + node.x);

                    const grad = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
                    grad.addColorStop(0, `rgba(255,0,85,${alpha})`);
                    grad.addColorStop(1, `rgba(107,33,168,${alpha})`);

                    ctx.beginPath();
                    ctx.moveTo(from.x, from.y);
                    ctx.lineTo(to.x, to.y);
                    ctx.strokeStyle = grad;
                    ctx.lineWidth = isActive ? 2 : 1;
                    ctx.stroke();

                    // Traveling pulse dot
                    if (isActive) {
                        const t = ((time / 1500) % 1);
                        const px = from.x + (to.x - from.x) * t;
                        const py = from.y + (to.y - from.y) * t;
                        ctx.beginPath();
                        ctx.arc(px, py, 3, 0, Math.PI * 2);
                        ctx.fillStyle = "#ff0055";
                        ctx.fill();
                    }
                });
            });

            // Draw nodes
            nodes.forEach((node) => {
                const pos = getPos(node);
                const isCenter = node.id === "center";
                const isHovered = hoveredNode === node.id;
                const color = categoryColors[node.category] || "#888";
                const radius = isCenter ? 18 : isHovered ? 11 : 7;
                const glowSize = isHovered || isCenter ? 25 : 12;

                // Outer glow
                const grd = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, glowSize);
                grd.addColorStop(0, color + "88");
                grd.addColorStop(1, "transparent");
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, glowSize, 0, Math.PI * 2);
                ctx.fillStyle = grd;
                ctx.fill();

                // Node circle
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
                ctx.fillStyle = isHovered || isCenter ? color : color + "cc";
                ctx.fill();
                ctx.strokeStyle = "rgba(255,255,255,0.3)";
                ctx.lineWidth = 1.5;
                ctx.stroke();

                // Label (always visible, small; larger for hovered)
                if (isCenter || isHovered) {
                    ctx.font = isCenter ? "bold 13px Inter, sans-serif" : "bold 11px Inter, sans-serif";
                    ctx.fillStyle = "#ffffff";
                    ctx.textAlign = "center";
                    ctx.fillText(node.label, pos.x, pos.y - radius - 8);
                } else {
                    ctx.font = "10px Inter, sans-serif";
                    ctx.fillStyle = "rgba(255,255,255,0.5)";
                    ctx.textAlign = "center";
                    ctx.fillText(node.label, pos.x, pos.y + radius + 12);
                }
            });

            animRef.current = requestAnimationFrame(drawFrame);
        }

        animRef.current = requestAnimationFrame(drawFrame);
        return () => {
            cancelAnimationFrame(animRef.current);
            resizeObserver.disconnect();
        };
    }, [hoveredNode]);

    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;

        let found: string | null = null;
        nodes.forEach((node) => {
            const nx = (node.x / 100) * canvas.offsetWidth;
            const ny = (node.y / 100) * canvas.offsetHeight;
            const dist = Math.hypot(mx - nx, my - ny);
            const radius = node.id === "center" ? 20 : 14;
            if (dist < radius) {
                found = node.id;
                setTooltip({ x: e.clientX - rect.left, y: my - 40, label: node.label });
            }
        });

        setHoveredNode(found);
        if (!found) setTooltip(null);
    };

    return (
        <section id="tech-stack" className="pt-32 relative z-10 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <SectionHeading
                title="Technology Network"
                subtitle="An interactive neural map of the technologies I work with. Hover to explore connections."
                className="text-center mx-auto mb-16"
            />

            {/* Legend */}
            <div className="flex flex-wrap gap-4 justify-center mb-10">
                {Object.entries(categoryColors).filter(([k]) => k !== "center").map(([cat, color]) => (
                    <div key={cat} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
                        <span className="text-xs text-gray-400 capitalize">{cat === "lang" ? "Languages" : cat === "auto" ? "Automation" : cat === "db" ? "Databases" : cat === "realtime" ? "Realtime" : cat === "backend" ? "Backend" : cat === "ai" ? "AI / LLM" : "Tools"}</span>
                    </div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="relative w-full rounded-3xl overflow-hidden border border-white/5"
                style={{ background: "rgba(5,5,5,0.9)" }}
            >
                {/* Ambient glow behind canvas */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff0055]/10 blur-[120px] rounded-full" />
                    <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-[#6b21a8]/10 blur-[100px] rounded-full" />
                </div>

                <canvas
                    ref={canvasRef}
                    className="w-full cursor-crosshair relative z-10"
                    style={{ height: "600px" }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => { setHoveredNode(null); setTooltip(null); }}
                />

                {/* Tooltip */}
                {tooltip && (
                    <div
                        className="absolute pointer-events-none px-4 py-2 bg-black/90 text-white text-sm font-medium rounded-lg border border-[#ff0055]/30 backdrop-blur-md z-20 whitespace-nowrap"
                        style={{ left: tooltip.x, top: tooltip.y, transform: "translateX(-50%)" }}
                    >
                        {tooltip.label}
                    </div>
                )}
            </motion.div>
        </section>
    );
}
