import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Layout } from "@/components/layout/Layout";
import Script from "next/script";
import { AnalyticsTracker } from "@/components/analytics/AnalyticsTracker";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
});

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#9ACD32" },
        { media: "(prefers-color-scheme: dark)", color: "#111111" },
    ],
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    title: {
        default: "Phoenix Creative Hub UK | Premium Web, Mobile & Software Development London",
        template: "%s | Phoenix Creative Hub UK"
    },
    applicationName: "Phoenix Creative Hub UK",
    description: "Leading creative agency and software development company based in London, UK. Custom web development, mobile apps, CRM, ERP, and AI solutions.",
    keywords: [
        "Phoenix Creative Hub UK",
        "Phoenix Creative Hub",
        "Web Development London",
        "Mobile App Development London",
        "Custom Software Development UK",
        "CRM ERP Systems UK",
        "AI ML Solutions UK",
        "Creative Digital Agency London",
        "Software Engineering London"
    ],
    authors: [{ name: "Phoenix Creative Hub UK" }],
    creator: "Phoenix Creative Hub UK",
    publisher: "Phoenix Creative Hub UK",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://phoenixcreativehub.co.uk"),
    alternates: {
        canonical: "https://phoenixcreativehub.co.uk",
    },
    openGraph: {
        type: "website",
        locale: "en_GB",
        url: "https://phoenixcreativehub.co.uk",
        siteName: "Phoenix Creative Hub UK",
        title: "Phoenix Creative Hub UK | Premium Web, Mobile & Software Development London",
        description: "Leading creative agency and software development company based in London, UK. Custom web development, mobile apps, CRM, ERP, and AI solutions.",
        images: [
            {
                url: "/images/logo-black.png",
                width: 1200,
                height: 630,
                alt: "Phoenix Creative Hub UK Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Phoenix Creative Hub UK | Web & Software Development London",
        description: "Leading software development and creative technology company in London, UK.",
        images: ["/images/logo-black.png"],
        creator: "@phoenixcreativehubuk",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PHOENIX CREATIVE HUB UK LTD",
    "alternateName": "Phoenix Creative Hub UK",
    "legalName": "PHOENIX CREATIVE HUB UK LTD",
    "identifier": "17524969",
    "url": "https://phoenixcreativehub.co.uk",
    "logo": "https://phoenixcreativehub.co.uk/images/logo-white.png",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+447833817034",
        "contactType": "customer service",
        "areaServed": "GB",
        "availableLanguage": "en"
    },
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Suite RA01, 195-197 Wood Street",
        "addressLocality": "London",
        "postalCode": "E17 3NU",
        "addressCountry": "GB"
    },
    "sameAs": [
        "https://www.instagram.com/phoenix_creative_hub_uk?cplk=eGxndHBzaHE5dXky",
        "https://www.facebook.com/phoenixcreativehubukltd"
    ],
    "description": "PHOENIX CREATIVE HUB UK LTD (Company No. 17524969) is a leading software development and creative digital agency in London, UK offering web development, mobile apps, CRM & ERP systems, SEO, GEO, AEO, and AI automation."
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What services does Phoenix Creative Hub UK offer?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Phoenix Creative Hub UK offers bespoke software engineering, including high-performance web development, mobile applications (iOS and Android), AI automation & ML integrations, and tailored CRM & ERP business systems."
            }
        },
        {
            "@type": "Question",
            "name": "Where is Phoenix Creative Hub UK located?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our office is located at Suite RA01, 195-197 Wood Street, London, E17 3NU, United Kingdom."
            }
        },
        {
            "@type": "Question",
            "name": "Does Phoenix Creative Hub UK work with international clients?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we serve UK enterprises, European organisations, and international companies seeking high-quality engineering standards and dependable project delivery."
            }
        }
    ]
};

const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://phoenixcreativehub.co.uk/",
    "name": "Phoenix Creative Hub UK",
    "alternateName": "Phoenix Creative Hub UK"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} h-full antialiased`}
            suppressHydrationWarning
        >
            <head>
                <link rel="manifest" href="/manifest.json" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            if ('serviceWorker' in navigator) {
                                window.addEventListener('load', function() {
                                    navigator.serviceWorker.register('/sw.js').then(
                                        function(registration) {
                                            console.log('Service Worker registered with scope: ', registration.scope);
                                        },
                                        function(err) {
                                            console.log('Service Worker registration failed: ', err);
                                        }
                                    );
                                });
                            }
                        `
                    }}
                />
                <Script
                    id="json-ld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Script
                    id="faq-json-ld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
                <Script
                    id="website-json-ld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
                />
                {/* Meta Pixel Code */}
                <Script
                    id="fb-pixel"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            !function(f,b,e,v,n,t,s)
                            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                            n.queue=[];t=b.createElement(e);t.async=!0;
                            t.src=v;s=b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t,s)}(window, document,'script',
                            'https://connect.facebook.net/en_GB/fbevents.js');
                            fbq('init', '1079441631693644');
                            fbq('track', 'PageView');
                        `,
                    }}
                />
            </head>
            <body className="min-h-full flex flex-col">
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: "none" }}
                        src="https://www.facebook.com/tr?id=1079441631693644&ev=PageView&noscript=1"
                        alt=""
                    />
                </noscript>
                <Providers>
                    <AnalyticsTracker />
                    <Layout>{children}</Layout>
                </Providers>
            </body>
        </html>
    );
}
