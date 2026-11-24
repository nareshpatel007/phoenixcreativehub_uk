"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft, CheckCircle2, ChevronDown, Database,
    Layers, Cpu, ArrowRight,
    Users, Target, Award, Check, TrendingUp, ShieldCheck,
    Compass, BarChart3, HelpCircle, Phone, Mail, MapPin,
    Sparkles, Workflow, MessageSquare, LayoutGrid, Server,
    Building2, RefreshCw, Filter, FileSpreadsheet, ShieldAlert,
    Boxes, ShoppingCart, Lock, ClipboardCheck, ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
    service: any;
}

export default function ERPDevelopmentDetailClient({ service }: Props) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            q: "What is ERP software?",
            a: "ERP software helps an organisation manage and connect information and processes across business functions. The modules required depend on the organisation's operations."
        },
        {
            q: "What is custom ERP development?",
            a: "Custom ERP development involves building or extending software to support an organisation's specific processes, data, user roles and integration requirements."
        },
        {
            q: "Is custom ERP better than off-the-shelf ERP?",
            a: "Not necessarily. An established ERP platform may be more practical if it meets the business requirements. Custom development is worth considering where essential processes cannot be supported effectively through configuration."
        },
        {
            q: "Can an ERP system integrate with CRM software?",
            a: "Integration may be possible where both systems provide suitable interfaces. The design should define which system owns each data item, how updates are synchronised and how access is controlled."
        },
        {
            q: "How much does ERP development cost in the UK?",
            a: "Costs vary with the number of modules, complexity of workflows, integrations, data migration, reporting, security and implementation requirements. A detailed estimate requires a scoped brief."
        }
    ];

    const erpCoordinations = [
        {
            icon: Workflow,
            title: "Operational workflows",
            description: "Define how work moves between teams, what information is required at each stage and who is responsible for the next action. A well-planned system can make process status easier to follow."
        },
        {
            icon: Boxes,
            title: "Stock, purchasing and order information",
            description: "Where relevant to the business, ERP workflows can help manage product records, purchasing activity, stock movements and order information. The design must reflect the organisation's actual operating model and data requirements."
        },
        {
            icon: BarChart3,
            title: "Department and management visibility",
            description: "Bring relevant information into shared views and reports so authorised users can understand activity across the business. Reporting depends on consistent definitions and reliable source data."
        },
        {
            icon: Lock,
            title: "Approvals and permissions",
            description: "Support controlled processes with role-based access and approval steps. Permissions should be planned around responsibilities and the sensitivity of business information."
        }
    ];

    const projectPhases = [
        {
            step: "01",
            title: "Map the current operation",
            desc: "Understand departments, workflows, systems, data sources and pain points. Identify where information is duplicated, where delays occur and which processes need better visibility."
        },
        {
            step: "02",
            title: "Define the required scope",
            desc: "Prioritise modules, user roles, reports, integrations and approval processes. Separate essential requirements from improvements that can be delivered later."
        },
        {
            step: "03",
            title: "Plan data and controls",
            desc: "Consider data quality, migration, access permissions, audit needs, security and operational continuity. These areas should be addressed before implementation decisions are finalised."
        },
        {
            step: "04",
            title: "Test and prepare users",
            desc: "Validate workflows with representative scenarios and involve the people who will use the system. Training and change management are important to adoption."
        },
        {
            step: "05",
            title: "Review after implementation",
            desc: "Monitor how the system supports the agreed processes and identify areas for refinement. Ongoing support and ownership arrangements should be established."
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
                                        <Layers className="w-3.5 h-3.5" />
                                        ERP Development Company UK
                                    </span>
                                </motion.div>

                                <motion.h1 
                                    initial={{ opacity: 0, y: 20 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    transition={{ delay: 0.2 }}
                                    className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
                                >
                                    Custom ERP Development Around Your <span className="text-[#9ACD32]">Business Operations</span>
                                </motion.h1>

                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    transition={{ delay: 0.3 }}
                                    className="text-base sm:text-lg text-slate-300 leading-relaxed font-light"
                                >
                                    As a business grows, information and processes can become spread across departments, spreadsheets and separate software. This can make it harder to understand what is happening across the organisation. Phoenix Creative Hub helps UK businesses assess ERP development requirements and plan systems around the processes they need to manage.
                                </motion.p>

                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    transition={{ delay: 0.4 }}
                                    className="flex flex-wrap gap-4 pt-2"
                                >
                                    <Button asChild size="lg" className="bg-[#9ACD32] hover:bg-[#86b528] text-slate-950 font-bold px-8 shadow-xl shadow-[#9ACD32]/20 rounded-xl h-13">
                                        <Link href="/contact">Arrange an ERP Consultation</Link>
                                    </Button>
                                    <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white rounded-xl h-13">
                                        <Link href="#modules">Explore Core Modules</Link>
                                    </Button>
                                </motion.div>

                                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs text-slate-400">
                                    <div>
                                        <p className="font-bold text-white text-base">Connected</p>
                                        <p>Cross-Department Data</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-base">Customised</p>
                                        <p>Your Exact Workflows</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-base">Governance</p>
                                        <p>UK GDPR & Role Controls</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Hero Card: ERP Stack Architecture */}
                            <div className="lg:col-span-5">
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl relative space-y-6"
                                >
                                    <div className="space-y-2">
                                        <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Operational Architecture</span>
                                        <h3 className="text-xl font-bold text-white">Centralised Resource Control</h3>
                                        <p className="text-xs text-slate-400">Connecting teams, inventory, procurement, and management reporting.</p>
                                    </div>

                                    <div className="space-y-3">
                                        {[
                                            { title: "Centralised Operational Hub", desc: "Single source of truth replacing fragmented spreadsheets" },
                                            { title: "Inventory & Procurement Control", desc: "Real-time stock movement, purchase orders and re-order thresholds" },
                                            { title: "Departmental Access Matrix", desc: "Fine-grained permissions and approval authorization tiers" },
                                            { title: "Live Management Dashboards", desc: "Automated aggregation of financial, project and sales metrics" }
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
                                            <p className="font-semibold text-white mb-1">Auditability & Security</p>
                                            <p>Full transaction logging, field-level revision history, and encrypted storage for enterprise operations.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 2. OVERVIEW: ERP SOFTWARE THAT REFLECTS HOW YOUR ORGANISATION OPERATES */}
                <section className="py-20 bg-white border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-6 space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#0B2921]/10 text-[#0B2921]">
                                    <Target className="w-3.5 h-3.5 text-[#9ACD32]" />
                                    Operational Reality
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2921] tracking-tight">
                                    ERP software that reflects how your organisation operates
                                </h2>
                                <p className="text-slate-600 leading-relaxed text-base">
                                    Enterprise resource planning software brings information and processes from different business functions into a connected system. Depending on the organisation, this may involve areas such as purchasing, stock, orders, finance-related workflows, production, projects or reporting. The modules and integrations should be determined by the business rather than selected from a generic checklist.
                                </p>
                                <p className="text-slate-600 leading-relaxed text-base">
                                    A custom ERP solution may be appropriate when standard products cannot support essential workflows or when the organisation needs a specific combination of processes and integrations. However, established ERP platforms may provide a more suitable starting point. A requirements assessment should compare configuration, integration and custom development before a decision is made.
                                </p>
                                <div className="pt-2 flex flex-wrap gap-4">
                                    <Link href="/services/custom-software-development" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2921] hover:text-[#9ACD32] transition-colors">
                                        <span>Custom Software Development</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <span className="text-slate-300">•</span>
                                    <Link href="/services/crm-development" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2921] hover:text-[#9ACD32] transition-colors">
                                        <span>CRM Development</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:col-span-6">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#9ACD32] transition-all">
                                        <div className="w-10 h-10 rounded-xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center mb-4">
                                            <Building2 className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-bold text-[#0B2921] text-base mb-2">Cross-Functional Unity</h3>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Break down silos between warehouse, procurement, accounting, sales, and operations teams.
                                        </p>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#9ACD32] transition-all">
                                        <div className="w-10 h-10 rounded-xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center mb-4">
                                            <Workflow className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-bold text-[#0B2921] text-base mb-2">Zero Rigid Constraints</h3>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Adapt software to your commercial processes rather than forcing your business to adapt to standard software templates.
                                        </p>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#9ACD32] transition-all">
                                        <div className="w-10 h-10 rounded-xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center mb-4">
                                            <Database className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-bold text-[#0B2921] text-base mb-2">Full Data Ownership</h3>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Store and manage proprietary commercial data securely within your own controlled infrastructure and database schema.
                                        </p>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#9ACD32] transition-all">
                                        <div className="w-10 h-10 rounded-xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center mb-4">
                                            <TrendingUp className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-bold text-[#0B2921] text-base mb-2">Predictable Scaling</h3>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Add team members, warehouses, entities, and new business lines without exponential tier jumps in licensing fees.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. WHAT CAN AN ERP SYSTEM HELP COORDINATE? */}
                <section id="modules" className="py-20 bg-slate-50 border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                            <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Capabilities</span>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#0B2921] tracking-tight">
                                What can an ERP system help coordinate?
                            </h2>
                            <p className="text-slate-600 text-base">
                                From tracking materials and inventory to securing multi-tiered approvals, custom ERP development aligns key commercial levers.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {erpCoordinations.map((item, idx) => {
                                const IconComp = item.icon;
                                return (
                                    <div 
                                        key={idx} 
                                        className="bg-white p-7 rounded-2xl border border-slate-200 hover:border-[#9ACD32] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                                    >
                                        <div className="space-y-4">
                                            <div className="w-12 h-12 rounded-xl bg-[#0B2921] text-[#9ACD32] flex items-center justify-center">
                                                <IconComp className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-lg font-bold text-[#0B2921]">{item.title}</h3>
                                            <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* 4. ERP INTEGRATION WITH EXISTING BUSINESS SYSTEMS */}
                <section className="py-20 bg-white border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-6 space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#9ACD32]/20 text-[#0B2921]">
                                    <Server className="w-3.5 h-3.5 text-[#0B2921]" />
                                    Integration & Data Exchange
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2921] tracking-tight">
                                    ERP integration with existing business systems
                                </h2>
                                <p className="text-slate-600 leading-relaxed text-base">
                                    ERP projects often involve connections with accounting tools, CRM platforms, e-commerce systems, warehouse software or other applications. Integration planning should identify which system owns each data item, how updates are exchanged, how errors are handled and who can access the information.
                                </p>
                                <div className="space-y-3 pt-2">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#9ACD32] shrink-0 mt-0.5" />
                                        <p className="text-sm text-slate-700 font-medium"><strong>Single Data Ownership:</strong> Clear master data records for customers, products, pricing, and accounting entities.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#9ACD32] shrink-0 mt-0.5" />
                                        <p className="text-sm text-slate-700 font-medium"><strong>Fault-Tolerant Pipelines:</strong> Automated queues, idempotency, and alert systems to handle sync latency or network timeouts.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#9ACD32] shrink-0 mt-0.5" />
                                        <p className="text-sm text-slate-700 font-medium"><strong>Security & Auditing:</strong> Token-based API handshakes, granular endpoint scoping, and immutable action tracking.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-6">
                                <div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#9ACD32]/10 rounded-full blur-3xl pointer-events-none" />
                                    
                                    <div className="relative z-10 space-y-6">
                                        <span className="text-xs font-bold text-[#9ACD32] uppercase tracking-wider">Enterprise Connectors</span>
                                        <h3 className="text-xl font-bold">Unifying Your Technology Landscape</h3>

                                        <div className="grid grid-cols-2 gap-4 text-xs">
                                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                                                <p className="font-bold text-white text-sm">Finance & Accounting</p>
                                                <p className="text-slate-400">Xero, Sage, QuickBooks, or custom general ledgers.</p>
                                            </div>
                                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                                                <p className="font-bold text-white text-sm">CRM & Sales Pipelines</p>
                                                <p className="text-slate-400">HubSpot, Salesforce, custom CRM synchronisation.</p>
                                            </div>
                                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                                                <p className="font-bold text-white text-sm">E-commerce & Marketplaces</p>
                                                <p className="text-slate-400">Shopify, WooCommerce, Amazon, eBay API endpoints.</p>
                                            </div>
                                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                                                <p className="font-bold text-white text-sm">WMS & Logistics</p>
                                                <p className="text-slate-400">Courier APIs, barcode scanners, tracking manifests.</p>
                                            </div>
                                        </div>

                                        <p className="text-xs text-slate-400 italic">
                                            We design robust API layers that safeguard data integrity across high-frequency operational updates.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. PLANNING A CUSTOM ERP DEVELOPMENT PROJECT */}
                <section className="py-20 bg-slate-50 border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                            <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Implementation Lifecycle</span>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#0B2921] tracking-tight">
                                Planning a custom ERP development project
                            </h2>
                            <p className="text-slate-600 text-base">
                                A staged, risk-controlled engineering delivery methodology structured to maintain continuity across existing operations.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
                            {projectPhases.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative space-y-3 flex flex-col justify-between">
                                    <div className="space-y-2">
                                        <span className="text-2xl font-black text-[#9ACD32]">{item.step}</span>
                                        <h3 className="text-base font-bold text-[#0B2921]">{item.title}</h3>
                                        <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. CUSTOM ERP OR AN EXISTING ERP PLATFORM? */}
                <section className="py-20 bg-white border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                            <span className="text-xs font-bold text-[#9ACD32] tracking-wider uppercase">Strategic Comparison</span>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#0B2921] tracking-tight">
                                Custom ERP or an existing ERP platform?
                            </h2>
                            <p className="text-slate-600 text-base leading-relaxed">
                                The decision should account for business complexity, required modules, integration options, implementation effort, licensing, customisation, support and long-term ownership. A custom build offers control over specific workflows but also creates responsibility for maintaining the software. An existing platform may reduce development effort if it fits the operation. We can discuss the trade-offs against your requirements.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {/* Off-the-shelf */}
                            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
                                <div className="space-y-2">
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Commercial Standard</span>
                                    <h3 className="text-2xl font-bold text-[#0B2921]">Existing ERP Platform</h3>
                                    <p className="text-xs text-slate-600">NetSuite, SAP Business One, Microsoft Dynamics 365, Odoo</p>
                                </div>

                                <ul className="space-y-3 text-sm text-slate-700">
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-[#9ACD32] shrink-0 mt-0.5" />
                                        <span>Established global compliance modules and accounting engines</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-[#9ACD32] shrink-0 mt-0.5" />
                                        <span>Faster setup if standard processes closely align with your organisation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                                        <span>Substantial recurring user licensing, partner consulting, and add-on costs</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                                        <span>Bespoke customisation can be technically brittle and complex to maintain</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Bespoke ERP */}
                            <div className="p-8 rounded-2xl bg-[#0B2921] text-white space-y-6 relative overflow-hidden border border-[#0B2921]">
                                <div className="space-y-2">
                                    <span className="text-xs font-bold uppercase tracking-wider text-[#9ACD32]">Tailored Architecture</span>
                                    <h3 className="text-2xl font-bold text-white">Custom ERP Development</h3>
                                    <p className="text-xs text-slate-300">Software shaped precisely to your operational workflow.</p>
                                </div>

                                <ul className="space-y-3 text-sm text-slate-200">
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-[#9ACD32] shrink-0 mt-0.5" />
                                        <span>Complete operational alignment without forced compromise on steps</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-[#9ACD32] shrink-0 mt-0.5" />
                                        <span>Full ownership of IP, code, database schemas, and commercial data</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-[#9ACD32] shrink-0 mt-0.5" />
                                        <span>No per-user licensing penalties as workforce and contractors scale</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-[#9ACD32] shrink-0 mt-0.5" />
                                        <span>Custom interfaces engineered for maximum speed and daily team adoption</span>
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
                                    ERP development for UK businesses
                                </h2>
                                <p className="text-slate-600 leading-relaxed text-base">
                                    Phoenix Creative Hub welcomes ERP enquiries from businesses in London, Manchester, Birmingham and across the UK. Whether you are reviewing fragmented systems or planning a more connected operational platform, we can begin by understanding the processes and outcomes involved.
                                </p>
                                <div className="grid sm:grid-cols-3 gap-4 pt-2">
                                    <div className="p-4 rounded-xl bg-white border border-slate-200">
                                        <MapPin className="w-5 h-5 text-[#9ACD32] mb-2" />
                                        <p className="font-bold text-[#0B2921] text-sm">London & South East</p>
                                        <p className="text-xs text-slate-500">Professional services, logistics & trade</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white border border-slate-200">
                                        <MapPin className="w-5 h-5 text-[#9ACD32] mb-2" />
                                        <p className="font-bold text-[#0B2921] text-sm">Manchester & North</p>
                                        <p className="text-xs text-slate-500">Manufacturing, warehousing & retail</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white border border-slate-200">
                                        <MapPin className="w-5 h-5 text-[#9ACD32] mb-2" />
                                        <p className="font-bold text-[#0B2921] text-sm">Birmingham & Midlands</p>
                                        <p className="text-xs text-slate-500">Engineering, supply chain & distribution</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-5">
                                <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5">
                                    <h3 className="font-bold text-[#0B2921] text-lg">Why Work With Phoenix Creative Hub</h3>
                                    <div className="space-y-4 text-xs text-slate-600">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-[#9ACD32] shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-slate-900">Pragmatic Technical Scoping</p>
                                                <p>We review your processes honestly and recommend custom build only where it provides genuine ROI.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-[#9ACD32] shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-slate-900">Modern Architecture</p>
                                                <p>Cloud-native, responsive, and secure web architectures that are fast and intuitive for staff.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-[#9ACD32] shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-slate-900">Dedicated UK Team Support</p>
                                                <p>Direct communication with architects and engineers throughout planning, build, and deployment.</p>
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
                                Practical guidance on ERP scope, integration with CRM, costs, and software selection.
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

                {/* 9. CTA SECTION: TALK TO US ABOUT YOUR ERP PROJECT */}
                <section className="py-20 bg-gradient-to-br from-[#0B2921] to-[#12382D] text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#9ACD32] rounded-full blur-[120px]" />
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#9ACD32] rounded-full blur-[120px]" />
                    </div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-[#9ACD32]">
                            <Sparkles className="w-3.5 h-3.5" />
                            Streamline Your Operations
                        </span>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                            Talk to us about your ERP project
                        </h2>

                        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                            Outline the departments and processes you want to connect, the systems currently in use and the problems you want to solve. If you have a process map or system requirements document, it can help make the first discussion more focused.
                        </p>

                        <p className="text-xs sm:text-sm text-[#9ACD32] font-medium max-w-xl mx-auto">
                            Arrange an ERP development consultation. Discuss your operational requirements with Phoenix Creative Hub and explore a suitable project scope.
                        </p>

                        <div className="pt-4 flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" className="bg-[#9ACD32] hover:bg-[#86b528] text-slate-950 font-bold px-8 shadow-xl shadow-[#9ACD32]/20 rounded-xl h-14">
                                <Link href="/contact">Arrange an ERP Consultation</Link>
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
