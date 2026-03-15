import Link from "next/link"
import { HomeServices } from "@/components/sections/HomeServices"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { generateSeo } from "@/lib/metadata"

export const metadata = generateSeo({
    title: "Services",
    description: "Websites that perform, design that commands attention, and marketing that puts you in front of the right people. See everything Sondr Designs does for service-based businesses.",
    path: "/services",
})

const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "We learn your business, your market, and your goals. No generic questions — we come prepared.",
    },
    {
        number: "02",
        title: "Build",
        description: "Design, develop, and optimise in tight sprints. You see progress in days, not months.",
    },
    {
        number: "03",
        title: "Grow",
        description: "Launch, rank, and convert. We stay in your corner as your business scales.",
    },
]

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero */}
            <Container className="pt-40 pb-24">
                <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-medium tracking-tight uppercase leading-[0.95]">
                        WHAT WE DO.
                    </h1>
                    <p className="font-body text-lg md:text-xl max-w-md pb-2 text-white/60 leading-relaxed">
                        Every service we offer has one purpose: to make your business more money. No fluff, no jargon — just results that show up in your revenue.
                    </p>
                </div>
            </Container>

            {/* Card Grid */}
            <HomeServices />

            {/* Process Strip */}
            <Container className="py-24 md:py-32">
                <p className="font-mono text-xs tracking-widest uppercase text-white/30 mb-10">
                    How It Works
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="flex flex-col gap-5 p-8 md:p-10 bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_8px_32px_rgba(0,77,255,0.12)]"
                        >
                            <span className="font-mono text-xs tracking-widest text-white/20">
                                {step.number}
                            </span>
                            <h3 className="font-heading font-medium uppercase tracking-[0.02em] text-2xl md:text-3xl leading-[1.05]">
                                {step.title}
                            </h3>
                            <p className="font-body text-white/60 text-base leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>

            {/* CTA Row */}
            <div className="border-t border-white/[0.08]">
                <Container className="py-24 md:py-32">
                    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium uppercase tracking-tight leading-[1.0] max-w-xl">
                            Ready to grow your business?
                        </h2>
                        <Button asChild size="lg" className="self-start md:self-auto bg-brand-accent text-white hover:bg-white hover:text-black">
                            <Link href="/contact">Book a Free Call</Link>
                        </Button>
                    </div>
                </Container>
            </div>
        </div>
    )
}
