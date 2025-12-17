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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWDBGO3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCynptw9JKfwCby0bL9SL0eBp3ROXeXxhnDFoWqqLbvuAIhAMIgoceHhLYSy4CX5mXOGb8JQYbT9HhjzdgYAGnd5bFIKv8DCHUQABoMNjM3NDIzMTgzODA1IgyAOmvVf9JZRpcMwkQq3AOCL9qx3Ab2wE87QYIi%2BGGH6TpD3tqRfsH%2BZLuymM%2BEL4LeHPV8qoJ7wP6b%2FuWgqwKy%2Fv7OCfkk9MJk8v2AKKxWuBay1ZqB5O7GEollx3VZnMdKunLsoKDSSlmXfpSRQJr7CK4KDH%2Fegy3hUyJAggmJ%2B1ZKLTBujy2l6WVXSYa5Nqte2FQUHr5%2F63s6SoFs8bS1DLnforuAkbDhiRTQ4jfJs3aJVF1ET9pLlZWyYRE51DyEuEjSHfRm6s7xSModyx9rXOiG%2FXKKpTq03NcoHoIb%2FFPO6f4ZblfnvZ0st%2BXR3zMk8IxclV1bacZkUOWjHsgaQS5dEmsApyUmOWRwWFaO2tmPnxziwN%2FZYZvL1punB65E2xHOX6GZXa%2BHb%2F1K5NKK7iJIfpWRCUS%2Bq5CNIETwrtJElTOlNWVVBq3NHnrrnBOKxSeDrTR9yDg2p4E%2BVZ%2B7fvoqO%2Fa7L3hzZlJps4qnVP00NV5kMZlkuwVfcvsKRPFYvlvPG17C8yd%2BAE%2B8JUMB0X7W3rcslDhm0BGh5ZtyLRTvJfJL14LNj3PX7tbUy4MLheppnFoR9rMUoknYA29elKoksxtbtfBXqR4OzkXcFYsvzHJeJ8VYpPlPAMUh%2Bp71f3MLDYRMvO5MGTCNzojKBjqkAcElqmbiVrsK0L1iqLzdaWXFjgotOgZ6UWh%2BADp2GETVH612KEUbQunD10N0xYVLozoMbKUhdgSa7oRE6ortKj8lGiTORJykwrmt4JI6ctl6QkXL5ydFzhsK%2FXuCcTKQ70iUluK8v3xWU2XCKRk7T6wtdEDU4DNWyDeY96RFnc5Yvv6Ic154QJg%2B59c1inE%2FPUtJctb4fetEKA9se0ZXshi5JFk3&X-Amz-Signature=d66f1af52256d43149f4a47f3dd05a9e9d8075ce66aa571b4e287efad0b77524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWDBGO3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCynptw9JKfwCby0bL9SL0eBp3ROXeXxhnDFoWqqLbvuAIhAMIgoceHhLYSy4CX5mXOGb8JQYbT9HhjzdgYAGnd5bFIKv8DCHUQABoMNjM3NDIzMTgzODA1IgyAOmvVf9JZRpcMwkQq3AOCL9qx3Ab2wE87QYIi%2BGGH6TpD3tqRfsH%2BZLuymM%2BEL4LeHPV8qoJ7wP6b%2FuWgqwKy%2Fv7OCfkk9MJk8v2AKKxWuBay1ZqB5O7GEollx3VZnMdKunLsoKDSSlmXfpSRQJr7CK4KDH%2Fegy3hUyJAggmJ%2B1ZKLTBujy2l6WVXSYa5Nqte2FQUHr5%2F63s6SoFs8bS1DLnforuAkbDhiRTQ4jfJs3aJVF1ET9pLlZWyYRE51DyEuEjSHfRm6s7xSModyx9rXOiG%2FXKKpTq03NcoHoIb%2FFPO6f4ZblfnvZ0st%2BXR3zMk8IxclV1bacZkUOWjHsgaQS5dEmsApyUmOWRwWFaO2tmPnxziwN%2FZYZvL1punB65E2xHOX6GZXa%2BHb%2F1K5NKK7iJIfpWRCUS%2Bq5CNIETwrtJElTOlNWVVBq3NHnrrnBOKxSeDrTR9yDg2p4E%2BVZ%2B7fvoqO%2Fa7L3hzZlJps4qnVP00NV5kMZlkuwVfcvsKRPFYvlvPG17C8yd%2BAE%2B8JUMB0X7W3rcslDhm0BGh5ZtyLRTvJfJL14LNj3PX7tbUy4MLheppnFoR9rMUoknYA29elKoksxtbtfBXqR4OzkXcFYsvzHJeJ8VYpPlPAMUh%2Bp71f3MLDYRMvO5MGTCNzojKBjqkAcElqmbiVrsK0L1iqLzdaWXFjgotOgZ6UWh%2BADp2GETVH612KEUbQunD10N0xYVLozoMbKUhdgSa7oRE6ortKj8lGiTORJykwrmt4JI6ctl6QkXL5ydFzhsK%2FXuCcTKQ70iUluK8v3xWU2XCKRk7T6wtdEDU4DNWyDeY96RFnc5Yvv6Ic154QJg%2B59c1inE%2FPUtJctb4fetEKA9se0ZXshi5JFk3&X-Amz-Signature=91591a2cac1e49ea71a2804f7b8da110fbc9e3333b39a524b76255b637e73a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

