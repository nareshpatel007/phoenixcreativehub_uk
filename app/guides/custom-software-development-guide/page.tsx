import React from "react";
import type { Metadata } from "next";
import CustomSoftwareGuideClient from "./CustomSoftwareGuideClient";

export const metadata: Metadata = {
    title: 'Complete Guide to Custom Software Development 2024 | Process, Cost & Benefits',
    description: 'Learn everything about custom software development: process, costs, benefits, technologies, and how to choose the right development partner. Expert guide from Phoenix Creative Hub UK.',
    keywords: ['custom software development guide', 'software development process', 'custom software cost', 'software development benefits', 'software development technologies', 'how to choose software developer'],
    openGraph: {
        title: 'Complete Guide to Custom Software Development 2024 | Process, Cost & Benefits',
        description: 'Learn everything about custom software development: process, costs, benefits, technologies, and how to choose the right development partner.',
        url: 'https://phoenixcreativehub.co.uk/guides/custom-software-development-guide',
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

export default function CustomSoftwareDevelopmentGuide() {
    return <CustomSoftwareGuideClient />;
}
