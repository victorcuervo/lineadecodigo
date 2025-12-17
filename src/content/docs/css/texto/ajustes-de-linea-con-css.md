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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4QWL2KD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtR%2FHTwlh%2FxKqR4DgBSefty8w%2BDojCzBMdD8YpZII9DAiALIHTtk%2FZ87bm66dziwDqhXmT5OmDvVK4oFlRqieHEjSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM1IXRVgRcROxJ%2F7JvKtwD%2BDWVDF8rZoJyGiUEDFNvXiLWyHppCs9fofRdWq%2FSucfd0vAhVj6DOLsCIlyeCfZvvlsp%2B05YqKDqax9%2FkTdk35lqyF%2FWYOIULsHmyZ4e7eP%2BPoT0OEMtYdR8rOvzZs2hnw6aNEyL%2B%2FfxAThSKr5isOUEB6uxS8BGb0asxMEnN5YcSfE3BDOyuWrZx33O0nv0N6rv4X0tkybQcsvp%2BV9wNsrkIb8%2FIl64de5Z%2B0jSHQQicaynXOtRakcWf8oZ9RpAG%2BPlLZXLQ1kZrKWlVLw9n%2BcwnhRrUaG2r%2BV8GhqXFlMTbAIfkApsYFNHUIg%2BybDAGcsV0DRljV833n2Jc1bePggNRilO8hoQGdfg%2BsNLhdbjJ7S%2BMLrwRQUbkYN9eGHVGYxVJgicsN8ljzbIxQaAfrNUGYmB0HskYk%2B5Tvvr9e4gez5ECbXPoafNhOEuL6WOEjHhJOAvgNwtWXNyGzdFdcKzVPbA1iHb9O1COCviq15jG5GvRi7UxYczA5okrvny%2FV2%2FdEmPjgmrQ9hhxu2YYNKvQOfEh4v%2BuFBYT20CESddVxQA9mzHDPPnyz5Wf3UVsUOwc3MYpVdh1eG7fLkvZ%2FRHgSRFaQIFxYLWH6bJTnuHXfxEfwTV%2FdY5pdQw78WKygY6pgGfm0C6Uj2l%2FNU9U5hePHaRciW5lQ%2FD3eCOYw0d5P9v9SMzqutzlvv1%2FIfAoS%2BWhFcptv9FfoEcbcTTHOHYZCQMWqvczHR%2FTmTV9kxqoNwqYk1y%2FD9Bv2S2GqjAyjW%2FVuIyF9ZMuPULHgVFRCAFN5T6ftCs%2FZDMsIkjddft20V%2Fv6xv3fX3LrA8Xn4w9Z4nvwmMu9858uqStoCwKYo%2FVzF2XAWYlye3&X-Amz-Signature=09bec2b7f33c661cc290c6d1ae2fb24b5869803ccb8dc6ec45c817f4119776fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4QWL2KD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtR%2FHTwlh%2FxKqR4DgBSefty8w%2BDojCzBMdD8YpZII9DAiALIHTtk%2FZ87bm66dziwDqhXmT5OmDvVK4oFlRqieHEjSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM1IXRVgRcROxJ%2F7JvKtwD%2BDWVDF8rZoJyGiUEDFNvXiLWyHppCs9fofRdWq%2FSucfd0vAhVj6DOLsCIlyeCfZvvlsp%2B05YqKDqax9%2FkTdk35lqyF%2FWYOIULsHmyZ4e7eP%2BPoT0OEMtYdR8rOvzZs2hnw6aNEyL%2B%2FfxAThSKr5isOUEB6uxS8BGb0asxMEnN5YcSfE3BDOyuWrZx33O0nv0N6rv4X0tkybQcsvp%2BV9wNsrkIb8%2FIl64de5Z%2B0jSHQQicaynXOtRakcWf8oZ9RpAG%2BPlLZXLQ1kZrKWlVLw9n%2BcwnhRrUaG2r%2BV8GhqXFlMTbAIfkApsYFNHUIg%2BybDAGcsV0DRljV833n2Jc1bePggNRilO8hoQGdfg%2BsNLhdbjJ7S%2BMLrwRQUbkYN9eGHVGYxVJgicsN8ljzbIxQaAfrNUGYmB0HskYk%2B5Tvvr9e4gez5ECbXPoafNhOEuL6WOEjHhJOAvgNwtWXNyGzdFdcKzVPbA1iHb9O1COCviq15jG5GvRi7UxYczA5okrvny%2FV2%2FdEmPjgmrQ9hhxu2YYNKvQOfEh4v%2BuFBYT20CESddVxQA9mzHDPPnyz5Wf3UVsUOwc3MYpVdh1eG7fLkvZ%2FRHgSRFaQIFxYLWH6bJTnuHXfxEfwTV%2FdY5pdQw78WKygY6pgGfm0C6Uj2l%2FNU9U5hePHaRciW5lQ%2FD3eCOYw0d5P9v9SMzqutzlvv1%2FIfAoS%2BWhFcptv9FfoEcbcTTHOHYZCQMWqvczHR%2FTmTV9kxqoNwqYk1y%2FD9Bv2S2GqjAyjW%2FVuIyF9ZMuPULHgVFRCAFN5T6ftCs%2FZDMsIkjddft20V%2Fv6xv3fX3LrA8Xn4w9Z4nvwmMu9858uqStoCwKYo%2FVzF2XAWYlye3&X-Amz-Signature=2c6cc4d3d07cf5ffb7a62ad437c1b0591448ae0760eb8c42dda32b3bcb7e9f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

