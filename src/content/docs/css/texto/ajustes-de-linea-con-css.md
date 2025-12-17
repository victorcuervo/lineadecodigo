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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXCZ7LOT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe2fdHl%2BBE7M7K%2BuMxOTFD3i1vGvjSn5Z5KMr3YWoNkAIhAOcxSCuDhGAOaL%2Bs2dcBKkQafCA056%2F41MEh2iiVCC4SKv8DCHkQABoMNjM3NDIzMTgzODA1Igx26Z6Lnhm0gNZlDiwq3ANvHXbd4b3f5mIXPUkMNyQwJGViLE9uufLPu6Lf3BHFltEpKZcscQDjJif0NL%2BqQjoHJCJil7Y8Ettt52G5hICedh1qswlWuu2tfmFFa%2Fbq50C5go9rYfGYZL7VCNQM4jrJMop8Hgq41Hk8UkzuTI4rshrl2MRuVzEt7Z13Dx9df%2Fg5Xl5M%2BFzIT%2Bq3fXztHVpdOLRX2WecAQNwPhQgVdR6Q%2FK2ZtU%2FZot7zDi8%2ByOHRVXTLxoLFaszQcMoiKQf0UuQiv5kSk0%2F34HCNCEVw2ziAbYyqJe85uV%2Fb6DFx8JKohzFPed5a0P1J9e6nHSwQPqsdhzXTMvEqNRZ1M2qSBu69IZkYWnzHM%2Br6TEBry20ktCd8jad%2FQjrx0ZeSneJQAoMmjGoQRN6kcHQM%2FPd5ziPCjTPRrkTWcC5BBmwseE4NQixxHhabixQqowt7cmpVrXvCgm23rpGeRtUTrAJfZhMXxhw6oLPJBIKPfn9Y9tKXurMpAwi8sBM87GTC44RaFiA6D2g5CQLDtcAq8YGxnscl1GJ9eBu2WJOXVra839NV14rhSYTQiKWiWlL3m4FCOs9%2F0DQA8KyGt%2FlGUmBvlNPvL1%2FidWnQGX%2Fq1vM%2FXbcH%2BNsetriTDFityjJXjCYt4nKBjqkAc%2F9hBnJ3nI4T19uTnXDqD4dV10g0uFwae%2BeqH%2Ff3n8opYPZxvzH3xeHWXfqVSrAgPCv8VPO%2BPGN8K3iWD769PzRgc80MSRs%2B91beIY6ComCD63o00RnP9JS2IUfzI0iOET4nLV5yoz7LB5EJ5culJXTd0o7RPW7%2FeJ5pFl960HhNF8MWTP9FikJwBeBNB96bZ5tHrJTZIcVXBtKHn7LhckEVpib&X-Amz-Signature=0d3b3f8d535ce521de71677d7a01b606ed952ba4934e52fb891fbad006226a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXCZ7LOT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe2fdHl%2BBE7M7K%2BuMxOTFD3i1vGvjSn5Z5KMr3YWoNkAIhAOcxSCuDhGAOaL%2Bs2dcBKkQafCA056%2F41MEh2iiVCC4SKv8DCHkQABoMNjM3NDIzMTgzODA1Igx26Z6Lnhm0gNZlDiwq3ANvHXbd4b3f5mIXPUkMNyQwJGViLE9uufLPu6Lf3BHFltEpKZcscQDjJif0NL%2BqQjoHJCJil7Y8Ettt52G5hICedh1qswlWuu2tfmFFa%2Fbq50C5go9rYfGYZL7VCNQM4jrJMop8Hgq41Hk8UkzuTI4rshrl2MRuVzEt7Z13Dx9df%2Fg5Xl5M%2BFzIT%2Bq3fXztHVpdOLRX2WecAQNwPhQgVdR6Q%2FK2ZtU%2FZot7zDi8%2ByOHRVXTLxoLFaszQcMoiKQf0UuQiv5kSk0%2F34HCNCEVw2ziAbYyqJe85uV%2Fb6DFx8JKohzFPed5a0P1J9e6nHSwQPqsdhzXTMvEqNRZ1M2qSBu69IZkYWnzHM%2Br6TEBry20ktCd8jad%2FQjrx0ZeSneJQAoMmjGoQRN6kcHQM%2FPd5ziPCjTPRrkTWcC5BBmwseE4NQixxHhabixQqowt7cmpVrXvCgm23rpGeRtUTrAJfZhMXxhw6oLPJBIKPfn9Y9tKXurMpAwi8sBM87GTC44RaFiA6D2g5CQLDtcAq8YGxnscl1GJ9eBu2WJOXVra839NV14rhSYTQiKWiWlL3m4FCOs9%2F0DQA8KyGt%2FlGUmBvlNPvL1%2FidWnQGX%2Fq1vM%2FXbcH%2BNsetriTDFityjJXjCYt4nKBjqkAc%2F9hBnJ3nI4T19uTnXDqD4dV10g0uFwae%2BeqH%2Ff3n8opYPZxvzH3xeHWXfqVSrAgPCv8VPO%2BPGN8K3iWD769PzRgc80MSRs%2B91beIY6ComCD63o00RnP9JS2IUfzI0iOET4nLV5yoz7LB5EJ5culJXTd0o7RPW7%2FeJ5pFl960HhNF8MWTP9FikJwBeBNB96bZ5tHrJTZIcVXBtKHn7LhckEVpib&X-Amz-Signature=32f4622be4bebcf8e0250185cfbf912bd0b874bfcfb4e42a4341446d82eb5ed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

