// import BuilderDevTools from "@builder.io/dev-tools/next";

// /** @type {import('next').NextConfig} */
// const nextConfig = BuilderDevTools()({});

// export default nextConfig;

// 19.35 added @emotion/core 
import BuilderDevTools from "@builder.io/dev-tools/next";
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()({
  webpack: (config, { isServer }) => {
    // Add the alias for @emotion/core to @emotion/react
    config.resolve.alias['@emotion/core'] = '@emotion/react';

    // Modify the snapshot configuration to exclude the problematic path
    config.snapshot = {
      managedPaths: [/^(.yarn|node_modules|\.pnp\.js)$/],
      immutablePaths: [],
      buildDependencies: {
        hash: true
      },
      module: {
        hash: true
      },
      resolve: {
        hash: true
      },
      resolveBuildDependencies: {
        hash: true
      }
    };

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.builder.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
  },
});

// Apply the Cloudflare development platform setup only in development mode
if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default nextConfig;
