import { generateSeo } from "@/lib/metadata"

export const metadata = generateSeo({
    title: "Contact Us",
    description: "Ready to grow your business? Reach out and schedule a consultation with our Honolulu-based digital agency.",
    path: "/contact",
})

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sondrdesigns.com" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://sondrdesigns.com/contact" },
    ],
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <link rel="preconnect" href="https://app.iclosed.io" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            {children}
        </>
    )
}
