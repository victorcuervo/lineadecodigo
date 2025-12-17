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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654BTBMAK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnp6l1BG3oxu3Otg4WETwmu%2BIR2RE9dFp2MlBQEmpgfAIhANP971cf2T1eppea1mQUXEvugt4CUXOfY5Cn1Wlm2d1NKv8DCHwQABoMNjM3NDIzMTgzODA1IgzTfZyhb4u3ngRpzaQq3APc5LT3HPbUNed6fThliYee3Q3ZXKB1xq5ulnZctjXtft2xZAlfK4ibe0lXk0tKt%2FzJ1IyrQeDl6AxOMg%2BhudTha%2Fk2KfaTtMfm9KgKnohyCfKG980P5ouNxsNZNUK%2FvgyqtW8cHDwVZIxUlJZ4bVECfw1vzbDtW8iqZgoSOvXjvOg%2FdW1bQdgywM11k8fphr0vAg%2Fau%2BVKaiOtS0KAF7x2QcESXIxTQdZ4N5O%2FL%2Fc3iQpLtUXtyO8JB4gkhXaQ%2BDab0eBevhlXd5uZsxgbHysKwf1nHMGcj2Wh87GxMaFzvtzVlQpce6FHIlfL29AXWLzrhTlq0FiLmQr8Tn3Z6SAQm%2F9j1ykN4UDCQ6jap6ksg7GGmMfbZLaO37X5oX6PjeqHTzmYu9rCzKqLaotvnZl28iiNIaKi1jxZBXtV9JXFZQwigRPBmlwHv2DACUjvg6p%2BgBC%2Fwaj3iYkhGJtg2QlSXbD6ap2xk5%2FPajBsaYssV9%2F73UPpA13IQ3MQzj68krrDVga%2BsMRzs0CMdEivOiy%2ByPCRPy9zbnxZqtPmnu5UH6Q4pOcmE0RoKTmeyZLaUXA57DY5fQIB%2BQ4BwIutYDg83i91Ly4J4sbRTz1B8oH9X6S7s8dv5LD3qe6xBTCNj4rKBjqkAQ3yknxKJOrQWd9rWy6JqUswkXFLrEKneIYej%2FK54tsciKJIrbh7W5SP9znvQysilewdgihgZv%2FmZiyeKNh7dPn66KtDvuxX0HxLiMkHAZXXIAC79BhgvuMfyuKktBHtkvjWbQ6%2FViiVk90Z1YM4ZU4eTvgzeRgI7Jq%2BEGi%2FVjxVQw0nN%2BNFak2TjieZnkR0RvCZNscaXIMh9EHbv7yPSutnuAQz&X-Amz-Signature=d5589927a7f19e37afabe8b299c60fcf8b659e50ce7172466bdd985f14ba648f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654BTBMAK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnp6l1BG3oxu3Otg4WETwmu%2BIR2RE9dFp2MlBQEmpgfAIhANP971cf2T1eppea1mQUXEvugt4CUXOfY5Cn1Wlm2d1NKv8DCHwQABoMNjM3NDIzMTgzODA1IgzTfZyhb4u3ngRpzaQq3APc5LT3HPbUNed6fThliYee3Q3ZXKB1xq5ulnZctjXtft2xZAlfK4ibe0lXk0tKt%2FzJ1IyrQeDl6AxOMg%2BhudTha%2Fk2KfaTtMfm9KgKnohyCfKG980P5ouNxsNZNUK%2FvgyqtW8cHDwVZIxUlJZ4bVECfw1vzbDtW8iqZgoSOvXjvOg%2FdW1bQdgywM11k8fphr0vAg%2Fau%2BVKaiOtS0KAF7x2QcESXIxTQdZ4N5O%2FL%2Fc3iQpLtUXtyO8JB4gkhXaQ%2BDab0eBevhlXd5uZsxgbHysKwf1nHMGcj2Wh87GxMaFzvtzVlQpce6FHIlfL29AXWLzrhTlq0FiLmQr8Tn3Z6SAQm%2F9j1ykN4UDCQ6jap6ksg7GGmMfbZLaO37X5oX6PjeqHTzmYu9rCzKqLaotvnZl28iiNIaKi1jxZBXtV9JXFZQwigRPBmlwHv2DACUjvg6p%2BgBC%2Fwaj3iYkhGJtg2QlSXbD6ap2xk5%2FPajBsaYssV9%2F73UPpA13IQ3MQzj68krrDVga%2BsMRzs0CMdEivOiy%2ByPCRPy9zbnxZqtPmnu5UH6Q4pOcmE0RoKTmeyZLaUXA57DY5fQIB%2BQ4BwIutYDg83i91Ly4J4sbRTz1B8oH9X6S7s8dv5LD3qe6xBTCNj4rKBjqkAQ3yknxKJOrQWd9rWy6JqUswkXFLrEKneIYej%2FK54tsciKJIrbh7W5SP9znvQysilewdgihgZv%2FmZiyeKNh7dPn66KtDvuxX0HxLiMkHAZXXIAC79BhgvuMfyuKktBHtkvjWbQ6%2FViiVk90Z1YM4ZU4eTvgzeRgI7Jq%2BEGi%2FVjxVQw0nN%2BNFak2TjieZnkR0RvCZNscaXIMh9EHbv7yPSutnuAQz&X-Amz-Signature=b9cd33d4da94c436adad69b7fd04c2936c98560cf6bb8d3feca44d73762952c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

