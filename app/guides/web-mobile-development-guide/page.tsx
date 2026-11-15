import React from "react";
import type { Metadata } from "next";
import WebMobileGuideClient from "./WebMobileGuideClient";

export const metadata: Metadata = {
    title: 'Complete Guide to Web & Mobile App Development 2024 | Process & Cost',
    description: 'Learn everything about web and mobile app development: native vs cross-platform, development process, costs, technologies, and how to choose the right approach for your business.',
    keywords: ['web mobile app development guide', 'native vs cross-platform development', 'mobile app development cost', 'web app development process', 'app development technologies', 'ios android development'],
    openGraph: {
        title: 'Complete Guide to Web & Mobile App Development 2024 | Process & Cost',
        description: 'Learn everything about web and mobile app development: native vs cross-platform, development process, costs, technologies, and how to choose the right approach.',
        url: 'https://phoenixcreativehub.co.uk/guides/web-mobile-development-guide',
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

export default function WebMobileDevelopmentGuide() {
    return <WebMobileGuideClient />;
}
