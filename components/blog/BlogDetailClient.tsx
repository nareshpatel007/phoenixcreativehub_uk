"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, Sparkles } from "lucide-react";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import Comments from "./Comments";

interface BlogDetailClientProps {
    post: any;
}

const formatDate = (dateStr: string) => {
    try {
        const d = new Date(dateStr);
        return d.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
        });
    } catch {
        return dateStr;
    }
};

export function BlogDetailClient({ post }: BlogDetailClientProps) {
    const cleanExcerpt = post.excerpt?.replace(/<[^>]*>/g, "") || "Read our technical deep-dives.";
    const categoryName = post.category && post.category.length > 0 ? post.category[0].name : "Engineering";
    const imageUrl = post.featured_image?.full || post.featured_image?.large || "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop";
    const authorName = post.author?.name || "Phoenix Creative Team";
    const authorAvatar = authorName.split(" ").map((n: string) => n[0]).join("").toUpperCase().slice(0, 2);

    return (
        <div className="w-full bg-white relative pt-20 md:pt-22">

            <ServiceHeader
                title={post.title}
                badge={categoryName}
            />

            {/* Article Content Layout */}
            <section className="py-12 md:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <article className="space-y-8">
                        {/* Top Banner Image */}
                        {imageUrl && (
                            <div className="relative h-[200px] md:h-[300px] lg:h-[450px] rounded-3xl overflow-hidden shadow-sm mb-8 md:mb-12">
                                <Image
                                    src={imageUrl}
                                    alt={post.title}
                                    fill
                                    priority
                                    draggable={false}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                                    className="object-cover"
                                />
                            </div>
                        )}

                        {/* Render Rich HTML Content with clean generic styling fallback overrides */}
                        <div
                            className="blog-content-html prose prose-blue max-w-none text-slate-700 leading-relaxed font-normal space-y-6 
                            [&>p]:text-base [&>p]:leading-relaxed [&>p]:text-slate-650
                            [&>h2]:text-2xl [&>h2]:font-extrabold [&>h2]:text-[#111111] [&>h2]:pt-6 [&>h2]:pb-2
                            [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-[#111111] [&>h3]:pt-4
                            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2
                            [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2
                            [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-slate-800 [&>blockquote]:bg-slate-50 [&>blockquote]:py-4 [&>blockquote]:my-6
                            [&_img]:rounded-2xl [&_img]:shadow-sm [&_img]:my-6
                            "
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Discussion/Comments Section */}
                        <Comments postId={post.id} postSlug={post.slug} />
                    </article>
                </div>
            </section>
        </div>
    );
}
