/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.fallback = { fs: false,path:false };

        return config;
    },
    logging: {
        fetches: {
          fullUrl: true,
        },
    },
    output: 'standalone',
}

module.exports = nextConfig
