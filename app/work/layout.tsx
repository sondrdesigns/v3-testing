import { generateSeo } from "@/lib/metadata"

export const metadata = generateSeo({
    title: "Our Work — Portfolio",
    description: "Explore Sondr Designs' portfolio of high-performance websites and web apps built for businesses in Hawaii and beyond.",
    path: "/work",
})

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sondrdesigns.com" },
        { "@type": "ListItem", "position": 2, "name": "Our Work", "item": "https://sondrdesigns.com/work" },
    ],
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            {children}
        </>
    )
}
