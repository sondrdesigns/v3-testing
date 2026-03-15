import { generateSeo } from "@/lib/metadata"

export const metadata = generateSeo({
    title: "Our Services | Website Design, Development, SEO",
    description: "We craft elevated digital experiences, specializing in web development, dynamic UI/UX, and local SEO.",
    path: "/services",
})

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return children
}
