# Imágenes necesarias — coloca los archivos en /public/images/

## Obligatorias (el sitio las muestra directamente)
- hero-kitchen.jpg     → Foto de cocina remodelada (usada en el Hero, derecha)
                         Tamaño ideal: 1200×900px, horizontal
                         (la foto de la referencia del cliente es perfecta para esto)

- brand-banner.jpg     → Foto del equipo o trabajo terminado (sección Nosotros)
                         Tamaño ideal: 1200×900px

- og-image.jpg         → Imagen para compartir en redes sociales
                         Tamaño EXACTO requerido: 1200×630px

## Opcionales (aparecen en las páginas de cada servicio)
- residential-cleaning.jpg
- commercial-cleaning.jpg
- remodeling.jpg
- painting.jpg

## Tip
Comprime todas las imágenes antes de subir:
→ https://squoosh.app  (gratis, calidad sin pérdida visible)
→ Apunta a < 200KB por imagen para carga rápida

## Logo
Si el cliente provee el logo en PNG o SVG:
→ Guárdalo como /public/images/logo.png
→ Reemplaza el SVG inline en src/components/Navbar.tsx con:
   <Image src="/images/logo.png" alt="MG White Service LLC" width={140} height={52} />
