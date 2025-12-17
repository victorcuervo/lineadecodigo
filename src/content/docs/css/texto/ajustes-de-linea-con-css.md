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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I6YO7GU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPPvAvTQyTU2dUDxZG6Tt2JVdAkox%2Fzf%2Bvv4KOqwiBcQIgEh9QjcaGEpkEH7nrL2kQ9Z%2BZAPIfquAo56CEWzi5XLAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDBz0BijvVXuc2kVWwCrcA4qkEeUx5RC%2B7eknVNwfLTdG%2BR22jFcGNAcpleI4wWWV%2B8KTIP143x9cs6n8qehpcc2qRZkxH69C6BZypsh2fCcUPsMf%2FbWMxXRREIxNPC14B%2BXiBKnCrapNSOPVTBE3E1MAjMK%2FMMLEzyQkiObhcwH2I7OHSBrCng6F%2FTBMcj113qaUAhgbBqplUvT9cn6qdIV3SYQcdIQ3%2BRZTjO2l%2BXatS8k7VG%2BXprhvg0%2FPeodH0sQGCsae%2Fj5rW8y1et9Or2j1KxtBwyufA7sYNgXS5gZVHdH1KS3vXGxAQX4F51S0iZ6VdnGdVM5q9Em2LJkkLWtCBIT8esvbOkCwz0SGE0jRhAi5nPHExNxUrcb1VRey7f%2F3kBMOzKoSeg%2Bzvwi6UfLHAg18grR3I1hUXtWvda95Ug%2BpSGv9p1mVlcaxbie96CJKbwERLXegsOuU4CVIfu3OllI7bxHo6Arhznely13ZsMfoXQ%2BI1OrGnAKCge9G5vsuqJy637G2b2t2GNDm%2F8KERJn8qXX73uDKmpQwr4WbFOUvB67VRcwUAkG49mMuOL8mv9v2YUysqGKx03rMvSqz597aU8vrKkGuDhdeA%2B%2F01qC7DR1koHe1TiL8R5s2WkbUEkc15%2FnXlVJaMJbjisoGOqUB25wkfZmOimToKtf%2Bxv4db3gjBVnMxLAznLeOZp1117fqcWo5cTFlF%2BS4LWE%2B9BVWZFsR9i%2BfivU%2BzXGXzXgDlGfRv%2FV6FoN7lqWrMN4aJIGbNfAeNQ26wH8SFDpU36GWaNyKti%2BTkpjFq4Ca3CA%2BbzfpRoS%2F9gqA%2BxeFAZCsYTgq1GFHRkT%2FprRhA4DVbZBhokqlvjryJwYzPnAvnB%2BYcbjCxXsZ&X-Amz-Signature=508850ca150a9fc74af268a0f6b6fbc14ac422f61ce296a9264d6ddfc4d8b08c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I6YO7GU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPPvAvTQyTU2dUDxZG6Tt2JVdAkox%2Fzf%2Bvv4KOqwiBcQIgEh9QjcaGEpkEH7nrL2kQ9Z%2BZAPIfquAo56CEWzi5XLAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDBz0BijvVXuc2kVWwCrcA4qkEeUx5RC%2B7eknVNwfLTdG%2BR22jFcGNAcpleI4wWWV%2B8KTIP143x9cs6n8qehpcc2qRZkxH69C6BZypsh2fCcUPsMf%2FbWMxXRREIxNPC14B%2BXiBKnCrapNSOPVTBE3E1MAjMK%2FMMLEzyQkiObhcwH2I7OHSBrCng6F%2FTBMcj113qaUAhgbBqplUvT9cn6qdIV3SYQcdIQ3%2BRZTjO2l%2BXatS8k7VG%2BXprhvg0%2FPeodH0sQGCsae%2Fj5rW8y1et9Or2j1KxtBwyufA7sYNgXS5gZVHdH1KS3vXGxAQX4F51S0iZ6VdnGdVM5q9Em2LJkkLWtCBIT8esvbOkCwz0SGE0jRhAi5nPHExNxUrcb1VRey7f%2F3kBMOzKoSeg%2Bzvwi6UfLHAg18grR3I1hUXtWvda95Ug%2BpSGv9p1mVlcaxbie96CJKbwERLXegsOuU4CVIfu3OllI7bxHo6Arhznely13ZsMfoXQ%2BI1OrGnAKCge9G5vsuqJy637G2b2t2GNDm%2F8KERJn8qXX73uDKmpQwr4WbFOUvB67VRcwUAkG49mMuOL8mv9v2YUysqGKx03rMvSqz597aU8vrKkGuDhdeA%2B%2F01qC7DR1koHe1TiL8R5s2WkbUEkc15%2FnXlVJaMJbjisoGOqUB25wkfZmOimToKtf%2Bxv4db3gjBVnMxLAznLeOZp1117fqcWo5cTFlF%2BS4LWE%2B9BVWZFsR9i%2BfivU%2BzXGXzXgDlGfRv%2FV6FoN7lqWrMN4aJIGbNfAeNQ26wH8SFDpU36GWaNyKti%2BTkpjFq4Ca3CA%2BbzfpRoS%2F9gqA%2BxeFAZCsYTgq1GFHRkT%2FprRhA4DVbZBhokqlvjryJwYzPnAvnB%2BYcbjCxXsZ&X-Amz-Signature=067f86e94662ed5316074f654987f93980dce2dbe52b59dc53855e2e17345d41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

