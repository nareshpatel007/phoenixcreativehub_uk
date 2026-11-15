"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ShieldCheck, Cpu, Code2, Rocket, HelpCircle } from "lucide-react";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { Button } from "@/components/ui/button";

interface Project {
    slug: string;
    title: string;
    category: string;
    desc: string;
    tags: string[];
    stats: string;
    image: string;
    challenge: string;
    solution: string;
    results: string;
}

interface ProjectDetailClientProps {
    project: Project;
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
    return (
        <div className="w-full bg-slate-50 relative pt-22 min-h-screen">

            <ServiceHeader
                title={project.title}
                subtitle={project.desc}
                badge={project.category}
            />

            {/* Case Study Details Layout */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        
                        {/* Left Column: Narrative Details */}
                        <div className="lg:col-span-8 space-y-12">
                            {/* Project Banner Graphic */}
                            <div className="relative h-[250px] sm:h-[400px] rounded-3xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    priority
                                    draggable={false}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                                    className="object-cover"
                                />
                            </div>

                            {/* Section 1: The Challenge */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-display font-extrabold text-[#111111] flex items-center gap-2.5">
                                    <HelpCircle className="w-6 h-6 text-primary" /> The Challenge
                                </h3>
                                <p className="text-slate-650 text-base leading-relaxed">
                                    {project.challenge}
                                </p>
                            </div>

                            {/* Section 2: The Solution */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-display font-extrabold text-[#111111] flex items-center gap-2.5">
                                    <Code2 className="w-6 h-6 text-primary" /> Our Engineering Approach
                                </h3>
                                <p className="text-slate-650 text-base leading-relaxed">
                                    {project.solution}
                                </p>
                            </div>

                            {/* Section 3: The Results */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-display font-extrabold text-[#111111] flex items-center gap-2.5">
                                    <Rocket className="w-6 h-6 text-primary" /> Key Results & Business Impact
                                </h3>
                                <p className="text-slate-650 text-base leading-relaxed">
                                    {project.results}
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Case Specs Sidebar */}
                        <div className="lg:col-span-4 space-y-8">
                            
                            {/* Stats Card */}
                            <div className="bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden border border-slate-850 shadow-xl">
                                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
                                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">Key Performance Indicator</span>
                                <h4 className="text-3xl font-display font-extrabold text-white leading-tight mb-4">
                                    {project.stats}
                                </h4>
                                <p className="text-slate-400 text-xs leading-relaxed">
                                    Operational metrics collected after 30 days of standard staging deployment.
                                </p>
                            </div>

                            {/* Tech stack metadata */}
                            <div className="bg-white border border-slate-150 rounded-3xl p-8 shadow-sm space-y-4">
                                <h4 className="font-display font-extrabold text-[#111111] text-sm uppercase tracking-wide">Technology Stack</h4>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="text-xs font-semibold bg-slate-50 border border-slate-150 text-slate-600 px-3 py-1 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Consultation Action Card */}
                            <div className="bg-white border border-slate-150 rounded-3xl p-8 shadow-sm space-y-6">
                                <h4 className="font-display font-extrabold text-[#111111] text-sm uppercase tracking-wide flex items-center gap-2">
                                    <Cpu className="w-4 h-4 text-primary" /> Project Consultation
                                </h4>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    Ready to design and build a secure digital platform with similar technical specifications? Get in touch with our principal architects today.
                                </p>
                                <Button asChild className="w-full bg-[#111111] hover:bg-[#111111]/90 text-white font-bold rounded-full h-11 transition-all">
                                    <Link href="/contact" className="inline-flex items-center gap-2">
                                        Discuss Requirements <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
