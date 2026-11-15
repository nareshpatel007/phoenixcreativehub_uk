import { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
    title: 'Phoenix Creative Hub UK - Premier Web, Mobile & Software Solutions London',
    description: 'Premier digital engineering agency in London, UK. Custom web development, iOS & Android mobile apps, bespoke CRM & ERP platforms, and AI automation.',
    keywords: ['Web Development London', 'Mobile App Development UK', 'Custom Software London', 'CRM ERP Systems', 'AI Automation UK', 'Phoenix Creative Hub UK'],
    openGraph: {
        title: 'Phoenix Creative Hub UK - Premier Web, Mobile & Software Solutions London',
        description: 'Premier digital engineering agency in London, UK. Custom web development, iOS & Android mobile apps, bespoke CRM & ERP platforms, and AI automation.',
        url: 'https://phoenixcreativehub.co.uk',
        siteName: 'Phoenix Creative Hub UK',
        images: [{
            url: 'https://phoenixcreativehub.co.uk/images/logo-black.png',
            width: 1200,
            height: 630,
        }],
        locale: 'en_GB',
        type: 'website',
    },
}

export default function Home() {
    return <HomeClient />
}
