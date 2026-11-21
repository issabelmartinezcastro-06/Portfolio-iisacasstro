const STL = "/proyectos/stl";
const img = (file, width, height, alt = "", caption) => ({ src: `${STL}/${file}`, width, height, alt, caption });

const stl = {
  slug: "stl",
  color: "orange",
  stack: ["Next.js 16", "React 19", "Tailwind CSS 4", "shadcn/ui", "GSAP", "Motion"],
  thumbnail: img("thumbnail.webp", 1440, 810, ""),
  links: [
    {
      href: "https://seminarioteologicolibre.org/",
      label: { es: "Ver la web", en: "Visit live site" },
    },
  ],
  es: {
    title: "STL: identidad, web y puesta en marcha digital",
    summary:
      "Identidad, web y puesta en marcha digital de la Fundación Seminario Teológico Libre: dominio, páginas legales, donaciones con PayPal y SEO.",
    description:
      "Identidad, web y puesta en marcha digital del Seminario Teológico Libre: módulos, profesores, cuenta atrás de la próxima clase y animaciones.",
    study: {
      kicker: "Caso de estudio",
      status: "En producción · octubre a noviembre de 2026",
      meta: [
        ["Rol", "Identidad, web y puesta en marcha, en solitario"],
        ["Tipo", "Trabajo para una fundación"],
        ["Idioma", "Español"],
      ],
      labels: { overview: "Resumen", highlights: "Lo que más cuidé", animations: "Animaciones", ux: "Experiencia de usuario" },
      overview: [
        "Diseñé y desarrollé desde cero la web de la Fundación Seminario Teológico Libre, una comunidad sin fines de lucro que ofrece estudios bíblicos gratuitos por Zoom. La web presenta los módulos y a sus profesores, muestra cuándo es la próxima clase y lleva a inscribirse por WhatsApp.",
        "Lo que más me importaba era la experiencia de quien la visita, los componentes reutilizables y que las animaciones ayudaran sin estorbar.",
      ],
      problem: {
        title: "Lo que tenía que hacer",
        text: "Presentar los módulos y a sus profesores, mostrar cuándo es la próxima clase y facilitar inscribirse, donar o escribir, en un sitio que se pudiera mantener cambiando archivos de datos.",
      },
      solution: {
        title: "El enfoque",
        text: "Un sitio con Next.js y React donde los módulos, el horario y los contactos viven en archivos de datos (modules.js y site.js) y la interfaz se arma con componentes reutilizables como Reveal, VideoCard, VideoModal y Testimonials.",
      },
      media: {
        hero: img("screen-hero.webp", 1440, 640, "Portada de la web con el título animado sobre una biblioteca"),
        countdown: img("screen-countdown.webp", 1440, 640, "Tarjeta con la cuenta atrás de la próxima clase"),
        modules: img("screen-modules.webp", 1440, 640, "Filtros por tema y lista de módulos"),
        reviews: img("screen-reviews.webp", 1440, 640, "Carrusel de reseñas de alumnos"),
        modal: img("screen-modal.webp", 1280, 978, "Vídeo de una profesora abierto en un pop-up sobre la lista de módulos"),
        mobileHome: img("screen-mobile-home.webp", 560, 1212, "Portada de la web en un teléfono"),
        mobileMenu: img("screen-mobile-menu.webp", 560, 1212, "Menú desplegado en un teléfono"),
      },
      highlights: [
        {
          media: "countdown",
          title: "Cuenta atrás en tu hora",
          text: "La clase es siempre a la misma hora de Chile. El cálculo usa la zona America/Santiago, con su cambio de horario, y cada persona ve la fecha en su zona. Con ?tz= en la dirección se puede probar otra.",
        },
        {
          media: "modal",
          title: "Vídeos en un pop-up que salta desde la tarjeta",
          text: "Al pulsar play, el vídeo de cada profesor crece desde su tarjeta hasta casi toda la pantalla, con un muelle de Motion. Se cierra con Escape, con el botón o al hacer scroll.",
        },
        {
          media: "reviews",
          title: "Reseñas que se mueven solas",
          text: "El carrusel avanza despacio y en bucle, se frena con el ratón, el dedo o el teclado, y se puede arrastrar. Lo escribí a mano con requestAnimationFrame.",
        },
        {
          media: "mobile",
          title: "Menú móvil y filtro de módulos",
          text: "El menú se despliega con animación y se cierra al navegar. El filtro por tema recoloca las tarjetas con transiciones en vez de saltos.",
        },
      ],
      animations: [
        { tool: "GSAP", where: "Hero", text: "Las palabras del título suben una a una y el fondo hace un zoom lento al cargar." },
        { tool: "Motion", where: "Interfaz", text: "Aparición al hacer scroll, barra de navegación, filtro de módulos, pop-up de vídeo y foto ampliada." },
        { tool: "JavaScript", where: "Reseñas", text: "Un bucle con requestAnimationFrame mueve el carrusel; la persona puede frenarlo o arrastrarlo." },
        { tool: "CSS", where: "Detalles", text: "Cambios de color, sombras y escala al pasar el ratón." },
      ],
      ux: [
        { title: "Movimiento reducido", text: "Si el sistema lo pide, el título y el carrusel no se animan." },
        { title: "Un vídeo a la vez", text: "Al reproducir uno se pausan los demás, y también al salir de pantalla o cambiar de pestaña." },
        { title: "Pop-up fácil de cerrar", text: "Se cierra con Escape, con el botón, al hacer scroll o al ocultar la pestaña." },
        { title: "Carrusel que obedece", text: "Se detiene al pasar el ratón, tocar o enfocar, y se reanuda solo." },
      ],
      decisions: {
        title: "Decisiones",
        items: [
          { title: "Los datos fuera de los componentes", text: "Módulos, horario y contactos están en archivos de datos. Cambiar el horario es tocar una línea. El coste: no hay panel de edición, cualquier cambio pasa por el código y por un despliegue." },
          { title: "Un carrusel propio", text: "Escribí el carrusel de reseñas en lugar de usar una librería, para controlar cuándo se frena y cómo se arrastra. El coste: Testimonials.jsx tiene 161 líneas que mantener." },
          { title: "Vídeos en el propio sitio", text: "Los cinco vídeos están en la carpeta public, así la política de seguridad solo permite contenido del propio sitio. El coste: el repositorio guarda archivos de vídeo." },
          { title: "Cabeceras de seguridad", text: "Añadí una política de contenido y otras cabeceras. Como Next inyecta scripts y estilos en línea en un sitio estático, tuve que permitir unsafe-inline, que es una protección más débil de lo ideal." },
        ],
      },
      outcome: {
        title: "Resultado",
        items: [
          { value: 31, label: "commits en un mes" },
          { value: 9, label: "páginas" },
          { value: 15, label: "componentes propios" },
          { value: 3, label: "módulos publicados" },
        ],
        note: "Cifras tomadas del repositorio y de los datos del sitio, a noviembre de 2026.",
      },
      role: {
        title: "Mi parte",
        text: "Diseñé y desarrollé la web yo sola. Los textos de los módulos están tomados de los programas y materiales de la fundación.",
      },
      takeaways: {
        title: "Lo que me llevo",
        items: [
          "Con los datos fuera de los componentes, cambiar un horario o añadir un módulo es editar un archivo.",
          "Una animación tiene que tener una función: guiar la mirada, confirmar un gesto o evitar un salto brusco.",
          "Respetar el movimiento reducido y pausar lo que no se ve forma parte del diseño, no es un extra.",
        ],
        next: "Siguiente: publicar los módulos que faltan (1, 2, 3, 4 y 9) y añadir pruebas automáticas, que hoy el proyecto no tiene.",
      },
    },
  },
  en: {
    title: "STL: identity, website and digital launch",
    summary:
      "Identity, website and digital launch of the Fundación Seminario Teológico Libre: domain, legal pages, PayPal donations and SEO.",
    description:
      "Identity, website and digital launch of the Seminario Teológico Libre: modules, teachers, a countdown to the next class and animations.",
    study: {
      kicker: "Case study",
      status: "Live · October to November 2026",
      meta: [
        ["Role", "Identity, web and digital launch, solo"],
        ["Type", "Work for a foundation"],
        ["Language", "Spanish"],
      ],
      labels: { overview: "Overview", highlights: "What I cared about most", animations: "Animations", ux: "User experience" },
      overview: [
        "I designed and built from scratch the website of the Fundación Seminario Teológico Libre, a non-profit community that offers free Bible studies over Zoom. The site presents the modules and their teachers, shows when the next class is and leads to enrolling through WhatsApp.",
        "What mattered most to me was the visitor's experience, reusable components, and animations that help without getting in the way.",
      ],
      problem: {
        title: "What it needed to do",
        text: "Present the modules and their teachers, show when the next class is, and make it easy to enroll, donate or get in touch, on a site that can be maintained by changing data files.",
      },
      solution: {
        title: "The approach",
        text: "A Next.js and React site where modules, schedule and contacts live in data files (modules.js and site.js) and the interface is built from reusable components such as Reveal, VideoCard, VideoModal and Testimonials.",
      },
      media: {
        hero: img("screen-hero.webp", 1440, 640, "Home page with the animated title over a library"),
        countdown: img("screen-countdown.webp", 1440, 640, "Card with the countdown to the next class"),
        modules: img("screen-modules.webp", 1440, 640, "Topic filters and module list"),
        reviews: img("screen-reviews.webp", 1440, 640, "Carousel of student reviews"),
        modal: img("screen-modal.webp", 1280, 978, "A teacher's video open in a pop-up over the module list"),
        mobileHome: img("screen-mobile-home.webp", 560, 1212, "Home page on a phone"),
        mobileMenu: img("screen-mobile-menu.webp", 560, 1212, "Open menu on a phone"),
      },
      highlights: [
        {
          media: "countdown",
          title: "A countdown in your own time",
          text: "Class is always at the same Chile time. The calculation uses the America/Santiago zone, daylight saving included, and each person sees the date in their own zone. Adding ?tz= to the address lets you test another one.",
        },
        {
          media: "modal",
          title: "Videos in a pop-up that jumps from the card",
          text: "On play, each teacher's video grows from its card to almost the full screen, with a Motion spring. It closes with Escape, the button or on scroll.",
        },
        {
          media: "reviews",
          title: "Reviews that move by themselves",
          text: "The carousel advances slowly in a loop, stops with the mouse, a finger or the keyboard, and can be dragged. I wrote it by hand with requestAnimationFrame.",
        },
        {
          media: "mobile",
          title: "Mobile menu and module filter",
          text: "The menu unfolds with an animation and closes on navigation. The topic filter moves the cards with transitions instead of jumps.",
        },
      ],
      animations: [
        { tool: "GSAP", where: "Hero", text: "Title words rise one by one and the background zooms out slowly on load." },
        { tool: "Motion", where: "Interface", text: "Scroll reveals, navigation bar, module filter, video pop-up and enlarged photo." },
        { tool: "JavaScript", where: "Reviews", text: "A requestAnimationFrame loop moves the carousel; people can stop or drag it." },
        { tool: "CSS", where: "Details", text: "Colour, shadow and scale changes on hover." },
      ],
      ux: [
        { title: "Reduced motion", text: "If the system asks for it, the title and the carousel do not animate." },
        { title: "One video at a time", text: "Playing one pauses the others, also when scrolled away or the tab changes." },
        { title: "Easy-to-close pop-up", text: "Closes with Escape, the button, on scroll or when the tab is hidden." },
        { title: "A carousel that listens", text: "It stops on hover, touch or focus, and resumes by itself." },
      ],
      decisions: {
        title: "Decisions",
        items: [
          { title: "Data outside the components", text: "Modules, schedule and contacts live in data files. Changing the schedule is editing one line. The cost: there is no editing panel, so every change goes through the code and a deployment." },
          { title: "A custom carousel", text: "I wrote the reviews carousel instead of using a library, to control when it stops and how it drags. The cost: Testimonials.jsx has 161 lines to maintain." },
          { title: "Videos hosted on the site", text: "The five videos sit in the public folder, so the security policy only allows content from the site itself. The cost: the repository stores video files." },
          { title: "Security headers", text: "I added a content security policy and other headers. Because Next injects inline scripts and styles on a static site, I had to allow unsafe-inline, which is a weaker protection than ideal." },
        ],
      },
      outcome: {
        title: "Outcome",
        items: [
          { value: 31, label: "commits in a month" },
          { value: 9, label: "pages" },
          { value: 15, label: "custom components" },
          { value: 3, label: "published modules" },
        ],
        note: "Figures taken from the repository and the site data, as of November 2026.",
      },
      role: {
        title: "My part",
        text: "I designed and built the site on my own. The module texts are taken from the foundation's programs and materials.",
      },
      takeaways: {
        title: "Takeaways",
        items: [
          "With data kept outside the components, changing a schedule or adding a module means editing one file.",
          "An animation needs a job: guiding the eye, confirming a gesture or avoiding an abrupt jump.",
          "Respecting reduced motion and pausing what is off screen is part of the design, not an extra.",
        ],
        next: "Next: publish the missing modules (1, 2, 3, 4 and 9) and add automated tests, which the project does not have today.",
      },
    },
  },
};

export const projects = [stl];

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
