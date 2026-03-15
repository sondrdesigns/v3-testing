import { generateSeo } from "@/lib/metadata"

export const metadata = generateSeo({
    title: "The Studio | Sondr Designs",
    description: "We are a collective of digital architects based in Honolulu, Hawaii. We build digital instruments that demand attention.",
    path: "/studio",
})

export default function StudioLayout({ children }: { children: React.ReactNode }) {
    return children
}
