"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
    CheckCircle2, ArrowRight, Smartphone, Globe, Zap, Shield, TrendingUp, BookOpen
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

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is the difference between native and cross-platform app development?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Native app development uses platform-specific languages (Swift for iOS, Kotlin for Android) for optimal performance and access to all device features. Cross-platform development uses frameworks like React Native or Flutter to build apps that run on multiple platforms from a single codebase, reducing development time and cost."
            }
        },
        {
            "@type": "Question",
            "name": "How much does mobile app development cost?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mobile app development costs range from ₹70,000 to ₹5,00,000+. Simple apps start around ₹70,000-₹1,50,000, medium complexity apps cost ₹1,50,000-₹3,00,000, and enterprise-level apps can exceed ₹3,00,000 depending on features, platforms, and complexity."
            }
        },
        {
            "@type": "Question",
            "name": "How long does it take to develop a mobile app?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mobile app development typically takes 3-6 months. Simple apps can be completed in 2-3 months, while complex apps with advanced features may require 4-6 months or longer depending on scope and requirements."
            }
        },
        {
            "@type": "Question",
            "name": "What technologies are used in web and mobile app development?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Common technologies include: Frontend (React, Next.js, Vue.js), Mobile (React Native, Flutter, Swift, Kotlin), Backend (Node.js, Python, Go), Databases (PostgreSQL, MongoDB, Firebase), and Cloud platforms (AWS, Google Cloud, Azure)."
            }
        },
        {
            "@type": "Question",
            "name": "Should I choose native or cross-platform for my app?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Choose native if you need maximum performance, access to all device features, and have a higher budget. Choose cross-platform if you need faster development, lower costs, and your app doesn't require platform-specific features. Cross-platform is ideal for MVPs and most business apps."
            }
        }
    ]
};

export default function WebMobileGuideClient() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 pt-20 md:pt-22">
            {/* Schema Script */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <ServiceHeader
                title={<>Complete Guide to <span className="text-[#9ACD32]">Web & Mobile</span><br />App Development</>}
                subtitle="Everything you need to know about web and mobile app development: native vs cross-platform, development process, costs, technologies, and how to choose the right approach for your business."
                badge="Comprehensive Guide"
                icon={<BookOpen className="w-3.5 h-3.5" />}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Guides", href: "/guides" },
                    { label: "Web & Mobile App Development Guide" }
                ]}
            />

            {/* ── Native vs Cross-Platform ─────────────────────────────── */}
            <section className="py-24 bg-white">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                Native vs Cross-Platform Development
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed">
                                Choosing between native and cross-platform development is a critical decision that impacts cost, time-to-market, and app performance. Here's a detailed comparison:
                            </motion.p>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <motion.div variants={fadeUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <Smartphone className="w-8 h-8 text-[#9ACD32]" />
                                    <h3 className="font-bold text-[#111111] text-xl">Native Development</h3>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        "Optimal performance and speed",
                                        "Full access to device features",
                                        "Better user experience",
                                        "Platform-specific UI/UX",
                                        "Higher development cost",
                                        "Longer development time"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                            <CheckCircle2 className="w-4 h-4 text-[#9ACD32] shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div variants={fadeUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <Globe className="w-8 h-8 text-[#9ACD32]" />
                                    <h3 className="font-bold text-[#111111] text-xl">Cross-Platform</h3>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        "Single codebase for multiple platforms",
                                        "Faster development time",
                                        "Lower development cost",
                                        "Easier maintenance",
                                        "Good performance for most apps",
                                        "Limited access to some features"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                            <CheckCircle2 className="w-4 h-4 text-[#9ACD32] shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── Development Process ─────────────────────────────────── */}
            <section className="py-24 bg-slate-50">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                Web & Mobile App Development Process
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed">
                                Our development process ensures quality, timely delivery, and apps that meet your business objectives:
                            </motion.p>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            {[
                                { step: 1, title: "Discovery & Strategy", desc: "We analyze your requirements, target audience, and business goals to create a comprehensive app strategy." },
                                { step: 2, title: "UI/UX Design", desc: "Our designers create intuitive, engaging interfaces with wireframes, mockups, and interactive prototypes." },
                                { step: 3, title: "Development", desc: "Our developers build your app using agile methodologies with regular sprints and quality checks." },
                                { step: 4, title: "Testing", desc: "Comprehensive testing including functional, performance, and user acceptance testing across devices." },
                                { step: 5, title: "Deployment", desc: "We deploy your app to App Store, Google Play, and web platforms with proper configuration." },
                                { step: 6, title: "Support & Updates", desc: "Ongoing maintenance, bug fixes, feature updates, and performance optimization." }
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#9ACD32] text-white flex items-center justify-center font-bold text-lg shrink-0">
                                        {item.step}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-[#111111] text-lg mb-2">{item.title}</h3>
                                        <p className="text-slate-600">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── Cost Factors ─────────────────────────────────────────── */}
            <section className="py-24 bg-white">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                How Much Does App Development Cost?
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed">
                                App development costs vary based on complexity, features, platforms, and design requirements:
                            </motion.p>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
                            {[
                                { tier: "Simple Apps", price: "₹70,000 - ₹1,50,000", features: ["Basic features", "Single platform", "Standard UI", "Core functionality"] },
                                { tier: "Medium Apps", price: "₹1,50,000 - ₹3,00,000", features: ["Advanced features", "API integrations", "Custom design", "User authentication"] },
                                { tier: "Enterprise Apps", price: "₹3,00,000 - ₹5,00,000+", features: ["Complex features", "Multi-platform", "Advanced security", "Scalable backend"] }
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h3 className="font-bold text-[#111111] mb-2">{item.tier}</h3>
                                    <div className="text-2xl font-display font-extrabold text-[#9ACD32] mb-4">{item.price}</div>
                                    <ul className="space-y-2">
                                        {item.features.map((feature, j) => (
                                            <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                                                <CheckCircle2 className="w-4 h-4 text-[#9ACD32] shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── Essential Features ─────────────────────────────────────── */}
            <section className="py-24 bg-slate-50">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                Essential Features for Modern Apps
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed">
                                Modern web and mobile apps should include these key features for success:
                            </motion.p>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {[
                                { icon: Shield, title: "Secure Authentication", desc: "OAuth, biometric login, and secure user management" },
                                { icon: Zap, title: "Push Notifications", desc: "Engage users with timely updates and alerts" },
                                { icon: Globe, title: "Offline Mode", desc: "Functionality without internet connectivity" },
                                { icon: TrendingUp, title: "Analytics", desc: "Track user behavior and app performance" },
                                { icon: Smartphone, title: "Responsive Design", desc: "Optimized for all screen sizes and devices" },
                                { icon: CheckCircle2, title: "Payment Integration", desc: "Secure payment gateways and in-app purchases" }
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#9ACD32]/10 flex items-center justify-center shrink-0">
                                        <item.icon className="w-6 h-6 text-[#9ACD32]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#111111] mb-1">{item.title}</h3>
                                        <p className="text-slate-600 text-sm">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── Technologies ─────────────────────────────────────────── */}
            <section className="py-24 bg-white">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                Technologies We Use
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed">
                                We use the latest and most reliable technologies for web and mobile app development:
                            </motion.p>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {[
                                { category: "Frontend", tech: ["React", "Next.js", "Vue.js", "TypeScript"] },
                                { category: "Mobile", tech: ["React Native", "Flutter", "Swift", "Kotlin"] },
                                { category: "Backend", tech: ["Node.js", "Python", "Go", "GraphQL"] },
                                { category: "Database", tech: ["PostgreSQL", "MongoDB", "Firebase", "Redis"] }
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h3 className="font-bold text-[#111111] mb-3">{item.category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {item.tech.map((t, j) => (
                                            <span key={j} className="bg-white text-slate-700 px-3 py-1 rounded-full text-sm font-medium border border-slate-200">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── FAQ Section ─────────────────────────────────────────── */}
            <section className="py-24 bg-slate-50">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                Frequently Asked Questions
                            </motion.h2>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-4">
                            {faqSchema.mainEntity.map((item: any, i: number) => (
                                <motion.div key={i} variants={fadeUp} className="bg-white p-6 rounded-2xl border border-slate-100">
                                    <h3 className="font-bold text-[#111111] mb-2">{item.name}</h3>
                                    <p className="text-slate-600">{item.acceptedAnswer.text}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── Call to Action ───────────────────────────────────── */}
            <section className="py-20 bg-[#111111] text-white">
                <div className={C}>
                    <div className="text-center max-w-2xl mx-auto space-y-6">
                        <h2 className="text-3xl font-display font-extrabold">Ready to Build Your App?</h2>
                        <p className="text-slate-300 text-sm">Let's discuss your app requirements and create a solution that drives your business forward.</p>
                        <div className="flex justify-center gap-4">
                            <Button asChild className="bg-[#9ACD32] hover:bg-[#9ACD32]/90 text-white font-bold px-6 rounded-full shadow-lg shadow-[#9ACD32]/20">
                                <Link href="/contact">Get Free Consultation <ArrowRight className="w-4 h-4 ml-2" /></Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Related Content ─────────────────────────────────────── */}
            <section className="py-24 bg-white">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                Related Guides
                            </motion.h2>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {[
                                { title: "Custom Software Development Guide", href: "/guides/custom-software-development-guide" },
                                { title: "AI & Machine Learning Implementation Guide", href: "/guides/ai-ml-implementation-guide" },
                                { title: "How to Choose a Software Development Company", href: "/guides/how-to-choose-software-development-company" },
                                { title: "Custom Software vs Off-the-Shelf Solutions", href: "/guides/custom-software-vs-off-the-shelf" }
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp}>
                                    <Link href={item.href} className="block bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-[#9ACD32]/30 transition-all group">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-bold text-[#111111] group-hover:text-[#9ACD32] transition-colors">{item.title}</h3>
                                            <ArrowRight className="w-5 h-5 text-[#9ACD32]" />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InView>
                </div>
            </section>
        </div>
    );
}
