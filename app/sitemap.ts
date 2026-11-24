import { MetadataRoute } from 'next'
import { services } from '@/data/services'
import { PORTFOLIO_PROJECTS } from '@/lib/portfolio'

export const dynamic = 'force-dynamic'
export const revalidate = 3600 // revalidate at most once every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://phoenixcreativehub.co.uk'
    const now = new Date()

    // 1. Core Primary Static Pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/portfolio/mobile-application`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/portfolio/website-development`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/about-us`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/why-us`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/locations/birmingham`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/locations/london`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/locations/manchester`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.75,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        // In-depth Engineering Guides
        {
            url: `${baseUrl}/guides/custom-software-development-guide`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/guides/web-mobile-development-guide`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/guides/ai-ml-implementation-guide`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/guides/how-to-choose-software-development-company`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/guides/custom-software-vs-off-the-shelf`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        // Compliance & Legal
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.4,
        },
        {
            url: `${baseUrl}/terms-of-service`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.4,
        },
    ]

    // 2. Individual Service Pages (Custom Software, Web & Mobile, AI, CRM/ERP)
    const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.85,
    }))

    // 3. Dynamic Portfolio Project Detail Pages
    const portfolioPages: MetadataRoute.Sitemap = PORTFOLIO_PROJECTS.map((project) => ({
        url: `${baseUrl}/portfolio/${project.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.75,
    }))

    // 4. Dynamic Blog Posts (Gracefully fetches from WordPress REST API if available)
    let blogPages: MetadataRoute.Sitemap = []
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://backend.phoenixcreativehub.co.uk/wp-json/sandbox/v1'

    try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 4000)

        const response = await fetch(`${apiUrl}/posts/all`, {
            signal: controller.signal,
            next: { revalidate: 3600 },
        })
        clearTimeout(timeoutId)

        if (response.ok) {
            const data = await response.json()
            const posts = Array.isArray(data) ? data : data.posts || []

            blogPages = posts
                .filter((post: any) => post && post.slug)
                .map((post: any) => ({
                    url: `${baseUrl}/blog/${post.slug}`,
                    lastModified: post.modified || post.date ? new Date(post.modified || post.date) : now,
                    changeFrequency: 'weekly' as const,
                    priority: 0.7,
                }))
        }
    } catch {
        // Fail quietly and gracefully during build or if backend domain DNS is pending
    }

    return [...staticPages, ...servicePages, ...portfolioPages, ...blogPages]
}
