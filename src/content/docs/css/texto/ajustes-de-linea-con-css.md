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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPF2ZV3O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGDmAnUFAlpGPcnF%2BS0L5fNWdv6DSHUCAOX9FAAmNC%2BwIhAORNSLpEXohEQhLNzPKYsuIvnpI23MqpOjacJTCgZGCFKv8DCHEQABoMNjM3NDIzMTgzODA1IgxIHO83b4gRwNidwEIq3AOF69r%2FoOuNBTrWVBKF1GRwR7X%2F5r0bHPZb7Yk9k5SrHkn3dG5jCrUcJgL2IAyY1n6EpGKkbi50LfTC7V8kYF4stFHs%2FslWBaESbjsnJd4IX9K%2BKA%2Bzz%2BbGMY9F%2F7gVj1KH8DEn%2Bm00amXVvzlBaj30Xj2sPGqAAByboz%2F9OHyV0Rq1%2BSTGbeptR9h4c0br9UcqZxXDqM1dtQE9vl26Icd2Y5eGC7lfHPQx6aFb3cX75Prudt5mxNBocybU125cHSpJA3PEpV3k10Z4yLxoJBzztIb2dcrr7V2PPor%2FT76MLaSl%2BYdjPHn2AnjfYVSxhL%2BKwg4c%2FLgeXP6cbTIH9%2FX9k2HFYC7PQROsOYvphUg3Y%2F4paKoj1bZo61g0hwnC977k9oUPrCqURjwpUsXg78NQ6bOAwe5a2yIpE7D1jHBhZONGcnfCMwIL0Srbcfqy53qgf56xlSD48unMZBotDB3GWM3zb%2FHo1XF38rElRq2kYOEC5wtrJ%2FBmMTVse8j3JfkTNG6OXi4lLga3C%2FinTkSakQ6p%2BErDp7vJKOoclV4f%2BNwoWZsGN78vhQvn9CZzSsYvb0MLaKo3DI65IfOqJQLxeo5de5RO%2F2MeimyxoX49Fk4z%2FbeG%2BZgQVeNuzDCw34fKBjqkAY88H7YASZyo74jzFMHHgg%2FemGZyezhPq26awc%2FLljzh%2FQQGA08leQwf09o2LxkIGhqc7u0pBx36BxKWttDabxDYQ3Qorx8%2FuaSmdGzB0uGVFKcEljCNeEyngsi6hZ1BN8E5h7WaRwJ65rRS1zCPJbPRhFaFkD77cDioON4%2Bwom8qLMwFS%2FKm3KHs9xvhy%2BFcPYnClzTZzeFIEO29Fo3BRTds0If&X-Amz-Signature=e10aec1d8dac9802a8d89fca2f10390601e6cd52744e5db5864640f9dcbb7c09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPF2ZV3O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGDmAnUFAlpGPcnF%2BS0L5fNWdv6DSHUCAOX9FAAmNC%2BwIhAORNSLpEXohEQhLNzPKYsuIvnpI23MqpOjacJTCgZGCFKv8DCHEQABoMNjM3NDIzMTgzODA1IgxIHO83b4gRwNidwEIq3AOF69r%2FoOuNBTrWVBKF1GRwR7X%2F5r0bHPZb7Yk9k5SrHkn3dG5jCrUcJgL2IAyY1n6EpGKkbi50LfTC7V8kYF4stFHs%2FslWBaESbjsnJd4IX9K%2BKA%2Bzz%2BbGMY9F%2F7gVj1KH8DEn%2Bm00amXVvzlBaj30Xj2sPGqAAByboz%2F9OHyV0Rq1%2BSTGbeptR9h4c0br9UcqZxXDqM1dtQE9vl26Icd2Y5eGC7lfHPQx6aFb3cX75Prudt5mxNBocybU125cHSpJA3PEpV3k10Z4yLxoJBzztIb2dcrr7V2PPor%2FT76MLaSl%2BYdjPHn2AnjfYVSxhL%2BKwg4c%2FLgeXP6cbTIH9%2FX9k2HFYC7PQROsOYvphUg3Y%2F4paKoj1bZo61g0hwnC977k9oUPrCqURjwpUsXg78NQ6bOAwe5a2yIpE7D1jHBhZONGcnfCMwIL0Srbcfqy53qgf56xlSD48unMZBotDB3GWM3zb%2FHo1XF38rElRq2kYOEC5wtrJ%2FBmMTVse8j3JfkTNG6OXi4lLga3C%2FinTkSakQ6p%2BErDp7vJKOoclV4f%2BNwoWZsGN78vhQvn9CZzSsYvb0MLaKo3DI65IfOqJQLxeo5de5RO%2F2MeimyxoX49Fk4z%2FbeG%2BZgQVeNuzDCw34fKBjqkAY88H7YASZyo74jzFMHHgg%2FemGZyezhPq26awc%2FLljzh%2FQQGA08leQwf09o2LxkIGhqc7u0pBx36BxKWttDabxDYQ3Qorx8%2FuaSmdGzB0uGVFKcEljCNeEyngsi6hZ1BN8E5h7WaRwJ65rRS1zCPJbPRhFaFkD77cDioON4%2Bwom8qLMwFS%2FKm3KHs9xvhy%2BFcPYnClzTZzeFIEO29Fo3BRTds0If&X-Amz-Signature=b7eeb020b432a2577098cedc0ec663dc671f41a823b48b7a6309238ffb9a46f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

