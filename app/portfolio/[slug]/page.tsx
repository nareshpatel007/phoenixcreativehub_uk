import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProjectDetailClient } from "./ProjectDetailClient";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
    if (!project) {
        return {
            title: "Project Not Found - Phoenix Creative Hub UK",
        };
    }
    return {
        title: `${project.title} | Case Study`,
        description: project.desc,
        keywords: [...project.tags, project.category, project.title, 'Software Development Case Study', 'IT Project Example'],
        alternates: {
            canonical: `https://phoenixcreativehub.co.uk/portfolio/${project.slug}`,
        },
        openGraph: {
            title: `${project.title} | Phoenix Creative Hub UK`,
            description: project.desc,
            url: `https://phoenixcreativehub.co.uk/portfolio/${project.slug}`,
            siteName: 'Phoenix Creative Hub UK',
            images: [{
                url: project.image,
                width: 1200,
                height: 630,
            }],
            locale: 'en_GB',
            type: 'article',
        },
    };
}

export async function generateStaticParams() {
    return PORTFOLIO_PROJECTS.map((proj) => ({
        slug: proj.slug,
    }));
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetailClient project={project} />;
}
