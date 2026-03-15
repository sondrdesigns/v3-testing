"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { projects } from "@/lib/data"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export function HomePortfolio() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".portfolio-item",
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    }
                }
            )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-white text-black">
            <Container>
                <SectionHeading title="Selected Work" subtitle="Portfolio" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
                    {projects.map((project, idx) => (
                        <a
                            key={project.slug}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`portfolio-item group block cursor-pointer ${idx % 2 === 1 ? 'md:mt-32' : ''}`}
                        >
                            <div className="relative aspect-[4/5] w-full mb-6 overflow-hidden bg-black/5">
                                <Image
                                    src={project.image}
                                    alt={project.client}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-3xl md:text-4xl font-heading font-medium tracking-tighter uppercase">{project.client}</h3>
                                    <p className="font-subhead uppercase tracking-widest text-sm font-medium text-black/50">{project.industry}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-body text-brand-accent font-medium">{project.metric}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </Container>
        </section>
    )
}
