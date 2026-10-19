# Cómo actualizar el contenido de AgroBot

No necesitas modificar componentes React ni CSS. Edita los objetos de `src/content/`, conserva las comillas y separa los elementos con comas. Guarda los archivos en UTF-8.

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

La ruta empieza con `/images/`, sin `public`. Respeta mayúsculas y extensión del archivo. El texto `alt` describe lo que se ve; evita frases como «imagen de». Las imágenes mantienen sus proporciones sin recortes. Home, About, Sustainability y las demás secciones usan el mismo formato. Las características tienen su propio `image` dentro de `sections.features.items`.

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
  title: 'Nombre de la etapa documentada',
  description: '',
  image: '',
  alt: '',
  stage: '',
  date: ''
}
```

Después de colocar una fotografía real, `image` puede ser `'/images/prototypes/boceto-chasis.jpg'`. Aquí la ruta es un texto, y `alt` es otro campo del mismo objeto. Rellena `description`, `date` y `stage` solo cuando conozcas la información. La fecha admite un periodo escrito; no exige un día exacto. La galería se actualiza automáticamente, sin editar JSX.

El título y aviso de la galería están en `sections.journey.galleryTitle` y `galleryDescription` de `project.js`. Actualiza el aviso cuando sustituyas los ejemplos por registros reales.

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
