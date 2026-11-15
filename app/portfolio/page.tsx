import { Metadata } from 'next'
import { PortfolioContent } from './PortfolioContent'

export const metadata: Metadata = {
    title: "Portfolio & Case Studies | Phoenix Creative Hub UK",
    description: "Explore our portfolio of cutting-edge web applications, iOS and Android mobile apps, bespoke CRM & ERP systems, and AI automation solutions delivered across the UK and internationally.",
    keywords: ['Phoenix Creative Hub Portfolio', 'Software Development Case Studies London', 'Web Development Projects UK', 'Mobile App Portfolio London', 'AI Solutions UK', 'Bespoke CRM ERP Case Studies'],
    openGraph: {
        title: "Portfolio & Case Studies | Phoenix Creative Hub UK",
        description: "Explore our portfolio of cutting-edge web applications, iOS and Android mobile apps, bespoke CRM & ERP systems, and AI automation solutions.",
        url: 'https://phoenixcreativehub.co.uk/portfolio',
        siteName: 'Phoenix Creative Hub UK',
        images: [{
            url: '/images/logo-black.png',
            width: 1200,
            height: 630,
        }],
        locale: 'en_GB',
        type: 'website',
    },
}

export default function PortfolioPage() {
    return <PortfolioContent />
}
