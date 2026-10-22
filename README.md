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
  components/      Encabezado, enlaces, secciones y elementos reutilizables
  content/         Textos, navegación, equipo, especificaciones y prototipos
  pages/           Inicio, Prototipos, Tecnología y Equipo
  sections/        Home, About, Features, TechnicalSpecifications,
                   DevelopmentJourney, Sustainability y OurProject
  styles/          global.css: paleta, tipografía y estilos base
  navigation.js    History API y suscripción al historial
  App.jsx          Selección de página y elementos comunes
  main.jsx         Punto de entrada React
```

React + Vite con JavaScript, CSS moderno y CSS Modules. Reutiliza el enrutamiento local con History API, `useSyncExternalStore` y `SiteLink`, sin React Router ni dependencias nuevas. Incluye navegación activa, menú móvil accesible, enlace para saltar al contenido y estilos de foco para teclado.

Edita el contenido en `src/content/`, siguiendo [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md). La portada conserva la fotografía agrícola local y las animaciones de la versión 2.0. Prototipos incorpora tres bocetos originales y tres fotografías de una misma maqueta; los datos siguen admitiendo imágenes opcionales.

## Páginas

| URL | Contenido |
| --- | --- |
| `/` | Presentación, propósito, resumen de características, desarrollo y ODS 15. |
| `/prototipos` | Selector 2D/3D y galería existente con ampliación. |
| `/tecnologia` | Sistemas completos y especificaciones; oculta campos técnicos vacíos. |
| `/equipo` | Contexto UTEC y los cuatro integrantes con sus avatares. |

La Navbar contiene exclusivamente esas cuatro páginas. Atrás/Adelante funcionan con el historial del navegador. Cambiar de ruta monta la página correspondiente, actualiza el título, lleva el foco al contenido y conserva el encabezado y pie comunes. Los botones del hero siguen accediendo a Propósito y Desarrollo dentro de Inicio.

## Requisito para hosting

### Beta en Vercel (preparada, sin publicar)

El archivo `vercel.json` configura Vite, el comando `npm run build` y la salida `dist/`. Reescribe las visitas directas a `/prototipos`, `/tecnologia` y `/equipo` hacia `/index.html`; Inicio se sirve en `/`. Los archivos de `/assets/` y `/images/` mantienen sus rutas normales. Esta configuración sigue la [documentación de Vite en Vercel](https://vercel.com/docs/frameworks/frontend/vite#using-vite-to-make-spas).

Cuando se autorice el despliegue, utiliza la raíz de este repositorio como directorio del proyecto. Esta web no necesita variables de entorno privadas. `.vercel/` queda excluido de Git. Los cambios locales sin commit no estarán disponibles en un despliegue basado únicamente en el repositorio remoto.

Para revisar la Beta sin publicarla, ejecuta `npm.cmd run build` y `npm.cmd run preview`, y visita las cuatro rutas en la dirección que imprime Vite. Las fotografías locales se copian de `public/images/` a `dist/images/`. AgroBot sigue en desarrollo: la maqueta física representa su apariencia y no es un prototipo funcional ni evidencia de capacidades verificadas.

La comprobación final de las URLs públicas queda pendiente hasta que se autorice y realice el despliegue. Preparar esta configuración no publica el sitio ni conecta el repositorio a Vercel.

Publica el contenido de `dist/` en la raíz del dominio. El hosting debe tener fallback de SPA: devolver `/index.html` para las rutas de la aplicación cuando no exista un archivo físico. Así las visitas directas y recargas de `/prototipos`, `/tecnologia` y `/equipo` mostrarán React, en lugar de un 404. Sirve normalmente `/assets/` y `/images/`; no redirijas los archivos reales al HTML.

Ejemplo para Nginx, dentro del bloque del sitio:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

En un hosting con archivo `_redirects` compatible, la regla equivalente es `/* /index.html 200`, respetando primero los archivos estáticos existentes. Esta documentación no configura ni publica ningún hosting. Si el proveedor no admite reescrituras, habrá que acordar una alternativa antes de desplegar. Vite y `npm.cmd run preview` permiten comprobar las cuatro rutas localmente.

La navegación de cuatro páginas conserva el contenido existente. El selector claro/oscuro guarda la preferencia localmente y respeta las animaciones y fotografías originales. No se han añadido mejoras nuevas de galería, backend ni base de datos.

`.gitignore` excluye dependencias, builds, archivos de entorno y configuración local de IntelliJ. No se ha configurado publicación automática.
