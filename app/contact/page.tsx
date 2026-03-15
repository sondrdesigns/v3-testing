"use client"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { useRouter } from "next/navigation"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { InlineWidget } from "react-calendly"

export default function ContactPage() {
    const containerRef = useRef<HTMLDivElement>(null)
    const router = useRouter()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const ctx = gsap.context(() => {
            gsap.fromTo(".contact-element",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.2 }
            )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-32">
            <Container className="flex flex-col gap-16 lg:flex-row lg:gap-24">

                {/* Contact Info & Form */}
                <div ref={containerRef} className="flex flex-col gap-12 w-full lg:w-1/2">

                    <div className="contact-element flex flex-col gap-6 border-b border-white/20 pb-12">
                        <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight uppercase leading-[1]">
                            Let's <br className="hidden md:block" /> Connect.
                        </h1>
                        <p className="font-body text-xl md:text-2xl max-w-md text-white/80">
                            Ready to grow your business? Reach out and we'll start crafting your digital experience.
                        </p>
                    </div>

                    <div className="contact-element flex flex-col gap-6 mt-4">
                        <div className="flex flex-col">
                            <span className="font-subhead uppercase tracking-widest text-xs font-bold text-brand-accent">Email</span>
                            <a href="mailto:studio@sondrdesigns.com" className="text-2xl font-bold font-body hover:text-brand-accent transition-colors">studio@sondrdesigns.com</a>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-subhead uppercase tracking-widest text-xs font-bold text-brand-accent">Phone</span>
                            <a href="tel:8087219350" className="text-2xl font-bold font-body hover:text-brand-accent transition-colors">(808) 721-9350</a>
                        </div>
                    </div>

                    <form action="https://formspree.io/f/mojnoawy" method="POST" className="contact-element flex flex-col gap-6 mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="font-subhead uppercase tracking-widest text-xs font-bold text-white/60">Name *</label>
                                <input required type="text" name="name" id="name" className="bg-transparent border-b border-white/20 focus:border-brand-accent outline-none py-3 font-body text-lg transition-colors rounded-none" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="company" className="font-subhead uppercase tracking-widest text-xs font-bold text-white/60">Company</label>
                                <input type="text" name="company" id="company" className="bg-transparent border-b border-white/20 focus:border-brand-accent outline-none py-3 font-body text-lg transition-colors rounded-none" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="font-subhead uppercase tracking-widest text-xs font-bold text-white/60">Email *</label>
                                <input required type="email" name="email" id="email" className="bg-transparent border-b border-white/20 focus:border-brand-accent outline-none py-3 font-body text-lg transition-colors rounded-none" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="phone" className="font-subhead uppercase tracking-widest text-xs font-bold text-white/60">Phone</label>
                                <input type="tel" name="phone" id="phone" className="bg-transparent border-b border-white/20 focus:border-brand-accent outline-none py-3 font-body text-lg transition-colors rounded-none" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="font-subhead uppercase tracking-widest text-xs font-bold text-white/60">Project Details *</label>
                            <textarea required name="message" id="message" rows={4} className="bg-transparent border-b border-white/20 focus:border-brand-accent outline-none py-3 font-body text-lg transition-colors rounded-none"></textarea>
                        </div>

                        {/* Honeypot to prevent spam */}
                        <input type="text" name="_gotcha" style={{ display: 'none' }} />
                        {/* Custom redirect on success */}
                        <input type="hidden" name="_next" value="https://sondrdesigns.com/thank-you" />

                        <Button type="submit" size="lg" className="w-full md:w-auto self-start mt-4 bg-white text-black hover:bg-brand-accent hover:text-white font-subhead uppercase tracking-widest font-bold">
                            Submit Request
                        </Button>
                    </form>
                </div>

                {/* Calendly */}
                <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex flex-col pt-12 lg:pt-0 lg:border-l lg:border-white/20 lg:pl-16">
                    <h2 className="text-3xl font-heading font-medium tracking-tight uppercase mb-6">Schedule a Consultation</h2>
                    <div className="w-full min-h-[700px] border border-white/20 bg-white/5 relative flex justify-center items-start pt-4 rounded-xl overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center -z-10">
                            <span className="font-subhead uppercase text-sm text-white/40 tracking-widest">Loading Calendar...</span>
                        </div>
                        {mounted && (
                            <InlineWidget
                                url="https://calendly.com/aizen-sondrdesigns/discovery-call"
                                styles={{
                                    height: '700px',
                                    width: '100%',
                                    marginTop: '-10px',
                                    borderRadius: '12px'
                                }}
                                pageSettings={{
                                    backgroundColor: '111111',
                                    hideEventTypeDetails: true,
                                    hideLandingPageDetails: true,
                                    primaryColor: '004dff',
                                    textColor: 'ffffff'
                                }}
                            />
                        )}
                    </div>
                </div>

            </Container>
        </div>
    )
}
