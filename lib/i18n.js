export const locales = ["es", "en"];
export const defaultLocale = "es";

export function isLocale(value) {
  return locales.includes(value);
}

const dictionaries = {
  es: {
    meta: {
      title: "Isabel Martínez Castro | Portfolio",
      description:
        "Portfolio de Isabel Martínez Castro: proyectos creativos y desarrollo web.",
    },
    nav: { projects: "Proyectos", language: "Idioma" },
    hero: {
      eyebrow: "Portfolio 2026",
      title: "Hola, soy Isabel. Creo cosas con color.",
      subtitle:
        "Diseño y desarrollo experiencias web creativas, animadas y con mucha personalidad.",
      cta: "Ver proyectos",
    },
    projects: {
      title: "Proyectos",
      subtitle: "Una selección de lo que he ido construyendo.",
      view: "Ver proyecto",
      back: "Volver a proyectos",
      stack: "Tecnologías",
    },
    study: { overview: "Resumen" },
    footer: "Hecho con Next.js, mucho café y un poco de color.",
  },
  en: {
    meta: {
      title: "Isabel Martínez Castro | Portfolio",
      description:
        "Isabel Martínez Castro's portfolio: creative projects and web development.",
    },
    nav: { projects: "Projects", language: "Language" },
    hero: {
      eyebrow: "Portfolio 2026",
      title: "Hi, I'm Isabel. I make things with color.",
      subtitle:
        "I design and build creative, animated web experiences with lots of personality.",
      cta: "See projects",
    },
    projects: {
      title: "Projects",
      subtitle: "A selection of what I've been building.",
      view: "View project",
      back: "Back to projects",
      stack: "Tech stack",
    },
    study: { overview: "Overview" },
    footer: "Built with Next.js, lots of coffee and a bit of color.",
  },
};

export function getDictionary(lang) {
  return dictionaries[lang] ?? dictionaries[defaultLocale];
}
