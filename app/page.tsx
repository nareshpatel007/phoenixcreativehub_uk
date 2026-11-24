import { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
    title: 'Software Development & SEO Agency UK | Phoenix Creative',
    description: 'Build better digital products and grow online with Phoenix Creative Hub. UK-focused software, web, app, AI and SEO services for ambitious businesses.',
    keywords: [
        'Software development company UK',
        'software development agency UK',
        'custom software development',
        'web development company UK',
        'mobile app development UK',
        'AI development UK',
        'SEO services UK',
        'Phoenix Creative Hub UK',
    ],
    alternates: {
        canonical: 'https://phoenixcreativehub.co.uk',
    },
    openGraph: {
        title: 'Software Development & SEO Agency UK | Phoenix Creative',
        description: 'Build better digital products and grow online with Phoenix Creative Hub. UK-focused software, web, app, AI and SEO services for ambitious businesses.',
        url: 'https://phoenixcreativehub.co.uk',
        siteName: 'Phoenix Creative Hub UK',
        images: [{
            url: 'https://phoenixcreativehub.co.uk/images/logo-black.png',
            width: 1200,
            height: 630,
            alt: 'Phoenix Creative Hub UK',
        }],
        locale: 'en_GB',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Software Development & SEO Agency UK | Phoenix Creative',
        description: 'Build better digital products and grow online with Phoenix Creative Hub. UK-focused software, web, app, AI and SEO services for ambitious businesses.',
        images: ['https://phoenixcreativehub.co.uk/images/logo-black.png'],
    },
}

export default function Home() {
    return <HomeClient />
}
