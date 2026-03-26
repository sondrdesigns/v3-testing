import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Book a Call — Sondr Designs",
    description: "Schedule a free 15-minute discovery call with the Sondr Designs team.",
    robots: { index: false, follow: false },
}

export default function BookLayout({ children }: { children: React.ReactNode }) {
    return children
}
