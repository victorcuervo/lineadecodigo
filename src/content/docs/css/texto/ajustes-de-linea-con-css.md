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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCNPDEMI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5qnckZ94IAy9ETiI3ZyxcSbQ%2F%2F5rBo0jj4aiC6rAdngIhALITxo3evcN2vMw32nO9Khz4nS2Ol2ukhn1fnq9nLr9mKv8DCHIQABoMNjM3NDIzMTgzODA1IgxQ6JF3S7kUcCA64x8q3AO0szJEYOlEFFbLgI04%2FMU9z%2B4eaEn%2BV3XQzI2KIzzlCJq5Atg1CE1QcR%2Bq105ugoovEP%2Fvbck7cVpm2%2FUMwhs3cg27ELJMZc3uQeAt3hAZsXF96OXROYZfSoz4qOQRI3zFT3nKHHmiQVyxdlWJBywcRhwmem4IwdgOBmQs4F2MJ08RWHInrYnxJuvTyl3JLCGL3maaP4u%2BEOohd6JyV9lWvcv1wiN8DwM50tl6Wokenf1AWm0bHs2WFMawUCqEFhABlfCf7DWVdat1%2BakXqSI3kTe%2BF8nLg7wMFqMyR0jRCwRwdhFuxV1U8Cemdl8UdMxnUa8sdEfNiKX9zZXDWVbvOgCf0dSEWAlHLfkT0t2izY6MB4wFayf4KVFzmpq3%2F7TEUnEch2JbZrk36jje159Eym8QX4UqackbaefkFfRXlALzx3h5AiMRH9hd%2BVKr1ttVzfxK9%2BIpkWf0OZGfyusSZ00UEqz9OjFos7gZCMdAwQZS4LM7H%2FkAYkUPTgLleCxNpRMpe6J5vX6DfPtPeOh%2FHa%2FCl9YBdETmQYwB7bHPhLCwUMBucbrqqL0X%2FMqZsoxlk27JtDYxzqfljyqAFXvndbO9ntRtSk%2FLn8NCsOiMTovJ6oK02pR51TIJtjDZ%2B4fKBjqkAc7VDpT9RYLznMFhbys%2B5xrfL6rtbOlWxkIBFl9ZPg5CKQoqcPDrqqiWPf5xqmjf%2B2%2FeLdZ%2BjQZAXx8wHuUgkli9%2ByaBzu0Xt3UK22W4X%2BuIPS89Bdy4Hr5SsvZuBCV%2BJWanys32xWX1XT8hQKqNWX06AvYGWzZ0CSvU0hys5DSEryU0hxdRbhmFKrKXtaTm%2FEH%2F38dXZNFBCt1DR5nmNKTxfbA%2B&X-Amz-Signature=e137539af2f38c24c5fcd875ce7eb3ca9a85f7b60d538e74cac24dd00ca37a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCNPDEMI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5qnckZ94IAy9ETiI3ZyxcSbQ%2F%2F5rBo0jj4aiC6rAdngIhALITxo3evcN2vMw32nO9Khz4nS2Ol2ukhn1fnq9nLr9mKv8DCHIQABoMNjM3NDIzMTgzODA1IgxQ6JF3S7kUcCA64x8q3AO0szJEYOlEFFbLgI04%2FMU9z%2B4eaEn%2BV3XQzI2KIzzlCJq5Atg1CE1QcR%2Bq105ugoovEP%2Fvbck7cVpm2%2FUMwhs3cg27ELJMZc3uQeAt3hAZsXF96OXROYZfSoz4qOQRI3zFT3nKHHmiQVyxdlWJBywcRhwmem4IwdgOBmQs4F2MJ08RWHInrYnxJuvTyl3JLCGL3maaP4u%2BEOohd6JyV9lWvcv1wiN8DwM50tl6Wokenf1AWm0bHs2WFMawUCqEFhABlfCf7DWVdat1%2BakXqSI3kTe%2BF8nLg7wMFqMyR0jRCwRwdhFuxV1U8Cemdl8UdMxnUa8sdEfNiKX9zZXDWVbvOgCf0dSEWAlHLfkT0t2izY6MB4wFayf4KVFzmpq3%2F7TEUnEch2JbZrk36jje159Eym8QX4UqackbaefkFfRXlALzx3h5AiMRH9hd%2BVKr1ttVzfxK9%2BIpkWf0OZGfyusSZ00UEqz9OjFos7gZCMdAwQZS4LM7H%2FkAYkUPTgLleCxNpRMpe6J5vX6DfPtPeOh%2FHa%2FCl9YBdETmQYwB7bHPhLCwUMBucbrqqL0X%2FMqZsoxlk27JtDYxzqfljyqAFXvndbO9ntRtSk%2FLn8NCsOiMTovJ6oK02pR51TIJtjDZ%2B4fKBjqkAc7VDpT9RYLznMFhbys%2B5xrfL6rtbOlWxkIBFl9ZPg5CKQoqcPDrqqiWPf5xqmjf%2B2%2FeLdZ%2BjQZAXx8wHuUgkli9%2ByaBzu0Xt3UK22W4X%2BuIPS89Bdy4Hr5SsvZuBCV%2BJWanys32xWX1XT8hQKqNWX06AvYGWzZ0CSvU0hys5DSEryU0hxdRbhmFKrKXtaTm%2FEH%2F38dXZNFBCt1DR5nmNKTxfbA%2B&X-Amz-Signature=63a2a42c5197a813c3c21e6ee5629228fe495266f3be3a30d3265cc8121cfd62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

