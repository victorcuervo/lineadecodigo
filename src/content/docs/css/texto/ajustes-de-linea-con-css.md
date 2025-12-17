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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF5FGL2N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDvTh2hYXvzRBImr8dkyi1eUzvwG3Oy365zrh8VRy6UAiEA9n8O9OQ0ZsI8Wf%2F2G44BDGNTCQ2Oo48tckZTJxP3ygwqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsuv1ZsseYYmoYpuCrcAx%2FpLrCvZrsEove9gKmh57VBg5IOycQQqP%2BV4v4SCiDoE%2FAFX6BThz6Lb3noROH6iDvyPbLIvd6hpRMomIqDm6muomsCt01zKMXEiH%2Bln6ji%2BLTz0kktXyG8GoAsho%2FoBjkiJnTq2GnGx5wtZ5HESdbay5oCZnbixbbc9MptokqkCey41Lc13DbbuEsrRUJS%2FPLfw3GAnjmslDhD3WRIUVYPq93xkHwKJooArj544WlhXtVnqL2qf8PmIuLprrE5pZM%2BfwNFD8Y9sHCJV0MegAyR%2FkinxKfUXNjBo6IlGRtTGgXs%2BOqoAYNOWf1m69moTL%2BqZMLo%2Bs8CPI%2B5pWAofU0SXNhnPccl3LVer9eKFfl5LqVV0A7g35Nszym8QlJxU9V8adIqimHJIvZuhaVWGzcnJeG9piBFOyo5KU7FSXzmaPQl554q7fw2XTs6hZ5Uz77Fig6HI7s7AOee4WAbBXa1eczU8JP5uEqJXKP%2FRkwvUSSf%2FqnjVnGqkApsYIGMg5iR0tbkixhhnYprfntLKv6eNkASW4mF4Ahw2oZl3q6CDzpKbXprGhU6GCGgtRYGUMURERznP8ls5c4Ti%2B%2FK4S%2FczKBU7m2vLyQl6Gh2PmTZCZnfHMV3nJJse6UIMJCBi8oGOqUB%2FiK7KY%2FuzNlisfiVz1LyD2X0JDw3VD7X660uAye9Z82PdUW56WLv4Shi4NSit4lyBzOjs0HARVUINC3vYtyHKG2hVir%2BC0BXgCqPwW1wDeZLiXmK0MSbEEIBJYbbA1buG5nTOaI0vsoTNoSJhEqdFXXso6FbPBur3%2F1sQlaGjqNuBBF8jE4j5Pqjb61zXLdCwBycFkCRl%2BTfhEj6WbipxMrkKMUB&X-Amz-Signature=f3fff72c4b001d0b51d7dbad8db1ec64f1bbb0f40a465d5ae15d42c07ac15200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF5FGL2N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDvTh2hYXvzRBImr8dkyi1eUzvwG3Oy365zrh8VRy6UAiEA9n8O9OQ0ZsI8Wf%2F2G44BDGNTCQ2Oo48tckZTJxP3ygwqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsuv1ZsseYYmoYpuCrcAx%2FpLrCvZrsEove9gKmh57VBg5IOycQQqP%2BV4v4SCiDoE%2FAFX6BThz6Lb3noROH6iDvyPbLIvd6hpRMomIqDm6muomsCt01zKMXEiH%2Bln6ji%2BLTz0kktXyG8GoAsho%2FoBjkiJnTq2GnGx5wtZ5HESdbay5oCZnbixbbc9MptokqkCey41Lc13DbbuEsrRUJS%2FPLfw3GAnjmslDhD3WRIUVYPq93xkHwKJooArj544WlhXtVnqL2qf8PmIuLprrE5pZM%2BfwNFD8Y9sHCJV0MegAyR%2FkinxKfUXNjBo6IlGRtTGgXs%2BOqoAYNOWf1m69moTL%2BqZMLo%2Bs8CPI%2B5pWAofU0SXNhnPccl3LVer9eKFfl5LqVV0A7g35Nszym8QlJxU9V8adIqimHJIvZuhaVWGzcnJeG9piBFOyo5KU7FSXzmaPQl554q7fw2XTs6hZ5Uz77Fig6HI7s7AOee4WAbBXa1eczU8JP5uEqJXKP%2FRkwvUSSf%2FqnjVnGqkApsYIGMg5iR0tbkixhhnYprfntLKv6eNkASW4mF4Ahw2oZl3q6CDzpKbXprGhU6GCGgtRYGUMURERznP8ls5c4Ti%2B%2FK4S%2FczKBU7m2vLyQl6Gh2PmTZCZnfHMV3nJJse6UIMJCBi8oGOqUB%2FiK7KY%2FuzNlisfiVz1LyD2X0JDw3VD7X660uAye9Z82PdUW56WLv4Shi4NSit4lyBzOjs0HARVUINC3vYtyHKG2hVir%2BC0BXgCqPwW1wDeZLiXmK0MSbEEIBJYbbA1buG5nTOaI0vsoTNoSJhEqdFXXso6FbPBur3%2F1sQlaGjqNuBBF8jE4j5Pqjb61zXLdCwBycFkCRl%2BTfhEj6WbipxMrkKMUB&X-Amz-Signature=7d10b1e2e06dd887eb522afc7952a7c4ffdfddd78e4a6e6ea31e57860dc16add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

