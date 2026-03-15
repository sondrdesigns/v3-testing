"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export function HomeHero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)
    const paragraphRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

            tl.fromTo(".hero-line",
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, delay: 0.2 }
            )
                .fromTo(paragraphRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    "-=0.8"
                )
                .fromTo(".hero-cta",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    "-=0.8"
                )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen bg-white text-black flex flex-col justify-center overflow-hidden pt-20"
        >
            <Container className="relative z-10 flex flex-col gap-12">
                <h1 ref={headingRef} className="font-heading font-medium text-5xl md:text-7xl lg:text-8xl uppercase tracking-[0.02em] leading-[0.9] w-full mix-blend-difference">
                    <div className="overflow-hidden"><div className="hero-line">Crafting</div></div>
                    <div className="overflow-hidden"><div className="hero-line">Elevated</div></div>
                    <div className="overflow-hidden"><div className="hero-line text-brand-accent">Digital</div></div>
                    <div className="overflow-hidden"><div className="hero-line">Experiences.</div></div>
                </h1>

                <div className="max-w-2xl font-body text-black/80 text-lg md:text-xl leading-relaxed">
                    <p ref={paragraphRef}>
                        We help businesses grow by crafting powerful digital platforms that drive conversion and define your identity in the online space.
                    </p>
                </div>

                <div className="hero-cta flex gap-6 mt-4">
                    <Button asChild size="lg" className="text-xl px-12 h-16 w-full md:w-auto">
                        <Link href="/contact">Book a Consultation</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="text-xl px-12 h-16 hidden md:inline-flex w-auto">
                        <Link href="/work">View Our Work</Link>
                    </Button>
                </div>
            </Container>
        </section>
    )
}
