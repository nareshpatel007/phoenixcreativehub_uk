import { services, Service } from "@/data/services";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";
import CustomSoftwareDetailClient from "./CustomSoftwareDetailClient";
import WebDevelopmentDetailClient from "./WebDevelopmentDetailClient";
import MobileAppDetailClient from "./MobileAppDetailClient";
import AIDevelopmentDetailClient from "./AIDevelopmentDetailClient";
import CRMDevelopmentDetailClient from "./CRMDevelopmentDetailClient";
import ERPDevelopmentDetailClient from "./ERPDevelopmentDetailClient";
import SEOServicesDetailClient from "./SEOServicesDetailClient";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return [
        ...services.map((s) => ({ slug: s.slug })),
        { slug: "web-development" },
        { slug: "mobile-app-development" },
        { slug: "ai-development" },
        { slug: "crm-development" },
        { slug: "erp-development" },
        { slug: "seo-services" },
    ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    // Specific SEO Recommendations from SEO Content Document for SEO Services
    if (slug === "seo-services") {
        return {
            title: "SEO Agency UK | SEO Services for Business Growth",
            description: "Improve your visibility and attract more relevant enquiries with practical SEO services from Phoenix Creative Hub. Speak to our team about your UK growth goals.",
            keywords: [
                "SEO agency UK",
                "SEO company UK",
                "SEO services UK",
                "SEO agency London",
                "technical SEO",
                "local SEO services UK",
                "on-page SEO",
                "Phoenix Creative Hub UK",
            ],
            alternates: {
                canonical: `https://phoenixcreativehub.co.uk/services/${slug}`,
            },
            openGraph: {
                title: "SEO Agency UK | SEO Services for Business Growth",
                description: "Improve your visibility and attract more relevant enquiries with practical SEO services from Phoenix Creative Hub. Speak to our team about your UK growth goals.",
                url: `https://phoenixcreativehub.co.uk/services/${slug}`,
                siteName: "Phoenix Creative Hub UK",
                images: [{
                    url: "https://phoenixcreativehub.co.uk/images/logo-black.png",
                    width: 1200,
                    height: 630,
                    alt: "SEO Agency UK - Phoenix Creative Hub",
                }],
                locale: "en_GB",
                type: "article",
            },
            twitter: {
                card: "summary_large_image",
                title: "SEO Agency UK | SEO Services for Business Growth",
                description: "Improve your visibility and attract more relevant enquiries with practical SEO services from Phoenix Creative Hub. Speak to our team about your UK growth goals.",
                images: ["https://phoenixcreativehub.co.uk/images/logo-black.png"],
            },
        };
    }

    // Specific SEO Recommendations from SEO Content Document for ERP Development
    if (slug === "erp-development") {
        return {
            title: "ERP Development Company UK | Phoenix Creative Hub",
            description: "Bring key business processes into a system designed around your operation. Discuss custom ERP development and integration with Phoenix Creative Hub.",
            keywords: [
                "ERP development company UK",
                "custom ERP software development UK",
                "ERP software development",
                "bespoke ERP software",
                "ERP integration services UK",
                "Phoenix Creative Hub UK",
            ],
            alternates: {
                canonical: `https://phoenixcreativehub.co.uk/services/${slug}`,
            },
            openGraph: {
                title: "ERP Development Company UK | Phoenix Creative Hub",
                description: "Bring key business processes into a system designed around your operation. Discuss custom ERP development and integration with Phoenix Creative Hub.",
                url: `https://phoenixcreativehub.co.uk/services/${slug}`,
                siteName: "Phoenix Creative Hub UK",
                images: [{
                    url: "https://phoenixcreativehub.co.uk/images/logo-black.png",
                    width: 1200,
                    height: 630,
                    alt: "ERP Development Company UK - Phoenix Creative Hub",
                }],
                locale: "en_GB",
                type: "article",
            },
            twitter: {
                card: "summary_large_image",
                title: "ERP Development Company UK | Phoenix Creative Hub",
                description: "Bring key business processes into a system designed around your operation. Discuss custom ERP development and integration with Phoenix Creative Hub.",
                images: ["https://phoenixcreativehub.co.uk/images/logo-black.png"],
            },
        };
    }

    // Specific SEO Recommendations from SEO Content Document for CRM Development
    if (slug === "crm-development" || slug === "crm-erp-systems") {
        return {
            title: "CRM Development Company UK | Phoenix Creative Hub",
            description: "Plan a CRM around your sales and customer workflows. Phoenix Creative Hub helps UK businesses scope bespoke CRM software and integrations.",
            keywords: [
                "CRM development company UK",
                "custom CRM development UK",
                "CRM software development",
                "bespoke CRM software",
                "CRM integration services UK",
                "CRM automation",
                "Phoenix Creative Hub UK",
            ],
            alternates: {
                canonical: `https://phoenixcreativehub.co.uk/services/${slug}`,
            },
            openGraph: {
                title: "CRM Development Company UK | Phoenix Creative Hub",
                description: "Plan a CRM around your sales and customer workflows. Phoenix Creative Hub helps UK businesses scope bespoke CRM software and integrations.",
                url: `https://phoenixcreativehub.co.uk/services/${slug}`,
                siteName: "Phoenix Creative Hub UK",
                images: [{
                    url: "https://phoenixcreativehub.co.uk/images/logo-black.png",
                    width: 1200,
                    height: 630,
                    alt: "CRM Development Company UK - Phoenix Creative Hub",
                }],
                locale: "en_GB",
                type: "article",
            },
            twitter: {
                card: "summary_large_image",
                title: "CRM Development Company UK | Phoenix Creative Hub",
                description: "Plan a CRM around your sales and customer workflows. Phoenix Creative Hub helps UK businesses scope bespoke CRM software and integrations.",
                images: ["https://phoenixcreativehub.co.uk/images/logo-black.png"],
            },
        };
    }

    // Specific SEO Recommendations from SEO Content Document for AI Development and Automation
    if (slug === "ai-automation-ml" || slug === "ai-development") {
        return {
            title: "AI Development & Automation UK | Phoenix Creative Hub",
            description: "Put AI to work on real business challenges. Discuss AI development, workflow automation and intelligent applications with Phoenix Creative Hub.",
            keywords: [
                "AI development company UK",
                "AI automation services UK",
                "AI agent development",
                "machine learning development UK",
                "AI chatbot development UK",
                "business process automation",
                "Phoenix Creative Hub UK",
            ],
            alternates: {
                canonical: `https://phoenixcreativehub.co.uk/services/${slug}`,
            },
            openGraph: {
                title: "AI Development & Automation UK | Phoenix Creative Hub",
                description: "Put AI to work on real business challenges. Discuss AI development, workflow automation and intelligent applications with Phoenix Creative Hub.",
                url: `https://phoenixcreativehub.co.uk/services/${slug}`,
                siteName: "Phoenix Creative Hub UK",
                images: [{
                    url: "https://phoenixcreativehub.co.uk/images/logo-black.png",
                    width: 1200,
                    height: 630,
                    alt: "AI Development & Automation UK - Phoenix Creative Hub",
                }],
                locale: "en_GB",
                type: "article",
            },
            twitter: {
                card: "summary_large_image",
                title: "AI Development & Automation UK | Phoenix Creative Hub",
                description: "Put AI to work on real business challenges. Discuss AI development, workflow automation and intelligent applications with Phoenix Creative Hub.",
                images: ["https://phoenixcreativehub.co.uk/images/logo-black.png"],
            },
        };
    }

    // Specific SEO Recommendations from SEO Content Document for Mobile App Development
    if (slug === "mobile-app-development") {
        return {
            title: "Mobile App Development UK | Phoenix Creative Hub",
            description: "Plan a mobile app around your users and business goals. Phoenix Creative Hub helps UK organisations scope iOS, Android and cross-platform app projects.",
            keywords: [
                "Mobile app development company UK",
                "app development company UK",
                "iOS app development UK",
                "Android app development UK",
                "cross-platform app development UK",
                "custom mobile app development",
                "Phoenix Creative Hub UK",
            ],
            alternates: {
                canonical: `https://phoenixcreativehub.co.uk/services/mobile-app-development`,
            },
            openGraph: {
                title: "Mobile App Development UK | Phoenix Creative Hub",
                description: "Plan a mobile app around your users and business goals. Phoenix Creative Hub helps UK organisations scope iOS, Android and cross-platform app projects.",
                url: `https://phoenixcreativehub.co.uk/services/mobile-app-development`,
                siteName: "Phoenix Creative Hub UK",
                images: [{
                    url: "https://phoenixcreativehub.co.uk/images/logo-black.png",
                    width: 1200,
                    height: 630,
                    alt: "Mobile App Development UK - Phoenix Creative Hub",
                }],
                locale: "en_GB",
                type: "article",
            },
            twitter: {
                card: "summary_large_image",
                title: "Mobile App Development UK | Phoenix Creative Hub",
                description: "Plan a mobile app around your users and business goals. Phoenix Creative Hub helps UK organisations scope iOS, Android and cross-platform app projects.",
                images: ["https://phoenixcreativehub.co.uk/images/logo-black.png"],
            },
        };
    }

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

    if (slug === "seo-services") {
        return <SEOServicesDetailClient service={services[0]} />;
    }

    if (slug === "erp-development") {
        const matchingService = services.find((s) => s.slug === "crm-erp-systems");
        return <ERPDevelopmentDetailClient service={matchingService || services[0]} />;
    }

    if (slug === "crm-development" || slug === "crm-erp-systems") {
        const matchingService = services.find((s) => s.slug === "crm-erp-systems");
        return <CRMDevelopmentDetailClient service={matchingService || services[0]} />;
    }

    if (slug === "ai-automation-ml" || slug === "ai-development") {
        const matchingService = services.find((s) => s.slug === "ai-automation-ml");
        return <AIDevelopmentDetailClient service={matchingService || services[0]} />;
    }

    if (slug === "mobile-app-development") {
        const matchingService = services.find((s) => s.slug === "web-mobile-development");
        return <MobileAppDetailClient service={matchingService || services[0]} />;
    }

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
