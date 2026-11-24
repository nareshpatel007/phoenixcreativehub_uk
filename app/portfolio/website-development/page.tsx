import { Metadata } from 'next'
import { WebsiteDevelopmentPortfolioClient } from './WebsiteDevelopmentPortfolioClient'

export const metadata: Metadata = {
    title: "AI-Powered Website Development & Business Automation Portfolio | Phoenix Creative Hub UK",
    description: "Explore our AI-powered website development and business automation portfolio. Discover how Phoenix Creative Hub UK builds smarter, automates faster, and delivers measurable ROI.",
    keywords: [
        'Website Development Portfolio',
        'AI-Powered Software Development',
        'Business Automation',
        'Next.js Web Development',
        'Custom Software Portfolio',
        'Phoenix Creative Hub UK Portfolio',
        'Industry Software Solutions'
    ],
    alternates: {
        canonical: 'https://phoenixcreativehub.co.uk/portfolio/website-development',
    },
    openGraph: {
        title: "AI-Powered Website Development & Business Automation | Phoenix Creative Hub UK",
        description: "Build Smarter. Automate Faster. Grow Better. View custom website development projects, tech stack, and business impact.",
        url: 'https://phoenixcreativehub.co.uk/portfolio/website-development',
        siteName: 'Phoenix Creative Hub UK',
        images: [{
            url: '/images/logo-black.png',
            width: 1200,
            height: 630,
            alt: 'Phoenix Creative Hub UK Logo',
        }],
        locale: 'en_GB',
        type: 'website',
    },
}

export default function WebsiteDevelopmentPortfolioPage() {
    return <WebsiteDevelopmentPortfolioClient />
}
