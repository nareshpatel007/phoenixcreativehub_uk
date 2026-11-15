import React from "react";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Contact Us | Get Free Quote for Software Development",
    description: "Contact Phoenix Creative Hub UK London for custom software development. Call +91 95865 57162. Expert web, mobile apps, CRM & IT consulting solutions.",
    keywords: ['Contact Phoenix Creative Hub UK', 'Software Development Contact', 'IT Company London', 'Web Development Quote', 'Mobile App Development Inquiry', 'Custom Software Consultation'],
    openGraph: {
        title: "Contact Us | Get Free Quote for Software Development",
        description: "Contact Phoenix Creative Hub UK London for custom software development. Call +91 95865 57162. Expert web, mobile apps, CRM & IT consulting.",
        url: 'https://phoenixcreativehub.co.uk/contact',
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
