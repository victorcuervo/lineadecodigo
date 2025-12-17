---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJDVY3A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZOHLKECO%2F1Sz2L%2FdLAdVgo5UArI7aqBzb1S%2BrjmonEAiEAwn6vM3hCNpVYwkt42vuvwmvNlaQ1%2BjCJAp124toV2T4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVVuF5pJgcXxVdZ0SrcA8cSX9Jlprv%2FRzkego8czW5q7DLOd%2FlWHmfCPYmsK30oFRu14BOLTh8CptJEhPUvqz%2BbOXSy0%2Fz2aerJpBCg47u%2BVGC0qyFeWTZdsNAu4bMoiuV1G2pJrE2epOXMxz8Tg8wPtC2Wq6IsaRmM3Nsh3wZHjOulF%2F2aoDoUTr0K6h5fUBcGn3Sfm5Nh9KnBxf6dDJ1WOiZ3MgjwYwMycgUp1IztG3hxbwkQDGXaP8Jq0FaiGZVvZ33Sz4vy7xm96LgaBELy0G%2B1F5pJNAZ8rCKnx3o2fEJl6VpfHWq0eFy%2B2CyYNfPPpr6o%2BusbCZ5MXKOCCj7ERyYnLaT%2FI5Tkm6bEPNAuh3Jg2f95sDBKWeykl7gl6KFACLGwK%2Bb3YBROPgW6uTqZwl0RrGTne1vj%2FFlKqNufxNwZ7JRxKtHt7%2FEbwvTjeKkKEDYDXN8lL%2BMPwVK%2FqRmm2246VWh2%2FViBOIPBytsFwevxfmOOODMKcBg40qmVR9GeusOf36QvZpC0c8eXEy1HnjP59JeFtTeJ6kyhlsdKwP7f6niS7%2FnxFKbgjQ6XvbL4SB8EmFAiONZGSjars7g%2Fmq9Ov3U4KbgJvZ7a4LaaDG0SUnT8B8PqzU0uZSvXZZlXVo2L9tZpdko%2FMPmfi8oGOqUBnyVSovIpl7b056CQOef0m9njPxMKgWe2Zcv3kOJGLL2qTW4V716Now22zse%2Bu11wV3m0yZYOR%2Fm8n5MbAqMiCok3mwDrxhzt%2Bo1VNCNr7eIKDwgr1GwKnP6DbKIYvoTILNaZTwjUWRmYWpbLuoEKgbov7lHK15V4pWWX7BwuHnsqHNT2p2jWvj6tW%2Fg7OVCVGxlieux2VEtECDLZQPCbIQcWdr2K&X-Amz-Signature=f7ec6b4b8f303426e82f54b73b25635b1a37f78b905961d75585dd7a3668de57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJDVY3A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZOHLKECO%2F1Sz2L%2FdLAdVgo5UArI7aqBzb1S%2BrjmonEAiEAwn6vM3hCNpVYwkt42vuvwmvNlaQ1%2BjCJAp124toV2T4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVVuF5pJgcXxVdZ0SrcA8cSX9Jlprv%2FRzkego8czW5q7DLOd%2FlWHmfCPYmsK30oFRu14BOLTh8CptJEhPUvqz%2BbOXSy0%2Fz2aerJpBCg47u%2BVGC0qyFeWTZdsNAu4bMoiuV1G2pJrE2epOXMxz8Tg8wPtC2Wq6IsaRmM3Nsh3wZHjOulF%2F2aoDoUTr0K6h5fUBcGn3Sfm5Nh9KnBxf6dDJ1WOiZ3MgjwYwMycgUp1IztG3hxbwkQDGXaP8Jq0FaiGZVvZ33Sz4vy7xm96LgaBELy0G%2B1F5pJNAZ8rCKnx3o2fEJl6VpfHWq0eFy%2B2CyYNfPPpr6o%2BusbCZ5MXKOCCj7ERyYnLaT%2FI5Tkm6bEPNAuh3Jg2f95sDBKWeykl7gl6KFACLGwK%2Bb3YBROPgW6uTqZwl0RrGTne1vj%2FFlKqNufxNwZ7JRxKtHt7%2FEbwvTjeKkKEDYDXN8lL%2BMPwVK%2FqRmm2246VWh2%2FViBOIPBytsFwevxfmOOODMKcBg40qmVR9GeusOf36QvZpC0c8eXEy1HnjP59JeFtTeJ6kyhlsdKwP7f6niS7%2FnxFKbgjQ6XvbL4SB8EmFAiONZGSjars7g%2Fmq9Ov3U4KbgJvZ7a4LaaDG0SUnT8B8PqzU0uZSvXZZlXVo2L9tZpdko%2FMPmfi8oGOqUBnyVSovIpl7b056CQOef0m9njPxMKgWe2Zcv3kOJGLL2qTW4V716Now22zse%2Bu11wV3m0yZYOR%2Fm8n5MbAqMiCok3mwDrxhzt%2Bo1VNCNr7eIKDwgr1GwKnP6DbKIYvoTILNaZTwjUWRmYWpbLuoEKgbov7lHK15V4pWWX7BwuHnsqHNT2p2jWvj6tW%2Fg7OVCVGxlieux2VEtECDLZQPCbIQcWdr2K&X-Amz-Signature=c34f3f35c873831eca0bb8a3ad35992f8ca9833d3154873da028174abd656719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

