import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const postId = body.id;
        const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://backend.phoenixcreativehub.co.uk/wp-json/sandbox/v1';

        if (!postId) {
            return NextResponse.json({ error: 'Post ID is required' }, { status: 400 });
        }

        const response = await fetch(`${apiUrl}/posts/${postId}/submit-comment`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: body.name,
                email: body.email,
                content: body.content
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json(
                { error: data.message || 'Failed to submit comment' },
                { status: response.status }
            );
        }

        return NextResponse.json({ success: true, comment: data });
    } catch (error) {
        console.error('Error in comment submission proxy:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
