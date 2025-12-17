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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFKL4JIU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiPq2EjukDpZTlxSk3GYIvfBuWMX3D7fTQXEydgARAIwIgDFxz0iZIFbMW81XmennHfBhWe6QAz8TrJfm9VJdqvnMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHudaDH2P57zSN66aSrcAyqQfYx4%2FN5z7Dgh%2FUt6jO4KJoxGeLI7wSLyO0jBU6n1SZA2W7hNNdz0EI19AdMVvfN%2FwwUSifj6CoY36v%2BplTqdmWroaSjkJpTGpXP8AN1LVbPt8cjKT4OHR6KMXY9fKw3Q%2BU9egWo5DOIXTy7TVLiNQ5t9K%2B%2Fbz4hibE0CGg3q56I7bVn98%2FCYTShS1G97g1daqf6YVAkMvoGeA1kor%2FGSPPDkDSgoJQUU8ZB0h2JaxsC3zXSxWCu%2Fy8uoUdw2j4iK%2F%2B1qGere7zNzS8NIL1uwi6ofwrms2VWN8hFJI%2BL9A4uGWAVRyUrnsLJFeMTDgYoKDEP9EbtX5%2FJOkm8g5umlTEU1PS5dNCl87DyXmPuhuQRMNhimJ3bvXkwNJ3eDRlGzQKzywrbickx1i9lUtCouYsRcpWicUaualGQ0TgFPcdnAeoCtf6pK8LsNQakXC6hhkkJPkvSUePr8%2BjBw0DhqS%2BhyF6%2FifvF7LcUNF%2B%2FSQYUbWpQ9ZkxxYFI%2B7t%2FFtFCXLTuPwi5dKM3RKzuNw2elxSXhVsJsNsA%2F3etQwiD7TRISpODfvbjuk5hvDZX8NoHD9p1U92uxib2PVMKo6NLV3E2m%2Fu1AT3mOG4bUvNMMfLHBqo0BsnwX7sQaMM6OisoGOqUBqajGGY%2FAHKbCXhdR8aSLdnJfRNvE31nEaNAdepMwxoceJkazTT4h27CMZ08z%2BMLZT%2BffHIbFx0JtZIrcL0ABuep5rwazNweqAXW8vaPtLf0Ivudfnul11V%2FxzLV7ZAuua2BJJcE52AW7Is%2BmDGrbk5VD25mqJhz99jIXNiVAU4v8BvN6Bsnsud72p32uABw3kikwgMbqMHdSNZWKHrxHqojibJj8&X-Amz-Signature=db81764867bc023a83d8671421e5a6b1334d76cb02df99524b48188ed27fa6ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFKL4JIU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiPq2EjukDpZTlxSk3GYIvfBuWMX3D7fTQXEydgARAIwIgDFxz0iZIFbMW81XmennHfBhWe6QAz8TrJfm9VJdqvnMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHudaDH2P57zSN66aSrcAyqQfYx4%2FN5z7Dgh%2FUt6jO4KJoxGeLI7wSLyO0jBU6n1SZA2W7hNNdz0EI19AdMVvfN%2FwwUSifj6CoY36v%2BplTqdmWroaSjkJpTGpXP8AN1LVbPt8cjKT4OHR6KMXY9fKw3Q%2BU9egWo5DOIXTy7TVLiNQ5t9K%2B%2Fbz4hibE0CGg3q56I7bVn98%2FCYTShS1G97g1daqf6YVAkMvoGeA1kor%2FGSPPDkDSgoJQUU8ZB0h2JaxsC3zXSxWCu%2Fy8uoUdw2j4iK%2F%2B1qGere7zNzS8NIL1uwi6ofwrms2VWN8hFJI%2BL9A4uGWAVRyUrnsLJFeMTDgYoKDEP9EbtX5%2FJOkm8g5umlTEU1PS5dNCl87DyXmPuhuQRMNhimJ3bvXkwNJ3eDRlGzQKzywrbickx1i9lUtCouYsRcpWicUaualGQ0TgFPcdnAeoCtf6pK8LsNQakXC6hhkkJPkvSUePr8%2BjBw0DhqS%2BhyF6%2FifvF7LcUNF%2B%2FSQYUbWpQ9ZkxxYFI%2B7t%2FFtFCXLTuPwi5dKM3RKzuNw2elxSXhVsJsNsA%2F3etQwiD7TRISpODfvbjuk5hvDZX8NoHD9p1U92uxib2PVMKo6NLV3E2m%2Fu1AT3mOG4bUvNMMfLHBqo0BsnwX7sQaMM6OisoGOqUBqajGGY%2FAHKbCXhdR8aSLdnJfRNvE31nEaNAdepMwxoceJkazTT4h27CMZ08z%2BMLZT%2BffHIbFx0JtZIrcL0ABuep5rwazNweqAXW8vaPtLf0Ivudfnul11V%2FxzLV7ZAuua2BJJcE52AW7Is%2BmDGrbk5VD25mqJhz99jIXNiVAU4v8BvN6Bsnsud72p32uABw3kikwgMbqMHdSNZWKHrxHqojibJj8&X-Amz-Signature=c858b5b541c6988281562a793b6828965c7f0a31fa15a62832be99afdf846cc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

