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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LRJERWH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnjRb3C9HnMBaIDyiXQn3ENYl6Y9JNlYEq%2FTzOD4EaMQIgC1itYnXIh%2BUfaSnLDFQZowYoDlj6gtZzYIzNjAT7aYkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPliuz2lqruR5GLIESrcAyi2BXfqn5AtuoQQyV481q2MsiqpdCcY0vLpCN%2B9%2FJTSHpMS2i7OZuFabImJyMKjyXyxe62WIFYU499nEwgtMs7kh3id8edwPbBj8HVwiAfM58IDjvYJGs36drbiLaSY1mrHhoWft4F1tqk38dFHw1ubvX3rS0nQF%2B6kHtT5%2FHCzhAZzlZn2tSVAYOYC5xqhAHthByg7QrAL8Sz1NVha7Ieyain3CTbWjTizQF%2FmnEBJp%2Bv5yPLty6hV%2FVoNTfa4BVuOuO5pAlTFKp96FyJsUZ7uZPS8sRv5javPXAJXkBNavMtJ1JMONeresX8NTcuBVDjUaXe%2F4FONtMGdwFRaD5dhAHNN4PCVWzx9eWmYTWWXSudFoUJHQ9RurbT4XyufxhcnRgx%2FATnGl21OwdpX8tktMoPNjv5LwFIloDO74uhtLmQwMtxRt6g%2FFDfpGw8PeXtrhxXvBnu19Z6pQDySIz7vmAR5PQylr3Wqqa0IAcUClWZR53mVqbC674T5Qch2nzQ3%2BH4YJ1cDIflwOIbYwamEdm7msNoccuLyfH6peGHkwYQGvPsqvfOA2n2ROoLZkjol5o%2FC79Lz%2BNKk5X3jPP6hNKc6Gv1Q8Lku91osP0fgxKD%2Bc0TpEu38O%2F5OMN%2Bfi8oGOqUBsVClXplqQxmgytUuSkmr1%2FCHPHRcuMxZW0K7dKXC0QE8R0AeHWt%2F%2BvMp87pCnbs6D9yEGJFtJfB9F5wg5MjrAsd9ODckwcUYcuKb%2BA6yATLUlItR7F94XL%2F1UML5yuruPk8EYX09rgFOS0Fy16Snz6i7DQO8iQ4SYPa%2BXfGz2Z9w8cY6ZSx6IfShmOH9cMf%2BjsD2pfOAlO7AOcJyC%2BKGSAbI%2F4UF&X-Amz-Signature=c7bad6cd257e893989b9357aa7aba42d8b37b92efd01fcfca9a56d149aeadfcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LRJERWH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnjRb3C9HnMBaIDyiXQn3ENYl6Y9JNlYEq%2FTzOD4EaMQIgC1itYnXIh%2BUfaSnLDFQZowYoDlj6gtZzYIzNjAT7aYkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPliuz2lqruR5GLIESrcAyi2BXfqn5AtuoQQyV481q2MsiqpdCcY0vLpCN%2B9%2FJTSHpMS2i7OZuFabImJyMKjyXyxe62WIFYU499nEwgtMs7kh3id8edwPbBj8HVwiAfM58IDjvYJGs36drbiLaSY1mrHhoWft4F1tqk38dFHw1ubvX3rS0nQF%2B6kHtT5%2FHCzhAZzlZn2tSVAYOYC5xqhAHthByg7QrAL8Sz1NVha7Ieyain3CTbWjTizQF%2FmnEBJp%2Bv5yPLty6hV%2FVoNTfa4BVuOuO5pAlTFKp96FyJsUZ7uZPS8sRv5javPXAJXkBNavMtJ1JMONeresX8NTcuBVDjUaXe%2F4FONtMGdwFRaD5dhAHNN4PCVWzx9eWmYTWWXSudFoUJHQ9RurbT4XyufxhcnRgx%2FATnGl21OwdpX8tktMoPNjv5LwFIloDO74uhtLmQwMtxRt6g%2FFDfpGw8PeXtrhxXvBnu19Z6pQDySIz7vmAR5PQylr3Wqqa0IAcUClWZR53mVqbC674T5Qch2nzQ3%2BH4YJ1cDIflwOIbYwamEdm7msNoccuLyfH6peGHkwYQGvPsqvfOA2n2ROoLZkjol5o%2FC79Lz%2BNKk5X3jPP6hNKc6Gv1Q8Lku91osP0fgxKD%2Bc0TpEu38O%2F5OMN%2Bfi8oGOqUBsVClXplqQxmgytUuSkmr1%2FCHPHRcuMxZW0K7dKXC0QE8R0AeHWt%2F%2BvMp87pCnbs6D9yEGJFtJfB9F5wg5MjrAsd9ODckwcUYcuKb%2BA6yATLUlItR7F94XL%2F1UML5yuruPk8EYX09rgFOS0Fy16Snz6i7DQO8iQ4SYPa%2BXfGz2Z9w8cY6ZSx6IfShmOH9cMf%2BjsD2pfOAlO7AOcJyC%2BKGSAbI%2F4UF&X-Amz-Signature=6b743bbc9859eeb9eb56f46782930765b753af52af2e5da865f83c526b2c6506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

