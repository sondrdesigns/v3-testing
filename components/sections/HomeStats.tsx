"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Container } from "@/components/ui/Container"
import { stats } from "@/lib/data"

gsap.registerPlugin(ScrollTrigger)

export function HomeStats() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".stat-item",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="py-16 md:py-24 bg-white text-black">
            <Container>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="stat-item flex flex-col justify-end"
                        >
                            <h3 className="text-5xl md:text-7xl font-heading font-medium tracking-tighter text-brand-accent mb-2">
                                {stat.value}
                            </h3>
                            <p className="font-subhead uppercase tracking-widest text-xs md:text-sm font-medium w-full break-words text-black/70">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
