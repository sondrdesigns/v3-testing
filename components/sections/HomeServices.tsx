"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Monitor, Sparkles, TrendingUp, Search, MapPin, ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { services } from "@/lib/data"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

const icons = [Monitor, Sparkles, TrendingUp, Search, MapPin]

const colSpans = [
    "md:col-span-7",
    "md:col-span-5",
    "md:col-span-4",
    "md:col-span-4",
    "md:col-span-4",
]

export function HomeServices() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".service-card",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    stagger: 0.12,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    },
                }
            )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="relative bg-black text-white overflow-hidden">
            {/* Depth blobs */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(0,77,255,0.07) 0%, transparent 70%)" }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(0,77,255,0.05) 0%, transparent 70%)" }}
            />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {services.map((service, index) => {
                        const Icon = icons[index]
                        const isHovered = hoveredIndex === index
                        const isLarge = index === 0

                        return (
                            <Link
                                key={service.slug}
                                href="/contact"
                                className={cn(
                                    "service-card group relative flex flex-col gap-6 rounded-none border transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] cursor-pointer",
                                    colSpans[index],
                                    isLarge ? "p-8 md:p-10 lg:p-12" : "p-8 md:p-10",
                                    "bg-white/[0.04] backdrop-blur-sm border-white/[0.08]",
                                    "hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_8px_32px_rgba(0,77,255,0.12)]"
                                )}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Top row: icon + number */}
                                <div className="flex items-center justify-between">
                                    <div
                                        className={cn(
                                            "flex items-center justify-center w-12 h-12 rounded-full border transition-colors duration-500",
                                            isHovered
                                                ? "border-brand-accent text-brand-accent"
                                                : "border-white/20 text-white/50"
                                        )}
                                    >
                                        <Icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <span className="font-mono text-xs tracking-widest text-white/20">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                {/* Headline */}
                                <h3
                                    className={cn(
                                        "font-heading font-medium uppercase tracking-[0.02em] leading-[1.05] transition-colors duration-300",
                                        isLarge ? "text-3xl md:text-4xl lg:text-5xl" : "text-2xl md:text-3xl",
                                        isHovered ? "text-white" : "text-white/90"
                                    )}
                                >
                                    {service.title}
                                </h3>

                                {/* Short description */}
                                <p className="font-body text-white/60 text-base leading-relaxed">
                                    {service.shortDescription}
                                </p>

                                {/* Divider */}
                                <div className="border-t border-white/[0.06]" />

                                {/* Deliverable tags */}
                                <div className="flex flex-wrap gap-2">
                                    {service.deliverables.map((item) => (
                                        <span
                                            key={item}
                                            className="font-mono text-[10px] tracking-widest uppercase text-white/30 bg-white/[0.04] px-3 py-1"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                {/* Hover arrow */}
                                <div
                                    className={cn(
                                        "absolute bottom-8 right-8 md:bottom-10 md:right-10 transition-all duration-500",
                                        isLarge ? "lg:bottom-12 lg:right-12" : "",
                                        isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                                    )}
                                >
                                    <ArrowRight
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-brand-accent"
                                    />
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}
