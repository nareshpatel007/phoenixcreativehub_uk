"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Laptop, Smartphone, Bot, Database, Cloud, Activity,
    Shield, Zap, Users, ArrowRight, CheckCircle2, Star,
    ChevronRight, Award, HelpCircle, Code2, Globe, Heart,
    Sparkles, Send, MessageSquare, Terminal, Server, Layers,
    Mail, Phone, Search, MapPin, Cpu, TrendingUp, Check, ExternalLink
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
const fadeLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const fadeRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
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
                        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(41,171,226,0.06)" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hero-grid)" />

                {/* Cyber/Tech flow lines */}
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

            {/* Glowing orbs */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[130px] -translate-y-1/3" />
            <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full bg-[#111111]/20 blur-[100px] translate-y-1/3" />
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HOME PAGE
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
                {/* Premium animated background effects */}
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

                            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl xl:text-6xl font-display font-extrabold leading-[1.08] tracking-tight text-white">
                                Phoenix Creative Hub UK
                                <span className="block text-[#9ACD32] mt-2">Custom Software & Mobile App Development Company</span>
                            </motion.h1>

                            <motion.p variants={fadeUp} className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                                PHOENIX CREATIVE HUB UK LTD is a leading software engineering and digital technology company based in London, UK (Suite RA01, 195–197 Wood Street, London, E17 3NU). We empower businesses globally with scalable, secure, and future-ready digital architectures.
                            </motion.p>

                            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-2">
                                <Button size="lg" asChild className="bg-gradient-to-r from-[#9ACD32] to-[#7da828] hover:from-[#9ACD32]/90 hover:to-[#7da828]/90 text-[#0B2921] font-bold h-13 px-8 text-base shadow-[0_0_30px_rgba(154,205,50,0.4)] hover:shadow-[0_0_40px_rgba(154,205,50,0.6)] rounded-full transition-all border border-[#9ACD32]/20">
                                    <Link href="#quote">Get Started <ArrowRight className="w-5 h-5 ml-2" /></Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold h-13 px-8 text-base rounded-full backdrop-blur-sm transition-all">
                                    <Link href="/services">Explore Services</Link>
                                </Button>
                            </motion.div>

                            {/* Stats Inline */}
                            <motion.div
                                variants={fadeUp}
                                className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10"
                            >
                                {[
                                    { val: "100+", label: "Projects Shipped" },
                                    { val: "AI-First", label: "Engineering Team" },
                                    { val: "8+", label: "Years Experience" },
                                    { val: "98%", label: "Client Retainers" }
                                ].map((stat, i) => (
                                    <div key={i} className="space-y-1 group">
                                        <div className="text-2xl md:text-3xl font-display font-extrabold text-[#9ACD32] group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(154,205,50,0.3)]">{stat.val}</div>
                                        <div className="text-xs text-slate-400 font-medium uppercase tracking-wider group-hover:text-slate-300 transition-colors">{stat.label}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right Decorative Terminal Dashboard Mockup */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="lg:col-span-5 hidden lg:block"
                        >
                            <div className="relative rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-6 shadow-[0_0_60px_rgba(154,205,50,0.15)] overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#9ACD32]/15 via-transparent pointer-events-none" />
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#9ACD32]/20 to-[#9ACD32]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                {/* Mac Window Dots */}
                                <div className="flex items-center gap-1.5 mb-6 border-b border-white/5 pb-4">
                                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                                    <span className="text-xs text-slate-400 ml-2 font-mono">phoenix-creative-hub.sh</span>
                                </div>
                                <div className="font-mono text-xs space-y-3 text-slate-300">
                                    <div className="text-[#9ACD32]"># Initializing custom software environment...</div>
                                    <div>$ npm run build:production</div>
                                    <div className="text-emerald-400">✔ Optimized production bundle compiled successfully</div>
                                    <div>$ phoenix-hub deploy --target=cloud-production</div>
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#9ACD32] animate-ping" />
                                        <span>Deploying to UK cluster regions (London E17)...</span>
                                    </div>
                                    <div className="pt-4 border-t border-white/5 mt-4 flex items-center justify-between text-[11px] text-slate-500">
                                        <span>SYSTEM STATS: STABLE</span>
                                        <span>LATENCY: 8ms</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. CORE SERVICES SECTION */}
            <section id="services" className="py-28 bg-white relative">
                <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <InViewSection>
                        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                            <span className="inline-flex items-center gap-2 bg-[#9ACD32]/10 border border-[#9ACD32]/20 text-[#9ACD32] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                                What We Deliver
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-[#111111] tracking-tight">
                                End-to-End IT Engineering Services
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                We combine robust technical execution with industry best practices to build products that scale seamlessly.
                            </p>
                        </div>
                    </InViewSection>

                    <InViewSection>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Laptop,
                                    title: "Custom Software Development",
                                    desc: "Tailored web architectures and robust backend services engineered precisely for your business challenges.",
                                },
                                {
                                    icon: Smartphone,
                                    title: "Web & Mobile Applications",
                                    desc: "Stunning high-performance websites and native iOS & Android applications using Next.js and React Native.",
                                },
                                {
                                    icon: Bot,
                                    title: "AI Automation & ML",
                                    desc: "Intelligent agents, predictive modeling, data scraping, and automation flows integrating the latest LLM models.",
                                },
                                {
                                    icon: Database,
                                    title: "CRM & ERP Systems",
                                    desc: "Streamlined operational workflows, customized administrative panels, and secure corporate management platforms.",
                                },
                            ].map((service, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="group relative bg-white rounded-3xl border border-slate-100 p-8 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(26,36,86,0.06)] hover:border-[#9ACD32]/30 overflow-hidden"
                                >
                                    <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-[#9ACD32]/5 blur-2xl group-hover:bg-[#9ACD32]/10 transition-all duration-300" />
                                    <div>
                                        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:border-[#9ACD32]/20 group-hover:scale-105 transition-all duration-300 text-primary">
                                            <service.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-display font-bold text-[#111111] mb-3 group-hover:text-primary transition-colors duration-200">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                            {service.desc}
                                        </p>
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-[#111111] transition-colors">
                                        Request details <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </InViewSection>
                </div>
            </section>

            {/* 3. TECH STACK SECTION */}
            <section className="py-24 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1A1A1A] text-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#9ACD32]/5 blur-[140px] pointer-events-none" />
                <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <InViewSection>
                        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                            <span className="inline-flex items-center gap-2 bg-[#9ACD32]/10 border border-[#9ACD32]/20 text-[#9ACD32] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                                Built to Last
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-extrabold">
                                Our Modern Technology Stack
                            </h2>
                            <p className="text-slate-300 text-base">
                                We build using state-of-the-art tech platforms to guarantee speed, modularity, and security.
                            </p>
                        </div>
                    </InViewSection>

                    <InViewSection>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                            {[
                                { name: "React / Next.js", icon: Code2, desc: "High Performance Web UI" },
                                { name: "Node.js / Express", icon: Server, desc: "Scalable APIs & Systems" },
                                { name: "TypeScript", icon: Terminal, desc: "Strictly Typed Engineering" },
                                { name: "PostgreSQL", icon: Database, desc: "Robust Relational Storage" },
                                { name: "Docker / K8s", icon: Layers, desc: "Standardized Container Ops" },
                                { name: "Cloud Architectures", icon: Cloud, desc: "AWS / Google Cloud Platforms" }
                            ].map((tech, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="flex flex-col items-center text-center p-6 rounded-2xl border border-slate-800 bg-slate-950/40 hover:border-[#9ACD32]/30 hover:shadow-md transition-all group"
                                    whileHover={{ y: -4 }}
                                >
                                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-4 text-[#9ACD32] border border-slate-800 group-hover:border-[#9ACD32]/20 transition-all">
                                        <tech.icon className="w-6 h-6" />
                                    </div>
                                    <div className="font-display font-bold text-sm text-slate-100">{tech.name}</div>
                                    <div className="text-[10px] text-slate-500 mt-1 uppercase font-semibold tracking-wider">{tech.desc}</div>
                                </motion.div>
                            ))}
                        </div>
                    </InViewSection>
                </div>
            </section>

            {/* 4. WHY CHOOSE US SECTION */}
            <section className="py-28 bg-slate-50 relative overflow-hidden">
                <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <InViewSection>
                            <div className="space-y-6">
                                <span className="inline-flex items-center gap-2 bg-[#9ACD32]/10 border border-[#9ACD32]/20 text-[#9ACD32] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                                    The Phoenix Creative Advantage
                                </span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-[#111111] tracking-tight">
                                    Engineered for Teams That Require Polish & Pace
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    We reject outsourcing and generic templates. Every line of code is produced by our verified, in-house technical team in London, ensuring complete accountability.
                                </p>
                                <div className="space-y-4 pt-4">
                                    {[
                                        { title: "Strict Zero-Outsourcing Policy", desc: "No white-label third parties. You interact directly with the engineers designing your systems." },
                                        { title: "Long-Term Engineering Partnerships", desc: "Over 40% of our enterprise clients sign multi-year retainers to continuously optimize product suites." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-1">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#111111] text-base">{item.title}</h4>
                                                <p className="text-slate-600 text-sm mt-0.5">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </InViewSection>

                        <InViewSection>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { icon: Shield, title: "Enterprise Security", desc: "Compliant and highly protected codebases." },
                                    { icon: Zap, title: "Agile Development", desc: "Iterative builds and rapid prototyping cycles." },
                                    { icon: Users, title: "Dedicated Pods", desc: "Assigned engineers exclusively committed to your stack." },
                                    { icon: Award, title: "Proven Quality", desc: "Strict QA testing flows before deployment." }
                                ].map((feat, i) => (
                                    <div key={i} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:border-[#9ACD32]/30 transition-all duration-300">
                                        <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center mb-4 text-primary">
                                            <feat.icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-display font-bold text-[#111111] text-base mb-1">{feat.title}</h3>
                                        <p className="text-slate-600 text-xs leading-relaxed">{feat.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </InViewSection>
                    </div>
                </div>
            </section>

            {/* 5. SUCCESS STORIES */}
            <section className="py-28 bg-white border-y border-slate-100">
                <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <InViewSection>
                        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                            <span className="inline-flex items-center gap-2 bg-[#9ACD32]/10 border border-[#9ACD32]/20 text-[#9ACD32] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                                Case Studies
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-[#111111] tracking-tight">
                                Built for Real-World Impact
                            </h2>
                            <p className="text-slate-600 text-base">
                                Explore how our technical implementations helped teams solve scaling hurdles and enhance platform security.
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
                                        <h3 className="text-xl font-display font-bold text-[#111111] mb-3 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                                            {project.desc}
                                        </p>
                                    </div>
                                    <div className="px-8 pb-8 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-slate-500">
                                        <span>{project.stats}</span>
                                        <Link href={`/portfolio/${project.slug}`} className="text-primary group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                            View Project <ChevronRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </InViewSection>

                    <InViewSection>
                        <div className="text-center pt-12">
                            <Button size="lg" asChild variant="outline" className="border-[#9ACD32]/30 text-[#9ACD32] hover:bg-[#9ACD32]/10 hover:border-[#9ACD32]/50 font-semibold h-13 px-8 text-base rounded-full transition-all">
                                <Link href="/portfolio">View All Projects <ArrowRight className="w-5 h-5 ml-2" /></Link>
                            </Button>
                        </div>
                    </InViewSection>
                </div>
            </section>

            {/* 7. PREMIUM CONTACT / QUOTE SECTION */}
            <section id="quote" className="py-28 bg-[#111111] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(41,171,226,0.15),transparent_70%)] pointer-events-none" />

                <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        {/* Info Left */}
                        <div className="lg:col-span-5 space-y-8">
                            <InViewSection>
                                <div className="space-y-4">
                                    <span className="inline-flex items-center gap-2 bg-[#9ACD32]/20 border border-[#9ACD32]/30 text-[#9ACD32] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                                        Get In Touch
                                    </span>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
                                        Let's Build Something Great
                                    </h2>
                                    <p className="text-slate-300 text-base leading-relaxed">
                                        Ready to transform your business with custom software solutions? Our team is here to help you achieve your goals.
                                    </p>
                                </div>
                            </InViewSection>

                            <InViewSection>
                                <div className="space-y-6">
                                    {[
                                        { icon: Phone, label: "Phone", value: "+44 7833 817034", href: "tel:+447833817034" },
                                        { icon: Mail, label: "Email", value: "hello@phoenixcreativehub.co.uk", href: "mailto:hello@phoenixcreativehub.co.uk" },
                                        { icon: Globe, label: "Location", value: "Suite RA01, 195-197 Wood Street, London, E17 3NU, UK", href: "#" }
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
                                            <h3 className="font-display font-bold text-[#111111] text-2xl mb-3">Request Received!</h3>
                                            <p className="text-sm text-slate-500 mb-6 max-w-md mx-auto leading-relaxed">
                                                Our technical team will review your project details and get back to you within 24 hours.
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
                                                                <SelectItem value="web_mobile">Web & Mobile Applications</SelectItem>
                                                                <SelectItem value="ai_ml">AI Automation & ML</SelectItem>
                                                                <SelectItem value="crm_erp">CRM & ERP Systems</SelectItem>
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
                                                                placeholder="Please describe your software requirements, user flow, integrations, or deployment timelines..."
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
                                                        className="bg-primary hover:bg-primary/95 text-white font-bold shadow-lg shadow-primary/25 min-w-[150px] h-11 rounded-full cursor-pointer transition-all"
                                                    >
                                                        <span className="flex items-center gap-2">
                                                            Send Message <Send className="w-4 h-4" />
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
