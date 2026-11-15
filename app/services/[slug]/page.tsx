import { services, Service } from "@/data/services";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return services.map((s) => ({
        slug: s.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${service.title} | IT Services`,
        description: service.description,
        keywords: [...service.technologies, ...service.features, service.title, 'Software Development London', 'IT Solutions India'],
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
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return <ServiceDetailClient service={service} />;
}
