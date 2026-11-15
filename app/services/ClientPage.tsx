"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
    Laptop, Smartphone, Bot, Database, Cloud, Activity,
    ArrowRight, Sparkles, CheckCircle2, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceHeader } from "@/components/services/ServiceHeader";

const C = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

function InView({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    return (
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
            {children}
        </motion.div>
    );
}

const SERVICES_DATA = [
    {
        icon: Laptop,
        title: "Custom Software Development",
        desc: "Tailored enterprise solutions built with secure, strictly typed codebases. We design clean architectures designed to handle large-scale database operations and high concurrent traffic.",
        features: ["Microservices API", "Relational Database Design", "Admin Control Panels"]
    },
    {
        icon: Smartphone,
        title: "Web & Mobile Applications",
        desc: "High-performance React Native/Flutter applications and fast, responsive Next.js static and dynamic web sites engineered to load in milliseconds.",
        features: ["Cross-platform Apps", "Dynamic SSR/SSG sites", "Stunning UI Micro-interactions"]
    },
    {
        icon: Bot,
        title: "AI Automation & ML",
        desc: "Automate manual tasks and integrate intelligent solutions. We design custom AI agent systems, vector indexing databases, and LLM integrations that streamline workflows.",
        features: ["Custom ChatGPT integration", "Workflow Automation", "Machine Learning models"]
    },
    {
        icon: Database,
        title: "CRM & ERP Systems",
        desc: "Optimize business operational metrics. We construct tailored CRM dashboards and secure administrative systems to manage inventory, payroll, and tasks.",
        features: ["Real-time Reporting", "Multi-role Access Control", "Automated Pipelines"]
    }
];

export default function ServicesListPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 pt-20 md:pt-22">

            {/* ── Hero ──────────────────────────────────────────────── */}
            <ServiceHeader
                title="Premium IT Engineering Services"
                subtitle="We combine robust technical execution with industry best practices to build digital products that scale."
                badge="Our Capabilities"
            />

            {/* ── Services List ─────────────────────────────────────── */}
            <section id="services" className="relative py-20 bg-slate-50">
                <div className={`${C} relative z-10`}>
                    <InView>
                        <motion.div variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {SERVICES_DATA.map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeUp}
                                    className="group relative bg-white rounded-[1.5rem] p-8 flex flex-col justify-between h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden"
                                >
                                    {/* Premium gradient border effect */}
                                    <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-[#9ACD32]/0 via-transparent to-[#9ACD32]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute inset-0 rounded-[1.5rem] border-2 border-transparent group-hover:border-[#9ACD32]/20 transition-all duration-500" />
                                    
                                    {/* Subtle top accent line */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9ACD32] via-[#9ACD32]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <div className="relative z-10">
                                        <div className="w-14 h-14 bg-gradient-to-br from-[#9ACD32]/10 to-[#9ACD32]/5 rounded-xl flex items-center justify-center mb-6 border border-[#9ACD32]/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm">
                                            <service.icon className="w-6 h-6 text-[#9ACD32]" />
                                        </div>
                                        <h3 className="text-xl font-display font-bold text-[#111111] mb-4 group-hover:text-[#9ACD32] transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                            {service.desc}
                                        </p>
                                        <ul className="space-y-3 mb-8">
                                            {service.features.map((feat, fIdx) => (
                                                <li key={fIdx} className="flex items-center gap-3 text-sm font-medium text-slate-500 group-hover:text-slate-600 transition-colors">
                                                    <div className="w-5 h-5 rounded-full bg-[#9ACD32]/10 flex items-center justify-center group-hover:bg-[#9ACD32]/20 transition-colors">
                                                        <CheckCircle2 className="w-3 h-3 text-[#9ACD32]" />
                                                    </div>
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Button asChild size="sm" className="relative z-10 bg-[#111111] border border-[#111111] text-white hover:bg-[#9ACD32] hover:border-[#9ACD32] rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
                                        <Link href="/contact" className="inline-flex items-center gap-2">
                                            Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── CTA Section ─────────────────────────────────────────── */}
            <section className="relative py-24 overflow-hidden bg-[#111111] text-white">
                
                <div className={`${C} relative z-10 text-center`}>
                    <InView>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl mx-auto"
                        >
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-display font-bold mb-6"
                            >
                                Ready to Transform Your Business?
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto"
                            >
                                Let's discuss how our premium IT solutions can accelerate your growth and drive innovation.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            >
                                <Button asChild size="lg" className="bg-[#9ACD32] hover:bg-[#9ACD32]/90 text-white rounded-full px-10 shadow-lg shadow-[#9ACD32]/20 transition-all duration-300">
                                    <Link href="/contact" className="inline-flex items-center gap-2">
                                        Get Started <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-10 backdrop-blur-sm">
                                    <Link href="/contact" className="inline-flex items-center gap-2">
                                        Schedule a Call
                                    </Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </InView>
                </div>
            </section>
        </div>
    );
}
