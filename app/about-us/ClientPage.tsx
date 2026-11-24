"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Globe, Target, Zap, CheckCircle2,
    ArrowRight, Users, Clock, Sparkles,
    Cpu, Code2, Shield, Rocket, ChevronDown,
    Building2, MapPin, Search, Workflow,
    Laptop, Layers, ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const C = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

export default function About() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs = [
        {
            q: "What does Phoenix Creative Hub do?",
            a: "Phoenix Creative Hub provides custom software development, web development, mobile app development, AI development and automation, CRM and ERP development, and SEO services."
        },
        {
            q: "Which businesses do you work with?",
            a: "We welcome enquiries from start-ups, SMEs and larger organisations. Project suitability depends on the requirements, scope and delivery needs."
        },
        {
            q: "Where does Phoenix Creative Hub work?",
            a: "The priority markets are London, Manchester and Birmingham, with enquiries welcomed from across the UK. Contact us to discuss your location and working requirements."
        },
        {
            q: "Can you support both development and SEO?",
            a: "Yes. Software and digital growth are both part of the stated service offering. Whether they should be combined in one engagement depends on your objectives and project scope."
        },
        {
            q: "How can I discuss a project?",
            a: "Use the contact page to share your requirements and preferred way to be contacted. You can outline an early-stage idea or provide a more detailed brief."
        }
    ];

    const helpAreas = [
        {
            icon: Laptop,
            title: "Build and improve digital products",
            desc: "From bespoke business software to websites, web applications and mobile apps, we help shape digital projects around their users, features and intended outcomes.",
            links: [
                { title: "Custom Software", href: "/services/custom-software-development" },
                { title: "Web Development", href: "/services/web-development" },
                { title: "Mobile Apps", href: "/services/mobile-app-development" },
            ]
        },
        {
            icon: Workflow,
            title: "Make better use of connected systems and automation",
            desc: "AI, workflow automation, CRM and ERP projects can help organisations review how information and tasks move through the business. The right approach depends on process requirements, data, existing systems and the level of control needed.",
            links: [
                { title: "AI & Automation", href: "/services/ai-development-automation" },
                { title: "CRM Development", href: "/services/crm-development" },
                { title: "ERP Development", href: "/services/erp-development" },
            ]
        },
        {
            icon: Search,
            title: "Improve visibility through search",
            desc: "Our SEO service focuses on helping relevant audiences find a business through useful pages, sound technical foundations and content aligned with search intent. The objective is not traffic in isolation, but visibility that supports meaningful enquiries.",
            links: [
                { title: "SEO Services UK", href: "/services/seo-services" }
            ]
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
                                <Sparkles className="w-3.5 h-3.5" />
                                Software Development Company London & UK
                            </span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
                        >
                            About <span className="text-[#9ACD32]">Phoenix Creative Hub</span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ delay: 0.2 }}
                            className="text-base sm:text-lg text-slate-300 leading-relaxed font-light"
                        >
                            Phoenix Creative Hub helps businesses make progress with technology and digital growth. Our work brings together software development and search-focused services, giving organisations a place to discuss the digital challenges they want to solve and the opportunities they want to pursue.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4 pt-2"
                        >
                            <Button asChild size="lg" className="bg-[#9ACD32] hover:bg-[#86b528] text-slate-950 font-bold px-8 shadow-xl shadow-[#9ACD32]/20 rounded-xl h-13">
                                <Link href="/contact">Discuss Your Project</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white rounded-xl h-13">
                                <Link href="/services">View Services</Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. STATS BAR */}
            <section className="py-12 bg-white border-y border-slate-200">
                <div className={C}>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Clock, value: "8+", label: "Years Experience" },
                            { icon: Rocket, value: "100+", label: "Projects Delivered" },
                            { icon: Cpu, value: "AI & Full-Stack", label: "Engineering Scope" },
                            { icon: MapPin, value: "London", label: "Registered In UK" },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="bg-slate-50 rounded-2xl border border-slate-100 p-6 text-center"
                            >
                                <div className="w-10 h-10 bg-[#0B2921]/10 rounded-xl flex items-center justify-center mx-auto mb-3 text-[#0B2921]">
                                    <stat.icon className="w-5 h-5 text-[#9ACD32]" />
                                </div>
                                <div className="text-2xl sm:text-3xl font-extrabold text-[#0B2921] mb-1">{stat.value}</div>
                                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. TECHNOLOGY AND DIGITAL GROWTH CONNECTED TO BUSINESS NEEDS */}
            <section className="py-20 bg-white border-b border-slate-200">
                <div className={C}>
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#0B2921]/10 text-[#0B2921]">
                                <Target className="w-3.5 h-3.5 text-[#9ACD32]" />
                                Purpose-Driven Execution
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2921] tracking-tight">
                                Technology and digital growth, connected to business needs
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-base">
                                A new application, a more effective website or a stronger presence in search should serve a clear purpose. It may help a team work more efficiently, make a service easier to access, improve customer experience or bring the business in front of people actively looking for what it offers. We believe the work should begin with that purpose.
                            </p>
                            <p className="text-slate-600 leading-relaxed text-base">
                                Our service areas include custom software development, web development, mobile app development, AI development and automation, CRM and ERP development, and SEO services. Each requires a different set of questions and a considered approach. We aim to understand the business context before discussing the solution.
                            </p>
                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                                <p className="font-bold text-[#0B2921]">Official UK Registration:</p>
                                <p>PHOENIX CREATIVE HUB UK LTD is incorporated in England & Wales (Company Number: 17524969), registered office at Suite RA01, 195–197 Wood Street, London, E17 3NU, United Kingdom.</p>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-slate-100 relative border border-slate-200">
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                    alt="Phoenix Creative Hub UK Engineering Team"
                                    fill
                                    draggable={false}
                                    sizes="(max-width: 768px) 100vw, 600px"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. WHAT WE HELP BUSINESSES WORK ON */}
            <section className="py-20 bg-slate-50 border-b border-slate-200">
                <div className={C}>
                    <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                        <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Our Scope</span>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#0B2921] tracking-tight">
                            What we help businesses work on
                        </h2>
                        <p className="text-slate-600 text-base">
                            We unite core engineering disciplines with search-led customer acquisition to deliver measurable business impact.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {helpAreas.map((area, idx) => {
                            const IconComp = area.icon;
                            return (
                                <div 
                                    key={idx}
                                    className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-[#9ACD32] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                                >
                                    <div className="space-y-4">
                                        <div className="w-12 h-12 rounded-xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center">
                                            <IconComp className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#0B2921]">{area.title}</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">{area.desc}</p>
                                    </div>
                                    <div className="pt-6 border-t border-slate-100 mt-6 space-y-2">
                                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Explore Services:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {area.links.map((link, lIdx) => (
                                                <Link 
                                                    key={lIdx} 
                                                    href={link.href}
                                                    className="inline-flex items-center gap-1 text-xs font-medium text-[#0B2921] hover:text-[#9ACD32] bg-slate-50 hover:bg-slate-100 px-2.5 py-1 rounded-md transition-colors"
                                                >
                                                    <span>{link.title}</span>
                                                    <ArrowRight className="w-3 h-3" />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 5. A COLLABORATIVE WAY OF WORKING & SUPPORTING BUSINESSES ACROSS THE UK */}
            <section className="py-20 bg-white border-b border-slate-200">
                <div className={C}>
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Collaborative working */}
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
                            <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Partnership</span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2921] tracking-tight">
                                A collaborative way of working
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-base">
                                Projects are easier to manage when expectations are clear. We encourage open discussion about objectives, scope, constraints, responsibilities and priorities. The details of each engagement are agreed according to the work involved, with review points to help keep decisions aligned.
                            </p>
                            <div className="space-y-3 pt-2">
                                {[
                                    { title: "Direct Communication", desc: "Speak directly with developers, systems architects, and technical leads." },
                                    { title: "Clear Milestones", desc: "Iterative sprints with transparent sign-off stages and deliverables." },
                                    { title: "Flexible Engagements", desc: "From targeted discovery audits to full end-to-end agile delivery." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#9ACD32] shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-slate-900 text-sm">{item.title}</p>
                                            <p className="text-xs text-slate-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* UK Regional Focus */}
                        <div className="p-8 rounded-2xl bg-[#0B2921] text-white space-y-6 relative overflow-hidden">
                            <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Nationwide Coverage</span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                Supporting businesses across the UK
                            </h2>
                            <p className="text-slate-300 leading-relaxed text-base">
                                Phoenix Creative Hub's priority markets include London, Manchester and Birmingham, alongside businesses elsewhere in the UK. We welcome conversations with start-ups, small and medium-sized businesses and larger organisations. The suitability of an engagement depends on the project requirements and the support needed.
                            </p>
                            <div className="grid grid-cols-3 gap-3 pt-2">
                                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                                    <p className="font-bold text-white text-sm">London</p>
                                    <p className="text-xs text-slate-400">RA01, Wood St, E17</p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                                    <p className="font-bold text-white text-sm">Manchester</p>
                                    <p className="text-xs text-slate-400">North West Region</p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                                    <p className="font-bold text-white text-sm">Birmingham</p>
                                    <p className="text-xs text-slate-400">Midlands Hub</p>
                                </div>
                            </div>
                            <p className="text-xs text-slate-400 pt-2">
                                Working seamlessly across UK timezones with local legal accountability and data compliance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FAQ SECTION */}
            <section className="py-20 bg-slate-50 border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-14">
                        <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Common Questions</span>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#0B2921] tracking-tight">
                            Frequently asked questions
                        </h2>
                        <p className="text-slate-600 text-sm">
                            Learn more about our services, location, suitability, and getting started.
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

            {/* 7. CTA SECTION: LET'S START WITH THE CHALLENGE */}
            <section className="py-20 bg-gradient-to-br from-[#0B2921] to-[#12382D] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#9ACD32] rounded-full blur-[120px]" />
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#9ACD32] rounded-full blur-[120px]" />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-[#9ACD32]">
                        <Sparkles className="w-3.5 h-3.5" />
                        Get in Touch
                    </span>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                        Let's start with the challenge
                    </h2>

                    <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        You may be comparing development options, reviewing an existing system, planning an AI use case or trying to improve organic enquiries. Tell us what you want to change and what a successful outcome would look like. We can then discuss whether our services are a suitable fit.
                    </p>

                    <p className="text-xs sm:text-sm text-[#9ACD32] font-medium max-w-xl mx-auto">
                        Get in touch with Phoenix Creative Hub to discuss your business or project requirements.
                    </p>

                    <div className="pt-4 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg" className="bg-[#9ACD32] hover:bg-[#86b528] text-slate-950 font-bold px-8 shadow-xl shadow-[#9ACD32]/20 rounded-xl h-14">
                            <Link href="/contact">Get in Touch</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white rounded-xl h-14">
                            <Link href="/services">Browse All Services</Link>
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
}
