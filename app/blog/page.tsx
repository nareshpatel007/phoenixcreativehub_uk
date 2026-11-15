import React from "react";
import type { Metadata } from "next";
import { BlogGridClient } from "@/components/blog/BlogGridClient";

export const metadata: Metadata = {
    title: "Blog | Software Engineering Technical Insights",
    description: "Read technical guides, database optimizations, Next.js architecture guidelines & cloud engineering tips by our expert software consulting team.",
    keywords: ['Software Engineering Blog', 'Tech Blog UK', 'Next.js Tutorials', 'Database Optimization', 'Cloud Engineering Tips', 'Web Development Guides'],
    openGraph: {
        title: "Blog | Software Engineering Technical Insights",
        description: "Read technical guides, database optimizations, Next.js architecture guidelines & cloud engineering tips by our expert team.",
        url: 'https://phoenixcreativehub.co.uk/blog',
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

export default function BlogPage() {
    return <BlogGridClient />;
}
