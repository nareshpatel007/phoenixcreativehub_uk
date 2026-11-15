"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
    CheckCircle2, ArrowRight, Users, Clock, Shield, Award, TrendingUp, BookOpen
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
            "name": "What should I look for when choosing a software development company?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Look for relevant industry experience, a strong portfolio of similar projects, transparent pricing, clear communication processes, technical expertise in your required stack, positive client testimonials, and post-launch support options."
            }
        },
        {
            "@type": "Question",
            "name": "How important is a software company's portfolio?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A portfolio is crucial as it demonstrates the company's capabilities, design quality, and technical expertise. Look for projects similar to yours in complexity and industry. Case studies with measurable results are especially valuable."
            }
        },
        {
            "@type": "Question",
            "name": "Should I choose a local or offshore software development company?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Local companies offer easier communication and cultural alignment but cost more. Offshore companies are more cost-effective but may have communication challenges. Consider your budget, timeline, and communication preferences when deciding."
            }
        },
        {
            "@type": "Question",
            "name": "What questions should I ask a software development company?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ask about their development process, timeline estimates, pricing structure, team composition, communication frequency, testing methodology, post-launch support, and request references from past clients with similar projects."
            }
        },
        {
            "@type": "Question",
            "name": "How do I verify a software company's expertise?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Verify expertise by checking client testimonials, case studies, technical blog content, GitHub repositories (if available), certifications, industry awards, and by speaking directly with their technical team during the discovery phase."
            }
        }
    ]
};

export default function ChooseSoftwareCompanyClient() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 pt-20 md:pt-22">
            {/* Schema Script */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <ServiceHeader
                title={<>How to Choose a <span className="text-[#9ACD32]">Software Development</span><br />Company</>}
                subtitle="7 essential factors to consider when selecting a software development partner for your project."
                badge="Decision Guide"
                icon={<BookOpen className="w-3.5 h-3.5" />}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Guides", href: "/guides" },
                    { label: "How to Choose Software Development Company" }
                ]}
            />

            {/* ── Introduction ─────────────────────────────────────────── */}
            <section className="py-24 bg-white">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed">
                                Choosing the right software development company is one of the most critical decisions you'll make for your project. The right partner can deliver a high-quality solution on time and within budget, while the wrong choice can lead to delays, budget overruns, and poor results.
                            </motion.p>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed">
                                This guide covers the 7 key factors you should evaluate when selecting a software development company, along with specific questions to ask and red flags to watch for.
                            </motion.p>
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── 7 Key Factors ─────────────────────────────────────────── */}
            <section className="py-24 bg-slate-50">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                7 Key Factors to Consider
                            </motion.h2>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="space-y-8 max-w-4xl mx-auto">
                            {[
                                { 
                                    icon: Award, 
                                    title: "Relevant Industry Experience", 
                                    desc: "Look for companies with experience in your industry or with similar project types. They'll understand your specific challenges, compliance requirements, and best practices.",
                                    questions: ["How many similar projects have you completed?", "Can you share case studies from my industry?"]
                                },
                                { 
                                    icon: Users, 
                                    title: "Strong Portfolio and Case Studies", 
                                    desc: "Review their portfolio for projects similar to yours in complexity and scale. Look for detailed case studies that explain the problem, solution, and measurable results achieved.",
                                    questions: ["Can you show me examples of similar projects?", "What were the outcomes of these projects?"]
                                },
                                { 
                                    icon: Shield, 
                                    title: "Technical Expertise", 
                                    desc: "Ensure they have expertise in the technologies you need. Ask about their development team's qualifications, certifications, and experience with your specific tech stack.",
                                    questions: ["What technologies do you specialize in?", "Can I meet the technical team?"]
                                },
                                { 
                                    icon: Clock, 
                                    title: "Clear Development Process", 
                                    desc: "A reliable company should have a structured development process with clear milestones, regular updates, and quality assurance procedures.",
                                    questions: ["What is your development methodology?", "How often will we receive updates?"]
                                },
                                { 
                                    icon: TrendingUp, 
                                    title: "Transparent Pricing", 
                                    desc: "Look for detailed, transparent pricing with no hidden costs. Understand what's included in the quote and what might incur additional charges.",
                                    questions: ["What does the pricing include?", "Are there any potential additional costs?"]
                                },
                                { 
                                    icon: Users, 
                                    title: "Communication and Collaboration", 
                                    desc: "Effective communication is crucial. Evaluate their responsiveness, clarity in explanations, and willingness to collaborate throughout the project.",
                                    questions: ["Who will be my primary point of contact?", "What communication tools do you use?"]
                                },
                                { 
                                    icon: CheckCircle2, 
                                    title: "Post-Launch Support", 
                                    desc: "Software requires ongoing maintenance. Ensure they offer support packages, bug fixes, and updates after the initial launch.",
                                    questions: ["What post-launch support do you offer?", "What are your maintenance packages?"]
                                }
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp} className="bg-white p-6 rounded-2xl border border-slate-100">
                                    <div className="flex gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-[#9ACD32]/10 flex items-center justify-center shrink-0">
                                            <item.icon className="w-6 h-6 text-[#9ACD32]" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[#111111] text-xl mb-2">{item.title}</h3>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className="ml-16">
                                        <p className="font-semibold text-[#111111] text-sm mb-2">Key Questions to Ask:</p>
                                        <ul className="space-y-1">
                                            {item.questions.map((q, j) => (
                                                <li key={j} className="text-sm text-slate-600">• {q}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── Red Flags ─────────────────────────────────────────────── */}
            <section className="py-24 bg-white">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                Red Flags to Watch For
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed">
                                Be cautious if you encounter any of these warning signs during your evaluation:
                            </motion.p>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                            {[
                                "Vague or unrealistic promises about timeline and budget",
                                "Unwillingness to provide references or case studies",
                                "Poor communication or slow response times during sales",
                                "No clear development process or methodology",
                                "Extremely low pricing that seems too good to be true",
                                "Reluctance to sign detailed contracts or NDAs",
                                "No dedicated project manager or point of contact",
                                "Outsourcing work to unknown third parties"
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp} className="flex items-start gap-3 bg-red-50 p-4 rounded-xl border border-red-100">
                                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                                    <p className="text-sm text-slate-700">{item}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── Questions to Ask ─────────────────────────────────────── */}
            <section className="py-24 bg-slate-50">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                Essential Questions to Ask
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed">
                                Ask these questions during your initial meetings to evaluate potential partners:
                            </motion.p>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="space-y-4 max-w-4xl mx-auto">
                            {[
                                "What is your development process and methodology?",
                                "Can you provide references from clients with similar projects?",
                                "What is your team structure and who will work on my project?",
                                "How do you handle project scope changes and additional requirements?",
                                "What is your pricing structure and payment terms?",
                                "What quality assurance and testing processes do you follow?",
                                "How do you handle post-launch support and maintenance?",
                                "What is your typical project timeline for projects like mine?",
                                "How do you ensure data security and intellectual property protection?",
                                "What happens if the project exceeds the estimated timeline or budget?"
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100">
                                    <CheckCircle2 className="w-5 h-5 text-[#9ACD32] shrink-0 mt-0.5" />
                                    <p className="text-slate-700">{item}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── FAQ Section ─────────────────────────────────────────── */}
            <section className="py-24 bg-white">
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
                                <motion.div key={i} variants={fadeUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
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
                        <h2 className="text-3xl font-display font-extrabold">Ready to Choose the Right Partner?</h2>
                        <p className="text-slate-300 text-sm">Let's discuss your project and see if we're the right fit for your software development needs.</p>
                        <div className="flex justify-center gap-4">
                            <Button asChild className="bg-[#9ACD32] hover:bg-[#9ACD32]/90 text-white font-bold px-6 rounded-full shadow-lg shadow-[#9ACD32]/20">
                                <Link href="/contact">Schedule Free Consultation <ArrowRight className="w-4 h-4 ml-2" /></Link>
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
