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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RNCBS42%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxa23Wvq%2FMQBJkBOZ8Tli1gtlf51woh6nbOplssM0rNwIgeykKRarxWoNSTVGv6R7krSecbd%2FMeSKhzCOguIpwtGkq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNCsIUR1hId43Mpl2yrcAz3QRfJgZUlSFGS%2BNnmOfU%2BF04UoO%2FmjRVIbNzPyeMxj66wXubbqYWRHUgkZi2w2JauK0pxB6TEIOxlYvHtpC7bxwHUTWQTx%2BTmU8Bi6%2BJtJJqwR05xra%2BgGQTP%2F68SHtLVWz89jwQL%2B2ly%2FgRHtellWkEoty0Tncds6DqKL9DV0nbv5TZYGpZAc4Mt6LbDLnOreOZC3o5%2BFEI1xECwI%2FyVaLDdd0dzPy91Xif8H8oMYhzvS6%2FJtGw5PZt6GmBx2Ea%2BJukaK23Jk8A1Itmr9ohu2ZLxpge5LP%2BX6hNtGtc13mSZAnPz%2BMpw3P%2BeWvnLKVNZqJ7u26yiHVYdJ%2FaCFxCKw0xCDweRlxb1M17tKFy0v8LorW%2BMjidf%2BLHgau4SBCAhQ67IyIUIsukm%2BEDHWZiNfFCuKP53%2BRW8FP9CHZbaBTRaldmM0nmimzS1YbUSi55oZFFdBGoPbJBVh78%2Bxo2dkBdaIqd0STmQ3bBi4jKdJCOmLdn9qN4eacbd%2FSpuQGanKEjZz%2F7CXu2u7uVvBuLhgiBEpd4piToGAq%2BcVb89%2F95p660gbsg9Xyab2GpmaZ3kZ0sBmPQ00KfvAVPOCdN9V%2BZCJhUVGpiY6HILXdFuOtd82AjjXMnGSGxPKMP3piMoGOqUBkmbY0aJZ9kRw6WfD8Kdk6OD6mtIbAvbOepV8TkyGSomKDjU9jOoBp%2F129C3y5x%2B1VCHrwtfWiB%2BBQXQ3le0xHUWskbXmtR0TVgASZM%2BBCrQpirwIWOoeXtbkwTHiROqL3%2BmJ4QF78EpqKXVoMbuAC5NZNrXqC06iBe1vYPsUhSbQOsH6l3ZFFMRE9B9g%2BDgk1vL%2FcFYpqONnnCZqGYudTI4%2Frxuk&X-Amz-Signature=f5d639346a0c8815a7c77cdbbb301d0d693e5e48d692b5e9c642dee1b0f8273e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RNCBS42%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxa23Wvq%2FMQBJkBOZ8Tli1gtlf51woh6nbOplssM0rNwIgeykKRarxWoNSTVGv6R7krSecbd%2FMeSKhzCOguIpwtGkq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNCsIUR1hId43Mpl2yrcAz3QRfJgZUlSFGS%2BNnmOfU%2BF04UoO%2FmjRVIbNzPyeMxj66wXubbqYWRHUgkZi2w2JauK0pxB6TEIOxlYvHtpC7bxwHUTWQTx%2BTmU8Bi6%2BJtJJqwR05xra%2BgGQTP%2F68SHtLVWz89jwQL%2B2ly%2FgRHtellWkEoty0Tncds6DqKL9DV0nbv5TZYGpZAc4Mt6LbDLnOreOZC3o5%2BFEI1xECwI%2FyVaLDdd0dzPy91Xif8H8oMYhzvS6%2FJtGw5PZt6GmBx2Ea%2BJukaK23Jk8A1Itmr9ohu2ZLxpge5LP%2BX6hNtGtc13mSZAnPz%2BMpw3P%2BeWvnLKVNZqJ7u26yiHVYdJ%2FaCFxCKw0xCDweRlxb1M17tKFy0v8LorW%2BMjidf%2BLHgau4SBCAhQ67IyIUIsukm%2BEDHWZiNfFCuKP53%2BRW8FP9CHZbaBTRaldmM0nmimzS1YbUSi55oZFFdBGoPbJBVh78%2Bxo2dkBdaIqd0STmQ3bBi4jKdJCOmLdn9qN4eacbd%2FSpuQGanKEjZz%2F7CXu2u7uVvBuLhgiBEpd4piToGAq%2BcVb89%2F95p660gbsg9Xyab2GpmaZ3kZ0sBmPQ00KfvAVPOCdN9V%2BZCJhUVGpiY6HILXdFuOtd82AjjXMnGSGxPKMP3piMoGOqUBkmbY0aJZ9kRw6WfD8Kdk6OD6mtIbAvbOepV8TkyGSomKDjU9jOoBp%2F129C3y5x%2B1VCHrwtfWiB%2BBQXQ3le0xHUWskbXmtR0TVgASZM%2BBCrQpirwIWOoeXtbkwTHiROqL3%2BmJ4QF78EpqKXVoMbuAC5NZNrXqC06iBe1vYPsUhSbQOsH6l3ZFFMRE9B9g%2BDgk1vL%2FcFYpqONnnCZqGYudTI4%2Frxuk&X-Amz-Signature=bd965634da3f1075125b53e56443a9a4bd3870dc31a3289439505fa2147e8026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

