import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * In local dev, proxy /api/* to the FastAPI backend on port 8000
   * so the frontend can use relative URLs in production and dev alike.
   */
  async rewrites() {
    // Production on Vercel: /api/* is routed to FastAPI by vercel.json.
    // Local dev: proxy chat requests to uvicorn on port 8000.
    if (process.env.NODE_ENV !== "development") {
      return [];
    }
    const apiBase = process.env.API_PROXY_URL ?? "http://localhost:8000";
    return [
      {
        source: "/api/:path*",
        destination: `${apiBase}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
