import React from "react";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "About Us | Software Development Company London",
    description: "Learn about Phoenix Creative Hub UK, London's leading software development company. 8+ years experience, 100+ successful projects delivered globally.",
    keywords: ['About Phoenix Creative Hub UK', 'Software Company London', 'IT Company UK', 'Web Development Team', 'Mobile App Developers', 'Custom Software Engineers'],
    openGraph: {
        title: "About Us | Software Development Company London",
        description: "Learn about Phoenix Creative Hub UK, London's leading software development company. 8+ years experience, 100+ successful projects.",
        url: 'https://phoenixcreativehub.co.uk/about-us',
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

export default function Page() {
    return <ClientPage />;
}
