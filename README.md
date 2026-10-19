# AgroBot Website

Base inicial de la web del proyecto universitario de robótica agrícola AgroBot (UTEC). El robot está en desarrollo: las capacidades previstas no representan resultados validados ni un producto comercial terminado.

Repositorio independiente de `AndreMejiaV/AgroBot`.

## Requisitos e instalación

Node.js 22.12+ o 24 LTS y npm (Vite también admite Node 20.19+).

```sh
npm install
npm run dev
```

En PowerShell, si `npm.ps1` está bloqueado, utiliza `npm.cmd` en todos los comandos. No es necesario cambiar las políticas de ejecución.

Si aparece `UNABLE_TO_VERIFY_LEAF_SIGNATURE` y utilizas Node.js 24, puedes utilizar los certificados de confianza de Windows en la sesión actual antes de instalar:

```powershell
$env:NODE_USE_SYSTEM_CA='1'
npm.cmd install
```

Esto mantiene activa la validación TLS y no modifica la configuración permanente de npm.

Abre la dirección que imprime Vite, normalmente http://localhost:5173. Para una instalación reproducible con el archivo de bloqueo incluido, utiliza `npm ci`.

## Verificaciones

```sh
npm run lint
npm run build
npm run preview
```

El build se genera en `dist/`. `preview` permite revisar ese build localmente y no publica la web.

## Estructura

```text
src/
  components/      Header y Section, con sus CSS Modules
  content/         project.js: textos, navegación e imágenes opcionales
  sections/        Home, About, Features, TechnicalSpecifications,
                   DevelopmentJourney, Sustainability y OurProject
  styles/          global.css: paleta, tipografía y estilos base
  App.jsx          Composición de las siete secciones
  main.jsx         Punto de entrada React
```

React + Vite con JavaScript, CSS moderno y CSS Modules. Navegación mediante anclas nativas, disponible sin menús desplegables. Incluye enlace para saltar al contenido y estilos de foco para teclado.

Edita el contenido en `src/content/project.js`. Cada sección admite `image: null` o `{ src, alt }`; mientras sea `null` no se genera un elemento de imagen ni se reserva espacio. No se incluyen imágenes, renders ni placeholders. Las imágenes reales futuras pueden guardarse en `public/` y referenciarse con una ruta desde `/`.

Esta etapa establece la estructura funcional y responsiva. El diseño final, las especificaciones validadas y los créditos del equipo quedan para etapas posteriores. Sin backend, base de datos ni servicios externos.

`.gitignore` excluye dependencias, builds, archivos de entorno y configuración local de IntelliJ. No se ha configurado publicación automática.
