import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=()",
  },
];

const isExport = process.env.OUTPUT_EXPORT === "true";
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath = rawBasePath && rawBasePath.trim() !== "" ? rawBasePath.trim() : undefined;

const nextConfig: NextConfig = {
  devIndicators: false,
  output: isExport ? "export" : "standalone",
  ...(basePath ? { basePath } : {}),
  images: {
    unoptimized: true,
  },
  ...(isExport
    ? {}
    : {
        async headers() {
          return [
            {
              source: "/:path*",
              headers: securityHeaders,
            },
          ];
        },
      }),
};

export default nextConfig;
