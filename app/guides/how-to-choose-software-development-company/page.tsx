import React from "react";
import type { Metadata } from "next";
import ChooseSoftwareCompanyClient from "./ChooseSoftwareCompanyClient";

export const metadata: Metadata = {
    title: 'How to Choose a Software Development Company | 7 Key Factors [Checklist]',
    description: 'Learn how to choose the right software development company for your project. 7 essential factors to consider: experience, portfolio, communication, pricing, and more.',
    keywords: ['how to choose software development company', 'software development company selection', 'software developer checklist', 'hire software development team', 'software development partner'],
    alternates: {
        canonical: 'https://phoenixcreativehub.co.uk/guides/how-to-choose-software-development-company',
    },
    openGraph: {
        title: 'How to Choose a Software Development Company | 7 Key Factors [Checklist]',
        description: 'Learn how to choose the right software development company for your project. 7 essential factors to consider.',
        url: 'https://phoenixcreativehub.co.uk/guides/how-to-choose-software-development-company',
        siteName: 'Phoenix Creative Hub UK',
        images: [{
            url: '/images/logo-black.png',
            width: 1200,
            height: 630,
        }],
        locale: 'en_GB',
        type: 'article',
    },
};

export default function HowToChooseSoftwareCompany() {
    return <ChooseSoftwareCompanyClient />;
}
