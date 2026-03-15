"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { Container } from "@/components/ui/Container"
import { PaintReveal } from "@/components/ui/PaintReveal"
import { team } from "@/lib/data"

export default function StudioPage() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".team-card",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.2 }
            )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div className="min-h-screen bg-white text-black pt-32 pb-32">
            <Container className="flex flex-col gap-24">

                {/* Brand Story */}
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between border-b border-black pb-16">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-medium tracking-tight uppercase leading-[1] w-full md:w-1/2">
                        The Studio.
                    </h1>
                    <div className="flex flex-col gap-6 w-full md:w-1/2">
                        <h2 className="font-subhead uppercase tracking-widest text-brand-accent font-bold">Our Philosophy</h2>
                        <p className="font-body text-xl md:text-3xl leading-snug">
                            No templates. No shortcuts. Based in Hawaii, we build digital instruments that demand attention, establish authority, and drive conversion — relentlessly.
                        </p>
                    </div>
                </div>

                {/* Team Grid */}
                <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member) => (
                        <div key={member.name} className="team-card group flex flex-col gap-4">
                            <PaintReveal
                                baseImage={member.image}
                                revealImage={member.image}
                                brushSize={280}
                                fadeDuration={2.5}
                                className="relative aspect-[3/4] w-full bg-black/5"
                            />
                            <div className="flex flex-col items-center text-center">
                                <h3 className="text-2xl font-heading font-black tracking-tighter uppercase">{member.name}</h3>
                                <p className="font-subhead uppercase tracking-widest text-xs font-bold text-brand-red">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </Container>
        </div>
    )
}
