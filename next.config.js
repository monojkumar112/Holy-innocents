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
        hostname: "holyinnocentsorpington.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
