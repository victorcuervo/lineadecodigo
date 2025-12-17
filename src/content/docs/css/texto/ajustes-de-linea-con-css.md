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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAFQ7QTR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkx6NTsZn7w0SG25V44LSDD6jW7Ao2AQO5E5tpGLrteAiArXgJOeLoDfbZKDcajai0OvJtonocYwm0Sm1alUOJB0yr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMmX28pysgDzh%2BHkGiKtwDCIYDRXjHAhnI3lV3VA8HOGEpeciYkV7ONt%2BcGDRF%2FS0yq%2F%2BgcvfrruONlWwBns7CfLRg8u5m06Lle6ZkbqGpwkDNESSc0t4OwcXurRfJnDGtUf3%2FD9ZFVNlp0qgQD5dQymjemAJpIEm%2B%2FCQm%2Bd%2BuNacUeLk7WN1OWaTROFLTrCo%2BC4PHA%2F%2BkfMmR5W%2BxZsq70hNoNpW%2B2W%2Frq7Nsqx%2FaFTnJK1xU4BbdY%2FoWBwCh%2FLpHkeLrtxymvL7jHoUflqm3DGNq1DPDWbIjmGbJn2msoQk%2FdbgyShVPM98MxSd1LkuciuSVW7FED%2Bcq8qFCQCbj4i4jboqlwXA5YxeQon7DjZqEXQGvRIcK6xnAwb1tRAHtqsZkcCO3fsZhimIZezneZKyRvyzjE%2Fa%2B2KpNn1RXQGh0aidkBTI%2BAbf3uFloVxF2q%2B88qs9n%2Fj3zrw0M7LL%2BAqp7DPCfe7Aogv1OJgih6lcbvlcGiKP%2FjxIemXjhjIEMuyC%2BA8RhkVgJMThYG031g10s%2BRS9uZkNWUwvHWF%2BkdTrntAGyIHnvQfZINjubLCfl2oBuDVBnyyM54Yl0%2BbKYVebzmyvPgUWu5OWChf%2BGhnNvIu4cw7kkb6XaA62%2FU8MZRT9UeocVH7no8kwhOqIygY6pgGLNrzayHcUsgEe5k7vvcY6xT5mwn9MpL5xLOBNGjRM6NQgsvaqPI86PIMw5zk0iaynS%2BqFwzzsIcUhm1ED5X2E9rl6FIh66PTBbdMmqBXseaYVLQBnzDfU7pDkPnv8ITjARPL7mY2jkHAaiWT2Mk0OK9uK2XJF9lybNh6RsBDSipeLRGK1pflRBfRVPkQicV5NyYR8uVbzTxrE84iSGN39bKspUyHi&X-Amz-Signature=22b7cd057b47968c472ed8d79cac62c6b94b91f6eafbadbfc9c0f20f92d0699a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAFQ7QTR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkx6NTsZn7w0SG25V44LSDD6jW7Ao2AQO5E5tpGLrteAiArXgJOeLoDfbZKDcajai0OvJtonocYwm0Sm1alUOJB0yr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMmX28pysgDzh%2BHkGiKtwDCIYDRXjHAhnI3lV3VA8HOGEpeciYkV7ONt%2BcGDRF%2FS0yq%2F%2BgcvfrruONlWwBns7CfLRg8u5m06Lle6ZkbqGpwkDNESSc0t4OwcXurRfJnDGtUf3%2FD9ZFVNlp0qgQD5dQymjemAJpIEm%2B%2FCQm%2Bd%2BuNacUeLk7WN1OWaTROFLTrCo%2BC4PHA%2F%2BkfMmR5W%2BxZsq70hNoNpW%2B2W%2Frq7Nsqx%2FaFTnJK1xU4BbdY%2FoWBwCh%2FLpHkeLrtxymvL7jHoUflqm3DGNq1DPDWbIjmGbJn2msoQk%2FdbgyShVPM98MxSd1LkuciuSVW7FED%2Bcq8qFCQCbj4i4jboqlwXA5YxeQon7DjZqEXQGvRIcK6xnAwb1tRAHtqsZkcCO3fsZhimIZezneZKyRvyzjE%2Fa%2B2KpNn1RXQGh0aidkBTI%2BAbf3uFloVxF2q%2B88qs9n%2Fj3zrw0M7LL%2BAqp7DPCfe7Aogv1OJgih6lcbvlcGiKP%2FjxIemXjhjIEMuyC%2BA8RhkVgJMThYG031g10s%2BRS9uZkNWUwvHWF%2BkdTrntAGyIHnvQfZINjubLCfl2oBuDVBnyyM54Yl0%2BbKYVebzmyvPgUWu5OWChf%2BGhnNvIu4cw7kkb6XaA62%2FU8MZRT9UeocVH7no8kwhOqIygY6pgGLNrzayHcUsgEe5k7vvcY6xT5mwn9MpL5xLOBNGjRM6NQgsvaqPI86PIMw5zk0iaynS%2BqFwzzsIcUhm1ED5X2E9rl6FIh66PTBbdMmqBXseaYVLQBnzDfU7pDkPnv8ITjARPL7mY2jkHAaiWT2Mk0OK9uK2XJF9lybNh6RsBDSipeLRGK1pflRBfRVPkQicV5NyYR8uVbzTxrE84iSGN39bKspUyHi&X-Amz-Signature=32644cadeb8300af8116bb85cb4a67b85f62f78725a9545cf78c0cf2ee6f6c4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

