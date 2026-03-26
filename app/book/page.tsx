"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import Script from "next/script"

export default function BookPage() {
    const headingRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".book-element", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power3.out",
            })
        }, headingRef)

        return () => ctx.revert()
    }, [])

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">

            {/* Hero */}
            <div ref={headingRef} className="pt-32 pb-12 px-6 md:px-12 lg:px-20 text-center">
                <p className="book-element font-subhead uppercase tracking-widest text-xs font-bold text-brand-accent mb-4">
                    Sondr Designs
                </p>
                <h1 className="book-element text-5xl md:text-7xl font-heading font-medium tracking-tight uppercase leading-[1] mb-6">
                    Book a Call
                </h1>
                <p className="book-element font-body text-lg md:text-xl text-white/60 max-w-lg mx-auto">
                    15 minutes. No pressure. Let's see if we're a fit.
                </p>
            </div>

            {/* Divider */}
            <div className="book-element w-full max-w-3xl mx-auto px-6 md:px-12">
                <div className="border-t border-white/10" />
            </div>

            {/* iClosed Widget */}
            <div className="flex-1 w-full max-w-3xl mx-auto px-6 md:px-12 py-12">
                <div
                    className="iclosed-widget"
                    data-url="https://app.iclosed.io/e/sondrdesigns/discovery-call"
                    title="15-Minute Sondr Discovery Call"
                    style={{ width: "100%", minHeight: "680px" }}
                />
            </div>

            <Script src="https://app.iclosed.io/assets/widget.js" strategy="lazyOnload" />

            {/* Footer strip */}
            <div className="border-t border-white/10 py-6 text-center">
                <p className="font-body text-sm text-white/30">
                    &copy; {new Date().getFullYear()} Sondr Designs &mdash; All rights reserved
                </p>
            </div>
        </div>
    )
}
