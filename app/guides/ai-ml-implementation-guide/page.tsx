import React from "react";
import type { Metadata } from "next";
import AIMLGuideClient from "./AIMLGuideClient";

export const metadata: Metadata = {
    title: 'Complete Guide to AI & Machine Learning Implementation 2024 | Process & Benefits',
    description: 'Learn everything about AI and ML implementation: use cases, development process, costs, technologies, and how to leverage artificial intelligence for business growth.',
    keywords: ['AI ML implementation guide', 'machine learning development', 'AI solutions for business', 'AI development cost', 'AI implementation process', 'artificial intelligence technologies'],
    alternates: {
        canonical: 'https://phoenixcreativehub.co.uk/guides/ai-ml-implementation-guide',
    },
    openGraph: {
        title: 'Complete Guide to AI & Machine Learning Implementation 2024 | Process & Benefits',
        description: 'Learn everything about AI and ML implementation: use cases, development process, costs, technologies, and how to leverage artificial intelligence for business growth.',
        url: 'https://phoenixcreativehub.co.uk/guides/ai-ml-implementation-guide',
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

export default function AIMLImplementationGuide() {
    return <AIMLGuideClient />;
}
