# Expansión Digital — Landing

Landing page one-page de servicios construida con **Next.js 14 (App Router)**, **TypeScript** y **Tailwind CSS**. Key visual inspirado en pow.la (tipografía pesada, paréntesis en los títulos, marquees, bloques resaltados y números animados). Lista para desplegar en Vercel.

## Estructura (orden de scroll)

1. **Nav** — barra fija con anclas y CTA único
2. **Hero** — titular "No somos una agencia" + marquee superior + lista de servicios
3. **Stats** — números animados (cuentan al entrar en pantalla)
4. **Logos** — plataformas con las que se trabaja
5. **Problem** — diagnóstico (dolores del cliente)
6. **Values** — los 4 diferenciales
7. **Services** — grid de 6 servicios agrupados
8. **Method** — proceso en 4 pasos
9. **Cases** — resultados con métricas animadas
10. **About** — "elegimos no ser una agencia"
11. **Faq** — acordeón nativo
12. **CtaFinal** — cierre con WhatsApp
13. **Footer** — columnas + botón flotante de WhatsApp

Cada sección es un componente en `components/`.

## Correr en local

```bash
npm install
npm run dev
```

Abrí http://localhost:3000

## Subir a GitHub

Desde la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Landing Expansión Digital"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/expansion-digital.git
git push -u origin main
```

> Reemplazá `TU-USUARIO` y el nombre del repo. Primero creá el repo vacío en github.com (sin README, para evitar conflictos).
> Si preferís sin consola: en GitHub → **Add file → Upload files** y arrastrá el contenido de esta carpeta.

## Conectar con Vercel

1. Entrá a vercel.com e iniciá sesión con tu cuenta de GitHub.
2. **Add New → Project** → **Import** el repo `expansion-digital`.
3. Vercel detecta Next.js automáticamente. No hace falta tocar nada. Click en **Deploy**.
4. En cada `git push` a `main`, Vercel redeploya solo.

## Datos ya cargados

- **Marca:** Expansión Digital (Nav y Footer)
- **WhatsApp:** +54 9 11 6059-1946 (`wa.me/5491160591946`) en el CTA, el footer y el botón flotante

## Qué conviene personalizar

- **Stats** (`components/Stats.tsx`): los números son placeholder (con asterisco) — reemplazalos por los reales.
- **Casos** (`components/Cases.tsx`): datos de ejemplo — cambialos por casos o testimonios reales.
- **Colores:** `tailwind.config.ts` (`lime` es el acento; `paper`, `ink`, `coal`).
- **Tipografías:** se cargan en `app/layout.tsx` (Bricolage Grotesque + Manrope).
- **SEO / OpenGraph:** `app/layout.tsx`.
