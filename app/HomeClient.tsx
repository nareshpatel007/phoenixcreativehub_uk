"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Laptop, Smartphone, Bot, Database, Globe, Search,
    Shield, Zap, Users, ArrowRight, CheckCircle2,
    ChevronRight, Award, Send, Phone, Mail, MapPin,
    Check, Sparkles, Layers, Compass, BarChart3, HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio";

/* ─── Form Schema ─────────────────────────────────────────────────── */
const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    company: z.string().optional(),
    serviceType: z.string().min(1, "Please select a service type"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

/* ─── Animation Presets ─────────────────────────────────────────────────── */
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function InViewSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
            {children}
        </motion.div>
    );
}

/* ─── Interactive Hero Background ───────────────────────────────────────── */
function TechHeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(154,205,50,0.06)" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hero-grid)" />

                {[
                    "M 0 150 L 150 150 L 200 200 L 400 200 L 450 150 L 800 150",
                    "M 0 300 L 100 300 L 140 260 L 600 260 L 640 300 L 1000 300",
                    "M 300 0 L 300 120 L 350 170 L 350 450",
                    "M 750 0 L 750 80 L 820 150 L 820 400",
                ].map((d, i) => (
                    <motion.path
                        key={i}
                        d={d}
                        fill="none"
                        stroke="#9ACD32"
                        strokeWidth="1.5"
                        strokeDasharray="6 6"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ duration: 4 + i * 0.8, delay: i * 0.4, ease: "linear", repeat: Infinity, repeatType: "loop" }}
                    />
                ))}
            </svg>

            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[130px] -translate-y-1/3" />
            <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full bg-[#111111]/20 blur-[100px] translate-y-1/3" />
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HOME PAGE - SEO DOCUMENT CONTENT
═══════════════════════════════════════════════════════════════════════════ */
export default function HomeClient() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: { name: "", email: "", phone: "", company: "", serviceType: "", message: "" },
    });

    const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
            if (res.ok) {
                setFormSubmitted(true);
                form.reset();
            }
        } catch (e) {
            console.error("Form submission failed", e);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">

            {/* 1. HERO SECTION */}
            <section className="relative flex items-center pt-28 sm:pt-36 pb-20 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1A1A1A] text-white">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#9ACD32]/20 via-[#9ACD32]/5 to-transparent rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#9ACD32]/10 via-transparent rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(154,205,50,0.03)_0%,transparent_70%)]" />
                </div>
                <TechHeroBackground />

                <div className="section-container max-w-7xl mx-auto w-full relative z-10 px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={stagger}
                            className="lg:col-span-7 text-left space-y-6"
                        >
                            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2.5">
                                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9ACD32]/20 to-[#9ACD32]/10 border border-[#9ACD32]/30 text-[#9ACD32] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full shadow-[0_0_20px_rgba(154,205,50,0.3)]">
                                    <span className="w-2 h-2 rounded-full bg-[#9ACD32] animate-pulse shadow-[0_0_10px_rgba(154,205,50,0.8)]" />
                                    PHOENIX CREATIVE HUB UK LTD 🇬🇧
                                </span>
                                <span className="text-xs text-[#9ACD32] font-mono font-semibold bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                                    Company No. 17524969
                                </span>
                            </motion.div>

                            {/* Main H1 Heading as per SEO Document */}
                            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl xl:text-6xl font-display font-extrabold leading-[1.1] tracking-tight text-white">
                                Software Development and Digital Growth for <span className="text-[#9ACD32]">Ambitious UK Businesses</span>
                            </motion.h1>

                            {/* Introductory Copy as per SEO Document */}
                            <motion.p variants={fadeUp} className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                                Technology should make it easier to run your business, serve customers and achieve your next stage of growth. Phoenix Creative Hub brings software development and digital growth services together, helping businesses turn ideas into useful digital solutions and improve how they reach customers online.
                            </motion.p>

                            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-2">
                                <Button size="lg" asChild className="bg-gradient-to-r from-[#9ACD32] to-[#7da828] hover:from-[#9ACD32]/90 hover:to-[#7da828]/90 text-[#0B2921] font-bold h-13 px-8 text-base shadow-[0_0_30px_rgba(154,205,50,0.4)] hover:shadow-[0_0_40px_rgba(154,205,50,0.6)] rounded-full transition-all border border-[#9ACD32]/20">
                                    <Link href="#quote">Discuss Your Project <ArrowRight className="w-5 h-5 ml-2" /></Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold h-13 px-8 text-base rounded-full backdrop-blur-sm transition-all">
                                    <Link href="#services">Explore Services</Link>
                                </Button>
                            </motion.div>

                            {/* Stats Inline */}
                            <motion.div
                                variants={fadeUp}
                                className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10"
                            >
                                {[
                                    { val: "UK-Focused", label: "Software & SEO" },
                                    { val: "100+", label: "Projects Shipped" },
                                    { val: "London", label: "E17 Headquarters" },
                                    { val: "Zero", label: "Outsourcing Policy" }
                                ].map((stat, i) => (
                                    <div key={i} className="space-y-1 group">
                                        <div className="text-2xl md:text-3xl font-display font-extrabold text-[#9ACD32] group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(154,205,50,0.3)]">{stat.val}</div>
                                        <div className="text-xs text-slate-400 font-medium uppercase tracking-wider group-hover:text-slate-300 transition-colors">{stat.label}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right Creative Showcase */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="lg:col-span-5 hidden lg:block"
                        >
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-[#9ACD32]/25 via-[#9ACD32]/10 to-[#9ACD32]/20 rounded-3xl blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <div className="relative rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
                                    <div className="relative h-[420px] w-full rounded-2xl overflow-hidden flex items-center justify-center">
                                        <Image
                                            src="/images/hero-creative.png"
                                            alt="Phoenix Creative Hub UK Digital Software and SEO Growth Solutions"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2921]/90 via-transparent to-transparent pointer-events-none" />

                                        <div className="absolute bottom-4 left-4 right-4 bg-[#0B2921]/90 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex items-center justify-between text-xs">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#9ACD32] animate-ping" />
                                                <span className="font-bold text-white tracking-wide">SEO &bull; GEO &bull; AEO Ready</span>
                                            </div>
                                            <span className="text-[#9ACD32] font-semibold text-[11px] bg-[#9ACD32]/10 border border-[#9ACD32]/20 px-2.5 py-1 rounded-full">
                                                London, UK 🇬🇧
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. A PRACTICAL PARTNER FOR TECHNOLOGY AND ONLINE GROWTH */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <InViewSection>
                        <div className="max-w-4xl mx-auto text-center space-y-4">
                            <span className="inline-flex items-center gap-2 bg-[#9ACD32]/15 border border-[#9ACD32]/30 text-[#5a8014] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                                Pragmatic Digital Execution
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#0B2921] tracking-tight">
                                A Practical Partner for Technology and Online Growth
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed pt-2">
                                Whether you are planning a new digital product, replacing a manual process, improving an existing platform or looking to attract more customers through search, the first step is understanding what your business needs to achieve. We take time to understand the challenge, the people who will use the solution and the outcome that matters before recommending a way forward.
                            </p>
                        </div>
                    </InViewSection>
                </div>
            </section>

            {/* 3. CORE SERVICES - SOFTWARE DEVELOPMENT BUILT AROUND YOUR BUSINESS */}
            <section id="services" className="py-28 bg-[#fbfdfa] relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#9ACD32]/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0B2921]/5 rounded-full blur-3xl pointer-events-none" />

                <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <InViewSection>
                        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                            <span className="inline-flex items-center gap-2 bg-[#9ACD32]/15 border border-[#9ACD32]/30 text-[#5a8014] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                                Core Capabilities
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-[#0B2921] tracking-tight">
                                Software Development Built Around Your Business
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Off-the-shelf tools can be a good starting point, but they may not always fit the way your organisation works. Our custom software development service is focused on creating digital systems around your processes, users and operational requirements. From an initial concept to an established platform that needs improving, we help shape a practical development approach.
                            </p>
                        </div>
                    </InViewSection>

                    <InViewSection>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
                            {[
                                {
                                    icon: Laptop,
                                    title: "Custom software development",
                                    slug: "custom-software-development",
                                    desc: "Plan and build software around your workflows, business rules and future requirements. Discuss your objectives, essential features, integrations and support needs with our team.",
                                    tag: "Tailored Architecture"
                                },
                                {
                                    icon: Globe,
                                    title: "Web development",
                                    slug: "web-mobile-development",
                                    desc: "Create a business website or web application that gives visitors a clear experience and supports your commercial goals. We consider structure, usability, performance, accessibility and the actions you want users to take.",
                                    tag: "High Performance"
                                },
                                {
                                    icon: Smartphone,
                                    title: "Mobile app development",
                                    slug: "web-mobile-development",
                                    desc: "Develop mobile experiences that help customers, employees or partners complete tasks wherever they are. We can discuss the right approach for iOS, Android or cross-platform requirements based on your audience and product scope.",
                                    tag: "iOS & Android"
                                },
                                {
                                    icon: Bot,
                                    title: "AI development and automation",
                                    slug: "ai-automation-ml",
                                    desc: "Explore where artificial intelligence and workflow automation could reduce repetitive work, support faster decisions or improve customer interactions. We start with a defined business problem rather than adding AI for its own sake.",
                                    tag: "Practical AI"
                                },
                                {
                                    icon: Database,
                                    title: "CRM and ERP development",
                                    slug: "crm-erp-systems",
                                    desc: "Make business information and processes easier to manage with CRM and ERP solutions shaped around the way your teams work. Discuss customer management, operational workflows, reporting and system integration requirements.",
                                    tag: "Operational Platforms"
                                },
                                {
                                    icon: Search,
                                    title: "SEO services",
                                    slug: "custom-software-development",
                                    desc: "Help the right people find your business through search. Our SEO work can include technical improvements, on-page optimisation, keyword and content planning, local search and performance measurement, with priorities based on your website and commercial objectives.",
                                    tag: "Search-Led Growth"
                                },
                            ].map((service, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="group relative bg-white rounded-3xl border border-slate-200/80 p-7 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(11,41,33,0.08)] hover:border-[#9ACD32] overflow-hidden"
                                >
                                    <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-gradient-to-br from-[#9ACD32]/10 to-transparent blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                                    <div>
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-14 h-14 bg-[#0B2921]/5 group-hover:bg-[#0B2921] rounded-2xl flex items-center justify-center border border-[#0B2921]/10 group-hover:border-[#0B2921] group-hover:scale-105 transition-all duration-300 shadow-sm">
                                                <service.icon className="w-7 h-7 text-[#0B2921] group-hover:text-[#9ACD32] transition-colors duration-300" />
                                            </div>
                                            <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 group-hover:bg-[#9ACD32]/15 group-hover:text-[#5a8014] px-3 py-1 rounded-full transition-colors">
                                                {service.tag}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-display font-bold text-[#0B2921] mb-3 group-hover:text-[#173C30] transition-colors duration-200 leading-snug">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                            {service.desc}
                                        </p>
                                    </div>

                                    <Link
                                        href={service.slug ? `/services/${service.slug}` : "/services"}
                                        className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-xs font-bold text-[#0B2921] group-hover:text-[#5a8014] transition-colors"
                                    >
                                        <span>Discuss requirements</span>
                                        <span className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#9ACD32] flex items-center justify-center text-[#0B2921] group-hover:text-[#0B2921] transition-all">
                                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </InViewSection>
                </div>
            </section>

            {/* 4. A CLEAR PROCESS FROM FIRST CONVERSATION TO DELIVERY */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <InViewSection>
                        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                            <span className="inline-flex items-center gap-2 bg-[#9ACD32]/15 border border-[#9ACD32]/30 text-[#5a8014] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                                How We Work
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-[#0B2921] tracking-tight">
                                A Clear Process from First Conversation to Delivery
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Good projects begin with shared expectations. We work through the business challenge, define the scope, agree priorities and identify the decisions needed to move forward. During delivery, communication and review points help keep the work aligned with the agreed objectives. The exact stages depend on the size and nature of your project.
                            </p>
                        </div>
                    </InViewSection>

                    <InViewSection>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    step: "1",
                                    title: "1. Understand the brief",
                                    desc: "Tell us what you want to improve, build or achieve. We will discuss your users, current systems, constraints, timings and measures of success.",
                                    icon: Compass,
                                },
                                {
                                    step: "2",
                                    title: "2. Define a suitable approach",
                                    desc: "We help clarify the requirements, identify priorities and outline a practical route forward. Where appropriate, this may include phased delivery so that the most important needs are addressed first.",
                                    icon: Layers,
                                },
                                {
                                    step: "3",
                                    title: "3. Build, review and improve",
                                    desc: "Work progresses against the agreed scope, with opportunities to review key decisions and provide feedback. We aim to make the process understandable, collaborative and focused on the intended outcome.",
                                    icon: BarChart3,
                                },
                            ].map((process, i) => (
                                <div key={i} className="relative bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:border-[#9ACD32]/40 transition-all duration-300 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="w-12 h-12 rounded-2xl bg-[#0B2921] text-[#9ACD32] font-display font-black text-xl flex items-center justify-center shadow-md">
                                                {process.step}
                                            </span>
                                            <process.icon className="w-6 h-6 text-[#5a8014]" />
                                        </div>
                                        <h3 className="text-xl font-display font-bold text-[#0B2921] mb-3">
                                            {process.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {process.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </InViewSection>
                </div>
            </section>

            {/* 5. WORKING WITH BUSINESSES ACROSS THE UK */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(154,205,50,0.15),transparent_60%)] pointer-events-none" />
                <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <InViewSection>
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-8 space-y-4">
                                <span className="inline-flex items-center gap-2 bg-[#9ACD32]/20 border border-[#9ACD32]/30 text-[#9ACD32] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                                    UK-Wide Coverage
                                </span>
                                <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight">
                                    Working with Businesses Across the UK
                                </h2>
                                <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
                                    Phoenix Creative Hub is focused on supporting UK businesses, including organisations in <span className="text-[#9ACD32] font-semibold">London</span>, <span className="text-[#9ACD32] font-semibold">Manchester</span> and <span className="text-[#9ACD32] font-semibold">Birmingham</span>. If your team is based elsewhere in the UK, you can still get in touch to discuss your requirements. We will confirm the most suitable way to work together during the initial conversation.
                                </p>
                            </div>
                            <div className="lg:col-span-4 flex lg:justify-end">
                                <Button asChild size="lg" className="bg-[#9ACD32] hover:bg-[#9ACD32]/90 text-[#0B2921] font-bold px-8 h-13 rounded-full shadow-[0_0_25px_rgba(154,205,50,0.4)]">
                                    <Link href="/contact">Contact Our UK Team <ArrowRight className="w-5 h-5 ml-2" /></Link>
                                </Button>
                            </div>
                        </div>
                    </InViewSection>
                </div>
            </section>

            {/* 6. CASE STUDIES / IMPACT */}
            <section className="py-24 bg-white border-b border-slate-100">
                <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <InViewSection>
                        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                            <span className="inline-flex items-center gap-2 bg-[#9ACD32]/10 border border-[#9ACD32]/20 text-[#5a8014] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                                Proven Results
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#0B2921] tracking-tight">
                                Built for Real-World Impact
                            </h2>
                            <p className="text-slate-600 text-base">
                                Explore how our technical implementations helped teams solve scaling hurdles, improve online performance, and automate operations.
                            </p>
                        </div>
                    </InViewSection>

                    <InViewSection>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {PORTFOLIO_PROJECTS.slice(0, 3).map((project, i) => (
                                <div key={i} className="group rounded-3xl border border-slate-100 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            draggable={false}
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="text-[10px] font-bold text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md inline-block tracking-widest">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-xl font-display font-bold text-[#111111] mb-3 group-hover:text-[#5a8014] transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                                            {project.desc}
                                        </p>
                                    </div>
                                    <div className="px-8 pb-8 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-slate-500">
                                        <span>{project.stats}</span>
                                        <Link href={`/portfolio/${project.slug}`} className="text-[#5a8014] font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                            View Project <ChevronRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </InViewSection>
                </div>
            </section>

            {/* 7. FREQUENTLY ASKED QUESTIONS (Direct from SEO Document) */}
            <section className="py-24 bg-[#fbfdfa] border-b border-slate-100">
                <div className="section-container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <InViewSection>
                        <div className="text-center mb-16 space-y-4">
                            <span className="inline-flex items-center gap-2 bg-[#9ACD32]/15 border border-[#9ACD32]/30 text-[#5a8014] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                                Clear Answers
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#0B2921] tracking-tight">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-slate-600 text-base">
                                Common questions about working with Phoenix Creative Hub on software, digital products and search visibility.
                            </p>
                        </div>
                    </InViewSection>

                    <InViewSection>
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {[
                                {
                                    q: "What services does Phoenix Creative Hub provide?",
                                    a: "We provide custom software development, web development, mobile app development, AI development and automation, CRM and ERP development, and SEO services. The right combination depends on your business objectives and project requirements."
                                },
                                {
                                    q: "Do you work with start-ups and established businesses?",
                                    a: "We welcome enquiries from businesses at different stages, from start-ups planning a first product to established organisations looking to improve systems, applications or online visibility. Project suitability depends on the requirements and scope."
                                },
                                {
                                    q: "Can I enquire about more than one service?",
                                    a: "Yes. Some projects involve connected requirements, such as a web application with CRM integration or a new website supported by SEO. Tell us about the wider goal so we can understand how the services may fit together."
                                },
                                {
                                    q: "Do you work with businesses outside London?",
                                    a: "Our target market includes businesses in London, Manchester, Birmingham and across the UK. Contact us to discuss your location and preferred working arrangements."
                                },
                                {
                                    q: "How do I get started?",
                                    a: "Use the contact form to outline your project, current challenge, timescale and any relevant requirements. We can then arrange an initial discussion to understand the opportunity."
                                }
                            ].map((faq, idx) => (
                                <AccordionItem
                                    key={idx}
                                    value={`faq-${idx}`}
                                    className="bg-white rounded-2xl border border-slate-200/80 px-6 py-2 shadow-sm data-[state=open]:border-[#9ACD32]"
                                >
                                    <AccordionTrigger className="text-left font-display font-bold text-[#0B2921] text-base hover:no-underline hover:text-[#5a8014]">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 text-sm leading-relaxed pt-2 pb-4">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </InViewSection>
                </div>
            </section>

            {/* 8. ENQUIRY / LET'S DISCUSS WHAT YOUR BUSINESS NEEDS NEXT */}
            <section id="quote" className="py-28 bg-[#111111] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(154,205,50,0.15),transparent_70%)] pointer-events-none" />

                <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        {/* Info Left */}
                        <div className="lg:col-span-5 space-y-8">
                            <InViewSection>
                                <div className="space-y-4">
                                    <span className="inline-flex items-center gap-2 bg-[#9ACD32]/20 border border-[#9ACD32]/30 text-[#9ACD32] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                                        Start a Conversation
                                    </span>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
                                        Let's Discuss What Your Business Needs Next
                                    </h2>
                                    <p className="text-slate-300 text-base leading-relaxed">
                                        You may have a detailed specification, an early-stage idea or a website that is not delivering the results you expect. Share the challenge with us and we can discuss the next sensible step. There is no need to have every technical detail worked out before making an enquiry.
                                    </p>
                                    <p className="text-slate-400 text-sm leading-relaxed pt-2">
                                        Discuss your project with Phoenix Creative Hub. Request a consultation or send us an outline of what you want to achieve, and we can arrange a conversation about your requirements.
                                    </p>
                                </div>
                            </InViewSection>

                            <InViewSection>
                                <div className="space-y-6">
                                    {[
                                        { icon: Phone, label: "Phone", value: "+44 7833 817034", href: "tel:+447833817034" },
                                        { icon: Mail, label: "Email", value: "hello@phoenixcreativehub.co.uk", href: "mailto:hello@phoenixcreativehub.co.uk" },
                                        { icon: Globe, label: "Registered Office", value: "Suite RA01, 195–197 Wood Street, London, E17 3NU, UK", href: "/contact" }
                                    ].map((contact, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-[#9ACD32]/20 rounded-xl flex items-center justify-center text-[#9ACD32] shrink-0">
                                                <contact.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{contact.label}</div>
                                                <a href={contact.href} className="text-base font-semibold hover:text-[#9ACD32] transition-colors">
                                                    {contact.value}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </InViewSection>
                        </div>

                        {/* Contact Form Right */}
                        <div className="lg:col-span-7">
                            <InViewSection>
                                <div className="bg-white rounded-3xl p-8 shadow-2xl">
                                    {formSubmitted ? (
                                        <div className="text-center py-12">
                                            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5 border border-green-100">
                                                <CheckCircle2 className="w-8 h-8 text-green-500" />
                                            </div>
                                            <h3 className="font-display font-bold text-[#111111] text-2xl mb-3">Enquiry Received!</h3>
                                            <p className="text-sm text-slate-500 mb-6 max-w-md mx-auto leading-relaxed">
                                                Thank you for reaching out. We will review your outline and arrange an initial conversation to discuss your requirements.
                                            </p>
                                            <Button onClick={() => setFormSubmitted(false)} className="bg-primary text-white hover:bg-primary/95 rounded-full px-6 h-10">
                                                Send Another Message
                                            </Button>
                                        </div>
                                    ) : (
                                        <Form {...form}>
                                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                                <div className="grid sm:grid-cols-2 gap-5">
                                                    <FormField control={form.control} name="name" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-xs font-semibold text-[#111111]/70 uppercase tracking-wide">Full Name *</FormLabel>
                                                            <FormControl><Input placeholder="Enter your full name" className="h-10 bg-slate-50/50 border-slate-100 rounded-xl" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={form.control} name="email" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-xs font-semibold text-[#111111]/70 uppercase tracking-wide">Email Address *</FormLabel>
                                                            <FormControl><Input type="email" placeholder="name@company.co.uk" className="h-10 bg-slate-50/50 border-slate-100 rounded-xl" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </div>

                                                <div className="grid sm:grid-cols-2 gap-5">
                                                    <FormField control={form.control} name="phone" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-xs font-semibold text-[#111111]/70 uppercase tracking-wide">Phone Number</FormLabel>
                                                            <FormControl><Input placeholder="e.g. +44 7833 817034" className="h-10 bg-slate-50/50 border-slate-100 rounded-xl" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={form.control} name="company" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-xs font-semibold text-[#111111]/70 uppercase tracking-wide">Company</FormLabel>
                                                            <FormControl><Input placeholder="Your Company Name" className="h-10 bg-slate-50/50 border-slate-100 rounded-xl" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </div>

                                                <FormField control={form.control} name="serviceType" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-xs font-semibold text-[#111111]/70 uppercase tracking-wide">Service Required *</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger className="h-10 bg-slate-50/50 border-slate-100 rounded-xl"><SelectValue placeholder="Select a service" /></SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="custom_software">Custom Software Development</SelectItem>
                                                                <SelectItem value="web_dev">Web Development</SelectItem>
                                                                <SelectItem value="mobile_dev">Mobile App Development</SelectItem>
                                                                <SelectItem value="ai_automation">AI Development & Automation</SelectItem>
                                                                <SelectItem value="crm_erp">CRM & ERP Development</SelectItem>
                                                                <SelectItem value="seo_growth">SEO & Digital Growth</SelectItem>
                                                                <SelectItem value="other">Other Inquiry</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />

                                                <FormField control={form.control} name="message" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-xs font-semibold text-[#111111]/70 uppercase tracking-wide">Project Details *</FormLabel>
                                                        <FormControl>
                                                            <Textarea
                                                                placeholder="Please outline your project, current challenge, timescale and any relevant requirements..."
                                                                className="min-h-[120px] resize-none bg-slate-50/50 border-slate-100 rounded-xl"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />

                                                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-2">
                                                    <p className="text-xs text-muted-foreground">
                                                        We typically reply within 24 business hours.
                                                    </p>
                                                    <Button
                                                        type="submit"
                                                        className="bg-primary hover:bg-primary/95 text-white font-bold shadow-lg shadow-primary/25 min-w-[170px] h-11 rounded-full cursor-pointer transition-all"
                                                    >
                                                        <span className="flex items-center gap-2">
                                                            Send Enquiry <Send className="w-4 h-4" />
                                                        </span>
                                                    </Button>
                                                </div>
                                            </form>
                                        </Form>
                                    )}
                                </div>
                            </InViewSection>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
