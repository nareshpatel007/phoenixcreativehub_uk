import React from "react";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "About Phoenix Creative Hub | UK Technology & SEO",
    description: "Meet Phoenix Creative Hub, a UK-focused technology and digital growth partner for software development, AI, web, mobile apps and SEO.",
    keywords: [
        "Software development company London",
        "UK software development company",
        "technology company London",
        "IT solutions company UK",
        "digital technology company UK",
        "Phoenix Creative Hub UK"
    ],
    alternates: {
        canonical: "https://phoenixcreativehub.co.uk/about-us",
    },
    openGraph: {
        title: "About Phoenix Creative Hub | UK Technology & SEO",
        description: "Meet Phoenix Creative Hub, a UK-focused technology and digital growth partner for software development, AI, web, mobile apps and SEO.",
        url: "https://phoenixcreativehub.co.uk/about-us",
        siteName: "Phoenix Creative Hub UK",
        images: [{
            url: "https://phoenixcreativehub.co.uk/images/logo-black.png",
            width: 1200,
            height: 630,
            alt: "About Phoenix Creative Hub UK",
        }],
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Phoenix Creative Hub | UK Technology & SEO",
        description: "Meet Phoenix Creative Hub, a UK-focused technology and digital growth partner for software development, AI, web, mobile apps and SEO.",
        images: ["https://phoenixcreativehub.co.uk/images/logo-black.png"],
    },
};

export default function Page() {
    return <ClientPage />;
}
