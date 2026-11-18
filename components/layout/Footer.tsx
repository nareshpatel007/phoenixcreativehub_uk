"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    MapPin, Mail, Phone,
    Facebook, Linkedin, Instagram,
    ArrowRight, Sparkles, ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SERVICES = [
    { label: "Custom Software Development", href: "/services/custom-software-development" },
    { label: "Web & Mobile Applications", href: "/services/web-mobile-development" },
    { label: "AI Automation & ML", href: "/services/ai-automation-ml" },
    { label: "CRM & ERP Systems", href: "/services/crm-erp-systems" },
];

const QUICK_LINKS = [
    { label: "About Us", href: "/about-us" },
    { label: "Why Choose Us", href: "/why-us" },
    { label: "FAQs & Help", href: "/faq" },
    { label: "Tech Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
];

const SOCIAL = [
    { icon: Instagram, href: "https://www.instagram.com/phoenix_creative_hub_uk?cplk=eGxndHBzaHE5dXky", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/phoenixcreativehubukltd", label: "Facebook" },
];

export function Footer() {
    return (
        <footer className="bg-[#173C30] text-slate-200 relative overflow-hidden border-t border-[#0B2921]">
            {/* Top design background glow */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-gradient-to-b from-[#9ACD32]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

            {/* ── Call to Action Top Strip ──────────────────────────────── */}
            <div className="border-b border-slate-800 bg-[#9ACD32]/10 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="space-y-1 text-center sm:text-left">
                            <h3 className="font-display font-bold text-xl text-white flex items-center justify-center sm:justify-start gap-2">
                                <Sparkles className="w-5 h-5 text-primary animate-pulse" /> Ready to build your project?
                            </h3>
                            <p className="text-sm text-slate-400">Consult with our engineering team for custom solutions.</p>
                        </div>
                        <div className="shrink-0">
                            <Button asChild size="sm" className="bg-primary hover:bg-primary/95 text-white font-bold px-5 py-2.5 rounded-full shadow-md shadow-primary/10 transition-all text-xs">
                                <Link href="/contact" className="flex items-center gap-1.5">
                                    Start a Project <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Main Footer Structure ──────────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Brand Section */}
                    <div className="sm:col-span-2 lg:col-span-4 space-y-6">
                        <Link href="/" className="inline-flex items-center group">
                            <Image
                                src="/images/logo-white.png"
                                alt="Phoenix Creative Hub UK"
                                width={200}
                                height={60}
                                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                            />
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                            London's leading premium IT consulting and custom software development partner since 2018. Empowering creators worldwide.
                        </p>

                        {/* Social Handles */}
                        <div className="flex items-center gap-3 pt-2">
                            {SOCIAL.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-slate-905 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="lg:col-span-3 space-y-5">
                        <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest">
                            Our Core Offerings
                        </h4>
                        <ul className="space-y-3">
                            {SERVICES.map((s) => (
                                <li key={s.label}>
                                    <Link
                                        href={s.href}
                                        className="text-sm text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-primary transition-colors shrink-0" />
                                        {s.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div className="lg:col-span-2 space-y-5">
                        <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {QUICK_LINKS.map((l) => (
                                <li key={l.label}>
                                    <Link
                                        href={l.href}
                                        className="text-sm text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-primary transition-colors shrink-0" />
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details Column */}
                    <div className="sm:col-span-2 lg:col-span-3 space-y-5">
                        <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest">
                            Get In Touch
                        </h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            {/* Address */}
                            <li className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-primary border border-primary/5">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <span className="leading-relaxed">
                                    Suite RA01, 195-197 Wood Street, London, E17 3NU, United Kingdom
                                </span>
                            </li>
                            {/* Phone */}
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary border border-primary/5">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <a href="tel:+447833817034" className="hover:text-primary transition-colors">
                                    +44 7833 817034
                                </a>
                            </li>
                            {/* Email */}
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary border border-primary/5">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <a href="mailto:hello@phoenixcreativehub.co.uk" className="hover:text-primary transition-colors">
                                    hello@phoenixcreativehub.co.uk
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ── Bottom Bar ─────────────────────────────────────────────── */}
            <div className="border-t border-[#0B2921] bg-[#0B2921] relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                            <p>Copyright &copy; {new Date().getFullYear()} PHOENIX CREATIVE HUB UK LTD. All rights reserved.</p>
                            <span className="hidden sm:inline text-emerald-800">|</span>
                            <span className="text-[#9ACD32] font-mono">Company No. 17524969</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                            <span className="text-emerald-800">|</span>
                            <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
