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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWOS4TX4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsGx%2BMpBaN75km3VatyfQY%2F%2BiWG14rU2Zyt%2BAeHz1ULwIgHIvFzFV9TWc%2F9k3SbInvxS9uz12LZxgycOD58PbCVcUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJgp2cyr1hE8PE9uircA9ICwKEG6f2CBgE6i6n%2FSFPnxRYQ85HsUST33GpmZRJ4JljST8j5jmzEIF%2F%2BDn3nMQj3pNis54DyI4riBqWKra19fzbdqYwm0KevUijUhZ0OSaBecjjyZ%2Bz7cbt9ig03QjiAQ%2BD2U0VgcpQ2uTkZN8t4vuFttXLIqbRmt%2BdbnhHkBmnxfU5wdx1TPLvQjUz57J9%2FT2bhTHypwUQ282cHCcvpqUaXhBhpKfZG9AkHDmqOwi6WTyhto35LUds3TrKc49JmaemYbu0cXzwjK8SzYxjklqpIDkcwfiY3r6ncCQ6d39NxIUwUeCvlyCBUZQTPkF%2Fc8B0Us%2BdX%2B6cV5n%2B2%2BS6R4SPFRnir6afQugjM4m0PtOwO%2Bm3ZLGplgreW8akuUheTLUN9ZFdIVoyB8V07DqzV3EToseYNuiClUBTTv5VB6%2BnQyKnlHEyIarrSeLbGspMq55vwGkbKCSScLyhhxkoXjSxIH%2FYhspHulSdwco6ac1IBF8gqlZy6DBL3hOPQJWbnPhaelkIFc4bkHm0gh5pbA9g%2FYr1KnEzMeAJqO%2FHKfxaLkJHXQu1OVvHW4vXAdB7E3bo1orAeQ6j%2BFQ1s%2Ba8fIV6uE2kyn2uRLKFJ6RQfg%2FHK0oVdyUZhsK%2FQMLiKjMoGOqUBvC4T77MqFKkP%2FnJXetvLRy12CxTSp60pFh6gRTl%2FHjRRb8yRLQBbVkLfMclkbqOqlzWQuGjwfaQskWYguWkYyUENlwhhNIX%2FZTpwdO7HTUOnZDQZBagPzU5NmvagBwDnOuZTsAtZcwAUOUpgbj%2Fq%2BSMW461%2FR3vsiD3D9NmFde0OP3Bz3GdZbcuhalscvaNDUUStk%2B4eD%2Bd3dZXSscoW7WOXX5bT&X-Amz-Signature=aadfb80431a587d245e3c9d11173c6415566b612cd73d98357a0a54b518054a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWOS4TX4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsGx%2BMpBaN75km3VatyfQY%2F%2BiWG14rU2Zyt%2BAeHz1ULwIgHIvFzFV9TWc%2F9k3SbInvxS9uz12LZxgycOD58PbCVcUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJgp2cyr1hE8PE9uircA9ICwKEG6f2CBgE6i6n%2FSFPnxRYQ85HsUST33GpmZRJ4JljST8j5jmzEIF%2F%2BDn3nMQj3pNis54DyI4riBqWKra19fzbdqYwm0KevUijUhZ0OSaBecjjyZ%2Bz7cbt9ig03QjiAQ%2BD2U0VgcpQ2uTkZN8t4vuFttXLIqbRmt%2BdbnhHkBmnxfU5wdx1TPLvQjUz57J9%2FT2bhTHypwUQ282cHCcvpqUaXhBhpKfZG9AkHDmqOwi6WTyhto35LUds3TrKc49JmaemYbu0cXzwjK8SzYxjklqpIDkcwfiY3r6ncCQ6d39NxIUwUeCvlyCBUZQTPkF%2Fc8B0Us%2BdX%2B6cV5n%2B2%2BS6R4SPFRnir6afQugjM4m0PtOwO%2Bm3ZLGplgreW8akuUheTLUN9ZFdIVoyB8V07DqzV3EToseYNuiClUBTTv5VB6%2BnQyKnlHEyIarrSeLbGspMq55vwGkbKCSScLyhhxkoXjSxIH%2FYhspHulSdwco6ac1IBF8gqlZy6DBL3hOPQJWbnPhaelkIFc4bkHm0gh5pbA9g%2FYr1KnEzMeAJqO%2FHKfxaLkJHXQu1OVvHW4vXAdB7E3bo1orAeQ6j%2BFQ1s%2Ba8fIV6uE2kyn2uRLKFJ6RQfg%2FHK0oVdyUZhsK%2FQMLiKjMoGOqUBvC4T77MqFKkP%2FnJXetvLRy12CxTSp60pFh6gRTl%2FHjRRb8yRLQBbVkLfMclkbqOqlzWQuGjwfaQskWYguWkYyUENlwhhNIX%2FZTpwdO7HTUOnZDQZBagPzU5NmvagBwDnOuZTsAtZcwAUOUpgbj%2Fq%2BSMW461%2FR3vsiD3D9NmFde0OP3Bz3GdZbcuhalscvaNDUUStk%2B4eD%2Bd3dZXSscoW7WOXX5bT&X-Amz-Signature=8967e0f7f391aa0bc16c8598d9b1ba3e9d3818d513e8f650ce382a2991ece1db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

