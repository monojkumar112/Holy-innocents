const nextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: "http",
      //   hostname: "127.0.0.1",
      //   port: "8000",
      //   pathname: "/**",
      // },
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
