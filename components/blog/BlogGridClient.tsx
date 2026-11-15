"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import Image from "next/image";
import Pagination from "./Pagination";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

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

export function BlogGridClient() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [pagination, setPagination] = useState<any>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/posts', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ page: currentPage })
                });
                const data = await response.json();
                if (data) {
                    setPosts(data.posts || []);
                    setPagination(data.pagination || null);
                }
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    // Helper to map backend WP post to UI format
    const mapPost = (post: any) => {
        const categoryName = post.category && post.category.length > 0 ? post.category[0].name : "Engineering";
        const imageUrl = post.featured_image?.large || post.featured_image?.full || "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop";
        const authorName = post.author?.name || "Phoenix Creative Team";
        const authorAvatar = authorName.split(" ").map((n: string) => n[0]).join("").toUpperCase().slice(0, 2);

        return {
            slug: post.slug,
            title: post.title,
            desc: post.excerpt?.replace(/<[^>]*>/g, "") || "Read technical guides and best practices directly from our senior engineering team.",
            date: formatDate(post.date),
            tag: categoryName,
            readTime: post.read_time || "5 min read",
            image: imageUrl,
            author: {
                name: authorName,
                role: post.author?.role || "Technical Advisor",
                avatar: authorAvatar
            }
        };
    };

    return (
        <div className="w-full min-h-screen bg-slate-50 text-slate-800 pt-20 md:pt-22">
            <ServiceHeader
                title={<>Technical <span className="text-[#9ACD32]">Insights</span> & Guides</>}
                subtitle="Technical resources, software architectures, development tutorials, and best practices directly from our engineering team."
                badge="Engineering Resources"
                icon={<Sparkles className="w-3.5 h-3.5" />}
            />

            {/* Main Content Area */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {loading ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="h-96 bg-white border border-slate-100 rounded-2xl animate-pulse" />
                            ))}
                        </div>
                    ) : posts.length > 0 ? (
                        <>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="show"
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {posts.map((rawPost) => {
                                    const post = mapPost(rawPost);
                                    return (
                                        <motion.div
                                            key={post.slug}
                                            variants={cardVariants}
                                            className="group flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 h-full"
                                        >
                                            <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                                                {/* Card Visual Image */}
                                                <div className="relative h-48 overflow-hidden bg-slate-100 border-b border-slate-100">
                                                    <Image
                                                        src={post.image}
                                                        alt={post.title}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                </div>

                                                {/* Card Body */}
                                                <div className="p-6 flex-1 flex flex-col justify-between">
                                                    <div>
                                                        <div className="flex items-center gap-4 text-[11px] font-semibold text-slate-555 mb-3">
                                                            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                                                            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                                                        </div>
                                                        <h3 className="font-display font-bold text-[#111111] text-lg leading-snug group-hover:text-primary transition-colors mb-3">
                                                            {post.title}
                                                        </h3>
                                                        <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                                                            {post.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>

                            {pagination && (
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={pagination.total_pages}
                                    onPageChange={(page) => setCurrentPage(page)}
                                />
                            )}
                        </>
                    ) : (
                        <div className="text-center py-24">
                            <h3 className="text-2xl font-display font-bold text-[#111111]">No articles found.</h3>
                            <p className="text-slate-500">Check back soon for new content.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
