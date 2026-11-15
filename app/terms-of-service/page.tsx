import React from "react";
import type { Metadata } from "next";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
    title: "Terms of Service | Service Agreement",
    description: "Read Phoenix Creative Hub UK's terms of service. Understand the terms, consulting guidelines, and service level policies for custom software development projects.",
};

export default function TermsOfServicePage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 pt-20 md:pt-22">
            <ServiceHeader
                title="Terms of Service"
                subtitle="The terms, agreements, and policies governing your custom software development projects."
                badge="Legal Policies"
                icon={<FileText className="w-3.5 h-3.5" />}
            />

            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-700 leading-relaxed space-y-8 font-medium">
                <section>
                    <h2 className="text-2xl font-display font-bold text-[#111111] mb-4 border-b pb-2">1. Agreement to Terms</h2>
                    <p className="text-sm">
                        By accessing our website and placing project inquiry requests or executing custom service contracts with our sales team, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not proceed with project execution or use our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold text-[#111111] mb-4 border-b pb-2">2. Custom Software Scope and Specifications</h2>
                    <p className="text-sm">
                        All software development, UI/UX designs, and cloud engineering tasks are custom-built based on the project specifications (SRS, database schemas, mockups) approved by the client in writing. It is the client's responsibility to ensure that all business logic rules match their operational requirements. While Phoenix Creative Hub UK performs basic feasibility reviews and quality assurance, we are not liable for business bugs or logic errors resulting from faulty specification inputs.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold text-[#111111] mb-4 border-b pb-2">3. Project Pricing and Billing</h2>
                    <p className="text-sm">
                        Quotations and timeline estimations generated during consultations are calculated based on resource allocation profiles. Phoenix Creative Hub UK reserves the right to modify pricing if technical reviews or feature scope creep reveal additional system integrations, third-party API dependencies, custom microservice setups, or hosting configurations not captured by the initial estimate. No modifications will be made without client approval.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold text-[#111111] mb-4 border-b pb-2">4. Warranties and Revisions</h2>
                    <p className="text-sm">
                        We write code in compliance with modern standards (modular layouts, TypeScript types, and secure API practices). We perform unit testing and automated QA before delivering code. In case of deployment bugs, clients must report the issues within 30 days of release to qualify for free revisions or bug fixes.
                    </p>
                </section>
                </div>
            </section>
        </div>
    );
}
