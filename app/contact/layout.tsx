import { generateSeo } from "@/lib/metadata"

export const metadata = generateSeo({
    title: "Contact Us | Sondr Designs",
    description: "Ready to grow your business? Reach out and schedule a consultation with our Honolulu-based digital agency.",
    path: "/contact",
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children
}
