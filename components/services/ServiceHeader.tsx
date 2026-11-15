"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ChevronRight } from "lucide-react";
import Link from "next/link";

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface ServiceHeaderProps {
    title: React.ReactNode;
    subtitle?: string;
    badge?: string;
    icon?: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export function ServiceHeader({ title, subtitle, badge = "Our Services", icon, breadcrumbs }: ServiceHeaderProps) {
    return (
        <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-[#111111] via-[#1A1A1A] to-[#0a0a0a] text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(154,205,50,0.15),transparent_75%)] pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">

                {/* Optional Breadcrumbs */}
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <nav className="flex items-center justify-center gap-2 text-xs font-semibold text-white/50 mb-6 uppercase tracking-wider">
                        {breadcrumbs.map((crumb, idx) => {
                            const isLast = idx === breadcrumbs.length - 1;
                            return (
                                <React.Fragment key={idx}>
                                    {crumb.href && !isLast ? (
                                        <Link href={crumb.href} className="hover:text-primary transition-colors">
                                            {crumb.label}
                                        </Link>
                                    ) : (
                                        <span className={isLast ? "text-primary font-bold" : "text-white/30"}>
                                            {crumb.label}
                                        </span>
                                    )}
                                    {!isLast && <ChevronRight className="w-3.5 h-3.5" />}
                                </React.Fragment>
                            );
                        })}
                    </nav>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9ACD32]/15 border border-[#9ACD32]/25 text-[#9ACD32] text-xs font-bold uppercase tracking-widest mb-8"
                >
                    {icon ? icon : <Sparkles className="w-3.5 h-3.5" />}
                    {badge}
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-6"
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-4xl mx-auto text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed px-4"
                        dangerouslySetInnerHTML={{ __html: subtitle }}
                    />
                )}
            </div>
        </section>
    );
}
