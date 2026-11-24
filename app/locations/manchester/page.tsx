import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Software Development & SEO Manchester | Phoenix Creative",
    description: "Need software, web, app, AI or SEO support in Manchester? Talk to Phoenix Creative Hub about your business goals and project requirements.",
    keywords: [
        "Software development company Manchester",
        "custom software development Manchester",
        "web development company Manchester",
        "mobile app development company Manchester",
        "AI development company Manchester",
        "SEO agency Manchester",
        "Phoenix Creative Hub UK"
    ],
    alternates: {
        canonical: "https://phoenixcreativehub.co.uk/locations/manchester",
    },
    openGraph: {
        title: "Software Development & SEO Manchester | Phoenix Creative",
        description: "Need software, web, app, AI or SEO support in Manchester? Talk to Phoenix Creative Hub about your business goals and project requirements.",
        url: "https://phoenixcreativehub.co.uk/locations/manchester",
        siteName: "Phoenix Creative Hub UK",
        images: [{
            url: "https://phoenixcreativehub.co.uk/images/logo-black.png",
            width: 1200,
            height: 630,
            alt: "Software Development & SEO Manchester - Phoenix Creative Hub",
        }],
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Software Development & SEO Manchester | Phoenix Creative",
        description: "Need software, web, app, AI or SEO support in Manchester? Talk to Phoenix Creative Hub about your business goals and project requirements.",
        images: ["https://phoenixcreativehub.co.uk/images/logo-black.png"],
    },
};

export default function ManchesterLocationPage() {
    return <ClientPage />;
}
