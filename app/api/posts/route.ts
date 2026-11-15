import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json().catch(() => ({}));
        const page = body.page || 1;
        const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://backend.phoenixcreativehub.co.uk/wp-json/sandbox/v1';
        
        const response = await fetch(`${apiUrl}/posts?page=${page}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Server API responded with status: ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error: any) {
        console.error('Error in local API proxy:', error);
        return NextResponse.json(
            { error: 'Failed to fetch posts from Server' },
            { status: 500 }
        );
    }
}
