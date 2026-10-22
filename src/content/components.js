// Catálogo único editable. Fuentes contrastadas con INVENTARIO_FOTOGRAFICO.csv.
// Las funciones son previstas; ninguna entrada acredita integración o validación.
export const technologyContent = {
  "eyebrow": "AgroBot / Tecnología",
  "title": "Componentes y materiales de AgroBot",
  "introduction": "AgroBot continúa en desarrollo y prototipado. Este catálogo reúne los materiales contemplados para explorar su sistema de control, sensores, conexiones y protección.",
  "note": "Las cantidades corresponden al catálogo de materiales contemplados. Las fotografías externas son referencias visuales y pueden mostrar variantes distintas del modelo adquirido; no acreditan integración ni funcionamiento.",
  "allLabel": "Todos",
  "filterLabel": "Filtrar materiales por función",
  "referenceLabel": "Referencia visual",
  "pendingLabel": "Fotografía pendiente",
  "detailLabel": "Ver función y detalles",
  "functionLabel": "Función prevista",
  "referenceHeading": "Sobre esta fotografía",
  "creditsHeading": "Créditos de la imagen",
  "closeDetailsLabel": "Cerrar detalles del componente",
  "detailsRegionLabel": "Información del componente",
  "imageUseNote": "Fotografía conservada sin edición por AgroBot",
  "statusTitle": "Un proyecto en desarrollo",
  "statusText": "AgroBot se encuentra en desarrollo y prototipado. Se han elaborado bocetos, maquetas, montajes experimentales y diseños digitales. La integración y validación del sistema final siguen en proceso.",
  "prototypesLink": "Explorar el desarrollo en Prototipos"
}

export const componentCategories = [
  {
    "id": "control",
    "label": "Control"
  },
  {
    "id": "sensors",
    "label": "Sensores"
  },
  {
    "id": "mobility",
    "label": "Movilidad"
  },
  {
    "id": "electronics",
    "label": "Electrónica"
  },
  {
    "id": "power",
    "label": "Alimentación"
  },
  {
    "id": "protection",
    "label": "Protección"
  },
  {
    "id": "connections",
    "label": "Conexiones"
  },
  {
    "id": "tools",
    "label": "Herramientas"
  }
]

export const components = [
  {
    "id": "esp32",
    "name": "ESP32",
    "quantity": 1,
    "image": "/images/components/catalogo/esp32.jpg",
    "referenceNote": "ESP-WROOM-32 visible. Confirmar variante y número de pines de la placa del equipo.",
    "attribution": {
      "author": "Ubahnverleih",
      "source": "https://commons.wikimedia.org/wiki/File:ESP32_Espressif_ESP-WROOM-32_Dev_Board.jpg",
      "original": "https://upload.wikimedia.org/wikipedia/commons/2/20/ESP32_Espressif_ESP-WROOM-32_Dev_Board.jpg",
      "license": "CC0 1.0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
      "changes": "Reutilizada de la descarga anterior; copia intacta de la versión obtenida por el script, no necesariamente máxima resolución"
    },
    "category": "control",
    "description": "Procesar señales y coordinar tareas de control dentro de la arquitectura prevista. La elección de la placa y su integración final deben documentarse.",
    "alt": "Placa de desarrollo ESP32 con módulo ESP-WROOM-32, pines y conector USB"
  },
  {
    "id": "buzzer",
    "name": "Buzzer",
    "quantity": 1,
    "image": "/images/components/catalogo/buzzer.jpg",
    "referenceNote": "Disco/interior piezoeléctrico sin carcasa; no equivale necesariamente al buzzer encapsulado o módulo del proyecto.",
    "attribution": {
      "author": "Gophi",
      "source": "https://commons.wikimedia.org/wiki/File:2007-07-24_Piezoelectric_buzzer.jpg",
      "original": "https://upload.wikimedia.org/wikipedia/commons/d/d3/2007-07-24_Piezoelectric_buzzer.jpg",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "changes": "Reutilizada de la descarga anterior; copia intacta de la versión obtenida por el script, no necesariamente máxima resolución"
    },
    "category": "electronics",
    "description": "Proporcionar avisos sonoros en el sistema previsto. Las condiciones de activación siguen pendientes de definición.",
    "alt": "Disco piezoeléctrico del interior de un buzzer con dos cables"
  },
  {
    "id": "sensor-hc-sr04",
    "name": "Sensor ultrasónico HC-SR04 de 4 pines",
    "quantity": 1,
    "image": "/images/components/catalogo/sensor-hc-sr04.jpg",
    "referenceNote": "HC-SR04 y cuatro pines visibles. No acredita integración en AgroBot.",
    "attribution": {
      "author": "Suyash Dwivedi",
      "source": "https://commons.wikimedia.org/wiki/File:HC_SR04_Ultrasonic_Module.jpg",
      "original": "https://upload.wikimedia.org/wikipedia/commons/d/dd/HC_SR04_Ultrasonic_Module.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "changes": "Reutilizada de la descarga anterior; copia intacta de la versión obtenida por el script, no necesariamente máxima resolución"
    },
    "category": "sensors",
    "description": "Obtener una referencia de distancia mediante ultrasonido. Su ubicación y uso concreto en AgroBot están pendientes de documentación.",
    "alt": "Módulo HC-SR04 con dos transductores y cuatro pines visibles"
  },
  {
    "id": "protoboard",
    "name": "Protoboard",
    "quantity": 1,
    "image": "/images/components/catalogo/protoboard.png",
    "referenceNote": "Protoboard de 400 contactos vista por ambas caras; tamaño y formato del proyecto pendientes.",
    "attribution": {
      "author": "Guhuru",
      "source": "https://commons.wikimedia.org/wiki/File:Breadboard.png",
      "original": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Breadboard.png",
      "license": "CC0 1.0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
      "changes": "Reutilizada de la descarga anterior; copia intacta de la versión obtenida por el script, no necesariamente máxima resolución"
    },
    "category": "connections",
    "description": "Organizar conexiones temporales durante el montaje experimental, antes de definir una solución electrónica definitiva.",
    "alt": "Caras superior e inferior de una protoboard de 400 contactos"
  },
  {
    "id": "jumpers-mh",
    "name": "Jumpers macho-hembra (M-H)",
    "quantity": 15,
    "image": "/images/components/catalogo/jumpers-mh.jpg",
    "referenceNote": "Extremos M-H visibles; longitud y cantidad no representadas.",
    "attribution": {
      "author": "Edwiyanto",
      "source": "https://commons.wikimedia.org/wiki/File:Jumper_male-to-female.jpg",
      "original": "https://upload.wikimedia.org/wikipedia/commons/6/66/Jumper_male-to-female.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "changes": "Reutilizada de la descarga anterior; copia intacta de la versión obtenida por el script, no necesariamente máxima resolución"
    },
    "category": "connections",
    "description": "Conectar puntos con terminales macho y hembra durante los montajes experimentales.",
    "alt": "Tres cables jumper con un extremo macho y otro hembra"
  },
  {
    "id": "jumpers-mm",
    "name": "Jumpers macho-macho (M-M)",
    "quantity": 20,
    "image": "/images/components/catalogo/jumpers-mm.jpg",
    "referenceNote": "Extremos M-M visibles; longitud y cantidad no representadas.",
    "attribution": {
      "author": "Edwiyanto",
      "source": "https://commons.wikimedia.org/wiki/File:Jumper_male-to-male.jpg",
      "original": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jumper_male-to-male.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "changes": "Reutilizada de la descarga anterior; copia intacta de la versión obtenida por el script, no necesariamente máxima resolución"
    },
    "category": "connections",
    "description": "Realizar conexiones entre puntos compatibles con terminales macho en los montajes experimentales.",
    "alt": "Tres cables jumper con terminales macho en ambos extremos"
  },
  {
    "id": "led-verde",
    "name": "LED verde 5 mm",
    "quantity": 2,
    "image": "/images/components/catalogo/led-verde.jpg",
    "referenceNote": "LED verde completo de 5 mm según la ficha de la fuente. Confirmar la variante eléctrica del proyecto.",
    "attribution": {
      "author": "oomlout",
      "source": "https://www.flickr.com/photos/snazzyguy/9379961864/",
      "original": "https://live.staticflickr.com/5520/9379961864_ca26c2da9a_o.jpg",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "changes": "Original descargado; sin edición"
    },
    "category": "electronics",
    "description": "Servir como indicador luminoso. El significado del color y su lógica de activación están por definir.",
    "alt": "Fotografía de un LED verde de 5 mm encendido con sus dos terminales"
  },
  {
    "id": "led-amarillo",
    "name": "LED amarillo 5 mm",
    "quantity": 2,
    "image": "/images/components/catalogo/led-amarillo.jpg",
    "referenceNote": "LED amarillo de 5 mm encendido según ficha; fotografía real, no ilustración. Confirmar variante eléctrica del proyecto.",
    "attribution": {
      "author": "oomlout",
      "source": "https://commons.wikimedia.org/wiki/File:5_mm_Tinted_Yellow_LED_(on).jpg",
      "original": "https://upload.wikimedia.org/wikipedia/commons/9/9c/5_mm_Tinted_Yellow_LED_(on).jpg",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "changes": "Original descargado; sin edición"
    },
    "category": "electronics",
    "description": "Servir como indicador luminoso. El significado del color y su lógica de activación están por definir.",
    "alt": "Fotografía de un LED amarillo de 5 mm encendido con sus dos terminales"
  },
  {
    "id": "led-rojo",
    "name": "LED rojo 5 mm",
    "quantity": 2,
    "image": "/images/components/catalogo/led-rojo.jpg",
    "referenceNote": "LED rojo de 5 mm encendido según ficha; fotografía real, no ilustración. Confirmar variante eléctrica del proyecto.",
    "attribution": {
      "author": "oomlout",
      "source": "https://commons.wikimedia.org/wiki/File:5_mm_Red_LED_(on).jpg",
      "original": "https://upload.wikimedia.org/wikipedia/commons/c/c1/5_mm_Red_LED_(on).jpg",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "changes": "Original descargado; sin edición"
    },
    "category": "electronics",
    "description": "Servir como indicador luminoso. El significado del color y su lógica de activación están por definir.",
    "alt": "Fotografía de un LED rojo de 5 mm encendido con sus dos terminales"
  },
  {
    "id": "resistencia-220",
    "name": "Resistencia carbono 220 ohm 5 % 1/4 W",
    "quantity": 10,
    "image": "/images/components/catalogo/resistencia-220.jpg",
    "referenceNote": "220 ohm y 5 % según ficha y bandas. No confirma 1/4 W ni composición de carbono.",
    "attribution": {
      "author": "oomlout",
      "source": "https://commons.wikimedia.org/wiki/File:220_ohms_5%25_axial_resistor.jpg",
      "original": "https://upload.wikimedia.org/wikipedia/commons/9/9b/220_ohms_5%25_axial_resistor.jpg",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "changes": "Reutilizada de la descarga anterior; copia intacta de la versión obtenida por el script, no necesariamente máxima resolución"
    },
    "category": "electronics",
    "description": "Limitar corriente en las conexiones que lo requieran. La ubicación y selección final deben contrastarse con el circuito documentado.",
    "alt": "Resistencia axial con bandas rojo, rojo, marrón y dorado"
  },
  {
    "id": "resistencia-10k",
    "name": "Resistencia carbono 10k ohm 5 % 1/4 W",
    "quantity": 10,
    "image": "/images/components/catalogo/resistencia-10k.jpg",
    "referenceNote": "10k ohm y 5 % según ficha y bandas marrón-negro-naranja-dorado. No confirma 1/4 W ni composición de carbono.",
    "attribution": {
      "author": "oomlout",
      "source": "https://commons.wikimedia.org/wiki/File:10_kiloohms_5%25_axial_resistor.jpg",
      "original": "https://upload.wikimedia.org/wikipedia/commons/4/42/10_kiloohms_5%25_axial_resistor.jpg",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "changes": "Original descargado; sin edición"
    },
    "category": "electronics",
    "description": "Acondicionar niveles eléctricos en las conexiones que lo requieran. Su función concreta dentro del circuito debe documentarse.",
    "alt": "Resistencia axial con bandas marrón, negro, naranja y dorado"
  },
  {
    "id": "sensor-lluvia-yl83",
    "name": "Sensor de lluvia YL-83",
    "quantity": 1,
    "image": "/images/components/catalogo/sensor-lluvia-yl83.jpg",
    "referenceNote": "YL-83 visible en la placa colectora y el módulo. Confirmar la revisión física del componente del equipo.",
    "attribution": {
      "author": "Francesco Balducci (Balau)",
      "source": "https://balau82.wordpress.com/2014/12/23/using-a-rain-sensor-with-arduino-uno-in-c/",
      "original": "https://balau82.wordpress.com/wp-content/uploads/2014/12/img_20141027_210830.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "changes": "Original descargado; sin edición"
    },
    "category": "sensors",
    "description": "Explorar la detección de presencia de agua sobre la placa sensible. Su integración y validación en el sistema siguen pendientes.",
    "alt": "Placa colectora y módulo de un sensor de lluvia con inscripción YL-83 visible"
  },
  {
    "id": "power-bank",
    "name": "Power Bank 5 V",
    "quantity": 1,
    "image": "/images/components/catalogo/power-bank-referencia.jpg",
    "referenceNote": "Power bank USB genérica. La foto no permite confirmar salida de 5 V, capacidad ni modelo del equipo.",
    "attribution": {
      "author": "Ronggy",
      "source": "https://commons.wikimedia.org/wiki/File:USB_power_bank.jpg",
      "original": "https://upload.wikimedia.org/wikipedia/commons/8/83/USB_power_bank.jpg",
      "license": "Public domain (PD-self)",
      "licenseUrl": "https://commons.wikimedia.org/wiki/Template:PD-self",
      "changes": "Original descargado; sin edición"
    },
    "category": "power",
    "description": "Aportar energía a los elementos compatibles del sistema previsto. Deben confirmarse salida, capacidad y necesidades eléctricas.",
    "alt": "Power bank USB de referencia conectada a un cable"
  },
  {
    "id": "rueda-sistema-movil",
    "name": "Rueda del sistema móvil",
    "quantity": 4,
    "image": "/images/development/mobile-platform/wheel-closeup.jpg",
    "referenceNote": "Usado en el prototipo actual. Fotografía del montaje; no acredita pruebas de desplazamiento ni capacidades verificadas.",
    "attribution": {
      "type": "project",
      "label": "Fotografía del equipo AgroBot",
      "source": "/prototipos",
      "sourceLabel": "Ver montaje en Prototipos"
    },
    "category": "mobility",
    "description": "Rueda utilizada en el montaje de la plataforma móvil de AgroBot.",
    "alt": "Detalle de una rueda amarilla con cubierta negra en la plataforma móvil de AgroBot"
  },
  {
    "id": "caja-ip65",
    "name": "Caja de protección IP65",
    "quantity": 1,
    "image": "/images/components/catalogo/caja-ip65-referencia.jpg",
    "referenceNote": "Caja de conexiones ABB con inscripción IP65 visible; referencia de otra caja, no certificación de la caja del proyecto.",
    "attribution": {
      "author": "Dmitry G",
      "source": "https://commons.wikimedia.org/wiki/File:IP65_junction_box.JPG",
      "original": "https://upload.wikimedia.org/wikipedia/commons/1/19/IP65_junction_box.JPG",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "changes": "Original descargado; sin edición"
    },
    "category": "protection",
    "description": "Alojar componentes electrónicos. La protección del conjunto dependerá de la caja seleccionada y de su montaje; sigue pendiente de validación.",
    "alt": "Caja de conexiones ABB abierta y su tapa con inscripción IP65"
  },
  {
    "id": "tubo-termorretractil",
    "name": "Tubo termorretráctil negro",
    "quantity": 2,
    "image": "/images/components/catalogo/termorretractil-negro.jpg",
    "referenceNote": "Tubo negro visible, HESH-06-B-STAN-01 según fuente. Presentación distinta de un rollo: no confirma longitud, diámetro requerido ni cantidad del proyecto.",
    "attribution": {
      "author": "oomlout",
      "source": "https://www.flickr.com/photos/snazzyguy/9604473324/",
      "original": "https://live.staticflickr.com/5349/9604473324_42d218ffd4_o.jpg",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "changes": "Original descargado; sin edición"
    },
    "category": "protection",
    "description": "Aislar y proteger uniones del cableado. El diámetro y la presentación se seleccionarán según las conexiones reales.",
    "alt": "Fotografía de un tramo de tubo termorretráctil negro"
  },
  {
    "id": "conectores-jst-xh",
    "name": "Conectores JST-XH",
    "quantity": 20,
    "image": "/images/components/catalogo/adaptador-xh-referencia.jpg",
    "referenceNote": "Conectores XH de 5, 6 y 7 pines montados en adaptador de balanceo 4S/5S/6S. No son los 20 conectores sueltos del equipo; pines, género y formato pendientes.",
    "attribution": {
      "author": "Laurenz Wagner",
      "source": "https://commons.wikimedia.org/wiki/File:Balancer_Buchse_XH.JPG",
      "original": "https://upload.wikimedia.org/wikipedia/commons/9/90/Balancer_Buchse_XH.JPG",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0/",
      "changes": "Original descargado; sin edición"
    },
    "category": "connections",
    "description": "Permitir conexiones desmontables compatibles. El número de pines, el género y el formato se definirán para el montaje real.",
    "alt": "Conectores XH de varios números de pines sobre un adaptador de balanceo"
  },
  {
    "id": "pulsador",
    "name": "Pulsador táctil 4 pines 6×6×4.3 mm ON/OFF",
    "quantity": 2,
    "image": "/images/components/catalogo/pulsadores-referencia.jpg",
    "referenceNote": "Tres pulsadores distintos, uno SMD y otros de orificio pasante; referencia genérica. No confirma dimensiones 6×6×4.3 mm ni accionamiento enclavado ON/OFF.",
    "attribution": {
      "author": "Scwerllguy",
      "source": "https://commons.wikimedia.org/wiki/File:Tactile_switches.jpg",
      "original": "https://upload.wikimedia.org/wikipedia/commons/1/11/Tactile_switches.jpg",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "changes": "Original descargado; sin edición"
    },
    "category": "electronics",
    "description": "Proporcionar una entrada manual al sistema previsto. Su acción y el comportamiento eléctrico requerido deben confirmarse.",
    "alt": "Tres pulsadores de distintos formatos junto a una regla en pulgadas"
  },
  {
    "id": "silicona-neutra",
    "name": "Silicona neutra / sellador",
    "quantity": 1,
    "image": "/images/components/catalogo/selladores-referencia.jpg",
    "referenceNote": "Estantería con varios selladores: algunos envases indican NEUTRAL y otros ACETIC. Referencia mixta, no identificación del producto del equipo.",
    "attribution": {
      "author": "Vis M",
      "source": "https://commons.wikimedia.org/wiki/File:Silicone_sealant.jpg",
      "original": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Silicone_sealant.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "changes": "Original descargado; sin edición"
    },
    "category": "protection",
    "description": "Servir como material de sellado en los puntos que lo requieran. La compatibilidad del producto y su aplicación deben confirmarse.",
    "alt": "Estantería con selladores de silicona, incluidos envases neutros y acéticos"
  },
  {
    "id": "cinta-doble-cara",
    "name": "Cinta doble cara industrial",
    "quantity": 2,
    "image": "/images/components/catalogo/cinta-doble-cara-referencia.jpg",
    "referenceNote": "Fotografía referencial de cinta doble cara. No confirma el producto exacto del proyecto ni su grado industrial.",
    "attribution": {
      "author": "Ural-66",
      "source": "https://commons.wikimedia.org/wiki/File:Двухсторонний_скотч_f002.jpg",
      "original": "https://upload.wikimedia.org/wikipedia/commons/7/73/%D0%94%D0%B2%D1%83%D1%85%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D0%BD%D0%B8%D0%B9_%D1%81%D0%BA%D0%BE%D1%82%D1%87_f002.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "changes": "Original descargado; sin edición por AgroBot"
    },
    "category": "protection",
    "description": "Fijar elementos en el montaje previsto. El tipo de cinta y su adecuación a las superficies deben confirmarse.",
    "alt": "Rollos de cinta doble cara con capas protectoras amarilla y blanca"
  },
  {
    "id": "multimetro",
    "name": "Multímetro digital",
    "quantity": 1,
    "image": "/images/components/catalogo/multimetro-dt9205b-referencia.jpg",
    "referenceNote": "DT-9205B+ visible en fotografía de un montaje de Adafruit. Modelo diferente del DT830D de la fuente inicial; no confirma el multímetro del equipo ni mediciones de AgroBot. La licencia corresponde expresamente al recurso.",
    "attribution": {
      "author": "Liz Clark / Adafruit Learning System",
      "source": "https://learn.adafruit.com/assets/136018",
      "original": "https://cdn-learn.adafruit.com/assets/assets/000/136/018/original/components_edited_P1470572.jpg?1743005287",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "changes": "Original descargado; sin edición"
    },
    "category": "tools",
    "description": "Apoyar la revisión de conexiones y magnitudes eléctricas durante el desarrollo. Su inclusión no implica que existan pruebas o resultados documentados.",
    "alt": "Multímetro digital DT-9205B+ junto a un circuito de referencia de Adafruit"
  }
]
