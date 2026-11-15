import { MetadataRoute } from 'next'
import { services } from '@/data/services'
import { PORTFOLIO_PROJECTS } from '@/lib/portfolio'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://phoenixcreativehub.co.uk'

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/about-us`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/guides/custom-software-development-guide`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/guides/web-mobile-development-guide`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/guides/ai-ml-implementation-guide`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/guides/how-to-choose-software-development-company`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/guides/custom-software-vs-off-the-shelf`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ]

    // Service pages
    const servicePages = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    // Portfolio pages
    const portfolioPages = PORTFOLIO_PROJECTS.map((project) => ({
        url: `${baseUrl}/portfolio/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Fetch blog pages from WordPress API
    let blogPages: MetadataRoute.Sitemap = []
    try {
        const response = await fetch('https://backend.phoenixcreativehub.co.uk/wp-json/sandbox/v1/posts/all', {
            next: { revalidate: 3600 } // Revalidate every hour
        })
        const data = await response.json()
        const posts = data.posts || []
        
        blogPages = posts.map((post: any) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.6,
        }))
    } catch (error) {
        console.error('Failed to fetch blog posts for sitemap:', error)
    }

    return [...staticPages, ...servicePages, ...portfolioPages, ...blogPages]
}
