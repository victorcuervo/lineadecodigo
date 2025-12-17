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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673KKEASD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFClwoqwYeUlpEpMpQqDPHfFgTiAJyHOfPFJRtX5PTNrAiEA0xzngi9dNuhFn%2FsLNjSMYaFM7hF63%2BXsLGJgTW%2FfEjAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJZISMuETbOjxRei2ircA%2Bp%2Bi67w6ERVUIk7e38WLkWiIg7JV6Tkh%2Fa%2BFPH981BZ%2FvVihCeRlsxuagBdsJpp%2BawnEG68e1BaZOrD%2BmFrGimk9tMyaZWISMSRzFcJ0I9T3UhSZB2qrnqtGDte3iYHy8A7UWY34XdjKUvejhiqVlermQyLDW2zKCxZH3b7xTfWYULuUKzfNl%2Buq%2FZ7qKVkZUg7hODKFVSoyf1fz1u90HrPA5gfZNGC4gxwuA0HDmA5ANd4dh2ZH15Hm7WKQtqWO6BHQPl3gXSz7LEOIU3db%2BH%2B%2BHLPT56oiXRpz%2FdqtHeRhoOyGZhl20AKj7%2F3y7Kg7N6VWNxTlpGDh9KEcMnzTgTUrGLLj8G9mJpeHG%2Fxe6mIgqWPft20855TozYt5YJR57kBjeaQ%2BQJ2Rgq2ho6n%2F14poL%2FAJu1%2Blu6m9S5O7lyGQ5402%2FBsaCuXPjqp9CMq1osnoVL7%2BrziA4RrxzERj988UJSR42dUT%2FVnj3ZmLWECe8Ez%2BsG69vMX7%2BYQ1c5RSZUVSlof%2F5ad0skS%2FdHM%2B5EjgHUxfx56I1CZKL8xH%2BnvQGxzYvnM20ewjLautj9JazefJS9Um9zQE2ma9kI64qii703E2SoGTqIFevcewKe%2F3Uy0LAE6Q0SzH%2FpbMPnhisoGOqUBXafEN07%2FY5V%2FcljcwPL9HgPk2nkdFwhHbdFfxPGg03tujsWfNYAydDtKRU20Z%2BeodbgUP32ojuJxILsPi8aJEJIPtVIw2mION%2BAKMaXFnA2iIhMFVI39sCE3kmODOdCYjODfNV4ce3UnZF7snIPQo4lzxDvR%2F%2B9x0GMsZ2qhFmZi8L9s3q53R1PzdRwAOdR4z%2F5cKOJfJq%2B0k386woxcglkJyjfL&X-Amz-Signature=f4771e0df2975db91897c1a68c48de805e200e7e28e8573a1bcbd011feabfea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673KKEASD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFClwoqwYeUlpEpMpQqDPHfFgTiAJyHOfPFJRtX5PTNrAiEA0xzngi9dNuhFn%2FsLNjSMYaFM7hF63%2BXsLGJgTW%2FfEjAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJZISMuETbOjxRei2ircA%2Bp%2Bi67w6ERVUIk7e38WLkWiIg7JV6Tkh%2Fa%2BFPH981BZ%2FvVihCeRlsxuagBdsJpp%2BawnEG68e1BaZOrD%2BmFrGimk9tMyaZWISMSRzFcJ0I9T3UhSZB2qrnqtGDte3iYHy8A7UWY34XdjKUvejhiqVlermQyLDW2zKCxZH3b7xTfWYULuUKzfNl%2Buq%2FZ7qKVkZUg7hODKFVSoyf1fz1u90HrPA5gfZNGC4gxwuA0HDmA5ANd4dh2ZH15Hm7WKQtqWO6BHQPl3gXSz7LEOIU3db%2BH%2B%2BHLPT56oiXRpz%2FdqtHeRhoOyGZhl20AKj7%2F3y7Kg7N6VWNxTlpGDh9KEcMnzTgTUrGLLj8G9mJpeHG%2Fxe6mIgqWPft20855TozYt5YJR57kBjeaQ%2BQJ2Rgq2ho6n%2F14poL%2FAJu1%2Blu6m9S5O7lyGQ5402%2FBsaCuXPjqp9CMq1osnoVL7%2BrziA4RrxzERj988UJSR42dUT%2FVnj3ZmLWECe8Ez%2BsG69vMX7%2BYQ1c5RSZUVSlof%2F5ad0skS%2FdHM%2B5EjgHUxfx56I1CZKL8xH%2BnvQGxzYvnM20ewjLautj9JazefJS9Um9zQE2ma9kI64qii703E2SoGTqIFevcewKe%2F3Uy0LAE6Q0SzH%2FpbMPnhisoGOqUBXafEN07%2FY5V%2FcljcwPL9HgPk2nkdFwhHbdFfxPGg03tujsWfNYAydDtKRU20Z%2BeodbgUP32ojuJxILsPi8aJEJIPtVIw2mION%2BAKMaXFnA2iIhMFVI39sCE3kmODOdCYjODfNV4ce3UnZF7snIPQo4lzxDvR%2F%2B9x0GMsZ2qhFmZi8L9s3q53R1PzdRwAOdR4z%2F5cKOJfJq%2B0k386woxcglkJyjfL&X-Amz-Signature=72f46fb1ac139eff2801f09b6fda088746d00592339eed78c5f1816df63c80e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

