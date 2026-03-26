import { generateSeo } from "@/lib/metadata"
import { HomeHero } from "@/components/sections/HomeHero"

export const metadata = generateSeo({
  title: "Web Design & Development Agency — Honolulu, Hawaii",
  description: "Sondr Designs builds high-performance websites, conversion-focused design, and SEO for service businesses in Hawaii and beyond. Book a free consultation.",
  path: "/",
})
import { HomeStats } from "@/components/sections/HomeStats"
import { HomePortfolio } from "@/components/sections/HomePortfolio"
import { HomeServices } from "@/components/sections/HomeServices"
import { HomeCTA } from "@/components/sections/HomeCTA"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Container } from "@/components/ui/Container"

export default function Home() {
  return (
    <main>
      {/* 
        Hero Section 
        Features GSAP text animations, dark blend mode on text 
      */}
      <HomeHero />

      {/* 
        Stats Section
        Clean geometric grid with scroll-triggered numbers 
      */}
      <HomeStats />

      {/* 
        Portfolio Showcase
        Full-width cards with black/white to color hover transitions 
      */}
      <HomePortfolio />

      {/* 
        Services Accordion
        Dark mode section with expanding details and staggered entrances
      */}
      <div className="bg-black pt-24 md:pt-32 pb-24 md:pb-32">
        <Container>
          <SectionHeading title="Our Services" subtitle="What We Do" className="text-white mb-12" />
        </Container>
        <HomeServices />
      </div>

      {/* 
        Call to Action
        High contrast statement with primary interaction button
      */}
      <HomeCTA />

    </main>
  );
}
