import Link from 'next/link'
import { Container } from '@/components/ui/Container'

export function Footer() {
    return (
        <footer className="bg-black text-white pt-24 pb-12 border-t border-white/20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    <div className="md:col-span-1 flex flex-col gap-6">
                        <h3 className="font-heading text-4xl tracking-tight">Sondr Designs</h3>
                        <p className="font-body text-white/70 max-w-sm">
                            We help businesses grow by crafting elevated digital experiences to drive conversion and define identity in the online space.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-subhead text-sm text-white/50 mb-4">Navigation</h4>
                        <Link href="/work" className="font-body hover:text-brand-accent transition-colors w-fit">Works</Link>
                        <Link href="/services" className="font-body hover:text-brand-accent transition-colors w-fit">Services</Link>
                        <Link href="/studio" className="font-body hover:text-brand-accent transition-colors w-fit">Studio</Link>
                        <Link href="/contact" className="font-body hover:text-brand-accent transition-colors w-fit">Contact</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-subhead text-sm text-white/50 mb-4">Connect</h4>
                        <a href="#" className="font-body hover:text-brand-accent transition-colors w-fit">Instagram</a>
                        <a href="#" className="font-body hover:text-brand-accent transition-colors w-fit">LinkedIn</a>
                        <a href="#" className="font-body hover:text-brand-accent transition-colors w-fit">Facebook</a>
                    </div>

                </div>

                <div className="mt-20 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm font-body">
                    <p>&copy; {new Date().getFullYear()} Sondr Designs. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
