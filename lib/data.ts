export interface Service {
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    deliverables: string[];
}

export interface Project {
    slug: string;
    client: string;
    industry: string;
    metric: string;
    description: string;
    image: string;
}

export interface TeamMember {
    name: string;
    role: string;
    image: string;
}

export interface Stat {
    value: string;
    label: string;
}

export const services: Service[] = [
    {
        slug: "website-development",
        title: "Websites That Perform",
        shortDescription: "A fast, reliable website that works around the clock to win you business — no downtime, no slow loads, no excuses.",
        fullDescription: "We build digital instruments. Using modern frameworks like Next.js, we architect websites that load instantly, secure your data, and scale gracefully with your business growth.",
        deliverables: ["Next.js & React Architecture", "Headless CMS Integration", "API Development", "Performance Optimization"],
    },
    {
        slug: "website-design",
        title: "Design That Commands Attention",
        shortDescription: "First impressions are made in milliseconds. We make yours impossible to ignore — and impossible to forget.",
        fullDescription: "Our design process is rooted in conversion and identity. We don't use templates. Every pixel is crafted to establish industry authority and create an unforgettable digital experience.",
        deliverables: ["Visual Identity", "Responsive Layouts", "Custom Animations", "Interactive Prototypes"],
    },
    {
        slug: "ui-ux",
        title: "Turn Visitors Into Clients",
        shortDescription: "Most websites look good but lose people before they ever reach out. We fix that — guiding every visitor to book, call, or buy.",
        fullDescription: "Beautiful design means nothing if users don't convert. We design intuitive, seamless user experiences that guide visitors effortlessly towards booking a call or requesting your services.",
        deliverables: ["User Research", "Wireframing", "Journey Mapping", "Conversion Rate Optimization"],
    },
    {
        slug: "seo",
        title: "Get Found on Google",
        shortDescription: "When someone searches for what you offer, your name comes up first — not your competitor's.",
        fullDescription: "Technical precision meets content strategy. We build SEO directly into the architecture of your site, ensuring you rank for the terms your ideal clients are searching for.",
        deliverables: ["Technical SEO", "Keyword Strategy", "Content Optimization", "Schema Markup"],
    },
    {
        slug: "geo",
        title: "Own Your Local Market",
        shortDescription: "Become the go-to business in your area. We make sure local customers find you — and choose you — every time.",
        fullDescription: "Capture the local market. Our GEO strategies ensure your business is the undeniable first choice when local clients search for your services in your area.",
        deliverables: ["Local Directory Sync", "Google Business Profile", "Location-based Landing Pages", "Review Generation Strategy"],
    },
];

export const projects: Project[] = [
    {
        slug: "med-spa-honolulu",
        client: "Luminary Aesthetics",
        industry: "Med Spa",
        metric: "140% Increase in Bookings",
        description: "A complete brand overhaul and digital platform for Honolulu's premier aesthetic clinic. Focusing on premium feel and frictionless booking.",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop",
    },
    {
        slug: "luxury-real-estate",
        client: "Oahu Estates",
        industry: "Real Estate",
        metric: "$4.2M Attributed Revenue",
        description: "High-contrast editorial real estate platform designed to showcase luxury properties with cinematic motion and edge-to-edge photography.",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop",
    },
    {
        slug: "legal-partners",
        client: "Harrison & Co",
        industry: "Law Firm",
        metric: "300% ROI on GEO",
        description: "Modernizing traditional legal services with a sharp, brutalist web presence that establishes authority and drives high-ticket leads.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
    },
    {
        slug: "home-renovations",
        client: "Apex Builders",
        industry: "Construction",
        metric: "85+ Lighthouse Score",
        description: "A lightning-fast portfolio site for high-end home renovators, utilizing a custom dark/light mode transition approach.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop",
    },
];

export const team = [
    {
        name: "Aizen Chung",
        role: "CEO / Founder",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "Toshio Nagai",
        role: "CTO / Founder",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "Joseph Kim",
        role: "Head of Design",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    },
];

export const stats: Stat[] = [
    {
        value: "99",
        label: "Lighthouse Performance",
    },
    {
        value: "<2s",
        label: "Average Load Time",
    },
    {
        value: "14",
        label: "Days Average Build Time",
    },
];
