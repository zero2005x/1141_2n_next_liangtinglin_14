/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  compiler: {
    styledComponents: true,
  },
  // Suppress warnings about multiple lockfiles
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
