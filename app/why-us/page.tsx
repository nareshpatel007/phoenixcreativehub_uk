import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Why Choose Phoenix Creative Hub | UK Digital Partner",
    description: "Choose a partner that starts with your business goals. Explore Phoenix Creative Hub's software development, AI, web, mobile and SEO approach.",
    keywords: [
        "Software development partner UK",
        "software development agency UK",
        "bespoke software development partner",
        "technology partner UK",
        "SEO partner",
        "Phoenix Creative Hub UK"
    ],
    alternates: {
        canonical: "https://phoenixcreativehub.co.uk/why-us",
    },
    openGraph: {
        title: "Why Choose Phoenix Creative Hub | UK Digital Partner",
        description: "Choose a partner that starts with your business goals. Explore Phoenix Creative Hub's software development, AI, web, mobile and SEO approach.",
        url: "https://phoenixcreativehub.co.uk/why-us",
        siteName: "Phoenix Creative Hub UK",
        images: [{
            url: "https://phoenixcreativehub.co.uk/images/logo-black.png",
            width: 1200,
            height: 630,
            alt: "Why Choose Phoenix Creative Hub UK",
        }],
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Why Choose Phoenix Creative Hub | UK Digital Partner",
        description: "Choose a partner that starts with your business goals. Explore Phoenix Creative Hub's software development, AI, web, mobile and SEO approach.",
        images: ["https://phoenixcreativehub.co.uk/images/logo-black.png"],
    },
};

export default function WhyUsPage() {
    return <ClientPage />;
}
