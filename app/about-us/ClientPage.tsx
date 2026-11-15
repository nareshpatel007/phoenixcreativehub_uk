"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Globe, Target, Zap, CheckCircle2,
    ArrowRight, Users, Clock, Sparkles,
    Cpu, Code2, Shield, Rocket
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

export default function About() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 pt-20 md:pt-22">

            <ServiceHeader
                title={<>We Build <span className="text-[#9ACD32]">Digital Excellence</span><br />From India to the United Kingdom 🇬🇧</>}
                subtitle="PHOENIX CREATIVE HUB UK LTD is officially registered in London, United Kingdom. Headquartered at Suite RA01, 195–197 Wood Street, London, E17 3NU, delivering cutting-edge creative, digital marketing, SEO, GEO, AEO, and bespoke web solutions."
                badge="About PHOENIX CREATIVE HUB UK LTD"
                icon={<Sparkles className="w-3.5 h-3.5" />}
            />

            {/* ── Stats ─────────────────────────────────────────────── */}
            <section className="py-12 bg-white border-y border-slate-100">
                <div className={C}>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Clock, value: "8+", label: "Years Experience" },
                            { icon: Rocket, value: "100+", label: "Projects Delivered" },
                            { icon: Cpu, value: "AI-First", label: "Engineering Team" },
                            { icon: Globe, value: "98%", label: "Client Satisfaction" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.1 }}
                                className="bg-slate-50 rounded-2xl border border-slate-100 p-6 text-center"
                            >
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 text-primary">
                                    <stat.icon className="w-5 h-5" />
                                </div>
                                <div className="text-3xl font-display font-extrabold text-[#111111] mb-1">{stat.value}</div>
                                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Story Section ─────────────────────────────────────── */}
            <section className="py-24 bg-white">
                <div className={C}>
                    <InView>
                        <motion.div variants={stagger} className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div variants={fadeUp} className="space-y-6">
                                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9ACD32]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#9ACD32] animate-pulse" /> Officially Registered in England & Wales 🇬🇧
                                </span>
                                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                                    Our Growth Story: From India to the UK 🚀
                                </h2>
                                <p className="text-slate-600 text-base leading-relaxed">
                                    Founded with the vision to deliver world-class digital, creative, and technology solutions, <strong>PHOENIX CREATIVE HUB UK LTD</strong> is officially incorporated under the Companies Act 2006 as a private limited company (<strong>Company Number: 17524969</strong>, registered at Companies House, Cardiff on <strong>16th October 2026</strong>).
                                </p>
                                <p className="text-slate-600 text-base leading-relaxed">
                                    From our registered office situated at <strong>Suite RA01, 195–197 Wood Street, London, E17 3NU, United Kingdom</strong>, we empower UK, European, and global businesses with innovative digital marketing, advanced SEO, GEO, AEO, custom web architectures, and mobile applications.
                                </p>
                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                                        <Cpu className="w-6 h-6 text-primary mb-3" />
                                        <h4 className="font-bold text-[#111111] text-sm mb-1">Modern Stack</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">We build with React, Next.js, Node.js, and strictly typed TypeScript.</p>
                                    </div>
                                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                                        <Code2 className="w-6 h-6 text-primary mb-3" />
                                        <h4 className="font-bold text-[#111111] text-sm mb-1">Clean Code</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">Rigorous standards ensure your system is secure and highly maintainable.</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeUp} className="relative">
                                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-100 relative">
                                    <Image
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                        alt="Our Team"
                                        fill
                                        draggable={false}
                                        sizes="(max-width: 768px) 100vw, 600px"
                                        className="object-cover transition-all duration-700 hover:scale-105"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-3xl -z-10 animate-pulse" />
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-full -z-10 blur-3xl opacity-20" />
                            </motion.div>
                        </motion.div>
                    </InView>
                </div>
            </section>

            {/* ── Values Section ────────────────────────────────────── */}
            <section className="py-24 bg-slate-50">
                <div className={C}>
                    <InView>
                        <div className="text-center mb-16 space-y-3">
                            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#111111]">Our Guiding Principles</h2>
                            <p className="text-slate-500 text-sm max-w-xl mx-auto">The core values that direct every line of code we write and system we design.</p>
                        </div>
                    </InView>

                    <InView>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: Target,
                                    title: "Mission Driven",
                                    desc: "We focus on real-world business impact. We build software that drives growth, efficiency, and scale."
                                },
                                {
                                    icon: Shield,
                                    title: "Security & Stability",
                                    desc: "Enterprise compliance is built-in. Your custom system will be secure, scalable, and built to last."
                                },
                                {
                                    icon: Rocket,
                                    title: "Continuous Innovation",
                                    desc: "We incorporate modern architectures, AI integration, and serverless technology to give you an edge."
                                },
                                {
                                    icon: Users,
                                    title: "Client Integration",
                                    desc: "We operate as an extension of your own team. Communication, timelines, and transparency are core to us."
                                }
                            ].map((val, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeUp}
                                    className="p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform text-primary">
                                        <val.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-display font-bold text-[#111111] mb-3">{val.title}</h3>
                                    <p className="text-xs text-slate-500 leading-relaxed">{val.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </InView>
                </div>
            </section>

            {/* ── Call to Action ───────────────────────────────────── */}
            <section className="py-20 bg-[#111111] text-white">
                <div className={C}>
                    <div className="text-center max-w-2xl mx-auto space-y-6">
                        <h2 className="text-3xl font-display font-extrabold">Ready to Partner With Us?</h2>
                        <p className="text-slate-300 text-sm">Let our in-house engineering team handle your next digital requirements, from MVP prototype to full cloud deployment.</p>
                        <div className="flex justify-center gap-4">
                            <Button asChild className="bg-[#9ACD32] hover:bg-[#9ACD32]/90 text-white font-bold px-6 rounded-full shadow-lg shadow-[#9ACD32]/20">
                                <Link href="/contact">Get in Touch <ArrowRight className="w-4 h-4 ml-2" /></Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
