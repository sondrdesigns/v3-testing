"use client"
import { useState, useRef, useId, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Stamp {
    id: number
    x: number
    y: number
    size: number
    rotation: number
}

interface PaintRevealProps {
    baseImage: string
    revealImage: string
    brushSize?: number
    fadeDuration?: number
    maxStamps?: number
    className?: string
}

export function PaintReveal({
    baseImage,
    revealImage,
    brushSize = 280,
    fadeDuration = 2.5,
    maxStamps = 60,
    className = "",
}: PaintRevealProps) {
    const [stamps, setStamps] = useState<Stamp[]>([])
    const containerRef = useRef<HTMLDivElement>(null)
    const idCounter = useRef(0)

    const reactId = useId()
    const maskId = "paint-mask-" + reactId.replace(/:/g, "")

    const getResponsiveBrushSize = useCallback(() => {
        if (!containerRef.current) return brushSize
        const w = containerRef.current.offsetWidth
        if (w < 768) return brushSize * 0.6
        if (w < 1024) return brushSize * 0.8
        return brushSize
    }, [brushSize])

    const addStamp = useCallback(
        (clientX: number, clientY: number) => {
            if (!containerRef.current) return
            const rect = containerRef.current.getBoundingClientRect()
            const size = getResponsiveBrushSize()
            const x = clientX - rect.left - size / 2
            const y = clientY - rect.top - size / 2
            const rotation = Math.random() * 360

            const stamp: Stamp = { id: idCounter.current++, x, y, size, rotation }
            setStamps((prev) => {
                const next = [...prev, stamp]
                return next.length > maxStamps ? next.slice(next.length - maxStamps) : next
            })
        },
        [getResponsiveBrushSize, maxStamps]
    )

    const removeStamp = useCallback((id: number) => {
        setStamps((prev) => prev.filter((s) => s.id !== id))
    }, [])

    const handlePointerMove = (e: React.PointerEvent) => {
        if (e.pointerType === "touch") return
        addStamp(e.clientX, e.clientY)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        e.preventDefault()
        if (e.touches.length > 0) {
            addStamp(e.touches[0].clientX, e.touches[0].clientY)
        }
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        if (e.touches.length > 0) {
            addStamp(e.touches[0].clientX, e.touches[0].clientY)
        }
    }

    return (
        <div
            ref={containerRef}
            onPointerMove={handlePointerMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            className={className}
            style={{
                position: "relative",
                overflow: "hidden",
                cursor: "crosshair",
                touchAction: "none",
                userSelect: "none",
                WebkitUserSelect: "none",
            }}
        >
            {/* Base image (grayscale) */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${baseImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "grayscale(100%)",
                }}
            />

            {/* Reveal image (color) — masked by paint strokes */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${revealImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    WebkitMask: `url(#${maskId})`,
                    mask: `url(#${maskId})`,
                }}
            />

            {/* SVG mask built from brush stamps */}
            <svg style={{ position: "absolute", width: 0, height: 0 }}>
                <defs>
                    <mask id={maskId}>
                        <rect width="100%" height="100%" fill="black" />
                        <AnimatePresence>
                            {stamps.map((s) => (
                                <motion.ellipse
                                    key={s.id}
                                    cx={s.x + s.size / 2}
                                    cy={s.y + s.size / 2}
                                    rx={s.size / 2}
                                    ry={s.size / 2.5}
                                    fill="white"
                                    transform={`rotate(${s.rotation}, ${s.x + s.size / 2}, ${s.y + s.size / 2})`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: fadeDuration, ease: "linear" }}
                                    onAnimationComplete={() => removeStamp(s.id)}
                                />
                            ))}
                        </AnimatePresence>
                    </mask>
                </defs>
            </svg>
        </div>
    )
}
