import React from "react";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Contact Phoenix Creative Hub | Discuss Your Project",
    description: "Have a software, web, app, AI or SEO project in mind? Contact Phoenix Creative Hub to discuss your requirements and arrange a consultation.",
    keywords: [
        "Software development consultation UK",
        "custom software development quote UK",
        "web development consultation",
        "mobile app development quote",
        "SEO consultation UK",
        "Phoenix Creative Hub UK"
    ],
    alternates: {
        canonical: "https://phoenixcreativehub.co.uk/contact",
    },
    openGraph: {
        title: "Contact Phoenix Creative Hub | Discuss Your Project",
        description: "Have a software, web, app, AI or SEO project in mind? Contact Phoenix Creative Hub to discuss your requirements and arrange a consultation.",
        url: "https://phoenixcreativehub.co.uk/contact",
        siteName: "Phoenix Creative Hub UK",
        images: [{
            url: "https://phoenixcreativehub.co.uk/images/logo-black.png",
            width: 1200,
            height: 630,
            alt: "Contact Phoenix Creative Hub UK",
        }],
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Phoenix Creative Hub | Discuss Your Project",
        description: "Have a software, web, app, AI or SEO project in mind? Contact Phoenix Creative Hub to discuss your requirements and arrange a consultation.",
        images: ["https://phoenixcreativehub.co.uk/images/logo-black.png"],
    },
};

export default function Page() {
    return <ClientPage />;
}
