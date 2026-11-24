import { services, Service } from "@/data/services";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";
import CustomSoftwareDetailClient from "./CustomSoftwareDetailClient";
import WebDevelopmentDetailClient from "./WebDevelopmentDetailClient";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return [
        ...services.map((s) => ({ slug: s.slug })),
        { slug: "web-development" },
    ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    // Specific SEO Recommendations from SEO Content Document for Web Development
    if (slug === "web-development" || slug === "web-mobile-development") {
        return {
            title: "Web Development Company UK | Phoenix Creative Hub",
            description: "Create a website or web application built around your business goals. Phoenix Creative Hub supports UK organisations with considered web development.",
            keywords: [
                "Web development company UK",
                "website development company UK",
                "custom web development UK",
                "web application development",
                "business website development",
                "Phoenix Creative Hub UK",
            ],
            alternates: {
                canonical: `https://phoenixcreativehub.co.uk/services/${slug}`,
            },
            openGraph: {
                title: "Web Development Company UK | Phoenix Creative Hub",
                description: "Create a website or web application built around your business goals. Phoenix Creative Hub supports UK organisations with considered web development.",
                url: `https://phoenixcreativehub.co.uk/services/${slug}`,
                siteName: "Phoenix Creative Hub UK",
                images: [{
                    url: "https://phoenixcreativehub.co.uk/images/logo-black.png",
                    width: 1200,
                    height: 630,
                    alt: "Web Development Company UK - Phoenix Creative Hub",
                }],
                locale: "en_GB",
                type: "article",
            },
            twitter: {
                card: "summary_large_image",
                title: "Web Development Company UK | Phoenix Creative Hub",
                description: "Create a website or web application built around your business goals. Phoenix Creative Hub supports UK organisations with considered web development.",
                images: ["https://phoenixcreativehub.co.uk/images/logo-black.png"],
            },
        };
    }

    // Specific SEO Recommendations from SEO Content Document for Custom Software Development
    if (slug === "custom-software-development") {
        return {
            title: "Custom Software Development UK | Phoenix Creative Hub",
            description: "Build software around your business processes with Phoenix Creative Hub. Discuss bespoke applications, system integrations and tailored solutions for UK teams.",
            keywords: [
                "Custom software development UK",
                "bespoke software development UK",
                "custom software development company",
                "enterprise software development",
                "custom business software",
                "Phoenix Creative Hub UK",
            ],
            alternates: {
                canonical: "https://phoenixcreativehub.co.uk/services/custom-software-development",
            },
            openGraph: {
                title: "Custom Software Development UK | Phoenix Creative Hub",
                description: "Build software around your business processes with Phoenix Creative Hub. Discuss bespoke applications, system integrations and tailored solutions for UK teams.",
                url: "https://phoenixcreativehub.co.uk/services/custom-software-development",
                siteName: "Phoenix Creative Hub UK",
                images: [{
                    url: "https://phoenixcreativehub.co.uk/images/logo-black.png",
                    width: 1200,
                    height: 630,
                    alt: "Custom Software Development UK - Phoenix Creative Hub",
                }],
                locale: "en_GB",
                type: "article",
            },
            twitter: {
                card: "summary_large_image",
                title: "Custom Software Development UK | Phoenix Creative Hub",
                description: "Build software around your business processes with Phoenix Creative Hub. Discuss bespoke applications, system integrations and tailored solutions for UK teams.",
                images: ["https://phoenixcreativehub.co.uk/images/logo-black.png"],
            },
        };
    }

    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${service.title} | IT Services`,
        description: service.description,
        keywords: [...service.technologies, ...service.features, service.title, 'Software Development London', 'UK IT Solutions'],
        alternates: {
            canonical: `https://phoenixcreativehub.co.uk/services/${service.slug}`,
        },
        openGraph: {
            title: `${service.title} | Phoenix Creative Hub UK`,
            description: service.tagline,
            url: `https://phoenixcreativehub.co.uk/services/${service.slug}`,
            siteName: 'Phoenix Creative Hub UK',
            images: [{
                url: '/images/logo-black.png',
                width: 1200,
                height: 630,
            }],
            locale: 'en_GB',
            type: 'article',
        },
    };
}

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await params;

    if (slug === "web-development" || slug === "web-mobile-development") {
        const matchingService = services.find((s) => s.slug === "web-mobile-development");
        return <WebDevelopmentDetailClient service={matchingService || services[0]} />;
    }

    if (slug === "custom-software-development") {
        const matchingService = services.find((s) => s.slug === "custom-software-development");
        return <CustomSoftwareDetailClient service={matchingService || services[0]} />;
    }

    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return <ServiceDetailClient service={service} />;
}
