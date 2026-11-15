"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface GuideHeroProps {
    title: string;
    description: string;
    badge?: {
        text: string;
        icon?: React.ReactNode;
    };
    primaryCta?: {
        text: string;
        href: string;
    };
    secondaryCta?: {
        text: string;
        href: string;
    };
    breadcrumbs?: BreadcrumbItem[];
}

export function GuideHero({ title, description, badge, primaryCta, secondaryCta, breadcrumbs }: GuideHeroProps) {
    const defaultBadge = badge || {
        text: "Comprehensive Guide",
        icon: <Sparkles className="w-3.5 h-3.5" />
    }

    const defaultPrimaryCta = primaryCta || {
        text: "Get Free Consultation",
        href: "/contact"
    }

    return (
        <section className="relative py-16 md:py-20 pt-28 sm:pt-36 overflow-hidden bg-gradient-to-b from-[#111111] via-[#1A1A1A] to-[#0a0a0a] text-white">
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
                    {defaultBadge.icon}
                    {defaultBadge.text}
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-6"
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-4xl mx-auto text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed px-4"
                >
                    {description}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
                >
                    <Button size="lg" asChild className="bg-[#9ACD32] hover:bg-[#9ACD32]/90 text-white font-bold h-12 px-8 rounded-xl">
                        <Link href={defaultPrimaryCta.href}>
                            {defaultPrimaryCta.text} <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                    {secondaryCta && (
                        <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10 font-semibold h-12 px-8 rounded-xl">
                            <Link href={secondaryCta.href}>
                                {secondaryCta.text}
                            </Link>
                        </Button>
                    )}
                </motion.div>
            </div>
        </section>
    )
}
