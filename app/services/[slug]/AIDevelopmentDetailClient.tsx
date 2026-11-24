"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft, CheckCircle2, ChevronDown, Bot,
    Layers, Cpu, Database, Network, ArrowRight,
    Users, Target, Award, Check, TrendingUp, ShieldCheck,
    Compass, BarChart3, HelpCircle, Phone, Mail, MapPin,
    Sparkles, Workflow, MessageSquare, Binary, ShieldAlert
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
    service: any;
}

export default function AIDevelopmentDetailClient({ service }: Props) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            q: "What is the difference between AI and automation?",
            a: "Automation follows defined rules or workflows to complete tasks. AI can interpret information, recognise patterns or generate outputs. Some projects combine both, while others are better served by straightforward automation."
        },
        {
            q: "Can AI automate our existing business processes?",
            a: "Potentially, but each process needs to be assessed. The right approach depends on the steps involved, data quality, system access, risk and the level of human oversight required."
        },
        {
            q: "What is an AI agent?",
            a: "An AI agent is a system designed to pursue a defined task using a model and, where permitted, connected tools or data. Its permissions, boundaries, monitoring and human approval requirements should be carefully designed."
        },
        {
            q: "Can AI connect to our CRM or ERP system?",
            a: "Integration may be possible if the platform supports suitable interfaces and the necessary permissions. Data protection, access control, auditability and error handling should be part of the design."
        },
        {
            q: "How do we measure the value of an AI project?",
            a: "Set a baseline before implementation. Depending on the use case, measures might include time saved, response time, task completion, error rates, customer experience or the proportion of work requiring human intervention."
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
                                        Practical AI & Automation UK
                                    </div>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-[1.1] tracking-tight">
                                        AI Development and Automation for <span className="text-[#9ACD32]">Practical Business Outcomes</span>
                                    </h1>
                                    <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                                        Artificial intelligence can help organisations handle information, support customers and improve repetitive processes, but the value comes from solving the right problem. Phoenix Creative Hub works with businesses to explore AI development and automation opportunities, starting with the task, users and outcome rather than the technology alone.
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
                                            Book an AI Consultation <ArrowRight className="w-5 h-5 ml-1" />
                                        </Link>
                                    </Button>
                                    <Button asChild size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white font-semibold h-13 px-8 text-base rounded-full transition-all backdrop-blur-sm">
                                        <Link href="#capabilities" className="flex items-center gap-2">
                                            Explore Capabilities
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
                                        <span>Outcome-Driven AI</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#9ACD32]" />
                                        <span>Responsible Governance</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#9ACD32]" />
                                        <span>CRM & ERP Connectivity</span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Interactive AI Pod Mockup */}
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
                                                    <Bot className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-white">Applied Intelligence Pod</div>
                                                    <div className="text-[11px] text-slate-400">UK Direct Engineering</div>
                                                </div>
                                            </div>
                                            <span className="text-[11px] font-mono text-[#9ACD32] bg-[#9ACD32]/10 border border-[#9ACD32]/20 px-2.5 py-1 rounded-full">
                                                Active
                                            </span>
                                        </div>

                                        <div className="space-y-3">
                                            {[
                                                { label: "Core Foundation", status: "Secure Enterprise Models" },
                                                { label: "Human Oversight", status: "Approval Guardrails Built-in" },
                                                { label: "Data Privacy", status: "UK GDPR & Strict Governance" },
                                                { label: "Process Integration", status: "Live System Synchronization" }
                                            ].map((row, idx) => (
                                                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 text-xs">
                                                    <span className="text-slate-300 font-medium">{row.label}</span>
                                                    <span className="text-[#9ACD32] font-semibold">{row.status}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-2 border-t border-white/10 text-xs text-slate-400 leading-relaxed">
                                            Starting from defined operational problems rather than adding complex AI for its own sake.
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 2. FIND THE RIGHT USE FOR AI IN YOUR ORGANISATION */}
                <section className="py-20 bg-white border-b border-slate-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#5a8014] bg-[#9ACD32]/15 border border-[#9ACD32]/30 px-4 py-1.5 rounded-full">
                            Targeted Implementation
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#0B2921] leading-tight">
                            Find the Right Use for AI in Your Organisation
                        </h2>
                        <div className="text-slate-600 text-lg leading-relaxed space-y-4 text-left sm:text-center">
                            <p>
                                A useful AI project begins with a specific challenge. Perhaps employees spend too much time searching through documents, customer enquiries need better routing, or teams repeat a process that could be partially automated.
                            </p>
                            <p className="text-base text-slate-500">
                                We help clarify the use case, available data, expected benefit and the risks that need to be managed before a solution is scoped.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. AI DEVELOPMENT SERVICES (5 CARDS) */}
                <section id="capabilities" className="py-24 bg-[#fbfdfa] border-b border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#5a8014] bg-[#9ACD32]/15 border border-[#9ACD32]/30 px-4 py-1.5 rounded-full">
                                Service Offerings
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-[#0B2921]">
                                AI Development Services
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto text-base">
                                Purposeful AI capabilities designed to solve specific operational and communication challenges.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
                            {[
                                {
                                    icon: Cpu,
                                    title: "AI-powered business applications",
                                    desc: "AI capabilities can be incorporated into an application to support tasks such as classification, summarisation, information retrieval or decision support. The design should make clear what the system can and cannot do, and when a person needs to review the output."
                                },
                                {
                                    icon: Workflow,
                                    title: "AI workflow automation",
                                    desc: "Workflow automation can connect steps across business processes, reducing manual handovers and helping information reach the right people. AI may be useful where a workflow involves interpreting unstructured information, but simpler rules-based automation may be more reliable for predictable tasks."
                                },
                                {
                                    icon: Bot,
                                    title: "AI agents and assistants",
                                    desc: "An AI assistant or agent may help users find information, complete defined tasks or interact with connected systems. The scope must include permissions, approved actions, monitoring, human oversight and safeguards against incorrect or unauthorised activity."
                                },
                                {
                                    icon: MessageSquare,
                                    title: "AI chatbots and customer support",
                                    desc: "A chatbot can help answer common questions, guide users through information or route enquiries to the right team. It should be grounded in appropriate business information, make its limitations clear and provide a route to human support when needed."
                                },
                                {
                                    icon: Binary,
                                    title: "Machine learning solutions",
                                    desc: "Machine learning may be appropriate when a business has a well-defined prediction, classification or pattern-recognition problem and suitable data. Feasibility depends on data quality, volume, representativeness, governance and the consequences of an incorrect result."
                                }
                            ].map((card, idx) => (
                                <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-[#9ACD32] hover:shadow-[0_20px_50px_rgba(11,41,33,0.06)] transition-all flex flex-col justify-between">
                                    <div>
                                        <div className="w-12 h-12 rounded-2xl bg-[#0B2921]/5 text-[#0B2921] flex items-center justify-center mb-6">
                                            <card.icon className="w-6 h-6 text-[#5a8014]" />
                                        </div>
                                        <h3 className="font-display font-bold text-lg text-[#0B2921] mb-3 leading-snug">
                                            {card.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. CONNECT AI WITH THE SYSTEMS YOUR TEAMS ALREADY USE */}
                <section className="py-20 bg-white border-b border-slate-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#5a8014] bg-[#9ACD32]/15 border border-[#9ACD32]/30 px-4 py-1.5 rounded-full">
                            System Integration
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#0B2921] leading-tight">
                            Connect AI with the Systems Your Teams Already Use
                        </h2>
                        <div className="text-slate-600 text-lg leading-relaxed space-y-4 text-left sm:text-center">
                            <p>
                                AI projects often need to work alongside existing websites, CRM platforms, ERP systems or internal data sources. Integration should be planned around data access, permissions, security, reliability and the way information is updated.
                            </p>
                            <p className="text-base text-slate-500">
                                We assess the systems involved before suggesting an integration approach, ensuring seamless synchronization without exposing confidential records.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. A RESPONSIBLE APPROACH TO AI IMPLEMENTATION */}
                <section className="py-24 bg-[#fbfdfa] border-b border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#5a8014] bg-[#9ACD32]/15 border border-[#9ACD32]/30 px-4 py-1.5 rounded-full">
                                Delivery Methodology
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-[#0B2921]">
                                A Responsible Approach to AI Implementation
                            </h2>
                            <p className="text-slate-600 max-w-3xl mx-auto text-base">
                                Not every process should be automated, and not every AI output should be trusted without review. Project planning should consider privacy, security, data retention, bias, accuracy, explainability and human accountability.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    step: "01",
                                    title: "Define the use case and success measures",
                                    desc: "Identify the task, users, current effort, desired improvement and acceptable error levels. Agree how the solution will be evaluated before development begins."
                                },
                                {
                                    step: "02",
                                    title: "Assess data and integration needs",
                                    desc: "Review the information available, its quality and permissions, and the systems the solution needs to access. This helps establish technical feasibility and identify dependencies."
                                },
                                {
                                    step: "03",
                                    title: "Prototype and validate",
                                    desc: "Where appropriate, test the proposed approach against representative scenarios before committing to a wider rollout. Evaluation should include edge cases and human review."
                                },
                                {
                                    step: "04",
                                    title: "Deploy with oversight",
                                    desc: "Plan access controls, monitoring, escalation routes and ongoing evaluation. The solution should have an owner and a process for responding when it produces an unexpected result."
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

                {/* 6. IS AI AUTOMATION RIGHT FOR YOUR BUSINESS? */}
                <section className="py-20 bg-white border-b border-slate-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 space-y-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-[#9ACD32]/10 rounded-full blur-3xl pointer-events-none" />
                            <span className="text-xs font-bold uppercase tracking-widest text-[#9ACD32] bg-[#9ACD32]/20 border border-[#9ACD32]/30 px-3.5 py-1.5 rounded-full inline-block">
                                Objective Evaluation
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight">
                                Is AI Automation Right for Your Business?
                            </h2>
                            <p className="text-slate-300 leading-relaxed text-base">
                                AI may be worth exploring when a task involves large amounts of information, repeated language-based work or patterns that are difficult to manage manually.
                            </p>
                            <p className="text-slate-300 leading-relaxed text-base">
                                If the process is simple and predictable, conventional automation may be a better fit. A discovery discussion can help compare options and avoid unnecessary complexity.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 7. AI DEVELOPMENT FOR UK BUSINESSES */}
                <section className="py-20 bg-[#fbfdfa] border-b border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-8 space-y-4">
                                <span className="inline-flex items-center gap-2 bg-[#9ACD32]/15 border border-[#9ACD32]/30 text-[#5a8014] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                                    UK-Wide Collaboration
                                </span>
                                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#0B2921]">
                                    AI Development for UK Businesses
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
                                    Phoenix Creative Hub welcomes AI and automation enquiries from organisations in <span className="text-[#0B2921] font-bold">London</span>, <span className="text-[#0B2921] font-bold">Manchester</span>, <span className="text-[#0B2921] font-bold">Birmingham</span> and across the UK. Tell us about the process you want to improve, the systems involved and the outcome you would like to achieve.
                                </p>
                            </div>
                            <div className="lg:col-span-4 flex lg:justify-end">
                                <Button asChild size="lg" className="bg-[#0B2921] hover:bg-[#173C30] text-[#9ACD32] font-bold px-8 h-13 rounded-full shadow-lg">
                                    <Link href="/contact" className="flex items-center gap-2">
                                        Discuss Your Process <ArrowRight className="w-5 h-5 ml-1" />
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
                                Common questions about AI capabilities, process automation, agents and enterprise system links.
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

                {/* 9. DISCUSS AN AI OR AUTOMATION PROJECT (CTA) */}
                <section className="py-24 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1A1A1A] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(154,205,50,0.15),transparent_70%)] pointer-events-none" />

                    <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
                        <span className="inline-flex items-center gap-2 bg-[#9ACD32]/20 border border-[#9ACD32]/30 text-[#9ACD32] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                            Get Started
                        </span>
                        <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
                            Discuss an AI or Automation Project
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
                            You do not need to arrive with a technical solution in mind. Start with the task that takes too long, creates friction or affects the customer experience. We can discuss whether AI, workflow automation or a different approach is most suitable.
                        </p>
                        <p className="text-slate-400 text-sm max-w-xl mx-auto">
                            Book an AI project consultation. Talk to Phoenix Creative Hub about your business challenge, potential use case and practical next steps.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button asChild size="lg" className="bg-[#9ACD32] hover:bg-[#9ACD32]/90 text-[#0B2921] font-bold h-13 px-8 rounded-full shadow-[0_0_25px_rgba(154,205,50,0.35)]">
                                <Link href="/contact" className="flex items-center gap-2">
                                    Book an AI Consultation <ArrowRight className="w-5 h-5 ml-1" />
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
