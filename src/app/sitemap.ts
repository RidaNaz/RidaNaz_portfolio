import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/portfolio", "/resume", "/contact", "/skills"];

  return [
    ...routes.map((route) => ({
      url: `https://www.ridanaz.com${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
  ];
}
