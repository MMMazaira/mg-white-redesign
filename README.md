# MG White Service LLC — Sitio Web Rediseñado

Next.js 14 · TypeScript · Tailwind CSS · Bilingüe ES/EN · Static Export

---

## Arrancar el proyecto

```bash
npm install
npm run dev        # → http://localhost:3000
```

## Build para producción

```bash
npm run build      # genera la carpeta /out
npx serve out      # previsualizar localmente
```

## Deploy

### Vercel (recomendado)
```bash
npm i -g vercel
vercel --prod
```

### Netlify / Hosting estático
```bash
npm run build
# Sube la carpeta /out
```

---

## Configurar el formulario de contacto (Formspree)

1. Ve a https://formspree.io → **New Form**
2. Nombre: `MG White - Cotizaciones` | Email: `mgwhites22@gmail.com`
3. Copia el endpoint: `https://formspree.io/f/xabc1234`
4. Abre `src/components/ContactForm.tsx` y reemplaza:
   ```ts
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'
   ```

---

## Estructura del proyecto

```
src/
  app/
    layout.tsx                  ← Root layout con LangProvider
    page.tsx                    ← Home completa (todas las secciones)
    contacto/page.tsx
    servicios/
      residencial/page.tsx
      comercial/page.tsx
      remodelaciones/page.tsx
      pintura/page.tsx
    privacy/page.tsx
    terms/page.tsx
    not-found.tsx
    globals.css
    sitemap.ts
  components/
    Navbar.tsx                  ← Logo SVG + switch ES/EN + responsive
    Hero.tsx                    ← Hero con imagen + franja de servicios
    Footer.tsx
    ContactForm.tsx             ← Bilingüe + Formspree + honeypot
    WhatsAppButton.tsx          ← Flotante, mensaje en ES o EN según idioma
    OtherServices.tsx
    LocalBusinessSchema.tsx
  context/
    LangContext.tsx             ← Contexto global de idioma ES/EN
  data/
    servicesData.ts             ← Fuente única de verdad (teléfonos, email, servicios)
    translations.ts             ← Todos los textos ES/EN
```

---

## Cambiar información de contacto

Todo está en `src/data/servicesData.ts` → `COMPANY`.
**Nunca hardcodear teléfonos o emails en otro lugar.**

## Cambiar textos

Todo el contenido bilingüe está en `src/data/translations.ts`.
Edita el objeto `es` o `en` según necesites.

## Agregar logo real del cliente

1. Guarda el logo como `/public/images/logo.png`
2. En `src/components/Navbar.tsx`, reemplaza el bloque `<svg>` con:
```tsx
import Image from 'next/image'
<Image src="/images/logo.png" alt="MG White Service LLC" width={140} height={52} priority />
```

---

## Imágenes pendientes

Ver `/public/images/IMAGES_NEEDED.md`

Imagen más importante: **hero-kitchen.jpg** (1200×900px)
La foto de referencia del cliente es perfecta para esto.
