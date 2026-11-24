import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Software Development & SEO Birmingham | Phoenix Creative",
    description: "Need software, web, app, AI or SEO support in Birmingham? Talk to Phoenix Creative Hub about your business goals and project requirements.",
    keywords: [
        "Software development company Birmingham",
        "custom software development Birmingham",
        "web development company Birmingham",
        "mobile app development company Birmingham",
        "AI development company Birmingham",
        "SEO agency Birmingham",
        "Phoenix Creative Hub UK"
    ],
    alternates: {
        canonical: "https://phoenixcreativehub.co.uk/locations/birmingham",
    },
    openGraph: {
        title: "Software Development & SEO Birmingham | Phoenix Creative",
        description: "Need software, web, app, AI or SEO support in Birmingham? Talk to Phoenix Creative Hub about your business goals and project requirements.",
        url: "https://phoenixcreativehub.co.uk/locations/birmingham",
        siteName: "Phoenix Creative Hub UK",
        images: [{
            url: "https://phoenixcreativehub.co.uk/images/logo-black.png",
            width: 1200,
            height: 630,
            alt: "Software Development & SEO Birmingham - Phoenix Creative Hub",
        }],
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Software Development & SEO Birmingham | Phoenix Creative",
        description: "Need software, web, app, AI or SEO support in Birmingham? Talk to Phoenix Creative Hub about your business goals and project requirements.",
        images: ["https://phoenixcreativehub.co.uk/images/logo-black.png"],
    },
};

export default function BirminghamLocationPage() {
    return <ClientPage />;
}
