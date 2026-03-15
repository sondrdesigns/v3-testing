"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cursorRef.current) return;

        if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
            cursorRef.current.style.display = "none";
            return;
        }

        const cursor = cursorRef.current;
        const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });

        const onMouseMove = (e: MouseEvent) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };

        // Hide cursor when mouse enters an iframe, show when it returns
        const onDocumentLeave = () => {
            cursor.style.opacity = "0";
        };
        const onDocumentEnter = () => {
            cursor.style.opacity = "";
        };

        window.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseleave", onDocumentLeave);
        document.addEventListener("mouseenter", onDocumentEnter);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseleave", onDocumentLeave);
            document.removeEventListener("mouseenter", onDocumentEnter);
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
