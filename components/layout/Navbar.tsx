"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const leftLinks = [
    { name: 'Works', href: '/work' },
    { name: 'Services', href: '/services' },
]

const rightLinks = [
    { name: 'Studio', href: '/studio' },
    { name: 'Contact', href: '/contact' },
]

const links = [...leftLinks, ...rightLinks]

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {/* Logo — sits outside the blended header so it's never inverted */}
            <Link href="/" className="fixed top-0 left-1/2 -translate-x-1/2 z-[60] h-14 flex items-center">
                <Image
                            src="/favicon-opt.png"
                    alt="Sondr Designs"
                    width={36}
                    height={36}
                    className="object-contain"
                    priority
                />
            </Link>

            <header
                className={cn(
                    "fixed top-0 w-full z-50 transition-all duration-700 border-b border-transparent",
                    isScrolled ? "bg-white text-black border-black/10 shadow-sm" : "bg-transparent text-white mix-blend-difference"
                )}
            >
                <div className="grid grid-cols-3 h-14 items-center px-6 md:px-12 lg:px-20 w-full">
                    {/* Left links */}
                    <nav className="hidden md:flex gap-8 justify-end">
                        {leftLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-base font-body hover:text-brand-accent transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle (left on mobile) */}
                    <button
                        className="md:hidden relative z-50 p-1 justify-self-start"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} className={isScrolled ? "text-black" : "text-white"} /> : <Menu size={24} />}
                    </button>

                    {/* Invisible spacer for the logo column */}
                    <div className="justify-self-center w-9 h-9" />

                    {/* Right links */}
                    <nav className="hidden md:flex gap-8 justify-start">
                        {rightLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-base font-body hover:text-brand-accent transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Spacer on mobile to keep layout centered */}
                    <div className="md:hidden" />
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-40 bg-black text-white flex flex-col justify-center items-center gap-8 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
                    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <nav className="flex flex-col items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="font-heading text-4xl font-medium tracking-tight hover:text-brand-accent transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    )
}
