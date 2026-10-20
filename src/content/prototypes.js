// Entradas de ejemplo para documentar, no representan tres prototipos construidos.
// published: true publica únicamente registros reales revisados, con o sin fotografía.
export const prototypes = [
  { id: 'prototype-01', published: false, title: 'Registro 01', description: '', image: '', alt: '', stage: '', date: '' },
  { id: 'prototype-02', published: false, title: 'Registro 02', description: '', image: '', alt: '', stage: '', date: '' },
  { id: 'prototype-03', published: false, title: 'Registro 03', description: '', image: '', alt: '', stage: '', date: '' },
]

// Añadir rutas únicamente después de copiar los archivos originales.
export const prototypePage = {
  title: 'De una idea a un prototipo.',
  introduction: 'Conoce las primeras propuestas conceptuales de AgroBot y la maqueta física construida para visualizar su apariencia.',
  sketchesLabel: 'Prototipos 2D',
  modelLabel: 'Maqueta 3D',
  sketchesIntroduction: 'Tres bocetos conceptuales diferentes. Sus imágenes originales y descripciones se incorporarán después de revisar las anotaciones de cada diseño.',
  modelDescription: 'Esta maqueta física de baja fidelidad fue elaborada para explorar la apariencia general de AgroBot. Permite visualizar su estructura, plataforma con ruedas y disposición conceptual de componentes. No constituye un prototipo funcional ni demuestra capacidades técnicas verificadas.',
  pendingImage: 'Imagen original pendiente de incorporación.',
}

export const sketches = [
  { id: 'design-01', title: 'Diseño 01', description: '', image: '', alt: 'Boceto original del Diseño 01 de AgroBot con sus anotaciones' },
  { id: 'design-02', title: 'Diseño 02', description: '', image: '', alt: 'Boceto original del Diseño 02 de AgroBot con sus anotaciones' },
  { id: 'design-03', title: 'Diseño 03', description: '', image: '', alt: 'Boceto original del Diseño 03 de AgroBot con sus anotaciones' },
]

// Tres fotografías de UNA maqueta física; títulos neutrales hasta revisar los ángulos.
export const physicalModel = {
  title: 'Una maqueta, tres perspectivas.',
  views: [
    { id: 'model-view-01', title: 'Vista 01', image: '', alt: 'Fotografía de la maqueta física de AgroBot, perspectiva 01' },
    { id: 'model-view-02', title: 'Vista 02', image: '', alt: 'Fotografía de la misma maqueta física de AgroBot, perspectiva 02' },
    { id: 'model-view-03', title: 'Vista 03', image: '', alt: 'Fotografía de la misma maqueta física de AgroBot, perspectiva 03' },
  ],
}
