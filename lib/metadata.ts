import type { Metadata } from "next";

interface GenerateMetadataProps {
    title: string;
    description: string;
    path: string;
}

export function generateSeo({ title, description, path }: GenerateMetadataProps): Metadata {
    const url = `https://sondrdesigns.com${path}`;

    return {
        title: `${title} | Sondr Designs`,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: "Sondr Designs",
            locale: "en_US",
            type: "website",
            images: [{ url: "https://sondrdesigns.com/og-image.png", width: 1200, height: 630, alt: "Sondr Designs" }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["https://sondrdesigns.com/og-image.png"],
            site: "@sondrdesigns",
        },
    };
}
