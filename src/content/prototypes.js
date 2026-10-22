// Entradas de ejemplo para documentar, no representan tres prototipos construidos.
// published: true publica únicamente registros reales revisados, con o sin fotografía.
export const prototypes = [
  { id: 'prototype-01', published: false, title: 'Registro 01', description: '', image: '', alt: '', stage: '', date: '' },
  { id: 'prototype-02', published: false, title: 'Registro 02', description: '', image: '', alt: '', stage: '', date: '' },
  { id: 'prototype-03', published: false, title: 'Registro 03', description: '', image: '', alt: '', stage: '', date: '' },
]

// Añadir rutas únicamente después de copiar los archivos originales.
export const prototypePage = {
  title: 'De una idea a un prototipo',
  introduction: 'Conoce las propuestas conceptuales, la maqueta visual, los montajes físicos y los diseños digitales de AgroBot. Estos registros no acreditan capacidades técnicas verificadas.',
  sketchesLabel: 'Diseños 2D',
  modelLabel: 'Maqueta 3D',
  physicalLabel: 'Montajes físicos',
  digitalLabel: 'Diseño digital',
  sketchesIntroduction: 'Tres propuestas conceptuales que exploran diferentes configuraciones estructurales, alternativas de desplazamiento y disposiciones de los sensores de AgroBot.',
  modelDescription: 'Esta maqueta física de baja fidelidad fue elaborada para visualizar la apariencia general de AgroBot. Permite observar la plataforma con ruedas, el soporte vertical y la disposición conceptual de algunos componentes. No representa un prototipo funcional ni demuestra capacidades técnicas verificadas.',
  pendingImage: 'Imagen original pendiente de incorporación.',
}

export const sketches = [
  { id: 'design-01', title: 'Diseño 01', description: 'Plataforma con ruedas y soporte vertical para sensores. El boceto incluye anotaciones sobre la base, el soporte y los sensores de temperatura y humedad.', image: '/images/prototypes/2d/boceto_2d_1.png', alt: 'Diseño 01: boceto sobre papel de una plataforma con ruedas, soporte vertical y sensores, con flechas y anotaciones manuscritas' },
  { id: 'design-02', title: 'Diseño 02', description: 'Propuesta conceptual con desplazamiento mediante orugas, pantalla de información y brazo para sensores. El dibujo señala también una caja principal y una ventana superior.', image: '/images/prototypes/2d/boceto_2d_2.png', alt: 'Diseño 02: boceto de un robot con orugas, pantalla frontal, ventana superior y brazo para sensores, con sus anotaciones' },
  { id: 'design-03', title: 'Diseño 03', description: 'Estructura alargada con ruedas y brazo de sensores en un extremo. Sus anotaciones identifican la plataforma principal, los cables y los sensores de temperatura y humedad.', image: '/images/prototypes/2d/boceto_2d_3.png', alt: 'Diseño 03: boceto de una plataforma alargada con ruedas, pantalla lateral y brazo de sensores, con flechas y anotaciones' },
]

// Tres fotografías de UNA maqueta física, sin afirmar funcionamiento de sus piezas.
export const physicalModel = {
  title: 'Una maqueta, tres perspectivas',
  views: [
    { id: 'model-view-01', title: 'Perspectiva 01', image: '/images/prototypes/3d/boceto_3d_1.jpg', alt: 'Maqueta física de AgroBot en perspectiva: base de cartón con ruedas y soporte vertical con componentes colocados sobre él' },
    { id: 'model-view-02', title: 'Perspectiva 02', image: '/images/prototypes/3d/boceto_3d_2.jpg', alt: 'La misma maqueta física desde otro ángulo, mostrando la plataforma con ruedas, el soporte y las piezas dispuestas sobre la base' },
    { id: 'model-view-03', title: 'Perspectiva 03', image: '/images/prototypes/3d/boceto_3d_3.jpg', alt: 'Vista elevada y lateral de la misma maqueta, con su base de cartón, ruedas, soporte vertical y cableado visible' },
  ],
}
