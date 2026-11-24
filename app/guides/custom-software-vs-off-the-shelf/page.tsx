import React from "react";
import type { Metadata } from "next";
import CustomVsOffTheShelfClient from "./CustomVsOffTheShelfClient";

export const metadata: Metadata = {
    title: 'Custom Software vs Off-the-Shelf Solutions | Which is Right for Your Business?',
    description: 'Compare custom software development with off-the-shelf solutions. Learn the pros, cons, costs, and when to choose each option for your business needs.',
    keywords: ['custom software vs off-the-shelf', 'custom software vs saas', 'bespoke software vs packaged software', 'when to choose custom software', 'off-the-shelf software pros and cons'],
    alternates: {
        canonical: 'https://phoenixcreativehub.co.uk/guides/custom-software-vs-off-the-shelf',
    },
    openGraph: {
        title: 'Custom Software vs Off-the-Shelf Solutions | Which is Right for Your Business?',
        description: 'Compare custom software development with off-the-shelf solutions. Learn the pros, cons, costs, and when to choose each option.',
        url: 'https://phoenixcreativehub.co.uk/guides/custom-software-vs-off-the-shelf',
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

export default function CustomVsOffTheShelf() {
    return <CustomVsOffTheShelfClient />;
}
