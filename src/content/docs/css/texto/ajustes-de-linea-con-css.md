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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVJHWZUL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBra8VLf5GFLrHgOVfgNdDw1adO6388xx98CRyUc6JTtAiAoVBlWJ%2FNjd3dp3zuwpG51x5DSaau%2FtHAdjAKw9%2BffWSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMe7koAm80kh2LvtCEKtwDVys7IV%2FZCzBvsx0Pzv%2FOBiFTnTWntgtyEXEgGjQ%2B4aQmeedcQ0BqoJzPLPS7VZfzjJvVIeYxIKsQAHdsv5N8R%2BNwi8pOrZy4o9L%2BQ4%2FKzG58TpoZAvi8jIq27Zx1WYz4Gzreq7%2BGRH%2Bub5dPp6D1AmW72%2F1TbCwhmvH2scDIuSY4RaomyX%2FKoUE%2B2Y%2F%2F3z5Ur5gfVeu76vyyRLjRJyAnTFwk%2Bpw3h0iLFrm1Z%2Fe8KNKtlDzbfvksaGKTEdViWNM0gRZrIE9%2B6uUBfT8e4EoUeTNVgMZHuOtg%2FHX5RDe62pAIYxiDZvSFiw8ODaDp0it0ntn2aW0VbTpMWpbix1sJrIYCd%2BMnjhB6nzH%2FgZC%2FV7dkHjmmY6FPRo8Muj1tUDOsIJ0bSiwUQnMlI5dhMg3QvQGTA57kGC6VOqCWr7BCpDxIHONsxfvXEunXhqdPpqNu0dknl4178nFB930X%2BP4mwqJuDHpDtmTe8LK8xxO0BRpBjQI5x7aZLwNnXx%2B9trKy6oqYCU2aMpUW9njHNArJQ3wjU1pCMt%2BeY6jHnw41KE%2FvuKASMjErZ34RBo%2B6huqYg4qXyF8%2B62S1h%2F2vhHptKTsnozN8oT87GrshpxcuZx0JH7lIDb6VNIrNdOQw8oGJygY6pgElDqwjppe9h%2BdNnzu3tzpCHQ%2BuXRgOBCHpYa8%2FD77RT7im3CglkT9x3d2xUZNKth63DqRQtJRaLCDwJ45MIJVIfXKAK58TQs5s%2BmVsPKp1Pws%2FmJOHqSD9UmAKfARibeg4a345hMTsZi8YHPueBDSZa0Bc%2F%2FVVnONf%2FzxMBfWAv2LCeSpb6Kw%2FW%2F1adjYHSHE6BWlRvcMZzBFoyne0lFJJ3k5YC0q6&X-Amz-Signature=be0a6a039e290d93be827ba3a293dda26121d66e8347ff9b9ff52e04f1bd41f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVJHWZUL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBra8VLf5GFLrHgOVfgNdDw1adO6388xx98CRyUc6JTtAiAoVBlWJ%2FNjd3dp3zuwpG51x5DSaau%2FtHAdjAKw9%2BffWSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMe7koAm80kh2LvtCEKtwDVys7IV%2FZCzBvsx0Pzv%2FOBiFTnTWntgtyEXEgGjQ%2B4aQmeedcQ0BqoJzPLPS7VZfzjJvVIeYxIKsQAHdsv5N8R%2BNwi8pOrZy4o9L%2BQ4%2FKzG58TpoZAvi8jIq27Zx1WYz4Gzreq7%2BGRH%2Bub5dPp6D1AmW72%2F1TbCwhmvH2scDIuSY4RaomyX%2FKoUE%2B2Y%2F%2F3z5Ur5gfVeu76vyyRLjRJyAnTFwk%2Bpw3h0iLFrm1Z%2Fe8KNKtlDzbfvksaGKTEdViWNM0gRZrIE9%2B6uUBfT8e4EoUeTNVgMZHuOtg%2FHX5RDe62pAIYxiDZvSFiw8ODaDp0it0ntn2aW0VbTpMWpbix1sJrIYCd%2BMnjhB6nzH%2FgZC%2FV7dkHjmmY6FPRo8Muj1tUDOsIJ0bSiwUQnMlI5dhMg3QvQGTA57kGC6VOqCWr7BCpDxIHONsxfvXEunXhqdPpqNu0dknl4178nFB930X%2BP4mwqJuDHpDtmTe8LK8xxO0BRpBjQI5x7aZLwNnXx%2B9trKy6oqYCU2aMpUW9njHNArJQ3wjU1pCMt%2BeY6jHnw41KE%2FvuKASMjErZ34RBo%2B6huqYg4qXyF8%2B62S1h%2F2vhHptKTsnozN8oT87GrshpxcuZx0JH7lIDb6VNIrNdOQw8oGJygY6pgElDqwjppe9h%2BdNnzu3tzpCHQ%2BuXRgOBCHpYa8%2FD77RT7im3CglkT9x3d2xUZNKth63DqRQtJRaLCDwJ45MIJVIfXKAK58TQs5s%2BmVsPKp1Pws%2FmJOHqSD9UmAKfARibeg4a345hMTsZi8YHPueBDSZa0Bc%2F%2FVVnONf%2FzxMBfWAv2LCeSpb6Kw%2FW%2F1adjYHSHE6BWlRvcMZzBFoyne0lFJJ3k5YC0q6&X-Amz-Signature=beaf75fcf5b93979dae2f09b761f72102163786a44a1233b25151fcb53b2628a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

