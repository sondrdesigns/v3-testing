"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cursorRef.current) return;

        // Check if device is touch or has no fine pointer
        if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
            cursorRef.current.style.display = "none";
            return;
        }

        const cursor = cursorRef.current;

        // Quick setter for better performance
        const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });

        const onMouseMove = (e: MouseEvent) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-8 h-8 rounded-full bg-brand-accent mix-blend-exclusion pointer-events-none z-[9999] opacity-0 md:opacity-100 hidden md:block"
            style={{
                transform: "translate(-50%, -50%)",
            }}
        />
    );
}
