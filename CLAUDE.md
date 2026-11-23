@AGENTS.md

# Portfolio iisacasstro

Portfolio de Isabel Martínez Castro. Next.js 16 (App Router), React 19, Tailwind CSS 4, shadcn/ui (Base UI), GSAP y Motion. Bilingüe: `/es` y `/en`. Se despliega en Vercel con cada push a `main`.

## Stack

- **Solo JavaScript.** Nada de TypeScript: archivos `.js` / `.jsx`, sin `.ts`, sin `tsconfig`, sin tipos.
- **Este no es el Next.js que conoces.** Antes de escribir código de Next, lee la guía correspondiente en `node_modules/next/dist/docs/` y respeta los avisos de deprecación (ver `AGENTS.md`). `cacheComponents` está activo: `params` es una Promise (`await params`) y las rutas dinámicas necesitan `generateStaticParams`.
- Comandos: `npm run dev` (puerto 3000), `npm run build` (sustituye al type check), `npm run lint`. No lances `next build` con `next dev` en marcha. Tras añadir clases nuevas de Tailwind en archivos nuevos, reinicia `npm run dev`.
- Datos de proyectos: `lib/projects.js` (única fuente para grid, páginas y sitemap). Textos de la UI en ambos idiomas: `lib/i18n.js`.

## Roles

Isabel tiene dos roles y se nombran siempre así, en los dos idiomas:

1. **Brand & Digital Presence Specialist**
2. **AI-first Developer**

## Diseño

- Estilo scrapbook / collage: tipografía grande y redondeada (Bagel Fat One para display), fondo crema pastel, acentos de colores (`pink`, `violet`, `mint`, `yellow`, `orange`, `sky`), polaroids con cinta, estrellas, flechas dibujadas, elementos girados y superpuestos, mucho movimiento.
- **Nada de cajas ni tarjetas.** Ni layouts estáticos. Usa separadores discontinuos, fotos rotadas y movimiento con el scroll.
- Reutiliza las piezas que ya existen en `components/scrapbook.jsx` y `components/case-study.jsx` antes de crear componentes o CSS nuevos.
- Solo tema claro. Respeta siempre `prefers-reduced-motion`.
- Mira lo que construyes: cada página nueva a ancho de escritorio y de móvil; el navbar nunca se apila (comprueba 320, 360, 390, 768, 992 y 1440 px).

## Copy

- Siempre en **primera persona** ("diseñé", "decidí", "aprendí").
- Todo el contenido existe en español e inglés, escrito en ambos, no traducido a máquina después.
- **Sin rayas (—).** Usa comas, puntos o paréntesis.
- Sin adjetivos grandilocuentes: solo lo que se pueda comprobar en el código, la documentación o una página en vivo.
- Sin emojis en los casos de estudio salvo que Isabel lo pida.

## Privacidad

- **No nombres clientes** ni des detalles que los identifiquen. Describe solo métodos y herramientas. La única excepción es STL (Fundación Seminario Teológico Libre).
- **No menciones a la familia.**
- No pongas facturas, albaranes, proveedores ni stock como servicios.
- Nunca leas ni muestres `.env*`, `.vercel/` ni credenciales. No publiques datos de terceros.
- La cuenta antigua `iisacasstro` está retirada: no debe aparecer en commits, remotos ni Vercel. Los commits usan el email noreply de GitHub, nunca el gmail.

## Skill `update-portfolio`

Usa la skill `update-portfolio` siempre que haya que **añadir, actualizar o rehacer un proyecto o caso de estudio**, sus miniaturas o el grid de proyectos. Sigue su flujo y sus referencias (`.claude/skills/update-portfolio/references/`), pregunta dónde va el proyecto en el grid y, al terminar, actualiza `history.md`, `lessons.md` y `profile.md` de la skill.

## Git

- **Haz commit solo si Isabel lo pide.** Lo mismo para push: pushear a `main` despliega a producción.
- Commits con prefijo convencional (`feat:`, `fix:`, `style:`, `chore:`) y un cuerpo que explique el porqué.
- No arregles cosas ajenas a la tarea; menciónalas.

## Conversaciones antiguas

El historial de sesiones anteriores está en el zip de migración. El índice está en `claude-migracion\Portfolio iisacasstro\sesiones-legibles\_INDEX.md` dentro del zip. Consúltalo cuando necesites contexto de decisiones pasadas.
