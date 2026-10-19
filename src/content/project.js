// Contenido provisional. Las capacidades descritas son objetivos de desarrollo.
// Para añadir una imagen real: image: { src: '/ruta', alt: 'Descripción' }.
export const project = {
  name: 'AgroBot',
  context: 'Proyecto universitario · UTEC',
  status: 'En desarrollo',
  footer: 'Ingeniería para comprender y cuidar el suelo.',
}

export const sections = {
  home: {
    id: 'home', nav: 'Inicio', eyebrow: 'Robótica aplicada al campo',
    title: 'Conocer el suelo. Cultivar el futuro.',
    description: 'Exploramos el desarrollo de un robot autónomo todoterreno para monitorear y mapear las características del suelo agrícola.',
    note: 'Una iniciativa de ingeniería en etapa de diseño y prototipado.',
    cta: 'Conoce el proyecto', image: null,
  },
  about: {
    id: 'about', nav: 'Propósito', eyebrow: '01 / El propósito',
    title: 'El suelo como punto de partida.',
    description: 'Comprender las condiciones del suelo es parte del cuidado de los ecosistemas agrícolas. AgroBot propone explorar cómo la robótica puede apoyar esta tarea.',
    detail: 'El proyecto busca acercar el monitoreo de pH, humedad y temperatura al trabajo en campo, mediante una plataforma móvil en desarrollo.', image: null,
  },
  features: {
    id: 'features', nav: 'Características', eyebrow: '02 / La propuesta',
    title: 'Una plataforma, tres líneas de trabajo.',
    description: 'Capacidades previstas que orientan el diseño del robot.',
    items: [
      { title: 'Movilidad en campo', text: 'Diseño de una plataforma todoterreno con navegación autónoma como objetivo.' },
      { title: 'Monitoreo del suelo', text: 'Integración prevista de sensores de pH, humedad y temperatura.' },
      { title: 'Mapeo de condiciones', text: 'Exploración del registro espacial de las características del suelo.' },
    ], image: null,
  },
  specifications: {
    id: 'technical-specifications', nav: 'Especificaciones', eyebrow: '03 / Base técnica',
    title: 'Especificaciones en definición.',
    description: 'La selección de componentes y los parámetros finales se documentarán a medida que avance el desarrollo.',
    items: [
      ['Tipo de plataforma', 'Robot móvil todoterreno (propuesto)'],
      ['Variables de interés', 'pH, humedad y temperatura del suelo'],
      ['Navegación', 'Autónoma como objetivo de desarrollo'],
      ['Dimensiones, energía y componentes', 'Por definir y validar'],
    ], image: null,
  },
  journey: {
    id: 'development-journey', nav: 'Desarrollo', eyebrow: '04 / El proceso',
    title: 'De la idea al trabajo en campo.',
    description: 'El proyecto cuenta con bocetos y prototipos preliminares. Estas etapas organizan su evolución; no representan un porcentaje de avance.',
    items: [
      { title: 'Diseño conceptual', text: 'Exploración del problema y bocetos de la plataforma.', status: 'Con bocetos preliminares' },
      { title: 'Prototipado', text: 'Desarrollo de propuestas iniciales para estudiar la solución.', status: 'Con prototipos preliminares' },
      { title: 'Integración y validación', text: 'Integración de sistemas y evaluación del funcionamiento en campo.', status: 'Etapa prevista' },
    ], image: null,
  },
  sustainability: {
    id: 'sustainability', nav: 'Sostenibilidad', eyebrow: '05 / ODS 15 · Vida de ecosistemas terrestres',
    title: 'Tecnología con el territorio en mente.',
    description: 'AgroBot se vincula con el ODS 15 mediante su interés en comprender y cuidar el suelo agrícola.',
    detail: 'Se espera que la información del suelo contribuya a decisiones de manejo más informadas. Los beneficios ambientales deberán evaluarse durante el desarrollo.', image: null,
  },
  ourProject: {
    id: 'our-project', nav: 'Proyecto', eyebrow: '06 / Contexto académico',
    title: 'Un proyecto de ingeniería en UTEC.',
    description: 'AgroBot es una iniciativa universitaria de robótica agrícola que conecta diseño, sensores y autonomía.',
    detail: 'La información del equipo, los roles y los créditos académicos se incorporarán cuando estén confirmados.', image: null,
  },
}

export const navigation = Object.values(sections).map(({ id, nav }) => ({ id, label: nav }))
