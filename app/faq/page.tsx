import React from "react";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "FAQ | Software Development Questions",
    description: "Find answers to common software development questions. Learn about our services, pricing, timelines, and project processes at Phoenix Creative Hub UK London.",
    alternates: {
        canonical: 'https://phoenixcreativehub.co.uk/faq',
    },
};

export default function Page() {
    return <ClientPage />;
}
