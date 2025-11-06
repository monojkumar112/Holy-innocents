const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.buytiq.store",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
