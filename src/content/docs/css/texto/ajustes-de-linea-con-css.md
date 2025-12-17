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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEMTTZZL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcgf6m991oDbR7jp4%2B6PG5s%2FzNan1wbTHt7J%2FiXiBHbgIgCl%2F9owDz96ZTmFRz9xF4O1L%2BGkxUwNi%2B%2BUOtbIjonGAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDA8YyJh%2FQ5JEpj%2BHxircA%2FE66X%2BDwsmXCsU50f96ENY49SSU06W%2BFJNSr8gIwl%2F47fjGZm%2BJW0sEZzf35RXMqFRqX87ZrzTFv1oxxboLX72h0tWyE9zs1bKHsf2FJRjzisJcztAdhYrlaTUGiRRpMvrnqwpmm0qDObO%2FBFIj3PtgzEJlKZj2gy%2FkUkGBYIa4Y%2FjRkSIb%2BoGLM1GJl52ZHyCUiHrZYWBkVh2Iy2%2Fa4u3gKY7YLv%2FTXz05tXSnJb0XQb2c1iF9f1F%2FKkl%2BlTm3nWyY%2BiURUO5aVVit1yhRxEu64%2F1SsZ%2BUnasjqA8V65eOnn89JG9ZqGfdTEJJuzAnLTj6EZPO7oFAbbGv%2F4WP1gOh%2B4JhbZohl2CMNaL3sq6kp%2B1%2Bz0JvYhwmYy1ZghXGfvUUG0hjB7SQcxFQ7sc4WuIXPDDNd73wE4v77p7rADq72p9SBb2gwRU9bN49WZygI4AhK5tqM%2FNiZNDprcU3lZ7Lg418e7oCqnTbRyaJ%2FtjD3Z8W5RQga%2Ff8pVZQnNnj1AKPTNiOhJTtOVG5FcRABFp8KlPurZTeVyocY5lyEBtcJgCByc%2BeW4A%2For51NbV9C9B4sbpP2h8gpj6KdB3FXxoC%2Fdz1rQ22Jog4ycj7Vlydlu8wWYu0qdVxkzT7MPrFisoGOqUBvo8M92GkB73VwdAJ5LD6ofYVotvbpyPJVUAJdkgnAKGg23Hpamg4dswUDNraNJQaVskLRcb0eZgt%2BTtyLcmFzqwjqbX7Ypv2jmKEPmvVu8eQwgwqDv0eSLfPxW9r8mvmYid6Nvxfcgdk4Ko1B7o0n4tnfoGhCYUQIHYQpKSZuyt2B4vuH3KVPmbY3M9mgfuB%2F5IB5bcTLLcPJ7YnLTWqHXsjGP3u&X-Amz-Signature=c5a93dcfe86f13a2e5a9c1ee357fb4c3a654bfcb1d84c90946e1941c6248da7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEMTTZZL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcgf6m991oDbR7jp4%2B6PG5s%2FzNan1wbTHt7J%2FiXiBHbgIgCl%2F9owDz96ZTmFRz9xF4O1L%2BGkxUwNi%2B%2BUOtbIjonGAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDA8YyJh%2FQ5JEpj%2BHxircA%2FE66X%2BDwsmXCsU50f96ENY49SSU06W%2BFJNSr8gIwl%2F47fjGZm%2BJW0sEZzf35RXMqFRqX87ZrzTFv1oxxboLX72h0tWyE9zs1bKHsf2FJRjzisJcztAdhYrlaTUGiRRpMvrnqwpmm0qDObO%2FBFIj3PtgzEJlKZj2gy%2FkUkGBYIa4Y%2FjRkSIb%2BoGLM1GJl52ZHyCUiHrZYWBkVh2Iy2%2Fa4u3gKY7YLv%2FTXz05tXSnJb0XQb2c1iF9f1F%2FKkl%2BlTm3nWyY%2BiURUO5aVVit1yhRxEu64%2F1SsZ%2BUnasjqA8V65eOnn89JG9ZqGfdTEJJuzAnLTj6EZPO7oFAbbGv%2F4WP1gOh%2B4JhbZohl2CMNaL3sq6kp%2B1%2Bz0JvYhwmYy1ZghXGfvUUG0hjB7SQcxFQ7sc4WuIXPDDNd73wE4v77p7rADq72p9SBb2gwRU9bN49WZygI4AhK5tqM%2FNiZNDprcU3lZ7Lg418e7oCqnTbRyaJ%2FtjD3Z8W5RQga%2Ff8pVZQnNnj1AKPTNiOhJTtOVG5FcRABFp8KlPurZTeVyocY5lyEBtcJgCByc%2BeW4A%2For51NbV9C9B4sbpP2h8gpj6KdB3FXxoC%2Fdz1rQ22Jog4ycj7Vlydlu8wWYu0qdVxkzT7MPrFisoGOqUBvo8M92GkB73VwdAJ5LD6ofYVotvbpyPJVUAJdkgnAKGg23Hpamg4dswUDNraNJQaVskLRcb0eZgt%2BTtyLcmFzqwjqbX7Ypv2jmKEPmvVu8eQwgwqDv0eSLfPxW9r8mvmYid6Nvxfcgdk4Ko1B7o0n4tnfoGhCYUQIHYQpKSZuyt2B4vuH3KVPmbY3M9mgfuB%2F5IB5bcTLLcPJ7YnLTWqHXsjGP3u&X-Amz-Signature=52b708ea8810ba468b364e0fa51eb609e471f8db703d0998b49744062f179a07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

