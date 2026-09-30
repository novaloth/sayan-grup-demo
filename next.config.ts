import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Üst dizinlerdeki lockfile'ların kök tespitini şaşırtmasını önler.
    root: import.meta.dirname,
  },
};

export default nextConfig;
