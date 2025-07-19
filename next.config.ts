import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx'],
  externals: [
    {
      sharp: 'commonjs sharp',
    },
  ],
}

// Merge MDX config with Next.js config
export default nextConfig
