"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft, CheckCircle2, ChevronDown, Sparkles,
    Laptop, Smartphone, Bot, Database, Cloud, Activity,
    Globe, ShieldCheck, Zap, Code2, Layers, Cpu,
    Phone, Mail, ArrowRight, Clock, Users, Target, Award,
    DollarSign, Check, TrendingUp, Shield, Star
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ServiceDetailClientProps {
    service: any;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Selection helper for animations
    const renderAnimation = (slug: string) => {
        switch (slug) {
            case "custom-software-development":
                return <WebAnimation />;
            case "web-mobile-development":
                return <MobileAnimation />;
            case "ai-automation-ml":
                return <AIAnimation />;
            case "crm-erp-systems":
                return <SaaSAnimation />;
            case "cloud-infrastructure":
                return <CloudAnimation />;
            case "digital-transformation":
                return <DesignAnimation />;
            default:
                return <DefaultAnimation />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 pt-22">
            <main className="flex-1 overflow-x-hidden">

                {/* 1. HERO SECTION */}
                <section className="relative min-h-[60vh] flex items-center py-10 overflow-hidden bg-[#111111] text-white">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-[#9ACD32] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#9ACD32] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                    </div>

                    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            {/* Left Content */}
                            <div className="space-y-8">
                                <motion.div initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }}>
                                    <Link href="/services" className="inline-flex items-center gap-2 text-[#9ACD32] hover:text-white text-sm font-semibold uppercase tracking-wider transition-colors group">
                                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                        All Services
                                    </Link>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="space-y-4"
                                >
                                    <div className="inline-block px-4 py-2 rounded-full bg-[#9ACD32]/20 border border-[#9ACD32]/30 text-[#9ACD32] text-xs font-bold uppercase tracking-wider">
                                        Professional Solutions
                                    </div>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                                        {service.title}
                                    </h1>
                                    <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                                        {service.tagline}
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="flex flex-col sm:flex-row gap-4"
                                >
                                    <Button asChild size="lg" className="bg-[#9ACD32] hover:bg-[#9ACD32]/90 text-white font-bold h-12 px-8 rounded-lg">
                                        <Link href="/contact" className="flex items-center gap-2">
                                            Get Quote <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </Button>
                                    <Button asChild size="lg" variant="outline" className="border-2 border-white/20 hover:bg-white/10 text-white font-bold h-12 px-8 rounded-lg">
                                        <Link href="/contact" className="flex items-center gap-2">
                                            <Phone className="w-4 h-4" />
                                            Contact Us
                                        </Link>
                                    </Button>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex items-center gap-6 text-sm text-slate-400"
                                >
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-[#9ACD32]" />
                                        <span>Trusted by 100+ clients</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-[#9ACD32]" />
                                        <span>10+ years experience</span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right - Visual Element */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="hidden lg:block"
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#9ACD32]/20 to-transparent rounded-3xl blur-2xl" />
                                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            {service.benefits.slice(0, 4).map((benefit: string, idx: number) => (
                                                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <div className="w-2 h-2 rounded-full bg-[#9ACD32]" />
                                                        <span className="text-xs font-semibold text-[#9ACD32] uppercase">Benefit {idx + 1}</span>
                                                    </div>
                                                    <p className="text-sm text-slate-300 leading-snug">{benefit}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 2. SIMPLE OVERVIEW */}
                <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#9ACD32]">About This Service</span>
                        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] leading-tight">
                            What This Service Does For Your Business
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                </section>

                {/* 3. WHAT YOU GET */}
                <section className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16 space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#9ACD32]">Deliverables</span>
                            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#111111]">What You'll Get</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                Clear, tangible outcomes that directly benefit your business operations and growth.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {service.whatYouGet?.map((item: any, idx: number) => (
                                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#9ACD32]/50 hover:shadow-lg transition-all group">
                                    <div className="w-12 h-12 rounded-xl bg-[#9ACD32]/10 flex items-center justify-center mb-4 text-[#9ACD32] group-hover:bg-[#9ACD32] group-hover:text-white transition-all">
                                        <Check className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-display font-bold text-lg text-[#111111] mb-2">{item.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. HOW IT WORKS */}
                <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16 space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#9ACD32]">Process</span>
                            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#111111]">How We Work Together</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                A simple, transparent process that keeps you informed every step of the way.
                            </p>
                        </div>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-200" />

                            <div className="space-y-12">
                                {service.process?.map((step: any, idx: number) => (
                                    <div key={idx} className={`relative flex flex-col lg:flex-row items-center gap-8 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                        {/* Step number */}
                                        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#9ACD32] text-white items-center justify-center font-bold text-lg z-10 shadow-lg">
                                            {step.step}
                                        </div>

                                        {/* Content */}
                                        <div className={`flex-1 ${idx % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'}`}>
                                            <div className="lg:hidden flex items-center gap-3 mb-3">
                                                <div className="w-10 h-10 rounded-full bg-[#9ACD32] text-white flex items-center justify-center font-bold">
                                                    {step.step}
                                                </div>
                                                <h3 className="font-display font-bold text-xl text-[#111111]">{step.title}</h3>
                                            </div>
                                            <div className="hidden lg:block">
                                                <h3 className="font-display font-bold text-xl text-[#111111] mb-2">{step.title}</h3>
                                            </div>
                                            <p className="text-slate-600 leading-relaxed">{step.description}</p>
                                        </div>

                                        {/* Empty space for alternating layout */}
                                        <div className="flex-1 hidden lg:block"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. WHO THIS IS FOR */}
                <section className="py-20 bg-gradient-to-br from-[#111111] to-[#12193e] text-white px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16 space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#9ACD32]">Target Audience</span>
                            <h2 className="text-3xl md:text-4xl font-display font-extrabold">Who This Service Is For</h2>
                            <p className="text-slate-300 max-w-2xl mx-auto">
                                This service is ideal for businesses in these situations.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {service.whoItsFor?.map((item: string, idx: number) => (
                                <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                    <div className="w-8 h-8 rounded-full bg-[#9ACD32]/20 flex items-center justify-center shrink-0 text-[#9ACD32]">
                                        <Target className="w-4 h-4" />
                                    </div>
                                    <p className="text-slate-200 leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. WHY CHOOSE US */}
                <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16 space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#9ACD32]">Our Advantages</span>
                            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#111111]">Why Choose Us</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                What sets us apart from other service providers.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {service.whyChooseUs?.map((item: string, idx: number) => (
                                <div key={idx} className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#9ACD32]/50 hover:shadow-lg transition-all group">
                                    <div className="w-14 h-14 rounded-full bg-[#9ACD32]/10 flex items-center justify-center mx-auto mb-4 text-[#9ACD32] group-hover:bg-[#9ACD32] group-hover:text-white transition-all">
                                        <Award className="w-7 h-7" />
                                    </div>
                                    <p className="text-slate-700 font-medium leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 8. BUSINESS BENEFITS */}
                <section className="py-20 bg-slate-900 text-white relative overflow-hidden px-4 sm:px-6 lg:px-8">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,rgba(41,171,226,0.1),transparent_60%)] pointer-events-none" />

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="text-center mb-16 space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#9ACD32]">Results</span>
                            <h2 className="text-3xl md:text-4xl font-display font-extrabold">Business Benefits You'll See</h2>
                            <p className="text-slate-300 max-w-2xl mx-auto">
                                Real, measurable improvements to your business operations.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {service.benefits.map((benefit: string, idx: number) => (
                                <div key={idx} className="text-center group space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#9ACD32] group-hover:border-[#9ACD32] transition-all duration-500">
                                        <TrendingUp className="w-8 h-8 text-[#9ACD32] group-hover:text-white transition-colors" />
                                    </div>
                                    <h4 className="font-bold text-sm text-slate-100 group-hover:text-[#9ACD32] transition-colors">{benefit}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 9. FAQ ACCORDION */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16 space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#9ACD32]">Questions</span>
                            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#111111]">Common Questions</h2>
                            <p className="text-slate-600">
                                Answers to questions clients frequently ask us.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {service.faq.map((item: any, idx: number) => (
                                <div key={idx} className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:border-[#9ACD32]/30 transition-all">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50/50 transition-colors"
                                    >
                                        <span className="font-display font-bold text-base text-[#111111] pr-4">{item.question}</span>
                                        <div className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center shrink-0 transition-all ${openFaq === idx ? "bg-[#9ACD32] border-[#9ACD32] rotate-180" : ""}`}>
                                            <ChevronDown className={`w-4 h-4 ${openFaq === idx ? "text-white" : "text-slate-500"}`} />
                                        </div>
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {openFaq === idx && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4"
                                            >
                                                {item.answer}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 10. CTA SECTION */}
                <section className="py-20 bg-gradient-to-r from-[#111111] to-[#9ACD32] px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white">
                            Ready to Get Started?
                        </h2>
                        <p className="text-lg text-white/90 max-w-2xl mx-auto">
                            Contact us today for a free consultation. We'll discuss your needs and provide a custom proposal.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-white hover:bg-slate-100 text-[#111111] font-bold h-12 px-8 rounded-full">
                                <Link href="/contact" className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    Schedule a Call
                                </Link>
                            </Button>
                            <Button asChild size="lg" className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold h-12 px-8 rounded-full">
                                <Link href="/contact" className="flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    Send Us a Message
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

/* ─── Premium SVG Graphic Animations ────────────────────────────────────── */

function WebAnimation() {
    return (
        <div className="relative w-full aspect-square flex items-center justify-center pointer-events-none">
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full animate-pulse" />
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-64 h-64 border border-[#9ACD32]/20 rounded-full"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute w-48 h-48 border border-[#9ACD32]/10 rounded-full"
            />
            <div className="relative z-10 p-8 rounded-[2rem] bg-slate-900/60 backdrop-blur-md border border-white/10 shadow-2xl">
                <Code2 className="w-16 h-16 text-[#9ACD32]" />
            </div>
            {[Globe, Database, Zap].map((Icon, idx) => (
                <motion.div
                    key={idx}
                    animate={{
                        y: [0, -15, 0],
                        x: [0, idx % 2 === 0 ? 8 : -8, 0]
                    }}
                    transition={{
                        duration: 4 + idx,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.4
                    }}
                    className={`absolute p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl
                        ${idx === 0 ? "top-10 left-10" : idx === 1 ? "bottom-10 right-10" : "top-20 right-20"}`}
                >
                    <Icon className="w-5 h-5 text-[#9ACD32]" />
                </motion.div>
            ))}
        </div>
    );
}

function MobileAnimation() {
    return (
        <div className="relative w-full aspect-square flex items-center justify-center pointer-events-none">
            <div className="absolute inset-0 bg-[#9ACD32]/5 blur-[100px] rounded-full animate-pulse" />
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="relative z-10 w-44 h-72 rounded-[2.5rem] border-4 border-white/20 bg-slate-900/70 p-4 shadow-2xl overflow-hidden"
            >
                <div className="w-16 h-1 bg-white/20 rounded-full mx-auto mb-6" />
                <div className="space-y-4">
                    <div className="h-28 bg-[#9ACD32]/10 rounded-2xl animate-pulse" />
                    <div className="h-3 bg-white/10 rounded-full w-3/4" />
                    <div className="h-3 bg-white/10 rounded-full w-1/2" />
                    <div className="h-8 bg-[#9ACD32]/20 rounded-xl" />
                </div>
            </motion.div>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-60 h-60 border border-dashed border-[#9ACD32]/20 rounded-full"
            />
            <Smartphone className="absolute top-20 right-20 w-10 h-10 text-[#9ACD32] opacity-30" />
        </div>
    );
}

function DesignAnimation() {
    return (
        <div className="relative w-full aspect-square flex items-center justify-center pointer-events-none">
            <motion.div
                animate={{
                    scale: [1, 1.04, 1],
                    rotate: [0, 3, 0]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 p-10 rounded-[3.5rem] bg-gradient-to-br from-[#9ACD32]/15 to-transparent backdrop-blur-md border border-white/10 shadow-2xl"
            >
                <Activity className="w-16 h-16 text-[#9ACD32]" />
            </motion.div>
            <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 400 400">
                <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Infinity }}
                    d="M100,200 Q200,60 300,200 T100,340"
                    stroke="#9ACD32"
                    strokeWidth="2"
                    fill="none"
                />
            </svg>
        </div>
    );
}

function CloudAnimation() {
    return (
        <div className="relative w-full aspect-square flex items-center justify-center pointer-events-none">
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 p-8 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 shadow-2xl"
            >
                <Cloud className="w-16 h-16 text-[#9ACD32]" />
            </motion.div>
            {[1, 2].map((i) => (
                <motion.div
                    key={i}
                    animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 2 }}
                    className="absolute w-28 h-28 border border-[#9ACD32]/20 rounded-full"
                />
            ))}
        </div>
    );
}

function AIAnimation() {
    return (
        <div className="relative w-full aspect-square flex items-center justify-center pointer-events-none">
            <motion.div
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="relative z-10 p-8 rounded-[2.5rem] bg-slate-950/80 border border-[#9ACD32]/30 shadow-[0_0_40px_rgba(41,171,226,0.25)]"
            >
                <Cpu className="w-16 h-16 text-[#9ACD32]" />
            </motion.div>
            <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute w-72 h-72 bg-[#9ACD32] rounded-full blur-[80px]"
            />
        </div>
    );
}

function SaaSAnimation() {
    return (
        <div className="relative w-full aspect-square flex items-center justify-center pointer-events-none">
            <div className="relative">
                {[Layers, ShieldCheck, Zap].map((Icon, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ y: 40 * idx, opacity: 0 }}
                        animate={{
                            y: 32 * idx,
                            opacity: 1,
                            x: idx === 1 ? 15 : 0
                        }}
                        className={`p-5 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/10 shadow-2xl mb-[-32px] relative
                            ${idx === 0 ? "z-30 scale-100" : idx === 1 ? "z-20 scale-95 opacity-80" : "z-10 scale-90 opacity-60"}`}
                    >
                        <Icon className="w-10 h-10 text-[#9ACD32]" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

function DefaultAnimation() {
    return (
        <div className="relative w-full aspect-square flex items-center justify-center pointer-events-none">
            <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="p-10 rounded-full bg-[#9ACD32]/10 backdrop-blur-md"
            >
                <Zap className="w-16 h-16 text-[#9ACD32]" />
            </motion.div>
        </div>
    );
}
