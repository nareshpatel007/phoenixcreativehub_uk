"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
    CheckCircle2, ArrowRight, Clock, Shield, Zap, Users, TrendingUp, BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceHeader } from "@/components/services/ServiceHeader";

const C = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function InView({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
            {children}
        </motion.div>
    );
}

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is custom software development?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Custom software development is the process of designing, creating, deploying, and maintaining software specifically tailored to meet the unique needs of a business or organization, rather than using off-the-shelf solutions."
            }
        },
        {
            "@type": "Question",
            "name": "How much does custom software development cost?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Custom software development costs typically range from ₹1,00,000 to ₹3,00,000+ depending on complexity, features, technology stack, and development timeline. Simple applications start around ₹1,00,000, while enterprise solutions can exceed ₹3,00,000."
            }
        },
        {
            "@type": "Question",
            "name": "How long does custom software development take?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most custom software projects take 3-6 months from discovery to launch. Simple applications can be completed in 2-3 months, while complex enterprise systems may require 6-12 months depending on scope and requirements."
            }
        },
        {
            "@type": "Question",
            "name": "What technologies are used in custom software development?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Modern custom software development uses technologies like React, Next.js, Node.js, TypeScript, Python, PostgreSQL, MongoDB, and cloud platforms like AWS or Google Cloud. The choice depends on project requirements, scalability needs, and performance goals."
            }
        },
        {
            "@type": "Question",
            "name": "Why choose custom software over off-the-shelf solutions?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Custom software offers competitive advantages through unique features, perfect alignment with business processes, scalability as you grow, integration with existing systems, and no licensing fees. Off-the-shelf solutions may require workarounds and limit your competitive differentiation."
            }
        }
    ]
};

export default function CustomSoftwareGuideClient() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 pt-20 md:pt-22">
            {/* Schema Script */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <ServiceHeader
                title={<>Complete Guide to <span className="text-[#9ACD32]">Custom Software</span><br />Development</>}
                subtitle="Everything you need to know about custom software development: process, costs, benefits, technologies, and how to choose the right partner for your project."
                badge="Comprehensive Guide"
                icon={<BookOpen className="w-3.5 h-3.5" />}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Guides", href: "/guides" },
                    { label: "Custom Software Development Guide" }
                ]}
            />

            {/* ── What is Custom Software Development ───────────────────── */}
            <section className="py-24 bg-white">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                What is Custom Software Development?
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed">
                                Custom software development is the process of designing, creating, deploying, and maintaining software specifically tailored to meet the unique needs of a business or organization. Unlike off-the-shelf solutions, custom software is built from scratch to address specific challenges, workflows, and requirements that generic software cannot solve.
                            </motion.p>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed">
                                Custom software can range from simple internal tools to complex enterprise systems, mobile applications, web platforms, and integrated software ecosystems. The key differentiator is that every feature and function is designed specifically for your business processes, goals, and user needs.
                            </motion.p>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {[
                                { icon: Zap, title: "Tailored Solutions", desc: "Built specifically for your business needs and workflows" },
                                { icon: Shield, title: "Competitive Advantage", desc: "Unique features that differentiate you from competitors" },
                                { icon: TrendingUp, title: "Scalable Growth", desc: "Grows with your business without limitations" }
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <item.icon className="w-8 h-8 text-[#9ACD32] mb-4" />
                                    <h3 className="font-bold text-[#111111] mb-2">{item.title}</h3>
                                    <p className="text-slate-600 text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── Custom Software Development Process ─────────────────── */}
            <section className="py-24 bg-slate-50">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                Custom Software Development Process
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed">
                                A successful custom software project follows a structured development process to ensure quality, meet deadlines, and deliver value. Here's the typical lifecycle:
                            </motion.p>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            {[
                                { step: 1, title: "Discovery & Planning", desc: "We analyze your business requirements, goals, and technical constraints. This includes stakeholder interviews, requirement gathering, and creating a detailed project roadmap." },
                                { step: 2, title: "Design & Prototyping", desc: "Our designers create wireframes, mockups, and interactive prototypes to visualize the user interface and experience before development begins." },
                                { step: 3, title: "Development", desc: "Our developers build your software using agile methodologies with regular sprints, code reviews, and continuous integration to ensure quality." },
                                { step: 4, title: "Testing & QA", desc: "Comprehensive testing including unit tests, integration tests, user acceptance testing, and performance testing to ensure reliability." },
                                { step: 5, title: "Deployment & Launch", desc: "We deploy your software to production environments, configure servers, and ensure smooth launch with minimal downtime." },
                                { step: 6, title: "Maintenance & Support", desc: "Ongoing support, bug fixes, updates, and feature enhancements to keep your software running optimally." }
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#9ACD32] text-white flex items-center justify-center font-bold text-lg shrink-0">
                                        {item.step}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-[#111111] text-lg mb-2">{item.title}</h3>
                                        <p className="text-slate-600">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── Cost Factors ─────────────────────────────────────────── */}
            <section className="py-24 bg-white">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                How Much Does Custom Software Development Cost?
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed">
                                Custom software development costs vary significantly based on project complexity, features, technology stack, and development team location. Here's a breakdown of typical cost ranges:
                            </motion.p>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
                            {[
                                { tier: "Simple Applications", price: "₹1,00,000 - ₹1,50,000", features: ["Basic features", "Single platform", "Standard UI", "Core functionality"] },
                                { tier: "Medium Complexity", price: "₹1,50,000 - ₹2,50,000", features: ["Advanced features", "Multiple integrations", "Custom design", "Database management"] },
                                { tier: "Enterprise Solutions", price: "₹2,50,000 - ₹5,00,000+", features: ["Complex architecture", "Multi-platform", "Advanced security", "Scalable infrastructure"] }
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h3 className="font-bold text-[#111111] mb-2">{item.tier}</h3>
                                    <div className="text-2xl font-display font-extrabold text-[#9ACD32] mb-4">{item.price}</div>
                                    <ul className="space-y-2">
                                        {item.features.map((feature, j) => (
                                            <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                                                <CheckCircle2 className="w-4 h-4 text-[#9ACD32] shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InView>

                    <InView>
                        <motion.div variants={fadeUp} className="max-w-4xl mx-auto bg-[#9ACD32]/10 border border-[#9ACD32]/20 rounded-2xl p-6">
                            <h3 className="font-bold text-[#111111] mb-3">Factors That Influence Cost:</h3>
                            <ul className="space-y-2 text-slate-700">
                                <li>• Project complexity and number of features</li>
                                <li>• Technology stack and third-party integrations</li>
                                <li>• Design requirements and customization level</li>
                                <li>• Development timeline and urgency</li>
                                <li>• Ongoing maintenance and support needs</li>
                            </ul>
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── Benefits ─────────────────────────────────────────────── */}
            <section className="py-24 bg-slate-50">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                Benefits of Custom Software Development
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed">
                                Investing in custom software development offers numerous advantages over off-the-shelf solutions:
                            </motion.p>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {[
                                { icon: CheckCircle2, title: "Perfect Fit", desc: "Designed specifically for your business processes and requirements" },
                                { icon: TrendingUp, title: "Scalability", desc: "Grows with your business without hitting limitations of pre-built solutions" },
                                { icon: Shield, title: "Competitive Advantage", desc: "Unique features that differentiate your business from competitors" },
                                { icon: Zap, title: "Integration", desc: "Seamlessly integrates with existing systems and workflows" },
                                { icon: Users, title: "Ownership", desc: "You own the code and can modify it as needed" },
                                { icon: Clock, title: "Long-term Cost Savings", desc: "No recurring licensing fees and reduced operational costs" }
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#9ACD32]/10 flex items-center justify-center shrink-0">
                                        <item.icon className="w-6 h-6 text-[#9ACD32]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#111111] mb-1">{item.title}</h3>
                                        <p className="text-slate-600 text-sm">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── Technologies ─────────────────────────────────────────── */}
            <section className="py-24 bg-white">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                Technologies Used in Custom Software Development
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed">
                                Modern custom software development leverages cutting-edge technologies to build scalable, secure, and performant applications:
                            </motion.p>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {[
                                { category: "Frontend", tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
                                { category: "Backend", tech: ["Node.js", "Python", "Java", "Go"] },
                                { category: "Databases", tech: ["PostgreSQL", "MongoDB", "Redis", "MySQL"] },
                                { category: "Cloud & DevOps", tech: ["AWS", "Google Cloud", "Docker", "Kubernetes"] }
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h3 className="font-bold text-[#111111] mb-3">{item.category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {item.tech.map((t, j) => (
                                            <span key={j} className="bg-white text-slate-700 px-3 py-1 rounded-full text-sm font-medium border border-slate-200">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── FAQ Section ─────────────────────────────────────────── */}
            <section className="py-24 bg-slate-50">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                Frequently Asked Questions
                            </motion.h2>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-4">
                            {faqSchema.mainEntity.map((item: any, i: number) => (
                                <motion.div key={i} variants={fadeUp} className="bg-white p-6 rounded-2xl border border-slate-100">
                                    <h3 className="font-bold text-[#111111] mb-2">{item.name}</h3>
                                    <p className="text-slate-600">{item.acceptedAnswer.text}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── Call to Action ───────────────────────────────────── */}
            <section className="py-20 bg-[#111111] text-white">
                <div className={C}>
                    <div className="text-center max-w-2xl mx-auto space-y-6">
                        <h2 className="text-3xl font-display font-extrabold">Ready to Build Your Custom Software?</h2>
                        <p className="text-slate-300 text-sm">Let's discuss your project requirements and create a tailored solution for your business.</p>
                        <div className="flex justify-center gap-4">
                            <Button asChild className="bg-[#9ACD32] hover:bg-[#9ACD32]/90 text-white font-bold px-6 rounded-full shadow-lg shadow-[#9ACD32]/20">
                                <Link href="/contact">Get Free Consultation <ArrowRight className="w-4 h-4 ml-2" /></Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Related Content ─────────────────────────────────────── */}
            <section className="py-24 bg-white">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                Related Guides
                            </motion.h2>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {[
                                { title: "Web & Mobile App Development Guide", href: "/guides/web-mobile-development-guide" },
                                { title: "AI & Machine Learning Implementation Guide", href: "/guides/ai-ml-implementation-guide" },
                                { title: "How to Choose a Software Development Company", href: "/guides/how-to-choose-software-development-company" },
                                { title: "Custom Software vs Off-the-Shelf Solutions", href: "/guides/custom-software-vs-off-the-shelf" }
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp}>
                                    <Link href={item.href} className="block bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-[#9ACD32]/30 transition-all group">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-bold text-[#111111] group-hover:text-[#9ACD32] transition-colors">{item.title}</h3>
                                            <ArrowRight className="w-5 h-5 text-[#9ACD32]" />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InView>
                </div>
            </section>
        </div>
    );
}
