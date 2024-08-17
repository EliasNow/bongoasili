// import BuilderDevTools from "@builder.io/dev-tools/next";

// /** @type {import('next').NextConfig} */
// const nextConfig = BuilderDevTools()({});

// export default nextConfig;

import BuilderDevTools from "@builder.io/dev-tools/next";
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()({
  webpack: (config, { isServer }) => {
    // config.resolve.alias['@'] = path.resolve(__dirname, 'src'); // chatgpt for agentarea
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
  }, // added because changing images breaks in builder.io:
  // images: { // deprecated
  //   domains: ['cdn.builder.io'],
  //   dangerouslyAllowSVG: true,
  // },
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

// 13 aug 14.09
// Apply the Cloudflare development platform setup only in development mode
if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default nextConfig;
