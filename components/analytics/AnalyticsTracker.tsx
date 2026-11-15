"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function AnalyticsTracker() {
    const pathname = usePathname();

    useEffect(() => {
        // Skip tracking on localhost
        if (typeof window !== 'undefined' && 
            (window.location.hostname === 'localhost' || 
             window.location.hostname === '127.0.0.1')) {
            return;
        }

        const trackPageView = async () => {
            try {
                await fetch('https://backend.phoenixcreativehub.co.uk/wp-json/nextjs-analytics/v1/visit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        path: pathname,
                        user_agent: navigator.userAgent,
                        referrer: document.referrer,
                    }),
                });
            } catch (error) {
                console.error('Failed to track page view:', error);
            }
        };

        trackPageView();
    }, [pathname]);

    return null;
}
