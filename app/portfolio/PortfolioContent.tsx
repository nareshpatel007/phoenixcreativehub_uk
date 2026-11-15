"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { PORTFOLIO_PROJECTS, TESTIMONIALS } from "@/lib/portfolio";

const C = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function InView({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
            {children}
        </motion.div>
    );
}

export function PortfolioContent() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 pt-20 md:pt-22">

            <ServiceHeader
                title={<>Our Engineering & <span className="text-[#9ACD32]">Creative Portfolio</span></>}
                subtitle="Discover how Phoenix Creative Hub UK partners with ambitious enterprises and startups across London and worldwide to build resilient web systems, mobile applications, CRM platforms, and intelligent AI tools."
                badge="Featured Works"
                icon={<Sparkles className="w-3.5 h-3.5" />}
            />

            {/* ── Projects list ──────────────────────────────────────── */}
            <section className="py-16 md:py-24 bg-white">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {PORTFOLIO_PROJECTS.map((proj, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeUp}
                                    className="group rounded-3xl border border-slate-100 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={proj.image}
                                            alt={proj.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="text-[10px] font-bold text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md inline-block tracking-widest">
                                                {proj.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-xl font-display font-bold text-[#111111] mb-3 group-hover:text-primary transition-colors">
                                            {proj.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                                            {proj.desc}
                                        </p>
                                    </div>
                                    <div className="px-8 pb-8 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-slate-500">
                                        <span>{proj.stats}</span>
                                        <Link href={`/portfolio/${proj.slug}`} className="text-primary group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                            View Project <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── Client Testimonials ──────────────────────────────────────── */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-[#0B2921] to-[#173C30] text-white">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="text-center mb-16">
                            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9ACD32]/20 border border-[#9ACD32]/30 text-[#9ACD32] text-xs font-bold uppercase tracking-wider mb-6">
                                <Sparkles className="w-4 h-4" />
                                Client Reviews
                            </motion.div>
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold mb-4">
                                What Our Clients Say
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-300 max-w-2xl mx-auto">
                                Hear from international and UK founders, engineering leads, and business operators who rely on Phoenix Creative Hub UK.
                            </motion.p>
                        </motion.div>

                        <motion.div variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {TESTIMONIALS.map((testimonial, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeUp}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="relative shrink-0">
                                            <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-br from-[#9ACD32] to-[#111111] overflow-hidden">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    width={56}
                                                    height={56}
                                                    className="w-full h-full rounded-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-white mb-1">{testimonial.name}</h4>
                                            <p className="text-sm text-slate-300">{testimonial.role}</p>
                                            <p className="text-xs text-[#9ACD32] font-semibold uppercase tracking-wider">{testimonial.company}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-slate-200 text-sm leading-relaxed line-clamp-4 mb-4">
                                        "{testimonial.content}"
                                    </p>
                                    <div className="pt-4 border-t border-white/10">
                                        <Link
                                            href={`/portfolio/${testimonial.projectSlug}`}
                                            className="text-xs text-[#9ACD32] hover:text-white transition-colors flex items-center gap-1 font-semibold"
                                        >
                                            View Related Project <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InView>
                </div>
            </section>
        </div>
    );
}
