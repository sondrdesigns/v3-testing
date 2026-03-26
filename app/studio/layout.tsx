import { generateSeo } from "@/lib/metadata"
import { team } from "@/lib/data"

export const metadata = generateSeo({
    title: "The Studio",
    description: "We are a collective of digital architects based in Honolulu, Hawaii. We build digital instruments that demand attention.",
    path: "/studio",
})

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sondrdesigns.com" },
        { "@type": "ListItem", "position": 2, "name": "The Studio", "item": "https://sondrdesigns.com/studio" },
    ],
}

const teamSchema = {
    "@context": "https://schema.org",
    "@graph": team.map((member) => ({
        "@type": "Person",
        "name": member.name,
        "jobTitle": member.role,
        "image": `https://sondrdesigns.com${member.image}`,
        "worksFor": { "@id": "https://sondrdesigns.com/#organization" },
        "url": "https://sondrdesigns.com/studio",
    })),
}

export default function StudioLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />
            {children}
        </>
    )
}
