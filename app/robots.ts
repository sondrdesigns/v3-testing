import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            // Explicitly allow AI search crawlers
            { userAgent: 'GPTBot', allow: '/' },
            { userAgent: 'OAI-SearchBot', allow: '/' },
            { userAgent: 'ChatGPT-User', allow: '/' },
            { userAgent: 'ClaudeBot', allow: '/' },
            { userAgent: 'PerplexityBot', allow: '/' },
            { userAgent: 'Bytespider', allow: '/' },
            // Block pure training crawlers
            { userAgent: 'CCBot', disallow: '/' },
            { userAgent: 'anthropic-ai', disallow: '/' },
        ],
        sitemap: 'https://sondrdesigns.com/sitemap.xml',
    }
}
