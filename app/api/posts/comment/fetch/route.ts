import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const postId = body.postId;
        const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://backend.phoenixcreativehub.co.uk/wp-json/sandbox/v1';

        if (!postId) {
            return NextResponse.json({ error: 'Post ID is required' }, { status: 400 });
        }

        const response = await fetch(`${apiUrl}/posts/${postId}/get-comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            return NextResponse.json([]);
        }

        const data = await response.json();
        return NextResponse.json(Array.isArray(data) ? data : []);
    } catch (error) {
        console.error('Error in comments fetch proxy:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
