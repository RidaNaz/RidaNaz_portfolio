import type { MetadataRoute } from "next";

const routes = ["", "/about", "/services", "/portfolio", "/resume", "/contact", "/skills"];
const lastModified = new Date("2026-08-05");

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://www.ridanaz.com${route}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
