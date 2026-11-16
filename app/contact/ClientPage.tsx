"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useSubmitContact } from "@/lib/api-client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { motion } from "framer-motion";
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
    MapPin, Phone, Mail, Send, CheckCircle2, User, PhoneCall,
    MessageSquare, ShieldCheck, FileCheck, Layers, GitPullRequest, Laptop
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
                        description: "Phoenix Creative Hub UK team will review your requirements and contact you within 24 business hours.",
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

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 pt-20 md:pt-22">

            <ServiceHeader
                title={<>Let's Start Your <span className="text-[#9ACD32]">Project</span></>}
                subtitle="Get in touch with our technical team to discuss your project requirements and custom solutions."
                badge="Connect With Us"
                icon={<User className="w-3.5 h-3.5" />}
            />

            {/* ── SECTION 1: CONTACT GRID & FORM ─────────────────────── */}
            <section className="py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Left Column: Contact info and map */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="lg:col-span-5 space-y-10"
                        >
                            <div className="space-y-4">
                                <span className="text-xs font-bold uppercase tracking-widest text-[#9ACD32]">Get In Touch</span>
                                <h2 className="text-3xl font-display font-extrabold text-[#111111] tracking-tight">
                                    Partner with Phoenix Creative Hub UK for Custom Software
                                </h2>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    Based in London, UK, our engineers consult on React/Next.js client portals, secure API integrations, AWS automation, and enterprise database configurations.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Location */}
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-display font-bold text-[#111111] text-sm uppercase tracking-wide mb-1">Our Headquarters</h4>
                                        <p className="text-xs text-slate-650 leading-relaxed font-medium">
                                            Suite RA01, 195-197 Wood Street, London, E17 3NU, United Kingdom
                                        </p>
                                    </div>
                                </div>

                                {/* Phone & Email */}
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                        <PhoneCall className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-display font-bold text-[#111111] text-sm uppercase tracking-wide mb-1.5">Direct Inquiry</h4>
                                        <div className="space-y-1">
                                            <a href="tel:+447833817034" className="block text-xs text-slate-650 hover:text-primary transition-colors font-semibold">
                                                +44 7833 817034
                                            </a>
                                            <a href="mailto:hello@phoenixcreativehub.co.uk" className="block text-xs text-slate-650 hover:text-primary transition-colors font-semibold">
                                                hello@phoenixcreativehub.co.uk
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Google Map Embedded Card */}
                            <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-lg shadow-slate-150/40 h-[200px] sm:h-[240px] relative bg-slate-100">
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
                            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 p-6 md:p-8">
                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5 border border-green-100">
                                            <CheckCircle2 className="w-8 h-8 text-green-500" />
                                        </div>
                                        <h3 className="font-display font-bold text-[#111111] text-2xl mb-3">Request Received!</h3>
                                        <p className="text-sm text-slate-500 mb-6 max-w-md mx-auto leading-relaxed">
                                            Our technical team will review your project details and get back to you within 24 hours.
                                        </p>
                                        <Button onClick={() => setSubmitted(false)} className="bg-primary text-white hover:bg-primary/95 rounded-full px-6 h-10">
                                            Send Another Message
                                        </Button>
                                    </div>
                                ) : (
                                    <>
                                        <h3 className="font-display font-bold text-[#111111] text-xl mb-6">Send Us a Message</h3>

                                        <Form {...form}>
                                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                                <div className="grid sm:grid-cols-2 gap-5">
                                                    <FormField control={form.control} name="name" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-xs font-semibold text-[#111111]/70 uppercase tracking-wide">Full Name *</FormLabel>
                                                            <FormControl><Input placeholder="Enter your full name" className="h-10 bg-slate-50/50 border-slate-100 rounded-xl" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={form.control} name="email" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-xs font-semibold text-[#111111]/70 uppercase tracking-wide">Email Address *</FormLabel>
                                                            <FormControl><Input type="email" placeholder="name@company.co.uk" className="h-10 bg-slate-50/50 border-slate-100 rounded-xl" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </div>

                                                <div className="grid sm:grid-cols-2 gap-5">
                                                    <FormField control={form.control} name="phone" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-xs font-semibold text-[#111111]/70 uppercase tracking-wide">Phone Number</FormLabel>
                                                            <FormControl><Input placeholder="e.g. +44 7833 817034" className="h-10 bg-slate-50/50 border-slate-100 rounded-xl" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={form.control} name="company" render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-xs font-semibold text-[#111111]/70 uppercase tracking-wide">Company</FormLabel>
                                                            <FormControl><Input placeholder="Your Company Name" className="h-10 bg-slate-50/50 border-slate-100 rounded-xl" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                </div>

                                                <FormField control={form.control} name="serviceType" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-xs font-semibold text-[#111111]/70 uppercase tracking-wide">Service Required *</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger className="h-10 bg-slate-50/50 border-slate-100 rounded-xl"><SelectValue placeholder="Select a service" /></SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="custom_software">Custom Software Development</SelectItem>
                                                                <SelectItem value="web_mobile">Web & Mobile Applications</SelectItem>
                                                                <SelectItem value="ai_ml">AI Automation & ML</SelectItem>
                                                                <SelectItem value="crm_erp">CRM & ERP Systems</SelectItem>
                                                                <SelectItem value="other">Other Inquiry</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />

                                                <FormField control={form.control} name="message" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-xs font-semibold text-[#111111]/70 uppercase tracking-wide">Project Details *</FormLabel>
                                                        <FormControl>
                                                            <Textarea
                                                                placeholder="Please describe your software requirements, user flow, integrations, or deployment timelines..."
                                                                className="min-h-[120px] resize-none bg-slate-50/50 border-slate-100 rounded-xl"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />

                                                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-2">
                                                    <p className="text-xs text-muted-foreground">
                                                        We typically reply within 24 business hours.
                                                    </p>
                                                    <Button
                                                        type="submit"
                                                        className="bg-primary hover:bg-primary/95 text-white font-bold shadow-lg shadow-primary/25 min-w-[150px] h-11 rounded-full cursor-pointer transition-all"
                                                        disabled={submitContact.isPending}
                                                    >
                                                        {submitContact.isPending ? (
                                                            <span className="flex items-center gap-2">
                                                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                                Sending...
                                                            </span>
                                                        ) : (
                                                            <span className="flex items-center gap-2">
                                                                Send Message <Send className="w-4 h-4" />
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

            {/* ── SECTION 2: WHAT HAPPENS NEXT? ─────────────────────── */}
            <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(41,171,226,0.03),transparent_60%)]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#9ACD32]">Process Flow</span>
                        <h2 className="text-3xl font-display font-extrabold text-[#111111]">Our Consultation Roadmap</h2>
                        <p className="text-sm text-slate-600">From the moment you click submit, our technical review workflow begins immediately.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: "01",
                                icon: MessageSquare,
                                title: "Technical Review",
                                desc: "Within 24 business hours, our software architects analyze your requirements and reach out to schedule a scoping session."
                            },
                            {
                                step: "02",
                                icon: Laptop,
                                title: "Architecture Proposal",
                                desc: "We draft scoping options, system topology maps, database choices, cloud costs estimation, and service level timelines."
                            },
                            {
                                step: "03",
                                icon: GitPullRequest,
                                title: "Sprints Kickoff",
                                desc: "Once aligned, a dedicated engineering squad is assigned, setting up direct communication channels and staging servers."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative group"
                            >
                                <span className="absolute top-6 right-6 font-display font-extrabold text-4xl text-[#9ACD32]/10 group-hover:text-[#9ACD32]/20 transition-colors">
                                    {item.step}
                                </span>
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-display font-bold text-[#111111] text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 3: TRUST & COMPLIANCE ────────────────────── */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <span className="text-xs font-bold uppercase tracking-widest text-[#9ACD32]">Enterprise Standards</span>
                            <h2 className="text-3xl font-display font-extrabold text-[#111111] tracking-tight">
                                Secure Consultation & Full Confidentiality
                            </h2>
                            <p className="text-slate-600 text-base leading-relaxed">
                                We treat all inbound consultations and technical disclosures with strict compliance. All ideas and database topologies remain protected under mutually agreed parameters.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                                    <span className="text-sm font-bold text-[#111111]">NDAs signed before deep disclosures</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FileCheck className="w-4 h-4 text-primary shrink-0" />
                                    <span className="text-sm font-bold text-[#111111]">Secure code ownership transfers</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Layers className="w-4 h-4 text-primary shrink-0" />
                                    <span className="text-sm font-bold text-[#111111]">Cloud architecture audits included</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-6"
                        >
                            <h3 className="font-display font-bold text-[#111111] text-lg">Expected Scopes</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                                    <h4 className="font-bold text-sm text-[#111111] mb-1">Standard Response Time</h4>
                                    <p className="text-xs text-slate-600">We review all custom inquiries and provide a feedback brief within 1 business day.</p>
                                </div>
                                <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                                    <h4 className="font-bold text-sm text-[#111111] mb-1">Direct Engineering Contact</h4>
                                    <p className="text-xs text-slate-600">You interface directly with our principal engineers and project leads—never middle managers.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );
}
