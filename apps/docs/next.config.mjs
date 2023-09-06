import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {}

const withMDX = createMDX({
  experimental: {
    mdxRs: true,
  },
  options: {
    providerImportSource: '@mdx-js/react',
    extension: /\.mdx?$/,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
