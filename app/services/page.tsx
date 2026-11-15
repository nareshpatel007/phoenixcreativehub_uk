import React from "react";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "IT Services London | Custom Software Development [Step by Step]",
    description: "Expert IT services in London: custom software development, web & mobile apps, AI automation, CRM/ERP systems, cloud infrastructure & digital transformation solutions.",
    keywords: ['IT Services London', 'Custom Software Development', 'Web Development London', 'Mobile App Development', 'AI Solutions UK', 'Cloud Migration Services', 'CRM ERP Development', 'Digital Transformation'],
    openGraph: {
        title: "IT Services London | Custom Software Development [Step by Step]",
        description: "Expert IT services in London: custom software development, web & mobile apps, AI automation, CRM/ERP systems, cloud infrastructure & digital transformation solutions.",
        url: 'https://phoenixcreativehub.co.uk/services',
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

export default function Page() {
    return <ClientPage />;
}
