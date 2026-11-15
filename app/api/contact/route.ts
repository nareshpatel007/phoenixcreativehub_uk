import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://backend.phoenixcreativehub.co.uk/wp-json/sandbox/v1';

        const response = await fetch(`${apiUrl}/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: body.name,
                company_name: body.company || '',
                phone: body.phone || '',
                service: body.serviceType,
                message: body.message,
                email: body.email
            }),
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
            return NextResponse.json(
                { error: data.message || 'Failed to send message' },
                { status: response.status }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error in contact form proxy:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
