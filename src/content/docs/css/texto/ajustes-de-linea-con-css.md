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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE3O2RME%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChS1Janp0wHAikG9Jn6allABuCl%2FH3jNTwLS3GgSxKTgIhALqCY2qoUAyDggojMLG3IzM0hWynExGy5CcDPY6xqAnKKv8DCHkQABoMNjM3NDIzMTgzODA1IgzglQqXOCZc0JGWbooq3AMC8x293ZsTtyvIRJpobsUeZoMXORVmrAFEM5UDADD7J7F3Yfv3xhMi8MQygbQ2gFSFZn7xvEkmPRTeon55BERUdUojvZx4q9OIMhYEthPcrAeM06pql72I3iwJEIUEveO2PyFKu702Ubb6x1qqswDrIcVYA5FQSu5P8LuTIuczFblS%2FCbqpAx%2FEMZmp5OFZPskxbg5wltYEb3BwxdEyGMrcQbfwoOjGUFoWj28EK%2FCM2QwF76w4Ju5FmzBEWrij3kBYTgK8P5f1exYmPDAdCsdc7MIGhSdrfIBYunuJk339BSsnmQVBHiHm2B7wKPm0ZIOzF8tRP%2F5pPZF065KfLsVxkDV%2F9lop58%2BY1jHGX4MBwPgojRVQo4mKTMPm1o6XfCcyMOLkH4g%2BStuyNt202OyqRPh10ae1frqnkw0pqAXIIU6lIhOQt4g0M6jhf3%2FgDTWwCNOOBufBbybVnyZ868jNC2S6bcNVIZbi6P58uqFxuvauuhbwV639XRYxWgEz6ue3rljRJA1bdKWzbFfQm7lq3UaEUdqkBQ5T8eQIA0YaLTmPobtGmrTArevpz03apBpm6lJEBcQ6kKI3JiRfrXgLzP7yZlS%2FNc8ImaXH2%2BzpQqNGYbgP2wO3J5QlzCguInKBjqkAUjIzB7qtLbZNX15aBR%2Bd7x0v%2FsjDnl77kALuX7JsBBGopPLoCEj8XLxSGKHI9F9B9NSt8z%2FFXfbCh8vAEAZ8zgsFVqBqhiGD%2FFRFXlayq4X6DjTrE41Aq5xjcW0%2BVIgIowdOlQX1OTkXnwOYy%2F7RNXzaqreWwlIJ%2B%2B8ZNHxeo1pbai3y7mbDB%2FjxclmbiZXwFaz%2FpAZ7yvdGG4qJnbdEqAhN1JA&X-Amz-Signature=18d21cb202bdfd5923e8663cf2171c57cac4739a55c37ac982e5442a18d74469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE3O2RME%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChS1Janp0wHAikG9Jn6allABuCl%2FH3jNTwLS3GgSxKTgIhALqCY2qoUAyDggojMLG3IzM0hWynExGy5CcDPY6xqAnKKv8DCHkQABoMNjM3NDIzMTgzODA1IgzglQqXOCZc0JGWbooq3AMC8x293ZsTtyvIRJpobsUeZoMXORVmrAFEM5UDADD7J7F3Yfv3xhMi8MQygbQ2gFSFZn7xvEkmPRTeon55BERUdUojvZx4q9OIMhYEthPcrAeM06pql72I3iwJEIUEveO2PyFKu702Ubb6x1qqswDrIcVYA5FQSu5P8LuTIuczFblS%2FCbqpAx%2FEMZmp5OFZPskxbg5wltYEb3BwxdEyGMrcQbfwoOjGUFoWj28EK%2FCM2QwF76w4Ju5FmzBEWrij3kBYTgK8P5f1exYmPDAdCsdc7MIGhSdrfIBYunuJk339BSsnmQVBHiHm2B7wKPm0ZIOzF8tRP%2F5pPZF065KfLsVxkDV%2F9lop58%2BY1jHGX4MBwPgojRVQo4mKTMPm1o6XfCcyMOLkH4g%2BStuyNt202OyqRPh10ae1frqnkw0pqAXIIU6lIhOQt4g0M6jhf3%2FgDTWwCNOOBufBbybVnyZ868jNC2S6bcNVIZbi6P58uqFxuvauuhbwV639XRYxWgEz6ue3rljRJA1bdKWzbFfQm7lq3UaEUdqkBQ5T8eQIA0YaLTmPobtGmrTArevpz03apBpm6lJEBcQ6kKI3JiRfrXgLzP7yZlS%2FNc8ImaXH2%2BzpQqNGYbgP2wO3J5QlzCguInKBjqkAUjIzB7qtLbZNX15aBR%2Bd7x0v%2FsjDnl77kALuX7JsBBGopPLoCEj8XLxSGKHI9F9B9NSt8z%2FFXfbCh8vAEAZ8zgsFVqBqhiGD%2FFRFXlayq4X6DjTrE41Aq5xjcW0%2BVIgIowdOlQX1OTkXnwOYy%2F7RNXzaqreWwlIJ%2B%2B8ZNHxeo1pbai3y7mbDB%2FjxclmbiZXwFaz%2FpAZ7yvdGG4qJnbdEqAhN1JA&X-Amz-Signature=cead7a9dd8fa1ea6811f53374ac2965c7d7141e4e0e668b087e2c3a1f0b3f2a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

