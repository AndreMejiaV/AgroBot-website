# Cómo actualizar el contenido de AgroBot

No necesitas modificar componentes React ni CSS. Edita los objetos de `src/content/`, conserva las comillas y separa los elementos con comas. Guarda los archivos en UTF-8.

## Distribución entre las cuatro páginas

### Catálogo de Tecnología

«Ver función y detalles» abre un panel lateral en escritorio y una ventana inferior modal hasta 1000 px de ancho. Las tarjetas conservan su altura. El panel muestra función, notas de referencia y créditos; admite Escape, cierre desde el fondo y retorno del foco a la tarjeta. Las notas internas de descarga de `attribution.changes` siguen conservadas en los datos y documentos de fuentes, pero no se presentan como texto público. Los autores, las licencias y los enlaces de atribución siguen visibles en los detalles.

La página `/tecnologia` presenta los 21 materiales de un único catálogo. Edita `src/content/components.js`: `technologyContent` contiene los textos de la página, `componentCategories` las funciones del filtro y `components` las fichas. Cada ficha tiene `id`, `name`, `quantity`, `category`, `description` (función prevista), `image`, `alt`, `referenceNote` y `attribution`. Las cantidades proceden de la lista de materiales y no indican existencias ni compras realizadas.

Para sustituir una fotografía, conserva el original, coloca el nuevo archivo en `public/images/components/catalogo/` y actualiza `image`, `alt`, la nota de correspondencia y los créditos de esa ficha. Con `image: ''` se muestra «Fotografía pendiente». No uses ilustraciones como sustitutos. Los créditos desplegables conservan autor, fuente, URL original, licencia con enlace y cambios; actualiza también `public/images/components/catalogo/ATTRIBUTION.md` si cambias de recurso. El inventario CSV del paquete se conserva como registro de la revisión de fuentes.

Para añadir un material, copia un objeto, asigna un `id` único y una categoría existente. Los filtros y sus contadores se actualizan automáticamente. Describe funciones previstas sin afirmar integración o resultados de pruebas; mantén las advertencias de modelos o características no confirmados. Las especificaciones anteriores siguen guardadas en `src/content/specifications.js`; esta etapa no las completa a partir de fotografías.

La Navbar contiene únicamente Inicio (`/`), Prototipos (`/prototipos`), Tecnología (`/tecnologia`) y Equipo (`/equipo`). Sus etiquetas y títulos de navegador están en `navigation`, al final de `src/content/project.js`.

- **Inicio:** portada, propósito, resumen de las primeras tres características, desarrollo y sostenibilidad. Los enlaces contextuales llevan a Tecnología y Prototipos. Se conservan los destinos locales `#about` y `#development-journey` de los botones del hero.
- **Prototipos:** reutiliza `src/content/prototypes.js` y el selector/galerías existentes, sin cambios de diseño.
- **Tecnología:** presenta el catálogo de `components.js`, con filtros por función, cantidades, descripciones previstas y atribuciones de imágenes. Los datos de especificaciones se conservan para documentación posterior.
- **Equipo:** reutiliza el contexto académico de `sections.ourProject` y los integrantes de `team.js`, con los avatares existentes.

El resumen de Inicio utiliza los mismos objetos de características, sin crear copias de sus datos. Su título, introducción y enlace se editan en `sections.features.summaryTitle`, `summaryDescription` y `technologyLink`. Los textos y campos completos siguen disponibles en Tecnología.

La navegación reutiliza History API y `SiteLink`, sin dependencias nuevas. Cambiar de página no recarga el documento y el historial Atrás/Adelante sigue funcionando. En móvil, el botón Menú abre/cierra las cuatro opciones; Escape lo cierra y devuelve el foco al botón. También se cierra al elegir un enlace o salir con el teclado.

### Tema claro y oscuro

El botón de sol/luna al extremo derecho del encabezado alterna los temas sin recargar. Sus etiquetas accesibles indican la acción: «Activar modo oscuro» o «Activar modo claro». Sigue disponible con el menú móvil cerrado y funciona con Enter o Espacio.

El modo inicial es claro, independientemente del tema del sistema operativo. La elección se guarda en `localStorage` con la clave `agrobot-theme` (`light` o `dark`). Un script breve en `index.html` aplica la preferencia antes de montar React, evitando el destello del tema incorrecto. Si el almacenamiento está bloqueado, el botón funciona durante la visita y al navegar; al recargar se vuelve a claro. También se sincronizan los cambios entre pestañas del mismo sitio.

Los colores están centralizados en `src/styles/global.css`, en `:root` y `:root[data-theme="dark"]`. Los componentes utilizan variables para fondo, superficies, texto, acentos, bordes y foco. El hero y los bloques verdes conservan sus colores de marca y textos claros en ambos modos. Las fotografías no se invierten ni reciben filtros nuevos; los bocetos ampliados y las miniaturas tienen una base clara para conservar su legibilidad. Las animaciones y la preferencia de movimiento reducido no cambian.

Para publicar, el servidor debe servir `index.html` al acceder directamente a `/prototipos`, `/tecnologia` y `/equipo`, manteniendo los archivos reales de `/assets/` y `/images/`. Consulta el ejemplo de configuración en `README.md`. Vite y su preview ya permiten revisar estas rutas localmente.

## Página independiente «Prototipos»

Abre `/prototipos` desde la barra de navegación o el enlace de Development Journey. El selector permite alternar **Prototipos 2D** y **Maqueta 3D** sin recargar. Ya están incorporados estos seis archivos originales del proyecto, sin sustitutos ni alteraciones de color:

```text
public/images/prototypes/2d/boceto_2d_1.png
public/images/prototypes/2d/boceto_2d_2.png
public/images/prototypes/2d/boceto_2d_3.png
public/images/prototypes/3d/boceto_3d_1.jpg
public/images/prototypes/3d/boceto_3d_2.jpg
public/images/prototypes/3d/boceto_3d_3.jpg
```

Para añadir archivos nuevos, usa la extensión real de tus originales (JPG, PNG o WebP). No basta con renombrar su extensión. Conserva la imagen completa y todas sus anotaciones; las rutas en los datos deben coincidir exactamente con los archivos que copies. No hace falta modificar React ni CSS.

### Añadir los tres bocetos

En `src/content/prototypes.js`, edita **`sketches`**. Cada objeto corresponde a un boceto distinto:

```js
{
  id: 'design-01',
  title: 'Diseño 01',
  description: '',
  image: '/images/prototypes/2d/boceto_2d_1.png',
  alt: 'Descripción concreta del boceto original y sus anotaciones'
}
```

Completa `description` únicamente después de revisar lo visible. No inventes motivos de diseño, comparaciones de superioridad ni resultados técnicos. Para añadir otro boceto, copia un objeto en `sketches` con un `id` único. Para quitarlo, elimina ese objeto. Los textos de introducción y los nombres del selector se editan en `prototypePage`.

### Añadir las tres fotografías de la maqueta

Edita **`physicalModel.views`**, en el mismo archivo. Son tres vistas de **una sola maqueta física**, no tres prototipos. Para cada vista usa:

```js
{
  id: 'model-view-01',
  title: 'Perspectiva 01',
  image: '/images/prototypes/3d/boceto_3d_1.jpg',
  alt: 'Descripción de la perspectiva visible de la misma maqueta física'
}
```

Puedes cambiar el título por «Vista frontal» u otro ángulo solo después de revisar la foto. `physicalModel.title` y `prototypePage.modelDescription` contienen la explicación de su propósito visual. No atribuyas funcionamiento a mecanismos o sensores ni pruebas a esta maqueta.

Para añadir otra perspectiva de la misma maqueta, copia un objeto dentro de `physicalModel.views` con un `id` único y su ruta local; puedes añadir también `description`. Para quitar una perspectiva, elimina su objeto. La selección utiliza identificadores estables, no depende de que siempre existan exactamente tres vistas. Actualiza `physicalModel.title` si cambia la cantidad publicada. No presentes las perspectivas como maquetas diferentes.

Las miniaturas cambian la fotografía principal y señalan la perspectiva activa. Pulsar una fotografía abre una vista ampliada, cerrable con **Escape**, **Cerrar** o pulsando el fondo exterior. Los botones **Imagen anterior/siguiente** y las flechas del teclado recorren únicamente la categoría abierta, de forma circular y sin reproducción automática. Un contador anuncia la posición. Al recorrer las perspectivas 3D, también se actualiza la selección de la imagen principal.

El visor bloquea el desplazamiento del fondo, mantiene el foco dentro del diálogo y lo devuelve al botón original al cerrar. El enlace al original permite examinar las anotaciones con el zoom del navegador. Las imágenes se muestran completas, sin recortes ni filtros de inversión en modo oscuro. El selector de categorías admite flechas izquierda/derecha, Inicio/Fin y Tab. Las transiciones de categorías, perspectivas y visor se desactivan con la opción de reducir movimiento.

Si no tienes una imagen, conserva `image: ''`: aparece un aviso breve y no se solicita un archivo inexistente. Las descripciones vacías no muestran párrafos. Las vistas pendientes siguen siendo seleccionables, pero no abren ampliaciones sin imagen.

La lista anterior `prototypes` se conserva para los registros resumidos de Development Journey; no es la fuente del selector nuevo. Las animaciones de Home siguen intactas. Para probar la nueva ruta directamente usa `npm.cmd run dev` o `npm.cmd run preview`. Al alojar la aplicación en un servidor estático, configura las rutas como `/prototipos` para devolver `index.html` (fallback de SPA).

## 1. Colocar fotografías

Usa fotografías o diagramas reales del proyecto y con permiso de uso:

- `public/images/hero/`: fotografía principal del robot.
- `public/images/prototypes/`: registros de prototipos.
- `public/images/components/`: sensores, electrónica y otras características.
- `public/images/development/`: bocetos, problemática agrícola, propósito y ODS 15.

Los archivos `.gitkeep` solo conservan las carpetas vacías; puedes dejarlos.

## 2. Nombrar archivos

Utiliza minúsculas, guiones y nombres descriptivos: `robot-vista-frontal.webp` o `boceto-chasis.jpg`. Evita espacios, tildes y nombres como `foto-final-final.jpg`. Se admiten JPG, PNG, WebP y SVG para diagramas. Reduce el tamaño de archivos muy pesados antes de incorporarlos.

## 3. Añadir la ruta

En `src/content/project.js`, cada sección tiene un objeto `image`. Ejemplo para `home`, únicamente después de colocar el archivo real:

```js
image: {
  src: '/images/hero/robot-vista-frontal.webp',
  alt: 'Vista frontal del prototipo de AgroBot sobre la mesa de trabajo'
}
```

La ruta empieza con `/images/`, sin `public`. Respeta mayúsculas y extensión del archivo. El texto `alt` describe lo que se ve; evita frases como «imagen de». Las imágenes de contenido mantienen sus proporciones sin recortes. El fondo de Home conserva proporciones y puede recortarse para cubrir toda la portada; consulta las instrucciones específicas al final. Home, About, Sustainability y las demás secciones usan el mismo formato de datos. Las características tienen su propio `image` dentro de `sections.features.items`.

## 4. Títulos y descripciones

En `project.js`, edita `title`, `description` y `detail` para el contenido de las secciones. Cada característica conserva su descripción en `text`. En `prototypes.js`, utiliza `title` y `description`. Escribe textos breves, concretos y fieles al material disponible. No cambies el eslogan de la portada.

No presentes objetivos como resultados. «Se propone medir humedad» es distinto de «Se verificó la medición de humedad». No añadas estadísticas, beneficios ambientales medidos ni datos técnicos sin documentación.

## 5. Editar especificaciones

Abre `src/content/specifications.js`. Los cinco grupos contienen listas `items`. Cada entrada tiene:

```js
{ label: 'Microcontrolador', value: '', status: '', evidence: '' }
```

- `label`: nombre del parámetro.
- `value`: dato documentado, con unidades si corresponde. Si está vacío o solo tiene espacios, la fila no se muestra públicamente. Los avisos «Por confirmar», «Pendiente de documentación», «Por definir» y «Por definir y validar» también se ocultan.
- `status`: estado descrito en el paso 7.
- `evidence`: referencia concreta al registro del prototipo o informe de prueba; puedes escribir una ruta de documento, fecha y apartado.

Para añadir un parámetro, copia una entrada dentro de `items` y cambia su etiqueta. No inventes modelos, medidas ni autonomías. Indica expresamente si una autonomía es prevista o medida y bajo qué condiciones se midió.

Todos los campos permanecen editables en los datos aunque no se muestren. Las categorías sin filas útiles se ocultan; cuando no hay ninguna categoría visible, aparece únicamente el aviso «Estamos preparando la documentación técnica de AgroBot.» debajo del encabezado habitual. No es necesario borrar filas para limpiar la página.

## 6. Añadir un prototipo

Abre `src/content/prototypes.js`. Las tres entradas iniciales son ejemplos vacíos para documentar; no afirman la existencia de tres prototipos. Sustitúyelas por registros reales. Para añadir otra, copia un objeto dentro de la lista y usa un `id` único:

```js
{
  id: 'prototype-04',
  published: false,
  title: 'Nombre de la etapa documentada',
  description: '',
  image: '',
  alt: '',
  stage: '',
  date: ''
}
```

Después de colocar una fotografía real, `image` puede ser `'/images/prototypes/boceto-chasis.jpg'`. Aquí la ruta es un texto, y `alt` es otro campo del mismo objeto. Rellena `description`, `date` y `stage` solo cuando conozcas la información. La fecha admite un periodo escrito; no exige un día exacto. La galería se actualiza automáticamente, sin editar JSX.

En la propuesta visual 2.0, solo aparecen los registros con `published: true`. Mantén `published: false` para ejemplos, borradores o información sin revisar. Cuando exista un registro real, completa sus textos y activa `published: true`; la fotografía sigue siendo opcional. Publicar un registro no equivale a verificar las capacidades del prototipo.

El título y aviso de la galería están en `sections.journey.galleryTitle`, `galleryDescription` y `galleryPending` de `project.js`. `galleryPending` aparece cuando no hay registros publicados, sin mostrar ejemplos como avances reales.

## 7. Indicar el estado con rigor

En especificaciones y características usa:

| Valor de `status` | Significado |
| --- | --- |
| `''` | Pendiente de documentación; no atribuye un avance. |
| `'proposed'` | Propuesta: objetivo de diseño, todavía sin afirmar implementación. |
| `'implemented'` | Implementada en un prototipo identificado en `evidence`; no significa que esté validada. |
| `'verified'` | Verificada mediante una prueba documentada en `evidence`. |

En las especificaciones, los estados vacíos o sin evidencia suficiente se omiten, sin dejar avisos repetitivos. En las características se conserva el aviso pendiente. Sin `evidence`, no se publican las etiquetas implementada ni verificada. La etiqueta propuesta identifica un objetivo documentado en el contenido; no afirma implementación. Una referencia no sustituye la revisión de la evidencia: comprueba que respalde exactamente la afirmación.

En la galería, `stage` es texto libre opcional: escribe únicamente un estado confirmado y su referencia, por ejemplo el nombre de la etapa registrada. Si no está confirmado, déjalo vacío. Un prototipo puede tener capacidades propuestas, implementadas y verificadas diferentes; evita atribuir un único estado a todas ellas.

## 8. Si todavía no hay imagen o información

Deja `image: ''` en prototipos o `image: { src: '', alt: '' }` en las secciones y características. No escribas rutas de archivos futuros. Las secciones omiten el espacio de fotografía; los prototipos muestran «Registro fotográfico pendiente». Si una ruta falla, la imagen se oculta y la galería recupera el aviso pendiente. Corrige igualmente la ruta, pues el navegador habrá intentado cargarla.

Los campos opcionales vacíos no muestran fechas, estados ni párrafos ficticios. Conserva un `id` único para cada registro. Un `alt` específico siempre es preferible al texto alternativo de respaldo.

## 9. Editar el equipo

Abre `src/content/team.js`. Cada integrante es un objeto dentro de `team`. Modifica `name` (nombre completo) y `degree` (carrera) sin tocar React. El título de la subsección se edita en `teamContent.title`.

Para añadir otra persona, copia un objeto completo dentro de la lista, separándolo con una coma y asignando un `id` único. Para quitarla, elimina su objeto completo. Si la lista queda vacía, no se muestra la subsección del equipo.

```js
{
  id: 'nuevo-integrante',
  name: 'Nombre completo confirmado',
  degree: 'Carrera confirmada',
  role: '',
  email: '',
  professionalUrl: '',
  profileType: 'computer-science',
  image: '',
  alt: 'Representación abstracta de Ciencia de la Computación'
}
```

Los campos opcionales vacíos o con espacios no generan bloques públicos:

- `role`: rol confirmado en el proyecto, si se conoce.
- `email`: únicamente correo institucional autorizado por el integrante. No publiques correos personales. Al completarlo, aparecerá un enlace para escribirle.
- `professionalUrl`: enlace profesional autorizado, empezando con `https://` (o `http://`). Solo se muestra si tiene uno de estos prefijos.
- `image`: ruta opcional a una ilustración propia, disponible realmente dentro de `public/images/`. No se necesitan fotos reales. Si está vacío o falla, se usa el SVG abstracto por carrera.
- `alt`: descripción accesible de la representación visual; actualízala al cambiar la carrera o ilustración.

### Representación circular por carrera

`profileType` selecciona una ilustración SVG reutilizable, dibujada dentro de un círculo con los colores existentes de AgroBot:

| Valor | Representación |
| --- | --- |
| `'computer-science'` | Interfaz con trazos de código y lógica computacional. |
| `'mechanical'` | Engranaje y elementos concéntricos de un mecanismo. |
| `'mechatronics'` | Circuito integrado y conexiones de sensores/control. |

Los integrantes de la misma carrera pueden compartir representación. Un valor desconocido utiliza un esquema geométrico neutro. No hay rostros, imágenes descargadas ni fotografías del equipo. Cambiar `degree` no cambia automáticamente `profileType`: revisa ambos campos para que coincidan.

## Revisar antes de entregar

Ejecuta `npm.cmd run dev`, abre la dirección que muestra Vite y revisa escritorio y móvil. Comprueba navegación, imágenes, textos alternativos y estados. Después ejecuta `npm.cmd run lint` y `npm.cmd run build`. Ninguno de estos pasos publica la web ni crea commits.

## Contenido y movimiento en la propuesta 2.0

En `project.js`, `sections.home.facts` permite editar el resumen de portada. `visualTitle` y `visualNote` describen el esquema abstracto; conserva su aclaración de que no representa mediciones. Una fotografía real en `sections.home.image` tiene prioridad como fondo de toda la portada, sin editar Home. El esquema permanece superpuesto.

`sections.about.process` organiza la explicación del monitoreo previsto. Cada paso tiene `title` y `text`. Las características siguen en `sections.features.items`: textos, imagen opcional y estado. No atribuyas integración o validación a componentes sin documentación.

La línea de tiempo utiliza `sections.journey.items`. Cada etapa conserva `title`, `text` y `status`. `future: true` dibuja la etapa como futura con un marcador de contorno; no añade fechas ni afirma resultados. El texto del estado debe indicar también que es una etapa prevista, sin depender únicamente del color. Las etapas preliminares existentes no equivalen a capacidades implementadas o verificadas.

Las entradas duran 1,2 segundos, con pequeños retrasos escalonados de hasta 270 ms. Pueden repetirse al volver a entrar: primero el elemento debe salir completamente de la pantalla y superar un margen adicional de 120 px. Los pequeños movimientos cerca del borde no las reactivan. Si la persona tiene activada la opción de reducir movimiento, no se aplican animaciones ni desplazamiento suave. Si no se puede activar el observador, todo el contenido sigue visible. No hace falta instalar una biblioteca adicional.

### Fondo agrícola de la portada

La portada ya incluye una fotografía real descargada de Unsplash, almacenada localmente:

- **Archivo:** `public/images/hero/tim-mossholder-campo-agricola-4DLnYJQE6kw.jpg`.
- **Autor:** Tim Mossholder.
- **Fotografía seleccionada:** [campo agrícola con cultivos y suelo visible, 4DLnYJQE6kw](https://unsplash.com/fr/photos/champ-de-plantes-a-feuilles-vertes-4DLnYJQE6kw).
- **Versión local:** JPEG de 1920 px de ancho, obtenido del CDN oficial con compresión de calidad 65. [Descarga utilizada](https://images.unsplash.com/photo-1522120679444-b967faef8c38?fm=jpg&fit=max&w=1920&q=65).
- **Licencia indicada por la fuente:** [Unsplash License](https://unsplash.com/license).

Es una fotografía agrícola de referencia, no una fotografía del robot, del lugar de las pruebas ni evidencia del proyecto AgroBot. El crédito y el enlace a la fuente aparecen discretamente en la portada. La web carga el archivo local, sin depender de Unsplash durante la visita.

La fotografía cubre el fondo de **toda Home**, detrás del título, los botones y el esquema. Solo la imagen recibe desenfoque suave; una capa verde oscuro mantiene el contraste. El esquema conceptual y el contenido no se desenfocan. El aviso contextual se edita en `sections.home.contextImageNote` y su enlace en `contextImageSource`.

Si se retira el archivo de referencia, Vite detecta su ausencia al arrancar o compilar y Home conserva el fondo verde y el esquema. En desarrollo detecta también la incorporación o retirada del archivo y se reinicia; recarga el navegador si hace falta. Si un archivo existente no se puede cargar, se oculta únicamente la fotografía.

Para reemplazarla más adelante por una fotografía real del proyecto, coloca ese archivo en `public/images/hero/` y completa `sections.home.image` en `src/content/project.js`:

```js
image: {
  src: '/images/hero/prototipo-en-campo.jpg',
  alt: 'Descripción de la fotografía real del prototipo'
}
```

Esta ruta tiene prioridad sobre la fotografía de Tim Mossholder. No es necesario modificar JSX ni CSS. Se mantiene el tratamiento de fondo y el esquema. Revisa `projectImageNote` para que describa correctamente la fotografía y no sugiera pruebas realizadas sin evidencia. Al configurar una fotografía propia, deja de mostrarse el crédito de la fotografía de referencia. Como fondo contextual decorativo, la imagen no duplica su descripción en el lector de pantalla; los textos y el aviso conceptual siguen visibles. Para volver al campo de referencia, deja `image.src: ''`. Después de cambiar imágenes para una versión compilada, ejecuta de nuevo `npm.cmd run build`.

## Fotografías de montajes y diseños técnicos

Los ocho originales se conservan en `public/images/development/`, dentro de `mobile-platform/`, `electronics/`, `mechanics/` y `digital/`. No es necesario editar React para sustituirlos.

Edita `src/content/development.js`: cada entrada de `developmentImages` contiene `image` (ruta desde `/images/`), `title`, `description`, `alt`, `category` y `assembly` (montaje al que pertenece). Para sustituir una imagen, copia el archivo nuevo a su carpeta y cambia únicamente `image`; conserva el original cuando necesites mantenerlo como registro. Las imágenes se muestran completas, sin filtros ni recortes.

Para añadir una perspectiva, crea una entrada con un `id` único y añade su referencia al arreglo `views` del grupo correspondiente en `physicalAssemblies`. Por ejemplo, `views: [images.platform, images.electronicsTop, images.wheel, images.front]` corresponde a cuatro vistas del mismo montaje, no a cuatro robots. Los grupos con varias imágenes muestran miniaturas automáticamente. El visor permite ampliación, zoom, desplazamiento, flechas y Escape.

`digitalDesigns` organiza Tinkercad e Inventor como trabajos diferentes. `technologyMedia` reutiliza las mismas entradas para Control electrónico, Movilidad y Sistema mecánico. Inicio usa `developmentImages.platform` en el bloque de desarrollo. Las rutas se escriben una sola vez en los datos.

Completa las descripciones solo con información confirmada. Un Arduino Uno visible no define el controlador final; una captura digital no acredita una simulación exitosa. La función definitiva del mecanismo, integración de sensores, autonomía y capacidades de movimiento siguen pendientes de documentación. Las especificaciones técnicas se mantienen separadas y no se completan automáticamente a partir de fotografías.

