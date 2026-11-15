"use client";

import React from "react";
import Link from "next/link";
import { WifiOff, Home, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OfflinePage() {
    const handleReload = () => {
        if (typeof window !== "undefined") {
            window.location.reload();
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#111111] text-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full text-center space-y-8 p-8 rounded-3xl border border-slate-800 bg-gradient-to-br from-[#1A1A1A] to-[#111111] shadow-2xl relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-20 h-20 rounded-2xl bg-[#9ACD32]/10 border border-[#9ACD32]/25 flex items-center justify-center text-[#9ACD32] animate-pulse">
                        <WifiOff className="w-10 h-10" />
                    </div>
                    
                    <h1 className="text-3xl font-display font-extrabold tracking-tight">
                        Connection Lost
                    </h1>
                    
                    <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                        It looks like you're offline. Don't worry, your cached pages are still accessible. Check your connection or try again.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button 
                        onClick={handleReload}
                        className="bg-primary hover:bg-primary/90 text-white font-bold h-11 px-6 rounded-xl flex items-center gap-2 cursor-pointer"
                    >
                        <RefreshCw className="w-4 h-4" /> Try Again
                    </Button>
                    <Button 
                        asChild
                        variant="outline"
                        className="border-slate-700 hover:bg-slate-800 text-slate-350 hover:text-white font-bold h-11 px-6 rounded-xl flex items-center gap-2"
                    >
                        <Link href="/">
                            <Home className="w-4 h-4" /> Back Home
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
