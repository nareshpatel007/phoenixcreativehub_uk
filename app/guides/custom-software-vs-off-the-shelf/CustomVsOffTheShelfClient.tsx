"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
    CheckCircle2, ArrowRight, XCircle, TrendingUp, DollarSign, Zap, Shield, BookOpen
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
            "name": "What is the difference between custom software and off-the-shelf software?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Custom software is built specifically for your business needs, offering unique features and perfect alignment with your processes. Off-the-shelf software is pre-built with standard features that may require workarounds to fit your specific requirements."
            }
        },
        {
            "@type": "Question",
            "name": "Which is more expensive: custom software or off-the-shelf?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Custom software has higher upfront development costs but no recurring licensing fees. Off-the-shelf software has lower upfront costs but requires ongoing subscription payments. Over 3-5 years, custom software often becomes more cost-effective."
            }
        },
        {
            "@type": "Question",
            "name": "When should I choose custom software over off-the-shelf?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Choose custom software when you have unique business processes, need competitive differentiation, require specific integrations, have complex workflows, or need scalability that off-the-shelf solutions cannot provide."
            }
        },
        {
            "@type": "Question",
            "name": "What are the advantages of off-the-shelf software?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Off-the-shelf software offers faster implementation, lower upfront costs, regular updates from the vendor, community support, and proven reliability since many other companies use it."
            }
        },
        {
            "@type": "Question",
            "name": "Can I switch from off-the-shelf to custom software later?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, you can migrate from off-the-shelf to custom software. However, this requires data migration, process reconfiguration, and temporary disruption. It's often better to choose the right solution from the start."
            }
        }
    ]
};

export default function CustomVsOffTheShelfClient() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 pt-20 md:pt-22">
            {/* Schema Script */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <ServiceHeader
                title={<>Custom Software vs <span className="text-[#9ACD32]">Off-the-Shelf</span><br />Solutions</>}
                subtitle="A comprehensive comparison to help you decide which approach is right for your business."
                badge="Comparison Guide"
                icon={<BookOpen className="w-3.5 h-3.5" />}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Guides", href: "/guides" },
                    { label: "Custom Software vs Off-the-Shelf" }
                ]}
            />

            {/* ── Quick Comparison Table ─────────────────────────────── */}
            <section className="py-24 bg-white">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                Quick Comparison
                            </motion.h2>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={fadeUp} className="max-w-4xl mx-auto overflow-x-auto">
                            <table className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="px-6 py-4 text-left font-bold text-[#111111]">Factor</th>
                                        <th className="px-6 py-4 text-left font-bold text-[#9ACD32]">Custom Software</th>
                                        <th className="px-6 py-4 text-left font-bold text-slate-600">Off-the-Shelf</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    {[
                                        { factor: "Upfront Cost", custom: "High (₹1L-₹5L+)", offTheShelf: "Low (₹0-₹50K)" },
                                        { factor: "Time to Deploy", custom: "3-6 months", offTheShelf: "Days to weeks" },
                                        { factor: "Ongoing Costs", custom: "Maintenance only", offTheShelf: "Monthly subscriptions" },
                                        { factor: "Customization", custom: "100% tailored", offTheShelf: "Limited" },
                                        { factor: "Scalability", custom: "Unlimited", offTheShelf: "Constrained" },
                                        { factor: "Competitive Edge", custom: "High", offTheShelf: "Low" },
                                        { factor: "Integration", custom: "Seamless", offTheShelf: "May require workarounds" },
                                        { factor: "Support", custom: "Dedicated team", offTheShelf: "Vendor support" }
                                    ].map((item, i) => (
                                        <tr key={i}>
                                            <td className="px-6 py-4 font-medium text-[#111111]">{item.factor}</td>
                                            <td className="px-6 py-4 text-[#9ACD32]">{item.custom}</td>
                                            <td className="px-6 py-4 text-slate-600">{item.offTheShelf}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── Custom Software Pros & Cons ─────────────────────────── */}
            <section className="py-24 bg-slate-50">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                Custom Software: Pros & Cons
                            </motion.h2>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <motion.div variants={fadeUp} className="space-y-4">
                                <h3 className="text-xl font-bold text-[#111111] flex items-center gap-2">
                                    <CheckCircle2 className="w-6 h-6 text-green-500" /> Advantages
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Perfect fit for your business processes",
                                        "Competitive differentiation through unique features",
                                        "Scalability without limitations",
                                        "No recurring licensing fees",
                                        "Full control over features and roadmap",
                                        "Seamless integration with existing systems",
                                        "Ownership of the code and IP",
                                        "Custom security and compliance measures"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-600">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div variants={fadeUp} className="space-y-4">
                                <h3 className="text-xl font-bold text-[#111111] flex items-center gap-2">
                                    <XCircle className="w-6 h-6 text-red-500" /> Disadvantages
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Higher upfront development costs",
                                        "Longer time to market",
                                        "Requires ongoing maintenance",
                                        "Need technical expertise to manage",
                                        "Development risk if not done properly",
                                        "Requires clear requirements upfront"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-600">
                                            <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── Off-the-Shelf Pros & Cons ─────────────────────────────── */}
            <section className="py-24 bg-white">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                Off-the-Shelf Software: Pros & Cons
                            </motion.h2>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <motion.div variants={fadeUp} className="space-y-4">
                                <h3 className="text-xl font-bold text-[#111111] flex items-center gap-2">
                                    <CheckCircle2 className="w-6 h-6 text-green-500" /> Advantages
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Lower upfront costs",
                                        "Fast deployment (days to weeks)",
                                        "Proven reliability and stability",
                                        "Regular updates from vendor",
                                        "Community support and resources",
                                        "No development expertise needed",
                                        "Predictable monthly costs",
                                        "Immediate access to features"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-600">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div variants={fadeUp} className="space-y-4">
                                <h3 className="text-xl font-bold text-[#111111] flex items-center gap-2">
                                    <XCircle className="w-6 h-6 text-red-500" /> Disadvantages
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Limited customization options",
                                        "May require workarounds for your needs",
                                        "Recurring subscription fees",
                                        "No competitive differentiation",
                                        "Vendor dependency and lock-in",
                                        "Limited scalability",
                                        "Generic features not tailored to you",
                                        "Data may be stored on vendor servers"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-600">
                                            <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── When to Choose Each ─────────────────────────────────── */}
            <section className="py-24 bg-slate-50">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                When to Choose Each Option
                            </motion.h2>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <motion.div variants={fadeUp} className="bg-[#9ACD32]/10 border border-[#9ACD32]/20 p-6 rounded-2xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <Zap className="w-8 h-8 text-[#9ACD32]" />
                                    <h3 className="text-xl font-bold text-[#111111]">Choose Custom Software When:</h3>
                                </div>
                                <ul className="space-y-2">
                                    {[
                                        "You have unique business processes",
                                        "Competitive differentiation is critical",
                                        "You need specific integrations",
                                        "Scalability is a priority",
                                        "Budget allows for upfront investment",
                                        "You want to own your IP",
                                        "Industry has specific compliance needs",
                                        "You have complex workflows"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                            <CheckCircle2 className="w-4 h-4 text-[#9ACD32] shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div variants={fadeUp} className="bg-slate-100 border border-slate-200 p-6 rounded-2xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <DollarSign className="w-8 h-8 text-slate-600" />
                                    <h3 className="text-xl font-bold text-[#111111]">Choose Off-the-Shelf When:</h3>
                                </div>
                                <ul className="space-y-2">
                                    {[
                                        "Budget is limited",
                                        "Time to market is critical",
                                        "Your needs are standard/common",
                                        "You want to test the market first",
                                        "You lack technical expertise",
                                        "Ongoing support is important",
                                        "Industry uses standard solutions",
                                        "You need basic functionality quickly"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                            <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── Cost Analysis ─────────────────────────────────────────── */}
            <section className="py-24 bg-white">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                Cost Analysis Over Time
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed">
                                While custom software has higher upfront costs, it often becomes more cost-effective over time:
                            </motion.p>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="space-y-4 max-w-4xl mx-auto">
                            {[
                                { year: "Year 1", custom: "₹2,00,000 (development)", offTheShelf: "₹60,000 (subscription)" },
                                { year: "Year 2", custom: "₹20,000 (maintenance)", offTheShelf: "₹60,000 (subscription)" },
                                { year: "Year 3", custom: "₹20,000 (maintenance)", offTheShelf: "₹60,000 (subscription)" },
                                { year: "Year 4", custom: "₹20,000 (maintenance)", offTheShelf: "₹60,000 (subscription)" },
                                { year: "Year 5", custom: "₹20,000 (maintenance)", offTheShelf: "₹60,000 (subscription)" }
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp} className="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <span className="font-bold text-[#111111]">{item.year}</span>
                                    <div className="flex gap-8">
                                        <span className="text-[#9ACD32] font-semibold">Custom: {item.custom}</span>
                                        <span className="text-slate-600">Off-the-Shelf: {item.offTheShelf}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InView>

                    <InView className="mt-6">
                        <motion.div variants={fadeUp} className="max-w-4xl mx-auto bg-[#9ACD32]/10 border border-[#9ACD32]/20 rounded-2xl p-6">
                            <p className="text-slate-700">
                                <strong>5-Year Total:</strong> Custom Software: ₹2,80,000 | Off-the-Shelf: ₹3,00,000
                            </p>
                            <p className="text-slate-600 text-sm mt-2">
                                *Custom software becomes more cost-effective around Year 4-5, plus you own the IP and have a competitive advantage.
                            </p>
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
                        <h2 className="text-3xl font-display font-extrabold">Still Unsure Which to Choose?</h2>
                        <p className="text-slate-300 text-sm">Let's analyze your specific requirements and recommend the best approach for your business.</p>
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
                                Related Resources
                    </motion.h2>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="space-y-4 max-w-4xl mx-auto">
                            {[
                                { title: "Complete Guide to Custom Software Development", href: "/guides/custom-software-development-guide" },
                                { title: "How to Choose a Software Development Company", href: "/guides/how-to-choose-software-development-company" }
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
