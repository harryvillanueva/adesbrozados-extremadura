# Emerald Design Studio

Actúa como un diseñador UI/UX y desarrollador Frontend Senior experto en React, Tailwind CSS y animaciones web. Quiero rediseñar la landing page de la imagen adjunta ("Desbrozados Extremadura") para que luzca mucho más moderna, premium, llamativa y con efectos visuales, alejándonos del diseño plano actual.

Restricción Técnica Importante: Genera SOLO el Frontend (UI/UX). NO utilices Supabase ni ninguna base de datos. Haz que el formulario de contacto sea visual y muestre un "Toast" (notificación de éxito) al enviarlo simulando la acción.

Guía de Diseño y Estilos (Design System):

Paleta de colores: Tonos verdes modernos (Emerald/Forest Green para primarios, acentos en verde lima/neón muy sutiles) combinados con fondos blanco puro y grises muy claros (off-white) para contraste.

Tipografía: Usa una fuente moderna y limpia tipo 'Inter', 'Poppins' o 'Plus Jakarta Sans'. Títulos con peso Bold/ExtraBold.

Efectos visuales: Usa Glassmorphism (fondos translúcidos con backdrop-blur) en la barra de navegación y algunas tarjetas.

Animaciones: Usa animaciones suaves. Las tarjetas y botones deben tener un efecto de elevación al pasar el ratón (hover:-translate-y-1 hover:shadow-xl hover:scale-105). Las secciones deben aparecer suavemente al hacer scroll (efecto fade-in-up).

Iconos: Usa la librería lucide-react.

Estructura requerida (basada en la imagen, mantén los textos originales):

Navbar (Sticky & Glassmorphism): Barra superior fija, fondo translúcido. Logo a la izquierda, enlaces al centro, botón verde vibrante a la derecha ("Pedir Presupuesto").

Hero Section: Muy impactante. Imagen de fondo de alta calidad (usa un placeholder de Unsplash de un campo o tractor) con un overlay oscuro para que el texto resalte. Título principal grande y llamativo. Dos botones: Uno secundario con borde y uno primario verde brillante para WhatsApp.

Servicios (Tarjetas Modernas): Grid de 3 columnas. Transforma los servicios en tarjetas minimalistas con iconos grandes, bordes redondeados (rounded-2xl) y sombras suaves.

Nuestra Historia (Split Layout): Diseño asimétrico. Texto a la izquierda con los bullet points destacados usando iconos de check verdes (lucide-react). Imagen a la derecha con bordes redondeados orgánicos y una ligera sombra.

Preguntas Frecuentes (FAQ Accordion): Sección con fondo oscuro elegante. Usa un componente de acordeón moderno, fluido, que se expanda y contraiga con animaciones suaves.

Contacto y Presupuesto: Divide en 2 columnas.

Izquierda: Tarjetas estilo "Glass" para la información de contacto, horario y el aviso importante. Reemplaza el mapa con un placeholder estético o un botón para abrir Google Maps.

Derecha: Un formulario de contacto de aspecto muy premium. Campos con bordes sutiles, estados de focus claros (anillo verde al hacer clic) y un botón de envío que ocupe todo el ancho.

Footer: Simple, oscuro, profesional y limpio.

Por favor, genera la aplicación completa en React. ¡Quiero un resultado que parezca diseñado por una agencia de alto nivel!

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://adesbrozados-extremadura.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5e8b2d7b-45af-4c8f-a251-8c79a868b5bb).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
