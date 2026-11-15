"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
    Sparkles,
    ArrowRight,
    CheckCircle2,
    Plane,
    Factory,
    Building2,
    Stethoscope,
    GraduationCap,
    ShoppingCart,
    Truck,
    Coins,
    Globe,
    Mail,
    Phone,
    Code2,
    Server,
    Database,
    Cloud,
    TrendingUp,
    Zap,
    Clock,
    Bot,
    BarChart3,
    ShieldCheck,
    Cpu,
    ChevronRight,
    Award,
    Target,
    Smartphone,
    Layers,
    Lock,
    Radio
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio";

const C = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

// Animation Variants
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

// Only display Mobile App Projects
const MOBILE_PROJECTS = PORTFOLIO_PROJECTS.filter(
    (proj) =>
        proj.category.toLowerCase().includes("mobile") ||
        proj.tags.includes("React Native") ||
        proj.tags.includes("iOS") ||
        proj.tags.includes("Android") ||
        proj.tags.includes("Flutter") ||
        proj.tags.includes("WebRTC")
);

export function MobileApplicationPortfolioClient() {
    const industrySolutions = [
        {
            title: "Travel & Booking",
            icon: Plane,
            desc: "Native booking apps, mobile itinerary planners, offline maps, and push notifications.",
            color: "bg-blue-50 text-blue-600 border-blue-100"
        },
        {
            title: "Manufacturing IoT",
            icon: Factory,
            desc: "Mobile device telemetry dashboards, Bluetooth sensor diagnostics, and alert monitoring.",
            color: "bg-amber-50 text-amber-600 border-amber-100"
        },
        {
            title: "Real Estate",
            icon: Building2,
            desc: "AR property tour apps, instant agent chats, interactive mortgage tools, and geo-location.",
            color: "bg-emerald-50 text-emerald-600 border-emerald-100"
        },
        {
            title: "Healthcare",
            icon: Stethoscope,
            desc: "HIPAA-compliant telemedicine video consultation apps, e-prescriptions & patient tracking.",
            color: "bg-rose-50 text-rose-600 border-rose-100"
        },
        {
            title: "Education & EdTech",
            icon: GraduationCap,
            desc: "Gamified learning apps, interactive video streaming, mobile quizzes, and offline sync.",
            color: "bg-purple-50 text-purple-600 border-purple-100"
        },
        {
            title: "Retail & E-commerce",
            icon: ShoppingCart,
            desc: "Ultra-fast mobile storefronts, biometric checkout, loyalty rewards & real-time tracking.",
            color: "bg-orange-50 text-[#9ACD32] border-orange-100"
        },
        {
            title: "Logistics & Delivery",
            icon: Truck,
            desc: "Driver dispatch mobile clients, real-time GPS tracking, electronic proof-of-delivery.",
            color: "bg-sky-50 text-sky-600 border-sky-100"
        },
        {
            title: "Fintech & Banking",
            icon: Coins,
            desc: "Secure mobile wallet apps, biometric authorization, micro-investing & instant UPI pay.",
            color: "bg-teal-50 text-teal-600 border-teal-100"
        },
    ];

    const techStack = {
        "Mobile Frontend": ["React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)"],
        Backend: ["Node.js", "Laravel", "Python", "Go"],
        Database: ["PostgreSQL", "MongoDB", "SQLite", "Realm DB"],
        "Cloud & Native": ["AWS Amplify", "Firebase", "Docker", "App Store Connect", "Google Play"]
    };

    const processSteps = [
        { name: "Discovery", desc: "Understanding app requirements, user journeys & target devices." },
        { name: "Requirement Analysis", desc: "App architecture, native SDK planning & UI wireframing." },
        { name: "UI/UX Design", desc: "Designing intuitive, human-centered mobile interface screens." },
        { name: "Development", desc: "Native & cross-platform mobile coding with offline sync." },
        { name: "Testing", desc: "Rigorous device testing, performance profiling & security QA." },
        { name: "Deployment", desc: "App Store & Google Play Store submission with CI/CD." },
        { name: "Support", desc: "Continuous OS compatibility updates & feature enhancements." }
    ];

    const businessImpacts = [
        { icon: Smartphone, metric: "85% Higher Engagement", desc: "Native performance and push notification user retention." },
        { icon: TrendingUp, metric: "Increased Mobile Revenue", desc: "Seamless 1-tap checkout and frictionless mobile onboarding." },
        { icon: Bot, metric: "Offline Productivity", desc: "Uninterrupted mobile operation even in low connectivity zones." },
        { icon: Zap, metric: "Real-time AI Features", desc: "On-device ML models, voice assistants, and camera scanners." },
        { icon: BarChart3, metric: "Detailed App Analytics", desc: "Real-time crash reporting, user behavior telemetry & heatmaps." },
        { icon: ShieldCheck, metric: "Enterprise Security", desc: "Biometric auth, tokenized data storage & encrypted APIs." }
    ];

    const statistics = [
        "8+ Years Mobile Expertise",
        "80+ Apps Launched",
        "iOS & Android Specialists",
        "Offline-First Architecture",
        "Global App Store Deployments"
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 pt-20 md:pt-22">

            {/* Standard Service Header matching full website design system */}
            <ServiceHeader
                title={<>Mobile Application <span className="text-[#9ACD32]">Development</span><br />& Native Engineering</>}
                subtitle="Build Smarter. Automate Faster. Grow Better."
                badge="Official Portfolio • Mobile Application"
                icon={<Sparkles className="w-3.5 h-3.5" />}
            />

            {/* ════════════════════════════════════════════════════════════
                PAGE 2 – ABOUT SANDBOX TECHNOLOGY
               ════════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-24 bg-white text-slate-800">
                <div className={C}>
                    <InView>
                        <div className="grid lg:grid-cols-12 gap-12 items-center">

                            {/* Left Narrative */}
                            <motion.div variants={fadeUp} className="lg:col-span-7 space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9ACD32]/10 border border-[#9ACD32]/20 text-[#9ACD32] text-xs font-bold uppercase tracking-wider">
                                    <Sparkles className="w-4 h-4" /> About Phoenix Creative Hub UK
                                </div>

                                <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#111111] leading-tight">
                                    Engineering High-Performance <span className="text-[#9ACD32]">iOS & Android Applications</span>
                                </h2>

                                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                                    Phoenix Creative Hub UK is a technology-driven software company specializing in Custom Mobile App Development, AI Automation, CRM, ERP, and Cloud Solutions. We help businesses engineer native and cross-platform mobile apps that drive engagement and business growth.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6 pt-4">
                                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Target className="w-5 h-5 text-[#9ACD32]" />
                                            <h3 className="text-lg font-bold text-[#111111]">Our Vision</h3>
                                        </div>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            To empower global enterprises with seamless, high-speed mobile applications that deliver exceptional user experiences.
                                        </p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Award className="w-5 h-5 text-[#9ACD32]" />
                                            <h3 className="text-lg font-bold text-[#111111]">Our Mission</h3>
                                        </div>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            Deliver end-to-end, resilient, and secure mobile solutions with zero-outsourcing engineering excellence.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Highlights & Statistics */}
                            <motion.div variants={fadeUp} className="lg:col-span-5">
                                <div className="p-8 rounded-3xl bg-[#111111] text-white shadow-xl relative overflow-hidden border border-slate-800">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#9ACD32]/10 rounded-full blur-2xl" />

                                    <h3 className="text-xl font-display font-bold text-white mb-6 pb-4 border-b border-slate-800 flex items-center gap-2.5">
                                        <Cpu className="w-5 h-5 text-[#9ACD32]" /> Company Highlights
                                    </h3>

                                    <div className="space-y-4">
                                        {statistics.map((stat, idx) => (
                                            <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                                                <div className="w-7 h-7 rounded-full bg-[#9ACD32]/20 flex items-center justify-center shrink-0">
                                                    <CheckCircle2 className="w-4 h-4 text-[#9ACD32]" />
                                                </div>
                                                <span className="text-slate-100 font-semibold text-base">{stat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </InView>
                </div>
            </section>


            {/* ════════════════════════════════════════════════════════════
                PAGE 6 – INDUSTRY SOLUTIONS
               ════════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/60">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="text-center max-w-3xl mx-auto mb-16">
                            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9ACD32]/10 border border-[#9ACD32]/20 text-[#9ACD32] text-xs font-bold uppercase tracking-wider mb-4">
                                Mobile Industry Expertise
                            </motion.div>
                            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-display font-extrabold text-[#111111] mb-4">
                                Industry <span className="text-[#9ACD32]">Solutions</span>
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base sm:text-lg leading-relaxed">
                                Every business has unique mobile challenges. We deliver industry-specific mobile app solutions designed to improve productivity and engagement.
                            </motion.p>
                        </motion.div>

                        <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industrySolutions.map((ind, idx) => {
                                const IconComponent = ind.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        variants={fadeUp}
                                        className="group p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#9ACD32]/50 transition-all duration-300 flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${ind.color} group-hover:scale-110 transition-transform duration-300`}>
                                                <IconComponent className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-display font-bold text-[#111111] mb-2 group-hover:text-[#9ACD32] transition-colors">
                                                {ind.title}
                                            </h3>
                                            <p className="text-slate-600 text-xs leading-relaxed">
                                                {ind.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </InView>
                </div>
            </section>


            {/* ════════════════════════════════════════════════════════════
                PAGE 7 – TECHNOLOGY STACK (Four-Column Layout)
               ════════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-24 bg-white border-t border-slate-200/60">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="text-center max-w-3xl mx-auto mb-16">
                            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9ACD32]/10 border border-[#9ACD32]/20 text-[#9ACD32] text-xs font-bold uppercase tracking-wider mb-4">
                                Mobile Frameworks & SDKs
                            </motion.div>
                            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-display font-extrabold text-[#111111] mb-4">
                                Technology <span className="text-[#9ACD32]">Stack</span>
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base">
                                Four robust technology layers powering secure, responsive mobile applications.
                            </motion.p>
                        </motion.div>

                        <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Column 1: Mobile Frontend */}
                            <motion.div variants={fadeUp} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#9ACD32]/40 hover:bg-white hover:shadow-lg transition-all">
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                                    <div className="p-2 rounded-lg bg-[#9ACD32]/10 text-[#9ACD32]">
                                        <Smartphone className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-display font-bold text-[#111111]">Mobile Frontend</h3>
                                </div>
                                <ul className="space-y-3">
                                    {techStack["Mobile Frontend"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                                            <ChevronRight className="w-4 h-4 text-[#9ACD32]" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Column 2: Backend */}
                            <motion.div variants={fadeUp} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#9ACD32]/40 hover:bg-white hover:shadow-lg transition-all">
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600">
                                        <Server className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-display font-bold text-[#111111]">Backend</h3>
                                </div>
                                <ul className="space-y-3">
                                    {techStack.Backend.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                                            <ChevronRight className="w-4 h-4 text-blue-600" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Column 3: Database */}
                            <motion.div variants={fadeUp} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#9ACD32]/40 hover:bg-white hover:shadow-lg transition-all">
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600">
                                        <Database className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-display font-bold text-[#111111]">Database</h3>
                                </div>
                                <ul className="space-y-3">
                                    {techStack.Database.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                                            <ChevronRight className="w-4 h-4 text-emerald-600" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Column 4: Cloud & Native */}
                            <motion.div variants={fadeUp} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#9ACD32]/40 hover:bg-white hover:shadow-lg transition-all">
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600">
                                        <Cloud className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-display font-bold text-[#111111]">Cloud & Native</h3>
                                </div>
                                <ul className="space-y-3">
                                    {techStack["Cloud & Native"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                                            <ChevronRight className="w-4 h-4 text-purple-600" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    </InView>
                </div>
            </section>


            {/* ════════════════════════════════════════════════════════════
                PAGE 8 – DEVELOPMENT PROCESS (Redesigned Interactive Timeline)
               ════════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/60 relative overflow-hidden">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="text-center max-w-3xl mx-auto mb-16">
                            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9ACD32]/10 border border-[#9ACD32]/20 text-[#9ACD32] text-xs font-bold uppercase tracking-wider mb-4">
                                Transparent Agile Execution
                            </motion.div>
                            <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl font-display font-extrabold text-[#111111] mb-6">
                                Development <span className="text-[#9ACD32]">Process</span>
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base sm:text-lg leading-relaxed">
                                We follow Agile methodology and transparent communication throughout every step of our mobile app engineering cycle.
                            </motion.p>
                        </motion.div>

                        {/* Interactive Step Cards Flow */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 mb-16">
                            {processSteps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeUp}
                                    className="group relative p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#9ACD32]/50 transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="w-10 h-10 rounded-2xl bg-[#9ACD32]/10 text-[#9ACD32] font-extrabold text-sm flex items-center justify-center border border-[#9ACD32]/20 group-hover:bg-[#9ACD32] group-hover:text-white transition-colors duration-300">
                                                0{idx + 1}
                                            </span>
                                            {idx < processSteps.length - 1 && (
                                                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-[#9ACD32] group-hover:translate-x-1 transition-all" />
                                            )}
                                        </div>
                                        <h3 className="text-lg font-display font-bold text-[#111111] mb-2 group-hover:text-[#9ACD32] transition-colors">
                                            {step.name}
                                        </h3>
                                        <p className="text-slate-600 text-xs leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </InView>
                </div>
            </section>


            {/* ════════════════════════════════════════════════════════════
                PAGE 9 – FEATURED PROJECTS (Mobile Projects Only)
               ════════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-24 bg-white border-t border-slate-200/60">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="text-center max-w-3xl mx-auto mb-16">
                            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9ACD32]/10 border border-[#9ACD32]/20 text-[#9ACD32] text-xs font-bold uppercase tracking-wider mb-4">
                                Mobile Work Showcase
                            </motion.div>
                            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-display font-extrabold text-[#111111] mb-4">
                                Featured Mobile <span className="text-[#9ACD32]">Projects</span>
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base">
                                Explore project cards for high-performance iOS and Android mobile applications.
                            </motion.p>
                        </motion.div>

                        <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {MOBILE_PROJECTS.map((proj, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeUp}
                                    className="group rounded-3xl border border-slate-200/80 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={proj.image}
                                            alt={proj.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="text-[10px] font-bold text-white bg-[#111111]/75 backdrop-blur-sm px-2.5 py-1 rounded-md inline-block tracking-widest">
                                                {proj.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-lg font-display font-bold text-[#111111] mb-2 group-hover:text-[#9ACD32] transition-colors">
                                            {proj.title}
                                        </h3>
                                        <p className="text-slate-600 text-xs leading-relaxed mb-4 flex-grow">
                                            {proj.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 mb-2">
                                            {proj.tags.map((tag, tIdx) => (
                                                <span key={tIdx} className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#9ACD32]">
                                        <span>{proj.stats}</span>
                                        <Link href={`/portfolio/${proj.slug}`} className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                            View Details <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InView>
                </div>
            </section>


            {/* ════════════════════════════════════════════════════════════
                PAGE 10 – BUSINESS IMPACT (Infographic & ROI)
               ════════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-[#111111] to-[#12193e] text-white relative">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="text-center max-w-3xl mx-auto mb-16">
                            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9ACD32]/20 border border-[#9ACD32]/30 text-[#9ACD32] text-xs font-bold uppercase tracking-wider mb-4">
                                Measurable ROI
                            </motion.div>
                            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-4">
                                Business <span className="text-[#9ACD32]">Impact</span>
                            </motion.h2>
                        </motion.div>

                        {/* Large Infographic Grid */}
                        <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {businessImpacts.map((item, idx) => {
                                const IconComponent = item.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        variants={fadeUp}
                                        className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#9ACD32]/40 transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-[#9ACD32]/20 text-[#9ACD32] flex items-center justify-center mb-4">
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-display font-bold text-white mb-2">
                                            {item.metric}
                                        </h3>
                                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </InView>
                </div>
            </section>
        </div>
    );
}
