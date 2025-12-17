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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPZFIWD3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUNVKlCvhwocbB1pVcnNV4f28OtUFb4RdtwiDJE4t9FgIgWpfw3m271D6RqjbXaUmubpWjRfSRms315Fg%2FWxTsKtIqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0%2FDIX0%2BqEXw909USrcA4hEvolN7eR8EGFmJqYylkJgdp4j1SCt0Zo%2FnDUlYSaZ5xY8KxA8XrymB4P%2FC%2FY3DFgbvcZWEm3zc8o2TDjPFUhccdEf6A59yfAYl%2BxR%2FktB24TUHlDptvYb66kOOa4Xa%2FOznYB2dMURCwvBdHNVfK0P%2BGDgEwjL0zhkXyqQPdO295cMKBaCB3eN1NH02eLnxpfe%2FgsHSdh%2Bqx1ro6iehXHfNA0UlgZg%2BESS0A3kLqlZHQn1bGquBoUhJsZ0D%2FgviyD3tUnDmHDMp8BNDWhL%2BLdzx8%2BPd%2BLQ9Zs0uGu6fYrxYVKvYtpX3TvOLlH4BbaFdPP8EAJSEkySttjiixGLFXq1pgH%2Fbu2mTqi1q0MaEKtFHdep8sGHkrGX%2FCngGutki%2BFpUVlnm6VF7yPLiCmJivIe1zgh%2FENqYklCC7Rf8bwofS2WHG5tnzjHrzlSzxGzoCbKyZQOo3NAGZS2Qzmg1p29Gs67eYXzA98qpx64297maL0Qs7VO%2FNMScvGHC2j9Dkn%2FiRbuc%2Bso0%2FxoiolVla5WInJe42n%2FR3UPA3kzz1C%2F7MUWxmXm3oWJUyFd7S9pw3yaRbKju8ZDh3L2wtd9hqQWOh2EI2QS2an017wK7Tv3UisuMvMKatK764zHMLKMjMoGOqUBxZ71%2BagUiBjQS9Of6uiEA37vCNJe%2B3QNYkXJPKmLrpZIT97rMpd8MPho9EUZ2%2FgugPAKgAOhmsQu5WgH0pWoy6gtvC2tYTh64jjNkAocz2AjKi4GIXCxsZcnu3S3RCPvOePDCT%2FSSnI6PerZvjleNUcOR1s4iHXYs3%2BwtdoaDLRVHi9gBR0%2F9dO48d8hQl4xpOA1J9SLsJsUDIbyyQqa7z0nPr4V&X-Amz-Signature=4fe51296cca5e8d7ab8660cb6d9d77e83f77c07590638361dba4d1d4d3dbda3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPZFIWD3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUNVKlCvhwocbB1pVcnNV4f28OtUFb4RdtwiDJE4t9FgIgWpfw3m271D6RqjbXaUmubpWjRfSRms315Fg%2FWxTsKtIqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0%2FDIX0%2BqEXw909USrcA4hEvolN7eR8EGFmJqYylkJgdp4j1SCt0Zo%2FnDUlYSaZ5xY8KxA8XrymB4P%2FC%2FY3DFgbvcZWEm3zc8o2TDjPFUhccdEf6A59yfAYl%2BxR%2FktB24TUHlDptvYb66kOOa4Xa%2FOznYB2dMURCwvBdHNVfK0P%2BGDgEwjL0zhkXyqQPdO295cMKBaCB3eN1NH02eLnxpfe%2FgsHSdh%2Bqx1ro6iehXHfNA0UlgZg%2BESS0A3kLqlZHQn1bGquBoUhJsZ0D%2FgviyD3tUnDmHDMp8BNDWhL%2BLdzx8%2BPd%2BLQ9Zs0uGu6fYrxYVKvYtpX3TvOLlH4BbaFdPP8EAJSEkySttjiixGLFXq1pgH%2Fbu2mTqi1q0MaEKtFHdep8sGHkrGX%2FCngGutki%2BFpUVlnm6VF7yPLiCmJivIe1zgh%2FENqYklCC7Rf8bwofS2WHG5tnzjHrzlSzxGzoCbKyZQOo3NAGZS2Qzmg1p29Gs67eYXzA98qpx64297maL0Qs7VO%2FNMScvGHC2j9Dkn%2FiRbuc%2Bso0%2FxoiolVla5WInJe42n%2FR3UPA3kzz1C%2F7MUWxmXm3oWJUyFd7S9pw3yaRbKju8ZDh3L2wtd9hqQWOh2EI2QS2an017wK7Tv3UisuMvMKatK764zHMLKMjMoGOqUBxZ71%2BagUiBjQS9Of6uiEA37vCNJe%2B3QNYkXJPKmLrpZIT97rMpd8MPho9EUZ2%2FgugPAKgAOhmsQu5WgH0pWoy6gtvC2tYTh64jjNkAocz2AjKi4GIXCxsZcnu3S3RCPvOePDCT%2FSSnI6PerZvjleNUcOR1s4iHXYs3%2BwtdoaDLRVHi9gBR0%2F9dO48d8hQl4xpOA1J9SLsJsUDIbyyQqa7z0nPr4V&X-Amz-Signature=6c982176e11515d344ce13244436a674d6778fd8f4f9e568abde687871cc82f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

