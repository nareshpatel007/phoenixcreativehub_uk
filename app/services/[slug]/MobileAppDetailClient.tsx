"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft, CheckCircle2, ChevronDown, Smartphone,
    Layers, Cpu, Database, Network, ArrowRight,
    Users, Target, Award, Check, TrendingUp, ShieldCheck,
    Compass, BarChart3, HelpCircle, Phone, Mail, MapPin,
    Share2, Bell, Shield, RefreshCw
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
    service: any;
}

export default function MobileAppDetailClient({ service }: Props) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            q: "How much does mobile app development cost in the UK?",
            a: "The cost depends on the number of platforms, features, design requirements, integrations, backend services, security needs and testing scope. A realistic estimate requires a clear understanding of the proposed app."
        },
        {
            q: "Should I build an iOS app, an Android app or both?",
            a: "The decision depends on your target users, device usage, required features and launch priorities. Audience research and product requirements should guide the platform choice."
        },
        {
            q: "What is cross-platform app development?",
            a: "Cross-platform development uses an approach intended to support more than one mobile operating system from a shared product codebase or framework. Suitability depends on the app's requirements and technical constraints."
        },
        {
            q: "Can a mobile app connect to our CRM or website?",
            a: "It may be possible where the existing platform provides suitable APIs or integration options. Feasibility depends on the systems, data, access permissions and security requirements."
        },
        {
            q: "What should I prepare before requesting an app quote?",
            a: "It helps to outline the app's purpose, target users, essential features, platforms, integrations, expected timescale and any examples of similar experiences. An early idea is also enough to begin a discovery conversation."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 pt-22">
            <main className="flex-1 overflow-x-hidden">

                {/* 1. HERO SECTION */}
                <section className="relative min-h-[65vh] flex items-center py-16 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1A1A1A] text-white">
                    <div className="absolute inset-0 opacity-15 pointer-events-none">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-[#9ACD32] rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#9ACD32] rounded-full blur-[140px] translate-x-1/2 translate-y-1/2" />
                    </div>

                    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            
                            {/* Left Hero Content */}
                            <div className="lg:col-span-7 space-y-6">
                                <motion.div initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }}>
                                    <Link href="/services" className="inline-flex items-center gap-2 text-[#9ACD32] hover:text-white text-xs font-bold uppercase tracking-widest transition-colors group">
                                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                        Back to Services
                                    </Link>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="space-y-4"
                                >
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9ACD32]/15 border border-[#9ACD32]/30 text-[#9ACD32] text-xs font-bold uppercase tracking-widest">
                                        <span className="w-2 h-2 rounded-full bg-[#9ACD32] animate-pulse" />
                                        Mobile App Development UK
                                    </div>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-[1.1] tracking-tight">
                                        Mobile App Development Built Around Your Users and <span className="text-[#9ACD32]">Business</span>
                                    </h1>
                                    <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                                        A mobile app should make a useful task easier, give customers a better way to interact with your business or support a process that matters to your team. Phoenix Creative Hub helps UK organisations turn app ideas and business requirements into a clear development brief, with the platform and functionality guided by the people who will use it.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="flex flex-col sm:flex-row gap-4 pt-2"
                                >
                                    <Button asChild size="lg" className="bg-[#9ACD32] hover:bg-[#9ACD32]/90 text-[#0B2921] font-bold h-13 px-8 text-base rounded-full shadow-[0_0_25px_rgba(154,205,50,0.35)] transition-all">
                                        <Link href="/contact" className="flex items-center gap-2">
                                            Discuss Your App Idea <ArrowRight className="w-5 h-5 ml-1" />
                                        </Link>
                                    </Button>
                                    <Button asChild size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white font-semibold h-13 px-8 text-base rounded-full transition-all backdrop-blur-sm">
                                        <Link href="#platforms" className="flex items-center gap-2">
                                            Platform Options
                                        </Link>
                                    </Button>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-wrap items-center gap-6 text-xs text-slate-400 pt-2"
                                >
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#9ACD32]" />
                                        <span>iOS & Android Native</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#9ACD32]" />
                                        <span>Cross-Platform (React Native)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#9ACD32]" />
                                        <span>Full Backend Integration</span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Interactive App Mockup */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="lg:col-span-5 hidden lg:block"
                            >
                                <div className="relative">
                                    <div className="absolute -inset-2 bg-gradient-to-r from-[#9ACD32]/20 to-transparent rounded-3xl blur-2xl pointer-events-none" />
                                    <div className="relative rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl p-8 space-y-6 shadow-2xl">
                                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-[#9ACD32]/20 flex items-center justify-center text-[#9ACD32]">
                                                    <Smartphone className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-white">Mobile Engineering Pod</div>
                                                    <div className="text-[11px] text-slate-400">UK Direct Collaboration</div>
                                                </div>
                                            </div>
                                            <span className="text-[11px] font-mono text-[#9ACD32] bg-[#9ACD32]/10 border border-[#9ACD32]/20 px-2.5 py-1 rounded-full">
                                                iOS & Android
                                            </span>
                                        </div>

                                        <div className="space-y-3">
                                            {[
                                                { label: "Target Platforms", status: "Apple iOS / Google Android" },
                                                { label: "Framework", status: "React Native / Swift / Kotlin" },
                                                { label: "Architecture", status: "Offline-First Sync" },
                                                { label: "App Store Publishing", status: "Apple & Play Store Ready" }
                                            ].map((row, idx) => (
                                                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 text-xs">
                                                    <span className="text-slate-300 font-medium">{row.label}</span>
                                                    <span className="text-[#9ACD32] font-semibold">{row.status}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-2 border-t border-white/10 text-xs text-slate-400 leading-relaxed">
                                            Device capabilities, performance, offline sync, and user journeys shaped to support your commercial goals.
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 2. CHOOSE AN APP APPROACH THAT FITS THE PROJECT */}
                <section id="platforms" className="py-20 bg-white border-b border-slate-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#5a8014] bg-[#9ACD32]/15 border border-[#9ACD32]/30 px-4 py-1.5 rounded-full">
                            Architecture Selection
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#0B2921] leading-tight">
                            Choose an App Approach That Fits the Project
                        </h2>
                        <div className="text-slate-600 text-lg leading-relaxed space-y-4 text-left sm:text-center">
                            <p>
                                The right mobile app development approach depends on your audience, required features, device capabilities, performance expectations, budget and plans for future development. An iOS app, Android app or cross-platform solution may be appropriate in different circumstances. We start by understanding the use case rather than assuming one technology is right for every project.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. PLATFORM BREAKDOWN: IOS/ANDROID VS CROSS-PLATFORM */}
                <section className="py-20 bg-[#fbfdfa] border-b border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center">
                                    <Smartphone className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-[#0B2921]">
                                    iOS and Android app development
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    If your audience primarily uses Apple or Android devices, platform-specific requirements may influence the design, functionality and release plan. We can discuss the intended user experience, device requirements, account management, notifications, data handling and any integrations the app needs.
                                </p>
                            </div>

                            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center">
                                    <Share2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-[#0B2921]">
                                    Cross-platform mobile app development
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    A cross-platform approach may be suitable when you want to support users on more than one mobile operating system while managing a shared product direction. The decision should account for the app&apos;s functionality, performance requirements, device-specific features and long-term maintenance. We can help assess the trade-offs during project planning.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. WHAT CAN A CUSTOM MOBILE APP INCLUDE? */}
                <section className="py-24 bg-white border-b border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#5a8014] bg-[#9ACD32]/15 border border-[#9ACD32]/30 px-4 py-1.5 rounded-full">
                                Capabilities & Features
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-[#0B2921]">
                                What Can a Custom Mobile App Include?
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto text-base">
                                From self-service customer tools to operational field-worker applications, mobile software delivers immediate accessibility.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: Users,
                                    title: "Customer-facing applications",
                                    desc: "Give customers a mobile route to browse information, manage an account, request a service or complete another task relevant to your business. The journey should be simple, secure and designed around genuine customer needs."
                                },
                                {
                                    icon: Layers,
                                    title: "Business and workforce apps",
                                    desc: "Support staff with access to information, task management or operational workflows while away from a desk. Requirements may include different user roles, permissions, data capture and integration with existing systems."
                                },
                                {
                                    icon: Network,
                                    title: "App and system integrations",
                                    desc: "Where appropriate, an app may need to exchange information with a website, CRM, ERP or another business platform. Integration planning should consider available interfaces, data ownership, authentication and error handling."
                                },
                                {
                                    icon: RefreshCw,
                                    title: "Ongoing app improvements",
                                    desc: "User feedback, operating system changes and evolving business requirements can create a need for updates after launch. Maintenance and future development should be considered as part of the product plan."
                                }
                            ].map((card, idx) => (
                                <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-[#9ACD32] hover:shadow-[0_20px_50px_rgba(11,41,33,0.06)] transition-all flex flex-col justify-between">
                                    <div>
                                        <div className="w-12 h-12 rounded-2xl bg-[#0B2921]/5 text-[#0B2921] flex items-center justify-center mb-6">
                                            <card.icon className="w-6 h-6 text-[#5a8014]" />
                                        </div>
                                        <h3 className="font-display font-bold text-lg text-[#0B2921] mb-3 leading-snug">
                                            {card.title}
                                        </h3>
                                        <p className="text-slate-600 text-xs leading-relaxed">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. FROM APP IDEA TO A DEFINED PROJECT (5 STAGES) */}
                <section className="py-24 bg-[#fbfdfa] border-b border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#5a8014] bg-[#9ACD32]/15 border border-[#9ACD32]/30 px-4 py-1.5 rounded-full">
                                Delivery Framework
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-[#0B2921]">
                                From App Idea to a Defined Project
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto text-base">
                                A systematic 5-stage engineering lifecycle from problem definition to post-release refinement.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {[
                                {
                                    step: "01",
                                    title: "Understand the problem",
                                    desc: "We discuss the users, the problem the app should solve and how success might be measured. This helps avoid building features that do not support the main purpose."
                                },
                                {
                                    step: "02",
                                    title: "Define features and priorities",
                                    desc: "Map the key user journeys, required screens, data, integrations and permissions. Prioritise the features needed for a useful first release and identify items that can be considered later."
                                },
                                {
                                    step: "03",
                                    title: "Design and development",
                                    desc: "Shape the experience and build against the agreed requirements. Regular review points help stakeholders understand progress and provide feedback on key decisions."
                                },
                                {
                                    step: "04",
                                    title: "Testing and release planning",
                                    desc: "Review the app on relevant devices and test important journeys, data handling and integrations. App store requirements and release processes should be considered early in the project."
                                },
                                {
                                    step: "05",
                                    title: "Learn and improve",
                                    desc: "After release, usage feedback and changing needs can inform improvements. The appropriate analytics, support and maintenance arrangements should be agreed for the product."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-[#9ACD32] transition-all flex flex-col justify-between">
                                    <div>
                                        <div className="text-2xl font-display font-black text-[#5a8014] mb-3">
                                            {item.step}
                                        </div>
                                        <h3 className="font-display font-bold text-base text-[#0B2921] mb-2 leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 text-xs leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. IS A MOBILE APP THE RIGHT INVESTMENT? */}
                <section className="py-20 bg-white border-b border-slate-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 space-y-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-[#9ACD32]/10 rounded-full blur-3xl pointer-events-none" />
                            <span className="text-xs font-bold uppercase tracking-widest text-[#9ACD32] bg-[#9ACD32]/20 border border-[#9ACD32]/30 px-3.5 py-1.5 rounded-full inline-block">
                                Objective Assessment
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight">
                                Is a Mobile App the Right Investment?
                            </h2>
                            <p className="text-slate-300 leading-relaxed text-base">
                                An app can be valuable when users have a recurring reason to return, need device-specific functionality or benefit from a dedicated mobile experience.
                            </p>
                            <p className="text-slate-300 leading-relaxed text-base">
                                For a one-off task or simple information service, a responsive website may be more practical. We encourage you to compare the options before committing to a build.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 7. MOBILE APP DEVELOPMENT FOR UK ORGANISATIONS */}
                <section className="py-20 bg-[#fbfdfa] border-b border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-8 space-y-4">
                                <span className="inline-flex items-center gap-2 bg-[#9ACD32]/15 border border-[#9ACD32]/30 text-[#5a8014] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                                    UK-Wide Collaboration
                                </span>
                                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#0B2921]">
                                    Mobile App Development for UK Organisations
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
                                    We welcome mobile app enquiries from <span className="text-[#0B2921] font-bold">London</span>, <span className="text-[#0B2921] font-bold">Manchester</span>, <span className="text-[#0B2921] font-bold">Birmingham</span> and across the UK. Whether you are a start-up validating a product, an SME improving a customer service or an established organisation planning an internal app, we can discuss the requirements and project fit.
                                </p>
                            </div>
                            <div className="lg:col-span-4 flex lg:justify-end">
                                <Button asChild size="lg" className="bg-[#0B2921] hover:bg-[#173C30] text-[#9ACD32] font-bold px-8 h-13 rounded-full shadow-lg">
                                    <Link href="/contact" className="flex items-center gap-2">
                                        Discuss Your Location <ArrowRight className="w-5 h-5 ml-1" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. FREQUENTLY ASKED QUESTIONS */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16 space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#5a8014] bg-[#9ACD32]/15 border border-[#9ACD32]/30 px-4 py-1.5 rounded-full">
                                FAQs
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#0B2921]">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-slate-600">
                                Common questions about planning, platform trade-offs, pricing and integrations for UK mobile apps.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((item, idx) => (
                                <div key={idx} className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:border-[#9ACD32]/40 transition-all">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50/50 transition-colors"
                                    >
                                        <span className="font-display font-bold text-base text-[#0B2921] pr-4">{item.q}</span>
                                        <div className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center shrink-0 transition-all ${openFaq === idx ? "bg-[#9ACD32] border-[#9ACD32] rotate-180" : ""}`}>
                                            <ChevronDown className={`w-4 h-4 ${openFaq === idx ? "text-[#0B2921]" : "text-slate-500"}`} />
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
                                                {item.a}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 9. DISCUSS YOUR MOBILE APP IDEA (CTA) */}
                <section className="py-24 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1A1A1A] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(154,205,50,0.15),transparent_70%)] pointer-events-none" />

                    <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
                        <span className="inline-flex items-center gap-2 bg-[#9ACD32]/20 border border-[#9ACD32]/30 text-[#9ACD32] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                            Get Started
                        </span>
                        <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
                            Discuss Your Mobile App Idea
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
                            You do not need a finished specification to start a conversation. Tell us who the app is for, what users should be able to do and whether you have an existing website or system it needs to connect with.
                        </p>
                        <p className="text-slate-400 text-sm max-w-xl mx-auto">
                            Arrange a mobile app consultation with Phoenix Creative Hub. Share your idea and discuss the platform, features and next steps for your project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button asChild size="lg" className="bg-[#9ACD32] hover:bg-[#9ACD32]/90 text-[#0B2921] font-bold h-13 px-8 rounded-full shadow-[0_0_25px_rgba(154,205,50,0.35)]">
                                <Link href="/contact" className="flex items-center gap-2">
                                    Request App Consultation <ArrowRight className="w-5 h-5 ml-1" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white font-semibold h-13 px-8 rounded-full">
                                <Link href="tel:+447833817034" className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" /> +44 7833 817034
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
