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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UODSJTXZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T160017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5pvNwz%2BB4cvHovZYWcejCX%2Bk1jS6KQbtTraFWbVCHxAiEAn%2FnEyJxygYFMTvuvRNxj7jfzbdctNYgrv6NiBUSQDUYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd5eN3xC5z9uh7nWyrcAymLXxDyuTTWE2lCtJPBwPFdMWUFsr1WpWwfN3v9k5EOXDzxy3cnh8%2F6GW5h4iMuAD0GuXAxlj0rVBK5%2FwUQfJB2cYtNbLPQ83pm1RJeFpyoXvU%2Bb3EL1CbWKaSqrOZctvXOU4iSQaUanzIOec9G6NYNeMZ1GUFUaXzhG1gL%2F26%2F45oOoOSmo8pqshpv0RbuIYh72AlgMQJ35dfYH1TX2ARLLr5UgEe7vDAhcpEp1gWucM3pLnpQwGpDyupxOLXcYwq66rywxve0FZEUFxktXDmhUPigCjhe8RmcvzL9S0WvReUuPxJV3msPo52BOywlX1n8%2FWWLo5AaJY%2FNEbS%2F%2Fy205VT96XNf00TZsEwUV1oWOtgpNQ63KFcAx64%2BVyHTLF6DL%2FtXibEx%2BqvQwmtfjdLzbnhmd9UwQrcSGfYdJhX2wsVLoKWoc%2B5oattJj4RKzv2dIbgHfITMg4vCVKOv79D0l7DpHDh0pmov8jdQsy%2BWRG6rBHzA7w1NgNJETY%2B2ssQBXEZZ6%2FwdfkrmT55v10%2FpSag5xtVDj1LBO6s1JdLI8SKW4Yi9UKPb16hw6xP3JTtAZtDa04YiZgiGoZmZSFrkpQgN4U1wcEwfP21wlxzF9lttrvEtVSAp6Eb2MKagi8oGOqUBrMC5pnshoLnQY2aPBvlIWfxep8h86RGKS8nWQN%2BO9DpzI3Hekktb%2FKRN%2FGfOkl%2FNoRpckjaMjU0IR0g13V0Ve3QSMTp4Taur6h1hiHY%2BmOYlvIgcFOlK%2FULbcrqC6h7w%2FswNYM5QM9%2BNNH%2BguUW1AXKPE6K3gEK3wryoo%2FBzHu%2F809zTtu%2FZpBGt4ddSJaunqdkOL6rLksYwGdVVZ4MOle9Pp5V%2F&X-Amz-Signature=061ff82f2e8cd214a784e55a951139c97814e1d1efdb5ff7ac4ecb330bdac284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UODSJTXZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T160017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5pvNwz%2BB4cvHovZYWcejCX%2Bk1jS6KQbtTraFWbVCHxAiEAn%2FnEyJxygYFMTvuvRNxj7jfzbdctNYgrv6NiBUSQDUYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd5eN3xC5z9uh7nWyrcAymLXxDyuTTWE2lCtJPBwPFdMWUFsr1WpWwfN3v9k5EOXDzxy3cnh8%2F6GW5h4iMuAD0GuXAxlj0rVBK5%2FwUQfJB2cYtNbLPQ83pm1RJeFpyoXvU%2Bb3EL1CbWKaSqrOZctvXOU4iSQaUanzIOec9G6NYNeMZ1GUFUaXzhG1gL%2F26%2F45oOoOSmo8pqshpv0RbuIYh72AlgMQJ35dfYH1TX2ARLLr5UgEe7vDAhcpEp1gWucM3pLnpQwGpDyupxOLXcYwq66rywxve0FZEUFxktXDmhUPigCjhe8RmcvzL9S0WvReUuPxJV3msPo52BOywlX1n8%2FWWLo5AaJY%2FNEbS%2F%2Fy205VT96XNf00TZsEwUV1oWOtgpNQ63KFcAx64%2BVyHTLF6DL%2FtXibEx%2BqvQwmtfjdLzbnhmd9UwQrcSGfYdJhX2wsVLoKWoc%2B5oattJj4RKzv2dIbgHfITMg4vCVKOv79D0l7DpHDh0pmov8jdQsy%2BWRG6rBHzA7w1NgNJETY%2B2ssQBXEZZ6%2FwdfkrmT55v10%2FpSag5xtVDj1LBO6s1JdLI8SKW4Yi9UKPb16hw6xP3JTtAZtDa04YiZgiGoZmZSFrkpQgN4U1wcEwfP21wlxzF9lttrvEtVSAp6Eb2MKagi8oGOqUBrMC5pnshoLnQY2aPBvlIWfxep8h86RGKS8nWQN%2BO9DpzI3Hekktb%2FKRN%2FGfOkl%2FNoRpckjaMjU0IR0g13V0Ve3QSMTp4Taur6h1hiHY%2BmOYlvIgcFOlK%2FULbcrqC6h7w%2FswNYM5QM9%2BNNH%2BguUW1AXKPE6K3gEK3wryoo%2FBzHu%2F809zTtu%2FZpBGt4ddSJaunqdkOL6rLksYwGdVVZ4MOle9Pp5V%2F&X-Amz-Signature=746cbfabb1900cd847823dc36feed2b5105b7881d38fa14d71af79e4c6a9d0e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

