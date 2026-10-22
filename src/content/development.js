// Recursos originales compartidos por Inicio, Prototipos y Tecnología.
export const developmentImages = {
  platform: { id: 'platform-general', image: '/images/development/mobile-platform/platform-general.jpg', title: 'Vista general de la plataforma', description: 'Montaje con ruedas, soporte vertical, cableado y componentes sobre la base. Esta fotografía no acredita movimiento autónomo ni capacidades todoterreno.', alt: 'Plataforma con ruedas, soporte vertical y cableado sobre una base clara', category: 'physical', assembly: 'mobile-platform' },
  electronicsTop: { id: 'electronics-top', image: '/images/development/mobile-platform/electronics-top.jpg', title: 'Electrónica sobre la plataforma', description: 'Vista superior de la distribución visible del cableado y los componentes.', alt: 'Vista superior del montaje electrónico sobre la plataforma móvil', category: 'physical', assembly: 'mobile-platform' },
  wheel: { id: 'wheel-closeup', image: '/images/development/mobile-platform/wheel-closeup.jpg', title: 'Detalle de las ruedas', description: 'Acercamiento a las ruedas y su disposición en la plataforma.', alt: 'Detalle de las ruedas del mismo montaje móvil', category: 'physical', assembly: 'mobile-platform' },
  front: { id: 'platform-front', image: '/images/development/mobile-platform/platform-front.jpg', title: 'Vista frontal de la plataforma', description: 'Otra perspectiva del mismo montaje, su base y soporte.', alt: 'Vista frontal de la plataforma con ruedas y soporte vertical', category: 'physical', assembly: 'mobile-platform' },
  arduino: { id: 'arduino-protoboard', image: '/images/development/electronics/arduino-protoboard.png', title: 'Montaje electrónico experimental', description: 'Arduino Uno visible junto a una protoboard, cables y otros componentes. No se identifica como controlador definitivo del proyecto.', alt: 'Arduino Uno conectado a una protoboard con cables, junto a motores y una batería', category: 'physical', assembly: 'experimental-electronics' },
  mechanism: { id: 'mechanism-physical', image: '/images/development/mechanics/mechanism-physical.png', title: 'Prototipo mecánico', description: 'Montaje físico con motor, estructura de soporte y varilla roscada. Su función definitiva está pendiente de documentación.', alt: 'Mecanismo vertical con motor azul, soporte y varilla roscada', category: 'physical', assembly: 'mechanical-system' },
  circuit: { id: 'tinkercad-circuit', image: '/images/development/digital/tinkercad-circuit.png', title: 'Diseño virtual del circuito', description: 'Representación en Tinkercad con Arduino, protoboard y conexiones. La captura no acredita una simulación exitosa.', alt: 'Captura de Tinkercad con Arduino, protoboard, motores y conexiones', category: 'digital', assembly: 'experimental-electronics' },
  cad: { id: 'inventor-cad', image: '/images/development/digital/inventor-cad-assembly.png', title: 'Modelado mecánico CAD', description: 'Ensamblaje desarrollado en Autodesk Inventor con eje roscado y soportes. No constituye evidencia de funcionamiento.', alt: 'Ensamblaje CAD en Autodesk Inventor con eje roscado, soportes y base', category: 'digital', assembly: 'mechanical-system' },
}

const images = developmentImages
export const physicalAssemblies = [
  { id: 'mobile-platform', title: 'Plataforma móvil y electrónica', description: 'Cuatro perspectivas de un mismo montaje físico.', views: [images.platform, images.electronicsTop, images.wheel, images.front] },
  { id: 'experimental-electronics', title: 'Montaje electrónico experimental', views: [images.arduino] },
  { id: 'mechanical-system', title: 'Prototipo mecánico', views: [images.mechanism] },
]
export const digitalDesigns = [
  { id: 'virtual-circuit', title: 'Diseño virtual del circuito', views: [images.circuit] },
  { id: 'cad-assembly', title: 'Modelado mecánico CAD', views: [images.cad] },
]
export const technologyMedia = [
  { id: 'control-media', title: 'Control electrónico', description: 'Montaje experimental, distribución sobre la plataforma y representación digital del circuito.', views: [images.arduino, images.electronicsTop, images.circuit] },
  { id: 'mobility-media', title: 'Sistema de movilidad', description: 'Vistas de las ruedas, la plataforma y la distribución física de componentes. No documentan autonomía ni desempeño todoterreno.', views: [images.platform, images.wheel, images.front] },
  { id: 'mechanics-media', title: 'Sistema mecánico', description: 'Registro físico y modelo CAD. La función definitiva y su relación técnica quedan pendientes de documentación.', views: [images.mechanism, images.cad] },
]
