/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "ridanaz.vercel.app" }],
        destination: "https://www.ridanaz.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
