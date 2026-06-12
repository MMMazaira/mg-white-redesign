# MG White Service — Responsive Fixes

## Archivos actualizados

### `tailwind.config.ts`
- Añadido breakpoint `xs: 375px` para teléfonos pequeños (iPhone SE, etc.)
- Añadido `spacing` con variables `safe-area-inset-*` para soporte de notch iOS

### `src/app/globals.css`
- `html` y `body`: `overflow-x: hidden` — evita scroll horizontal en mobile
- `-webkit-text-size-adjust: 100%` — evita que iOS agrande texto automáticamente
- `-webkit-tap-highlight-color: transparent` — elimina parpadeo azul al tocar links en Android
- **`input-field`**: `font-size: 16px` fijo — **previene zoom automático en iOS Safari** (el zoom ocurre cuando el input tiene menos de 16px)
- **Botones**: `min-h-[44px]` — tamaño mínimo de toque recomendado por Apple/Google (44×44px)
- Añadidas clases utilitarias `.section-pad` y `.section-pad-sm` para padding consistente

### `src/app/layout.tsx`
- **`export const viewport`** — ahora usa la API de Next.js 14 correctamente:
  - `width: 'device-width'`, `initialScale: 1` — viewport correcto en todos los móviles
  - `maximumScale: 5`, `userScalable: true` — permite zoom de accesibilidad
  - `themeColor: '#1a2744'` — color de barra del navegador en Android/iOS
  - `viewportFit: 'cover'` — soporte de notch iPhone X+
  - `colorScheme: 'light'`
- `appleWebApp` — mejora la vista previa al guardar en pantalla de inicio iOS

### `src/components/Navbar.tsx`
- **Menú mobile rediseñado**: overlay con `position: fixed` en lugar de `max-h` animado — más fluido
- `useEffect` para cerrar el menú al hacer resize a desktop
- `useEffect` para bloquear scroll del body cuando el menú está abierto
- Scroll shadow sutil en navbar al bajar la página
- **Icono de teléfono en mobile** junto al hamburguesa — acceso directo a llamada
- **Botón de WhatsApp** añadido en el menú mobile (acción más importante)
- `aria-expanded` y `aria-controls` para accesibilidad
- `min-h-[44px]` en todos los links del menú mobile
- `max-height: calc(100dvh - 4rem)` con `overflow-y: auto` para menús largos en pantallas pequeñas

### `src/components/Hero.tsx`
- `min-h-[100dvh]` en lugar de `min-h-screen` — usa `dvh` para corregir el bug de la barra de URL de iOS Safari
- Tipografía fluida: `text-3xl xs:text-4xl sm:text-5xl lg:text-[58px]`
- CTAs: `w-full` en mobile, `w-auto` en `xs+`
- Teléfonos en columna en `xs`, en fila en `sm+`
- Reducción de padding en mobile: `py-12 sm:py-16 lg:py-20`
- `px-4 sm:px-5` en todas las secciones

### `src/components/ContactForm.tsx`
- Grid de campos: `grid-cols-1 xs:grid-cols-2` — en teléfonos muy pequeños los campos van en una columna
- `autoComplete` y `inputMode` en todos los inputs — mejora el teclado correcto en móvil (numérico para teléfono, email para email)
- `font-size: 16px` — ya incluido en `.input-field` del CSS
- Integración real con **Formspree** (reemplaza la simulación con `setTimeout`)
- Manejo de errores de red con mensaje visible al usuario

### `src/components/WhatsAppButton.tsx`
- Posición con `env(safe-area-inset-bottom)` — no queda oculto detrás del indicador de home de iPhone
- `active:scale-95` — feedback táctil en mobile
- Tooltip oculto en mobile (`hidden sm:block`) — no interfiere

### `src/components/Footer.tsx`
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- `break-all` en email — evita overflow del texto largo en pantallas estrechas
- `min-h-[36px]` en links de contacto — área de toque suficiente
- Tipografía más pequeña en mobile: `text-xs sm:text-sm`

### `src/app/page.tsx`
- Todos los paddings: `py-14 sm:py-20 lg:py-24 px-4 sm:px-5`
- Trust bar: gap reducido en mobile, texto más pequeño
- Services grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- Why Us grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- Process grid: `grid-cols-2 lg:grid-cols-4` — 2 columnas en mobile
- Testimonials: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- CTA Band: botones full-width en mobile con `xs:flex-row`
- Imagen divisora: `h-48 sm:h-64 md:h-80`

### `src/app/contacto/page.tsx`
- Sidebar/Form stacked en mobile, side-by-side en `lg`
- Textos escalados con `text-sm sm:text-base`
- `break-all` en email para evitar overflow

## Breakpoints utilizados
| Breakpoint | Ancho | Uso principal |
|---|---|---|
| `xs` | 375px | Teléfonos pequeños (iPhone SE) |
| `sm` | 640px | Teléfonos grandes / landscape |
| `md` | 768px | Tablets portrait |
| `lg` | 1024px | Tablets landscape / laptop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Pantallas grandes |

## Problemas resueltos
1. **iOS zoom en inputs** — `font-size: 16px` fijo
2. **Barra URL Safari cortando hero** — `100dvh` en lugar de `100vh`
3. **Notch iPhone X+** — `viewportFit: cover` + `safe-area-inset`
4. **Scroll horizontal** — `overflow-x: hidden` en html/body
5. **Botón WhatsApp tapado por home indicator** — `safe-area-inset-bottom`
6. **Áreas de toque pequeñas** — `min-h-[44px]` en todos los botones/links
7. **Teclado incorrecto en formulario** — `inputMode` apropiado por campo
8. **Texto desbordado** — `break-word`, `break-all` donde necesario
9. **Menú mobile bloqueando scroll** — `overflow: hidden` en body
10. **Viewport meta incorrecto** — migrado a `export const viewport` de Next.js 14
