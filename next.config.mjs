/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export',
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    useDeploymentId: true,
    useDeploymentIdServerActions: true,
  },
};

export default nextConfig;
