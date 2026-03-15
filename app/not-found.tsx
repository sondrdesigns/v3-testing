import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center text-center">
            <Container className="flex flex-col items-center gap-8">
                <h1 className="text-[10rem] md:text-[15rem] leading-none font-heading font-black tracking-tighter text-brand-accent">
                    404
                </h1>
                <h2 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-tighter">
                    Page Not Found.
                </h2>
                <p className="font-body text-xl text-white/50 max-w-lg">
                    The page you are looking for doesn't exist or has been moved.
                </p>
                <Button asChild size="lg" className="mt-8 bg-white text-black hover:bg-brand-accent hover:text-white font-subhead uppercase tracking-widest font-bold">
                    <Link href="/">Return to Home</Link>
                </Button>
            </Container>
        </div>
    )
}
