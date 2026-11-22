export const locales = ["es", "en"];
export const defaultLocale = "es";

export function isLocale(value) {
  return locales.includes(value);
}

// Metadata de una página con sus enlaces alternativos por idioma.
export function pageMetadata(lang, path, title, description) {
  return {
    title: `${title} | Isabel Martínez Castro`,
    description,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
    },
  };
}

const dictionaries = {
  es: {
    meta: {
      title: "Isabel Martínez Castro | Marca, contenido, SEO y web",
      description:
        "Marca, contenido, SEO y desarrollo web para negocios pequeños y fundaciones. Portfolio de Isabel Martínez Castro.",
    },
    nav: {
      work: "Trabajo",
      about: "Sobre mí",
      studio: "Estudio",
      contact: "Contacto",
      language: "Idioma",
    },
    hero: {
      eyebrow: "Marca · Contenido · SEO · Web",
      title: "Hola, soy Isabel. Doy color a las marcas pequeñas.",
      subtitle: "Marca, contenido, SEO y desarrollo web para negocios y fundaciones.",
      scroll: "Sigue bajando",
    },
    home: {
      roles: ["Brand & Digital Presence Specialist", "AI-first Developer"],
      marquee: [
        "Identidad de marca",
        "Contenido digital",
        "SEO local",
        "Estudio de mercado",
        "Puesta en marcha digital",
        "Desarrollo web",
      ],
      workTitle: "Trabajo",
      workLink: "Ver todo el trabajo",
    },
    about: {
      title: "Sobre mí",
      description:
        "Roles, metodología, funciones y tecnologías de Isabel Martínez Castro: marca, contenido, SEO y desarrollo web.",
      rolesTitle: "Roles",
      roles: [
        {
          name: "Brand & Digital Presence Specialist",
          text: "Identidad de marca, contenido en vídeo y redes, SEO y posicionamiento local.",
        },
        {
          name: "AI-first Developer",
          text: "Desarrollo web a medida con Next.js y React.",
        },
      ],
      bio: [
        "Trabajo con negocios pequeños y fundaciones en marca, contenido, SEO y desarrollo web. He llevado la identidad, la web y la puesta en marcha digital de una fundación de principio a fin, y he producido contenido en vídeo para redes sociales.",
        "He trabajado cara al público y he estudiado Trabajo Social, un perfil que me lleva a partir siempre de las necesidades del cliente y a hacer seguimiento hasta cerrar el trabajo. Conozco el funcionamiento de un autónomo y de una pyme desde dentro.",
        "Estoy montando un estudio con dos compañeros para ofrecer marca, web y presencia digital a pymes y fundaciones.",
      ],
      methodTitle: "Metodología",
      method: [
        { title: "Análisis de necesidades", text: "Parto del problema del cliente antes de definir la solución." },
        { title: "Definición de soluciones", text: "Propongo iniciativas concretas y priorizadas." },
        { title: "Ejecución", text: "Entregas con plazos ajustados y bajo presión." },
        { title: "Seguimiento", text: "Verifico que lo entregado funciona y reviso el resultado." },
      ],
      doTitle: "Qué hago",
      do: [
        {
          title: "Identidad de marca",
          text: "Logotipo, paleta, tipografía y tono. Coherencia entre web, redes y materiales. Renovación de imagen.",
        },
        {
          title: "Contenido digital",
          text: "Producción y edición de vídeo promocional y contenido para redes sociales.",
        },
        {
          title: "SEO y posicionamiento local",
          text: "Visibilidad en buscadores y perfiles de negocio en Google.",
        },
        {
          title: "Estudio de mercado y modelos de negocio",
          text: "Análisis de viabilidad, público objetivo, financiación y alternativas de ingresos.",
        },
        {
          title: "Puesta en marcha digital",
          text: "Dominio, Google Workspace para ONG, correo corporativo, pasarela de donaciones con PayPal y páginas legales (privacidad y términos).",
        },
        {
          title: "Desarrollo web (AI-first)",
          text: "Webs a medida con Next.js y React, interfaces animadas y diseño centrado en la experiencia de uso.",
        },
      ],
      techTitle: "Tecnologías que uso",
      tech: [
        {
          label: "Desarrollo",
          items: ["Next.js", "React", "JavaScript", "Tailwind CSS", "shadcn/ui", "GSAP", "Motion"],
        },
        { label: "Diseño y contenido", items: ["CapCut", "Canva"] },
        {
          label: "Presencia y operación",
          items: ["Google Business Profile", "Google Workspace", "Drive", "PayPal"],
        },
        { label: "Dominio y alojamiento", items: ["Spaceship", "Vercel"] },
      ],
    },
    work: {
      title: "Trabajo",
      description:
        "Proyectos y métodos de trabajo: identidad, web y puesta en marcha digital, posicionamiento local, vídeo y estudio de mercado.",
      view: "Ver el caso de estudio",
      filters: { all: "Todo", web: "Web", seo: "SEO", video: "Vídeo", study: "Estudios" },
      items: [
        {
          title: "STL",
          category: "web",
          kicker: "web y puesta en marcha",
          tags: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "GSAP", "Motion"],
          summary:
            "Identidad, web y puesta en marcha digital de la Fundación Seminario Teológico Libre: dominio, páginas legales, donaciones con PayPal y SEO.",
          points: [{ label: "Rol", text: "Marca, web y puesta en marcha." }],
        },
        {
          title: "Posicionamiento local de un negocio de servicios",
          category: "seo",
          kicker: "seo local",
          tags: ["Google Business Profile", "SEO local"],
          summary: "Un negocio sin presencia digital pasa a aparecer en las búsquedas de su zona.",
          points: [
            { label: "Punto de partida", text: "Una cuenta de Instagram con una sola publicación." },
            {
              label: "Métodos",
              text: "Nueva identidad de contacto, perfil optimizado en Google Business Profile y canal de mensajería directo.",
            },
            { label: "Resultado", text: "El negocio empezó a recibir llamadas." },
          ],
        },
        {
          title: "Vídeo promocional para Instagram",
          category: "video",
          kicker: "vídeo para redes",
          tags: ["Montaje", "Formato de redes"],
          summary: "Pieza de un minuto con las actividades de un curso.",
          points: [
            {
              label: "Métodos",
              text: "Selección de material, montaje y adaptación al formato de redes.",
            },
          ],
          metric: { value: 1274, separator: ".", label: "reproducciones en una cuenta de 1.263 seguidores" },
        },
        {
          title: "Reel promocional de producto",
          category: "video",
          kicker: "vídeo para redes",
          tags: ["Montaje", "Código QR"],
          summary: "Fotografías de modelos con la nueva colección y un código QR que enlaza a la web.",
          points: [
            {
              label: "Métodos",
              text: "Selección de material gráfico, montaje y llamada a la acción con QR.",
            },
          ],
        },
        {
          title: "Estudio de mercado y modelos de negocio",
          category: "study",
          kicker: "estudio",
          tags: ["Análisis de mercado", "Modelos de negocio", "Financiación"],
          summary: "Análisis de viabilidad de una idea y de sus alternativas.",
          points: [
            {
              label: "Métodos",
              text: "Sesiones de trabajo para definir el objetivo, análisis de mercado, público y vías de financiación, comparación de modelos de negocio y conclusiones con propuesta de alternativas.",
            },
          ],
        },
      ],
    },
    studio: {
      title: "Estudio",
      description:
        "Estudio en formación con dos compañeros: marca, web y presencia digital para pymes y fundaciones.",
      statement:
        "Estudio en formación con dos compañeros: marca, web y presencia digital para pymes y fundaciones.",
      ongoingTitle: "En marcha",
      ongoing: [
        {
          title: "Web para un negocio de pintura",
          intro: "Renovación de imagen y web con:",
          items: [
            "Servicios que ofrece",
            "Tarifas orientativas para presupuestos",
            "Galería de trabajos realizados",
            "Contacto y solicitud de presupuesto",
          ],
        },
        {
          title: "Web para una cafetería",
          intro: "Renovación de imagen y web con:",
          items: ["Carta", "Reservas", "Contacto"],
        },
      ],
    },
    contact: {
      title: "Contacto",
      heading: "¿Hablamos?",
      marquee: ["¿Hablamos?", "Escríbeme", "Marca", "Contenido", "SEO", "Web"],
      description: "Contacto de Isabel Martínez Castro: correo y LinkedIn.",
      text: "Escríbeme por correo o por LinkedIn. Upwork, próximamente.",
      email: "Correo",
      linkedin: "LinkedIn",
      upwork: "Upwork: próximamente",
      intro: "Cuéntame qué necesitas y te respondo. Escríbeme por correo, por LinkedIn o con el formulario.",
      form: {
        title: "Déjame un mensaje",
        name: "Tu nombre",
        email: "Tu correo",
        subject: "Asunto",
        message: "Mensaje",
        send: "Enviar mensaje",
        hint: "Se abrirá tu aplicación de correo con el mensaje listo para enviar.",
        done: "Listo: revisa tu aplicación de correo y pulsa enviar.",
      },
    },
    projects: {
      view: "Ver proyecto",
      back: "Volver al trabajo",
      stack: "Tecnologías",
    },
    study: { overview: "Resumen" },
    footer: "Hecho con Next.js, mucho café y un poco de color.",
  },
  en: {
    meta: {
      title: "Isabel Martínez Castro | Brand, content, SEO and web",
      description:
        "Brand, content, SEO and web development for small businesses and foundations. Portfolio of Isabel Martínez Castro.",
    },
    nav: {
      work: "Work",
      about: "About",
      studio: "Studio",
      contact: "Contact",
      language: "Language",
    },
    hero: {
      eyebrow: "Brand · Content · SEO · Web",
      title: "Hi, I'm Isabel. I add color to small brands.",
      subtitle: "Brand, content, SEO and web development for businesses and foundations.",
      scroll: "Keep scrolling",
    },
    home: {
      roles: ["Brand & Digital Presence Specialist", "AI-first Developer"],
      marquee: [
        "Brand identity",
        "Digital content",
        "Local SEO",
        "Market research",
        "Digital launch",
        "Web development",
      ],
      workTitle: "Work",
      workLink: "See all work",
    },
    about: {
      title: "About me",
      description:
        "Roles, method, services and tools of Isabel Martínez Castro: brand, content, SEO and web development.",
      rolesTitle: "Roles",
      roles: [
        {
          name: "Brand & Digital Presence Specialist",
          text: "Brand identity, video and social content, SEO and local positioning.",
        },
        {
          name: "AI-first Developer",
          text: "Custom web development with Next.js and React.",
        },
      ],
      bio: [
        "I work with small businesses and foundations on brand, content, SEO and web development. I have taken a foundation's identity, website and digital launch from start to finish, and produced video content for social media.",
        "I have worked face to face with the public and studied Social Work, a profile that leads me to start from the client's needs and follow up until the work is done. I know from the inside how a self-employed professional and a small business operate.",
        "I am building a studio with two partners to offer brand, web and digital presence to small businesses and foundations.",
      ],
      methodTitle: "Method",
      method: [
        { title: "Needs analysis", text: "I start from the client's problem before defining the solution." },
        { title: "Solution design", text: "I propose specific, prioritized initiatives." },
        { title: "Delivery", text: "Tight deadlines and work under pressure." },
        { title: "Follow-up", text: "I check that what was delivered works and review the result." },
      ],
      doTitle: "What I do",
      do: [
        {
          title: "Brand identity",
          text: "Logo, color palette, typography and tone. Consistency across web, social media and materials. Image renewal.",
        },
        {
          title: "Digital content",
          text: "Production and editing of promotional video and social media content.",
        },
        {
          title: "SEO and local positioning",
          text: "Search visibility and Google business profiles.",
        },
        {
          title: "Market research and business models",
          text: "Feasibility analysis, target audience, funding and alternative revenue streams.",
        },
        {
          title: "Digital launch",
          text: "Domain, Google Workspace for nonprofits, corporate email, PayPal donation gateway and legal pages (privacy and terms).",
        },
        {
          title: "Web development (AI-first)",
          text: "Custom websites with Next.js and React, animated interfaces and design centered on the user experience.",
        },
      ],
      techTitle: "Tools I use",
      tech: [
        {
          label: "Development",
          items: ["Next.js", "React", "JavaScript", "Tailwind CSS", "shadcn/ui", "GSAP", "Motion"],
        },
        { label: "Design and content", items: ["CapCut", "Canva"] },
        {
          label: "Presence and operations",
          items: ["Google Business Profile", "Google Workspace", "Drive", "PayPal"],
        },
        { label: "Domain and hosting", items: ["Spaceship", "Vercel"] },
      ],
    },
    work: {
      title: "Work",
      description:
        "Projects and working methods: identity, web and digital launch, local positioning, video and market research.",
      view: "View the case study",
      filters: { all: "All", web: "Web", seo: "SEO", video: "Video", study: "Studies" },
      items: [
        {
          title: "STL",
          category: "web",
          kicker: "web and digital launch",
          tags: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "GSAP", "Motion"],
          summary:
            "Identity, website and digital launch of the Fundación Seminario Teológico Libre: domain, legal pages, PayPal donations and SEO.",
          points: [{ label: "Role", text: "Brand, web and digital launch." }],
        },
        {
          title: "Local positioning for a service business",
          category: "seo",
          kicker: "local seo",
          tags: ["Google Business Profile", "Local SEO"],
          summary: "A business with no digital presence starts to show up in searches in its area.",
          points: [
            { label: "Starting point", text: "An Instagram account with a single post." },
            {
              label: "Methods",
              text: "New contact identity, optimized Google Business Profile and a direct messaging channel.",
            },
            { label: "Result", text: "The business started to receive calls." },
          ],
        },
        {
          title: "Promotional video for Instagram",
          category: "video",
          kicker: "video for social media",
          tags: ["Editing", "Social formats"],
          summary: "One-minute piece showing the activities of a course.",
          points: [
            {
              label: "Methods",
              text: "Material selection, editing and adaptation to the social media format.",
            },
          ],
          metric: { value: 1274, separator: ",", label: "views on an account with 1,263 followers" },
        },
        {
          title: "Promotional product reel",
          category: "video",
          kicker: "video for social media",
          tags: ["Editing", "QR code"],
          summary: "Photographs of models wearing the new collection and a QR code linking to the website.",
          points: [
            {
              label: "Methods",
              text: "Selection of visual material, editing and a QR call to action.",
            },
          ],
        },
        {
          title: "Market research and business models",
          category: "study",
          kicker: "study",
          tags: ["Market analysis", "Business models", "Financing"],
          summary: "Feasibility analysis of an idea and its alternatives.",
          points: [
            {
              label: "Methods",
              text: "Working sessions to define the goal, analysis of the market, audience and funding routes, comparison of business models, and conclusions with proposed alternatives.",
            },
          ],
        },
      ],
    },
    studio: {
      title: "Studio",
      description:
        "A studio in formation with two partners: brand, web and digital presence for small businesses and foundations.",
      statement:
        "A studio in formation with two partners: brand, web and digital presence for small businesses and foundations.",
      ongoingTitle: "In progress",
      ongoing: [
        {
          title: "Website for a painting business",
          intro: "Image renewal and website with:",
          items: [
            "Services offered",
            "Indicative rates for quotes",
            "Gallery of completed work",
            "Contact and quote request",
          ],
        },
        {
          title: "Website for a café",
          intro: "Image renewal and website with:",
          items: ["Menu", "Reservations", "Contact"],
        },
      ],
    },
    contact: {
      title: "Contact",
      heading: "Let's talk",
      marquee: ["Let's talk", "Write to me", "Brand", "Content", "SEO", "Web"],
      description: "Contact details for Isabel Martínez Castro: email and LinkedIn.",
      text: "Write to me by email or on LinkedIn. Upwork coming soon.",
      email: "Email",
      linkedin: "LinkedIn",
      upwork: "Upwork: coming soon",
      intro: "Tell me what you need and I will get back to you. Write by email, on LinkedIn or with the form.",
      form: {
        title: "Leave me a message",
        name: "Your name",
        email: "Your email",
        subject: "Subject",
        message: "Message",
        send: "Send message",
        hint: "Your email app will open with the message ready to send.",
        done: "Done: check your email app and press send.",
      },
    },
    projects: {
      view: "View project",
      back: "Back to work",
      stack: "Tech stack",
    },
    study: { overview: "Overview" },
    footer: "Built with Next.js, lots of coffee and a bit of color.",
  },
};

export function getDictionary(lang) {
  return dictionaries[lang] ?? dictionaries[defaultLocale];
}
