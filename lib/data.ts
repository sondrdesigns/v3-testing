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
    url: string;
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
        slug: "blend-cafe",
        client: "Blend",
        industry: "Fullstack WebApp",
        metric: "Café Discovery App",
        description: "A modern web app that helps coffee lovers discover cafés by vibe. Featuring authentication, real-time search, and a beautifully crafted UI.",
        image: "/projects/blend.webp",
        url: "https://www.blendcafe.app/",
    },
    {
        slug: "khm-tutoring",
        client: "KHM Tutoring",
        industry: "Education",
        metric: "30% Conversion Boost",
        description: "A high-performance marketing site for Hawaii's premier K-12 tutoring service. Built to establish authority and drive parent inquiries.",
        image: "/projects/khm.webp",
        url: "https://www.khmtutoring.com/",
    },
];

export const team = [
    {
        name: "Aizen Chung",
        role: "CEO / Founder",
        image: "/aizen-chung.webp",
    },
    {
        name: "Toshio Nagai",
        role: "CTO / Founder",
        image: "/toshi-nagai.webp",
    },
    {
        name: "Joseph Kim",
        role: "Head of Design",
        image: "/joseph-kim.webp",
    },
];

export const stats: Stat[] = [
    {
        value: "96+",
        label: "Performance Score",
    },
    {
        value: "<1s",
        label: "Avg Load Time",
    },
    {
        value: "<7",
        label: "Days Avg Build Time",
    },
    {
        value: "30%",
        label: "Conversion Boost",
    },
];
