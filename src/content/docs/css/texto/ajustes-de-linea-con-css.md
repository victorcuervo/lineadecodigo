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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGETRVY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFs46fNYJKmVc1ua0Sxjg2H1aCPJaQNDU%2BFAyhEk1DzQIgTQhXKim%2F6gxPbxyzuUpLOIuxlUfQEIya6CpfNuUQYW0qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGi4Jy5aREQIR%2B1CSrcA3QizTdhqU7mKccgSouhYuyLTE5qRVX30R%2FtHIQX4RrpWVk81OkuHG8FWiUXkp5qRKhGfR3b1nuFdkmQBr%2Fx7GFr%2FnN9h%2BdhwyquaaJVEpsfuzNkzJOMXmvqUdjpnGxMmU50PhxlVrxh6yt1AaYdMke%2BFcgs8U8YNWUvEh68Y76m5z%2B2bIjBkiezDKk7picZhxcjJrdn3OoAJfolvoa2k41UpYUHGLUltgiLNdHLazHLjsRVjg8T6bxJN1EdMuYT3BM09eWBCNc41dSsF%2BZY02%2BeY4zSNHv1cbipRjLIvfPXi2Z0DCgVZgMPNeTdbKNHHIbBSkGROs7p8wvDDTeZeYbixMIM2dAp%2BOkaL1MoYMvcVY6Tdjy%2B%2F0tdoapAHoB8bZxxYvJwZUajt7rXGtPuf2%2Bmh%2BaLObUOHQS6pI3D4GoeOOtUt8Ukb716HPe6LQIwhUvQXYDljnNbHYiU93F1AzUmJlI56Hj%2B2684Xp7VO79VDo5vGozzuo5i8bTalhu0oHWTbplpkw2bTet0CSR6P7RcxKCqKPQtXoFOwJy3R8CP6TWvI2qy937O5bWq5DL8QIbCfh9vXNE94a1PMdh%2F8Hn3iKRaoBWiLQNM4i9T6z9bwfnnl2vGjW4FE5szMM6KjMoGOqUBq0k5LNS9pZTOkvzugFGhuV5nf%2B4jurf%2BFw7avUqd82ZrEdtuqcJ3Na%2Fsol77AqpWDb1QgiIDRAPcShtb%2FuGdgp4Y%2BAwfU9Ltux1YMQx3tZDuil4sPXx0p6kYIsNZif9V%2BHWFBiqTMbkSfaOcWXSbTVSElJiGdbej5x4DkGm3hUUW%2BagdybL67VErK1tz6GkYyqGad8AyQSohFCVW4VljXATusdCA&X-Amz-Signature=516439ec5b2396d89ae7c3f0e9e09e5bbb15c0c6c337bb661528d804aebb2b80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGETRVY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFs46fNYJKmVc1ua0Sxjg2H1aCPJaQNDU%2BFAyhEk1DzQIgTQhXKim%2F6gxPbxyzuUpLOIuxlUfQEIya6CpfNuUQYW0qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGi4Jy5aREQIR%2B1CSrcA3QizTdhqU7mKccgSouhYuyLTE5qRVX30R%2FtHIQX4RrpWVk81OkuHG8FWiUXkp5qRKhGfR3b1nuFdkmQBr%2Fx7GFr%2FnN9h%2BdhwyquaaJVEpsfuzNkzJOMXmvqUdjpnGxMmU50PhxlVrxh6yt1AaYdMke%2BFcgs8U8YNWUvEh68Y76m5z%2B2bIjBkiezDKk7picZhxcjJrdn3OoAJfolvoa2k41UpYUHGLUltgiLNdHLazHLjsRVjg8T6bxJN1EdMuYT3BM09eWBCNc41dSsF%2BZY02%2BeY4zSNHv1cbipRjLIvfPXi2Z0DCgVZgMPNeTdbKNHHIbBSkGROs7p8wvDDTeZeYbixMIM2dAp%2BOkaL1MoYMvcVY6Tdjy%2B%2F0tdoapAHoB8bZxxYvJwZUajt7rXGtPuf2%2Bmh%2BaLObUOHQS6pI3D4GoeOOtUt8Ukb716HPe6LQIwhUvQXYDljnNbHYiU93F1AzUmJlI56Hj%2B2684Xp7VO79VDo5vGozzuo5i8bTalhu0oHWTbplpkw2bTet0CSR6P7RcxKCqKPQtXoFOwJy3R8CP6TWvI2qy937O5bWq5DL8QIbCfh9vXNE94a1PMdh%2F8Hn3iKRaoBWiLQNM4i9T6z9bwfnnl2vGjW4FE5szMM6KjMoGOqUBq0k5LNS9pZTOkvzugFGhuV5nf%2B4jurf%2BFw7avUqd82ZrEdtuqcJ3Na%2Fsol77AqpWDb1QgiIDRAPcShtb%2FuGdgp4Y%2BAwfU9Ltux1YMQx3tZDuil4sPXx0p6kYIsNZif9V%2BHWFBiqTMbkSfaOcWXSbTVSElJiGdbej5x4DkGm3hUUW%2BagdybL67VErK1tz6GkYyqGad8AyQSohFCVW4VljXATusdCA&X-Amz-Signature=b3ab4fbafc991862d08fcf65dd27588b229e7c4ebea9eafcc1168c8bed7585c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

