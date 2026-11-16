"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
    CheckCircle2, Phone, Mail, ArrowRight, DollarSign, Clock, Shield, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceHeader } from "@/components/services/ServiceHeader";

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

export default function PricingClient() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 pt-20 md:pt-22">

            <ServiceHeader
                title={<>Transparent <span className="text-[#9ACD32]">Pricing</span><br />for Custom Software</>}
                subtitle="Our pricing is project-based and depends on complexity, technology stack, timeline, and team requirements. We provide detailed quotes after understanding your specific needs."
                badge="Pricing Information"
                icon={<DollarSign className="w-3.5 h-3.5" />}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Pricing" }
                ]}
            />

            {/* ── Pricing Overview ─────────────────────────────────────── */}
            <section className="py-24 bg-white">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="grid lg:grid-cols-2 gap-16 items-start">
                            <motion.div variants={fadeUp} className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                    Factors Affecting Cost
                                </h2>
                                <p className="text-slate-600 text-base leading-relaxed">
                                    Our pricing model is transparent and tailored to your specific requirements. We consider multiple factors to provide accurate quotes.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        'Project complexity and scope',
                                        'Technology stack requirements',
                                        'Development timeline',
                                        'Team size and expertise level',
                                        'Integration requirements',
                                        'Maintenance and support needs'
                                    ].map((item, i) => (
                                        <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#9ACD32] shrink-0 mt-0.5" />
                                            <span className="text-slate-600">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div variants={fadeUp} className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                    What's Included
                                </h2>
                                <p className="text-slate-600 text-base leading-relaxed">
                                    Every project includes comprehensive development services with our in-house team of experts.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        'Dedicated expert software engineers',
                                        'Zero outsourcing policy',
                                        'Agile development methodology',
                                        'Quality assurance and testing',
                                        'Code documentation',
                                        'Post-launch support'
                                    ].map((item, i) => (
                                        <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#9ACD32] shrink-0 mt-0.5" />
                                            <span className="text-slate-600">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── Note Section ─────────────────────────────────────────── */}
            <section className="py-16 bg-slate-50">
                <div className={C}>
                    <InView>
                        <motion.div variants={fadeUp} className="bg-[#9ACD32]/10 border border-[#9ACD32]/20 rounded-3xl p-8 md:p-12">
                            <p className="text-slate-700 font-medium text-base leading-relaxed">
                                <strong>Note:</strong> We do not provide fixed pricing on our website as each project is unique. Contact us for a detailed, customized quote based on your specific requirements.
                            </p>
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── Call to Action ───────────────────────────────────── */}
            <section className="py-20 bg-[#111111] text-white">
                <div className={C}>
                    <div className="text-center max-w-2xl mx-auto space-y-6">
                        <h2 className="text-3xl font-display font-extrabold">Get Your Free Quote Today</h2>
                        <p className="text-slate-300 text-sm">Share your project details and our team will provide a comprehensive pricing estimate within 24-48 hours.</p>
                        <div className="flex justify-center gap-4">
                            <Button asChild className="bg-[#9ACD32] hover:bg-[#9ACD32]/90 text-white font-bold px-6 rounded-full shadow-lg shadow-[#9ACD32]/20">
                                <Link href="/contact">Request Free Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
                            </Button>
                            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-6 rounded-full">
                                <Link href="tel:+447833817034"><Phone className="w-4 h-4 mr-2" /> Call Us</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Contact Info ─────────────────────────────────────────── */}
            <section className="py-16 bg-white">
                <div className={C}>
                    <div className="text-center max-w-2xl mx-auto space-y-6">
                        <h3 className="text-2xl font-display font-bold text-[#111111]">Have Questions About Pricing?</h3>
                        <p className="text-slate-600 text-sm">Our team is here to help you understand the costs and find the best solution for your budget.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="tel:+447833817034" className="flex items-center gap-2 text-[#9ACD32] font-semibold hover:underline">
                                <Phone className="w-5 h-5" /> +44 7833 817034
                            </a>
                            <a href="mailto:hello@phoenixcreativehub.co.uk" className="flex items-center gap-2 text-[#9ACD32] font-semibold hover:underline">
                                <Mail className="w-5 h-5" /> hello@phoenixcreativehub.co.uk
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
