"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const posRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef<number | null>(null);

    const pollIframeCursor = useCallback(() => {
        const iframes = document.querySelectorAll("iframe");
        let overIframe = false;

        iframes.forEach((iframe) => {
            const rect = iframe.getBoundingClientRect();
            const { x, y } = posRef.current;
            if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
                overIframe = true;
            }
        });

        if (overIframe && cursorRef.current) {
            cursorRef.current.style.opacity = "0";
        } else if (cursorRef.current) {
            cursorRef.current.style.opacity = "";
        }
    }, []);

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
            posRef.current = { x: e.clientX, y: e.clientY };
            xTo(e.clientX);
            yTo(e.clientY);
        };

        // Transparent overlays on iframes to keep receiving mouse events
        const overlays: HTMLDivElement[] = [];
        const iframes = document.querySelectorAll("iframe");
        iframes.forEach((iframe) => {
            const overlay = document.createElement("div");
            overlay.style.cssText = "position:absolute;inset:0;z-index:1;cursor:none;";
            const parent = iframe.parentElement;
            if (parent) {
                if (getComputedStyle(parent).position === "static") {
                    parent.style.position = "relative";
                }
                parent.appendChild(overlay);
                overlays.push(overlay);

                overlay.addEventListener("mousemove", (e) => {
                    posRef.current = { x: e.clientX, y: e.clientY };
                    xTo(e.clientX);
                    yTo(e.clientY);
                });

                // Let clicks through to the iframe
                overlay.addEventListener("mousedown", () => {
                    overlay.style.pointerEvents = "none";
                    setTimeout(() => { overlay.style.pointerEvents = ""; }, 100);
                });
            }
        });

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            overlays.forEach((o) => o.remove());
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [pollIframeCursor]);

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
