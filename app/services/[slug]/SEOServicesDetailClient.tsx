"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft, CheckCircle2, ChevronDown, Search,
    Layers, Cpu, ArrowRight,
    Users, Target, Award, Check, TrendingUp, ShieldCheck,
    Compass, BarChart3, HelpCircle, Phone, Mail, MapPin,
    Sparkles, Workflow, MessageSquare, LayoutGrid, Server,
    Building2, RefreshCw, Filter, FileSpreadsheet, ShieldAlert,
    Globe2, LineChart, FileText, CheckCircle
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
    service: any;
}

export default function SEOServicesDetailClient({ service }: Props) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            q: "How long does SEO take to show results?",
            a: "SEO timelines vary with website condition, competition, content quality, authority, implementation speed and search demand. Some technical improvements can be processed sooner, while meaningful growth in competitive searches often takes sustained work. No responsible agency can guarantee a specific ranking date."
        },
        {
            q: "What is included in SEO services?",
            a: "SEO may include technical audits, keyword research, on-page optimisation, content planning, local SEO, internal linking, authority development and performance reporting. The exact scope should be agreed around your website and goals."
        },
        {
            q: "Do you provide local SEO in London, Manchester and Birmingham?",
            a: "These are priority target markets for Phoenix Creative Hub. Local SEO work should be based on the areas the business genuinely serves and the available business information. Contact us to discuss your target locations."
        },
        {
            q: "Can SEO generate leads for a small business?",
            a: "SEO can help a small business reach people searching for relevant services. Lead generation also depends on the offer, landing page quality, trust signals, pricing, competition and how clearly visitors can enquire."
        },
        {
            q: "Do you guarantee first-page Google rankings?",
            a: "No. Search rankings are influenced by factors outside an agency's control. A sound SEO programme focuses on relevant visibility, technical quality, useful content and measurable business outcomes rather than guaranteed positions."
        }
    ];

    const seoServices = [
        {
            icon: Server,
            title: "Technical SEO",
            description: "Technical SEO helps search engines access, understand and process your website. An audit may review crawlability, indexation, site architecture, redirects, canonical signals, XML sitemaps, robots directives, mobile usability, structured data and performance. Recommendations should be prioritised by impact and implementation effort."
        },
        {
            icon: FileText,
            title: "On-page SEO",
            description: "On-page optimisation improves how individual pages communicate their topic and usefulness. This can include search intent, page titles, meta descriptions, headings, copy structure, image alternatives, internal links and calls to action. Keywords should be incorporated naturally, without making the page awkward to read."
        },
        {
            icon: Search,
            title: "Keyword research and content strategy",
            description: "Keyword research identifies the language people use when looking for services, comparing options or researching a problem. We group terms by intent and map them to the most relevant pages to reduce overlap. Content planning then addresses the questions and decisions that matter to potential customers."
        },
        {
            icon: MapPin,
            title: "Local SEO",
            description: "Local SEO helps businesses improve their visibility for relevant searches in a defined service area. Work may include Google Business Profile optimisation where eligible, location relevance, local landing page content, business information consistency and review strategy. Location claims must accurately reflect where the business operates."
        },
        {
            icon: CheckCircle2,
            title: "Content optimisation",
            description: "Useful content should answer the reader's question and help them make a decision. We review existing pages and identify where clearer explanations, stronger service detail, supporting evidence or new resources could improve relevance and conversion potential."
        },
        {
            icon: BarChart3,
            title: "SEO reporting and measurement",
            description: "Reporting should connect search performance with business outcomes. Depending on tracking access, this may include organic clicks, impressions, search queries, landing page performance, enquiries, consultation bookings and conversion rates. Measurement needs correctly configured analytics and lead tracking."
        }
    ];

    const campaignSteps = [
        {
            step: "01",
            title: "Understand your business and market",
            desc: "We discuss your services, target customers, locations, competitors and lead-generation goals. This provides context for selecting keywords and deciding which pages deserve attention first."
        },
        {
            step: "02",
            title: "Audit and prioritise",
            desc: "Review technical health, existing content, search visibility and conversion journeys. Recommendations are grouped by urgency, potential value and implementation requirements."
        },
        {
            step: "03",
            title: "Optimise key landing pages",
            desc: "Improve the pages closest to commercial intent first. Align each page with a clear keyword theme, useful content, appropriate internal links and a relevant enquiry action."
        },
        {
            step: "04",
            title: "Build supporting content and authority",
            desc: "Develop helpful resources that support service pages and answer questions at different stages of the buying journey. Off-page activity should be relevant, transparent and focused on earning appropriate visibility rather than pursuing volume for its own sake."
        },
        {
            step: "05",
            title: "Measure and refine",
            desc: "Review performance, identify changes in demand and search visibility, and refine priorities. SEO recommendations should evolve as the website and business develop."
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

                                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#9ACD32]/10 text-[#9ACD32] border border-[#9ACD32]/20">
                                        <Search className="w-3.5 h-3.5" />
                                        SEO Agency UK
                                    </span>
                                </motion.div>

                                <motion.h1 
                                    initial={{ opacity: 0, y: 20 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    transition={{ delay: 0.2 }}
                                    className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
                                >
                                    SEO Services That Help UK Businesses <span className="text-[#9ACD32]">Reach the Right Customers</span>
                                </motion.h1>

                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    transition={{ delay: 0.3 }}
                                    className="text-base sm:text-lg text-slate-300 leading-relaxed font-light"
                                >
                                    Being visible in search matters when potential customers are actively looking for a service like yours. But more website traffic does not automatically mean more business. Phoenix Creative Hub helps organisations approach search engine optimisation with a focus on relevant visibility, useful content and the actions that turn website visits into enquiries.
                                </motion.p>

                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    transition={{ delay: 0.4 }}
                                    className="flex flex-wrap gap-4 pt-2"
                                >
                                    <Button asChild size="lg" className="bg-[#9ACD32] hover:bg-[#86b528] text-slate-950 font-bold px-8 shadow-xl shadow-[#9ACD32]/20 rounded-xl h-13">
                                        <Link href="/contact">Request an SEO Consultation</Link>
                                    </Button>
                                    <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white rounded-xl h-13">
                                        <Link href="#services">Explore Our SEO Services</Link>
                                    </Button>
                                </motion.div>

                                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs text-slate-400">
                                    <div>
                                        <p className="font-bold text-white text-base">Commercial</p>
                                        <p>Enquiry-Focused Intent</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-base">Technical</p>
                                        <p>Core Web Vitals & Signals</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-base">Transparent</p>
                                        <p>Data-Backed Reporting</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Hero Card: SEO Signals & Auditing */}
                            <div className="lg:col-span-5">
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl relative space-y-6"
                                >
                                    <div className="space-y-2">
                                        <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Search Strategy</span>
                                        <h3 className="text-xl font-bold text-white">Full-Stack Search Optimization</h3>
                                        <p className="text-xs text-slate-400">Targeting qualified commercial intent across Google UK.</p>
                                    </div>

                                    <div className="space-y-3">
                                        {[
                                            { title: "Technical Crawl & Indexing Audit", desc: "Sitemaps, canonical tags, schema markup & server speed" },
                                            { title: "Commercial Intent Keyword Mapping", desc: "Targeting decision-makers searching for high-value services" },
                                            { title: "Conversion-Focused On-Page Copy", desc: "User journeys structured to turn visits into qualified leads" },
                                            { title: "Local & National Authority", desc: "UK regional dominance across London, Manchester & Birmingham" }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                                                <div className="w-5 h-5 rounded-full bg-[#9ACD32]/20 flex items-center justify-center shrink-0 mt-0.5">
                                                    <Check className="w-3 h-3 text-[#9ACD32]" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-white">{item.title}</p>
                                                    <p className="text-xs text-slate-400">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-2">
                                        <div className="p-4 rounded-xl bg-[#9ACD32]/10 border border-[#9ACD32]/20 text-xs text-slate-300">
                                            <p className="font-semibold text-white mb-1">Sustainable Growth Approach</p>
                                            <p>No artificial tricks or risky shortcuts. White-hat practices aligned with Google Search Essentials.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 2. OVERVIEW: AN SEO STRATEGY BUILT AROUND YOUR COMMERCIAL GOALS */}
                <section className="py-20 bg-white border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-6 space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#0B2921]/10 text-[#0B2921]">
                                    <Target className="w-3.5 h-3.5 text-[#9ACD32]" />
                                    Commercial Focus
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2921] tracking-tight">
                                    An SEO strategy built around your commercial goals
                                </h2>
                                <p className="text-slate-600 leading-relaxed text-base">
                                    Every business has a different audience, service mix and competitive landscape. Effective SEO starts by understanding what you sell, who you want to reach, which pages should generate enquiries and how people search before choosing a provider. We use that context to prioritise technical improvements, page optimisation and content opportunities.
                                </p>
                                <p className="text-slate-600 leading-relaxed text-base">
                                    SEO is a long-term channel. Rankings and traffic can change with competition, search engine updates, website changes and user behaviour. We focus on sound foundations, clear priorities and ongoing measurement rather than promising fixed rankings or guaranteed results.
                                </p>
                                <div className="pt-2 flex flex-wrap gap-4">
                                    <Link href="/services/web-development" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2921] hover:text-[#9ACD32] transition-colors">
                                        <span>Web Development Services</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <span className="text-slate-300">•</span>
                                    <Link href="/services/custom-software-development" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2921] hover:text-[#9ACD32] transition-colors">
                                        <span>Custom Software Development</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:col-span-6">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#9ACD32] transition-all">
                                        <div className="w-10 h-10 rounded-xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center mb-4">
                                            <Target className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-bold text-[#0B2921] text-base mb-2">Intent-Led Traffic</h3>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Attract decision-makers looking specifically for your services rather than irrelevant top-of-funnel clicks.
                                        </p>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#9ACD32] transition-all">
                                        <div className="w-10 h-10 rounded-xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center mb-4">
                                            <Server className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-bold text-[#0B2921] text-base mb-2">Technical Rigour</h3>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Ensure crawl engines navigate your site smoothly with clean code, lightning speed, and semantic markup.
                                        </p>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#9ACD32] transition-all">
                                        <div className="w-10 h-10 rounded-xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center mb-4">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-bold text-[#0B2921] text-base mb-2">Valuable Content</h3>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Clear, authoritative copywriting that answers prospect questions and positions your firm as an expert.
                                        </p>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#9ACD32] transition-all">
                                        <div className="w-10 h-10 rounded-xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center mb-4">
                                            <BarChart3 className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-bold text-[#0B2921] text-base mb-2">Commercial Metrics</h3>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Measure real business metrics—inbound telephone enquiries, quote forms, and revenue impact.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. OUR SEO SERVICES */}
                <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                            <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Capabilities</span>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#0B2921] tracking-tight">
                                Our SEO services
                            </h2>
                            <p className="text-slate-600 text-base">
                                A comprehensive spectrum of search engine optimisation disciplines designed to build sustainable organic authority.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {seoServices.map((item, idx) => {
                                const IconComp = item.icon;
                                return (
                                    <div 
                                        key={idx} 
                                        className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-[#9ACD32] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                                    >
                                        <div className="space-y-4">
                                            <div className="w-12 h-12 rounded-xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center">
                                                <IconComp className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-bold text-[#0B2921]">{item.title}</h3>
                                            <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* 4. HOW WE APPROACH AN SEO CAMPAIGN */}
                <section className="py-20 bg-white border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                            <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Process</span>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#0B2921] tracking-tight">
                                How we approach an SEO campaign
                            </h2>
                            <p className="text-slate-600 text-base">
                                A structured, step-by-step framework ensuring systematic technical audits, on-page optimisation, and continuous refinement.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
                            {campaignSteps.map((item, idx) => (
                                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm relative space-y-3 flex flex-col justify-between">
                                    <div className="space-y-2">
                                        <span className="text-2xl font-black text-[#9ACD32]">{item.step}</span>
                                        <h3 className="text-base font-bold text-[#0B2921]">{item.title}</h3>
                                        <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. WHO CAN BENEFIT FROM SEO? */}
                <section className="py-20 bg-slate-50 border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                            <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Suitability</span>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#0B2921] tracking-tight">
                                Who can benefit from SEO?
                            </h2>
                            <p className="text-slate-600 text-base leading-relaxed">
                                SEO can support start-ups building their first search presence, SMEs looking for a more consistent source of enquiries and established organisations improving visibility across services or locations. The right plan depends on your starting point, competition, resources and commercial goals.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                                <div className="w-12 h-12 rounded-xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0B2921]">Start-ups & New Ventures</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Establish solid indexing foundations, build initial keyword footprints, and ensure search engines understand your core proposition from day one.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                                <div className="w-12 h-12 rounded-xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0B2921]">Growing UK SMEs</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Capture commercial enquiries from competitors, target higher-value service terms, and turn organic search into a steady, reliable sales pipeline.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                                <div className="w-12 h-12 rounded-xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center">
                                    <Globe2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0B2921]">Established Organisations</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Resolve enterprise technical debt, optimise multi-location visibility, and safeguard market leadership against shifting algorithms.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. UK REGIONAL FOCUS */}
                <section className="py-20 bg-white border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-7 space-y-6">
                                <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Regional & National Coverage</span>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2921] tracking-tight">
                                    SEO for London, Manchester, Birmingham and the wider UK
                                </h2>
                                <p className="text-slate-600 leading-relaxed text-base">
                                    We welcome enquiries from businesses targeting customers in London, Manchester, Birmingham and elsewhere in the UK. Local targeting should reflect the areas you genuinely serve, while national campaigns need content and search intent appropriate to a wider audience.
                                </p>
                                <div className="grid sm:grid-cols-3 gap-4 pt-2">
                                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                                        <MapPin className="w-5 h-5 text-[#9ACD32] mb-2" />
                                        <p className="font-bold text-[#0B2921] text-sm">SEO Agency London</p>
                                        <p className="text-xs text-slate-500">Corporate services, tech & professional practices</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                                        <MapPin className="w-5 h-5 text-[#9ACD32] mb-2" />
                                        <p className="font-bold text-[#0B2921] text-sm">Manchester SEO</p>
                                        <p className="text-xs text-slate-500">Ecommerce, creative agencies & industry</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                                        <MapPin className="w-5 h-5 text-[#9ACD32] mb-2" />
                                        <p className="font-bold text-[#0B2921] text-sm">Birmingham SEO</p>
                                        <p className="text-xs text-slate-500">Manufacturing, logistics & commercial services</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-5">
                                <div className="p-8 rounded-2xl bg-[#0B2921] text-white shadow-xl space-y-5">
                                    <h3 className="font-bold text-white text-lg">Ethical, Commercial SEO</h3>
                                    <div className="space-y-4 text-xs text-slate-300">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-[#9ACD32] shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-white">Realistic Advice Over False Promises</p>
                                                <p>We provide transparent expectations backed by real search volume and difficulty data.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-[#9ACD32] shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-white">Integrated With Web Development</p>
                                                <p>As software engineers and designers, we fix technical bottlenecks directly in code.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-[#9ACD32] shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-white">Direct UK Account Ownership</p>
                                                <p>Regular performance reviews, live query tracking, and transparent progress updates.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. FAQ SECTION */}
                <section className="py-20 bg-slate-50 border-b border-slate-200">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center space-y-4 mb-14">
                            <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Answers to Common Questions</span>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#0B2921] tracking-tight">
                                Frequently asked questions
                            </h2>
                            <p className="text-slate-600 text-sm">
                                Clear answers on timelines, inclusions, local coverage, lead generation, and ranking realities.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, idx) => {
                                const isOpen = openFaq === idx;
                                return (
                                    <div 
                                        key={idx}
                                        className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all"
                                    >
                                        <button
                                            onClick={() => setOpenFaq(isOpen ? null : idx)}
                                            className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-[#0B2921] hover:text-[#9ACD32] transition-colors"
                                        >
                                            <span className="text-base sm:text-lg">{faq.q}</span>
                                            <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#9ACD32]' : 'text-slate-400'}`} />
                                        </button>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                                        {faq.a}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* 8. CTA SECTION: LET'S DISCUSS YOUR SEO GOALS */}
                <section className="py-20 bg-gradient-to-br from-[#0B2921] to-[#12382D] text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#9ACD32] rounded-full blur-[120px]" />
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#9ACD32] rounded-full blur-[120px]" />
                    </div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-[#9ACD32]">
                            <Sparkles className="w-3.5 h-3.5" />
                            Grow Your Online Presence
                        </span>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                            Let's discuss your SEO goals
                        </h2>

                        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                            If your website is attracting the wrong visitors, important services are hard to find in search, or organic traffic is not producing enquiries, tell us what you are seeing. Share your website, priority services and target locations so we can understand the opportunity.
                        </p>

                        <p className="text-xs sm:text-sm text-[#9ACD32] font-medium max-w-xl mx-auto">
                            Request an SEO consultation with Phoenix Creative Hub. Discuss your website, target customers and the search improvements most relevant to your business.
                        </p>

                        <div className="pt-4 flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" className="bg-[#9ACD32] hover:bg-[#86b528] text-slate-950 font-bold px-8 shadow-xl shadow-[#9ACD32]/20 rounded-xl h-14">
                                <Link href="/contact">Request an SEO Consultation</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white rounded-xl h-14">
                                <Link href="/about">About Phoenix Creative Hub</Link>
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
