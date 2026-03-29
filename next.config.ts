import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  
  // TypeScript configuration
  typescript: {
    // Ignore TypeScript build errors during production builds
    ignoreBuildErrors: true,
  },
  

};

export default nextConfig;