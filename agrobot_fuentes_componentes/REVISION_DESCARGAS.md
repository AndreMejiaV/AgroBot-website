# Revisión de recursos de componentes

**Actualización:** este documento conserva el resultado histórico de la primera ejecución (7 fotografías). El catálogo posterior tiene 19 fotografías referenciales verificadas y 2 materiales pendientes. Consulta [CATALOGO_FOTOGRAFICO.md](CATALOGO_FOTOGRAFICO.md) e [INVENTARIO_FOTOGRAFICO.csv](INVENTARIO_FOTOGRAFICO.csv) para el estado vigente, fuentes, licencias y diferencias de modelo. Las imágenes seleccionadas ya están copiadas al `public/images/components/catalogo/` de la raíz real, sin cambios en React.

Revisión realizada el 21 de octubre de 2026. No se modificó el script, los datos de fuentes, las imágenes descargadas ni el código de la web. No se publicó ningún recurso.

## Resultado de la ejecución

Los tres archivos del paquete están en `agrobot_fuentes_componentes/`, no sueltos en la raíz. El script resuelve su destino respecto de su propia ubicación y creó `public/images/components/catalogo/` **dentro del paquete**. Esta carpeta no forma parte del `public/` de Vite.

El script únicamente consulta Commons, escribe imágenes y genera `RESULTADOS_DESCARGA.csv`; crea directorios con `-Force` y podría sobrescribir archivos con el mismo nombre si se vuelve a ejecutar. No ejecuta Git, Vercel ni modifica React. La ejecución se habilitó exclusivamente en el proceso PowerShell, sin modificar políticas globales.

El CSV contiene 21 registros: 10 descargados, 9 errores HTTP 429 (límite de solicitudes) y 2 pendientes sin fuente. Se revisaron visualmente los 10 archivos, que son imágenes válidas: **7 fotografías y 3 ilustraciones**. No se volvió a ejecutar el descargador para evitar sobrescrituras y nuevas solicitudes masivas. La consulta adicional de metadatos por API también fue limitada; no se generó un archivo de metadatos válido.

El script solicita miniaturas de 1000 px; Wikimedia puede devolver tamaños discretos mayores. No son necesariamente los originales de máxima resolución. Se conservan intactos los archivos obtenidos y las fuentes de los originales en `fuentes_componentes.csv`. El reporte del script no incluye autor ni licencia: este documento complementa esa carencia.

## Fotografías descargadas y correspondencia

| Archivo | Revisión visual y limitaciones | Autor y licencia de la ficha consultada |
| --- | --- | --- |
| `esp32.jpg` | Placa de desarrollo ESP32 con módulo ESP-WROOM-32. Confirmar variante, formato y número de pines frente a la placa del equipo. | Ubahnverleih; [CC0 1.0](https://commons.wikimedia.org/wiki/File:ESP32_Espressif_ESP-WROOM-32_Dev_Board.jpg). |
| `buzzer.jpg` | Interior/disco piezoeléctrico con cables, sin carcasa. Referencia genérica; no sustituye una foto de un buzzer encapsulado o módulo distinto. | Gophi; [CC BY-SA 3.0, con alternativas indicadas en la ficha](https://commons.wikimedia.org/wiki/File:2007-07-24_Piezoelectric_buzzer.jpg). |
| `sensor-hc-sr04.jpg` | Inscripción HC-SR04 y cuatro pines visibles: coincide con la denominación del CSV; no prueba integración en AgroBot. | Suyash Dwivedi; [CC BY-SA 4.0](https://commons.wikimedia.org/wiki/File:HC_SR04_Ultrasonic_Module.jpg). |
| `protoboard.png` | Fotografía de las caras superior e inferior de una protoboard de 400 contactos. Referencia genérica; confirmar tamaño real requerido. | Guhuru; [CC0 1.0](https://commons.wikimedia.org/wiki/File:Breadboard.png). |
| `jumpers-mh.jpg` | Tres cables con extremos macho y hembra visibles; coincide con la clase M-H. No representa la cantidad total ni longitud requeridas. | Edwiyanto; [CC BY-SA 4.0](https://commons.wikimedia.org/wiki/File:Jumper_male-to-female.jpg). |
| `jumpers-mm.jpg` | Tres cables con extremos macho visibles; coincide con la clase M-M. No representa la cantidad total ni longitud requeridas. | Edwiyanto; [CC BY-SA 4.0](https://commons.wikimedia.org/wiki/File:Jumper_male-to-male.jpg). |
| `resistencia-220.jpg` | Resistencia axial con bandas rojo-rojo-marrón-dorado, coherentes con 220 ohm y 5 %. La fotografía no confirma potencia 1/4 W ni composición de carbono. | oomlout; [CC BY-SA 2.0](https://commons.wikimedia.org/wiki/File:220_ohms_5%25_axial_resistor.jpg). |

Las licencias de estas siete fotografías se comprobaron en sus fichas de Commons. Antes de publicarlas hay que preparar los créditos y enlaces correspondientes, especialmente buzzer, HC-SR04, jumpers M-H/M-M y resistencia 220 bajo CC BY-SA. Conservar autor, ficha, versión de licencia y registro de cambios; revisar las condiciones aplicables si se editan. ESP32 y protoboard están identificadas como CC0; conservar sus fuentes para trazabilidad. Todas son imágenes de referencia externas, no fotografías del material real del proyecto.

## Ilustraciones: no cuentan como fotografías

`led-verde.png`, `led-amarillo.png` y `led-rojo.png` son representaciones dibujadas de LED, generadas por Wikimedia como vistas PNG de los SVG indicados en el CSV. La extensión PNG no cambia su naturaleza. No se utilizaron como sustitutos de fotografías. Sus licencias y autorías todavía necesitan revisión individual si se quisiera reutilizar las ilustraciones; las fuentes exactas permanecen en el CSV. Para el objetivo actual siguen faltando las tres fotografías reales de LED de 5 mm.

## Fotografías pendientes

Nueve descargas fallaron por HTTP 429. No se confirmó en esta ejecución la validez del archivo remoto ni su licencia; el error de red no demuestra que la fuente exista o que sea una fotografía adecuada:

- Resistencia 10k ohm: confirmar también potencia y composición.
- Power bank: referencia genérica; salida de 5 V y modelo por confirmar.
- Caja IP65: referencia genérica; no acredita el grado de protección de la caja del equipo.
- Tubo termorretráctil: la fuente propuesta muestra un surtido, no necesariamente negro ni la presentación requerida.
- Conectores JST-XH: la ficha consultada describe un adaptador de balanceo XH para baterías LiPo, no necesariamente los conectores individuales requeridos; confirmar pines y formato. [Fuente](https://commons.wikimedia.org/wiki/File:Balancer_Buchse_XH.JPG).
- Pulsador: la fuente propuesta es genérica; no acredita medidas 6×6×4.3 mm ni funcionamiento ON/OFF enclavado.
- Silicona: tipo neutro no confirmado.
- Cinta doble cara: grado industrial no confirmado.
- Multímetro: la fuente propone el modelo DT830D, que puede diferir del utilizado por el equipo.

Otros dos componentes carecen de fuente: sensor de lluvia YL-83 y su soporte. Se requiere fotografía propia o referencia exacta para ambos.

En total, **14 componentes aún no tienen fotografía local**: nueve con error, dos sin fuente y tres LED con ilustración solamente. Antes de publicar cualquiera de los nueve recursos aún no descargados, revisar su ficha, autoría y licencia, además de comprobar visualmente su correspondencia. No se seleccionaron sustitutos ni se integraron archivos en Tecnología o React.
