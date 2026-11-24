"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft, CheckCircle2, ChevronDown, Globe,
    Laptop, Smartphone, Layers, Search, ArrowRight,
    Users, Target, Award, Check, TrendingUp, ShieldCheck,
    Compass, BarChart3, HelpCircle, Phone, Mail, MapPin,
    Code2, Layout, Zap, Eye
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
    service: any;
}

export default function WebDevelopmentDetailClient({ service }: Props) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            q: "What is the difference between a website and a web application?",
            a: "A website mainly presents information and content, while a web application allows users to complete interactive tasks such as managing records, accessing accounts or using workflow tools. Some projects combine both."
        },
        {
            q: "How much does website development cost in the UK?",
            a: "Pricing depends on the number of page templates, content requirements, design complexity, integrations and functionality. A web application usually has a different scope from a straightforward business website. An estimate should follow a requirements discussion."
        },
        {
            q: "Will my website work on mobile devices?",
            a: "Responsive design should be considered from the start so that pages and key interactions work across mobile, tablet and desktop screen sizes. The final experience should be tested on relevant devices."
        },
        {
            q: "Can you develop a website that supports SEO?",
            a: "A website can be built with sound technical and structural foundations, including crawlable navigation, logical headings, metadata and internal linking. Ranking performance also requires relevant content, authority and ongoing optimisation."
        },
        {
            q: "Can you improve an existing website?",
            a: "We can discuss improvements to an existing website, including structure, usability, content presentation, performance and functionality. The best approach depends on the current platform and the changes required."
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
                                        Web Development UK
                                    </div>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-[1.1] tracking-tight">
                                        Web Development for Businesses That Need More From Their <span className="text-[#9ACD32]">Website</span>
                                    </h1>
                                    <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                                        Your website is often where a potential customer forms their first impression of your business. It needs to explain what you offer, make information easy to find and give visitors a clear next step. Phoenix Creative Hub works with UK businesses to plan web experiences around their users, services and commercial objectives.
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
                                            Request a Consultation <ArrowRight className="w-5 h-5 ml-1" />
                                        </Link>
                                    </Button>
                                    <Button asChild size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white font-semibold h-13 px-8 text-base rounded-full transition-all backdrop-blur-sm">
                                        <Link href="#capabilities" className="flex items-center gap-2">
                                            What We Cover
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
                                        <span>Conversion-Led Design</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#9ACD32]" />
                                        <span>High Performance & Speed</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#9ACD32]" />
                                        <span>SEO & Accessibility Ready</span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Interactive Showcase */}
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
                                                    <Globe className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-white">Commercial Web Pod</div>
                                                    <div className="text-[11px] text-slate-400">UK Direct Collaboration</div>
                                                </div>
                                            </div>
                                            <span className="text-[11px] font-mono text-[#9ACD32] bg-[#9ACD32]/10 border border-[#9ACD32]/20 px-2.5 py-1 rounded-full">
                                                Online
                                            </span>
                                        </div>

                                        <div className="space-y-3">
                                            {[
                                                { label: "Architecture", status: "Next.js / TypeScript" },
                                                { label: "Speed & Vitals", status: "Sub-Second Loading" },
                                                { label: "Search Foundations", status: "Semantic & Crawlable" },
                                                { label: "Conversion Flow", status: "User-Focused CTAs" }
                                            ].map((row, idx) => (
                                                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 text-xs">
                                                    <span className="text-slate-300 font-medium">{row.label}</span>
                                                    <span className="text-[#9ACD32] font-semibold">{row.status}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-2 border-t border-white/10 text-xs text-slate-400 leading-relaxed">
                                            Structure, usability, accessibility and performance engineered to support your commercial goals.
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 2. A WEB DEVELOPMENT COMPANY FOCUSED ON YOUR BUSINESS GOALS */}
                <section className="py-20 bg-white border-b border-slate-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#5a8014] bg-[#9ACD32]/15 border border-[#9ACD32]/30 px-4 py-1.5 rounded-full">
                            Purposeful Development
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#0B2921] leading-tight">
                            A Web Development Company Focused on Your Business Goals
                        </h2>
                        <div className="text-slate-600 text-lg leading-relaxed space-y-4 text-left sm:text-center">
                            <p>
                                A successful website is more than a collection of pages. Its structure, content, design, functionality and performance all influence whether visitors understand your offer and feel confident taking action. Before recommending a build, we look at the purpose of the website, the audience it needs to serve and the tasks visitors should be able to complete.
                            </p>
                            <p className="text-base text-slate-500">
                                Some organisations need a clear business website that generates enquiries. Others need a more involved web application, customer portal or internal platform. These are different requirements and should be scoped accordingly. We can discuss the type of experience you need and identify the most appropriate direction.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. CORE SERVICE TYPES: BUSINESS WEBSITES & CUSTOM WEB APPLICATIONS */}
                <section className="py-20 bg-[#fbfdfa] border-b border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center">
                                    <Layout className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-[#0B2921]">
                                    Website development for clear communication and enquiries
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    A business website should help people understand who you help, what you provide and why they should speak with you. We consider page hierarchy, navigation, calls to action, mobile usability and the information customers need before making a decision. Content and design should work together rather than compete for attention.
                                </p>
                            </div>

                            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center">
                                    <Code2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-[#0B2921]">
                                    Custom web application development
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    When a standard website is not enough, a web application can support more complex tasks through a browser-based experience. Depending on the project, this might include account areas, dashboards, forms, workflow tools, searchable information or customer-facing functions. The feature set should follow user needs and technical feasibility.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. WHAT OUR WEB DEVELOPMENT WORK CAN COVER */}
                <section id="capabilities" className="py-24 bg-white border-b border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#5a8014] bg-[#9ACD32]/15 border border-[#9ACD32]/30 px-4 py-1.5 rounded-full">
                                Scope of Work
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-[#0B2921]">
                                What Our Web Development Work Can Cover
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto text-base">
                                From user journey architecture to high-speed code execution, our delivery covers essential technical disciplines.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: Compass,
                                    title: "Website planning and structure",
                                    desc: "Clarify the website's purpose, audiences, key pages and conversion journeys. A logical structure helps visitors and search engines understand how information is organised."
                                },
                                {
                                    icon: Smartphone,
                                    title: "Responsive user experience",
                                    desc: "Plan layouts and interactions for mobile, tablet and desktop use. Important information and actions should remain accessible across screen sizes."
                                },
                                {
                                    icon: Layers,
                                    title: "Custom functionality",
                                    desc: "Define the features needed to support your service or operation. Functionality should be purposeful, understandable and proportionate to the requirements."
                                },
                                {
                                    icon: Zap,
                                    title: "Performance and technical foundations",
                                    desc: "Consider page loading, image handling, code efficiency, crawlability and technical setup as part of the build. Performance work should be tested against real pages and devices."
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

                {/* 5. SEARCH-FRIENDLY WEBSITE FOUNDATIONS */}
                <section className="py-20 bg-[#fbfdfa] border-b border-slate-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 space-y-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-[#9ACD32]/10 rounded-full blur-3xl pointer-events-none" />
                            <span className="text-xs font-bold uppercase tracking-widest text-[#9ACD32] bg-[#9ACD32]/20 border border-[#9ACD32]/30 px-3.5 py-1.5 rounded-full inline-block">
                                Organic Visibility
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight">
                                Search-Friendly Website Foundations
                            </h2>
                            <p className="text-slate-300 leading-relaxed text-base">
                                A well-structured website gives search engines clearer signals about its pages. We consider crawlable navigation, meaningful headings, descriptive page titles, internal links and appropriate technical elements.
                            </p>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                SEO performance also depends on content quality, competition and ongoing work, ensuring technical health complements your broader digital marketing.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. A WEB DEVELOPMENT PROCESS WITH CLEAR STAGES */}
                <section className="py-24 bg-white border-b border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#5a8014] bg-[#9ACD32]/15 border border-[#9ACD32]/30 px-4 py-1.5 rounded-full">
                                Delivery Framework
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-[#0B2921]">
                                A Web Development Process with Clear Stages
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto text-base">
                                Shared clarity at every milestone keeps development aligned with your business objectives.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    step: "01",
                                    title: "Discovery",
                                    desc: "We discuss your business, audience, existing website, required features and project constraints. This helps distinguish essential requirements from optional enhancements."
                                },
                                {
                                    step: "02",
                                    title: "Structure and experience",
                                    desc: "Plan page hierarchy, navigation, content requirements and key user journeys. The aim is to make the website straightforward to use and aligned with the action you want visitors to take."
                                },
                                {
                                    step: "03",
                                    title: "Development and review",
                                    desc: "Build the agreed pages and functionality, then review the experience against the project requirements. Feedback should be gathered at agreed milestones."
                                },
                                {
                                    step: "04",
                                    title: "Testing and launch",
                                    desc: "Check the website across relevant devices and browsers, review forms and key journeys, and prepare the launch. Any migration or redirect requirements should be planned before a new site replaces an existing one."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-[#9ACD32] transition-all flex flex-col justify-between">
                                    <div>
                                        <div className="text-3xl font-display font-black text-[#5a8014] mb-4">
                                            {item.step}
                                        </div>
                                        <h3 className="font-display font-bold text-lg text-[#0B2921] mb-2 leading-snug">
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

                {/* 7. WEB DEVELOPMENT FOR LONDON, MANCHESTER, BIRMINGHAM AND ACROSS THE UK */}
                <section className="py-20 bg-[#fbfdfa] border-b border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-8 space-y-4">
                                <span className="inline-flex items-center gap-2 bg-[#9ACD32]/15 border border-[#9ACD32]/30 text-[#5a8014] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                                    UK-Wide Delivery
                                </span>
                                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#0B2921]">
                                    Web Development for London, Manchester, Birmingham and Across the UK
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
                                    Phoenix Creative Hub welcomes enquiries from organisations in <span className="text-[#0B2921] font-bold">London</span>, <span className="text-[#0B2921] font-bold">Manchester</span> and <span className="text-[#0B2921] font-bold">Birmingham</span>, as well as businesses elsewhere in the UK. We will discuss your project requirements and the best way to collaborate during the initial conversation.
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
                                Answers to questions businesses ask when planning website and web application development.
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

                {/* 9. PLAN YOUR NEXT WEBSITE OR WEB APPLICATION (CTA) */}
                <section className="py-24 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1A1A1A] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(154,205,50,0.15),transparent_70%)] pointer-events-none" />

                    <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
                        <span className="inline-flex items-center gap-2 bg-[#9ACD32]/20 border border-[#9ACD32]/30 text-[#9ACD32] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                            Get Started
                        </span>
                        <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
                            Plan Your Next Website or Web Application
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
                            Whether you are launching a new business website, replacing an outdated platform or planning a web application, tell us what you need the experience to achieve. Useful details include your target audience, essential features, current platform and preferred timescale.
                        </p>
                        <p className="text-slate-400 text-sm max-w-xl mx-auto">
                            Talk to Phoenix Creative Hub about web development. Request a consultation and outline the website or web application you want to create.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button asChild size="lg" className="bg-[#9ACD32] hover:bg-[#9ACD32]/90 text-[#0B2921] font-bold h-13 px-8 rounded-full shadow-[0_0_25px_rgba(154,205,50,0.35)]">
                                <Link href="/contact" className="flex items-center gap-2">
                                    Request Consultation <ArrowRight className="w-5 h-5 ml-1" />
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
