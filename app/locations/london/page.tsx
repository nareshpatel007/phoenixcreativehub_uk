import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Software Development & SEO London | Phoenix Creative",
    description: "Need software, web, app, AI or SEO support in London? Talk to Phoenix Creative Hub about your business goals and project requirements.",
    keywords: [
        "Software development company London",
        "custom software development London",
        "web development company London",
        "mobile app development company London",
        "AI development company London",
        "SEO agency London",
        "Phoenix Creative Hub UK"
    ],
    alternates: {
        canonical: "https://phoenixcreativehub.co.uk/locations/london",
    },
    openGraph: {
        title: "Software Development & SEO London | Phoenix Creative",
        description: "Need software, web, app, AI or SEO support in London? Talk to Phoenix Creative Hub about your business goals and project requirements.",
        url: "https://phoenixcreativehub.co.uk/locations/london",
        siteName: "Phoenix Creative Hub UK",
        images: [{
            url: "https://phoenixcreativehub.co.uk/images/logo-black.png",
            width: 1200,
            height: 630,
            alt: "Software Development & SEO London - Phoenix Creative Hub",
        }],
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Software Development & SEO London | Phoenix Creative",
        description: "Need software, web, app, AI or SEO support in London? Talk to Phoenix Creative Hub about your business goals and project requirements.",
        images: ["https://phoenixcreativehub.co.uk/images/logo-black.png"],
    },
};

export default function LondonLocationPage() {
    return <ClientPage />;
}
