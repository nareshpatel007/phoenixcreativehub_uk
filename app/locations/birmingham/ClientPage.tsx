"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    MapPin, Sparkles, ArrowRight, Laptop, Globe,
    Smartphone, Bot, Database, Search, CheckCircle2,
    ChevronDown, Building2, Workflow, ShieldCheck, Compass
} from "lucide-react";
import { Button } from "@/components/ui/button";

const C = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

export default function ClientPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs = [
        {
            q: "Do you provide software development services to businesses in Birmingham?",
            a: "Phoenix Creative Hub welcomes enquiries from businesses in its priority UK markets, including this area. Contact the team to discuss your requirements and working arrangements."
        },
        {
            q: "What services can I enquire about?",
            a: "You can enquire about custom software, web development, mobile apps, AI and automation, CRM and ERP development, and SEO services."
        },
        {
            q: "Do you have an office in this city?",
            a: "This page targets businesses in the area and does not claim a local office. Please use the contact page to confirm the company's current business address and any meeting arrangements."
        },
        {
            q: "Can you help a small business as well as a larger organisation?",
            a: "Enquiries are welcome from businesses of different sizes. The suitability of a project depends on its requirements, scope and delivery needs."
        },
        {
            q: "How do I request a consultation?",
            a: "Use the contact page to outline your project, target customers and preferred next step. The team can then discuss the requirements with you."
        }
    ];

    const servicesList = [
        {
            icon: Laptop,
            title: "Custom software development",
            desc: "Plan software around your business processes, users and data requirements. We can discuss the need for a new business application, an existing system improvement or integrations between platforms.",
            link: "/services/custom-software-development",
            linkText: "Custom Software Development"
        },
        {
            icon: Globe,
            title: "Web development",
            desc: "Create or improve a business website or web application with clear information architecture, usable page journeys and functionality aligned with your objectives.",
            link: "/services/web-development",
            linkText: "Web Development Services"
        },
        {
            icon: Smartphone,
            title: "Mobile app development",
            desc: "Explore an iOS, Android or cross-platform app based on your audience, features, device requirements and long-term product plans.",
            link: "/services/mobile-app-development",
            linkText: "Mobile App Development"
        },
        {
            icon: Bot,
            title: "AI development and automation",
            desc: "Identify practical opportunities to use AI or automation to support customer interactions, information handling or repetitive workflows. The use case and safeguards should be defined before a solution is selected.",
            link: "/services/ai-development-automation",
            linkText: "AI & Automation Services"
        },
        {
            icon: Database,
            title: "CRM and ERP development",
            desc: "Review how customer information and operational processes are managed. A tailored CRM or ERP may be worth considering where existing tools do not support essential workflows.",
            link: "/services/crm-development",
            linkText: "CRM & ERP Development"
        },
        {
            icon: Search,
            title: "SEO services for businesses targeting Birmingham",
            desc: "Search engine optimisation can help your business reach people looking for relevant products or services. Our SEO service areas include technical SEO, on-page optimisation, keyword research, content planning and local search, with priorities based on your website and target market.",
            link: "/services/seo-services",
            linkText: "SEO Services UK"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 pt-20 md:pt-22">

            {/* 1. HERO SECTION */}
            <section className="relative min-h-[60vh] flex items-center py-16 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1A1A1A] text-white">
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-[#9ACD32] rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#9ACD32] rounded-full blur-[140px] translate-x-1/2 translate-y-1/2" />
                </div>

                <div className={`${C} relative z-10 w-full`}>
                    <div className="max-w-3xl space-y-6">
                        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
                            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#9ACD32]/10 text-[#9ACD32] border border-[#9ACD32]/20">
                                <MapPin className="w-3.5 h-3.5" />
                                Software Development Company Birmingham & Midlands
                            </span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
                        >
                            Software Development and Digital Services for <span className="text-[#9ACD32]">Businesses in Birmingham</span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ delay: 0.2 }}
                            className="text-base sm:text-lg text-slate-300 leading-relaxed font-light"
                        >
                            Birmingham organisations may be reviewing how they attract customers, connect business processes or bring a new digital service to market. Phoenix Creative Hub supports UK businesses with software development and digital growth services. If your organisation is based in Birmingham or serves customers in the area, we welcome a conversation about the challenges you want to solve and the outcomes you want to achieve.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4 pt-2"
                        >
                            <Button asChild size="lg" className="bg-[#9ACD32] hover:bg-[#86b528] text-slate-950 font-bold px-8 shadow-xl shadow-[#9ACD32]/20 rounded-xl h-13">
                                <Link href="/contact">Discuss Your Birmingham Project</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white rounded-xl h-13">
                                <Link href="#services">Explore Services</Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. A DIGITAL PARTNER FOR BIRMINGHAM BUSINESSES */}
            <section className="py-20 bg-white border-b border-slate-200">
                <div className={C}>
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Strategic Partnership</span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2921] tracking-tight">
                                A digital partner for Birmingham businesses
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-base">
                                The right digital investment depends on the needs of your organisation. You may need a bespoke system to support a particular workflow, a website that explains your services more clearly, a mobile app for customers or staff, or a more effective way to reach people through search. We start by understanding the requirement and then discuss the options that may fit.
                            </p>
                            <p className="text-slate-600 leading-relaxed text-base">
                                A useful first discussion covers your current situation, target customers, business objectives, existing systems and constraints. It should also consider whether an off-the-shelf product, configuration, custom development or an SEO programme is the most appropriate route.
                            </p>
                            <div className="pt-2 flex flex-wrap gap-4">
                                <Link href="/about-us" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2921] hover:text-[#9ACD32] transition-colors">
                                    <span>About Phoenix Creative Hub</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <span className="text-slate-300">•</span>
                                <Link href="/why-us" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2921] hover:text-[#9ACD32] transition-colors">
                                    <span>Why Choose Us</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
                                <div className="space-y-2">
                                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B2921]">Transparency Statement</span>
                                    <h3 className="text-xl font-bold text-[#0B2921]">Supporting Projects in Birmingham</h3>
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Birmingham is one of Phoenix Creative Hub's priority target markets. This page describes the services available to businesses in the area; it should not be read as a claim that Phoenix Creative Hub operates a physical office in Birmingham. Working arrangements and project suitability can be discussed directly.
                                </p>
                                <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-2">
                                    <div className="flex items-center gap-2 font-bold text-[#0B2921]">
                                        <Building2 className="w-4 h-4 text-[#9ACD32]" />
                                        <span>UK Registered Entity</span>
                                    </div>
                                    <p>PHOENIX CREATIVE HUB UK LTD is incorporated in England & Wales with central operations supporting clients across the Midlands.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SERVICES LISTING */}
            <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
                <div className={C}>
                    <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                        <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Our Capabilities</span>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#0B2921] tracking-tight">
                            Software development & digital growth services
                        </h2>
                        <p className="text-slate-600 text-base">
                            Tailored engineering, web solutions, mobile architectures, intelligent automation, and search optimisation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesList.map((svc, idx) => {
                            const IconComp = svc.icon;
                            return (
                                <div 
                                    key={idx}
                                    className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-[#9ACD32] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                                >
                                    <div className="space-y-4">
                                        <div className="w-12 h-12 rounded-xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center">
                                            <IconComp className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#0B2921]">{svc.title}</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">{svc.desc}</p>
                                    </div>
                                    <div className="pt-6 border-t border-slate-100 mt-6">
                                        <Link 
                                            href={svc.link} 
                                            className="inline-flex items-center gap-2 text-xs font-bold text-[#0B2921] hover:text-[#9ACD32] transition-colors"
                                        >
                                            <span>Learn more about {svc.linkText}</span>
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. UNDERSTAND THE OPPORTUNITY BEFORE CHOOSING A SOLUTION */}
            <section className="py-20 bg-white border-b border-slate-200">
                <div className={C}>
                    <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
                        <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Discovery & Alignment</span>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#0B2921] tracking-tight">
                            Understand the opportunity before choosing a solution
                        </h2>
                        <p className="text-slate-600 text-base leading-relaxed">
                            A useful first discussion covers your current situation, target customers, business objectives, existing systems and constraints. It should also consider whether an off-the-shelf product, configuration, custom development or an SEO programme is the most appropriate route.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                            <span className="text-2xl font-black text-[#9ACD32] block mb-2">01</span>
                            <h4 className="font-bold text-[#0B2921] text-sm mb-1">Current State</h4>
                            <p className="text-xs text-slate-600">Reviewing existing systems, workflows, and points of friction.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                            <span className="text-2xl font-black text-[#9ACD32] block mb-2">02</span>
                            <h4 className="font-bold text-[#0B2921] text-sm mb-1">Target Goals</h4>
                            <p className="text-xs text-slate-600">Defining user needs, conversion aims, and operational targets.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                            <span className="text-2xl font-black text-[#9ACD32] block mb-2">03</span>
                            <h4 className="font-bold text-[#0B2921] text-sm mb-1">Option Scoping</h4>
                            <p className="text-xs text-slate-600">Assessing SaaS configuration vs. tailored software builds.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                            <span className="text-2xl font-black text-[#9ACD32] block mb-2">04</span>
                            <h4 className="font-bold text-[#0B2921] text-sm mb-1">Delivery Plan</h4>
                            <p className="text-xs text-slate-600">Milestone delivery, testing cycles, and ongoing support.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FAQ SECTION */}
            <section className="py-20 bg-slate-50 border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-14">
                        <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Common Enquiries</span>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#0B2921] tracking-tight">
                            Frequently asked questions
                        </h2>
                        <p className="text-slate-600 text-sm">
                            Answers for organisations considering digital services in the Birmingham and West Midlands region.
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

            {/* 6. CTA SECTION: DISCUSS YOUR BIRMINGHAM BUSINESS REQUIREMENTS */}
            <section className="py-20 bg-gradient-to-br from-[#0B2921] to-[#12382D] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#9ACD32] rounded-full blur-[120px]" />
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#9ACD32] rounded-full blur-[120px]" />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-[#9ACD32]">
                        <Compass className="w-3.5 h-3.5" />
                        Start The Conversation
                    </span>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                        Discuss your Birmingham business requirements
                    </h2>

                    <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Whether you are planning a new project or looking to improve something already in place, tell us what you want to achieve. Include the service you are interested in, the current challenge and any relevant timescale.
                    </p>

                    <p className="text-xs sm:text-sm text-[#9ACD32] font-medium max-w-xl mx-auto">
                        Contact Phoenix Creative Hub to discuss software development, web, app, AI or SEO requirements for your Birmingham business. Request a consultation and outline your project.
                    </p>

                    <div className="pt-4 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg" className="bg-[#9ACD32] hover:bg-[#86b528] text-slate-950 font-bold px-8 shadow-xl shadow-[#9ACD32]/20 rounded-xl h-14">
                            <Link href="/contact">Request a Consultation</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white rounded-xl h-14">
                            <Link href="/services">View All Services</Link>
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
}
