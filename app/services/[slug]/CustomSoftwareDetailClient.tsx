"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft, CheckCircle2, ChevronDown, Laptop,
    Layers, Cpu, Database, Network, ArrowRight,
    Users, Target, Award, Check, TrendingUp, ShieldCheck,
    Compass, BarChart3, HelpCircle, Phone, Mail, MapPin,
    Building2, RefreshCw, GitMerge
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
    service: any;
}

export default function CustomSoftwareDetailClient({ service }: Props) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            q: "What is custom software development?",
            a: "Custom software development involves designing and building an application around a particular organisation's requirements, workflows and users rather than relying solely on a standard off-the-shelf product."
        },
        {
            q: "How much does bespoke software development cost in the UK?",
            a: "The cost depends on scope, complexity, integrations, user roles, security needs and ongoing support. A useful estimate requires an understanding of the requirements and priorities. Contact us to discuss your project."
        },
        {
            q: "Should I build custom software or use an existing platform?",
            a: "Compare the fit of available products against your essential workflows, integration needs, flexibility, ownership and total cost. If an existing platform meets the need, configuration may be more practical. Custom development is worth considering when important requirements cannot be met effectively."
        },
        {
            q: "Can custom software integrate with our existing systems?",
            a: "Integration may be possible where the systems provide suitable APIs or other supported interfaces. Feasibility depends on the platforms, permissions, data formats and security requirements involved."
        },
        {
            q: "Can you improve software that has already been developed?",
            a: "Potentially, yes. The first step is to understand the current application, its technology, documentation, dependencies and the improvements required. This helps establish a realistic scope."
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
                                        Bespoke Software UK
                                    </div>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-[1.1] tracking-tight">
                                        Custom Software Development That Fits the Way Your <span className="text-[#9ACD32]">Business Works</span>
                                    </h1>
                                    <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                                        Your business is not identical to anyone else&apos;s. Your processes, customers, data and operational requirements have developed over time, and standard software may not always support the way your teams need to work. Phoenix Creative Hub helps UK businesses plan custom software that addresses specific requirements and can adapt as those requirements change.
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
                                            View Capabilities
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
                                        <span>Zero Outsourcing</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#9ACD32]" />
                                        <span>London, UK Based Team</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#9ACD32]" />
                                        <span>Full Codebase Ownership</span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Interactive Card / Diagram */}
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
                                                    <Laptop className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-white">Custom Engineering Pod</div>
                                                    <div className="text-[11px] text-slate-400">UK Direct Communication</div>
                                                </div>
                                            </div>
                                            <span className="text-[11px] font-mono text-[#9ACD32] bg-[#9ACD32]/10 border border-[#9ACD32]/20 px-2.5 py-1 rounded-full">
                                                Active
                                            </span>
                                        </div>

                                        <div className="space-y-3">
                                            {[
                                                { label: "Workflow Analysis", status: "Business-driven" },
                                                { label: "Architecture", status: "Scalable Microservices" },
                                                { label: "Integration", status: "Secure REST/GraphQL APIs" },
                                                { label: "IP Ownership", status: "100% Client Owned" }
                                            ].map((row, idx) => (
                                                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 text-xs">
                                                    <span className="text-slate-300 font-medium">{row.label}</span>
                                                    <span className="text-[#9ACD32] font-semibold">{row.status}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-2 border-t border-white/10 text-xs text-slate-400 leading-relaxed">
                                            Tailored systems designed around workflows, permissions, and business rules without forced generic compromises.
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 2. BESPOKE SOFTWARE SHAPED AROUND YOUR REQUIREMENTS */}
                <section className="py-20 bg-white border-b border-slate-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#5a8014] bg-[#9ACD32]/15 border border-[#9ACD32]/30 px-4 py-1.5 rounded-full">
                            Strategic Alignment
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#0B2921] leading-tight">
                            Bespoke Software Shaped Around Your Requirements
                        </h2>
                        <div className="text-slate-600 text-lg leading-relaxed space-y-4 text-left sm:text-center">
                            <p>
                                Custom software development is the process of planning and building an application for a particular organisation, audience or business process. Rather than forcing your team to work around a fixed product, a bespoke solution can be designed around the workflows, permissions, information and tasks that matter to your operation.
                            </p>
                            <p className="text-base text-slate-500">
                                A tailored system may be appropriate when disconnected tools create duplicated work, spreadsheets have become difficult to manage, an existing platform cannot support a new process, or your business needs a digital product that is central to its service. The right answer is not always to build from scratch. We can discuss your current tools and help establish whether custom development, configuration or integration is the more suitable route.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. WHAT CAN CUSTOM SOFTWARE HELP YOU ACHIEVE? */}
                <section id="capabilities" className="py-24 bg-[#fbfdfa] border-b border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#5a8014] bg-[#9ACD32]/15 border border-[#9ACD32]/30 px-4 py-1.5 rounded-full">
                                Practical Outcomes
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-[#0B2921]">
                                What Can Custom Software Help You Achieve?
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto text-base">
                                Purpose-built systems address operational challenges directly, generating lasting efficiency and control.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: Layers,
                                    title: "Bring business processes into one place",
                                    desc: "Where teams rely on separate tools or manual handovers, a purpose-built application can help organise information and make key tasks easier to follow. The features should be based on real user needs and clearly defined business rules."
                                },
                                {
                                    icon: GitMerge,
                                    title: "Connect systems and reduce repeated data entry",
                                    desc: "Integration can help information move between systems, reducing the need to enter the same details more than once. The available approach depends on the systems involved, their APIs, data quality, access permissions and security requirements."
                                },
                                {
                                    icon: Target,
                                    title: "Support a distinct service or product",
                                    desc: "If your business model depends on a particular customer journey, portal or operational tool, custom software can provide more control over how that experience works. We can help translate the idea into requirements and a delivery plan."
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Plan for future change",
                                    desc: "A useful solution should account for likely changes in users, data, features and workloads. We consider maintainability and future requirements during planning, rather than treating launch as the only milestone."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-[#9ACD32] hover:shadow-[0_20px_50px_rgba(11,41,33,0.06)] transition-all flex flex-col justify-between">
                                    <div>
                                        <div className="w-12 h-12 rounded-2xl bg-[#0B2921]/5 text-[#0B2921] flex items-center justify-center mb-6">
                                            <item.icon className="w-6 h-6 text-[#5a8014]" />
                                        </div>
                                        <h3 className="font-display font-bold text-lg text-[#0B2921] mb-3 leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. OUR CUSTOM SOFTWARE DEVELOPMENT SERVICES */}
                <section className="py-24 bg-white border-b border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#5a8014] bg-[#9ACD32]/15 border border-[#9ACD32]/30 px-4 py-1.5 rounded-full">
                                Service Areas
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-[#0B2921]">
                                Our Custom Software Development Services
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto text-base">
                                From new digital platforms to improving established applications, our services cover every phase of delivery.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    icon: Laptop,
                                    title: "Business application development",
                                    desc: "Applications can be designed to support internal operations, customer-facing services, partner workflows or specialist business requirements. We begin by understanding who will use the system and what they need to accomplish.",
                                    points: ["Role-based access & permissions", "Data integrity & compliance", "Intuitive desktop & mobile interfaces"]
                                },
                                {
                                    icon: Network,
                                    title: "Workflow and process solutions",
                                    desc: "Where manual processes create delays or make it difficult to track work, software can help standardise steps, capture information and give teams clearer visibility. The scope should be based on the process, not a predetermined feature list.",
                                    points: ["Task routing and tracking", "Elimination of spreadsheet bottlenecks", "Real-time management reporting"]
                                },
                                {
                                    icon: Database,
                                    title: "System integration",
                                    desc: "We can assess requirements for connecting business applications and data sources. Integration planning considers available interfaces, data mapping, error handling, security and ownership of information.",
                                    points: ["Secure REST & GraphQL APIs", "Legacy software connectivity", "Third-party payment & ERP links"]
                                },
                                {
                                    icon: RefreshCw,
                                    title: "Existing software improvement",
                                    desc: "If you already have a system that needs new functionality, improved usability or a more maintainable structure, we can discuss the current platform and the changes required. An assessment helps identify dependencies and risks before work is scoped.",
                                    points: ["Codebase audits & modernization", "Performance & security hardening", "UX refactoring and feature additions"]
                                }
                            ].map((card, idx) => (
                                <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-[#9ACD32]/40 transition-all flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-2xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center">
                                                <card.icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="font-display font-bold text-xl text-[#0B2921]">
                                                {card.title}
                                            </h3>
                                        </div>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                            {card.desc}
                                        </p>
                                        <div className="space-y-2 pt-4 border-t border-slate-200/60">
                                            {card.points.map((pt, pIdx) => (
                                                <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#9ACD32]" />
                                                    <span>{pt}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. A CONSIDERED APPROACH TO BESPOKE SOFTWARE DEVELOPMENT */}
                <section className="py-24 bg-[#fbfdfa] border-b border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#5a8014] bg-[#9ACD32]/15 border border-[#9ACD32]/30 px-4 py-1.5 rounded-full">
                                Delivery Methodology
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-[#0B2921]">
                                A Considered Approach to Bespoke Software Development
                            </h2>
                            <p className="text-slate-600 max-w-3xl mx-auto text-base">
                                We start with discovery: the business problem, users, current processes, existing systems and desired outcomes. From there, requirements can be prioritised into essential features and later improvements. The proposed scope, delivery stages and review points should be agreed before development begins.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    step: "01",
                                    title: "Requirements and planning",
                                    desc: "Define user needs, workflows, permissions, data requirements, integrations and acceptance criteria. This creates a shared reference for decisions throughout the project."
                                },
                                {
                                    step: "02",
                                    title: "Design and development",
                                    desc: "Shape the application around the agreed requirements. Design and build decisions should balance usability, performance, security and maintainability."
                                },
                                {
                                    step: "03",
                                    title: "Testing and launch preparation",
                                    desc: "Review the solution against agreed requirements, address identified issues and plan the transition into use. Testing needs vary according to the application and its risk profile."
                                },
                                {
                                    step: "04",
                                    title: "Ongoing improvement",
                                    desc: "After launch, feedback and changing business needs may lead to refinements, new features or integration work. Support arrangements should be defined according to the project."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-[#9ACD32] transition-all flex flex-col justify-between">
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

                {/* 6. IS CUSTOM SOFTWARE RIGHT FOR YOUR BUSINESS? */}
                <section className="py-20 bg-white border-b border-slate-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 space-y-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-[#9ACD32]/10 rounded-full blur-3xl pointer-events-none" />
                            <span className="text-xs font-bold uppercase tracking-widest text-[#9ACD32] bg-[#9ACD32]/20 border border-[#9ACD32]/30 px-3.5 py-1.5 rounded-full inline-block">
                                Honest Fit Assessment
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight">
                                Is Custom Software Right for Your Business?
                            </h2>
                            <p className="text-slate-300 leading-relaxed text-base">
                                A bespoke solution may be worth exploring if existing products cannot support an important workflow, if manual work is affecting service or reporting, or if a digital product is part of your competitive offer.
                            </p>
                            <p className="text-slate-300 leading-relaxed text-base">
                                It may be less suitable when a standard product already meets the need at a lower total cost. We encourage an honest discussion about fit, scope and alternatives before any code is written.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 7. CUSTOM SOFTWARE DEVELOPMENT FOR UK BUSINESSES */}
                <section className="py-20 bg-[#fbfdfa] border-b border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-8 space-y-4">
                                <span className="inline-flex items-center gap-2 bg-[#9ACD32]/15 border border-[#9ACD32]/30 text-[#5a8014] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                                    UK-Focused Engineering
                                </span>
                                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#0B2921]">
                                    Custom Software Development for UK Businesses
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
                                    We welcome project enquiries from <span className="text-[#0B2921] font-bold">London</span>, <span className="text-[#0B2921] font-bold">Manchester</span>, <span className="text-[#0B2921] font-bold">Birmingham</span> and other parts of the UK. Whether you are a start-up validating a product idea, an SME improving internal processes or a larger organisation reviewing legacy systems, the first step is a clear conversation about your requirements.
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
                                Guidance on planning, estimating and delivering bespoke software applications in the UK.
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

                {/* 9. DISCUSS YOUR SOFTWARE PROJECT (CTA) */}
                <section className="py-24 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1A1A1A] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(154,205,50,0.15),transparent_70%)] pointer-events-none" />

                    <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
                        <span className="inline-flex items-center gap-2 bg-[#9ACD32]/20 border border-[#9ACD32]/30 text-[#9ACD32] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                            Get Started
                        </span>
                        <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
                            Discuss Your Software Project
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
                            Tell us what is not working today, what you want the software to do and who will use it. If you have an existing specification, process diagram or example system, include it with your enquiry. If the idea is still taking shape, we can start with the business problem.
                        </p>
                        <p className="text-slate-400 text-sm max-w-xl mx-auto">
                            Request a custom software consultation. Share your requirements with Phoenix Creative Hub and arrange a conversation about the right approach for your business.
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
