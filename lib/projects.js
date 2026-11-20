// Proyectos de ejemplo: sustituye título, descripción y tecnologías por los reales.
export const projects = [
  {
    slug: "proyecto-uno",
    color: "pink",
    stack: ["Next.js", "Tailwind CSS", "GSAP"],
    es: {
      title: "Proyecto uno",
      summary: "Una web animada de ejemplo para mostrar cómo luce una tarjeta.",
      description:
        "Aquí irá la descripción completa del proyecto: el reto, el proceso y el resultado.",
    },
    en: {
      title: "Project one",
      summary: "A sample animated website to show how a card looks.",
      description:
        "The full project description goes here: the challenge, the process and the result.",
    },
  },
  {
    slug: "proyecto-dos",
    color: "violet",
    stack: ["React", "Motion"],
    es: {
      title: "Proyecto dos",
      summary: "Interfaz interactiva con microanimaciones.",
      description:
        "Aquí irá la descripción completa del proyecto: el reto, el proceso y el resultado.",
    },
    en: {
      title: "Project two",
      summary: "Interactive interface with micro-animations.",
      description:
        "The full project description goes here: the challenge, the process and the result.",
    },
  },
  {
    slug: "proyecto-tres",
    color: "mint",
    stack: ["Next.js", "shadcn/ui"],
    es: {
      title: "Proyecto tres",
      summary: "Panel de ejemplo con componentes reutilizables.",
      description:
        "Aquí irá la descripción completa del proyecto: el reto, el proceso y el resultado.",
    },
    en: {
      title: "Project three",
      summary: "Sample dashboard with reusable components.",
      description:
        "The full project description goes here: the challenge, the process and the result.",
    },
  },
];

// Clases completas para que Tailwind las detecte.
export const colorClasses = {
  pink: "bg-pink",
  violet: "bg-violet",
  mint: "bg-mint",
  yellow: "bg-yellow",
  orange: "bg-orange",
  sky: "bg-sky",
};

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
