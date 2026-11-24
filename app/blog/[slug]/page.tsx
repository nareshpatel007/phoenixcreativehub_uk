import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlogDetailClient } from "@/components/blog/BlogDetailClient";

interface Props {
    params: Promise<{ slug: string }>;
}

async function getPost(slug: string) {
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://backend.phoenixcreativehub.co.uk/wp-json/sandbox/v1';
    try {
        const response = await fetch(`${apiUrl}/posts/${slug}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            next: { revalidate: 60 }
        });
        if (!response.ok) return null;
        return response.json();
    } catch (error) {
        console.error("Error in getPost:", error);
        return null;
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) {
        return {
            title: "Article Not Found - Phoenix Creative Hub UK",
        };
    }
    const cleanDescription = post.excerpt ? post.excerpt.replace(/<[^>]*>?/gm, '').trim() : "";
    return {
        title: `${post.title} | Software Engineering Blog`,
        description: cleanDescription,
        keywords: [post.tag, 'Software Engineering', 'Tech Blog', 'Web Development', 'Next.js', 'Database'],
        alternates: {
            canonical: `https://phoenixcreativehub.co.uk/blog/${slug}`,
        },
        openGraph: {
            title: `${post.title} | Phoenix Creative Hub UK`,
            description: cleanDescription,
            url: `https://phoenixcreativehub.co.uk/blog/${slug}`,
            siteName: 'Phoenix Creative Hub UK',
            images: post.featured_image ? [{
                url: post.featured_image?.full || post.featured_image?.large || post.featured_image,
                width: 1200,
                height: 630,
            }] : [{
                url: '/images/logo-black.png',
                width: 1200,
                height: 630,
            }],
            locale: 'en_GB',
            type: 'article',
        },
    };
}

export const dynamic = "force-dynamic";

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPost(slug);
    
    if (!post) {
        notFound();
    }

    return <BlogDetailClient post={post} />;
}
