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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646VCFQYS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtRkldFDN8CJtERoGZIfcVL6F40udlABYUwmoj2b7IvQIhALQZrZC0bGW0PqSZQQ0c7qQ1HUGOaFNVqcoDCYIL2h7bKv8DCHgQABoMNjM3NDIzMTgzODA1Igycqe8BF%2BDnKH4K5YYq3AM9p9%2FTwHBAziHFEW54cFweFjA4WgkMBqZsNSIpXTee4793GzXgAk9yrrRROzGY4%2Bd9T0ZVThrGLk2R15Wa%2FjlrGWei5t1FlQOZJDKrHjNLEeJd35q7lj8LxsZ4Szgkpysyo76ioXvl6IQWPU5OCgdOC%2Fk81MJgwi7wtoCGXFHDuqWND6%2B%2FQHfL40UY6kkq1ydL8bCOOIyDAJ%2BOdcYkdfRtHeE4aglFe7zd6EzMqbUsZzs2SLQlHWTGiZ8AhAJbDaZsWHwMNAzPqOFzVD1olwdHT2YnmrXT860xIkzBghTV2HtGpzoiguh4eWdPe0JsVdJEwXAIy5BGkLN74HDMBHKpalzWDVIfOJNcVEpr4fhEOl%2Fv3v4EHhjbV7zJPJPEp4f1%2ByJvhoJe1j8kKUg6KVsz1QFZqVu28gc0tB%2F5kQ5rfrtRNqnC6dLzjXkIvXHn%2F4QRT%2BM9HpB76P4wH7cZWhdH3E0zyLfaQP72cSD7TGOen%2FzSK9rswvDGqHxNyEEgdwbZVI7Ai5eria5WyiM8%2BgLKzjKLHyPtEcMRMXNnBROBCGeZE5emmoy8HsRoipCBy6%2F6Acjwq86snA3ahcVKzitu1Jekl5alTuCJ%2Bud%2B6nvvJbZPT0LrXkZurbOe%2BTC4nYnKBjqkAQR5lZrkup7ee7zaKSK5BGsYimzHo1YsjSwQhMlfZnqBH0sVsrbBTXzAP9WbySLu2G5JMJE5BjSIHsd9IoISDiPq8mzidI6RKs9BULJmnf5GQiuhIC6gvaWsTY3zQ4NNI7F1IDsvss0UVGl9LrR3DlD5dwwSFNlDmtIz3Ql3f08DLS7h4sbm63ofjEj0Bgd0jW8lnADx2aAiDKNfCtD454s0leSr&X-Amz-Signature=54a8e80a65f2a374ae261a0f156c4521b8845d0eb7ccb4e5c51836fff5e18af9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646VCFQYS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtRkldFDN8CJtERoGZIfcVL6F40udlABYUwmoj2b7IvQIhALQZrZC0bGW0PqSZQQ0c7qQ1HUGOaFNVqcoDCYIL2h7bKv8DCHgQABoMNjM3NDIzMTgzODA1Igycqe8BF%2BDnKH4K5YYq3AM9p9%2FTwHBAziHFEW54cFweFjA4WgkMBqZsNSIpXTee4793GzXgAk9yrrRROzGY4%2Bd9T0ZVThrGLk2R15Wa%2FjlrGWei5t1FlQOZJDKrHjNLEeJd35q7lj8LxsZ4Szgkpysyo76ioXvl6IQWPU5OCgdOC%2Fk81MJgwi7wtoCGXFHDuqWND6%2B%2FQHfL40UY6kkq1ydL8bCOOIyDAJ%2BOdcYkdfRtHeE4aglFe7zd6EzMqbUsZzs2SLQlHWTGiZ8AhAJbDaZsWHwMNAzPqOFzVD1olwdHT2YnmrXT860xIkzBghTV2HtGpzoiguh4eWdPe0JsVdJEwXAIy5BGkLN74HDMBHKpalzWDVIfOJNcVEpr4fhEOl%2Fv3v4EHhjbV7zJPJPEp4f1%2ByJvhoJe1j8kKUg6KVsz1QFZqVu28gc0tB%2F5kQ5rfrtRNqnC6dLzjXkIvXHn%2F4QRT%2BM9HpB76P4wH7cZWhdH3E0zyLfaQP72cSD7TGOen%2FzSK9rswvDGqHxNyEEgdwbZVI7Ai5eria5WyiM8%2BgLKzjKLHyPtEcMRMXNnBROBCGeZE5emmoy8HsRoipCBy6%2F6Acjwq86snA3ahcVKzitu1Jekl5alTuCJ%2Bud%2B6nvvJbZPT0LrXkZurbOe%2BTC4nYnKBjqkAQR5lZrkup7ee7zaKSK5BGsYimzHo1YsjSwQhMlfZnqBH0sVsrbBTXzAP9WbySLu2G5JMJE5BjSIHsd9IoISDiPq8mzidI6RKs9BULJmnf5GQiuhIC6gvaWsTY3zQ4NNI7F1IDsvss0UVGl9LrR3DlD5dwwSFNlDmtIz3Ql3f08DLS7h4sbm63ofjEj0Bgd0jW8lnADx2aAiDKNfCtD454s0leSr&X-Amz-Signature=d08c5e7f21b2c85cfdad0ec57e6e87baf2aab986fd944720fb234a18fa56ec36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

