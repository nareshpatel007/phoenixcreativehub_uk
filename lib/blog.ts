export interface BlogAuthor {
    name: string;
    role: string;
    avatar: string;
}

export type BlockType = 'paragraph' | 'heading' | 'list' | 'quote' | 'callout' | 'code';

export interface ContentBlock {
    type: BlockType;
    text?: string;
    items?: string[];
    level?: number;
    code?: string;
    language?: string;
    variant?: 'info' | 'warning' | 'tip';
}

export interface BlogPost {
    slug: string;
    tag: string;
    title: string;
    desc: string;
    date: string;
    readTime: string;
    author: BlogAuthor;
    color: string;
    image: string;
    content: ContentBlock[];
}

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "building-scalable-nextjs-microservices",
        tag: "Web Dev",
        title: "Building Scalable Next.js Platforms",
        desc: "Essential architecture patterns, SSR optimizations, and backend integrations for large-scale SaaS.",
        date: "June 24, 2026",
        readTime: "6 min read",
        author: {
            name: "Dr. Aris Thorne",
            role: "Principal Software Architect",
            avatar: "AT"
        },
        color: "from-primary/10 to-blue-50",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
        content: [
            {
                type: "paragraph",
                text: "As system traffic scales, maintaining fast load times and clean routing behavior shifted Next.js from a simple UI wrapper to a complete full-stack web framework. Under high user loads, layout renders and API route handlers must be carefully optimized to bypass server bottlenecks."
            },
            {
                type: "heading",
                level: 2,
                text: "Server-Side Rendering vs. Static Pre-rendering"
            },
            {
                type: "paragraph",
                text: "Matching client expectations requires choosing the correct page generation strategy. For content-heavy sections, use Incremental Static Regeneration (ISR) to build pages statically while maintaining background updates."
            },
            {
                type: "callout",
                variant: "info",
                text: "Always consult Next.js caching rules before specifying dynamic headers. Standard SSR setups run database fetches on every single request, which can quickly saturate open connection pools."
            },
            {
                type: "heading",
                level: 3,
                text: "Practical Tips for Performance Optimization"
            },
            {
                type: "list",
                items: [
                    "Implement edge-rendered API endpoints to serve global clients with sub-10ms route response times.",
                    "Optimize database lookup queries using Prisma or strictly typed schema builders with connection pooling.",
                    "Bypass loading heavy client modules on initial page load by adopting lazy-loading components."
                ]
            }
        ]
    },
    {
        slug: "optimizing-database-performance-relational-systems",
        tag: "Database",
        title: "Optimizing PostgreSQL Query Speeds",
        desc: "Index optimization, query analysis, and database pooling configurations for high-concurrency software.",
        date: "June 20, 2026",
        readTime: "8 min read",
        author: {
            name: "Marcus Vance",
            role: "Director of Systems & Data",
            avatar: "MV"
        },
        color: "from-blue-50 to-sky-50/50",
        image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=600&auto=format&fit=crop",
        content: [
            {
                type: "paragraph",
                text: "Behind every modern software application lies the relational storage layer. While developers write query queries, database operations require proper indexing strategies to avoid heavy table scans that lock database CPU capacity."
            },
            {
                type: "heading",
                level: 2,
                text: "Step 1: Analyzing Slow Queries with EXPLAIN"
            },
            {
                type: "paragraph",
                text: "Before introducing new indexes, use database analytical commands like EXPLAIN ANALYZE. This lets you dissect query executions to identify table scans, filter conditions, and join costs."
            },
            {
                type: "heading",
                level: 2,
                text: "Step 2: Proper Indexing Strategy"
            },
            {
                type: "paragraph",
                text: "Indexes speed up data lookups but slow down data insertions. Avoid adding duplicate indexes on every column. Target foreign keys, composite indexes for common filter variables, and partial indexes for specific conditions."
            }
        ]
    }
];
