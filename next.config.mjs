/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BACKEND_BASE_URL: process.env.BACKEND_BASE_URL,
    },
};

export default nextConfig;
