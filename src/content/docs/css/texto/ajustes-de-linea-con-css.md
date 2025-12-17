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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNIAG4BU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxO1dUPUe4uiBvgx2rs7gHrCm2iK8F%2BCMOOMvPQ1FZHgIhANVJVoI3V0Nlsejl5qhpPfguoROBubl98IOX1jVQe9A%2BKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyugJh0OkfgnUF5%2FFEq3APO7b35xH8mdS1fxukEkcMbiek88yd7PIFRy%2BQO1m%2BUVt6g9anpgZb8DQqxePSzL0MgyHoJtIculNd3YN64a%2Fej%2BI%2FrDKPWyHGDZuXPSJlAk2FbrMdmxRQttckmHKo8yzKtfqMhMxDcq5zZoue5OY%2FcPmnYnzVWVS8UNdvOZrfGjs6qhcu9ihO0Vrg0duK%2FGHuNSxJQ99kZaH%2BJGqsR8KtKz3aEcgwcOQSUicJQU%2FOhOyK1iaPFLSxblu3rJgYYwZVKI166vqEGgEnO4hwX6GflyLUp4%2FoqHluBKlizVZc8U1flvZZ8AahLdZ42zabX0Wuyz6Hrk%2B7K6RprdH6wDpwMvU4ZmXltbF%2FmBsTT6fAJFAngmGtGx7O8yKu8ptrlkGqLaK5HiApKGkbzF9fP7Id0kyMPtbk9GSpQr5mV5ELc2s%2BWjLkJbwqZxzDT462oy5%2BjKGBiqlBUALSkST5%2FXwt8OJW7mmtWpyYtRPohq13yWzXMCKBMnOw0p2xcgbYlFdKOLPhWi3LjPazri19aFTBTaordRkwAdGr%2F4R75i9k6hm5xZTG8qy8%2B33cApPYJBxI1HLvVfG1RzgZ7uJF%2ByX1PNprEp2B4vwZ0wX30VStybjBF3bWiaKeib0yUPTC1oIvKBjqkAVm6tdTsfWgm4Wxjnim7ycCErAhw%2FwTTbk%2F63L15YGswBeQ0lTXeb3exm09kIe0QzxXTmbd6GVb4GS9ICyviA8%2F1%2FnstBmtQD7idlWuvb6%2B1K0BIfRaIcaLZqS91lL4XI0FavnOFW6gXmN9Umb2f%2FSYJs2KSXR5w15I6pKyE7ELEHkl4UP1Ac45lJFJF2TQV491E0Yni4vcMcsVQP53us7owjRQ7&X-Amz-Signature=bc0750e94133b3b586aff1a89281509df4a1aef0a4412ac7951251e58e908d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNIAG4BU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxO1dUPUe4uiBvgx2rs7gHrCm2iK8F%2BCMOOMvPQ1FZHgIhANVJVoI3V0Nlsejl5qhpPfguoROBubl98IOX1jVQe9A%2BKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyugJh0OkfgnUF5%2FFEq3APO7b35xH8mdS1fxukEkcMbiek88yd7PIFRy%2BQO1m%2BUVt6g9anpgZb8DQqxePSzL0MgyHoJtIculNd3YN64a%2Fej%2BI%2FrDKPWyHGDZuXPSJlAk2FbrMdmxRQttckmHKo8yzKtfqMhMxDcq5zZoue5OY%2FcPmnYnzVWVS8UNdvOZrfGjs6qhcu9ihO0Vrg0duK%2FGHuNSxJQ99kZaH%2BJGqsR8KtKz3aEcgwcOQSUicJQU%2FOhOyK1iaPFLSxblu3rJgYYwZVKI166vqEGgEnO4hwX6GflyLUp4%2FoqHluBKlizVZc8U1flvZZ8AahLdZ42zabX0Wuyz6Hrk%2B7K6RprdH6wDpwMvU4ZmXltbF%2FmBsTT6fAJFAngmGtGx7O8yKu8ptrlkGqLaK5HiApKGkbzF9fP7Id0kyMPtbk9GSpQr5mV5ELc2s%2BWjLkJbwqZxzDT462oy5%2BjKGBiqlBUALSkST5%2FXwt8OJW7mmtWpyYtRPohq13yWzXMCKBMnOw0p2xcgbYlFdKOLPhWi3LjPazri19aFTBTaordRkwAdGr%2F4R75i9k6hm5xZTG8qy8%2B33cApPYJBxI1HLvVfG1RzgZ7uJF%2ByX1PNprEp2B4vwZ0wX30VStybjBF3bWiaKeib0yUPTC1oIvKBjqkAVm6tdTsfWgm4Wxjnim7ycCErAhw%2FwTTbk%2F63L15YGswBeQ0lTXeb3exm09kIe0QzxXTmbd6GVb4GS9ICyviA8%2F1%2FnstBmtQD7idlWuvb6%2B1K0BIfRaIcaLZqS91lL4XI0FavnOFW6gXmN9Umb2f%2FSYJs2KSXR5w15I6pKyE7ELEHkl4UP1Ac45lJFJF2TQV491E0Yni4vcMcsVQP53us7owjRQ7&X-Amz-Signature=6cf84bc429e79240e6ebebe430ae25616bd8bc1163958d98f0d3259e956492d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

