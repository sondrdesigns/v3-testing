"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const overlaysRef = useRef<HTMLDivElement[]>([]);

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

        const setupOverlay = (iframe: HTMLIFrameElement) => {
            if (iframe.dataset.cursorOverlay) return;
            iframe.dataset.cursorOverlay = "true";

            const overlay = document.createElement("div");
            overlay.style.cssText = "position:absolute;inset:0;z-index:1;cursor:none;";
            const parent = iframe.parentElement;
            if (!parent) return;

            if (getComputedStyle(parent).position === "static") {
                parent.style.position = "relative";
            }
            parent.appendChild(overlay);
            overlaysRef.current.push(overlay);

            overlay.addEventListener("mousemove", (e) => {
                xTo(e.clientX);
                yTo(e.clientY);
            });

            overlay.addEventListener("mousedown", (e) => {
                overlay.style.pointerEvents = "none";
                const el = document.elementFromPoint(e.clientX, e.clientY);
                if (el && el !== overlay) (el as HTMLElement).click?.();
                requestAnimationFrame(() => {
                    overlay.style.pointerEvents = "";
                });
            });
        };

        // Set up overlays on existing iframes
        document.querySelectorAll("iframe").forEach(setupOverlay);

        // Watch for dynamically added iframes (e.g. Calendly)
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                for (const node of mutation.addedNodes) {
                    if (node instanceof HTMLIFrameElement) {
                        setupOverlay(node);
                    }
                    if (node instanceof HTMLElement) {
                        node.querySelectorAll("iframe").forEach(setupOverlay);
                    }
                }
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            observer.disconnect();
            overlaysRef.current.forEach((o) => o.remove());
            overlaysRef.current = [];
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
