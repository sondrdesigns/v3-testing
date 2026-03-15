import { generateSeo } from "@/lib/metadata"

export const metadata = generateSeo({
    title: "Our Work",
    description: "Explore our portfolio of elevated digital experiences tailored for service-based businesses.",
    path: "/work",
})

export default function WorkLayout({ children }: { children: React.ReactNode }) {
    return children
}
