"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export function HomeCTA() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".cta-text",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
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
        <section ref={containerRef} className="py-32 md:py-48 bg-brand-accent text-white selection:bg-black selection:text-white border-t border-black">
            <Container className="relative z-10 flex flex-col justify-center items-center text-center gap-8 md:gap-12">
                <h2 className="text-5xl md:text-7xl lg:text-9xl font-heading font-medium tracking-tighter uppercase leading-[0.85] mix-blend-difference w-full text-white">
                    Start Your <br className="hidden md:block" /> Scale.
                </h2>
                <p className="font-body text-xl md:text-3xl max-w-2xl text-white/90">
                    We only partner with brands ready to dominate their online space. Your digital authority starts here.
                </p>
                <div className="cta-text mt-4">
                    <Button asChild size="lg" className="bg-black text-white hover:bg-white hover:text-black h-20 px-16 text-2xl font-subhead tracking-widest font-bold uppercase transition-transform duration-300 hover:scale-105">
                        <Link href="/contact">Book a Consultation</Link>
                    </Button>
                </div>
            </Container>
        </section>
    )
}
