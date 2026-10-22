# Catálogo fotográfico de componentes — revisión actual

## Actualización de cinta y rueda

El catálogo vigente de Tecnología tiene 21 materiales con imagen: 20 fotografías referenciales externas y una fotografía del equipo. El antiguo soporte YL-83 fue sustituido por la rueda; los párrafos y la tabla de la revisión inicial que siguen se conservan como historial de la búsqueda, no como estado vigente de esas dos fichas. `INVENTARIO_FOTOGRAFICO.csv` contiene sus registros actualizados; el catálogo editable de la web está en `src/content/components.js`.

- **Cinta doble cara industrial:** `public/images/components/catalogo/cinta-doble-cara-referencia.jpg`. Autor Ural-66; [fuente Commons](https://commons.wikimedia.org/wiki/File:Двухсторонний_скотч_f002.jpg); [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Fotografía referencial, sin afirmar correspondencia exacta ni grado industrial. Original de 3134 × 2351 píxeles, sin edición; SHA-1 contrastado con Commons: `893113f0ab3c61a426715255fb14e4d59c6a559f`. Se realizó una sola descarga, sin reintentos ni sobrescrituras.
- **Rueda del sistema móvil:** conserva `public/images/development/mobile-platform/wheel-closeup.jpg`, cuatro unidades y Movilidad. Crédito: «Fotografía del equipo AgroBot» y enlace interno `/prototipos`. No se atribuye una licencia Creative Commons, autor individual ni fuente externa. La descripción documenta su presencia en el montaje; no afirma pruebas de desplazamiento.

Los detalles de ambas fichas muestran sus créditos diferenciados. `public/images/components/catalogo/ATTRIBUTION.md` conserva también la URL original de la cinta y los créditos de la rueda.

## Revisión inicial conservada

19 fotografías reales: 7 reutilizadas y 12 nuevas. Dos materiales siguen sin fotografía adecuada. No son fotografías de los componentes del equipo ni pruebas de integración. Licencia y contenido visual están revisados; la equivalencia técnica exacta queda limitada por las observaciones de cada registro.

Los archivos seleccionados están en `public/images/components/catalogo/` de la raíz real. Se copiaron sin transformar y se compararon por SHA-256. No se sobrescribió ningún archivo. Las capturas de fichas externas disponibles y todos los candidatos se conservan en este paquete. No se modificó Tecnología ni ningún componente React.

| Material | Estado / archivo | Correspondencia y límites |
| --- | --- | --- |
| ESP32 | /images/components/catalogo/esp32.jpg | ESP-WROOM-32 visible. Confirmar variante y número de pines de la placa del equipo. |
| Buzzer | /images/components/catalogo/buzzer.jpg | Disco/interior piezoeléctrico sin carcasa; no equivale necesariamente al buzzer encapsulado o módulo del proyecto. |
| Sensor ultrasónico HC-SR04 de 4 pines | /images/components/catalogo/sensor-hc-sr04.jpg | HC-SR04 y cuatro pines visibles. No acredita integración en AgroBot. |
| Protoboard | /images/components/catalogo/protoboard.png | Protoboard de 400 contactos vista por ambas caras; tamaño y formato del proyecto pendientes. |
| Jumpers macho-hembra (M-H) | /images/components/catalogo/jumpers-mh.jpg | Extremos M-H visibles; longitud y cantidad no representadas. |
| Jumpers macho-macho (M-M) | /images/components/catalogo/jumpers-mm.jpg | Extremos M-M visibles; longitud y cantidad no representadas. |
| LED verde 5 mm | /images/components/catalogo/led-verde.jpg | LED verde completo, encendido, de 5 mm según ficha Commons: https://commons.wikimedia.org/wiki/File:5_mm_Green_LED_(on).jpg . La primera candidata mostraba el interior y fue descartada. |
| LED amarillo 5 mm | /images/components/catalogo/led-amarillo.jpg | LED amarillo de 5 mm encendido según ficha; fotografía real, no ilustración. Confirmar variante eléctrica del proyecto. |
| LED rojo 5 mm | /images/components/catalogo/led-rojo.jpg | LED rojo de 5 mm encendido según ficha; fotografía real, no ilustración. Confirmar variante eléctrica del proyecto. |
| Resistencia carbono 220 ohm 5 % 1/4 W | /images/components/catalogo/resistencia-220.jpg | 220 ohm y 5 % según ficha y bandas. No confirma 1/4 W ni composición de carbono. |
| Resistencia carbono 10k ohm 5 % 1/4 W | /images/components/catalogo/resistencia-10k.jpg | 10k ohm y 5 % según ficha y bandas marrón-negro-naranja-dorado. No confirma 1/4 W ni composición de carbono. |
| Sensor de lluvia YL-83 | /images/components/catalogo/sensor-lluvia-yl83.jpg | Inscripción YL-83 visible en placa colectora y módulo. Fuente del autor con licencia general explícita del blog y fotografía descrita como propia. Confirmar revisión física del equipo. |
| Power Bank 5 V | /images/components/catalogo/power-bank-referencia.jpg | Power bank USB genérica. La foto no permite confirmar salida de 5 V, capacidad ni modelo del equipo. |
| Soporte para sensor YL-83 | Pendiente | No se conoce geometría/modelo del soporte. Los resultados incluyen cajas y modelos 3D; no se verificó una foto del soporte concreto con licencia aplicable. Solicitar foto propia o modelo. |
| Caja de protección IP65 | /images/components/catalogo/caja-ip65-referencia.jpg | Caja de conexiones ABB con inscripción IP65 visible; referencia de otra caja, no certificación de la caja del proyecto. |
| Tubo termorretráctil negro | /images/components/catalogo/termorretractil-negro.jpg | Tubo negro visible, HESH-06-B-STAN-01 según fuente. Presentación distinta de un rollo: no confirma longitud, diámetro requerido ni cantidad del proyecto. |
| Conectores JST-XH | /images/components/catalogo/adaptador-xh-referencia.jpg | Conectores XH de 5, 6 y 7 pines montados en adaptador de balanceo 4S/5S/6S. No son los 20 conectores sueltos del equipo; pines, género y formato pendientes. |
| Pulsador táctil 4 pines 6×6×4.3 mm ON/OFF | /images/components/catalogo/pulsadores-referencia.jpg | Tres pulsadores distintos, uno SMD y otros de orificio pasante; referencia genérica. No confirma dimensiones 6×6×4.3 mm ni accionamiento enclavado ON/OFF. |
| Silicona neutra / sellador | /images/components/catalogo/selladores-referencia.jpg | Estantería con varios selladores: algunos envases indican NEUTRAL y otros ACETIC. Referencia mixta, no identificación del producto del equipo. |
| Cinta doble cara industrial | Pendiente | La descarga de DoubleSidedTape.JPG respondió 429 y se detuvieron las solicitudes. Su ficha representa cinta Scotch genérica, no acredita grado industrial. No se verificó otra foto industrial con permiso; solicitar foto propia o autorización del fabricante. |
| Multímetro digital | /images/components/catalogo/multimetro-dt9205b-referencia.jpg | DT-9205B+ visible en fotografía de un montaje de Adafruit. Modelo diferente del DT830D de la fuente inicial; no confirma el multímetro del equipo ni mediciones de AgroBot. La licencia corresponde expresamente al recurso. |

## Fuentes, autoría y licencias

El CSV `INVENTARIO_FOTOGRAFICO.csv` contiene los 21 registros, URL de ficha, URL original, autor, licencia con enlace, procedencia local, observaciones y SHA-256. `ATTRIBUTION.md` acompaña las fotos en la carpeta pública y conserva créditos preparados para su futura presentación. No se ha implementado todavía esa presentación en React. Mantener estos créditos y revisar la licencia correspondiente si después se editan imágenes; CC BY-SA exige atribución y las condiciones aplicables de compartir igual. No significa que todo el sitio deba llevar la licencia de una imagen.

Las siete imágenes de la descarga anterior conservan la resolución que entregó su script (miniaturas), sin nuevas descargas. Las nuevas seleccionadas se conservaron con los bytes entregados por sus fuentes; no se aplicaron recortes, recoloraciones ni filtros. La foto de Adafruit ya se denomina edited en origen: AgroBot no la editó.

## Búsqueda y exclusiones

Se priorizó Commons y se revisaron alternativas en Flickr (cuenta del fotógrafo), Adafruit Learning System, Freedom Embedded y resultados de fabricantes/distribuidores y publicaciones académicas. No se asumió permiso por el solo hecho de que una imagen aparezca en una tienda, artículo o buscador.

La consulta secuencial a Commons se espació 4 segundos, sin reintentos. Tras el 429 de la cinta se suspendieron todas las descargas restantes de ese servidor; DT830D no se intentó. No se cambiaron identidades, proxies ni URLs para repetir solicitudes bloqueadas. Los recursos de Flickr, Adafruit y el blog son recursos alternativos distintos, revisados en sus propias fuentes.

Se excluyeron del catálogo: los tres PNG derivados de SVG de LED; el primer LED verde (interior desmontado); el surtido termorretráctil multicolor; la candidata denominada termorretractil-negro.jpg, que resultó marrón; y termorretractil-negro-e.jpg, que resultó clara/gris. Se conservan para trazabilidad, sin presentarlos como fotografías del color solicitado. La candidata final negra es HESH-06-B-STAN-01. No se retocó ninguna para simular un color distinto.

El informe `REVISION_DESCARGAS.md` y `RESULTADOS_DESCARGA.csv` conservan el resultado histórico de la primera ejecución; el inventario actual es el de este documento y su CSV.
