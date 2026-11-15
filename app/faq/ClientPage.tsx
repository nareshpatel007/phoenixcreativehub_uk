"use client";

import React, { useState } from "react";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import {
    HelpCircle, ChevronDown, Search, ArrowRight, MessageSquare,
    Settings, ShieldAlert, Cpu, Clock, User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface FAQItem {
    id: string;
    category: "services" | "process" | "pricing" | "general";
    question: string;
    answer: string;
}

const FAQS_DATA: FAQItem[] = [
    {
        id: "services-offered",
        category: "services",
        question: "What services does Phoenix Creative Hub UK offer?",
        answer: "We specialize in custom software development, web and mobile applications, AI automation & machine learning, CRM & ERP systems, cloud infrastructure & DevOps, and digital transformation services for businesses of all sizes.",
    },
    {
        id: "tech-stack",
        category: "services",
        question: "What technology stack do you use?",
        answer: "We build modern applications using React, Next.js, Node.js, TypeScript, and cloud platforms like AWS and GCP. Our strictly typed codebases ensure security, scalability, and long-term maintainability.",
    },
    {
        id: "project-timeline",
        category: "process",
        question: "How long does a typical software project take?",
        answer: "Project timelines vary based on complexity. MVP prototypes typically take 4-8 weeks, while full-scale enterprise systems can range from 3-6 months. We provide detailed scoping and timelines during our initial consultation.",
    },
    {
        id: "consultation-process",
        category: "process",
        question: "How does the consultation process work?",
        answer: "After you submit an inquiry, our technical team reviews your requirements within 24 hours. We then schedule a scoping session to discuss architecture, database design, and provide a detailed proposal with timelines and costs.",
    },
    {
        id: "pricing-model",
        category: "pricing",
        question: "What is your pricing model?",
        answer: "We offer flexible engagement models including fixed-price projects for well-defined scopes and time & material pricing for agile development. All pricing is transparent with no hidden costs, and we provide detailed breakdowns upfront.",
    },
    {
        id: "support-maintenance",
        category: "services",
        question: "Do you provide ongoing support and maintenance?",
        answer: "Yes, we offer comprehensive post-launch support including bug fixes, security updates, performance monitoring, and feature enhancements. We can provide SLA-backed support agreements for mission-critical systems.",
    },
    {
        id: "code-ownership",
        category: "general",
        question: "Who owns the code after project completion?",
        answer: "You retain full ownership of all source code, databases, and intellectual property developed for your project. We provide complete code repositories and documentation upon project delivery.",
    },
    {
        id: "remote-work",
        category: "process",
        question: "Do you work with remote clients?",
        answer: "Absolutely. We work with clients globally from our headquarters in London, Gujarat. Our communication workflows are designed for seamless remote collaboration using modern project management tools.",
    }
];

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState<"all" | "services" | "process" | "pricing" | "general">("all");
    const [expandedId, setExpandedId] = useState<string | null>("services-offered"); // default first item open

    const toggleFAQ = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const filteredFAQs = FAQS_DATA.filter((faq) => {
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const categories = [
        { id: "all", label: "All Questions", icon: HelpCircle },
        { id: "services", label: "Our Services", icon: Cpu },
        { id: "process", label: "Process & Timeline", icon: Clock },
        { id: "pricing", label: "Pricing & Models", icon: Settings },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 pt-20 md:pt-22">
            <ServiceHeader
                title={<>Frequently Asked <span className="text-[#9ACD32]">Questions</span></>}
                subtitle="Find answers to common questions about our software development services, process, pricing, and how we work with clients."
                badge="FAQ Guide"
                icon={<User className="w-3.5 h-3.5" />}
            />

            <section className="py-12 md:py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-12">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full mb-3 inline-block">
                            Phoenix Creative Hub UK
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-[#111111] uppercase tracking-wider mt-2">
                            Frequently Asked Questions About <span className="text-primary">Software Development</span>
                        </h2>
                        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                            Everything you need to know about working with Phoenix Creative Hub UK, from our development process to pricing and support.
                        </p>
                    </div>

                    {/* Search & Category Filter Controls */}
                    <div className="space-y-6 mb-10">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <Input
                                type="text"
                                placeholder="Search FAQs by keywords..."
                                className="pl-12 pr-4 h-12 bg-white border-slate-100 rounded-2xl shadow-sm focus:ring-primary focus:border-primary text-slate-600 font-medium"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center">
                            {categories.map((cat) => {
                                const Icon = cat.icon;
                                const isActive = activeCategory === cat.id;
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id as any)}
                                        className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all border ${isActive
                                            ? "bg-primary border-primary text-white shadow-md shadow-primary/20"
                                            : "bg-white border-slate-100 text-slate-600 hover:border-slate-200 hover:bg-slate-50"
                                            }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span>{cat.label}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* FAQ Accordion List */}
                    <div className="space-y-4">
                        {filteredFAQs.length > 0 ? (
                            filteredFAQs.map((faq) => {
                                const isOpen = expandedId === faq.id;
                                return (
                                    <div
                                        key={faq.id}
                                        className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
                                    >
                                        <button
                                            onClick={() => toggleFAQ(faq.id)}
                                            className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-[#111111] hover:text-primary transition-colors gap-4"
                                        >
                                            <span className="text-sm md:text-base lg:text-lg">{faq.question}</span>
                                            <ChevronDown
                                                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""
                                                    }`}
                                            />
                                        </button>
                                        <div
                                            className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[300px] border-t border-slate-50" : "max-h-0"
                                                }`}
                                        >
                                            <div className="p-5 text-sm text-slate-600 leading-relaxed font-medium bg-slate-50/30">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200">
                                <ShieldAlert className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                                <h4 className="font-display font-bold text-[#111111] text-lg">No FAQs found</h4>
                                <p className="text-sm text-muted-foreground mt-1">Try clearing your filters or changing your search terms.</p>
                            </div>
                        )}
                    </div>

                    {/* Bottom CTA Card */}
                    <div className="bg-[#111111] text-white rounded-3xl p-6 md:p-8 shadow-xl mt-10 md:mt-14 relative overflow-hidden text-center md:text-left md:flex items-center justify-between gap-6">
                        <div className="space-y-2 relative z-10 max-w-lg">
                            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary">
                                <MessageSquare className="w-3.5 h-3.5" /> Support Center
                            </div>
                            <h3 className="font-display font-bold text-xl md:text-2xl">Still Have Questions?</h3>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                Can't find the answers you're looking for? Reach out to our dedicated support and engineering department.
                            </p>
                        </div>
                        <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 shrink-0 relative z-10 justify-center">
                            <Button asChild className="bg-[#9ACD32] hover:bg-[#9ACD32]/90 text-white font-bold shadow-lg shadow-[#9ACD32]/20 h-11">
                                <Link href="/contact">Contact Our Team <ArrowRight className="w-4 h-4 ml-2" /></Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
