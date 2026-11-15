import type { Metadata } from "next";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { CheckCircle2, ShieldCheck, Zap, Code2, Award, Users, Cpu, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Why Us | Choose Phoenix Creative Hub UK",
    description: "Discover why industry leaders choose Phoenix Creative Hub UK. AI-first engineering team, zero outsourcing, 8+ years experience, and 100+ successful software projects delivered.",
};

export default function WhyUsPage() {

    const reasons = [
        {
            icon: Users,
            title: "Expert Engineering Team",
            desc: "Our team of skilled developers, architects, and engineers work directly from our headquarters. No outsourcing, no middlemen—just dedicated technical talent."
        },
        {
            icon: ShieldCheck,
            title: "Zero Outsourcing Policy",
            desc: "We reject white-label development. Every line of code is written in-house by our team, ensuring quality control, security, and direct communication with your engineering team."
        },
        {
            icon: Zap,
            title: "8+ Years of Experience",
            desc: "Since 2018, we've been building enterprise-grade software systems. Our experience spans startups to large corporations across multiple industries and technology stacks."
        },
        {
            icon: Award,
            title: "100+ Projects Delivered",
            desc: "From MVP prototypes to full-scale enterprise systems, we have a proven track record of delivering successful software solutions on time and within budget."
        },
        {
            icon: Code2,
            title: "Modern Technology Stack",
            desc: "We build with React, Next.js, Node.js, TypeScript, and cloud platforms like AWS and GCP. Our strictly typed codebases ensure security and maintainability."
        },
        {
            icon: Cpu,
            title: "Full-Service Development",
            desc: "From initial consultation and architecture design to development, testing, deployment, and ongoing support—we handle every aspect of your software project."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 pt-20 md:pt-22">
            <ServiceHeader
                title="Why Choose Phoenix Creative Hub UK"
                subtitle="Discover how our in-house engineering team, zero outsourcing policy, and modern technology stack make us the preferred software development partner."
                badge="Why Us"
                icon={<Sparkles className="w-3.5 h-3.5" />}
            />

            <section className="py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reasons.map((reason, i) => {
                            const Icon = reason.icon;
                            return (
                                <div key={i} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/30 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
                                    <div>
                                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#111111] mb-3 leading-snug">{reason.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6">{reason.desc}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                                        <CheckCircle2 className="w-4 h-4" /> Proven Expertise
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 bg-[#111111] relative overflow-hidden text-center text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-6">Ready to Build Your Software?</h2>
                    <p className="text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
                        From MVP prototypes to enterprise systems, we deliver secure, scalable, and high-performance software solutions tailored to your business needs.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button asChild size="lg" className="bg-[#9ACD32] hover:bg-[#9ACD32]/90 text-white px-8 h-12 font-bold">
                            <Link href="/contact">Start Your Project</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 h-12 font-semibold">
                            <Link href="/services">View Our Services</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
