"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Menu, Phone, Mail, ChevronDown, X,
    Facebook, Instagram, Linkedin, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES_LINKS = [
    { label: "Custom Software Development", href: "/services/custom-software-development" },
    { label: "Web & Mobile Applications", href: "/services/web-mobile-development" },
    { label: "AI Automation & ML", href: "/services/ai-automation-ml" },
    { label: "CRM & ERP Systems", href: "/services/crm-erp-systems" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <>
            <motion.header
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-lg shadow-slate-100/40 border-b border-slate-200/50 py-3"
                    : "bg-white/95 border-b border-slate-100 py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between gap-6">
                        {/* Logo */}
                        <Link href="/" className="flex items-center shrink-0 group">
                            <Image
                                src="/images/logo-black.png"
                                alt="Phoenix Creative Hub UK"
                                width={700}
                                height={400}
                                draggable={false}
                                className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                                priority
                            />
                        </Link>

                        {/* Desktop Nav Links */}
                        <nav className="hidden lg:flex items-center gap-1">
                            <Link
                                href="/"
                                className={`text-sm font-semibold px-4 py-2 rounded-full transition-all ${pathname === "/"
                                    ? "text-primary bg-primary/5"
                                    : "text-slate-600 hover:text-primary hover:bg-slate-50"
                                    }`}
                            >
                                Home
                            </Link>

                            <Link
                                href="/about-us"
                                className={`text-sm font-semibold px-4 py-2 rounded-full transition-all ${pathname === "/about-us"
                                    ? "text-primary bg-primary/5"
                                    : "text-slate-600 hover:text-primary hover:bg-slate-50"
                                    }`}
                            >
                                About Us
                            </Link>

                            {/* Services Dropdown */}
                            <DropdownMenu modal={false}>
                                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-semibold px-4 py-2 rounded-full text-slate-600 hover:text-primary hover:bg-slate-50 outline-none transition-all">
                                    Services <ChevronDown className="w-4 h-4 opacity-70" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="start" className="w-64 bg-white rounded-2xl border-slate-100 shadow-xl p-2">
                                    {SERVICES_LINKS.map((l, idx) => (
                                        <Link key={idx} href={l.href}>
                                            <DropdownMenuItem className="cursor-pointer rounded-lg text-slate-600 font-medium hover:text-primary focus:bg-slate-50">
                                                {l.label}
                                            </DropdownMenuItem>
                                        </Link>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <Link
                                href="/portfolio"
                                className={`text-sm font-semibold px-4 py-2 rounded-full transition-all ${pathname === "/portfolio"
                                    ? "text-primary bg-primary/5"
                                    : "text-slate-600 hover:text-primary hover:bg-slate-50"
                                    }`}
                            >
                                Portfolio
                            </Link>

                            <Link
                                href="/blog"
                                className={`text-sm font-semibold px-4 py-2 rounded-full transition-all ${pathname === "/blog"
                                    ? "text-primary bg-primary/5"
                                    : "text-slate-600 hover:text-primary hover:bg-slate-50"
                                    }`}
                            >
                                Blog
                            </Link>

                            <Link
                                href="/contact"
                                className={`text-sm font-semibold px-4 py-2 rounded-full transition-all ${pathname === "/contact"
                                    ? "text-primary bg-primary/5"
                                    : "text-slate-600 hover:text-primary hover:bg-slate-50"
                                    }`}
                            >
                                Contact Us
                            </Link>
                        </nav>

                        {/* Right CTA Actions */}
                        <div className="flex items-center gap-3">
                            <Button
                                asChild
                                size="default"
                                className="bg-primary hover:bg-primary/95 text-white font-bold px-6 rounded-full shadow-md shadow-primary/10 hidden sm:inline-flex"
                            >
                                <Link href="/contact">Get Free Quote</Link>
                            </Button>

                            {/* Mobile Hamburger Menu Button */}
                            <button
                                onClick={() => setMobileOpen(true)}
                                aria-label="Open navigation menu"
                                className="lg:hidden p-2 rounded-full text-slate-600 hover:bg-slate-100 hover:text-primary transition-all"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Navigation Drawer Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <div className="fixed inset-0 z-[60] lg:hidden">
                        {/* Drawer Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                            onClick={() => setMobileOpen(false)}
                        />

                        {/* Drawer Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col justify-between"
                        >
                            {/* Drawer Top Branding */}
                            <div>
                                <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                                    <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
                                        <Image
                                            src="/images/logo-black.png"
                                            alt="Phoenix Creative Hub UK"
                                            width={140}
                                            height={40}
                                            className="h-8 w-auto object-contain"
                                        />
                                    </Link>
                                    <button
                                        onClick={() => setMobileOpen(false)}
                                        className="p-2 rounded-full text-slate-500 hover:bg-slate-100 transition-all"
                                        aria-label="Close navigation menu"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Drawer Menu Items */}
                                <nav className="px-4 py-6 space-y-2 overflow-y-auto max-h-[65vh]">
                                    <Link
                                        href="/"
                                        className="block px-4 py-3 rounded-2xl text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-primary transition-all"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        Home
                                    </Link>

                                    <Link
                                        href="/about-us"
                                        className="block px-4 py-3 rounded-2xl text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-primary transition-all"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        About
                                    </Link>

                                    {/* Services Nested List */}
                                    <div className="space-y-1">
                                        <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Services</div>
                                        {SERVICES_LINKS.map((l, idx) => (
                                            <Link
                                                key={idx}
                                                href={l.href}
                                                className="block px-6 py-2.5 rounded-2xl text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-primary transition-all"
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {l.label}
                                            </Link>
                                        ))}
                                    </div>

                                    <Link
                                        href="/portfolio"
                                        className="block px-4 py-3 rounded-2xl text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-primary transition-all"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        Portfolio
                                    </Link>

                                    <Link
                                        href="/blog"
                                        className="block px-4 py-3 rounded-2xl text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-primary transition-all"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        Blog
                                    </Link>

                                    <Link
                                        href="/contact"
                                        className="block px-4 py-3 rounded-2xl text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-primary transition-all"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        Contact Us
                                    </Link>
                                </nav>
                            </div>

                            {/* Drawer Footer Information */}
                            <div className="p-6 border-t border-slate-100 space-y-4">
                                <Button asChild className="w-full bg-primary hover:bg-primary/95 text-white font-bold h-11 rounded-xl">
                                    <Link href="/contact" onClick={() => setMobileOpen(false)}>Get Free Quote</Link>
                                </Button>

                                <div className="space-y-2 text-xs text-slate-500">
                                    <a href="tel:+447833817034" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <Phone className="w-4 h-4 text-primary shrink-0" /> +44 7833 817034
                                    </a>
                                    <a href="mailto:hello@phoenixcreativehub.co.uk" className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <Mail className="w-4 h-4 text-primary shrink-0" /> hello@phoenixcreativehub.co.uk
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
