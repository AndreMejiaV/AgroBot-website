# Comparación visual de AgroBot

Versión anterior preservada en `refinement/safe-polish`, commit:

`1f4c1d020941a4cbc19a62b7f713aed4598ea6a5`

Propuesta local: `feature/visual-v2`. Las modificaciones 2.0 permanecen sin commit.

## Capturas

Capturas de página completa realizadas con Chrome headless, sin fotografías:

| Vista | Versión respaldada | Propuesta 2.0 |
| --- | --- | --- |
| Escritorio, 1440 px | [Antes](before-1440.png) | [Después](after-1440.png) |
| Móvil, 390 px | [Antes](before-390.png) | [Después](after-390.png) |

Las ilustraciones topográficas son esquemas conceptuales propios en SVG. No muestran datos medidos ni un robot construido. Las representaciones del equipo son las ilustraciones abstractas existentes.

### Portada actual con fotografía real

La incorporación posterior utiliza la fotografía agrícola seleccionada de [Tim Mossholder en Unsplash](https://unsplash.com/fr/photos/champ-de-plantes-a-feuilles-vertes-4DLnYJQE6kw), descargada y almacenada localmente. No representa el proyecto AgroBot ni su lugar de pruebas.

- [Home con fotografía, escritorio 1440 px](home-real-1440.png).
- [Home con fotografía, móvil 390 px](home-real-390.png).

Verificado en Chrome: JPEG local de 1920 × 1280 px, HTTP 200 tanto en Vite como en preview de producción, sin respuestas 404 ni errores de consola. La capa fotográfica cubre toda la portada; únicamente la imagen recibe desenfoque. El código de animaciones permanece intacto y se comprobó su repetición al reingresar.

## Verificación realizada

- ESLint y compilación Vite correctos.
- Navegación entre las siete secciones y consola sin errores en Chrome.
- Sin desbordamiento horizontal a 320, 390, 768, 1024 y 1440 px.
- Revisión visual de escritorio y móvil, sin fotografías ni imágenes rotas.
- Apariciones al entrar en pantalla. El ajuste posterior permite repetirlas tras salir por completo y superar un margen de 120 px, con entradas de 1,2 segundos.
- Con movimiento reducido: cero animaciones activas, sin desplazamiento suave y contenido visible.
- Sin `IntersectionObserver`: las siete secciones permanecen visibles.
- Datos temporales en memoria del navegador: especificaciones totalmente vacías, publicación de un registro de prototipo sin imagen y fotografía técnica de prueba en portada. No se guardaron esos datos en los archivos de contenido.

## Abrir localmente

Desde la raíz del repositorio:

```powershell
npm.cmd run dev
```

Abre la dirección local que imprime Vite. Para comprobar la compilación:

```powershell
npm.cmd run lint
npm.cmd run build
npm.cmd run preview
```

No es necesario cambiar de rama para revisar la propuesta actual. La referencia de la versión anterior sigue preservada; no cambies de rama con las modificaciones 2.0 pendientes sin guardarlas antes.
