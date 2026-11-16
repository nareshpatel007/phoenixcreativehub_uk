import React from "react";
import type { Metadata } from "next";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
    title: "Privacy Policy | Data Protection Policy",
    description: "Read Phoenix Creative Hub UK's privacy policy. Learn how we handle, store, and protect your custom software specifications and client information securely.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 pt-20 md:pt-22">
            <ServiceHeader
                title="Privacy Policy"
                subtitle="How we collect, use, and safeguard your personal data and project specifications."
                badge="Legal Policies"
                icon={<Shield className="w-3.5 h-3.5" />}
            />

            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-700 leading-relaxed space-y-8 font-medium">
                <section>
                    <h2 className="text-2xl font-display font-bold text-[#111111] mb-4 border-b pb-2">1. Overview</h2>
                    <p className="text-sm">
                        At Phoenix Creative Hub UK, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold text-[#111111] mb-4 border-b pb-2">2. The Data We Collect About You</h2>
                    <p className="text-sm mb-3">
                        Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store, and transfer different kinds of personal data about you, including:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                        <li><strong>Identity Data</strong> includes first name, last name, username, or similar identifier.</li>
                        <li><strong>Contact Data</strong> includes billing address, delivery address, email address, and telephone numbers.</li>
                        <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting, and location.</li>
                        <li><strong>Project Data</strong> includes requirements documents, workflow specifications, database schemas, and codebase references uploaded or shared for custom software solutions.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold text-[#111111] mb-4 border-b pb-2">3. Codebase Security and Intellectual Property</h2>
                    <p className="text-sm">
                        We understand that your project requirements, business workflows, and intellectual property represent highly valuable assets. Phoenix Creative Hub UK enforces strict data access controls. Your project details are only accessed by authorized software architects and engineering staff solely to generate feasibility reports, develop system components, and execute consulting services. We never share, sell, or disclose your data to third parties.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-display font-bold text-[#111111] mb-4 border-b pb-2">4. Contact Us</h2>
                    <p className="text-sm">
                        If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact our support team at:
                    </p>
                    <div className="mt-4 p-5 bg-slate-50 border border-slate-100 rounded-xl text-sm">
                        <p className="font-bold text-[#111111] mb-1">Phoenix Creative Hub UK</p>
                        <p>Suite RA01, 195-197 Wood Street, London, E17 3NU, United Kingdom</p>
                        <p className="mt-2 text-primary font-semibold">Email: hello@phoenixcreativehub.co.uk</p>
                    </div>
                </section>
                </div>
            </section>
        </div>
    );
}
