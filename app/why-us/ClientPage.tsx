"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    Target, Layers, CheckCircle2, ChevronDown,
    ArrowRight, Sparkles, Workflow, MessageSquare,
    ShieldCheck, Users, HelpCircle, Laptop,
    RefreshCw, HeartHandshake, Eye, Rocket, Check
} from "lucide-react";
import { Button } from "@/components/ui/button";

const C = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

export default function ClientPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs = [
        {
            q: "What makes a good software development partner?",
            a: "A good partner should understand the business problem, explain technical options clearly, define scope and responsibilities, communicate consistently and consider maintainability after launch. Evidence of relevant delivery experience is also important."
        },
        {
            q: "Can one agency support software development and SEO?",
            a: "It can be useful where the work overlaps, but each discipline needs a clear scope and appropriate delivery capability. Ask how responsibilities, reporting and success measures will be handled."
        },
        {
            q: "Do you work with start-ups as well as established companies?",
            a: "Phoenix Creative Hub welcomes enquiries from businesses of different sizes. The project must be assessed against its requirements, timescale and delivery needs."
        },
        {
            q: "How do you start a new project?",
            a: "The first step is a discussion about the business challenge, users, existing systems, desired outcome and constraints. This provides the basis for defining scope and next steps."
        },
        {
            q: "Can you take over or improve an existing website or application?",
            a: "This may be possible after reviewing the current platform, documentation, access, dependencies and the work required. An initial assessment helps identify risks and establish a realistic scope."
        }
    ];

    const pillars = [
        {
            icon: Target,
            title: "Solutions shaped around the problem",
            desc: "A business challenge should guide the solution, not the other way round. Before recommending custom software, automation, a website or an SEO campaign, we need to understand what is happening today, what needs to change and what constraints matter. This helps keep the work relevant and avoids adding features or activity without a clear purpose."
        },
        {
            icon: Layers,
            title: "Technology and SEO under one roof",
            desc: "Phoenix Creative Hub's service areas cover custom software, web and mobile development, AI and automation, CRM and ERP development, and SEO. This combination can be useful when a project crosses disciplines, such as launching a web platform that needs search visibility or connecting a customer system with an automated workflow. Each service still needs a defined scope and appropriate expertise."
        },
        {
            icon: CheckCircle2,
            title: "Clear priorities and agreed scope",
            desc: "A project should have a shared understanding of what is included, what is not included, who needs to contribute and how decisions will be made. We encourage early discussion of essential features, dependencies, timescales and review points so that expectations are realistic."
        },
        {
            icon: Users,
            title: "A focus on usability and practical value",
            desc: "Digital solutions need to work for the people who use them. Whether the work involves an internal system, customer-facing app or business website, usability should be considered alongside functionality. For SEO, content should answer genuine questions and make the next step clear rather than simply repeat keywords."
        },
        {
            icon: MessageSquare,
            title: "Communication throughout the work",
            desc: "Regular communication helps stakeholders understand progress, raise questions and review decisions. The frequency and format should be agreed at the start and suited to the size and pace of the engagement."
        },
        {
            icon: RefreshCw,
            title: "Consideration beyond launch",
            desc: "A website, application or automation workflow may need refinement as users, systems and business priorities change. We discuss maintenance, support and future improvements as part of project planning so that post-launch needs are not overlooked."
        }
    ];

    const businessStages = [
        {
            title: "Start-ups",
            desc: "A start-up may need help turning an idea into a defined product, building an MVP, and planning an initial search presence.",
            action: "Turn ideas into viable products"
        },
        {
            title: "Growing SMEs",
            desc: "An SME may want to replace manual processes, modernise operational software, or improve organic search enquiries.",
            action: "Streamline workflows & drive leads"
        },
        {
            title: "Larger Organisations",
            desc: "A larger organisation may be reviewing complex integrations, multi-system CRM/ERP architectures, or enterprise search performance.",
            action: "Scale systems & resolve technical debt"
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
                                <HeartHandshake className="w-3.5 h-3.5" />
                                Software Development Partner UK
                            </span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
                        >
                            A Technology and Digital Partner That <span className="text-[#9ACD32]">Starts With Your Goals</span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ delay: 0.2 }}
                            className="text-base sm:text-lg text-slate-300 leading-relaxed font-light"
                        >
                            Choosing a software development or SEO partner is an important decision. The work can affect your operations, customer experience, marketing performance and future plans. Phoenix Creative Hub believes the best starting point is a clear understanding of your business, followed by an honest discussion about the options, scope and outcomes.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4 pt-2"
                        >
                            <Button asChild size="lg" className="bg-[#9ACD32] hover:bg-[#86b528] text-slate-950 font-bold px-8 shadow-xl shadow-[#9ACD32]/20 rounded-xl h-13">
                                <Link href="/contact">Arrange a Consultation</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white rounded-xl h-13">
                                <Link href="/services">Explore Our Services</Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. OUR CORE PRINCIPLES & PILLARS */}
            <section className="py-20 bg-white border-b border-slate-200">
                <div className={C}>
                    <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                        <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Our Approach</span>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#0B2921] tracking-tight">
                            How we partner with organisations
                        </h2>
                        <p className="text-slate-600 text-base">
                            Transparent scoping, collaborative communication, and commercial clarity at every project stage.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pillars.map((pillar, idx) => {
                            const IconComp = pillar.icon;
                            return (
                                <div 
                                    key={idx}
                                    className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-[#9ACD32] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                                >
                                    <div className="space-y-4">
                                        <div className="w-12 h-12 rounded-xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center">
                                            <IconComp className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#0B2921]">{pillar.title}</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 3. A PARTNER FOR DIFFERENT STAGES OF BUSINESS */}
            <section className="py-20 bg-slate-50 border-b border-slate-200">
                <div className={C}>
                    <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                        <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Scalable Partnership</span>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#0B2921] tracking-tight">
                            A partner for different stages of business
                        </h2>
                        <p className="text-slate-600 text-base">
                            The first conversation should establish the problem and whether the proposed work is a sensible fit.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {businessStages.map((stage, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
                                <div className="space-y-3">
                                    <span className="text-2xl font-black text-[#9ACD32]">0{idx + 1}</span>
                                    <h3 className="text-xl font-bold text-[#0B2921]">{stage.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{stage.desc}</p>
                                </div>
                                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#0B2921]">
                                    <Check className="w-4 h-4 text-[#9ACD32]" />
                                    <span>{stage.action}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-6 rounded-2xl bg-[#0B2921] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                            <h4 className="text-lg font-bold">Cross-Discipline Delivery Across the UK</h4>
                            <p className="text-xs text-slate-300">Serving clients across London, Manchester, Birmingham, and throughout the United Kingdom.</p>
                        </div>
                        <Button asChild className="bg-[#9ACD32] hover:bg-[#86b528] text-slate-950 font-bold shrink-0">
                            <Link href="/about-us">About Our Company</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* 4. FAQ SECTION */}
            <section className="py-20 bg-white border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-14">
                        <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Answers to Common Questions</span>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#0B2921] tracking-tight">
                            Frequently asked questions
                        </h2>
                        <p className="text-slate-600 text-sm">
                            Clear answers on choosing a development partner, scope planning, and project initiation.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => {
                            const isOpen = openFaq === idx;
                            return (
                                <div 
                                    key={idx}
                                    className="rounded-2xl border border-slate-200 bg-slate-50/50 overflow-hidden transition-all"
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
                                                <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4">
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

            {/* 5. CTA SECTION: LET'S SEE WHETHER WE'RE THE RIGHT FIT */}
            <section className="py-20 bg-gradient-to-br from-[#0B2921] to-[#12382D] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#9ACD32] rounded-full blur-[120px]" />
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#9ACD32] rounded-full blur-[120px]" />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-[#9ACD32]">
                        <Sparkles className="w-3.5 h-3.5" />
                        Explore A Partnership
                    </span>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                        Let's see whether we're the right fit
                    </h2>

                    <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        The best way to assess a potential partnership is to discuss the work openly. Tell us about your objectives, current systems, target customers, timescale and any constraints. We will use that context to understand the requirements and discuss possible next steps.
                    </p>

                    <p className="text-xs sm:text-sm text-[#9ACD32] font-medium max-w-xl mx-auto">
                        Speak with Phoenix Creative Hub about your project. Arrange a consultation and decide whether our approach fits your business needs.
                    </p>

                    <div className="pt-4 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg" className="bg-[#9ACD32] hover:bg-[#86b528] text-slate-950 font-bold px-8 shadow-xl shadow-[#9ACD32]/20 rounded-xl h-14">
                            <Link href="/contact">Arrange a Consultation</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white rounded-xl h-14">
                            <Link href="/services">Explore Services</Link>
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
}
