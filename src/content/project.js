// Contenido provisional. Las capacidades descritas son objetivos de desarrollo.
// Para añadir una imagen real: image: { src: '/ruta', alt: 'Descripción' }.
export const developmentStates = { proposed: 'Propuesta', implemented: 'Implementada', verified: 'Verificada' }

export const project = {
  name: 'AgroBot',
  context: 'Proyecto universitario · UTEC',
  status: 'En desarrollo',
  footer: 'Ingeniería para comprender y cuidar el suelo.',
}

export const sections = {
  home: {
    id: 'home', nav: 'Inicio', eyebrow: 'Robótica aplicada al campo',
    title: 'Conocer el suelo\nCultivar el futuro',
    description: 'Exploramos el desarrollo de un robot autónomo todoterreno para monitorear y mapear las características del suelo agrícola.',
    note: 'Una iniciativa de ingeniería en etapa de diseño y prototipado.',
    cta: 'Conoce el proyecto', image: { src: '', alt: '' },
    secondaryCta: 'Explora el desarrollo',
    visualTitle: 'Del terreno a la información',
    visualNote: 'Esquema conceptual · No representa mediciones de campo',
    contextImageNote: 'Contexto agrícola · Fotografía de referencia',
    contextImageSource: 'https://unsplash.com/fr/photos/champ-de-plantes-a-feuilles-vertes-4DLnYJQE6kw',
    projectImageNote: 'Fotografía del proyecto · Esquema conceptual superpuesto',
    facts: [
      { label: 'Enfoque', value: 'Monitoreo del suelo' },
      { label: 'Plataforma propuesta', value: 'Robótica móvil' },
      { label: 'Vínculo', value: 'ODS 15 · Vida terrestre' },
    ],
  },
  about: {
    id: 'about', nav: 'Propósito', eyebrow: '01 / El propósito',
    title: 'El suelo como punto de partida',
    description: 'Comprender las condiciones del suelo es parte del cuidado de los ecosistemas agrícolas. AgroBot propone explorar cómo la robótica puede apoyar esta tarea.',
    detail: 'El proyecto busca acercar el monitoreo de pH, humedad y temperatura al trabajo en campo, mediante una plataforma móvil en desarrollo.', image: { src: '', alt: '' },
    processTitle: 'Cómo se plantea el monitoreo',
    process: [
      { title: 'Observar el suelo', text: 'La propuesta parte de tres parámetros: pH, humedad y temperatura.' },
      { title: 'Integrar los sistemas', text: 'Sensores, movilidad y control electrónico forman parte del diseño de la plataforma.' },
      { title: 'Estudiar la información', text: 'El registro y el mapeo se exploran como apoyo para comprender las condiciones del terreno.' },
    ],
  },
  features: {
    id: 'features', nav: 'Características', eyebrow: '02 / La propuesta',
    title: 'Sistemas que conectan suelo e ingeniería',
    summaryTitle: 'Las líneas principales de AgroBot',
    summaryDescription: 'Una aproximación a los sistemas que contempla la propuesta. Conoce el detalle y su estado de desarrollo en Tecnología.',
    technologyLink: 'Explorar la tecnología',
    description: 'Líneas de trabajo que orientan el diseño. Son propuestas de desarrollo, no capacidades verificadas del robot.',
    diagramNote: 'pH · Humedad · Temperatura / Parámetros previstos',
    items: [
      { image: { src: '', alt: '' }, status: 'proposed', evidence: '', title: 'Monitoreo del suelo', text: 'Integración prevista de sensores de pH, humedad y temperatura.' },
      { image: { src: '', alt: '' }, status: 'proposed', evidence: '', title: 'Movilidad en campo', text: 'Diseño de una plataforma todoterreno con navegación autónoma como objetivo.' },
      { image: { src: '', alt: '' }, status: 'proposed', evidence: '', title: 'Sensores previstos', text: 'Se contempla medir pH, humedad y temperatura. Los modelos y su integración quedan pendientes de documentación.' },
      { image: { src: '', alt: '' }, status: 'proposed', evidence: '', title: 'Control e integración', text: 'El proyecto contempla control electrónico para articular movilidad y sensores. La arquitectura se definirá durante el desarrollo.' },
      { image: { src: '', alt: '' }, status: 'proposed', evidence: '', title: 'Mapeo de condiciones', text: 'Exploración del registro espacial de las características del suelo.' },
    ], image: { src: '', alt: '' },
  },
  specifications: {
    id: 'technical-specifications', nav: 'Especificaciones', eyebrow: '03 / Base técnica',
    title: 'Especificaciones en definición',
    description: 'La selección de componentes y los parámetros finales se documentarán a medida que avance el desarrollo.',
    image: { src: '', alt: '' },
  },
  journey: {
    prototypesLink: 'Explorar bocetos y maqueta',
    galleryTitle: 'Nuestros prototipos',
    galleryDescription: 'Registros del desarrollo publicados con su contexto, etapa y periodo cuando están documentados.',
    galleryPending: 'Explora los bocetos, la maqueta conceptual y los registros de montajes físicos y diseños digitales en la página de Prototipos. Las fotografías no acreditan capacidades verificadas.',
    id: 'development-journey', nav: 'Desarrollo', eyebrow: '04 / El proceso',
    title: 'De la idea al trabajo en campo',
    description: 'El proyecto cuenta con bocetos y prototipos preliminares. Estas etapas organizan su evolución; no representan un porcentaje de avance.',
    items: [
      { title: 'Diseño conceptual', text: 'Exploración del problema y bocetos de la plataforma. El diseño permite plantear cómo acercar el monitoreo del suelo a una solución robótica.', status: 'Con bocetos preliminares', future: false },
      { title: 'Prototipado', text: 'Propuestas iniciales para estudiar la solución. Los prototipos sirven para explorar decisiones de construcción antes de documentar su integración y funcionamiento.', status: 'Con prototipos preliminares', future: false },
      { title: 'Integración y validación', text: 'Se prevé integrar los sistemas y evaluar su funcionamiento. Las pruebas y sus resultados se publicarán cuando exista evidencia documentada.', status: 'Etapa futura · Sin resultados verificados', future: true },
    ], image: { src: '', alt: '' },
  },
  sustainability: {
    id: 'sustainability', nav: 'Sostenibilidad', eyebrow: '05 / ODS 15 · Vida de ecosistemas terrestres',
    title: 'Tecnología con el territorio en mente',
    description: 'AgroBot se vincula con el ODS 15 mediante su interés en comprender y cuidar el suelo agrícola.',
    detail: 'Se espera que la información del suelo contribuya a decisiones de manejo más informadas. Los beneficios ambientales deberán evaluarse durante el desarrollo.', image: { src: '', alt: '' },
    goal: 'Vida de ecosistemas terrestres',
    detailTitle: 'Comprender antes de intervenir',
    caution: 'Un propósito de diseño. El proyecto todavía no dispone de beneficios ambientales medidos.',
  },
  ourProject: {
    id: 'our-project', nav: 'Proyecto', eyebrow: '06 / Contexto académico',
    title: 'Un proyecto de ingeniería en UTEC',
    description: 'AgroBot es una iniciativa universitaria de robótica agrícola que conecta diseño, sensores y autonomía.',
    detail: 'El equipo reúne estudiantes de Ciencia de la Computación, Ingeniería Mecánica e Ingeniería Mecatrónica.', image: { src: '', alt: '' },
  },
}

export const navigation = [
  { path: '/', label: 'Inicio', title: 'AgroBot | Robótica agrícola' },
  { path: '/prototipos', label: 'Prototipos', title: 'Prototipos | AgroBot' },
  { path: '/tecnologia', label: 'Tecnología', title: 'Tecnología | AgroBot' },
  { path: '/equipo', label: 'Equipo', title: 'Equipo | AgroBot' },
]
