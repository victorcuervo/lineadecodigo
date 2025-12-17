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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2KCJOB4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwh4Qkjpm8mu6SfrbY4ztqETTJEdt3vYsWZ5SnMe3aHAiEA2QEodn8C7dobQRG%2BlRdf3mEyMl90MYPCYS%2FmCVkyI8Yq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJVz%2FWzKGrmKRVdcPSrcA6LjYfeLsUanItasBAZjDqDjo4cIQpfoFJqeCJ80QZIU9yKBxfYI7oJrTvNarm6NvCv%2Bi6d8yMfY869ma2GHQA4JfaJ1OeScle5EM%2FyBUVoGr5XtXDsV0ttOU%2BygJOm94%2BB0%2Bp8KwXcQjU7iLC6xTptdzRfF8puovIADeR%2FJ2MHCmAxUiD7rqm8SjmJfgIbadE6rYwncZ%2Bw60gR6N2ydOuGjw0oklmtTbm2emsstqpSBw3%2BjyRs57dBJAjN7eKzvoBMw6Mh78%2B7%2FeZt5uj4YLQ2fDIJ1j36LbQVRRXGGakI88DXUnqMFsvLGLKB2NKbnnWzKHFWXgU2tg84Zd0et30zmcQiNahtYKcueT6NO6OXE4onWZk3XPyRZFGpCGLhrWOpXpUIp5mZ%2BTBzZe4O0toX4dM3QwoY3N3%2FbLeWQloiJHxHAJj%2FjqmznfHB8yjoPfJ3rH7nDY7OA2GfwAfaWPxowZCdSmM2zyy8qtmZXBS%2B0GkmRsnSjbId4AvE6u4y5M5hIhALjv0veeiCNKp7QE0OTC%2FULrznSyUYM0ihz869kCIDIbdiivI5HL6AX%2BWkY%2FIwAjuARLjkf9G0SY%2FLzDBlOmBoWYm8NKcW8C%2FCkzPp262yoqgRcvyUb8HeGMMPpiMoGOqUBc2DK7WL9MoveSqzm5Z9oO8uAbDRCYIvqdb14gTvHAyd%2FC5jbRxgymhrCXtqK1YuU4d%2FljByeHJWQNOrW7RVTduvtOoPI4kEBt61V8PWJVfWbQzQv7yDnJiug0sJqM%2BevTBqcqiQGL7msrNnidiAvzeB0s9lfbKTA24o61PNtrOR1b9Mjwi1NbYMSQAMCsUILzwOeN01gL98Z2JWnkhpPlj8WcMDo&X-Amz-Signature=0e46fbac2345f4b72835a4236133ebca9e61c7943f0586d1ec6ea1cc19d2a7cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2KCJOB4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwh4Qkjpm8mu6SfrbY4ztqETTJEdt3vYsWZ5SnMe3aHAiEA2QEodn8C7dobQRG%2BlRdf3mEyMl90MYPCYS%2FmCVkyI8Yq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJVz%2FWzKGrmKRVdcPSrcA6LjYfeLsUanItasBAZjDqDjo4cIQpfoFJqeCJ80QZIU9yKBxfYI7oJrTvNarm6NvCv%2Bi6d8yMfY869ma2GHQA4JfaJ1OeScle5EM%2FyBUVoGr5XtXDsV0ttOU%2BygJOm94%2BB0%2Bp8KwXcQjU7iLC6xTptdzRfF8puovIADeR%2FJ2MHCmAxUiD7rqm8SjmJfgIbadE6rYwncZ%2Bw60gR6N2ydOuGjw0oklmtTbm2emsstqpSBw3%2BjyRs57dBJAjN7eKzvoBMw6Mh78%2B7%2FeZt5uj4YLQ2fDIJ1j36LbQVRRXGGakI88DXUnqMFsvLGLKB2NKbnnWzKHFWXgU2tg84Zd0et30zmcQiNahtYKcueT6NO6OXE4onWZk3XPyRZFGpCGLhrWOpXpUIp5mZ%2BTBzZe4O0toX4dM3QwoY3N3%2FbLeWQloiJHxHAJj%2FjqmznfHB8yjoPfJ3rH7nDY7OA2GfwAfaWPxowZCdSmM2zyy8qtmZXBS%2B0GkmRsnSjbId4AvE6u4y5M5hIhALjv0veeiCNKp7QE0OTC%2FULrznSyUYM0ihz869kCIDIbdiivI5HL6AX%2BWkY%2FIwAjuARLjkf9G0SY%2FLzDBlOmBoWYm8NKcW8C%2FCkzPp262yoqgRcvyUb8HeGMMPpiMoGOqUBc2DK7WL9MoveSqzm5Z9oO8uAbDRCYIvqdb14gTvHAyd%2FC5jbRxgymhrCXtqK1YuU4d%2FljByeHJWQNOrW7RVTduvtOoPI4kEBt61V8PWJVfWbQzQv7yDnJiug0sJqM%2BevTBqcqiQGL7msrNnidiAvzeB0s9lfbKTA24o61PNtrOR1b9Mjwi1NbYMSQAMCsUILzwOeN01gL98Z2JWnkhpPlj8WcMDo&X-Amz-Signature=642fa8cd66cdd19f6f74ffaad31498754040cf9ef737365fefc087d45a138f4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

