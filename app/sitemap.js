import { locales } from "@/lib/i18n";
import { projects } from "@/lib/projects";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap() {
  const pages = [
    "",
    "/trabajo",
    "/sobre-mi",
    "/estudio",
    "/contacto",
    ...projects.map((p) => `/modulos/${p.slug}`),
  ];
  return locales.flatMap((lang) =>
    pages.map((path) => ({
      url: `${baseUrl}/${lang}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}${path}`]),
        ),
      },
    })),
  );
}
