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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IHRRF4F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLcBKP38gsUlSG%2FiV0abtOErlS31EcTkbkoeIrkrImAAiA6au%2Fop0CologihbUtmWpGctAXB6sSGHZJfUTuEV6MdyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA91CrU%2BMl2NJUivbKtwD7UJwpP8%2B0KtIUhiwZf%2F2Hs9bREAFOnYq703%2B%2BJ0RnG%2B8huCNyv7xFjQBhPGdsBAk%2BmJPdh2bqBtAkVpKDyYtpKFuFc4ndsf8vebCY16FB9OXM0Xe%2FYc6vDeN0QoUWWiwdSiWzhHfF4iBIZFhzWUSVp8p5yPiTvxaucKdirbIYHcOW38K%2FytWG9M%2FunnVDpwHcS69qcopVPjRVq49GbO4uGSU65sDXhcaasoWSuwpyYmZsuuhdn370A395A9Scqfogz81xcDu8RgiSvQPTM8%2BMEjjCsKySTwOiIm7c%2FlkguUIC4KOnsE9tzRg8PkQY4Hx%2BX85gjVor1KNUL1c158rsIAcn6ZSlVW%2FJnmJC6f53DprW9MeyXZYzqQlpre7wsPEfW7DjBdw8p7fQOvxFyBxx1tzTTwnia3M5HcKInC0%2B5NBVCVhl1xsphn0TzqEWjKO%2BRoMcUFB%2FPvNw6o%2FbyVQ5QCEybV41TpOJ51l7v7Y3rA%2FmETvhXK7z9dM42MDv8vTpBo1b%2BjD7jM%2Bpkc3LCRpvMxUQzPOE2SbpP4wVNmL5gVRZyzOzbQ7Oj2lb%2BFoctZPwr7TiYzJcMDyURTzaF%2FuM%2FJoofYBhbSJQQninP8%2FmUSzI5hBznjxMoj9%2FU4w64CLygY6pgHGFLEd4aSOcr1jUDG2LmYXynJ3AX9uWHJiC77EohB9Pb6Zj%2B71u6g%2BrCtvHGAirMIxZyif4qCOhIOIJBXyyONmEh3%2Fjj5DC2jiTtL2DkS3zcvyYxL5O%2BbHyBi5mWVptifvDKP5CqlANVULaO521B99frOmEgj1feKYrL6brpg9dfNz4oAkeEtNu%2BKFEZvahdbfJd%2B740GCWCDgCyJC4Qrjqf84Fz9%2B&X-Amz-Signature=a78ab81cc892c31396e1cdf58ef639dbf4de84bd166cdc11b1b82d3680d3ea5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IHRRF4F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLcBKP38gsUlSG%2FiV0abtOErlS31EcTkbkoeIrkrImAAiA6au%2Fop0CologihbUtmWpGctAXB6sSGHZJfUTuEV6MdyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA91CrU%2BMl2NJUivbKtwD7UJwpP8%2B0KtIUhiwZf%2F2Hs9bREAFOnYq703%2B%2BJ0RnG%2B8huCNyv7xFjQBhPGdsBAk%2BmJPdh2bqBtAkVpKDyYtpKFuFc4ndsf8vebCY16FB9OXM0Xe%2FYc6vDeN0QoUWWiwdSiWzhHfF4iBIZFhzWUSVp8p5yPiTvxaucKdirbIYHcOW38K%2FytWG9M%2FunnVDpwHcS69qcopVPjRVq49GbO4uGSU65sDXhcaasoWSuwpyYmZsuuhdn370A395A9Scqfogz81xcDu8RgiSvQPTM8%2BMEjjCsKySTwOiIm7c%2FlkguUIC4KOnsE9tzRg8PkQY4Hx%2BX85gjVor1KNUL1c158rsIAcn6ZSlVW%2FJnmJC6f53DprW9MeyXZYzqQlpre7wsPEfW7DjBdw8p7fQOvxFyBxx1tzTTwnia3M5HcKInC0%2B5NBVCVhl1xsphn0TzqEWjKO%2BRoMcUFB%2FPvNw6o%2FbyVQ5QCEybV41TpOJ51l7v7Y3rA%2FmETvhXK7z9dM42MDv8vTpBo1b%2BjD7jM%2Bpkc3LCRpvMxUQzPOE2SbpP4wVNmL5gVRZyzOzbQ7Oj2lb%2BFoctZPwr7TiYzJcMDyURTzaF%2FuM%2FJoofYBhbSJQQninP8%2FmUSzI5hBznjxMoj9%2FU4w64CLygY6pgHGFLEd4aSOcr1jUDG2LmYXynJ3AX9uWHJiC77EohB9Pb6Zj%2B71u6g%2BrCtvHGAirMIxZyif4qCOhIOIJBXyyONmEh3%2Fjj5DC2jiTtL2DkS3zcvyYxL5O%2BbHyBi5mWVptifvDKP5CqlANVULaO521B99frOmEgj1feKYrL6brpg9dfNz4oAkeEtNu%2BKFEZvahdbfJd%2B740GCWCDgCyJC4Qrjqf84Fz9%2B&X-Amz-Signature=1a71f8f1bbf111db0dc79675f95fcaacd8e09c3bbf29917cc20ea17ce7ccc151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

