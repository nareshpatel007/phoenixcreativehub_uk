"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useSubmitContact } from "@/lib/api-client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
    MapPin, Phone, Mail, Send, CheckCircle2, User, PhoneCall,
    MessageSquare, ShieldCheck, FileCheck, Layers, GitPullRequest, Laptop,
    Sparkles, ChevronDown, Check, ArrowRight, Compass, Search, Workflow,
    Cpu, Globe
} from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    company: z.string().optional(),
    serviceType: z.string().min(1, "Please select a service type"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Contact() {
    const { toast } = useToast();
    const submitContact = useSubmitContact();
    const [submitted, setSubmitted] = React.useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", email: "", phone: "", company: "", serviceType: "", message: "" },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        submitContact.mutate(
            { data: values },
            {
                onSuccess: () => {
                    setSubmitted(true);
                    toast({
                        title: "Inquiry Submitted Successfully",
                        description: "Phoenix Creative Hub UK team will review your requirements and get in touch with you.",
                    });
                    form.reset();
                },
                onError: () => {
                    toast({
                        title: "Error Sending Message",
                        description: "Something went wrong. Please try again.",
                        variant: "destructive",
                    });
                },
            }
        );
    }

    const faqs = [
        {
            q: "What information should I include in my enquiry?",
            a: "Include your business name, the service you are interested in, the problem or opportunity, key requirements, preferred timescale and contact details. You can provide a brief or supporting documents if available."
        },
        {
            q: "Can I request a quote before I have a full specification?",
            a: "You can start with an outline of the project. A reliable estimate usually requires further discussion about scope, features, integrations, constraints and priorities."
        },
        {
            q: "Can I book a consultation about SEO only?",
            a: "Yes. You can enquire specifically about SEO services and explain your website, target audience, locations and business objectives."
        },
        {
            q: "Do you accept enquiries from outside London?",
            a: "Yes. Phoenix Creative Hub's priority markets include London, Manchester and Birmingham, and enquiries are welcome from elsewhere in the UK."
        },
        {
            q: "When will I receive a response?",
            a: "Please use the contact form or published contact details. We review all inbound enquiries promptly during UK business hours and reach out to arrange an initial discussion."
        }
    ];

    const helpGuidance = [
        {
            icon: Laptop,
            title: "For software and app projects",
            desc: "Include the main users, essential features, platforms, integrations, current systems and any target launch date. If the idea is still early, describe the problem you want to solve."
        },
        {
            icon: Workflow,
            title: "For AI and automation projects",
            desc: "Describe the process you want to improve, the information involved, the tools your team currently uses and where human review is needed."
        },
        {
            icon: Search,
            title: "For SEO projects",
            desc: "Share your website, priority services, target locations and the main outcome you want from organic search, such as qualified enquiries, consultation bookings or visibility for specific services."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 pt-20 md:pt-22">

            {/* 1. HERO SECTION */}
            <section className="relative min-h-[55vh] flex items-center py-16 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1A1A1A] text-white">
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-[#9ACD32] rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#9ACD32] rounded-full blur-[140px] translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="max-w-3xl space-y-6">
                        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
                            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#9ACD32]/10 text-[#9ACD32] border border-[#9ACD32]/20">
                                <Sparkles className="w-3.5 h-3.5" />
                                Software Development Consultation UK
                            </span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
                        >
                            Tell Us What You'd Like to <span className="text-[#9ACD32]">Build, Improve or Grow</span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ delay: 0.2 }}
                            className="text-base sm:text-lg text-slate-300 leading-relaxed font-light"
                        >
                            Whether you are planning a new digital product, improving an existing system or looking for more relevant enquiries through search, we'd like to understand what you need. Contact Phoenix Creative Hub to discuss your project and the next steps.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* 2. CONTACT FORM & DIRECT INFO */}
            <section className="py-20 relative overflow-hidden bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Left Column: Direct contact and location */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="lg:col-span-5 space-y-8"
                        >
                            <div className="space-y-4">
                                <span className="text-xs font-bold uppercase tracking-widest text-[#9ACD32]">Arrange a project consultation</span>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2921] tracking-tight">
                                    Serving businesses across the UK
                                </h2>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    London, Manchester and Birmingham are priority markets for Phoenix Creative Hub, and we welcome enquiries from businesses across the UK. Please use the contact details and form provided on this page to get in touch. Any in-person meeting arrangements should be confirmed directly.
                                </p>
                            </div>

                            <div className="space-y-5">
                                {/* Location */}
                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                                    <div className="w-10 h-10 rounded-xl bg-[#0B2921] flex items-center justify-center shrink-0 text-[#9ACD32]">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0B2921] text-sm mb-1">UK Registered Office</h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            PHOENIX CREATIVE HUB UK LTD<br />
                                            Suite RA01, 195–197 Wood Street, London, E17 3NU, United Kingdom
                                        </p>
                                    </div>
                                </div>

                                {/* Phone & Email */}
                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                                    <div className="w-10 h-10 rounded-xl bg-[#0B2921] flex items-center justify-center shrink-0 text-[#9ACD32]">
                                        <PhoneCall className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0B2921] text-sm mb-1">Direct Communication</h4>
                                        <div className="space-y-1 text-xs">
                                            <a href="tel:+447833817034" className="block text-slate-700 hover:text-[#0B2921] font-semibold transition-colors">
                                                +44 7833 817034
                                            </a>
                                            <a href="mailto:hello@phoenixcreativehub.co.uk" className="block text-slate-700 hover:text-[#0B2921] font-semibold transition-colors">
                                                hello@phoenixcreativehub.co.uk
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Google Map Embedded Card */}
                            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-[200px] sm:h-[220px] relative bg-slate-100">
                                <iframe
                                    src="https://maps.google.com/maps?q=195-197+Wood+Street,+London+E17+3NU,+UK&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    className="absolute inset-0 w-full h-full border-0"
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </motion.div>

                        {/* Right Column: Contact Form */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="lg:col-span-7"
                        >
                            <div className="bg-slate-50 rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8">
                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5 border border-green-200">
                                            <CheckCircle2 className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h3 className="font-extrabold text-[#0B2921] text-2xl mb-3">Enquiry Received</h3>
                                        <p className="text-sm text-slate-600 mb-6 max-w-md mx-auto leading-relaxed">
                                            Thank you for reaching out. A member of our technical team will review your project requirements and get in touch with you shortly.
                                        </p>
                                        <Button onClick={() => setSubmitted(false)} className="bg-[#0B2921] text-white hover:bg-[#12382D] rounded-xl px-6 h-10 font-bold">
                                            Send Another Message
                                        </Button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="space-y-1 mb-6">
                                            <h3 className="font-extrabold text-[#0B2921] text-xl">Ready to start a conversation?</h3>
                                            <p className="text-xs text-slate-500">
                                                Share a short outline of your project. You do not need a complete specification to begin.
                                            </p>
                                        </div>

                                        <Form {...form}>
                                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                                <div className="grid sm:grid-cols-2 gap-5">
                                                    <FormField control={form.control} name="name" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Full Name *</FormLabel>
                                                            <FormControl><Input placeholder="Your full name" className="h-11 bg-white border-slate-200 rounded-xl" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={form.control} name="email" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Email Address *</FormLabel>
                                                            <FormControl><Input type="email" placeholder="name@company.co.uk" className="h-11 bg-white border-slate-200 rounded-xl" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </div>

                                                <div className="grid sm:grid-cols-2 gap-5">
                                                    <FormField control={form.control} name="phone" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Phone Number</FormLabel>
                                                            <FormControl><Input placeholder="+44 7833 817034" className="h-11 bg-white border-slate-200 rounded-xl" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={form.control} name="company" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Company / Business Name</FormLabel>
                                                            <FormControl><Input placeholder="Company Name" className="h-11 bg-white border-slate-200 rounded-xl" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </div>

                                                <FormField control={form.control} name="serviceType" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-xs font-semibold text-slate-700 uppercase tracking-wide">What would you like help with? *</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger className="h-11 bg-white border-slate-200 rounded-xl"><SelectValue placeholder="Select a service area" /></SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="custom_software">Custom Software Development</SelectItem>
                                                                <SelectItem value="web_dev">Web Development</SelectItem>
                                                                <SelectItem value="mobile_app">Mobile App Development</SelectItem>
                                                                <SelectItem value="ai_automation">AI Development & Automation</SelectItem>
                                                                <SelectItem value="crm_erp">CRM or ERP Development</SelectItem>
                                                                <SelectItem value="seo_services">SEO Services</SelectItem>
                                                                <SelectItem value="multi_area">Multi-Discipline Project</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />

                                                <FormField control={form.control} name="message" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Project Details & Objectives *</FormLabel>
                                                        <FormControl>
                                                            <Textarea
                                                                placeholder="Tell us what your business does, what you want to achieve, who the solution is for, and what is not working today..."
                                                                className="min-h-[130px] resize-none bg-white border-slate-200 rounded-xl"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />

                                                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-2">
                                                    <p className="text-xs text-slate-500">
                                                        Prompt response during standard UK business hours.
                                                    </p>
                                                    <Button
                                                        type="submit"
                                                        className="bg-[#0B2921] hover:bg-[#12382D] text-white font-bold shadow-md min-w-[170px] h-12 rounded-xl transition-all"
                                                        disabled={submitContact.isPending}
                                                    >
                                                        {submitContact.isPending ? (
                                                            <span className="flex items-center gap-2">
                                                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                                Sending...
                                                            </span>
                                                        ) : (
                                                            <span className="flex items-center gap-2">
                                                                Send Enquiry <Send className="w-4 h-4" />
                                                            </span>
                                                        )}
                                                    </Button>
                                                </div>
                                            </form>
                                        </Form>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. HELP US UNDERSTAND YOUR REQUIREMENTS */}
            <section className="py-20 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                        <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Scoping Guidance</span>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#0B2921] tracking-tight">
                            Help us understand your requirements
                        </h2>
                        <p className="text-slate-600 text-base">
                            A few details will make the first conversation more useful. Tell us what your business does, what you want to achieve, who the solution is for and what is not working today.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {helpGuidance.map((item, idx) => {
                            const IconComp = item.icon;
                            return (
                                <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
                                    <div className="space-y-4">
                                        <div className="w-12 h-12 rounded-xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center">
                                            <IconComp className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#0B2921]">{item.title}</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. FAQ SECTION */}
            <section className="py-20 bg-white border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-14">
                        <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Frequently Asked Questions</span>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#0B2921] tracking-tight">
                            Common questions about enquiries
                        </h2>
                        <p className="text-slate-600 text-sm">
                            Clear information on what to prepare, scoping discussions, locations, and response times.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => {
                            const isOpen = openFaq === idx;
                            return (
                                <div 
                                    key={idx}
                                    className="rounded-2xl border border-slate-200 bg-slate-50/50 overflow-hidden transition-all"
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
                                                <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4">
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

            {/* 5. BOTTOM CTA SECTION */}
            <section className="py-20 bg-gradient-to-br from-[#0B2921] to-[#12382D] text-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-[#9ACD32]">
                        <Compass className="w-3.5 h-3.5" />
                        Next Steps
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                        Arrange a project consultation
                    </h2>
                    <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        An initial discussion can help clarify the opportunity, identify important questions and establish whether a more detailed discovery or proposal is appropriate.
                    </p>
                    <div className="pt-4 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg" className="bg-[#9ACD32] hover:bg-[#86b528] text-slate-950 font-bold px-8 shadow-xl shadow-[#9ACD32]/20 rounded-xl h-14">
                            <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Fill Out The Enquiry Form</a>
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
