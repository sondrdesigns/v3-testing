import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"

export default function ThankYouPage() {
    return (
        <div className="min-h-screen bg-brand-accent text-white flex flex-col justify-center items-center text-center">
            <Container className="flex flex-col items-center gap-8">
                <div className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h1 className="text-6xl md:text-8xl font-heading font-black uppercase tracking-tighter leading-none">
                    Message <br /> Received.
                </h1>
                <p className="font-body text-xl text-white/90 max-w-lg mt-4">
                    Thank you for reaching out. We've received your request and will be in touch shortly to discuss building your digital experience.
                </p>
                <Button asChild size="lg" className="mt-8 bg-black text-white hover:bg-white hover:text-black font-subhead uppercase tracking-widest font-bold border border-transparent">
                    <Link href="/">Return to Home</Link>
                </Button>
            </Container>
        </div>
    )
}
