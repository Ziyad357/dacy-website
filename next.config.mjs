/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "adnsu.edu.az" },
      { protocol: "https", hostname: "amcham.az" },
      { protocol: "https", hostname: "www.accessbank.az" },
    ],
  },
};

export default nextConfig;
