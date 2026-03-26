import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: 'https://sondrdesigns.com',                  lastModified: new Date() },
        { url: 'https://sondrdesigns.com/work',             lastModified: new Date() },
        { url: 'https://sondrdesigns.com/services',         lastModified: new Date() },
        { url: 'https://sondrdesigns.com/studio',           lastModified: new Date() },
        { url: 'https://sondrdesigns.com/contact',          lastModified: new Date() },
        { url: 'https://sondrdesigns.com/privacy-policy',   lastModified: new Date() },
    ]
}
