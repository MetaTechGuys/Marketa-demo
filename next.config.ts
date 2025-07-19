import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx'],
}

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform()
}

// Merge MDX config with Next.js config
export default nextConfig
