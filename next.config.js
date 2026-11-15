/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'backend.phoenixcreativehub.co.uk',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/about',
                destination: '/about-us',
                permanent: true,
            },
            {
                source: '/about-company',
                destination: '/about-us',
                permanent: true,
            },
            {
                source: '/careers',
                destination: '/contact',
                permanent: true,
            },
            {
                source: '/solutions',
                destination: '/services',
                permanent: true,
            },
            {
                source: '/:path*.html',
                destination: '/:path*',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
