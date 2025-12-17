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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCYPNJ34%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDffLFGV88u%2FQJhfVw%2FRGhREQcEkjETPJJ6W%2BXHaOPZyQIhANbmmpSE8mQuPyoVAFxLLGH%2F7OLPOMRQtxVgPNI%2F447bKv8DCHoQABoMNjM3NDIzMTgzODA1IgzZYDy%2BHUcSeczIVdIq3ANTgSAqyRlsLXGr9WD9glEu3W78GPER4rKl6UBK6QnmxWokCva8CQggeG7KdX96Q94JyohA9EtmGlCtZzaKPjGY%2BXUeq3ELQfUP%2B5ncjaZNBJHXNemE9j1%2BdWv%2Fr0ueMVn2iPAsvBjv%2BAhig3XdDgwNFuc72ID7qfYFZDemNz4iDxvgEELGpCeaYEIbCJkf6Mbcu33BZwPUq6kF1aZxkzjjgWZymTlc1hjNVfYpeRv2nFeT6RcEvUeRuSCZEjchIt4hoH76meDRy3UGBD58OMyAmBwm8vwrOMPZbipfDujWonOLTi%2FxY5qpIvvvITFbr1eTkVsQ%2B%2FMGAVzBh7nQmhBplLocw8XBb7htji%2BxtH%2BgZ6Ar5lbJPAYn9A3iy%2BACuQJlqB1bI2EJ1iTWCwm8KcNGWkOLWt0Lyaj51tKp%2BCFpLBkCDpvGnec4ICtUl8vvfFFfU65iYQ3tf%2BcgsvarG0qrrrEz4f4YOK4XfTFWPkW%2BSLKdiuGZUF5lTdHmGoKHMN6eyfLnG9Vpijd1KgoyzaAO87zcj3Yll6hT9exx9e99GZfEDJJSNjMZkD7AHcZe3ZmlsCsO3zyTqANuqjUYJ4q86XbXpIVUqDldWjfbwqe%2BNQVwWHMtqKv98BzyEDCn0onKBjqkAZtmPXpil24eVzntKinhQVwQ5httRF4Ak%2FfYG0G5jg%2FWpRGJNusTDzMq54Pm9wZcYsxWSkymww24ueA8iLFQdaRGHiz25or0HgVYy0i%2Bc%2FFunxYvzqA5vXYL3COUS%2F0yDiYbEeDjM6jo%2FC9Z%2Fv9auAK0lMt5Kv%2Fq08kB1JjHjt%2FWCYwWhwFSz0vfemrkPMRdKE8z89DYqMClEYWGLlxq44USXXDG&X-Amz-Signature=4f54a81a5c7335a5d33b97761e3ae75f0b856e816fa8c0164bcc25fe834f631a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCYPNJ34%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDffLFGV88u%2FQJhfVw%2FRGhREQcEkjETPJJ6W%2BXHaOPZyQIhANbmmpSE8mQuPyoVAFxLLGH%2F7OLPOMRQtxVgPNI%2F447bKv8DCHoQABoMNjM3NDIzMTgzODA1IgzZYDy%2BHUcSeczIVdIq3ANTgSAqyRlsLXGr9WD9glEu3W78GPER4rKl6UBK6QnmxWokCva8CQggeG7KdX96Q94JyohA9EtmGlCtZzaKPjGY%2BXUeq3ELQfUP%2B5ncjaZNBJHXNemE9j1%2BdWv%2Fr0ueMVn2iPAsvBjv%2BAhig3XdDgwNFuc72ID7qfYFZDemNz4iDxvgEELGpCeaYEIbCJkf6Mbcu33BZwPUq6kF1aZxkzjjgWZymTlc1hjNVfYpeRv2nFeT6RcEvUeRuSCZEjchIt4hoH76meDRy3UGBD58OMyAmBwm8vwrOMPZbipfDujWonOLTi%2FxY5qpIvvvITFbr1eTkVsQ%2B%2FMGAVzBh7nQmhBplLocw8XBb7htji%2BxtH%2BgZ6Ar5lbJPAYn9A3iy%2BACuQJlqB1bI2EJ1iTWCwm8KcNGWkOLWt0Lyaj51tKp%2BCFpLBkCDpvGnec4ICtUl8vvfFFfU65iYQ3tf%2BcgsvarG0qrrrEz4f4YOK4XfTFWPkW%2BSLKdiuGZUF5lTdHmGoKHMN6eyfLnG9Vpijd1KgoyzaAO87zcj3Yll6hT9exx9e99GZfEDJJSNjMZkD7AHcZe3ZmlsCsO3zyTqANuqjUYJ4q86XbXpIVUqDldWjfbwqe%2BNQVwWHMtqKv98BzyEDCn0onKBjqkAZtmPXpil24eVzntKinhQVwQ5httRF4Ak%2FfYG0G5jg%2FWpRGJNusTDzMq54Pm9wZcYsxWSkymww24ueA8iLFQdaRGHiz25or0HgVYy0i%2Bc%2FFunxYvzqA5vXYL3COUS%2F0yDiYbEeDjM6jo%2FC9Z%2Fv9auAK0lMt5Kv%2Fq08kB1JjHjt%2FWCYwWhwFSz0vfemrkPMRdKE8z89DYqMClEYWGLlxq44USXXDG&X-Amz-Signature=1c49984d116588bafa0803a78873094c1af0352ef5dc1d9df0deba305231094e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

