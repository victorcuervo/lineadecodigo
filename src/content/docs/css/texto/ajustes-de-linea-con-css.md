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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQ7ZUNU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDroVCxmpZ0Sk3IGWso1X5V32otAV8oQRSM%2B%2BELN6gT9wIhAMMtb2S8TrfIbLiJ%2Fdn8MGTHrlXuir22tlrQYn5tiWh1Kv8DCHoQABoMNjM3NDIzMTgzODA1Igwq2JsEcs2qsFrJtjkq3AM3hz8vpeAZrbshYKyp8J0xn1RggbvPwXyT4YqedynKfjbpix3hu6S8oRyWonsL5rJi8SWujesOecuTdEOkLIkwt%2BI2nuQQILyQQfD7gQmQQiI2roBvXW5vwad%2B4PpKUdwcy6vQMCfjHokq9trgkcxb1qGrgTxG9VhucpB%2B3KBAFSiC%2F9ffgogAmY%2Be2t4vvWVvpRjmFc0Q27NBEJZc5YmXg%2B%2FATnuoRFrLB0LJkpc7Hs%2FwH9hTXHOCgUp6F07EPLznKS%2BwrzjKlkScq47xvdYi7LNMXnEBYdkwFW2%2FkZMRHob9cPJkkzmSBn6jrkqn3l42enomca95A3pCX%2B1vF31b7IInMjWCztQQUeWM1gkHSB%2FAtNpBp%2BsJjM6mKDLPFQfojN%2Fe%2FofcED47p%2BCzQrGCwkUrkJU0l7TqmwmIMcYuGCI7L0vrMaoHTPbkQhMhCiyDGQXHZdaiSGFA8jXCayisR2HxRUQmxXcHXoYicwADLtpny28UtAponf6T7CX4nKXrF2nycPnYuWama5HSZqh2LAgqgsT7An3bpSt%2BsW%2BCIkNTrIxuLciKtGMYwLaosSzOleOuNkuCH%2BNFjiCucrnf2YxOaI19RE4dpa43QlnuJpLINq9wVRnU39kXKTCu0onKBjqkAd8el0t5zJUBr9q6u0XxGNK7L%2FoXZViHu1m3mbbnlbu2Vss79TUEUrJOdl7EyzG%2FcWo39xEPqm3P%2BX6jFCQBlrr9iQwqw0eEAqHOIww49meXiBmaEVSfaep1%2B7HV%2BVzb3NH6Wygz5UTQEUAu5pkY81F5BqQFxrZNsYLQQOZIhMwUQQ%2BbB56s2JuDPLVYapDJq1kgUbS1zJK3pSzUrXe3qbyh2DnA&X-Amz-Signature=261864dccb726822921df31a1cc0a9bef759513d0c14eb0337650d3073743721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQ7ZUNU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDroVCxmpZ0Sk3IGWso1X5V32otAV8oQRSM%2B%2BELN6gT9wIhAMMtb2S8TrfIbLiJ%2Fdn8MGTHrlXuir22tlrQYn5tiWh1Kv8DCHoQABoMNjM3NDIzMTgzODA1Igwq2JsEcs2qsFrJtjkq3AM3hz8vpeAZrbshYKyp8J0xn1RggbvPwXyT4YqedynKfjbpix3hu6S8oRyWonsL5rJi8SWujesOecuTdEOkLIkwt%2BI2nuQQILyQQfD7gQmQQiI2roBvXW5vwad%2B4PpKUdwcy6vQMCfjHokq9trgkcxb1qGrgTxG9VhucpB%2B3KBAFSiC%2F9ffgogAmY%2Be2t4vvWVvpRjmFc0Q27NBEJZc5YmXg%2B%2FATnuoRFrLB0LJkpc7Hs%2FwH9hTXHOCgUp6F07EPLznKS%2BwrzjKlkScq47xvdYi7LNMXnEBYdkwFW2%2FkZMRHob9cPJkkzmSBn6jrkqn3l42enomca95A3pCX%2B1vF31b7IInMjWCztQQUeWM1gkHSB%2FAtNpBp%2BsJjM6mKDLPFQfojN%2Fe%2FofcED47p%2BCzQrGCwkUrkJU0l7TqmwmIMcYuGCI7L0vrMaoHTPbkQhMhCiyDGQXHZdaiSGFA8jXCayisR2HxRUQmxXcHXoYicwADLtpny28UtAponf6T7CX4nKXrF2nycPnYuWama5HSZqh2LAgqgsT7An3bpSt%2BsW%2BCIkNTrIxuLciKtGMYwLaosSzOleOuNkuCH%2BNFjiCucrnf2YxOaI19RE4dpa43QlnuJpLINq9wVRnU39kXKTCu0onKBjqkAd8el0t5zJUBr9q6u0XxGNK7L%2FoXZViHu1m3mbbnlbu2Vss79TUEUrJOdl7EyzG%2FcWo39xEPqm3P%2BX6jFCQBlrr9iQwqw0eEAqHOIww49meXiBmaEVSfaep1%2B7HV%2BVzb3NH6Wygz5UTQEUAu5pkY81F5BqQFxrZNsYLQQOZIhMwUQQ%2BbB56s2JuDPLVYapDJq1kgUbS1zJK3pSzUrXe3qbyh2DnA&X-Amz-Signature=62b0342e9180384a78f34707076a9379c5453f5b9e543a79c52312e2a6d23753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

