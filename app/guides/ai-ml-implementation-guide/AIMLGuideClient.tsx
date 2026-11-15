"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
    CheckCircle2, ArrowRight, Brain, Zap, Shield, TrendingUp, Database, BookOpen
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
            "name": "What is AI and Machine Learning implementation?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "AI and Machine Learning implementation involves integrating intelligent algorithms into business systems to automate processes, make predictions, analyze data, and provide insights. It includes data preparation, model training, deployment, and continuous monitoring."
            }
        },
        {
            "@type": "Question",
            "name": "How much does AI development cost?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "AI development costs typically range from ₹1,00,000 to ₹2,00,000+. Simple AI solutions like chatbots start around ₹1,00,000, while complex machine learning systems with predictive analytics can cost ₹1,50,000 to ₹2,00,000 or more depending on data complexity and model requirements."
            }
        },
        {
            "@type": "Question",
            "name": "What types of AI solutions can businesses implement?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Common AI solutions include chatbots and virtual assistants, predictive analytics, recommendation engines, image and video recognition, natural language processing, fraud detection, process automation, and decision support systems."
            }
        },
        {
            "@type": "Question",
            "name": "Do I need a lot of data for AI implementation?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "While more data generally improves AI performance, you can start with smaller, high-quality datasets. Pre-trained models can be fine-tuned with your specific data, reducing the amount of data needed. We can help assess your data readiness and recommend the best approach."
            }
        },
        {
            "@type": "Question",
            "name": "How long does AI implementation take?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "AI implementation typically takes 3-6 months. Simple solutions can be deployed in 2-3 months, while complex systems requiring extensive data preparation and model training may require 4-6 months or longer depending on scope and complexity."
            }
        }
    ]
};

export default function AIMLGuideClient() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 pt-20 md:pt-22">
            {/* Schema Script */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <ServiceHeader
                title={<>Complete Guide to <span className="text-[#9ACD32]">AI & Machine Learning</span><br />Implementation</>}
                subtitle="Learn everything about AI and ML implementation: use cases, development process, costs, technologies, and how to leverage artificial intelligence for business growth."
                badge="Comprehensive Guide"
                icon={<BookOpen className="w-3.5 h-3.5" />}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Guides", href: "/guides" },
                    { label: "AI & ML Implementation Guide" }
                ]}
            />

            {/* ── What is AI/ML ─────────────────────────────────────────── */}
            <section className="py-24 bg-white">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                What is AI & Machine Learning Implementation?
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed">
                                Artificial Intelligence (AI) and Machine Learning (ML) implementation involves integrating intelligent algorithms into business systems to automate processes, make predictions, analyze data, and provide actionable insights. Unlike traditional software that follows predefined rules, AI systems learn from data to improve their performance over time.
                            </motion.p>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed">
                                AI implementation encompasses data preparation, model selection and training, deployment into production systems, and continuous monitoring and improvement. It enables businesses to automate complex tasks, uncover hidden patterns in data, and make data-driven decisions at scale.
                            </motion.p>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {[
                                { icon: Brain, title: "Intelligent Automation", desc: "Automate complex tasks that require human-like intelligence" },
                                { icon: Database, title: "Data-Driven Insights", desc: "Extract valuable insights from large datasets automatically" },
                                { icon: Zap, title: "Predictive Capabilities", desc: "Forecast trends and outcomes with high accuracy" }
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

            {/* ── AI Use Cases ─────────────────────────────────────────── */}
            <section className="py-24 bg-slate-50">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                AI & ML Use Cases for Business
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed">
                                AI and ML can transform various aspects of business operations. Here are the most impactful use cases:
                            </motion.p>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {[
                                { icon: Brain, title: "Chatbots & Virtual Assistants", desc: "24/7 customer support with natural language processing" },
                                { icon: TrendingUp, title: "Predictive Analytics", desc: "Forecast sales, demand, and market trends accurately" },
                                { icon: Database, title: "Recommendation Engines", desc: "Personalized product recommendations for e-commerce" },
                                { icon: Shield, title: "Fraud Detection", desc: "Identify suspicious activities and prevent financial losses" },
                                { icon: Zap, title: "Process Automation", desc: "Automate repetitive tasks and workflows intelligently" },
                                { icon: CheckCircle2, title: "Image & Video Analysis", desc: "Object detection, facial recognition, and content moderation" }
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

            {/* ── Implementation Process ─────────────────────────────────── */}
            <section className="py-24 bg-white">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                AI & ML Implementation Process
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed">
                                Successful AI implementation follows a structured process to ensure models are accurate, reliable, and deliver business value:
                            </motion.p>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            {[
                                { step: 1, title: "Data Assessment", desc: "We evaluate your data quality, quantity, and readiness for AI. This includes data cleaning, normalization, and identifying patterns that can be leveraged." },
                                { step: 2, title: "Problem Definition", desc: "We define clear business objectives and success metrics. Understanding what problem AI will solve ensures the solution delivers measurable value." },
                                { step: 3, title: "Model Development", desc: "Our data scientists select appropriate algorithms, train models on your data, and optimize for accuracy, performance, and scalability." },
                                { step: 4, title: "Testing & Validation", desc: "We rigorously test models using various metrics, validate results against business requirements, and ensure reliability across different scenarios." },
                                { step: 5, title: "Integration & Deployment", desc: "We deploy AI models into production systems as microservices, integrate with existing applications, and set up monitoring infrastructure." },
                                { step: 6, title: "Monitoring & Optimization", desc: "We continuously monitor model performance, retrain with new data, and optimize to maintain accuracy as business conditions evolve." }
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
            <section className="py-24 bg-slate-50">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                AI & ML Implementation Costs
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed">
                                AI implementation costs vary based on complexity, data requirements, model sophistication, and integration needs:
                            </motion.p>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
                            {[
                                { tier: "Simple AI Solutions", price: "₹1,00,000 - ₹1,50,000", features: ["Chatbots", "Basic automation", "Pre-trained models", "Standard integrations"] },
                                { tier: "Custom ML Models", price: "₹1,50,000 - ₹2,00,000", features: ["Custom model development", "Data processing", "System integration", "Training and documentation"] },
                                { tier: "Enterprise AI", price: "₹2,00,000 - ₹5,00,000+", features: ["Complex AI systems", "Multiple models", "Real-time processing", "Dedicated AI team", "Continuous optimization"] }
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp} className="bg-white p-6 rounded-2xl border border-slate-100">
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
                            <h3 className="font-bold text-[#111111] mb-3">Cost Influencing Factors:</h3>
                            <ul className="space-y-2 text-slate-700">
                                <li>• Data complexity and preparation requirements</li>
                                <li>• Model sophistication and training needs</li>
                                <li>• Integration complexity with existing systems</li>
                                <li>• Real-time processing requirements</li>
                                <li>• Ongoing monitoring and optimization needs</li>
                            </ul>
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
                                AI & ML Technologies & Tools
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed">
                            We use cutting-edge AI/ML frameworks and tools to build robust, scalable, and performant solutions:
                        </motion.p>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {[
                                { category: "Machine Learning", tech: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"] },
                                { category: "Natural Language Processing", tech: ["OpenAI GPT", "BERT", "spaCy", "NLTK"] },
                                { category: "Computer Vision", tech: ["OpenCV", "YOLO", "ResNet", "MediaPipe"] },
                                { category: "Data & Infrastructure", tech: ["Python", "Pandas", "AWS SageMaker", "Google Cloud AI"] }
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

            {/* ── Benefits ─────────────────────────────────────────────── */}
            <section className="py-24 bg-slate-50">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-6">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                Benefits of AI & ML Implementation
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-600 text-base leading-relaxed">
                                Implementing AI and ML solutions offers significant competitive advantages:
                            </motion.p>
                        </motion.div>
                    </InView>

                    <InView className="mt-12">
                        <motion.div variants={stagger} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {[
                                { icon: Zap, title: "Operational Efficiency", desc: "Automate repetitive tasks and reduce manual effort significantly" },
                                { icon: TrendingUp, title: "Better Decision Making", desc: "Data-driven insights lead to more accurate and faster decisions" },
                                { icon: Brain, title: "Competitive Advantage", desc: "Stay ahead with innovative AI-powered solutions" },
                                { icon: Shield, title: "Cost Reduction", desc: "Reduce operational costs through intelligent automation" },
                                { icon: Database, title: "Scalability", desc: "Handle growing data volumes without proportional cost increases" },
                                { icon: CheckCircle2, title: "Continuous Improvement", desc: "Models learn and improve over time with new data" }
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
                        <h2 className="text-3xl font-display font-extrabold">Ready to Implement AI & ML Solutions?</h2>
                        <p className="text-slate-300 text-sm">Let's discuss how AI can transform your business operations and drive growth.</p>
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
                                { title: "Custom Software Development Guide", href: "/guides/custom-software-development-guide" },
                                { title: "Web & Mobile App Development Guide", href: "/guides/web-mobile-development-guide" },
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
