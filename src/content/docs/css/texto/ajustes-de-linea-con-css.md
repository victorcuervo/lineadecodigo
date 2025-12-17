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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQUEA6M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUCUFROBmU%2F9JbDzWZ3Ad3j1AN6yUxJZZFJPor217JggIgbijNHe0k%2B%2Bz%2F6lRk1SxDJ%2B0ueAQp7NAEOE%2BScjLM2UUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLlqUIwRRHCaLxyaPCrcAzA%2FbymSORVyDcY%2BxI3y57Bhysn5aqLv1nzzk%2BQauC40iXzPL5qtVM%2FdBfGHPgpTT5QzNH2rr22NLJnuHG1SKFw9sKXE0kKaicwexfNi6NDGKUkYlaywjMp8KYFR9c6tzE2U4%2Fb74D92PdOpZ4BjbRonWbNlpElryRj79RVSHGQUs0zV8%2Fof4Bw1FJYdZfh9rkeTeSon1XJIOjxvAxNZYocwpy8gqNNidTzni7vXobhv2IkKeygCcMjqRyxHilc4LzXG7v1yx1Ke03ebNijfKOzHz6Dd5hpwFvAHNuvNd6CkEZzM5PmwKDJJEQuJJu6Wj3Azmg1Q6IZ6YUPIN%2FD%2FAvriFFGU7dNqob1%2Fog0%2F1xLgu7sxDFqjWR0qZZCsfxud303U0y2GLgqTtzsobkWlntWwX%2F9Cl%2FnEJRnOVOwKB038NhafmSdkgKdiShX3RpromxtNP0llmRzJaVp%2FtbG0G9Ei14oUhGx4OAcE25fgEfQIJJr%2BiARfcWX8JrVjM8Nv4F18dqcMIvj5XgVHnaUJRHp3ONFRDiZ5Hh5vwL8ovlCymLJGQhMHLW11b8wUp%2BL7UjUpbOw8kbWFdcGPjgKC4w%2BtGsVhVX599mo3GqJqphuGy%2FSs2KsPgprsLa1DMK3GisoGOqUBEILpt9AxvEHlujT%2BZ%2BUcODQzjqq1NsEbovaS7VAGQdhD%2Fla7dyxEfl%2BfZScfTAtV189Bo54KkOmkgkzjtn8vYUTtsdZGK901zVq%2FyFi9Uoatht235r3tENbMIxJ2kT55VJj3V24vsdySUwh4BhYgYAvkBM1b41xYNPosrBAI5ZeDgQveWizlDTli7ZZN7Fodj2wbaVgcdEDug9IF%2B%2Bozb7vpvvAk&X-Amz-Signature=dfb354ade8b9ef3a755905000b56026b0ba7e9db4410a3dcf21c1ffca35abc4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQUEA6M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUCUFROBmU%2F9JbDzWZ3Ad3j1AN6yUxJZZFJPor217JggIgbijNHe0k%2B%2Bz%2F6lRk1SxDJ%2B0ueAQp7NAEOE%2BScjLM2UUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLlqUIwRRHCaLxyaPCrcAzA%2FbymSORVyDcY%2BxI3y57Bhysn5aqLv1nzzk%2BQauC40iXzPL5qtVM%2FdBfGHPgpTT5QzNH2rr22NLJnuHG1SKFw9sKXE0kKaicwexfNi6NDGKUkYlaywjMp8KYFR9c6tzE2U4%2Fb74D92PdOpZ4BjbRonWbNlpElryRj79RVSHGQUs0zV8%2Fof4Bw1FJYdZfh9rkeTeSon1XJIOjxvAxNZYocwpy8gqNNidTzni7vXobhv2IkKeygCcMjqRyxHilc4LzXG7v1yx1Ke03ebNijfKOzHz6Dd5hpwFvAHNuvNd6CkEZzM5PmwKDJJEQuJJu6Wj3Azmg1Q6IZ6YUPIN%2FD%2FAvriFFGU7dNqob1%2Fog0%2F1xLgu7sxDFqjWR0qZZCsfxud303U0y2GLgqTtzsobkWlntWwX%2F9Cl%2FnEJRnOVOwKB038NhafmSdkgKdiShX3RpromxtNP0llmRzJaVp%2FtbG0G9Ei14oUhGx4OAcE25fgEfQIJJr%2BiARfcWX8JrVjM8Nv4F18dqcMIvj5XgVHnaUJRHp3ONFRDiZ5Hh5vwL8ovlCymLJGQhMHLW11b8wUp%2BL7UjUpbOw8kbWFdcGPjgKC4w%2BtGsVhVX599mo3GqJqphuGy%2FSs2KsPgprsLa1DMK3GisoGOqUBEILpt9AxvEHlujT%2BZ%2BUcODQzjqq1NsEbovaS7VAGQdhD%2Fla7dyxEfl%2BfZScfTAtV189Bo54KkOmkgkzjtn8vYUTtsdZGK901zVq%2FyFi9Uoatht235r3tENbMIxJ2kT55VJj3V24vsdySUwh4BhYgYAvkBM1b41xYNPosrBAI5ZeDgQveWizlDTli7ZZN7Fodj2wbaVgcdEDug9IF%2B%2Bozb7vpvvAk&X-Amz-Signature=c1b59200c7f94b1bb5ada3c09cfc6b01f2124bacdcd828c3f35e246bfd9ac842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

