import React from "react";
import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
    title: 'Phoenix Creative Hub UK Pricing | Custom Software Development Cost [Get Quote]',
    description: 'Get transparent pricing for custom software development, web & mobile apps, CRM/ERP systems, AI solutions & cloud infrastructure. Request a free quote from Phoenix Creative Hub UK London.',
    keywords: ['Phoenix Creative Hub UK pricing', 'Software Development Cost London', 'Custom Software Pricing', 'Web Development Cost UK', 'Mobile App Development Price', 'CRM ERP Cost', 'AI Solutions Pricing'],
    openGraph: {
        title: 'Phoenix Creative Hub UK Pricing | Custom Software Development Cost [Get Quote]',
        description: 'Get transparent pricing for custom software development, web & mobile apps, CRM/ERP systems, AI solutions & cloud infrastructure.',
        url: 'https://phoenixcreativehub.co.uk/pricing',
        siteName: 'Phoenix Creative Hub UK',
        images: [{
            url: '/images/logo-black.png',
            width: 1200,
            height: 630,
        }],
        locale: 'en_GB',
        type: 'website',
    },
};

export default function PricingPage() {
    return <PricingClient />;
}
