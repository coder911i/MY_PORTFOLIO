import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

interface Node {
    id: string; x: number; y: number; label: string; category: string; connections: string[];
}

const nodes: Node[] = [
    { id: "center", x: 50, y: 50, label: "Tanishq Sharma", category: "center", connections: ["java", "python", "nodejs", "mysql", "ai", "git", "websockets", "n8n"] },
    { id: "java", x: 50, y: 15, label: "Java", category: "lang", connections: ["spring", "center"] },
    { id: "python", x: 22, y: 22, label: "Python", category: "lang", connections: ["ai", "center"] },
    { id: "cpp", x: 12, y: 48, label: "C++", category: "lang", connections: ["center"] },
    { id: "nodejs", x: 78, y: 20, label: "Node.js", category: "backend", connections: ["express", "center"] },
    { id: "express", x: 90, y: 38, label: "Express.js", category: "backend", connections: ["nodejs"] },
    { id: "spring", x: 68, y: 8, label: "Spring Boot", category: "backend", connections: ["java"] },
    { id: "restapi", x: 88, y: 60, label: "REST APIs", category: "backend", connections: ["express"] },
    { id: "mysql", x: 18, y: 75, label: "MySQL", category: "db", connections: ["center"] },
    { id: "postgres", x: 38, y: 85, label: "PostgreSQL", category: "db", connections: ["mysql"] },
    { id: "mongo", x: 62, y: 85, label: "MongoDB", category: "db", connections: ["nodejs"] },
    { id: "websockets", x: 82, y: 72, label: "WebSockets", category: "realtime", connections: ["center"] },
    { id: "socketio", x: 94, y: 80, label: "Socket.io", category: "realtime", connections: ["websockets"] },
    { id: "ai", x: 10, y: 32, label: "AI Apps", category: "ai", connections: ["center"] },
    { id: "prompt", x: 5, y: 58, label: "Prompt Eng.", category: "ai", connections: ["ai"] },
    { id: "n8n", x: 28, y: 92, label: "n8n", category: "auto", connections: ["center"] },
    { id: "zapier", x: 50, y: 95, label: "Zapier", category: "auto", connections: ["n8n"] },
    { id: "git", x: 70, y: 94, label: "Git", category: "tools", connections: ["center"] },
];

const categoryColors: Record<string, string> = {
    center: "#ff0055", lang: "#6b21a8", backend: "#2563eb",
    db: "#059669", realtime: "#d97706", ai: "#ec4899",
    auto: "#7c3aed", tools: "#64748b",
};

export function TechGraph() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [hovered, setHovered] = useState<string | null>(null);
    const [tooltip, setTooltip] = useState<{ x: number; y: number; label: string } | null>(null);
    const rafRef = useRef<number>(0);
    const hoveredRef = useRef<string | null>(null);
    const isVisible = useRef(false);

    hoveredRef.current = hovered;

    const draw = useCallback((time: number) => {
        if (!isVisible.current) { rafRef.current = requestAnimationFrame(draw); return; }
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const W = canvas.offsetWidth, H = canvas.offsetHeight;

        ctx.clearRect(0, 0, W, H);
        const getPos = (n: Node) => ({ x: (n.x / 100) * W, y: (n.y / 100) * H });
        const hn = hoveredRef.current;

        // Draw connections (simple, no pulse on non-hovered)
        nodes.forEach(node => {
            node.connections.forEach(cid => {
                const target = nodes.find(n => n.id === cid);
                if (!target) return;
                const from = getPos(node), to = getPos(target);
                const isActive = hn === node.id || hn === cid;
                ctx.beginPath();
                ctx.moveTo(from.x, from.y);
                ctx.lineTo(to.x, to.y);
                ctx.strokeStyle = isActive ? "rgba(255,0,85,0.5)" : "rgba(255,255,255,0.08)";
                ctx.lineWidth = isActive ? 1.5 : 0.8;
                ctx.stroke();

                // Only animate pulse on hovered connections
                if (isActive) {
                    const t = ((time / 1200) % 1);
                    const px = from.x + (to.x - from.x) * t;
                    const py = from.y + (to.y - from.y) * t;
                    ctx.beginPath(); ctx.arc(px, py, 2.5, 0, Math.PI * 2);
                    ctx.fillStyle = "#ff0055"; ctx.fill();
                }
            });
        });

        // Draw nodes
        nodes.forEach(node => {
            const { x, y } = getPos(node);
            const isCenter = node.id === "center";
            const isHov = hn === node.id;
            const color = categoryColors[node.category] || "#888";
            const r = isCenter ? 16 : isHov ? 10 : 6;

            if (isHov || isCenter) {
                const grd = ctx.createRadialGradient(x, y, 0, x, y, isCenter ? 30 : 20);
                grd.addColorStop(0, color + "55"); grd.addColorStop(1, "transparent");
                ctx.beginPath(); ctx.arc(x, y, isCenter ? 30 : 20, 0, Math.PI * 2);
                ctx.fillStyle = grd; ctx.fill();
            }

            ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = color + (isHov || isCenter ? "ff" : "cc");
            ctx.fill();
            ctx.strokeStyle = "rgba(255,255,255,0.2)"; ctx.lineWidth = 1; ctx.stroke();

            ctx.font = isCenter ? "bold 12px Inter,sans-serif" : "10px Inter,sans-serif";
            ctx.fillStyle = isCenter || isHov ? "#ffffff" : "rgba(255,255,255,0.45)";
            ctx.textAlign = "center";
            ctx.fillText(node.label, x, y + r + 12);
        });

        rafRef.current = requestAnimationFrame(draw);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ro = new ResizeObserver(() => {
            const dpr = Math.min(window.devicePixelRatio, 2); // cap at 2x DPR
            canvas.width = canvas.offsetWidth * dpr;
            canvas.height = canvas.offsetHeight * dpr;
            const ctx = canvas.getContext("2d");
            if (ctx) ctx.scale(dpr, dpr);
        });
        ro.observe(canvas);

        const io = new IntersectionObserver(([entry]) => { isVisible.current = entry.isIntersecting; }, { threshold: 0.1 });
        io.observe(canvas);

        rafRef.current = requestAnimationFrame(draw);
        return () => { cancelAnimationFrame(rafRef.current); ro.disconnect(); io.disconnect(); };
    }, [draw]);

    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left, my = e.clientY - rect.top;
        let found: string | null = null;
        nodes.forEach(n => {
            const nx = (n.x / 100) * canvas.offsetWidth, ny = (n.y / 100) * canvas.offsetHeight;
            if (Math.hypot(mx - nx, my - ny) < (n.id === "center" ? 20 : 14)) {
                found = n.id;
                setTooltip({ x: mx, y: my - 40, label: n.label });
            }
        });
        setHovered(found);
        if (!found) setTooltip(null);
    };

    return (
        <section id="tech-stack" className="pt-32 relative z-10 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <SectionHeading
                title="Technology Network"
                subtitle="An interactive map of technologies I work with. Hover to explore."
                className="text-center mx-auto mb-12"
            />
            <div className="flex flex-wrap gap-4 justify-center mb-8">
                {(Object.entries(categoryColors)).filter(([k]) => k !== "center").map(([cat, color]) => (
                    <div key={cat} className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
                        <span className="text-xs text-gray-500 capitalize">{
                            { lang: "Languages", backend: "Backend", db: "Databases", realtime: "Realtime", ai: "AI/LLM", auto: "Automation", tools: "Tools" }[cat] || cat
                        }</span>
                    </div>
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative w-full rounded-3xl overflow-hidden border border-white/5"
                style={{ background: "rgba(5,5,5,0.95)" }}
            >
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#ff0055]/5 blur-[100px] rounded-full" />
                </div>
                <canvas
                    ref={canvasRef} style={{ height: "520px" }}
                    className="w-full cursor-crosshair relative z-10"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => { setHovered(null); setTooltip(null); }}
                />
                {tooltip && (
                    <div className="absolute pointer-events-none px-4 py-2 bg-black/90 text-white text-sm font-medium rounded-lg border border-[#ff0055]/30 z-20 whitespace-nowrap"
                        style={{ left: tooltip.x, top: tooltip.y, transform: "translateX(-50%)" }}>
                        {tooltip.label}
                    </div>
                )}
            </motion.div>
        </section>
    );
}
