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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5OV3QIH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxPNQ11j4rDtkmsoN6DZDShovwa34iciuGQ6ZckYz19wIhANUswl4AhEeY9BV7SouVY71rD6GgvkCO5viOFIf15217Kv8DCHsQABoMNjM3NDIzMTgzODA1IgzEFwJoSGTBq8WFbWMq3ANxx5FEBLfYzuoWsYZE6PIV%2FCiz5ndjULKVDdc09mk6944KHHpa8Fd7hbjBGwYhiOJ54d8KfVLZ1wHFZ%2FhhaTqjpg0TdbifODlfowQgxpeUKfxirDHI8%2B91uRMOc6iHap8FBHf6p4JmDxdZFMqvOgFbpY1uy6DiGYowjMRV60HSyvl%2BA2iyLprE0BM1z77iTYf26yiwR3%2B5Dwk0HWrY2FsNhXSMkOIV1W9Fk6EyeAhrruEIkynjSRJJ5%2FbaXF9LaC4R8JBix8x8JzW1pteesziOtRiVlKompnMIC0lUcW5NlALVXOmtCKQdO6bTfOtWGynfDJSKJeQvqqVXp0g3dWyA0MY7noOQx2et4lTRH00TS0eerVP5%2BC3JjdTVVWcxZ6rrKnt2nOd%2FDNeVnkNAYkEeAvMafH3h806UgD4L%2FwJ3f77BYRMYnQAwhfznFMtM234ljTdAwPfUlSUcdWgxIHtdRWkvWreTpu0GI25VJxn%2FfnQMjkHqZlo%2FBc0wbp0UA8Z4fk4FhKvtWtiz4HOunwEJbAgx%2FWr9%2FSlSZJWjyljH7BTna1jDx9JHjC1eRpVm3LyURik55uaqG7TOT06AW0e%2BL5qbHc030EJ1J3GH4fMEteqeJQUHSq13MtOyHjCL8InKBjqkAUdThsUtcbRnYswbBLJyzQF2E6Y1iowx0tC6J4QAUJdEKMZscoSp5Lyw2MfBXzETamAt4vdnahRTRq%2BnFEa%2FHBuszkWbFWt1HhNYIQ2ZOuB6VPyTzWKJ%2BjEwc59hCWjz9WEQKijVaVRW%2ButFN6%2FAZiz%2FXgPcmVLNcgC8UkqMV2U26JNDtKKripQNPKV%2FgnhckUZNU1HP8O3PBF8fxgNEemQypUps&X-Amz-Signature=926b486c934f62bc81b9c83216aba466295b2952bf5c4090b661835474e0a545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5OV3QIH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxPNQ11j4rDtkmsoN6DZDShovwa34iciuGQ6ZckYz19wIhANUswl4AhEeY9BV7SouVY71rD6GgvkCO5viOFIf15217Kv8DCHsQABoMNjM3NDIzMTgzODA1IgzEFwJoSGTBq8WFbWMq3ANxx5FEBLfYzuoWsYZE6PIV%2FCiz5ndjULKVDdc09mk6944KHHpa8Fd7hbjBGwYhiOJ54d8KfVLZ1wHFZ%2FhhaTqjpg0TdbifODlfowQgxpeUKfxirDHI8%2B91uRMOc6iHap8FBHf6p4JmDxdZFMqvOgFbpY1uy6DiGYowjMRV60HSyvl%2BA2iyLprE0BM1z77iTYf26yiwR3%2B5Dwk0HWrY2FsNhXSMkOIV1W9Fk6EyeAhrruEIkynjSRJJ5%2FbaXF9LaC4R8JBix8x8JzW1pteesziOtRiVlKompnMIC0lUcW5NlALVXOmtCKQdO6bTfOtWGynfDJSKJeQvqqVXp0g3dWyA0MY7noOQx2et4lTRH00TS0eerVP5%2BC3JjdTVVWcxZ6rrKnt2nOd%2FDNeVnkNAYkEeAvMafH3h806UgD4L%2FwJ3f77BYRMYnQAwhfznFMtM234ljTdAwPfUlSUcdWgxIHtdRWkvWreTpu0GI25VJxn%2FfnQMjkHqZlo%2FBc0wbp0UA8Z4fk4FhKvtWtiz4HOunwEJbAgx%2FWr9%2FSlSZJWjyljH7BTna1jDx9JHjC1eRpVm3LyURik55uaqG7TOT06AW0e%2BL5qbHc030EJ1J3GH4fMEteqeJQUHSq13MtOyHjCL8InKBjqkAUdThsUtcbRnYswbBLJyzQF2E6Y1iowx0tC6J4QAUJdEKMZscoSp5Lyw2MfBXzETamAt4vdnahRTRq%2BnFEa%2FHBuszkWbFWt1HhNYIQ2ZOuB6VPyTzWKJ%2BjEwc59hCWjz9WEQKijVaVRW%2ButFN6%2FAZiz%2FXgPcmVLNcgC8UkqMV2U26JNDtKKripQNPKV%2FgnhckUZNU1HP8O3PBF8fxgNEemQypUps&X-Amz-Signature=8ea624f4f3eca01fdbd1a22d563dcf133dffb0092bf66695c1ef670cad452dbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

