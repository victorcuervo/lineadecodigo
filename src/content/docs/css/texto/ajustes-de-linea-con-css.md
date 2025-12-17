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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSUFUTX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUh3oNJw66cO6wJDvWDlRR54KJV72tak0gAB%2B7RVZ75AiEAunp8wh3RYbCjL9f4PezFenBu1FXFTH9B44r879%2B%2FHREqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQpjfFV5zWnglBUnSrcAy3NoboutY2a%2BhqIegvMhP7xLyQrvTgeqzzBb%2BVp9CFwrRrhpM%2BQjK%2BL79gUvfwtP1UfFl%2B%2FQtNt1TgrmX1pGzHvMuHaONMSYCavca706M%2FlYu7P3VdADmEL9D8dw%2FG9KGMT7g7wEs3Jk462OWYfoVJt%2BEOGpTCYfl3dkxn4uOnbqPrG7CC%2BO26Ky1I9o%2BVWbZcN%2FV3bv%2F78HZKWtoHmHRJZgi5L5joOJCxOpxWb%2FQQBY%2FPZcse4rZfUZ3cqqcYwdl3b3XZnXnrqFgyAo65vhtsUqceG2xLoaKYq5R0De4YiGhv8Sd%2FsMqy7Wrlu7BvLgygVa1ry5f8bl29jnoIHgCRuSG64Yb0XWM%2BhseW%2FfukabiQnZRsJN3eH%2BZvtr9pXEGmI8WWL1F9KpJIYId0saKM3uS6IjbKivlwJTZmX9gJqSd0gvsj4pzow7Kx53fMGWgAM7d2BqqU0ck%2BmeWGvVoA%2FAqNBU%2F3o6KH3BhG1d%2F6t6IzVtZqUPG3GPpZvIhzursYI1wrb3avXD5juTz6EwDRQwcETyyzLk0TE05dhnZOjC43EyZXPXu7MkztdMn0URpxVwi2vbUSQug5XQ76QMv2Uj3aIGqEKl5yEAcuFLU%2FnItq8ALN8lhWnz3ISMMygi8oGOqUBATjhtivHPNJANaAIPOLwETEWNi7qG7Wfye6tJacZeH1%2F8xelDSHW7vkRoh%2BMCDDb%2FDm0Q3qHyVWDhx1x9YovS%2B7HRpnLyRjbzeFi0dnRYElNU3u2yMPmCPIf%2BMHJHsP6XflM85dNYFZPOrAxVqPUcaIg8ody7fSNo0AB1KXEwr1yWGlbj2OKEBYkPKTO7WVsgt6n86DqHon3wxz4EhkdMVTflUq%2B&X-Amz-Signature=95db72ca393cc1bdb37139885c2ef452f7fddb0a5554f33fa3de232b62a49bca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSUFUTX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUh3oNJw66cO6wJDvWDlRR54KJV72tak0gAB%2B7RVZ75AiEAunp8wh3RYbCjL9f4PezFenBu1FXFTH9B44r879%2B%2FHREqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQpjfFV5zWnglBUnSrcAy3NoboutY2a%2BhqIegvMhP7xLyQrvTgeqzzBb%2BVp9CFwrRrhpM%2BQjK%2BL79gUvfwtP1UfFl%2B%2FQtNt1TgrmX1pGzHvMuHaONMSYCavca706M%2FlYu7P3VdADmEL9D8dw%2FG9KGMT7g7wEs3Jk462OWYfoVJt%2BEOGpTCYfl3dkxn4uOnbqPrG7CC%2BO26Ky1I9o%2BVWbZcN%2FV3bv%2F78HZKWtoHmHRJZgi5L5joOJCxOpxWb%2FQQBY%2FPZcse4rZfUZ3cqqcYwdl3b3XZnXnrqFgyAo65vhtsUqceG2xLoaKYq5R0De4YiGhv8Sd%2FsMqy7Wrlu7BvLgygVa1ry5f8bl29jnoIHgCRuSG64Yb0XWM%2BhseW%2FfukabiQnZRsJN3eH%2BZvtr9pXEGmI8WWL1F9KpJIYId0saKM3uS6IjbKivlwJTZmX9gJqSd0gvsj4pzow7Kx53fMGWgAM7d2BqqU0ck%2BmeWGvVoA%2FAqNBU%2F3o6KH3BhG1d%2F6t6IzVtZqUPG3GPpZvIhzursYI1wrb3avXD5juTz6EwDRQwcETyyzLk0TE05dhnZOjC43EyZXPXu7MkztdMn0URpxVwi2vbUSQug5XQ76QMv2Uj3aIGqEKl5yEAcuFLU%2FnItq8ALN8lhWnz3ISMMygi8oGOqUBATjhtivHPNJANaAIPOLwETEWNi7qG7Wfye6tJacZeH1%2F8xelDSHW7vkRoh%2BMCDDb%2FDm0Q3qHyVWDhx1x9YovS%2B7HRpnLyRjbzeFi0dnRYElNU3u2yMPmCPIf%2BMHJHsP6XflM85dNYFZPOrAxVqPUcaIg8ody7fSNo0AB1KXEwr1yWGlbj2OKEBYkPKTO7WVsgt6n86DqHon3wxz4EhkdMVTflUq%2B&X-Amz-Signature=3ac4f25df6aac5237692ea12bfd2745f4f58726c2c944a78cb1ce91963baddeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

