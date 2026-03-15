"use client"
import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { projects } from "@/lib/data"

export default function WorkPage() {
    const [filter, setFilter] = useState("All")
    const containerRef = useRef<HTMLDivElement>(null)

    // Extract unique industries for the filter
    const industries = ["All", ...Array.from(new Set(projects.map(p => p.industry)))]

    // Filter projects
    const filteredProjects = filter === "All" ? projects : projects.filter(p => p.industry === filter)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the cards in when filter changes
            gsap.fromTo(".work-card",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
            )
        }, containerRef)

        return () => ctx.revert()
    }, [filter])

    return (
        <div className="min-h-screen bg-white text-black pt-32 pb-32">
            <Container className="flex flex-col gap-16">

                {/* Page Header */}
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-black pb-12">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-medium tracking-tight uppercase leading-[1]">
                        Our Work.
                    </h1>
                    <p className="font-body text-xl md:text-2xl max-w-md pb-2">
                        Elevated digital experiences that define industry authority.
                    </p>
                </div>

                {/* Sticky Filter */}
                <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md py-4 border-b border-black/10 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24 w-screen overflow-x-auto no-scrollbar flex items-center min-h-[56px]">
                    <div className="flex gap-8 whitespace-nowrap min-w-max justify-center items-center">
                        {industries.map((industry) => (
                            <button
                                key={industry}
                                onClick={() => setFilter(industry)}
                                className={`text-sm md:text-base font-subhead uppercase tracking-widest font-bold pb-2 transition-all ${filter === industry
                                    ? "text-brand-accent border-b-2 border-brand-accent"
                                    : "text-black/50 hover:text-black"
                                    }`}
                            >
                                {industry}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project Grid */}
                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 mt-8">
                    {filteredProjects.map((project, idx) => (
                        <a
                            key={project.slug}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`work-card group block cursor-pointer ${idx % 2 === 1 ? 'md:mt-32' : ''}`}
                        >
                            <div className="relative aspect-[4/5] w-full mb-6 overflow-hidden bg-black/5 border border-black/10">
                                <Image
                                    src={project.image}
                                    alt={project.client}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority={idx < 4}
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
        </div>
    )
}
