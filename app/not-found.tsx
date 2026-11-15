"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#111111] relative overflow-hidden py-12 px-4">
            {/* Glow blobs background */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#9ACD32]/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#9ACD32]/5 blur-[100px] pointer-events-none" />
            
            {/* Circuit grid pattern */}
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#9ACD32_1px,transparent_1px),linear-gradient(to_bottom,#9ACD32_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            <div className="max-w-xl w-full text-center relative z-10 space-y-8">
                {/* 404 Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative inline-flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-[#9ACD32]/20 rounded-full blur-3xl" />
                    <div className="w-28 h-28 rounded-3xl bg-white/5 backdrop-blur-md border border-[#9ACD32]/20 flex items-center justify-center shadow-2xl relative">
                        <AlertCircle className="w-14 h-14 text-[#9ACD32]" />
                    </div>
                </motion.div>

                {/* Error message text */}
                <div className="space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-8xl md:text-9xl font-display font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#9ACD32] to-[#111111]"
                    >
                        404
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight"
                    >
                        Page Not Found
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-slate-300 text-base md:text-lg max-w-md mx-auto leading-relaxed"
                    >
                        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                    </motion.p>
                </div>

                {/* Return Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                >
                    <Button asChild size="lg" className="bg-[#9ACD32] hover:bg-[#9ACD32]/90 text-white font-semibold h-12 px-8 rounded-xl w-full sm:w-auto shadow-lg shadow-[#9ACD32]/20">
                        <Link href="/">
                            <Home className="w-4 h-4 mr-2" /> Back to Home
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-[#9ACD32]/30 hover:bg-[#9ACD32]/10 text-white hover:text-white font-semibold h-12 px-8 rounded-xl w-full sm:w-auto backdrop-blur-sm">
                        <Link href="/contact">
                            Contact Us <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
