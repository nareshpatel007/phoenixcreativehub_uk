"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft, CheckCircle2, ChevronDown, Database,
    Layers, Cpu, ArrowRight,
    Users, Target, Award, Check, TrendingUp, ShieldCheck,
    Compass, BarChart3, HelpCircle, Phone, Mail, MapPin,
    Sparkles, Workflow, MessageSquare, LayoutGrid, Server,
    Building2, RefreshCw, Filter, FileSpreadsheet, ShieldAlert
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
    service: any;
}

export default function CRMDevelopmentDetailClient({ service }: Props) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            q: "What is custom CRM development?",
            a: "Custom CRM development involves creating or adapting customer management software around an organisation's processes, users, data and reporting requirements."
        },
        {
            q: "Should we build a custom CRM or buy an existing one?",
            a: "An established CRM may be more cost-effective if it supports your essential workflows. Custom development may be appropriate when important requirements cannot be met through configuration or available integrations."
        },
        {
            q: "Can a custom CRM integrate with our website?",
            a: "It may be possible to connect website forms and enquiry journeys with a CRM using supported APIs or integration tools. The approach depends on the website platform, CRM and data requirements."
        },
        {
            q: "Can we migrate data from our existing CRM?",
            a: "Data migration can be assessed as part of discovery. The work may involve field mapping, data cleaning, duplicate handling, permissions and validation before records are transferred."
        },
        {
            q: "How much does CRM development cost in the UK?",
            a: "Costs depend on users, workflows, features, integrations, reporting, data migration and security requirements. A project estimate should follow a review of the scope."
        }
    ];

    const crmCapabilities = [
        {
            icon: Users,
            title: "Lead and enquiry management",
            description: "Capture enquiries, record their source, assign ownership and track progress through agreed stages. Clear fields and follow-up processes help teams understand what needs attention."
        },
        {
            icon: Target,
            title: "Sales pipeline visibility",
            description: "Give relevant users a shared view of opportunities, next actions and pipeline stages. Reporting should reflect the decisions managers and sales teams need to make."
        },
        {
            icon: Database,
            title: "Customer records and interaction history",
            description: "Bring relevant customer details and interaction records together so that authorised team members can understand previous conversations and current requirements."
        },
        {
            icon: Workflow,
            title: "Tasks, reminders and workflow automation",
            description: "Support consistent follow-up with task assignment, reminders and defined workflow steps. Automation should be based on clear rules and include appropriate checks for exceptions."
        },
        {
            icon: BarChart3,
            title: "Reporting and management information",
            description: "Create views and reports around the measures that matter to your organisation, such as enquiry sources, pipeline movement, response times or customer activity. Data definitions should be agreed so reports are interpreted consistently."
        }
    ];

    const approaches = [
        {
            step: "01",
            title: "Understand the sales and service process",
            desc: "Map how enquiries arrive, how teams qualify and manage them, what information is required and where handovers occur. This helps establish the workflows the CRM needs to support."
        },
        {
            step: "02",
            title: "Prioritise users, roles and features",
            desc: "Define who needs access, what each role can view or change, and which functions are essential for an initial release. Permissions should reflect the sensitivity of customer information."
        },
        {
            step: "03",
            title: "Plan integrations and reporting",
            desc: "Identify the systems that need to connect, the data that should move between them and the reports users need. Agreeing these details early reduces avoidable rework."
        },
        {
            step: "04",
            title: "Test with realistic scenarios",
            desc: "Review the CRM using representative user journeys and data. Check permissions, workflow rules, reporting and integration behaviour before wider use."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 pt-22">
            <main className="flex-1 overflow-x-hidden">

                {/* 1. HERO SECTION */}
                <section className="relative min-h-[65vh] flex items-center py-16 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1A1A1A] text-white">
                    <div className="absolute inset-0 opacity-15 pointer-events-none">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-[#9ACD32] rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#9ACD32] rounded-full blur-[140px] translate-x-1/2 translate-y-1/2" />
                    </div>

                    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            
                            {/* Left Hero Content */}
                            <div className="lg:col-span-7 space-y-6">
                                <motion.div initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }}>
                                    <Link href="/services" className="inline-flex items-center gap-2 text-[#9ACD32] hover:text-white text-xs font-bold uppercase tracking-widest transition-colors group">
                                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                        Back to Services
                                    </Link>
                                </motion.div>

                                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#9ACD32]/10 text-[#9ACD32] border border-[#9ACD32]/20">
                                        <Database className="w-3.5 h-3.5" />
                                        CRM Development Company UK
                                    </span>
                                </motion.div>

                                <motion.h1 
                                    initial={{ opacity: 0, y: 20 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    transition={{ delay: 0.2 }}
                                    className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
                                >
                                    Custom CRM Development for Better Customer and <span className="text-[#9ACD32]">Sales Management</span>
                                </motion.h1>

                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    transition={{ delay: 0.3 }}
                                    className="text-base sm:text-lg text-slate-300 leading-relaxed font-light"
                                >
                                    Customer information is most useful when your team can find it, understand its history and act on it. If spreadsheets, disconnected tools or rigid software make it difficult to manage leads and customer relationships, a tailored CRM may help. Phoenix Creative Hub works with UK businesses to explore CRM development around their sales process, service model and reporting needs.
                                </motion.p>

                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    transition={{ delay: 0.4 }}
                                    className="flex flex-wrap gap-4 pt-2"
                                >
                                    <Button asChild size="lg" className="bg-[#9ACD32] hover:bg-[#86b528] text-slate-950 font-bold px-8 shadow-xl shadow-[#9ACD32]/20 rounded-xl h-13">
                                        <Link href="/contact">Discuss Your CRM Project</Link>
                                    </Button>
                                    <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white rounded-xl h-13">
                                        <Link href="#capabilities">Explore CRM Features</Link>
                                    </Button>
                                </motion.div>

                                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs text-slate-400">
                                    <div>
                                        <p className="font-bold text-white text-base">Pipeline</p>
                                        <p>Visibility & Tracking</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-base">Integrations</p>
                                        <p>APIs & Data Sync</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-base">Automations</p>
                                        <p>Tasks & Notifications</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Hero Card: CRM Architecture & Highlights */}
                            <div className="lg:col-span-5">
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl relative space-y-6"
                                >
                                    <div className="space-y-2">
                                        <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Architecture Overview</span>
                                        <h3 className="text-xl font-bold text-white">Unified Customer Experience Platform</h3>
                                        <p className="text-xs text-slate-400">Designed around your organisational structure and daily operational rhythms.</p>
                                    </div>

                                    <div className="space-y-3">
                                        {[
                                            { title: "Lead Ingestion & Qualification", desc: "Automated routing from web forms, ads & cold outreach" },
                                            { title: "Stage-Based Opportunity Funnel", desc: "Granular sales tracking with custom probability metrics" },
                                            { title: "Single Customer 360° View", desc: "Activity logs, communication history, proposals & orders" },
                                            { title: "Connected Enterprise Workflows", desc: "Bi-directional links with ERP, finance, email & billing" }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                                                <div className="w-5 h-5 rounded-full bg-[#9ACD32]/20 flex items-center justify-center shrink-0 mt-0.5">
                                                    <Check className="w-3 h-3 text-[#9ACD32]" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-white">{item.title}</p>
                                                    <p className="text-xs text-slate-400">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-2">
                                        <div className="p-4 rounded-xl bg-[#9ACD32]/10 border border-[#9ACD32]/20 text-xs text-slate-300">
                                            <p className="font-semibold text-white mb-1">UK Compliance & Governance</p>
                                            <p>UK GDPR compliant records, granular role-based access control, and complete audit logging for customer data.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 2. OVERVIEW: CRM SOFTWARE SHAPED AROUND YOUR CUSTOMER JOURNEY */}
                <section className="py-20 bg-white border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-6 space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#0B2921]/10 text-[#0B2921]">
                                    <Target className="w-3.5 h-3.5 text-[#9ACD32]" />
                                    Customer Journey Alignment
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2921] tracking-tight">
                                    CRM software shaped around your customer journey
                                </h2>
                                <p className="text-slate-600 leading-relaxed text-base">
                                    A customer relationship management system helps organise information and interactions across the customer lifecycle. A custom CRM can be designed around the way your organisation qualifies enquiries, manages opportunities, follows up with prospects, supports existing customers and reports on activity.
                                </p>
                                <p className="text-slate-600 leading-relaxed text-base">
                                    Building a bespoke CRM is not automatically the best option. An established CRM product may already meet your requirements and be quicker to configure. Custom development is worth assessing when important workflows, data relationships, permissions or integrations cannot be handled effectively by available tools.
                                </p>
                                <div className="pt-2 flex flex-wrap gap-4">
                                    <Link href="/services/custom-software-development" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2921] hover:text-[#9ACD32] transition-colors">
                                        <span>Custom Software Development</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <span className="text-slate-300">•</span>
                                    <Link href="/services/ai-development-automation" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2921] hover:text-[#9ACD32] transition-colors">
                                        <span>AI & Workflow Automation</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:col-span-6">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#9ACD32] transition-all">
                                        <div className="w-10 h-10 rounded-xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center mb-4">
                                            <Workflow className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-bold text-[#0B2921] text-base mb-2">Tailored Workflows</h3>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Reflect your exact pipeline stages, qualification criteria, and handoff protocols without software limitations.
                                        </p>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#9ACD32] transition-all">
                                        <div className="w-10 h-10 rounded-xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center mb-4">
                                            <ShieldCheck className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-bold text-[#0B2921] text-base mb-2">Granular Permissions</h3>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Control record visibility, field edits, and export rights strictly by team, department, or seniority level.
                                        </p>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#9ACD32] transition-all">
                                        <div className="w-10 h-10 rounded-xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center mb-4">
                                            <Server className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-bold text-[#0B2921] text-base mb-2">Unified Data Model</h3>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Connect relational entities cleanly—accounts, subsidiary companies, multiple contacts, contracts and billing.
                                        </p>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#9ACD32] transition-all">
                                        <div className="w-10 h-10 rounded-xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center mb-4">
                                            <FileSpreadsheet className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-bold text-[#0B2921] text-base mb-2">No Subscription Bloat</h3>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Pay for software built for your business rather than mounting per-seat charges for features your team never touches.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. WHAT CAN A CUSTOM CRM HELP MANAGE? */}
                <section id="capabilities" className="py-20 bg-slate-50 border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                            <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Capabilities</span>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#0B2921] tracking-tight">
                                What can a custom CRM help manage?
                            </h2>
                            <p className="text-slate-600 text-base">
                                From the initial enquiry through ongoing customer retention, custom CRM development enables you to structure every key operational stage.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {crmCapabilities.map((item, idx) => {
                                const IconComp = item.icon;
                                return (
                                    <div 
                                        key={idx} 
                                        className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-[#9ACD32] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                                    >
                                        <div className="space-y-4">
                                            <div className="w-12 h-12 rounded-xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center">
                                                <IconComp className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-bold text-[#0B2921]">{item.title}</h3>
                                            <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Extra Feature Card: Seamless Multi-Channel Touchpoints */}
                            <div className="bg-[#0B2921] p-8 rounded-2xl border border-[#0B2921] text-white flex flex-col justify-between">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 text-[#9ACD32] flex items-center justify-center">
                                        <Sparkles className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Bespoke Reporting Dashboards</h3>
                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        Tailored KPI dashboards for sales heads, project leads, and executive teams with automated scheduled exports and real-time alerts.
                                    </p>
                                </div>
                                <div className="pt-6">
                                    <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold text-[#9ACD32] hover:text-white transition-colors">
                                        <span>Request custom demo</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. CRM INTEGRATION AND DATA CONSIDERATIONS */}
                <section className="py-20 bg-white border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-6 space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#9ACD32]/20 text-[#0B2921]">
                                    <Server className="w-3.5 h-3.5 text-[#0B2921]" />
                                    Ecosystem & Connectivity
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2921] tracking-tight">
                                    CRM integration and data considerations
                                </h2>
                                <p className="text-slate-600 leading-relaxed text-base">
                                    A CRM may need to exchange information with a website, email platform, finance system, ERP or other business application. Integration feasibility depends on available APIs, data structures, permissions and the quality of existing records. Data migration also needs planning so that duplicates, missing fields and inconsistent formats are addressed appropriately.
                                </p>
                                <div className="space-y-3 pt-2">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#9ACD32] shrink-0 mt-0.5" />
                                        <p className="text-sm text-slate-700 font-medium"><strong>API Connectivity:</strong> Bi-directional sync with accounting platforms (Xero, QuickBooks), ERPs, and marketing tools.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#9ACD32] shrink-0 mt-0.5" />
                                        <p className="text-sm text-slate-700 font-medium"><strong>Data Cleansing:</strong> Deduplication, missing field reconciliation, and field mapping during system migration.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#9ACD32] shrink-0 mt-0.5" />
                                        <p className="text-sm text-slate-700 font-medium"><strong>Data Governance:</strong> Role-based access control, encryption in transit and at rest, and audit logs for UK compliance.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-6">
                                <div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#9ACD32]/10 rounded-full blur-3xl pointer-events-none" />
                                    
                                    <div className="relative z-10 space-y-6">
                                        <span className="text-xs font-bold text-[#9ACD32] uppercase tracking-wider">System Integration Map</span>
                                        <h3 className="text-xl font-bold">Connecting Your Operational Stack</h3>

                                        <div className="grid grid-cols-2 gap-4 text-xs">
                                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                                                <p className="font-bold text-white text-sm">Website & Portals</p>
                                                <p className="text-slate-400">Inbound leads, user registrations, and customer portal activity.</p>
                                            </div>
                                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                                                <p className="font-bold text-white text-sm">Email & Calendars</p>
                                                <p className="text-slate-400">Google Workspace and Microsoft 365 two-way synchronization.</p>
                                            </div>
                                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                                                <p className="font-bold text-white text-sm">Accounting & Invoicing</p>
                                                <p className="text-slate-400">Automatic invoice generation, payment status, and credit terms.</p>
                                            </div>
                                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                                                <p className="font-bold text-white text-sm">ERP & Inventory</p>
                                                <p className="text-slate-400">Order fulfilment, stock availability, and supply chain updates.</p>
                                            </div>
                                        </div>

                                        <p className="text-xs text-slate-400 italic">
                                            Our engineers carefully review API rate limits, webhooks, error queuing and automated retry logic to ensure reliable data consistency.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. OUR APPROACH TO CRM DEVELOPMENT */}
                <section className="py-20 bg-slate-50 border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                            <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Methodology</span>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#0B2921] tracking-tight">
                                Our approach to CRM development
                            </h2>
                            <p className="text-slate-600 text-base">
                                A systematic, transparent process designed to minimise operational disruption and build software your team will actually adopt.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {approaches.map((item, idx) => (
                                <div key={idx} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm relative space-y-4 flex flex-col justify-between">
                                    <div className="space-y-3">
                                        <span className="text-3xl font-black text-[#9ACD32]">{item.step}</span>
                                        <h3 className="text-lg font-bold text-[#0B2921]">{item.title}</h3>
                                        <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. CUSTOM CRM OR OFF-THE-SHELF PLATFORM? */}
                <section className="py-20 bg-white border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                            <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Strategic Decision</span>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#0B2921] tracking-tight">
                                Custom CRM or an off-the-shelf platform?
                            </h2>
                            <p className="text-slate-600 text-base leading-relaxed">
                                Compare the cost and flexibility of a custom build with the configuration options and subscription model of established CRM products. Consider implementation, training, integrations, data ownership, maintenance and the effort needed to change the system later. We can discuss the requirements and help identify what needs to be customised.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {/* Off-the-shelf */}
                            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
                                <div className="space-y-2">
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Commercial Products</span>
                                    <h3 className="text-2xl font-bold text-[#0B2921]">Off-the-shelf Platform</h3>
                                    <p className="text-xs text-slate-600">HubSpot, Salesforce, Zoho, Microsoft Dynamics, etc.</p>
                                </div>

                                <ul className="space-y-3 text-sm text-slate-700">
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-[#9ACD32] shrink-0 mt-0.5" />
                                        <span>Faster initial deployment for standard B2B sales pipelines</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-[#9ACD32] shrink-0 mt-0.5" />
                                        <span>Broad marketplace of native third-party plugin connectors</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                                        <span>Recurring per-seat subscription fees that scale sharply</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                                        <span>Complex business logic often requires cumbersome workarounds</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Bespoke CRM */}
                            <div className="p-8 rounded-2xl bg-[#0B2921] text-white space-y-6 relative overflow-hidden border border-[#0B2921]">
                                <div className="space-y-2">
                                    <span className="text-xs font-bold uppercase tracking-wider text-[#9ACD32]">Tailored Engineering</span>
                                    <h3 className="text-2xl font-bold text-white">Custom CRM Development</h3>
                                    <p className="text-xs text-slate-300">Software built specifically around your operations.</p>
                                </div>

                                <ul className="space-y-3 text-sm text-slate-200">
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-[#9ACD32] shrink-0 mt-0.5" />
                                        <span>100% intellectual property ownership and data sovereignty</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-[#9ACD32] shrink-0 mt-0.5" />
                                        <span>Zero per-user licensing fees as your sales and support teams grow</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-[#9ACD32] shrink-0 mt-0.5" />
                                        <span>Custom entities, validation rules, and automated workflows</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-[#9ACD32] shrink-0 mt-0.5" />
                                        <span>Bespoke integrations with legacy databases, custom apps, and internal tools</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. UK REGIONAL FOCUS */}
                <section className="py-20 bg-slate-50 border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-7 space-y-6">
                                <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">UK Nationwide Delivery</span>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2921] tracking-tight">
                                    CRM development for UK businesses
                                </h2>
                                <p className="text-slate-600 leading-relaxed text-base">
                                    We welcome CRM project enquiries from London, Manchester, Birmingham and across the UK. Whether you are a small business replacing spreadsheets or a larger organisation reviewing a complex sales process, the conversation should begin with your users and the way customer relationships are managed.
                                </p>
                                <div className="grid sm:grid-cols-3 gap-4 pt-2">
                                    <div className="p-4 rounded-xl bg-white border border-slate-200">
                                        <MapPin className="w-5 h-5 text-[#9ACD32] mb-2" />
                                        <p className="font-bold text-[#0B2921] text-sm">London & South East</p>
                                        <p className="text-xs text-slate-500">Fintech, B2B services & consultancies</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white border border-slate-200">
                                        <MapPin className="w-5 h-5 text-[#9ACD32] mb-2" />
                                        <p className="font-bold text-[#0B2921] text-sm">Manchester & North</p>
                                        <p className="text-xs text-slate-500">Ecommerce, distribution & tech</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white border border-slate-200">
                                        <MapPin className="w-5 h-5 text-[#9ACD32] mb-2" />
                                        <p className="font-bold text-[#0B2921] text-sm">Birmingham & Midlands</p>
                                        <p className="text-xs text-slate-500">Manufacturing, logistics & trade</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-5">
                                <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5">
                                    <h3 className="font-bold text-[#0B2921] text-lg">Why UK Companies Choose Us</h3>
                                    <div className="space-y-4 text-xs text-slate-600">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-[#9ACD32] shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-slate-900">Direct Engineering Collaboration</p>
                                                <p>Work directly with experienced developers and systems architects in your time zone.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-[#9ACD32] shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-slate-900">Practical Scoping & Fair Advice</p>
                                                <p>If an existing SaaS product fits your needs better, we will tell you honestly during scoping.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-[#9ACD32] shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-slate-900">Long-term Maintenance & Support</p>
                                                <p>Ongoing maintenance, feature enhancements, and system monitoring for peace of mind.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. FAQ SECTION */}
                <section className="py-20 bg-white border-b border-slate-200">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center space-y-4 mb-14">
                            <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Answers to Common Questions</span>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#0B2921] tracking-tight">
                                Frequently asked questions
                            </h2>
                            <p className="text-slate-600 text-sm">
                                Clear information on scoping, technology choices, data migration, and CRM investment.
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

                {/* 9. CTA SECTION: DISCUSS YOUR CRM REQUIREMENTS */}
                <section className="py-20 bg-gradient-to-br from-[#0B2921] to-[#12382D] text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#9ACD32] rounded-full blur-[120px]" />
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#9ACD32] rounded-full blur-[120px]" />
                    </div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-[#9ACD32]">
                            <Sparkles className="w-3.5 h-3.5" />
                            Ready to Begin?
                        </span>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                            Discuss your CRM requirements
                        </h2>

                        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                            Tell us how you manage leads and customers today, what is difficult and which systems need to connect. If you have existing CRM software, include its name and the changes you are considering.
                        </p>

                        <p className="text-xs sm:text-sm text-[#9ACD32] font-medium max-w-xl mx-auto">
                            Request a CRM development consultation with Phoenix Creative Hub. Discuss your sales workflows, integration needs and the best route towards a more suitable CRM.
                        </p>

                        <div className="pt-4 flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" className="bg-[#9ACD32] hover:bg-[#86b528] text-slate-950 font-bold px-8 shadow-xl shadow-[#9ACD32]/20 rounded-xl h-14">
                                <Link href="/contact">Request a Consultation</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white rounded-xl h-14">
                                <Link href="/about">About Phoenix Creative Hub</Link>
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
